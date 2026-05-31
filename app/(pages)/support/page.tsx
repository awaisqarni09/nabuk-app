import type { Metadata } from "next";
import { SupportSection } from "@/components/sections/SupportSection";

export const metadata: Metadata = {
  title: "Support & Services",
  description:
    "Nabuk Distributors provides consultation, installation, training and after-sales servicing for veterinary equipment in Malta and Gozo. Our relationship with a clinic doesn't end at delivery.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support & Services | Nabuk Distributors Malta",
    description:
      "On-island consultation, installation, training and after-sales support for veterinary clinics across Malta and Gozo.",
    type: "website",
    images: [{ url: "/Nabuk-logo.png", width: 1200, height: 630, alt: "Nabuk Distributors Malta — Support & Services" }],
  },
};

export default function SupportPage() {
  return (
    <main id="main-content">
      <SupportSection />
    </main>
  );
}
