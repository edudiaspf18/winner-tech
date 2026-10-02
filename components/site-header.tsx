"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import gsap from "gsap";
import { BrandMark } from "@/components/brand-mark";
import { BRAND_NAME } from "@/lib/content";

type SiteHeaderProps = {
  homeAnchors?: boolean;
};

export function SiteHeader({ homeAnchors = false }: SiteHeaderProps) {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const sistemasHref = homeAnchors ? "#sistemas" : "/#sistemas";
  const sitesHref = homeAnchors ? "#sites" : "/#sites";
  const contratarHref = homeAnchors ? "#contratar" : "/#contratar";
  const brandHref = homeAnchors ? "#topo" : "/";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      el.dataset.solid =
        open || window.scrollY > 16 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(el, {
      y: -16,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      clearProps: "transform",
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  const links = [
    { href: sistemasHref, label: "Sistemas" },
    { href: sitesHref, label: "Sites" },
    { href: "/sobre", label: "Sobre", internal: true },
    { href: contratarHref, label: "Contratar" },
  ] as const;

  return (
    <header
      ref={ref}
      data-solid="false"
      data-menu={open ? "open" : "closed"}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent pt-[env(safe-area-inset-top)] transition-[background,border-color] duration-300 data-[solid=true]:border-[var(--line)] data-[solid=true]:bg-[var(--bg)] data-[menu=open]:border-[var(--line)] data-[menu=open]:bg-[var(--bg)]"
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href={brandHref}
          onClick={close}
          className="group flex min-w-0 items-center gap-2.5 text-[var(--ink)] no-underline sm:gap-3"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--surface)] text-[var(--ink)] ring-1 ring-[var(--line)] transition group-hover:text-[var(--accent)] sm:h-10 sm:w-10">
            <BrandMark className="h-5 w-5 sm:h-6 sm:w-6" />
          </span>
          <span className="font-display truncate text-base font-semibold tracking-tight sm:text-lg lg:text-xl">
            {BRAND_NAME}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm text-[var(--ink-muted)] md:flex lg:gap-8"
          aria-label="Principal"
        >
          {links.map((l) =>
            "internal" in l && l.internal ? (
              <Link
                key={l.label}
                href={l.href}
                className="transition hover:text-[var(--ink)]"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="transition hover:text-[var(--ink)]"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--surface)] text-[var(--ink)] ring-1 ring-[var(--line)] md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4" aria-hidden>
            <span
              className={`absolute left-0 h-0.5 w-full bg-current transition ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full bg-current transition ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Absolute full-screen opaque panel (avoids fixed+transform trap) */}
      <div
        id={menuId}
        hidden={!open}
        className="absolute inset-x-0 top-full z-40 min-h-[100dvh] overflow-y-auto border-t border-[var(--line)] bg-[var(--bg)] md:hidden"
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6 pb-[max(2rem,env(safe-area-inset-bottom))]"
          aria-label="Mobile"
        >
          {links.map((l) =>
            "internal" in l && l.internal ? (
              <Link
                key={l.label}
                href={l.href}
                onClick={close}
                className="rounded-xl px-4 py-4 text-lg font-medium text-[var(--ink)] transition hover:bg-[var(--surface)]"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={close}
                className="rounded-xl px-4 py-4 text-lg font-medium text-[var(--ink)] transition hover:bg-[var(--surface)]"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
