import { HeroSection } from "@/components/sections/HeroSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="nabuk-skip-link">
        Skip to main content
      </a>

      <main id="main-content">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="who-we-are">
          <WhoWeAreSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="solutions">
          <SolutionsSection />
        </div>
        <div id="partners">
          <PartnersSection />
        </div>
        <div id="support">
          <SupportSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
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
      `}</style>
    </>
  );
}
