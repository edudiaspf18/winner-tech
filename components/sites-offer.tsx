"use client";

import Link from "next/link";
import { CTA_LABEL, SITES_OFFER } from "@/lib/content";
import { WA_HIRE_HREF } from "@/lib/whatsapp";
import { HireCta } from "@/components/hire-cta";
import { Reveal } from "@/components/reveal";

export function SitesOffer() {
  return (
    <section
      id="sites"
      className="border-t border-[var(--line)] px-5 py-20 sm:px-8 sm:py-28"
      aria-label="Sites e landing pages"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal stagger>
          <p
            data-reveal-child
            className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]"
            style={{ opacity: 0 }}
          >
            {SITES_OFFER.eyebrow}
          </p>
          <h2
            data-reveal-child
            className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl"
            style={{ opacity: 0 }}
          >
            {SITES_OFFER.title}
          </h2>
          <p
            data-reveal-child
            className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)]"
            style={{ opacity: 0 }}
          >
            {SITES_OFFER.lead}
          </p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-3">
            {SITES_OFFER.points.map((point) => (
              <li
                key={point.title}
                data-reveal-child
                className="border-t border-[var(--line)] pt-6"
                style={{ opacity: 0 }}
              >
                <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {point.body}
                </p>
              </li>
            ))}
          </ul>

          <div
            data-reveal-child
            className="mt-12 flex flex-wrap items-center gap-4"
            style={{ opacity: 0 }}
          >
            <HireCta href={WA_HIRE_HREF} label={CTA_LABEL} origin="sites" />
            <Link
              href="/para/loja-automotiva"
              className="text-sm font-medium text-[var(--ink-muted)] underline-offset-4 transition hover:text-[var(--ink)] hover:underline"
            >
              Ver caminhos por nicho
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
