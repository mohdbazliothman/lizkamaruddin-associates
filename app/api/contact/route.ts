import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().max(254).email(),
  phone: z.string().trim().max(50).optional().default(""),
  company: z.string().trim().min(2).max(200),
  inquiryType: z.string().trim().min(1).max(160),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(0).optional().default("")
}).strict();

const failure = (status: number) =>
  Response.json({ success: false, error: "We couldn't submit your enquiry. Please try again." }, { status });

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) return failure(415);
  let input: unknown;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > 16000) return failure(413);
    input = JSON.parse(raw);
  } catch {
    return failure(400);
  }
  const parsed = schema.safeParse(input);
  if (!parsed.success) return failure(400);

  const endpoint = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!endpoint) return failure(503);
  try {
    const url = new URL(endpoint);
    if (url.protocol !== "https:" || url.hostname !== "script.google.com" ||
        !/^\/macros\/s\/[^/]+\/exec$/.test(url.pathname)) return failure(503);
  } catch {
    return failure(503);
  }

  const { name, email, phone, company, inquiryType, message } = parsed.data;
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, company, inquiryType, message }),
      cache: "no-store",
      redirect: "follow",
      signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) return failure(502);
    const result: unknown = await response.json();
    // Apps Script must explicitly acknowledge the append; HTML/login pages are failures.
    if (typeof result !== "object" || result === null ||
        !("success" in result && result.success === true ||
          "status" in result && result.status === "success") ||
        "success" in result && result.success === false ||
        "error" in result && Boolean(result.error)) return failure(502);
    return Response.json({ success: true });
  } catch {
    return failure(502);
  }
}

