import { createHash } from "node:crypto";
import { academyRsvpSchema } from "@/lib/academy-rsvp-schema";
import { academyLaunch } from "@/lib/academy-launch";

export const runtime = "nodejs";
const requests = new Map<string, { count:number; until:number }>();
function failure(status:number) {
  return Response.json({ success:false, error:"We couldn’t save your RSVP. Please try again." }, { status });
}
export async function POST(request:Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) return failure(415);
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return failure(403);
  // Best-effort instance-local limit; shared/serverless protection belongs at the edge.
  const now = Date.now();
  for (const [key, entry] of requests) if (entry.until <= now) requests.delete(key);
  const key = createHash("sha256").update(request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown").digest("hex");
  const entry = requests.get(key) || { count:0, until:now + 60000 };
  entry.count++;
  if (requests.size > 5000 || entry.count > 10) return failure(429);
  requests.set(key,entry);
  let input:unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return failure(400);
    const chunks:Uint8Array[] = [];
    let length = 0;
    while (true) {
      const { done,value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > 8000) { await reader.cancel(); return failure(413); }
      chunks.push(value);
    }
    input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch { return failure(400); }
  const parsed = academyRsvpSchema.safeParse(input);
  if (!parsed.success) return failure(400);
  const endpoint = process.env.ACADEMY_RSVP_APPS_SCRIPT_URL;
  const secret = process.env.ACADEMY_RSVP_SHARED_SECRET;
  if (!endpoint || !secret) return failure(503);
  try {
    const url = new URL(endpoint);
    if (url.protocol !== "https:" || url.hostname !== "script.google.com" || !/^\/macros\/s\/[^/]+\/exec$/.test(url.pathname)) return failure(503);
    const { attendance,name,email,phone,organisation,designation } = parsed.data;
    const upstream = await fetch(endpoint, {
      method:"POST", headers: { "Content-Type":"application/json" }, cache:"no-store",
      signal:AbortSignal.timeout(20000),
      body:JSON.stringify({ secret, eventId:academyLaunch.id, timestamp:new Date().toISOString(), attendance,name,email,phone,organisation,designation })
    });
    if (!upstream.ok) return failure(502);
    const result = await upstream.json();
    if (result?.success !== true) return failure(502);
    return Response.json({ success:true });
  } catch { return failure(502); }
}
