"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  "Zelo",
  "Alfa",
  "Frutmix",
  "Laço",
  "Sites do negócio",
  "Landing pages",
  "Operação",
  "WhatsApp",
];

export function MarqueeStrip() {
  const root = useRef<HTMLDivElement>(null);
  const row = [...ITEMS, ...ITEMS];

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.style.opacity = "1";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="overflow-hidden border-y border-[var(--line)] bg-[var(--bg-elevated)] py-4"
      style={{ opacity: 0 }}
      aria-hidden="true"
    >
      <div className="anim-marquee flex w-max gap-10 whitespace-nowrap px-4">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-sm font-semibold uppercase tracking-[0.32em] text-[var(--ink-muted)]"
          >
            {item}
            <span className="ml-10 text-[var(--accent)]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
