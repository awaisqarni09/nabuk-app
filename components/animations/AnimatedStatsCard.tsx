"use client";

import { useRef, useEffect } from "react";

const stats = [
  { label: "Founded", from: 1990, to: 1996, suffix: "", isNumeric: true },
  { label: "Years in business", from: 0, to: 28, suffix: "+", isNumeric: true },
  { label: "Focus", text: "Veterinary equipment & diagnostics", isNumeric: false },
  { label: "Market", text: "Malta & Gozo", isNumeric: false },
] as const;

export function AnimatedStatsCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<Record<string, HTMLSpanElement | null>>({});

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !cardRef.current) return;

    let cleanup: (() => void) | null = null;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // Card entrance
          gsap.from(cardRef.current!, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              once: true,
            },
          });

          // Numeric counters
          stats.forEach((stat) => {
            if (!stat.isNumeric) return;
            const el = countersRef.current[stat.label];
            if (!el) return;

            const counter = { val: stat.from };
            gsap.to(counter, {
              val: stat.to,
              duration: 1.4,
              ease: "power2.out",
              snap: { val: 1 },
              scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
                once: true,
              },
              onUpdate: () => {
                el.textContent = Math.round(counter.val).toString() + stat.suffix;
              },
            });
          });
        });

        cleanup = () => ctx.revert();
      }
    );

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderRadius: "20px",
        padding: "32px",
        boxShadow: "0 10px 40px -15px rgba(15,39,48,0.15)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              borderBottom: "1px solid rgba(26,58,74,0.08)",
              paddingBottom: "16px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                display: "block",
                marginBottom: "4px",
              }}
            >
              {stat.label}
            </span>
            <span
              style={{ fontSize: "18px", fontWeight: 700, color: "var(--navy)" }}
            >
              {stat.isNumeric ? (
                <span
                  ref={(el) => {
                    countersRef.current[stat.label] = el;
                  }}
                >
                  {stat.from}{stat.suffix}
                </span>
              ) : (
                stat.text
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
