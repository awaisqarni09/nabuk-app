import type { MetadataRoute } from "next";

// Web app manifest — gives the site an installable identity and supplies the
// theme/background colours mobile browsers use for the address bar and splash.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nabuk Distributors Malta — Veterinary Equipment & Diagnostics",
    short_name: "Nabuk Malta",
    description:
      "Advanced veterinary equipment and diagnostics for the clinics of Malta and Gozo.",
    start_url: "/",
    display: "standalone",
    background_color: "#e7eff2",
    theme_color: "#084c61",
    icons: [
      { src: "/images/favicon.png", sizes: "any", type: "image/png" },
      { src: "/images/nabuk-logo-icon.webp", sizes: "512x512", type: "image/webp" },
    ],
  };
}
