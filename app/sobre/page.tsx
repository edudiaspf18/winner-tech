import type { Metadata } from "next";
import { ABOUT, BRAND_NAME, CTA_LABEL } from "@/lib/content";
import { WA_HIRE_HREF } from "@/lib/whatsapp";
import { HireCta } from "@/components/hire-cta";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: `Sobre · ${BRAND_NAME}`,
  description: ABOUT.lead,
};

export default function SobrePage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-5 pb-24 pt-[calc(var(--header-h)+3rem)] sm:px-8 sm:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 55% 40% at 20% 0%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 65%)",
          }}
        />
        <Reveal className="relative z-10 mx-auto max-w-3xl" stagger>
          <p
            data-reveal-child
            className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]"
            style={{ opacity: 0 }}
          >
            {ABOUT.eyebrow}
          </p>
          <h1
            data-reveal-child
            className="font-display mt-5 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight"
            style={{ opacity: 0 }}
          >
            {ABOUT.title}
          </h1>
          <p
            data-reveal-child
            className="mt-6 text-lg leading-relaxed text-[var(--ink-muted)] sm:text-xl"
            style={{ opacity: 0 }}
          >
            {ABOUT.lead}
          </p>
          {ABOUT.body.map((para) => (
            <p
              key={para.slice(0, 24)}
              data-reveal-child
              className="mt-5 text-base leading-relaxed text-[var(--ink-muted)]"
              style={{ opacity: 0 }}
            >
              {para}
            </p>
          ))}
          <div data-reveal-child className="mt-12" style={{ opacity: 0 }}>
            <HireCta href={WA_HIRE_HREF} label={CTA_LABEL} origin="sobre" />
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
