import { SITE_URL } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Nabuk Distributors Ltd.",
    alternateName: "VSS — Vet Supplies Specialists",
    url: SITE_URL,
    logo: `${SITE_URL}/Nabuk-logo.png`,
    description:
      "Malta's specialist partner for advanced veterinary equipment and diagnostics, serving clinics across Malta and Gozo since 1996.",
    foundingDate: "1996",
    areaServed: ["Malta", "Gozo"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+356-9947-2220",
      contactType: "customer service",
      email: "info@nabukmalta.com", // PLACEHOLDER — replace with real address before launch
      availableLanguage: "English",
    },
    // TODO(real-data): add real social-profile URLs (Facebook, LinkedIn, Instagram).
    // A `sameAs` that only points back to the site's own homepage is ignored by
    // search engines, so it is omitted until real profiles are available.
    sameAs: [],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Nabuk Distributors Malta",
    url: SITE_URL,
    description:
      "Advanced veterinary equipment and diagnostics for the clinics of Malta and Gozo.",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nabuk Distributors Ltd.",
    description:
      "Specialist veterinary equipment and diagnostics distributor serving Malta and Gozo since 1996.",
    url: SITE_URL,
    telephone: "+356-9947-2220",
    email: "info@nabukmalta.com", // PLACEHOLDER — replace with real address before launch
    address: {
      "@type": "PostalAddress",
      streetAddress: "STREET ADDRESS", // PLACEHOLDER — replace before launch
      addressLocality: "Malta",
      addressRegion: "Malta",
      postalCode: "POSTAL CODE", // PLACEHOLDER — replace before launch
      addressCountry: "MT",
    },
    // TODO(real-data): add precise coordinates + opening hours to qualify for the
    // local pack. Fake coordinates are worse than none, so they are left out until
    // the real values are known:
    //   geo: { "@type": "GeoCoordinates", latitude: 35.xxxx, longitude: 14.xxxx },
    //   openingHoursSpecification: [{ "@type": "OpeningHoursSpecification",
    //     dayOfWeek: ["Monday", ...], opens: "09:00", closes: "17:00" }],
    image: `${SITE_URL}/Nabuk-logo.png`,
    areaServed: [
      { "@type": "Country", name: "Malta" },
      { "@type": "AdministrativeArea", name: "Gozo" },
    ],
    foundingDate: "1996",
  };
}
