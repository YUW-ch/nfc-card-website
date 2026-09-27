"use client";

import { pricing, ui } from "@/lib/site";
import { SectionHeading, Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import type { PlanPrices } from "@/lib/catalog";

export function Pricing({ prices = {} }: { prices?: PlanPrices }) {
  const t = useT();
  return (
    <section id="pricing" className="section-pad py-24 sm:py-32">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow={t(ui.pricing.eyebrow)}
          title={t(ui.pricing.title)}
          intro={t(ui.pricing.intro)}
        />
      </Reveal>

      <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
        {pricing.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <div
              className={`relative flex h-full flex-col rounded-card p-8 transition-transform duration-300 ${
                p.featured
                  ? "bg-ink text-paper lg:-translate-y-4 lg:scale-[1.02] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]"
                  : "border border-line bg-paper-2/40"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                  {t(ui.pricing.badge)}
                </span>
              )}
              <h3 className={`display text-2xl ${p.featured ? "text-paper" : "text-ink"}`}>
                {p.name}
              </h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-paper/60" : "text-muted"}`}>
                {t(p.tagline)}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className={`text-sm ${p.featured ? "text-paper/60" : "text-muted"}`}>
                  CHF
                </span>
                <span className="display text-5xl">
                  {(p.tier && prices[p.tier]) || p.price}
                </span>
                <span className={`text-sm ${p.featured ? "text-paper/60" : "text-muted"}`}>
                  /{t(p.monthly ? ui.pricing.perMonth : ui.pricing.perCard)}
                </span>
              </div>
              <p className={`mt-1 text-xs ${p.featured ? "text-paper/50" : "text-muted"}`}>
                {t(p.unit)}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        p.featured ? "bg-accent text-white" : "bg-accent/15 text-accent"
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6.5 5 9l5-6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={p.featured ? "text-paper/85" : "text-ink-soft"}>{t(f)}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={p.featured ? "light" : "outline"}
                className="mt-8 w-full"
              >
                {t(p.cta)} <Arrow />
              </Button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-10 text-center text-sm text-muted">
          {t(ui.pricing.footnotePre)}{" "}
          <a href="#contact" className="link-underline font-semibold text-ink">
            {t(ui.pricing.footnoteLink)}
          </a>
        </p>
      </Reveal>
    </section>
  );
}
