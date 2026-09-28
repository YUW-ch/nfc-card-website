"use client";

import Link from "next/link";
import Image from "next/image";
import { nav, site, BRAND, ui } from "@/lib/site";
import { useT, useLocaleHref } from "@/lib/i18n";
import { openCookieSettings } from "@/components/CookieBanner";

export function Footer() {
  const t = useT();
  // Locale-aware: prefixes the active locale on internal links and points hash
  // links back to the localized home when viewed off the home page.
  const localize = useLocaleHref();
  return (
    <footer className="section-pad border-t border-line bg-paper-2/50 py-16">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo/taplino-mark.svg"
              alt={BRAND}
              width={64}
              height={64}
              className="h-8 w-8"
            />
            <span className="font-[family-name:var(--font-bricolage)] text-2xl font-bold tracking-tight text-ink">
              {BRAND}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {t(site.tagline)} {t(ui.footer.description)}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">{t(ui.footer.productHeading)}</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={localize(n.href)} className="link-underline text-sm text-muted hover:text-ink">
                  {t(n.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">{t(ui.footer.companyHeading)}</p>
          <ul className="mt-4 space-y-2.5">
            {ui.footer.companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={localize(link.href)} className="link-underline text-sm text-muted hover:text-ink">
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">{t(ui.footer.contactHeading)}</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <Link href={localize("/contact")} className="link-underline hover:text-ink">
                {t(ui.footer.contactLink)}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {BRAND}</p>
        <div className="flex gap-6">
          <Link href={localize(ui.footer.privacy.href)} className="link-underline hover:text-ink">{t(ui.footer.privacy.label)}</Link>
          <Link href={localize(ui.footer.terms.href)} className="link-underline hover:text-ink">{t(ui.footer.terms.label)}</Link>
          <Link href={localize(ui.footer.imprint.href)} className="link-underline hover:text-ink">{t(ui.footer.imprint.label)}</Link>
          <button type="button" onClick={openCookieSettings} className="link-underline hover:text-ink">{t(ui.cookie.settings)}</button>
        </div>
      </div>
    </footer>
  );
}
