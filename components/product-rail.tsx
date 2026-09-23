"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRODUCTS, type Product } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { useActiveProduct } from "@/components/active-product";

gsap.registerPlugin(ScrollTrigger);

const ACCENTS = ["#a8bd72", "#e07a55", "#5fb8a8", "#d4b86a"] as const;

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
  const isFrutmix = product.name === "Frutmix";
  return (
    <article
      data-reveal-child
      data-product={product.name}
      tabIndex={0}
      onFocus={() => onActivate(product.name)}
      onMouseEnter={() => onActivate(product.name)}
      onClick={() => onActivate(product.name)}
      className="group relative flex w-[min(84vw,30rem)] shrink-0 cursor-pointer flex-col justify-between overflow-hidden rounded-[1.75rem] border-2 p-7 sm:w-[28rem] sm:p-8"
      style={{
        opacity: 0,
        borderColor: `color-mix(in oklab, ${accent} 55%, transparent)`,
        background: `linear-gradient(155deg, color-mix(in oklab, ${accent} 16%, #161c2a) 0%, #12182a 55%, #0e1320 100%)`,
        boxShadow: `0 0 0 1px color-mix(in oklab, ${accent} 25%, transparent), 0 24px 60px color-mix(in oklab, ${accent} 18%, transparent)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full blur-3xl transition duration-500 group-hover:scale-110"
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
        <h3 className="font-display mt-5 text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
          {product.name}
        </h3>
        <p className="mt-5 text-base leading-relaxed text-[var(--ink)]">
          {product.functionLine}
        </p>
        <p className="mt-3 text-sm font-medium" style={{ color: accent }}>
          {product.nicheLine}
        </p>
        {isFrutmix ? (
          <p className="mt-4 text-xs text-[var(--ink-muted)]">
            Sem screenshot inventado — só o escopo industrial declarado.
          </p>
        ) : null}
      </div>
      <div
        className="relative mt-10 h-2 w-full overflow-hidden rounded-full bg-black/40"
        aria-hidden
      >
        <span
          className="block h-full w-1/2 rounded-full transition duration-500 group-hover:w-full"
          style={{ background: accent }}
        />
      </div>
    </article>
  );
}

export function ProductRail() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsWrapRef = useRef<HTMLDivElement>(null);
  const { setActiveProduct } = useActiveProduct();

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const cardsWrap = cardsWrapRef.current;
    if (!section || !track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!reduced && cardsWrap) {
        const cards = cardsWrap.querySelectorAll<HTMLElement>("[data-reveal-child]");
        gsap.set(cards, { opacity: 0, y: 36 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
        });
      } else if (cardsWrap) {
        cardsWrap.querySelectorAll<HTMLElement>("[data-reveal-child]").forEach((c) => {
          c.style.opacity = "1";
        });
      }

      if (reduced) return;

      const getScroll = () =>
        Math.max(0, track.scrollWidth - section.clientWidth + 48);

      gsap.to(track, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScroll()}`,
          scrub: 0.85,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sistemas"
      ref={sectionRef}
      aria-label="Sistemas"
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--bg)]"
    >
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Portfólio
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
            Quatro sistemas. Cada um no nicho em que opera.
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-12 pb-20 sm:mt-16 sm:pb-24">
        <div
          ref={trackRef}
          className="product-rail flex w-max gap-5 px-5 will-change-transform sm:gap-6 sm:px-8"
        >
          <div ref={cardsWrapRef} className="contents">
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
      </div>
    </section>
  );
}
