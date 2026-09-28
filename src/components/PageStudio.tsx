"use client";

import { useState } from "react";
import { studio, studioMenu } from "@/lib/site";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { useLang, useT } from "@/lib/i18n";
import type { Locale } from "@/lib/locale";

// Three example restaurants, mirroring the built-in looks in the app's designer.
// System font stacks only, so the marketing site makes no extra font requests.
const LOOKS = [
  {
    key: "trattoria",
    venue: "Trattoria Da Luca",
    tagline: { DE: "Pasta fresca seit 1987", EN: "Fresh pasta since 1987", FR: "Pâtes fraîches depuis 1987", IT: "Pasta fresca dal 1987" },
    bg: "#f7efe3",
    text: "#2b1d14",
    surface: "#fffaf2",
    brand: "#b5452b",
    onBrand: "#ffffff",
    heading: 'Georgia, "Times New Roman", serif',
    radius: "0.9rem",
    cover: "linear-gradient(135deg, #b5452b 0%, #e0a15a 100%)",
  },
  {
    key: "noir",
    venue: "Bistro Lumen",
    tagline: { DE: "Saisonal. Lokal. Abends.", EN: "Seasonal. Local. Evenings.", FR: "De saison. Local. Le soir.", IT: "Stagionale. Locale. La sera." },
    bg: "#141210",
    text: "#f3ede2",
    surface: "#1f1c19",
    brand: "#c9a45c",
    onBrand: "#14120f",
    heading: '"Didot", "Bodoni 72", Georgia, serif',
    radius: "0.25rem",
    cover: "linear-gradient(135deg, #2b2620 0%, #c9a45c 140%)",
  },
  {
    key: "street",
    venue: "SMASH & CO.",
    tagline: { DE: "Burger. Laut. Gut.", EN: "Burgers. Loud. Good.", FR: "Burgers. Fort. Bon.", IT: "Burger. Forte. Buono." },
    bg: "#111111",
    text: "#ffffff",
    surface: "#1c1c1c",
    brand: "#ffcc00",
    onBrand: "#111111",
    heading: 'Impact, "Arial Narrow", "Helvetica Neue", sans-serif',
    radius: "0.2rem",
    cover: "linear-gradient(135deg, #ffcc00 0%, #ff5a1f 100%)",
  },
] as const;

const MENU_LOCALES: Locale[] = ["DE", "EN", "FR", "IT"];

const icons = {
  ai: (
    <>
      <path d="M4 6h9M8.5 4v2M6 6c.8 3 3 5.5 6 6.5M11 6c-.8 3-3 5.5-6 6.5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13 20l3.5-8 3.5 8M14.2 17.5h4.6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

function Leaf() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14zM5 19l7-7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chili() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5.3 1.5 1 2.5 2 3 0-3 0-6 1-8.5z" />
    </svg>
  );
}

/** The menu in a phone, styled by the selected look and shown in `menuLang`. */
function PhoneMenu({ look, menuLang }: { look: (typeof LOOKS)[number]; menuLang: Locale }) {
  return (
    <div
      className="mx-auto w-[300px] rounded-[2.6rem] border-[10px] shadow-[0_40px_80px_-30px_rgba(20,18,15,0.55)]"
      style={{ borderColor: "#14120f", background: "#14120f" }}
    >
      <div
        className="relative h-[560px] overflow-hidden rounded-[1.9rem] transition-colors duration-500"
        style={{ background: look.bg, color: look.text }}
      >
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full" style={{ background: "#14120f" }} />

        {/* Cover and logo */}
        <div className="h-28 transition-all duration-500" style={{ background: look.cover }} />
        <div className="-mt-8 flex flex-col items-center px-5 text-center">
          <span
            className="flex h-16 w-16 items-center justify-center text-xl font-bold shadow-lg transition-all duration-500"
            style={{
              background: look.surface,
              color: look.brand,
              borderRadius: look.radius,
              fontFamily: look.heading,
            }}
          >
            {look.venue.slice(0, 1)}
          </span>
          <p className="mt-3 text-2xl leading-tight" style={{ fontFamily: look.heading }}>
            {look.venue}
          </p>
          <p className="mt-1 text-xs opacity-70">{look.tagline[menuLang]}</p>
        </div>

        {/* Menu */}
        <div className="px-4 pt-5">
          <p className="mb-2 text-lg" style={{ fontFamily: look.heading }}>
            {studioMenu.section[menuLang]}
          </p>
          <ul
            className="overflow-hidden transition-all duration-500"
            style={{ background: look.surface, borderRadius: look.radius }}
          >
            {studioMenu.dishes.map((d, i) => (
              <li
                key={i}
                className="px-3.5 py-3"
                style={{ borderTop: i ? `1px solid color-mix(in srgb, ${look.text} 12%, transparent)` : undefined }}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[13px] font-semibold">{d.name[menuLang]}</span>
                  <span className="shrink-0 text-[13px] font-semibold tabular-nums" style={{ color: look.brand }}>
                    {d.price}
                  </span>
                </div>
                <p className="text-[11px] opacity-65">{d.desc[menuLang]}</p>
                <div className="mt-1.5 flex gap-1.5">
                  {d.diet && (
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold"
                      style={{ background: "#2f8f4e24", color: "#3fae62", borderRadius: look.radius }}
                    >
                      <Leaf /> {studioMenu[d.diet][menuLang]}
                    </span>
                  )}
                  {d.spicy > 0 && (
                    <span
                      className="inline-flex items-center gap-0.5 px-2 py-0.5"
                      style={{ background: "#e0482d24", color: "#e0482d", borderRadius: look.radius }}
                    >
                      {Array.from({ length: d.spicy }, (_, k) => (
                        <Chili key={k} />
                      ))}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

type Look = (typeof LOOKS)[number];

/** The look's palette and heading font, as a designer would pin them on a moodboard. */
function Palette({ look }: { look: Look }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex">
        {[look.bg, look.surface, look.brand, look.text].map((c, i) => (
          <span
            key={i}
            className="-ml-1.5 h-8 w-8 rounded-full border-2 border-paper shadow-sm transition-colors duration-500 first:ml-0"
            style={{ background: c }}
          />
        ))}
      </div>
      <span
        className="text-3xl leading-none text-ink transition-all duration-500"
        style={{ fontFamily: look.heading }}
        aria-hidden="true"
      >
        Aa
      </span>
      <span
        className="h-8 w-8 border-2 border-ink/70 transition-all duration-500"
        style={{ borderRadius: look.radius }}
        aria-hidden="true"
      />
    </div>
  );
}

export function PageStudio() {
  const t = useT();
  const { lang } = useLang();
  const [lookIndex, setLookIndex] = useState(0);
  const [menuLang, setMenuLang] = useState<Locale>("DE");
  const look = LOOKS[lookIndex];

  // Each feature row doubles as a control for the phone preview.
  const controls: Record<string, React.ReactNode> = {
    branding: <Palette look={look} />,
    templates: (
      <div role="group" aria-label={t(studio.demo.look)} className="flex flex-wrap gap-2">
        {LOOKS.map((l, i) => {
          const active = i === lookIndex;
          return (
            <button
              key={l.key}
              type="button"
              onClick={() => setLookIndex(i)}
              aria-pressed={active}
              className={`group inline-flex items-center gap-2.5 rounded-full border py-1.5 pl-1.5 pr-4 text-sm font-semibold transition ${
                active ? "border-ink bg-ink text-paper" : "border-line text-ink-soft hover:border-ink/40 hover:text-ink"
              }`}
            >
              <span
                className="relative h-6 w-6 overflow-hidden rounded-full ring-1 ring-black/10"
                style={{ background: l.bg }}
              >
                <span className="absolute inset-y-0 right-0 w-1/2" style={{ background: l.brand }} />
              </span>
              {l.venue}
            </button>
          );
        })}
      </div>
    ),
    ai: (
      <div className="flex flex-wrap items-center gap-3">
        <div
          role="group"
          aria-label={t(studio.demo.language)}
          className="inline-flex rounded-full border border-line bg-paper-2/60 p-1"
        >
          {MENU_LOCALES.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => setMenuLang(loc)}
              aria-pressed={loc === menuLang}
              className={`rounded-full px-3.5 py-1 text-xs font-bold tracking-wide transition ${
                loc === menuLang ? "bg-ink text-paper" : "text-muted hover:text-ink"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
            menuLang === "DE" ? "text-muted" : "text-accent"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            {icons.ai}
          </svg>
          {menuLang === "DE" ? t(studio.demo.original) : t(studio.demo.translated)}
        </span>
      </div>
    ),
    dietary: (
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        <span className="inline-flex items-center gap-1 rounded-full bg-[#2f8f4e1f] px-2.5 py-1 text-[#2f8f4e]">
          <Leaf /> {studioMenu.vegan[lang]}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#2f8f4e1f] px-2.5 py-1 text-[#2f8f4e]">
          <Leaf /> {studioMenu.vegetarian[lang]}
        </span>
        {[1, 2, 3].map((n) => (
          <span key={n} className="inline-flex items-center gap-0.5 rounded-full bg-[#e0482d1a] px-2 py-1 text-[#d13f25]">
            {Array.from({ length: n }, (_, k) => (
              <Chili key={k} />
            ))}
          </span>
        ))}
      </div>
    ),
  };

  return (
    <section id="designer" className="section-pad py-24 sm:py-32">
      <div className="grid gap-x-20 gap-y-12 lg:grid-cols-[1fr_auto]">
        <Reveal>
          <SectionHeading eyebrow={t(studio.eyebrow)} title={t(studio.title)} intro={t(studio.intro)} />
        </Reveal>

        {/* Phone: second on mobile so the controls below sit right under it */}
        <Reveal y={40} delay={0.1} className="lg:sticky lg:top-28 lg:row-span-2 lg:self-start">
          <div className="relative flex flex-col items-center">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl transition-colors duration-700"
              style={{ background: look.brand }}
              aria-hidden="true"
            />
            <div className="relative">
              <PhoneMenu look={look} menuLang={menuLang} />
            </div>
            <p className="relative mt-5 flex items-center gap-2 text-xs font-semibold text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {t(studio.demo.preview)}
            </p>
          </div>
        </Reveal>

        <ol className="border-b border-line">
          {studio.items.map((item, i) => (
            <li key={item.key} className="border-t border-line">
              <Reveal delay={i * 0.06} className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-7 sm:grid-cols-[3.5rem_1fr]">
                <span className="display pt-1 text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="display text-2xl text-ink">{t(item.title)}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-muted">{t(item.body)}</p>
                  <div className="mt-5">{controls[item.key]}</div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
