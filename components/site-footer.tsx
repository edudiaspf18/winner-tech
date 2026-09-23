import Link from "next/link";
import { BRAND_NAME, NICHES } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-[var(--ink)]">
            {BRAND_NAME}
          </p>
          <p className="mt-2 max-w-sm text-sm text-[var(--ink-muted)]">
            Sistemas para quem opera. Contrate pelo WhatsApp.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-6 text-sm">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Landing pages
            </p>
            <ul className="mt-3 space-y-2 text-[var(--ink-muted)]">
              {NICHES.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/para/${n.slug}`}
                    className="transition hover:text-[var(--ink)]"
                  >
                    {n.title}
                  </Link>
                </li>
              ))}
              <li>
                <a href="/#sites" className="transition hover:text-[var(--ink)]">
                  Sites & landings
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Empresa
            </p>
            <ul className="mt-3 space-y-2 text-[var(--ink-muted)]">
              <li>
                <Link href="/sobre" className="transition hover:text-[var(--ink)]">
                  Sobre
                </Link>
              </li>
              <li>
                <a href="/#contratar" className="transition hover:text-[var(--ink)]">
                  Contratar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
