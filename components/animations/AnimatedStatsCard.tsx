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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!cardRef.current) return;

    let cancelled = false;
    let revert: (() => void) | null = null;

    // Capture synchronously before the async gap.
    const el = cardRef.current;

    // Pre-set initial state to prevent flash before GSAP resolves.
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          });

          stats.forEach((stat) => {
            if (!stat.isNumeric) return;
            const counterEl = countersRef.current[stat.label];
            if (!counterEl) return;

            const counter = { val: stat.from };
            gsap.to(counter, {
              val: stat.to,
              duration: 1.4,
              ease: "power2.out",
              snap: { val: 1 },
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                once: true,
              },
              onUpdate: () => {
                counterEl.textContent = Math.round(counter.val).toString() + stat.suffix;
              },
            });
          });
        });

        revert = () => ctx.revert();
      }
    );

    return () => {
      cancelled = true;
      el.style.opacity = "";
      el.style.transform = "";
      revert?.();
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
