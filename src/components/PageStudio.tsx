"use client";

import { useState } from "react";
import { studio, studioMenu } from "@/lib/site";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
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

const icons: Record<string, React.ReactNode> = {
  branding: (
    <>
      <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
      <circle cx="8.5" cy="10" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="10" r="1.3" fill="currentColor" stroke="none" />
      <path d="M12 21c-1.5 0-2-1-2-2s1-2 2-2h2" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  templates: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2.5" strokeWidth="1.6" />
      <path d="M4 10h16M10 10v10" strokeWidth="1.6" />
    </>
  ),
  ai: (
    <>
      <path d="M4 6h9M8.5 4v2M6 6c.8 3 3 5.5 6 6.5M11 6c-.8 3-3 5.5-6 6.5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13 20l3.5-8 3.5 8M14.2 17.5h4.6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  dietary: (
    <path
      d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14zM5 19l7-7"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
        active ? "bg-ink text-paper" : "bg-ink/5 text-muted hover:bg-ink/10 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

export function PageStudio() {
  const t = useT();
  const [lookIndex, setLookIndex] = useState(0);
  const [menuLang, setMenuLang] = useState<Locale>("DE");
  const look = LOOKS[lookIndex];

  return (
    <section id="designer" className="section-pad py-24 sm:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_auto]">
        <div>
          <Reveal>
            <SectionHeading eyebrow={t(studio.eyebrow)} title={t(studio.title)} intro={t(studio.intro)} />
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {studio.items.map((item, i) => (
              <Reveal key={item.key} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-card border border-line bg-white/60 p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      {icons[item.key]}
                    </svg>
                  </span>
                  <h3 className="display mt-4 text-lg text-ink">{t(item.title)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{t(item.body)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal y={40} delay={0.1}>
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-2">
              <span className="eyebrow text-muted">{t(studio.demo.look)}</span>
              <div className="flex flex-wrap justify-center gap-1.5">
                {LOOKS.map((l, i) => (
                  <Chip key={l.key} active={i === lookIndex} onClick={() => setLookIndex(i)}>
                    {l.venue}
                  </Chip>
                ))}
              </div>
            </div>

            <PhoneMenu look={look} menuLang={menuLang} />

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="eyebrow mr-1 text-muted">{t(studio.demo.language)}</span>
                {MENU_LOCALES.map((loc) => (
                  <Chip key={loc} active={loc === menuLang} onClick={() => setMenuLang(loc)}>
                    {loc}
                  </Chip>
                ))}
              </div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition ${
                  menuLang === "DE" ? "bg-ink/5 text-muted" : "bg-accent-soft text-accent"
                }`}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  {icons.ai}
                </svg>
                {menuLang === "DE" ? t(studio.demo.original) : t(studio.demo.translated)}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
