"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  /** Stagger children with [data-reveal-child] */
  stagger?: boolean;
};

export function Reveal({
  children,
  className = "",
  y = 40,
  delay = 0,
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.style.opacity = "1";
      el.querySelectorAll<HTMLElement>("[data-reveal-child]").forEach((child) => {
        child.style.opacity = "1";
        child.style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      if (stagger) {
        const kids = el.querySelectorAll<HTMLElement>("[data-reveal-child]");
        gsap.set(kids, { opacity: 0, y });
        gsap.to(kids, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      } else {
        gsap.fromTo(
          el,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          },
        );
      }
    }, el);

    return () => ctx.revert();
  }, [y, delay, stagger]);

  return (
    <div
      ref={ref}
      className={className}
      style={stagger ? undefined : { opacity: 0 }}
    >
      {children}
    </div>
  );
}
