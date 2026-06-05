import type { Metadata } from "next";
import { Manrope, Archivo_Black } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { organizationSchema, webSiteSchema } from "@/lib/seo/schema";
import { PageTransition } from "@/components/animations/PageTransition";
import { AutoReveal } from "@/components/animations/AutoReveal";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Nabuk Distributors Malta — Veterinary Equipment & Diagnostics",
    template: "%s | Nabuk Distributors Malta",
  },
  description:
    "Advanced veterinary equipment and diagnostics for the clinics of Malta and Gozo — backed by nearly three decades of partnership with the profession.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Nabuk Distributors Malta",
    locale: "en_MT",
    type: "website",
    images: [
      {
        url: "/Nabuk-logo.png",
        width: 1200,
        height: 630,
        alt: "Nabuk Distributors Malta — Veterinary Equipment & Diagnostics",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: {
    google: "zBfvZYJncTP9SKoZiVCpKq6mI-hs3wfdvE-alGb_zl4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${archivoBlack.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        {/* JSON-LD: Organisation + WebSite on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), webSiteSchema()]),
          }}
        />
        <Navbar />
        <PageTransition>
          <div className="flex-1">{children}</div>
        </PageTransition>
        <AutoReveal />
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
