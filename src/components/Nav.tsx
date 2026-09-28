"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { headerNav, site, BRAND, ui } from "@/lib/site";
import { Button, Arrow } from "@/components/ui";
import { useLang, useLocaleHref } from "@/lib/i18n";
import type { Locale } from "@/lib/locale";

const LANG_NAMES: Record<Locale, string> = {
  EN: "English",
  DE: "Deutsch",
  FR: "Français",
  IT: "Italiano",
};

function LanguageDropdown({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-ink/5"
      >
        <span>{lang}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[9rem] overflow-hidden rounded-xl border border-line bg-paper p-1 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.35)]"
        >
          {site.languages.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={lang === l}
                onClick={() => {
                  setLang(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  lang === l ? "bg-ink text-paper" : "text-ink hover:bg-ink/5"
                }`}
              >
                <span>{LANG_NAMES[l]}</span>
                <span className={`text-xs font-semibold ${lang === l ? "text-paper/70" : "text-muted"}`}>{l}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Wordmark() {
  const localize = useLocaleHref();
  return (
    <Link href={localize("#top")} className="group flex items-center gap-2.5">
      <Image
        src="/logo/taplino-mark.svg"
        alt={BRAND}
        width={64}
        height={64}
        priority
        className="h-8 w-8"
      />
      <span className="font-[family-name:var(--font-bricolage)] text-2xl font-bold tracking-tight text-ink">
        {BRAND}
      </span>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const localize = useLocaleHref();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`section-pad transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
            scrolled
              ? "border border-line bg-paper/80 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.3)]"
              : "border border-transparent"
          }`}
        >
          <Wordmark />

          <nav className="hidden items-center gap-8 lg:flex">
            {headerNav.map((item) => (
              <Link
                key={item.href}
                href={localize(item.href)}
                className="link-underline text-sm font-medium text-ink-soft hover:text-ink"
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageDropdown className="hidden sm:block" />
            <div className="hidden sm:block">
              <Button href="/editor">
                {t(ui.nav.orderCards)} <Arrow />
              </Button>
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-5 bg-ink transition-transform ${
                    open ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
                <span
                  className={`block h-0.5 w-5 bg-ink transition-transform ${
                    open ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 rounded-2xl border border-line bg-paper/95 p-4 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col">
              {headerNav.map((item) => (
                <Link
                  key={item.href}
                  href={localize(item.href)}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-base font-medium text-ink last:border-0"
                >
                  {t(item.label)}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex justify-center sm:hidden">
              <LanguageDropdown />
            </div>
            <Button href="/editor" className="mt-3 w-full" onClick={() => setOpen(false)}>
              {t(ui.nav.orderCards)} <Arrow />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
