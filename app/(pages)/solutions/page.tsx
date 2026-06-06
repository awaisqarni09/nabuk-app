import type { Metadata } from "next";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ogImages } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Nabuk Distributors supplies diagnostic systems, blood analysers, imaging, rapid testing, surgical instruments, sterilisation systems and clinic furniture to veterinary clinics across Malta and Gozo.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | Nabuk Distributors Malta",
    description:
      "Veterinary clinical technologies for Malta — from diagnostics to the surgical suite. No prices, no catalogue — consultation-driven.",
    url: "/solutions",
    siteName: "Nabuk Distributors Malta",
    locale: "en_MT",
    type: "website",
    images: ogImages("og-solutions", "Nabuk Distributors Malta — Solutions"),
  },
  twitter: { card: "summary_large_image", images: ["/og/og-solutions.png"] },
};

export default function SolutionsPage() {
  return (
    <main id="main-content">
      <SolutionsSection />
    </main>
  );
}
