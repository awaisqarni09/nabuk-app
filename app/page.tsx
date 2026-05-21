import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroEntrance } from "@/components/animations/HeroEntrance";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="nabuk-skip-link">
        Skip to main content
      </a>

      <main id="main-content">
        {/* Hero — has its own entrance animation, no ScrollReveal */}
        <div id="hero">
          <HeroEntrance />
          <HeroSection />
        </div>

        <ScrollReveal id="solutions">
          <SolutionsSection />
        </ScrollReveal>

        <ScrollReveal id="partners">
          <PartnersSection />
        </ScrollReveal>

        <ScrollReveal id="about">
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal id="support">
          <SupportSection />
        </ScrollReveal>

        <ScrollReveal id="contact">
          <ContactSection />
        </ScrollReveal>
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
