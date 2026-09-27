"use client";

import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Button, Arrow } from "@/components/ui";
import { ui } from "@/lib/site";
import { useT } from "@/lib/i18n";
import type { L } from "@/lib/locale";
import { CARD_TYPES } from "@/components/editor/types";
import { clearSavedCheckout } from "@/components/editor/cart-state";

export type OrderStatus =
  | "PENDING_PAYMENT"
  | "PAID"
  | "IN_PRODUCTION"
  | "SHIPPED"
  | "EXPIRED"
  | "CANCELLED";

// Shape of GET /api/v1/public/orders/session/:sessionId.
export type OrderSummary = {
  number: string;
  status: OrderStatus;
  email: string;
  totalCents: number;
  currency: string;
  items: { productKey: string; productName: string; quantity: number }[];
  claimed: boolean;
};

type Result =
  | { state: "ok"; order: OrderSummary }
  | { state: "notFound" }
  | { state: "error" };

const c = ui.orderSuccess;

const STATUS_LABEL: Record<OrderStatus, L> = {
  PENDING_PAYMENT: c.statusPending,
  PAID: c.statusPaid,
  IN_PRODUCTION: c.statusProduction,
  SHIPPED: c.statusShipped,
  EXPIRED: c.statusExpired,
  CANCELLED: c.statusCancelled,
};

function money(cents: number, currency: string) {
  const n = (cents / 100).toLocaleString("de-CH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${currency || "CHF"} ${n}`;
}

function RefreshButton() {
  const t = useT();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      onClick={() => startTransition(() => router.refresh())}
      disabled={pending}
      className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink disabled:opacity-60"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
        className={pending ? "animate-spin" : ""}
      >
        <path
          d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9M13.5 2.5v3h-3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {t(pending ? c.refreshing : c.refresh)}
    </button>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-28 sm:pt-32">
        <section className="section-pad py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function OrderSuccess({ result, appUrl }: { result: Result; appUrl: string }) {
  const t = useT();

  // The order exists, so the designer's saved cart has done its job.
  const ordered = result.state === "ok";
  useEffect(() => {
    if (ordered) clearSavedCheckout();
  }, [ordered]);

  if (result.state !== "ok") {
    return (
      <Shell>
        <Reveal>
          <span className="eyebrow text-accent">{t(c.eyebrow)}</span>
          <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">
            {t(result.state === "notFound" ? c.notFoundTitle : c.titlePending)}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t(result.state === "notFound" ? c.notFoundBody : c.errorBody)}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {result.state === "error" && <RefreshButton />}
            <Button href="/contact" variant="outline">
              {t(c.contact)}
            </Button>
            <Button href="/" variant="ghost">
              {t(c.backHome)}
            </Button>
          </div>
        </Reveal>
      </Shell>
    );
  }

  const { order } = result;
  const pending = order.status === "PENDING_PAYMENT";
  const closed = order.status === "EXPIRED" || order.status === "CANCELLED";
  const registerUrl = `${appUrl}/register?email=${encodeURIComponent(order.email)}&order=${encodeURIComponent(order.number)}`;

  return (
    <Shell>
      <Reveal>
        <span className="eyebrow text-accent">{t(c.eyebrow)}</span>
        <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">
          {t(pending || closed ? c.titlePending : c.titlePaid)}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          {t(pending ? c.introPending : closed ? c.introClosed : c.introPaid)}
        </p>
        {pending && (
          <div className="mt-6">
            <RefreshButton />
          </div>
        )}
      </Reveal>

      {/* Order summary */}
      <Reveal delay={0.05}>
        <div className="mt-10 rounded-card border border-line bg-paper-2/40 p-6 sm:p-8">
          <dl className="grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                {t(c.orderNumber)}
              </dt>
              <dd className="display mt-1 text-2xl text-ink">{order.number}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                {t(c.status)}
              </dt>
              <dd className="mt-2">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${
                    pending
                      ? "border-line bg-paper text-ink-soft"
                      : closed
                        ? "border-line bg-paper text-muted"
                        : "border-accent/30 bg-accent-soft text-accent-ink"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      pending ? "animate-pulse bg-muted" : closed ? "bg-muted" : "bg-accent"
                    }`}
                  />
                  {t(STATUS_LABEL[order.status] ?? c.statusPending)}
                </span>
              </dd>
            </div>
          </dl>

          <div className="mt-6 border-t border-line pt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">{t(c.items)}</p>
            <ul className="mt-3 space-y-2">
              {order.items.map((item, i) => (
                <li key={i} className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="font-medium text-ink">
                    {productLabel(item.productKey, item.productName, t)}
                  </span>
                  <span className="shrink-0 text-muted">× {item.quantity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex items-end justify-between border-t border-line pt-5">
            <span className="text-sm font-semibold text-ink">{t(c.total)}</span>
            <span className="display text-3xl text-ink">
              {money(order.totalCents, order.currency)}
            </span>
          </div>

          {!pending && !closed && order.email && (
            <p className="mt-5 text-xs leading-relaxed text-muted">
              {t(c.confirmationSent)} <span className="font-semibold text-ink-soft">{order.email}</span>.
            </p>
          )}
        </div>
      </Reveal>

      {/* Account call to action */}
      {!closed && (
        <Reveal delay={0.1}>
          <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-ink px-8 py-12 sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 85% 120%, rgba(47,109,240,0.35), transparent 55%)",
              }}
            />
            <div className="relative max-w-xl">
              <span className="eyebrow text-accent">{t(c.accountEyebrow)}</span>
              <h2 className="display mt-4 text-3xl text-paper sm:text-4xl">
                {t(order.claimed ? c.accountOpen : c.accountTitle)}
              </h2>
              <p className="mt-4 leading-relaxed text-paper/70">
                {t(order.claimed ? c.accountClaimed : c.accountBody)}
              </p>
              <div className="mt-8">
                <Button href={order.claimed ? appUrl : registerUrl} variant="light">
                  {t(order.claimed ? c.accountOpen : c.accountCta)} <Arrow />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      )}
    </Shell>
  );
}

// The backend stores one (English) product name; show the translated card
// name from the editor when we know the product.
function productLabel(key: string, fallback: string, t: (text: L) => string) {
  const type = CARD_TYPES.find((c) => c.key === key);
  return type ? t(type.name) : fallback;
}
