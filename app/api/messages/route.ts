import { NextRequest, NextResponse } from "next/server";
import { sendGuestMessage, type GuestMessage } from "@/lib/resend";

export const runtime = "nodejs";

// Simple in-memory IP rate limit: max 3 submissions per hour.
const WINDOW_MS = 60 * 60 * 1000;
const MAX = 3;
const hits = new Map<string, number[]>();

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (limited(ip)) {
    return NextResponse.json(
      { error: "You've sent a few already — thank you! Please try again later." },
      { status: 429 }
    );
  }

  let body: Partial<GuestMessage>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").toString().trim();
  const favourite = (body.favourite ?? "").toString().trim();
  const blessing = (body.blessing ?? "").toString().trim();

  if (!name || !favourite || !blessing) {
    return NextResponse.json({ error: "Please fill in the required fields." }, { status: 400 });
  }
  if (name.length > 80 || favourite.length > 1500 || blessing.length > 2000) {
    return NextResponse.json({ error: "That message is a little too long." }, { status: 400 });
  }

  const message: GuestMessage = {
    name,
    favourite,
    funny: (body.funny ?? "").toString().trim() || undefined,
    blessing,
    anything: (body.anything ?? "").toString().trim() || undefined,
  };

  try {
    await sendGuestMessage(message);
  } catch (err) {
    console.error("[messages] send failed:", err);
    return NextResponse.json({ error: "We couldn't send that just now. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
