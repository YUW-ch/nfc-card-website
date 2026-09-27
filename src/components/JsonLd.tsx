// Structured data (JSON-LD) — the primary machine-readable signal for Google
// rich results and AI answer engines (ChatGPT, Perplexity, Google AI). Server
// component: no hooks, localized via the `locale` prop passed from the layout.
import type { Locale } from "@/lib/locale";
import { LOCALES, localeToSlug } from "@/lib/locale";
import {
  ORG,
  SITE_NAME,
  SITE_URL,
  localeUrl,
  localeToHreflang,
  seoCopy,
} from "@/lib/seo";
import { products, menuCard, reviewCards, faqs, pages } from "@/lib/site";
import { francs, type ProductCatalog } from "@/lib/catalog";

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Data is built from our own constants, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const ORG_ID = `${SITE_URL}/#organization`;
const availableLanguage = LOCALES.map((l) => localeToSlug(l));

// Organization + WebSite — rendered on every page (in the root layout).
export function SiteJsonLd({ locale }: { locale: Locale }) {
  const address = {
    "@type": "PostalAddress",
    addressCountry: ORG.country,
    ...(ORG.address.streetAddress
      ? { streetAddress: ORG.address.streetAddress }
      : {}),
    ...(ORG.address.postalCode ? { postalCode: ORG.address.postalCode } : {}),
    ...(ORG.address.locality ? { addressLocality: ORG.address.locality } : {}),
    ...(ORG.address.region ? { addressRegion: ORG.address.region } : {}),
  };

  const organization = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: ORG.name,
    legalName: ORG.legalName,
    url: ORG.url,
    logo: ORG.logo,
    email: ORG.email,
    ...(ORG.telephone ? { telephone: ORG.telephone } : {}),
    address,
    areaServed: { "@type": "Country", name: "Switzerland" },
    contactPoint: {
      "@type": "ContactPoint",
      email: ORG.email,
      ...(ORG.telephone ? { telephone: ORG.telephone } : {}),
      contactType: "customer support",
      availableLanguage,
    },
    ...(ORG.founder ? { founder: { "@type": "Person", name: ORG.founder } } : {}),
    ...(ORG.vatID ? { vatID: ORG.vatID } : {}),
    ...(ORG.foundingDate ? { foundingDate: ORG.foundingDate } : {}),
    ...(ORG.sameAs.length ? { sameAs: ORG.sameAs } : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: localeUrl(locale),
    inLanguage: localeToHreflang(locale),
    publisher: { "@id": ORG_ID },
  };

  return (
    <JsonLd
      data={{ "@context": "https://schema.org", "@graph": [organization, website] }}
    />
  );
}

// Product list + FAQPage + BreadcrumbList — rendered on the home page.
export function HomeJsonLd({
  locale,
  catalog = {},
}: {
  locale: Locale;
  catalog?: ProductCatalog;
}) {
  const home = localeUrl(locale);

  const productList = [...products, menuCard, ...reviewCards].map((p) => {
    const live = catalog[p.productKey];
    return {
      "@type": "Product",
      name: p.name,
      description: p.blurb[locale],
      material: p.material[locale],
      brand: { "@type": "Brand", name: SITE_NAME },
      // Prices are shown as "from CHF X" on the page, so model them as a lower
      // bound (AggregateOffer.lowPrice) rather than an exact Offer.price.
      offers: {
        "@type": "AggregateOffer",
        lowPrice: live ? francs(live.price) : p.price,
        priceCurrency: "CHF",
        availability:
          live && !live.available ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
        url: `${home}#products`,
        seller: { "@id": ORG_ID },
      },
    };
  });

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${home}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q[locale],
      acceptedAnswer: { "@type": "Answer", text: f.a[locale] },
    })),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE_NAME, item: home },
    ],
  };

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [...productList, faqPage, breadcrumb],
      }}
    />
  );
}

// AboutPage — links the page to the Organization it describes (E-E-A-T signal).
export function AboutJsonLd({ locale }: { locale: Locale }) {
  const url = localeUrl(locale, "/about");
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${url}#aboutpage`,
        url,
        name: pages.about.title[locale],
        inLanguage: localeToHreflang(locale),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
      }}
    />
  );
}

// ContactPage — marks the contact route and links it to the Organization.
export function ContactJsonLd({ locale }: { locale: Locale }) {
  const url = localeUrl(locale, "/contact");
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${url}#contactpage`,
        url,
        name: seoCopy.contact.title[locale],
        inLanguage: localeToHreflang(locale),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": ORG_ID },
      }}
    />
  );
}
