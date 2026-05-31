import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { localBusinessSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Contact Nabuk Distributors Malta to request a consultation on veterinary equipment and diagnostics for your clinic. We serve practices across Malta and Gozo.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Request a Consultation | Nabuk Distributors Malta",
    description:
      "Tell us about your clinic and what you're looking to achieve. We'll get back to you with expert advice on veterinary equipment and diagnostics.",
    type: "website",
    images: [{ url: "/Nabuk-logo.png", width: 1200, height: 630, alt: "Nabuk Distributors Malta — Contact Us" }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* LocalBusiness JSON-LD on the contact page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <main id="main-content">
        <ContactSection />
      </main>
    </>
  );
}
