"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function ScrollReveal({ children, id, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!ref.current) return;

    let cleanup: (() => void) | null = null;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);

        const el = ref.current!;

        const ctx = gsap.context(() => {
          // Section fade + rise
          gsap.from(el, {
            opacity: 0,
            y: 36,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          });

          // Stagger any .nabuk-card children within this section
          const cards = el.querySelectorAll(".nabuk-card");
          if (cards.length > 0) {
            gsap.from(cards, {
              opacity: 0,
              y: 22,
              duration: 0.5,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 75%",
                once: true,
              },
            });
          }
        });

        cleanup = () => ctx.revert();
      }
    );

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
}
