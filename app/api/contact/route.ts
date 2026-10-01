import { z } from "zod";

const cleanString = (max: number, min = 0) =>
  z
    .string()
    .transform((value) =>
      value
        .trim()
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    )
    .pipe(z.string().min(min).max(max));

const contactSchema = z
  .object({
    fullName: cleanString(120, 2),
    organisation: cleanString(160, 2),
    email: cleanString(254, 3).pipe(z.string().email()),
    areaOfInterest: cleanString(160, 1),
    message: cleanString(5000, 10),
    website: z.string().max(0).optional().default("")
  })
  .strict();

const rateWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;
const requestLog = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const entry = requestLog.get(ip);

  if (!entry || entry.expiresAt <= now) {
    requestLog.set(ip, { count: 1, expiresAt: now + rateWindowMs });
    return false;
  }

  entry.count += 1;
  return entry.count > maxRequestsPerWindow;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) {
    return Response.json({ success: false, error: "Request is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ success: false, error: "Please check the submitted fields." }, { status: 400 });
  }

  if (parsed.data.website) {
    return Response.json({ success: false, error: "Submission rejected." }, { status: 400 });
  }

  if (isRateLimited(request)) {
    return Response.json({ success: false, error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json({ success: false, error: "Contact service is not configured." }, { status: 503 });
  }

  const { website: _website, ...submission } = parsed.data;
  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000)
    });

    const responseText = await webhookResponse.text();
    let webhookResult: unknown;
    try {
      webhookResult = JSON.parse(responseText);
    } catch {
      webhookResult = null;
    }

    if (
      !webhookResponse.ok ||
      (typeof webhookResult === "object" &&
        webhookResult !== null &&
        "success" in webhookResult &&
        webhookResult.success === false)
    ) {
      return Response.json({ success: false, error: "Contact service could not accept the enquiry." }, { status: 502 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch {
    return Response.json({ success: false, error: "Contact service is temporarily unavailable." }, { status: 502 });
  }
}
