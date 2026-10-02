"use client";

import Link from "next/link";
import { CTA_LABEL, SITES_OFFER } from "@/lib/content";
import { WA_HIRE_HREF } from "@/lib/whatsapp";
import { HireCta } from "@/components/hire-cta";
import { LumeUiMock, ZeloUiMock } from "@/components/product-ui-mocks";
import { Reveal } from "@/components/reveal";

export function SitesOffer() {
  return (
    <section
      id="sites"
      className="border-t border-[var(--line)] px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
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
            className="font-display mt-3 max-w-3xl text-[1.65rem] font-semibold tracking-tight text-[var(--ink)] sm:mt-4 sm:text-3xl lg:text-4xl"
            style={{ opacity: 0 }}
          >
            {SITES_OFFER.title}
          </h2>
          <p
            data-reveal-child
            className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] sm:mt-5 sm:text-lg"
            style={{ opacity: 0 }}
          >
            {SITES_OFFER.lead}
          </p>

          <div
            data-reveal-child
            className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 lg:mx-auto lg:max-w-4xl lg:grid-cols-2"
            style={{ opacity: 0 }}
          >
            {SITES_OFFER.gallery.map((item) => (
              <figure
                key={item.label}
                className="flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]"
              >
                <div className="border-b border-[var(--line)] px-4 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)] sm:text-xs sm:tracking-[0.2em]">
                  {item.label}
                </div>
                <div className="relative min-h-[12rem] flex-1 bg-[var(--bg)] p-3 sm:min-h-[14rem] sm:p-4">
                  {item.kind === "zelo" ? <ZeloUiMock /> : <LumeUiMock />}
                </div>
                <figcaption className="border-t border-[var(--line)] px-4 py-3 text-sm text-[var(--ink-muted)]">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <ul className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
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
            className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4"
            style={{ opacity: 0 }}
          >
            <HireCta
              href={WA_HIRE_HREF}
              label={CTA_LABEL}
              origin="sites"
              className="w-full max-w-sm sm:w-auto"
            />
            <Link
              href="/para/loja-automotiva"
              className="inline-flex min-h-11 items-center justify-center text-sm font-medium text-[var(--ink-muted)] underline-offset-4 transition hover:text-[var(--ink)] hover:underline"
            >
              Ver caminhos por nicho
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
