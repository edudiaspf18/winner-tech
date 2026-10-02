import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME, CTA_LABEL } from "@/lib/content";
import { WA_HIRE_HREF } from "@/lib/whatsapp";
import { HireCta } from "@/components/hire-cta";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: `Página não encontrada · ${BRAND_NAME}`,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="px-4 pb-20 pt-[calc(var(--header-h)+env(safe-area-inset-top)+3rem)] sm:px-6 sm:pb-28 sm:pt-[calc(var(--header-h)+5rem)] lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Erro 404
          </p>
          <h1 className="font-display mt-4 text-[clamp(2.5rem,10vw,6rem)] font-semibold leading-[1] tracking-tight">
            Essa página não existe.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-muted)]">
            O link pode estar errado ou a página mudou de lugar. Volte para o
            início ou chame a gente no WhatsApp.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <HireCta
              href={WA_HIRE_HREF}
              label={CTA_LABEL}
              origin="404"
              className="w-full sm:w-auto"
            />
            <Link
              href="/"
              className="inline-flex min-h-11 items-center text-sm font-medium text-[var(--ink-muted)] underline-offset-4 transition-all duration-200 hover:text-[var(--ink)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
