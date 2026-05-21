import type { Metadata } from "next";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Nabuk Distributors Ltd. is a specialist partner to the veterinary profession in Malta — focused exclusively on advanced clinical equipment, diagnostics and infrastructure.",
  alternates: { canonical: "/who-we-are" },
  openGraph: {
    title: "Who We Are | Nabuk Distributors Malta",
    description:
      "A specialist partner to the veterinary profession in Malta, focused on advanced clinical equipment, diagnostics and infrastructure for modern veterinary practice.",
    type: "website",
  },
};

export default function WhoWeArePage() {
  return (
    <main id="main-content">
      <WhoWeAreSection />
    </main>
  );
}
