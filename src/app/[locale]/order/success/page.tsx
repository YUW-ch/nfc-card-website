import type { Metadata } from "next";
import { OrderSuccess, type OrderSummary } from "@/components/OrderSuccess";
import { apiBase } from "@/lib/catalog";
import { slugToLocale } from "@/lib/locale";
import { buildMetadata } from "@/lib/seo";
import { ui } from "@/lib/site";

// Landing page after Stripe Checkout: /<locale>/order/success?session_id=…
// Looks the order up by its checkout session on every request (no cache), so
// a refresh shows the status once the payment webhook has arrived.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const loc = slugToLocale((await params).locale) ?? "DE";
  const title = ui.orderSuccess.metaTitle[loc];
  return {
    ...buildMetadata({ locale: loc, path: "/order/success", title, description: title }),
    robots: { index: false, follow: false },
  };
}

type Lookup =
  | { state: "ok"; order: OrderSummary }
  | { state: "notFound" }
  | { state: "error" };

async function lookupOrder(sessionId: string | undefined): Promise<Lookup> {
  if (!sessionId || !/^[A-Za-z0-9_-]{8,255}$/.test(sessionId)) return { state: "notFound" };
  const base = apiBase();
  if (!base) return { state: "error" };
  try {
    const res = await fetch(
      `${base}/api/v1/public/orders/session/${encodeURIComponent(sessionId)}`,
      { cache: "no-store", signal: AbortSignal.timeout(5000) },
    );
    if (res.status === 404) return { state: "notFound" };
    if (!res.ok) return { state: "error" };
    return { state: "ok", order: (await res.json()) as OrderSummary };
  } catch {
    return { state: "error" };
  }
}

export default async function OrderSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const raw = (await searchParams).session_id;
  const sessionId = Array.isArray(raw) ? raw[0] : raw;
  const result = await lookupOrder(sessionId);
  const appUrl = (process.env.NEXT_PUBLIC_APP_URL || "https://app.taplino.ch").replace(/\/+$/, "");

  return <OrderSuccess result={result} appUrl={appUrl} />;
}
