"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CTA_LABEL, HERO, BRAND_NAME } from "@/lib/content";
import { WA_HIRE_HREF } from "@/lib/whatsapp";
import { HireCta } from "@/components/hire-cta";
import { HeroBackdrop, HeroDevices } from "@/components/hero-scene";
import { BrandMark } from "@/components/brand-mark";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-hero-anim]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="topo"
      ref={root}
      className="relative isolate overflow-x-clip pt-[calc(var(--header-h)+env(safe-area-inset-top))]"
    >
      <HeroBackdrop />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-var(--header-h))] max-w-7xl flex-col justify-center gap-10 px-4 pb-16 pt-6 sm:gap-12 sm:px-6 sm:pb-20 sm:pt-8 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-8 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <div
            data-hero-anim
            className="mb-4 flex items-center gap-2.5 text-[var(--accent)] sm:mb-6 sm:gap-3"
          >
            <BrandMark className="h-8 w-8 shrink-0 anim-float sm:h-9 sm:w-9" />
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm sm:tracking-[0.28em]">
              {BRAND_NAME}
            </p>
          </div>

          <h1
            data-hero-anim
            className="font-display max-w-[16ch] text-[clamp(1.9rem,8.2vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[var(--ink)] sm:max-w-[14ch] sm:leading-[0.96]"
          >
            {HERO.offer}
          </h1>

          <p
            data-hero-anim
            className="mt-4 max-w-lg text-base leading-relaxed text-[var(--ink-muted)] sm:mt-5 sm:text-lg lg:text-xl"
          >
            {HERO.support}
          </p>

          <div
            data-hero-anim
            className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <HireCta
              href={WA_HIRE_HREF}
              label={CTA_LABEL}
              origin="hero"
              className="w-full max-w-sm sm:w-auto"
            />
            <a
              href="#sistemas"
              className="inline-flex min-h-11 items-center justify-center text-sm font-medium text-[var(--ink-muted)] underline-offset-4 transition hover:text-[var(--ink)] hover:underline"
            >
              Ver os sistemas
            </a>
          </div>

          <p
            data-hero-anim
            className="mt-8 max-w-md text-[0.65rem] uppercase leading-relaxed tracking-[0.16em] text-[var(--ink-muted)] sm:mt-10 sm:text-xs sm:tracking-[0.22em]"
          >
            Sites tecnológicos · landing pages · sites institucionais
          </p>
        </div>

        <HeroDevices className="lg:min-h-[22rem]" />
      </div>
    </section>
  );
}
