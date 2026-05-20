import type { Metadata } from "next";
import { Manrope, Archivo_Black } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { organizationSchema, webSiteSchema } from "@/lib/seo/schema";
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nabukmalta.com";

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
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
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
        <LenisProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </LenisProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
