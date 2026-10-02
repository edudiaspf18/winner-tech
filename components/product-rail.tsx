"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRODUCTS, waContextName, type Product } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { useActiveProduct } from "@/components/active-product";

gsap.registerPlugin(ScrollTrigger);

const ACCENTS = ["#a8bd72", "#e07a55", "#d4a574", "#5fb8a8"] as const;

function RailCard({
  product,
  index,
  onActivate,
}: {
  product: Product;
  index: number;
  onActivate: (name: string) => void;
}) {
  const accent = ACCENTS[index % ACCENTS.length];
  const activateName = waContextName(product);

  return (
    <article
      data-reveal-child
      data-product={product.name}
      tabIndex={0}
      onFocus={() => onActivate(activateName)}
      onMouseEnter={() => onActivate(activateName)}
      onClick={() => onActivate(activateName)}
      className="group relative flex w-full min-h-[18rem] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border-2 p-5 sm:min-h-[22rem] sm:rounded-[1.75rem] sm:p-6 md:p-7"
      style={{
        opacity: 0,
        borderColor: `color-mix(in oklab, ${accent} 55%, transparent)`,
        background: `linear-gradient(155deg, color-mix(in oklab, ${accent} 16%, #161c2a) 0%, #12182a 55%, #0e1320 100%)`,
        boxShadow: `0 0 0 1px color-mix(in oklab, ${accent} 25%, transparent), 0 24px 60px color-mix(in oklab, ${accent} 18%, transparent)`,
      }}
    >
      <div
        data-rail-float
        className="relative flex h-full flex-col justify-between"
        style={{ animationDelay: `${index * 0.55}s` }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl sm:h-40 sm:w-40 sm:blur-3xl transition duration-500 group-hover:scale-110"
          style={{ background: accent, opacity: 0.35 }}
        />
        <div className="relative">
          <div className="flex items-center gap-3">
            <span
              className="font-display grid h-9 w-9 place-items-center rounded-lg text-sm font-bold text-[var(--bg)]"
              style={{ background: accent }}
            >
              {index + 1}
            </span>
            <p
              className="font-display text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: accent }}
            >
              Sistema
            </p>
          </div>
          <h3 className="font-display mt-5 text-[1.85rem] font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
            {product.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink)] sm:text-base">
            {product.functionLine}
          </p>
          <p className="mt-3 text-sm font-medium" style={{ color: accent }}>
            {product.nicheLine}
          </p>
          {product.note ? (
            <p className="mt-3 text-xs text-[var(--ink-muted)]">{product.note}</p>
          ) : null}
        </div>
        <div
          className="relative mt-8 h-2 w-full overflow-hidden rounded-full bg-black/40"
          aria-hidden
        >
          <span
            className="block h-full w-full [clip-path:inset(0_50%_0_0_round_9999px)] transition-[clip-path] duration-[1200ms] ease-[cubic-bezier(0.45,0,0.25,1)] group-hover:[clip-path:inset(0_0_0_0_round_9999px)] group-focus-visible:[clip-path:inset(0_0_0_0_round_9999px)] motion-reduce:transition-none"
            style={{ background: accent }}
          />
        </div>
      </div>
    </article>
  );
}

export function ProductRail() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { setActiveProduct } = useActiveProduct();

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const cards = grid.querySelectorAll<HTMLElement>("[data-reveal-child]");

      if (!reduced && cards.length) {
        gsap.set(cards, { opacity: 0, y: 28 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
          onComplete: () => {
            if (window.matchMedia("(min-width: 768px)").matches) {
              cards.forEach((card) => {
                const floater =
                  card.querySelector<HTMLElement>("[data-rail-float]");
                if (floater) floater.classList.add("rail-card-float");
              });
            }
          },
        });
      } else {
        cards.forEach((c) => {
          c.style.opacity = "1";
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sistemas"
      ref={sectionRef}
      aria-label="Sistemas"
      className="relative border-t border-[var(--line)] bg-[var(--bg)]"
    >
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Portfólio
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-[1.65rem] font-semibold leading-tight tracking-tight text-[var(--ink)] sm:mt-4 sm:text-3xl lg:text-5xl">
            Quatro sistemas. Cada um no nicho em que opera.
          </h2>
        </Reveal>

        <div
          ref={gridRef}
          className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-4 pb-14 sm:mt-12 sm:grid-cols-2 sm:gap-5 sm:pb-20 md:items-stretch lg:mt-16 lg:grid-cols-4 lg:gap-5 lg:pb-24"
        >
          {PRODUCTS.map((product, index) => (
            <RailCard
              key={product.name}
              product={product}
              index={index}
              onActivate={setActiveProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
