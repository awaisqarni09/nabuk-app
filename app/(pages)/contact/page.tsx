import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { localBusinessSchema } from "@/lib/seo/schema";
import { ogImages } from "@/lib/seo/og";

// Dynamically import ContactSection to avoid loading form dependencies
// (react-hook-form, zod, turnstile) on every page. This saves ~20–30 KB
// on home, about, solutions, partners, and support pages.
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then(m => ({ default: m.ContactSection })), {
  loading: () => <div style={{ minHeight: "400px" }} />,
  ssr: true,
});

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Contact Nabuk Distributors Malta to request a consultation on veterinary equipment and diagnostics for your clinic. We serve practices across Malta and Gozo.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Request a Consultation | Nabuk Distributors Malta",
    description:
      "Tell us about your clinic and what you're looking to achieve. We'll get back to you with expert advice on veterinary equipment and diagnostics.",
    url: "/contact",
    siteName: "Nabuk Distributors Malta",
    locale: "en_MT",
    type: "website",
    images: ogImages("og-contact", "Nabuk Distributors Malta — Contact Us"),
  },
  twitter: { card: "summary_large_image", images: ["/og/og-contact.png"] },
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
        <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
          <ContactSection />
        </Suspense>
      </main>
    </>
  );
}
