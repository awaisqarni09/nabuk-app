import type { Metadata, Viewport } from "next";
import { Manrope, Archivo_Black } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { organizationSchema, webSiteSchema } from "@/lib/seo/schema";
import { ogImages } from "@/lib/seo/og";
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
  icons: {
    icon: "/images/favicon.png?v=2",
    shortcut: "/images/favicon.png?v=2",
    apple: "/images/favicon.png?v=2",
  },
  openGraph: {
    url: "/",
    siteName: "Nabuk Distributors Malta",
    locale: "en_MT",
    type: "website",
    images: ogImages("og-default", "Nabuk Distributors Malta — Veterinary Equipment & Diagnostics"),
  },
  twitter: {
    card: "summary_large_image",
    images: ogImages("og-default", "Nabuk Distributors Malta — Veterinary Equipment & Diagnostics").map((i) => i.url),
  },
  robots: { index: true, follow: true },
  verification: {
    google: "zBfvZYJncTP9SKoZiVCpKq6mI-hs3wfdvE-alGb_zl4",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a3a4a",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-MT"
      className={`${manrope.variable} ${archivoBlack.variable}`}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          html {
            scroll-behavior: smooth;
            scroll-padding-top: 68px;
            overflow-x: hidden;
          }
          body {
            font-family: var(--font-manrope, system-ui, sans-serif);
            min-height: 100vh;
            line-height: 1.7;
            margin: 0;
            padding: 0;
          }
          @media (prefers-reduced-motion: reduce) {
            html { scroll-behavior: auto; }
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        ` }} />
      </head>
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
