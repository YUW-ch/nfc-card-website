// Live prices and stock from the Taplino backend, so changes made in the admin
// console show up on the site without a redeploy:
//   - subscription plans: GET /api/v1/billing/plans
//   - card products:      GET /api/v1/public/products (or /public/shop)
// Server-side only: fetched at render time and cached via ISR. Any failure
// returns {} and the hardcoded values in `site.ts` / `editor/types.ts` are
// used instead.
//
// ProductCatalog and VolumeTier are defined by the self-contained card editor
// module and re-exported here for the rest of the site.
import type { ProductCatalog, VolumeTier } from "@/components/editor/types";

export type { ProductCatalog, VolumeTier };

export type PlanTier = "STARTER" | "PRO" | "MANAGED";
export type PlanPrices = Partial<Record<PlanTier, string>>;

type ApiPlan = { tier: PlanTier; priceCents: number };
type ApiProduct = { key: string; priceCents: number; stock: number | null; available: boolean };

export function apiBase(): string | undefined {
  return process.env.TAPLINO_API_URL || undefined;
}

// 39 -> "39", 39.5 -> "39.50"
export function francs(chf: number): string {
  return Number.isInteger(chf) ? String(chf) : chf.toFixed(2);
}

async function getJson<T>(path: string, revalidate: number): Promise<T | null> {
  const base = apiBase();
  if (!base) return null;
  try {
    const res = await fetch(`${base}/api/v1${path}`, {
      next: { revalidate },
      signal: AbortSignal.timeout(3000),
    });
    return res.ok ? ((await res.json()) as T) : null;
  } catch {
    return null;
  }
}

export async function fetchPlanPrices(): Promise<PlanPrices> {
  const plans = await getJson<ApiPlan[]>("/billing/plans", 300);
  const prices: PlanPrices = {};
  for (const p of plans ?? []) {
    if (p?.tier && Number.isInteger(p.priceCents) && p.priceCents >= 0) {
      prices[p.tier] = francs(p.priceCents / 100);
    }
  }
  return prices;
}

function toCatalog(products: ApiProduct[] | null | undefined): ProductCatalog {
  const catalog: ProductCatalog = {};
  for (const p of products ?? []) {
    if (p?.key && Number.isInteger(p.priceCents) && p.priceCents >= 0) {
      catalog[p.key] = {
        price: p.priceCents / 100,
        available: Boolean(p.available),
        stock: typeof p.stock === "number" ? p.stock : null,
      };
    }
  }
  return catalog;
}

// Shorter cache than plans: stock runs out, and a sold-out card should stop
// being offered quickly.
export async function fetchProducts(): Promise<ProductCatalog> {
  return toCatalog(await getJson<ApiProduct[]>("/public/products", 60));
}

type ApiShop = { products: ApiProduct[]; volumeTiers: VolumeTier[] };

// Everything the card editor needs: products plus the volume discount tiers.
// Falls back to the products endpoint (and the editor's built-in tiers) when
// the shop endpoint is not available.
export async function fetchShop(): Promise<{
  catalog: ProductCatalog;
  volumeTiers?: VolumeTier[];
}> {
  const shop = await getJson<ApiShop>("/public/shop", 60);
  if (!shop) return { catalog: await fetchProducts() };
  const tiers = (shop.volumeTiers ?? []).filter(
    (t) => Number.isFinite(t?.min) && Number.isFinite(t?.off) && t.off >= 0 && t.off < 1,
  );
  return { catalog: toCatalog(shop.products), volumeTiers: tiers.length ? tiers : undefined };
}
