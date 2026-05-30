import { SITE_URL } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nabuk Distributors Ltd.",
    alternateName: "VSS — Vet Supplies Specialists",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Malta's specialist partner for advanced veterinary equipment and diagnostics, serving clinics across Malta and Gozo since 1996.",
    foundingDate: "1996",
    areaServed: ["Malta", "Gozo"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+356-9947-2220",
      contactType: "customer service",
      email: "info@nabukmalta.com", // PLACEHOLDER
      availableLanguage: "English",
    },
    sameAs: [],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nabuk Distributors Malta",
    url: SITE_URL,
    description:
      "Advanced veterinary equipment and diagnostics for the clinics of Malta and Gozo.",
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
    email: "info@nabukmalta.com", // PLACEHOLDER
    address: {
      "@type": "PostalAddress",
      addressCountry: "MT",
      addressRegion: "Malta",
    },
    areaServed: [
      { "@type": "Country", name: "Malta" },
      { "@type": "AdministrativeArea", name: "Gozo" },
    ],
    foundingDate: "1996",
    priceRange: "Contact for pricing",
  };
}
