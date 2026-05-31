import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 1996, Nabuk Distributors has spent nearly three decades helping shape modern veterinary practice in Malta and Gozo — from nutrition to diagnostics, imaging and surgical infrastructure.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Nabuk Distributors Malta",
    description:
      "The history of Nabuk Distributors — from 1996 to a full-service veterinary equipment and diagnostics partner for Malta and Gozo.",
    type: "website",
    images: [{ url: "/Nabuk-logo.png", width: 1200, height: 630, alt: "Nabuk Distributors Malta — About Us" }],
  },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutSection />
    </main>
  );
}
