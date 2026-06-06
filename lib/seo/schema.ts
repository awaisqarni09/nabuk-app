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
      telephone: "+356-21492190",
      contactType: "customer service",
      email: "info@nabukmalta.com",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/share/1L3GYSURJi/",
    ],
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
    telephone: "+356-21492190",
    email: "info@nabukmalta.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "The Park Offices 189/1, Canon Road District Zone 5, Central Business",
      addressLocality: "Santa vanera",
      addressRegion: "Malta",
      postalCode: "CBD 5060",
      addressCountry: "MT",
    },
    // TODO(optional): add precise coordinates + opening hours to improve local pack ranking:
    //   geo: { "@type": "GeoCoordinates", latitude: 35.8989, longitude: 14.3522 },
    //   openingHoursSpecification: [{ "@type": "OpeningHoursSpecification",
    //     dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    //     opens: "09:00", closes: "17:00" }, ...]
    image: `${SITE_URL}/Nabuk-logo.png`,
    areaServed: [
      { "@type": "Country", name: "Malta" },
      { "@type": "AdministrativeArea", name: "Gozo" },
    ],
    foundingDate: "1996",
  };
}
