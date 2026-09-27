"use client";

import { useEffect, useState } from "react";
import { CardEditor } from "@/components/editor/CardEditor";
import { CheckoutError, type CheckoutPayload } from "@/components/editor/checkout";
import type { ProductCatalog, VolumeTier } from "@/components/editor/types";
import { useLang } from "@/lib/i18n";

// Website host for the card designer: guest checkout through our /api/order
// proxy, which creates the order in the backend and returns the Stripe URL.
async function guestCheckout(payload: CheckoutPayload) {
  const res = await fetch("/api/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await res.json().catch(() => null)) as
    | { checkoutUrl?: string; message?: unknown }
    | null;
  const message = typeof data?.message === "string" ? data.message : undefined;
  if (res.status === 409) throw new CheckoutError("stock", message);
  if (res.status === 400 || res.status === 413) throw new CheckoutError("invalid", message);
  if (!res.ok || !data?.checkoutUrl) throw new CheckoutError("generic", message);
  return { checkoutUrl: data.checkoutUrl };
}

export function EditorCheckout({
  catalog,
  volumeTiers,
}: {
  catalog: ProductCatalog;
  volumeTiers?: VolumeTier[];
}) {
  const { lang } = useLang();
  // Stripe sends abandoned payments back to /editor?cancelled=1. Read it on the
  // client so the editor page itself stays statically rendered.
  const [cancelled, setCancelled] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reads the URL once after hydration
    if (params.get("cancelled") === "1") setCancelled(true);
  }, []);

  return (
    <CardEditor
      locale={lang}
      catalog={catalog}
      volumeTiers={volumeTiers}
      notice={cancelled ? "cancelled" : null}
      onCheckout={guestCheckout}
    />
  );
}
