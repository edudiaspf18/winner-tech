import Link from "next/link";
import { BRAND_NAME, NICHES, SOCIAL } from "@/lib/content";

const SOCIAL_ITEMS = [
  {
    ...SOCIAL.instagram,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    ...SOCIAL.whatsapp,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.82c0 1.96.52 3.87 1.5 5.55L2 22l4.8-1.58a10.05 10.05 0 0 0 5.24 1.43h.01c5.46 0 9.89-4.4 9.89-9.82S17.5 2 12.04 2Zm5.78 13.94c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.18-4.93-4.37-.14-.2-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.56-.35.75-.35.19 0 .38 0 .54.01.17.01.41-.07.64.49.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.3.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.16.28.73 1.2 1.57 1.94 1.08.96 1.99 1.26 2.27 1.4.28.14.45.12.61-.07.17-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
      </svg>
    ),
  },
  {
    ...SOCIAL.linkedin,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M6.34 8.75H3.56V20.5h2.78V8.75ZM4.95 3.5a1.61 1.61 0 1 0 0 3.22 1.61 1.61 0 0 0 0-3.22ZM20.5 20.5h-2.78v-5.7c0-1.36-.03-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3v5.8H10.87V8.75h2.66v1.6h.04c.37-.7 1.27-1.44 2.62-1.44 2.8 0 3.31 1.84 3.31 4.24V20.5Z" />
      </svg>
    ),
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] pt-10 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <div className="min-w-0">
          <p className="font-display text-base font-semibold tracking-tight text-[var(--ink)] sm:text-lg">
            {BRAND_NAME}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--ink-muted)]">
            Sistemas para quem opera. Contrate pelo WhatsApp.
          </p>
          <ul className="mt-4 flex items-center gap-2.5">
            {SOCIAL_ITEMS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl text-[var(--ink-muted)] ring-1 ring-[var(--line)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-6">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Landing pages
            </p>
            <ul className="mt-3 space-y-2.5 text-[var(--ink-muted)]">
              {NICHES.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/para/${n.slug}`}
                    className="inline-block py-0.5 transition hover:text-[var(--ink)]"
                  >
                    {n.title}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/#sites"
                  className="inline-block py-0.5 transition hover:text-[var(--ink)]"
                >
                  Sites & landings
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Empresa
            </p>
            <ul className="mt-3 space-y-2.5 text-[var(--ink-muted)]">
              <li>
                <Link
                  href="/sobre"
                  className="inline-block py-0.5 transition hover:text-[var(--ink)]"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <a
                  href="/#contratar"
                  className="inline-block py-0.5 transition hover:text-[var(--ink)]"
                >
                  Contratar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-[var(--line)] pt-5 text-center text-[0.7rem] tracking-wide text-[var(--ink-muted)] sm:mt-12 sm:pt-6 sm:text-xs">
        Desenvolvido por Winner Tech · 2026
      </p>
    </footer>
  );
}
