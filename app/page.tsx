import { HeroSection } from "@/components/sections/HeroSection";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="nabuk-skip-link">
        Skip to main content
      </a>

      <main id="main-content">
        <HeroSection />
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
