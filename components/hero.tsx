"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CTA_LABEL, HERO, BRAND_NAME } from "@/lib/content";
import { WA_HIRE_HREF } from "@/lib/whatsapp";
import { HireCta } from "@/components/hire-cta";
import { HeroScene } from "@/components/hero-scene";
import { BrandMark } from "@/components/brand-mark";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-hero-anim]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          stagger: 0.12,
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
      className="relative isolate min-h-[100svh] overflow-hidden pt-[var(--header-h)]"
    >
      <HeroScene />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-var(--header-h))] max-w-7xl items-center px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="max-w-3xl py-8">
          <div
            data-hero-anim
            className="mb-6 flex items-center gap-3 text-[var(--accent)]"
          >
            <BrandMark className="h-9 w-9 anim-float" />
            <p className="font-display text-sm font-semibold uppercase tracking-[0.28em]">
              {BRAND_NAME}
            </p>
          </div>

          <h1
            data-hero-anim
            className="font-display max-w-[13ch] text-[clamp(2.4rem,6.8vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-[var(--ink)]"
          >
            {HERO.offer}
          </h1>

          <p
            data-hero-anim
            className="mt-5 max-w-lg text-lg text-[var(--ink-muted)] sm:text-xl"
          >
            {HERO.support}
          </p>

          <div data-hero-anim className="mt-8 flex flex-wrap items-center gap-4">
            <HireCta href={WA_HIRE_HREF} label={CTA_LABEL} origin="hero" />
            <a
              href="#sistemas"
              className="text-sm font-medium text-[var(--ink-muted)] underline-offset-4 transition hover:text-[var(--ink)] hover:underline"
            >
              Ver os quatro sistemas
            </a>
          </div>

          <p
            data-hero-anim
            className="mt-10 max-w-md text-xs uppercase tracking-[0.22em] text-[var(--ink-muted)]"
          >
            Sites tecnológicos · landing pages · sites institucionais
          </p>
        </div>
        <div className="pointer-events-none hidden min-h-[22rem] lg:block" aria-hidden />
      </div>
    </section>
  );
}
