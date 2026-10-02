import { BRAND_NAME, COMPANY, SOCIAL, WA_PHONE_DIGITS } from "./content";

/** Public site origin. Set NEXT_PUBLIC_SITE_URL in production if the domain differs. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://winnertech.com.br"
).replace(/\/$/, "");

export const SITE_TITLE = `${BRAND_NAME} — sistemas e sites para quem opera`;

export const SITE_DESCRIPTION =
  "Sistemas e sites para quem opera. Conheça Zelo, Alfa, Lume e Laço e contrate a Winner Tech.";

/** schema.org Organization + WebSite, rendered as JSON-LD in the root layout. */
export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: BRAND_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/apple-icon.png`,
        description: SITE_DESCRIPTION,
        taxID: COMPANY.cnpj,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Anápolis",
          addressRegion: "GO",
          addressCountry: "BR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: `+${WA_PHONE_DIGITS}`,
          areaServed: "BR",
          availableLanguage: "pt-BR",
        },
        sameAs: [SOCIAL.instagram.href, SOCIAL.linkedin.href],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND_NAME,
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}
