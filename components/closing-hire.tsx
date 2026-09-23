"use client";

import { CLOSING_LINE, CTA_LABEL } from "@/lib/content";
import { buildWaHireHref } from "@/lib/whatsapp";
import { HireCta } from "@/components/hire-cta";
import { Reveal } from "@/components/reveal";
import { useActiveProduct } from "@/components/active-product";

export function ClosingHire() {
  const { activeProduct } = useActiveProduct();
  const href = buildWaHireHref(activeProduct);
  const origin = activeProduct ? `closing:${activeProduct}` : "closing";

  return (
    <section
      id="contratar"
      className="relative overflow-hidden border-t border-[var(--line)] px-5 py-28 sm:px-8 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, color-mix(in oklab, var(--accent) 28%, transparent), transparent 70%)",
        }}
      />
      <Reveal className="relative z-10 mx-auto max-w-4xl text-center" stagger>
        <p
          data-reveal-child
          className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]"
          style={{ opacity: 0 }}
        >
          Próximo passo
        </p>
        <h2
          data-reveal-child
          className="font-display mt-6 text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-[var(--ink)]"
          style={{ opacity: 0 }}
        >
          {CLOSING_LINE}
        </h2>
        <div data-reveal-child className="mt-10 flex justify-center" style={{ opacity: 0 }}>
          <HireCta href={href} label={CTA_LABEL} origin={origin} />
        </div>
      </Reveal>
    </section>
  );
}
