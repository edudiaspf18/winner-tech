import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { CookieSettingsButton } from "@/components/cookie-settings-button";
import {
  BRAND_NAME,
  COMPANY,
  NICHES,
  PRODUCTS,
  SOCIAL,
  WA_PHONE_DISPLAY,
} from "@/lib/content";

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

const COLUMN_TITLE =
  "font-display text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]";
const LINK =
  "inline-block py-0.5 transition-all duration-200 hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] pt-12 sm:pb-10 sm:pt-16">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] lg:gap-16">
          <div className="min-w-0">
            <Link
              href="/#topo"
              className="inline-flex items-center gap-3 text-[var(--accent)] transition-all duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              aria-label={`${BRAND_NAME} — voltar ao topo`}
            >
              <BrandMark className="h-auto w-14" />
              <span className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]">
                {BRAND_NAME}
              </span>
            </Link>
            <p className="font-display mt-6 max-w-sm text-2xl font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-3xl">
              Sistemas e sites para quem opera.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--ink-muted)]">
              Quem faz o sistema também faz o site. Conversa direta, sem
              agência no meio.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 text-sm sm:grid-cols-4">
            <nav aria-label="Sistemas">
              <p className={COLUMN_TITLE}>Sistemas</p>
              <ul className="mt-4 space-y-2.5 text-[var(--ink-muted)]">
                {PRODUCTS.map((p) => (
                  <li key={p.name}>
                    <Link href="/#sistemas" className={LINK}>
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Por nicho">
              <p className={COLUMN_TITLE}>Por nicho</p>
              <ul className="mt-4 space-y-2.5 text-[var(--ink-muted)]">
                {NICHES.map((n) => (
                  <li key={n.slug}>
                    <Link href={`/para/${n.slug}`} className={LINK}>
                      {n.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Empresa">
              <p className={COLUMN_TITLE}>Empresa</p>
              <ul className="mt-4 space-y-2.5 text-[var(--ink-muted)]">
                <li>
                  <Link href="/sobre" className={LINK}>
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/#cases" className={LINK}>
                    Cases
                  </Link>
                </li>
                <li>
                  <Link href="/#sites" className={LINK}>
                    Sites & landings
                  </Link>
                </li>
                <li>
                  <Link href="/#contratar" className={LINK}>
                    Contratar
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <p className={COLUMN_TITLE}>Contato</p>
              <ul className="mt-4 space-y-2.5 text-[var(--ink-muted)]">
                {SOCIAL_ITEMS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${LINK} inline-flex items-center gap-2.5`}
                    >
                      {s.icon}
                      <span>
                        {s.label === "WhatsApp" ? WA_PHONE_DISPLAY : s.label}
                      </span>
                      <span className="sr-only"> (abre em nova aba)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-[0.72rem] tracking-wide text-[var(--ink-muted)] sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p>
            © 2026 {BRAND_NAME} · CNPJ {COMPANY.cnpj}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <Link href="/privacidade" className={LINK}>
              Privacidade
            </Link>
            <CookieSettingsButton className={`${LINK} cursor-pointer`} />
            <Link href="/#topo" className={LINK}>
              Voltar ao topo ↑
            </Link>
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="font-display pointer-events-none mt-8 select-none whitespace-nowrap text-center text-[clamp(3rem,15.5vw,13rem)] font-semibold uppercase leading-[0.8] tracking-tighter text-[var(--ink)] opacity-[0.04]"
      >
        WinnerTech
      </p>
    </footer>
  );
}
