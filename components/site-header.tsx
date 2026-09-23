"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BrandMark } from "@/components/brand-mark";
import { BRAND_NAME } from "@/lib/content";

type SiteHeaderProps = {
  /** Use absolute home anchors when not on `/`. */
  homeAnchors?: boolean;
};

export function SiteHeader({ homeAnchors = false }: SiteHeaderProps) {
  const ref = useRef<HTMLElement>(null);
  const sistemasHref = homeAnchors ? "#sistemas" : "/#sistemas";
  const contratarHref = homeAnchors ? "#contratar" : "/#contratar";
  const brandHref = homeAnchors ? "#topo" : "/";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onScroll = () => {
      const solid = window.scrollY > 24;
      el.dataset.solid = solid ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    gsap.from(el, { y: -24, opacity: 0, duration: 0.9, ease: "power3.out" });
  }, []);

  return (
    <header
      ref={ref}
      data-solid="false"
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent px-5 py-4 transition-[background,border-color,backdrop-filter] duration-300 data-[solid=true]:border-[var(--line)] data-[solid=true]:bg-[color-mix(in_oklab,var(--bg)_78%,transparent)] data-[solid=true]:backdrop-blur-xl sm:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link
          href={brandHref}
          className="group flex items-center gap-3 text-[var(--ink)] no-underline"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--surface)] text-[var(--ink)] ring-1 ring-[var(--line)] transition group-hover:text-[var(--accent)]">
            <BrandMark className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            {BRAND_NAME}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[var(--ink-muted)] md:flex">
          <a href={sistemasHref} className="transition hover:text-[var(--ink)]">
            Sistemas
          </a>
          <Link href="/sobre" className="transition hover:text-[var(--ink)]">
            Sobre
          </Link>
          <a href={contratarHref} className="transition hover:text-[var(--ink)]">
            Contratar
          </a>
        </nav>
      </div>
    </header>
  );
}
