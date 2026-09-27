"use client";

import { ui } from "@/lib/site";
import { SectionHeading, Button, Arrow } from "@/components/ui";
import { CardPreview } from "@/components/editor/CardPreview";
import { exampleCard } from "@/components/editor/types";
import { Reveal } from "@/components/Reveal";
import { useLang, useT } from "@/lib/i18n";

function Check() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 shrink-0 text-accent"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.12" />
      <path
        d="M6 10.5l2.5 2.5L14 7.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Solution() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="solution" className="section-pad bg-paper-2/40 py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* The designer showcase: a live preview of a card built in our editor */}
        <Reveal y={40}>
          <CardPreview config={exampleCard()} locale={lang} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-xl">
            <SectionHeading
              eyebrow={t(ui.solution.eyebrow)}
              title={t(ui.solution.title)}
              intro={t(ui.solution.body)}
            />
            <p className="mt-6 text-lg font-semibold text-ink">
              {t(ui.solution.note)}
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              {t(ui.solution.designer)}
            </p>
            <ul className="mt-6 space-y-3">
              {ui.products.review.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-ink-soft">
                  <Check />
                  <span className="leading-relaxed">{t(f)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/editor" variant="solid">
                {t(ui.solution.editorCta)} <Arrow />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
