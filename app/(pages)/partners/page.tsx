import type { Metadata } from "next";
import { PartnersSection } from "@/components/sections/PartnersSection";

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
  },
};

export default function PartnersPage() {
  return (
    <main id="main-content">
      <PartnersSection />
    </main>
  );
}
