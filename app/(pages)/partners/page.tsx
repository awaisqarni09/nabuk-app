import type { Metadata } from "next";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ogImages } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Nabuk Distributors represents Eickemeyer, Antech, Melag, Covetrus and Veterinary Instrumentation — bringing globally respected veterinary manufacturers to Maltese clinics.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Our Partners | Nabuk Distributors Malta",
    description:
      "International veterinary equipment manufacturers represented in Malta by Nabuk Distributors — including Eickemeyer, Antech, Melag, Covetrus and Veterinary Instrumentation.",
    type: "website",
    images: ogImages("og-partners", "Nabuk Distributors Malta — Our Partners"),
  },
  twitter: { card: "summary_large_image", images: ["/og/og-partners.png"] },
};

export default function PartnersPage() {
  return (
    <main id="main-content">
      <PartnersSection />
    </main>
  );
}
