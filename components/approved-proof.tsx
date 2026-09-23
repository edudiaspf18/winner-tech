"use client";

import { APPROVED_PROOF } from "@/lib/content";
import { Reveal } from "@/components/reveal";

/** CASE-07 — renders nothing when no approved entries. */
export function ApprovedProofSection() {
  const items = APPROVED_PROOF.filter((item) => item.approved);
  if (items.length === 0) return null;

  return (
    <section
      id="prova"
      className="border-t border-[var(--line)] px-5 py-24 sm:px-8 sm:py-28"
      aria-label="Prova aprovada"
    >
      <Reveal className="mx-auto max-w-5xl" stagger>
        <p
          data-reveal-child
          className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]"
          style={{ opacity: 0 }}
        >
          Quem já opera
        </p>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={
                item.kind === "quote"
                  ? item.quote.slice(0, 40)
                  : `${item.value}-${item.label}`
              }
              data-reveal-child
              className="border-t border-[var(--line)] pt-8"
              style={{ opacity: 0 }}
            >
              {item.kind === "quote" ? (
                <>
                  <blockquote className="font-display text-xl font-medium leading-snug tracking-tight text-[var(--ink)] sm:text-2xl">
                    “{item.quote}”
                  </blockquote>
                  <p className="mt-4 text-sm text-[var(--ink-muted)]">
                    {item.attribution}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-display text-4xl font-semibold tracking-tight text-[var(--accent)]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm text-[var(--ink-muted)]">
                    {item.label}
                  </p>
                </>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
