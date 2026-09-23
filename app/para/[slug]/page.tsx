import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BRAND_NAME,
  CTA_LABEL,
  NICHES,
  PRODUCTS,
  nicheBySlug,
} from "@/lib/content";
import { buildWaHireHref } from "@/lib/whatsapp";
import { HireCta } from "@/components/hire-cta";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return NICHES.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const niche = nicheBySlug(slug);
  if (!niche) return { title: BRAND_NAME };
  return {
    title: `${niche.title} · ${BRAND_NAME}`,
    description: niche.lead,
  };
}

export default async function NichePage({ params }: PageProps) {
  const { slug } = await params;
  const niche = nicheBySlug(slug);
  if (!niche) notFound();

  const products = PRODUCTS.filter((p) =>
    niche.productNames.includes(p.name),
  );
  const primary = products[0]?.name;
  const href = buildWaHireHref(primary);
  const origin = `niche:${niche.slug}`;

  return (
    <PageShell>
      <section className="relative overflow-hidden px-5 pb-24 pt-[calc(var(--header-h)+3rem)] sm:px-8 sm:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 50% 45% at 80% 10%, color-mix(in oklab, var(--accent-cool) 20%, transparent), transparent 60%)",
          }}
        />
        <Reveal className="relative z-10 mx-auto max-w-3xl" stagger>
          <p
            data-reveal-child
            className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]"
            style={{ opacity: 0 }}
          >
            Discovery
          </p>
          <h1
            data-reveal-child
            className="font-display mt-5 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight"
            style={{ opacity: 0 }}
          >
            {niche.title}
          </h1>
          <p
            data-reveal-child
            className="mt-6 text-lg leading-relaxed text-[var(--ink-muted)] sm:text-xl"
            style={{ opacity: 0 }}
          >
            {niche.lead}
          </p>

          <ul className="mt-12 space-y-8">
            {products.map((p) => (
              <li
                key={p.name}
                data-reveal-child
                className="border-t border-[var(--line)] pt-8"
                style={{ opacity: 0 }}
              >
                <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
                  {p.name}
                </h2>
                <p className="mt-3 text-[var(--ink-muted)]">{p.functionLine}</p>
                <p className="mt-2 text-sm text-[var(--accent-soft)]">
                  {p.nicheLine}
                </p>
              </li>
            ))}
          </ul>

          <div data-reveal-child className="mt-14" style={{ opacity: 0 }}>
            <HireCta
              href={href}
              label={CTA_LABEL}
              origin={origin}
            />
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
