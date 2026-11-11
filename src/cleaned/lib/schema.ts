import { site, telHref } from "./site";
import { absUrl, CLEANED_URL } from "./paths";
import { servicePath } from "./catalogue";
import { areas } from "./areas";
import { services, type Faq, type Service } from "./services";

const id = (frag: string) => `${absUrl("/")}#${frag}`;
/** Site-root files (logo, share image) live at the origin, outside the /cleaned prefix. */
const origin = () => { try { return new URL(CLEANED_URL).origin; } catch { return ""; } };

export function businessSchema() {
  const b: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    additionalType: "https://en.wikipedia.org/wiki/Housekeeping",
    "@id": id("business"),
    name: `${site.name} Cleaning`,
    alternateName: site.name,
    url: absUrl("/"),
    logo: `${origin()}/logo-cleaned.webp`,
    image: `${origin()}/cleaned/og-image.jpg`,
    description: site.description,
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: a.name,
      containedInPlace: { "@type": "State", name: a.state === "QLD" ? "Queensland" : "New South Wales" },
    })),
    knowsLanguage: "en-AU",
    slogan: "A beautifully clean home. More time for you.",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.openingHours.days.map((d) => `https://schema.org/${d}`),
      opens: site.openingHours.opens,
      closes: site.openingHours.closes,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential cleaning services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: absUrl(servicePath(s.slug)) },
      })),
    },
    potentialAction: {
      "@type": "QuoteAction",
      target: absUrl("/quote"),
      name: "Request a free cleaning quote",
    },
  };
  if (site.profiles.length) b.sameAs = site.profiles;
  if (site.phone) b.telephone = telHref(site.phone).replace("tel:", "");
  if (site.email) b.email = site.email;
  if (site.legalName) b.legalName = site.legalName;
  if (site.abn) b.taxID = site.abn;
  return b;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": id("website"),
    url: absUrl("/"),
    name: `${site.name} Cleaning`,
    inLanguage: "en-AU",
    publisher: { "@id": id("business") },
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.metaDescription,
    url: absUrl(servicePath(s.slug)),
    provider: { "@id": id("business") },
    areaServed: areas.map((a) => ({ "@type": "City", name: a.name })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}
