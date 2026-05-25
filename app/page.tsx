import { HeroSection } from "@/components/sections/HeroSection";
import { HeroEntrance } from "@/components/animations/HeroEntrance";
import {
  PVStyles,
  PVDivider,
  SolutionsPreview,
  PartnersPreview,
  AboutPreview,
  SupportPreview,
  ContactPreview,
} from "@/components/sections/SectionPreviews";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="nabuk-skip-link">
        Skip to main content
      </a>

      {/* Shared preview styles rendered once */}
      <PVStyles />

      {/*
        tabindex="-1" is required for skip links to work correctly.
        Without it, browsers cannot programmatically move focus here,
        causing WebKit/Safari to apply native :target rendering on hash
        reload (#main-content in URL), which bleeds a white layer over
        the hero section and washes out text. The outline:none rule
        below suppresses the browser's native focus ring on this element
        since it's focused programmatically, not by keyboard navigation.
      */}
      <main id="main-content" tabIndex={-1}>
        <div id="hero">
          <HeroEntrance />
          <HeroSection />
        </div>

        <SolutionsPreview />
        <PVDivider />

        <PartnersPreview />
        <PVDivider />

        <AboutPreview />
        <PVDivider />

        <SupportPreview />
        <PVDivider />

        <ContactPreview />
      </main>

      <style>{`
        .nabuk-skip-link {
          position: absolute;
          left: -9999px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }
        .nabuk-skip-link:focus {
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 9999;
          padding: 0.5rem 1rem;
          background: var(--navy);
          color: #fff;
          border-radius: 4px;
          font-weight: 700;
          width: auto;
          height: auto;
          overflow: visible;
        }
        /* Suppress browser-native focus ring on the programmatically-focused
           main element. It receives tabindex="-1" purely for skip-link
           compatibility — keyboard users never tab to it directly. */
        #main-content:focus {
          outline: none;
        }
      `}</style>
    </>
  );
}
