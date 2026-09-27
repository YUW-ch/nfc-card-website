"use client";

import Image from "next/image";
import { products, ui } from "@/lib/site";
import { SectionHeading, Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import { francs, type ProductCatalog } from "@/lib/catalog";

function CardVisual({ accent }: { accent: boolean }) {
  return (
    <div
      className={`relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border ${
        accent ? "border-accent/30" : "border-line"
      }`}
    >
      <div
        className={`absolute inset-0 ${
          accent
            ? "bg-gradient-to-br from-[#2a2824] to-ink"
            : "bg-gradient-to-br from-paper-2 to-paper-3"
        }`}
      />
      <div className="absolute right-5 top-5">
        <Image
          src={accent ? "/logo/taplino-mark-cream-on-ink.svg" : "/logo/taplino-mark.svg"}
          alt=""
          width={64}
          height={64}
          className="h-7 w-7"
        />
      </div>
      <span
        className={`absolute bottom-5 left-5 display text-lg ${
          accent ? "text-paper" : "text-ink"
        }`}
      >
        Taplino
      </span>
    </div>
  );
}

export function Products({ catalog = {} }: { catalog?: ProductCatalog }) {
  const t = useT();
  const business = products[0];
  const live = catalog[business.productKey];
  const price = live ? francs(live.price) : business.price;
  const available = live?.available ?? true;
  return (
    /* Our flagship: the metal NFC business card */
    <section id="products" className="section-pad py-24 sm:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <SectionHeading
            title={t(ui.products.range.title)}
            intro={t(ui.products.range.intro)}
          />
          <p className="mt-3 text-sm font-medium text-muted">{t(business.material)}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <p>
              <span className="text-xs text-muted">{t(ui.products.from)}</span>
              <br />
              <span className="display text-3xl">CHF {price}</span>
            </p>
            {available ? (
              <Button href="/editor" variant="solid">
                {t(ui.products.order)} <Arrow />
              </Button>
            ) : (
              <span className="rounded-full border border-line px-5 py-3 text-sm font-semibold text-muted">
                {t(ui.editor.notAvailable)}
              </span>
            )}
            <Button href="#pricing" variant="ghost">
              {t(ui.products.range.cta)}
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <CardVisual accent />
        </Reveal>
      </div>
    </section>
  );
}
