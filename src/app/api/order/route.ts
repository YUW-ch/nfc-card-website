import { NextResponse } from "next/server";
import { apiBase } from "@/lib/catalog";

// Guest checkout from the card editor. A thin server-side proxy to the
// backend's POST /api/v1/public/orders, which validates the order, prices it,
// reserves stock and returns a Stripe Checkout URL. Status codes are passed
// through: 201 { orderId, number, checkoutUrl }, 400 validation, 409 stock.

// The backend caps the body at roughly 600 KB (the logo travels as a data URL).
// Reject anything clearly larger before forwarding it.
const MAX_BODY_BYTES = 1024 * 1024;

// Per-visitor limit. The backend only sees this server's address (it trusts
// one proxy hop), so its own limit on this route is a global backstop; this
// in-memory limit (per server instance) keeps one visitor from reserving
// stock with a burst of unpaid checkouts.
const WINDOW_MS = 10 * 60_000;
const MAX_ORDERS_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= MAX_ORDERS_PER_WINDOW) {
    recent.set(ip, hits);
    return true;
  }
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) {
    for (const [key, times] of recent) {
      if (times.every((t) => now - t >= WINDOW_MS)) recent.delete(key);
    }
  }
  return false;
}

export async function POST(request: Request) {
  const visitor =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(visitor)) {
    return NextResponse.json(
      { message: "Too many orders in a short time. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  const base = apiBase();
  if (!base) {
    console.error("Order proxy: TAPLINO_API_URL is not set");
    return NextResponse.json({ message: "Ordering is currently unavailable" }, { status: 503 });
  }

  const body = await request.text();
  if (!body) return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  if (body.length > MAX_BODY_BYTES) {
    return NextResponse.json({ message: "Order is too large" }, { status: 413 });
  }
  try {
    JSON.parse(body);
  } catch {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  const headers: Record<string, string> = { "Content-Type": "application/json" };

  let res: Response;
  try {
    res = await fetch(`${base}/api/v1/public/orders`, {
      method: "POST",
      headers,
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(20_000),
    });
  } catch (err) {
    console.error("Order proxy: backend unreachable", err);
    return NextResponse.json({ message: "Could not place your order" }, { status: 502 });
  }

  const text = await res.text();
  let data: unknown = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }

  if (res.status >= 500 || data === null) {
    console.error("Order proxy: backend error", res.status, text.slice(0, 500));
    return NextResponse.json({ message: "Could not place your order" }, { status: 502 });
  }
  return NextResponse.json(data, { status: res.status });
}
