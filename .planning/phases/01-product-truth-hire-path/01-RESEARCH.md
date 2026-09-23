# Phase 1: Product truth + hire path - Research

**Researched:** 2026-09-23
**Domain:** Greenfield Next.js App Router marketing page (pt-BR content shell + WhatsApp hire path)
**Confidence:** HIGH (content/CTA locks, stack pins) / MEDIUM (exact create-next-app behavior in non-empty repo)

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Oferta de site
- **D-01:** A linha maior do hero é "Fazemos o sistema e o site do seu negócio." Os quatro sistemas vêm abaixo. — **Reversibility:** costly — o hero é o contrato público da página; mudar a oferta reescreve a primeira leitura e o fechamento.
- **D-02:** A linha menor, embaixo da oferta, é "Sistemas para quem opera." A frase "Não para quem só anuncia." foi retirada.
- **D-03:** O site do negócio é um serviço da Winner Tech, ao lado dos quatro sistemas. Não vira quinto card, não ganha nome de produto e não entra na ordem Zelo → Alfa → Frutmix → Laço.

#### Voz do texto
- **D-04:** Voz direta e curta, no tom da landing do Zelo. Sem frase institucional longa.
- **D-05:** Cada sistema tem uma frase de função e os nichos na linha de baixo. Sem parágrafo de três frases nesta fase.
- **D-06:** Ordem de cima para baixo: Zelo, Alfa, Frutmix, Laço.

#### WhatsApp no fluxo
- **D-07:** Dois controles iguais no fluxo: um no hero e um no bloco final, depois dos quatro sistemas. Não há botão depois de cada sistema nesta fase.
- **D-08:** O botão mostra "Quero contratar".
- **D-09:** A mensagem do WhatsApp, igual nos dois botões, é "Olá, vi os sistemas de vocês e quero conversar." Número +55 62 99828-6169.
- **D-10:** O bloco final diz "Viu o sistema ou precisa do site? Chama a gente." e em seguida o botão.

### Claude's Discretion
- Posição exata do botão do hero (ao lado da oferta ou logo abaixo das duas linhas) fica com o planejamento, desde que os dois controles existam e usem o mesmo destino.
- A mensagem do WhatsApp continua só sobre sistemas, como o Eduardo escolheu, mesmo com a oferta de site no hero. Não reescrever esse texto na fase 1.
- "Não para quem só anuncia." saiu porque brigava com a oferta de site.

### Deferred Ideas (OUT OF SCOPE)
- Prefill do WhatsApp por produto — fase 3 (CTA-03).
- Botão flutuante — fase 3 (CTA-02).
- Telas reais, cases, trilho, cor — fase 2.
- Scroll preso, cena WebGL — fase 3.
- Portfólio de sites de clientes — sem case real, não inventar.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| BRND-01 | Visitante vê o nome Winner Tech como marca pública | Root brand text + `metadata.title` includes `Winner Tech`; visible wordmark/name in header/hero |
| BRND-02 | Visitante não vê "Winner Tecnologia da Informação" como título | Assert title string; grep-forbid old legal name in `<title>` / Metadata |
| BRND-04 | Hero diz que faz sistemas e pode ser contratada | Locked hero lines D-01/D-02 + hire CTA in hero |
| PROD-01 | Quatro sistemas: Zelo, Alfa, Frutmix, Laço | Ordered product content module; semantic list/articles |
| PROD-02 | Zelo: função + nichos (estética, lava-jato, oficina) + placa/vaga/PIX/WhatsApp/PC/celular | Copy from Zelo landing + PROJECT.md; one function sentence + niche line |
| PROD-03 | Alfa: industrial completo (cadastro, produção, NF, relatórios) | PROJECT.md / REQUIREMENTS only — no UI scrape |
| PROD-04 | Frutmix: mesmo teto industrial do Alfa; sem módulo inventado | Mirror Alfa ceiling; forbid invented modules |
| PROD-05 | Laço: fidelidade white-label (app cliente, equipe, painel, marca) | Laço landing + PROJECT.md; no app import |
| CTA-01 | Abre WhatsApp +55 62 99828-6169 por controle no fluxo | Shared `wa.me` href ×2 (hero + closing) |
| BASE-01 | Todo texto de interface em português | `lang="pt-BR"`; all UI strings pt-BR; no English chrome |
</phase_requirements>

## Project Constraints (from CLAUDE.md)

Actionable directives the planner must honor:

- Public brand is **Winner Tech**; do not use "Winner Tecnologia da Informação" as the site title.
- Four named systems only; each must declare function + niche; Frutmix must not invent modules beyond industrial scope Eduardo stated.
- Do not reimplement Zelo/Alfa/Frutmix/Laço in this repo — present only.
- Do not scrape Alfa Papéis UI; do not import Laço app; Frutmix has no local codebase.
- Contact channel: WhatsApp +55 62 99828-6169 only (no forms/email/phone alternatives in v1).
- Portuguese language; no i18n framework beyond `lang="pt-BR"`.
- Stack from research: Next.js App Router + Tailwind; **no CMS, auth, database, ORM, ecommerce**.
- Phase 1 is a content shell — do not ship the Phase 2/3 visual/motion stack (GSAP, Lenis, WebGL, floating CTA, analytics) as Phase 1 work.
- GSD workflow: plan/execute through GSD commands; after Next install, agents must read `node_modules/next/dist/docs/` (bundled docs may differ from training data).
- No project skills under `.claude/skills/` or `.agents/skills/` yet.

## Summary

Phase 1 is a greenfield content shell: scaffold Next.js 16 App Router + Tailwind 4, hardcode Portuguese brand/product copy, and expose one shared WhatsApp Click-to-Chat URL in two identical in-flow controls. No database, CMS, auth, motion libraries, screenshots, cases, or product-aware prefill.

Locked copy and CTA strings come from CONTEXT.md. Product depth for Zelo/Laço is grounded in local landings outside this git; Alfa/Frutmix stay within the industrial ceiling already stated in PROJECT.md / REQUIREMENTS.md. Semantic HTML must stand alone so Phases 2–3 can dress the same document.

**Primary recommendation:** Scaffold with `create-next-app@latest . --yes`, pin Next **16.3.6** / React **19.3.0** / Tailwind **4.3.3**, put copy + WhatsApp href in a single content module, render one Server Component page with header → hero → four product blocks → closing hire section, both CTAs as plain `<a href={WA_HIRE_HREF}>`.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Brand + hero offer copy | Frontend Server (SSR/RSC) | CDN/Static | Static Server Components + Metadata; no client state |
| Four product function/niche blocks | Frontend Server (SSR/RSC) | — | Hardcoded content module; no API |
| Portuguese UI locale (`lang`, strings) | Frontend Server (SSR/RSC) | Browser/Client | `html lang="pt-BR"` + copy in RSC |
| WhatsApp hire path (wa.me) | Browser / Client | — | Native navigation to WhatsApp; no backend |
| Styling tokens (minimal layout) | CDN / Static (CSS) | Frontend Server | Tailwind utilities; Phase 2 owns striking color |
| Persistence / CMS / Auth | — | — | Explicitly out of scope |

Single-app brochure: all Phase 1 capabilities live in the Next.js App Router document. No API or Database tier.

## Standard Stack

### Core (install in Phase 1)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `next` | **16.3.6** | App Router, RSC, Metadata | Project STACK.md + `npm view next version` → `16.3.6` `[VERIFIED: npm registry]`; engines `node: '>=20.9.0'` `[VERIFIED: npm view next engines]` |
| `react` / `react-dom` | **19.3.0** | UI runtime | Align with Next 16 peer; `npm view` → `19.3.0` `[VERIFIED: npm registry]` |
| `typescript` | **7.0.2** (or create-next-app pin ≥5.1) | Types | `npm view typescript version` → `7.0.2` `[VERIFIED: npm registry]`; Next docs min 5.1 `[CITED: nextjs.org/docs/app/getting-started/installation]` |
| `tailwindcss` | **4.3.3** | Utility CSS | STACK.md + `npm view` → `4.3.3` `[VERIFIED: npm registry]` |
| `@tailwindcss/postcss` | **4.3.3** | Tailwind v4 PostCSS plugin | Pair with tailwindcss; official Next guide `[CITED: tailwindcss.com/docs/installation/framework-guides/nextjs]` |
| `eslint` + `eslint-config-next` | **16.3.6** (config) | Lint | Match Next major; `npm view eslint-config-next version` → `16.3.6` `[VERIFIED: npm registry]` |

### Supporting (Phase 1 — optional / deferred)

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `clsx` + `tailwind-merge` | STACK: 2.1.1 / 3.7.0 | Class composition | Only if CTA/variant classes get noisy; skip if single page stays simple |
| `next/font` | built-in | Self-hosted fonts | Optional in Phase 1; if used, `subsets: ['latin','latin-ext']` for Portuguese. Full brand typography can wait for Phase 2 |
| `gsap` / `@gsap/react` / `lenis` / `motion` | STACK pins | Motion | **Do not install in Phase 1** — Phase 3 |
| `@vercel/analytics` | STACK | Analytics | **Do not install in Phase 1** — BASE-05 is Phase 3 |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Next.js App Router | Astro / Vite SPA | Inferior fit for later GSAP chapters + Metadata; STACK already locked Next |
| Hardcoded content module | MDX / CMS | Overkill; four products known; CMS forbidden |
| `wa.me` link | WhatsApp Business API / form | Out of scope; one channel already decided |
| Client CTA component | Plain `<a>` in RSC | Plain anchor is enough; no JS required for hire path |

**Installation:**

```bash
# From repo root (has .git + .planning; no package.json yet)
npx create-next-app@latest . --yes

# If scaffold resolves newer minors, re-pin to STACK:
npm install next@16.3.6 react@19.3.0 react-dom@19.3.0
npm install -D tailwindcss@4.3.3 @tailwindcss/postcss@4.3.3 eslint-config-next@16.3.6

# After install — mandatory for agents:
# Read node_modules/next/dist/docs/ (bundled docs beat training data)
```

**Version verification (2026-09-23):** `npm view` confirmed next `16.3.6`, react/react-dom `19.3.0`, tailwindcss/`@tailwindcss/postcss` `4.3.3`, typescript `7.0.2`, eslint-config-next `16.3.6`. Node on machine: **v26.0.0** (satisfies ≥20.9).

**Planner note:** After scaffold, set `<html lang="pt-BR">` (create-next-app defaults to `en` in docs examples) `[CITED: nextjs.org/docs/app/getting-started/installation]`.

## Package Legitimacy Audit

> Legitimacy seam (`gsd_run query package-legitimacy check`) returned **SUS** for every package with **null** signals (`unknown-age`, `unknown-downloads`, `no-repository`) — tool failure, not genuine slop signals. Independent verification below via `npm view`.

| Package | Registry | Age (npm `time.created`) | Downloads | Source Repo | Verdict | Disposition |
|---------|----------|--------------------------|-----------|-------------|---------|-------------|
| next | npm | since 2011-07-11 | (seam null) | github.com/vercel/next.js | Seam SUS / npm OK | Approved — verified via npm view + official docs |
| react | npm | since 2011-10-26 | (seam null) | github.com/react/react (npm field) | Seam SUS / npm OK | Approved |
| react-dom | npm | (peer of react) | (seam null) | (react monorepo) | Seam SUS / npm OK | Approved |
| tailwindcss | npm | since 2017-10-06 | (seam null) | github.com/tailwindlabs/tailwindcss | Seam SUS / npm OK | Approved |
| @tailwindcss/postcss | npm | (v4 companion) | (seam null) | tailwindlabs | Seam SUS / npm OK | Approved |
| typescript | npm | (long-lived) | (seam null) | microsoft/TypeScript | Seam SUS / npm OK | Approved |

**Postinstall scripts:** `npm view <pkg> scripts.postinstall` empty for next, react, react-dom, tailwindcss, `@tailwindcss/postcss`, typescript — no network postinstall risk observed.

**Packages removed due to [SLOP] verdict:** none
**Packages flagged as suspicious [SUS]:** seam flagged all with null metadata — **do not block install**; treat as Approved after npm view cross-check. No Phase 1 packages discovered only via WebSearch/training.

## Architecture Patterns

### System Architecture Diagram

```text
Visitor (browser)
    │
    ▼
Next.js App Router  GET /
    │
    ├─► RootLayout (RSC)
    │     • <html lang="pt-BR">
    │     • metadata.title / description (Winner Tech)
    │
    └─► HomePage (RSC)
          │
          ├─ content.ts  ──► brand strings, PRODUCTS[4], WA_HIRE_HREF
          │
          ├─ Header ──► "Winner Tech"
          ├─ Hero ──► D-01, D-02, <a> Quero contratar
          ├─ Products ──► Zelo → Alfa → Frutmix → Laço
          │                 (function sentence + niche line each)
          └─ Closing ──► D-10 + same <a> Quero contratar
                              │
                              ▼
                    https://wa.me/5562998286169?text=…
                              │
                              ▼
                    WhatsApp (external)
```

No API routes, no DB, no client motion providers in Phase 1.

### Recommended Project Structure

```text
/
├── app/
│   ├── layout.tsx          # lang=pt-BR, Metadata, fonts optional
│   ├── page.tsx            # compose sections (Server Component)
│   └── globals.css         # @import "tailwindcss"; minimal layout only
├── components/
│   ├── site-header.tsx     # Winner Tech name
│   ├── hero.tsx            # offer + supporting line + CTA
│   ├── product-block.tsx   # name + function + niche
│   ├── hire-cta.tsx        # shared <a> — label + href from content
│   └── closing-hire.tsx    # D-10 + CTA
├── lib/
│   ├── content.ts          # SINGLE SOURCE: products order, copy, WA message
│   └── whatsapp.ts         # buildWaHireHref() — encodeURIComponent once
├── public/                 # empty or favicon only in Phase 1 (no product shots)
└── package.json
```

Keep sections addressable with stable `id`s (`#sistemas`, `#contratar`) so Phase 2/3 can pin/scroll without rewriting content.

### Pattern 1: Single content module (truth source)

**What:** One typed module owns brand strings, product order, function/niche lines, and WhatsApp constants.
**When to use:** Always in Phase 1 — prevents CTA drift and Frutmix invention.
**Example:**

```ts
// lib/content.ts — values locked by CONTEXT / REQUIREMENTS
export const BRAND_NAME = "Winner Tech" as const;

export const HERO = {
  offer: "Fazemos o sistema e o site do seu negócio.",
  support: "Sistemas para quem opera.",
} as const;

export const CTA_LABEL = "Quero contratar" as const;

export const WA_PHONE_DIGITS = "5562998286169" as const; // +55 62 99828-6169
export const WA_MESSAGE =
  "Olá, vi os sistemas de vocês e quero conversar." as const;

export const CLOSING_LINE =
  "Viu o sistema ou precisa do site? Chama a gente." as const; // D-10
```


### Pattern 2: Shared hire CTA (two instances, one href)

**What:** Build the wa.me URL once; render the same component in hero and closing.
**When to use:** D-07 / D-09 — identical destination and label.
**Example:**

```ts
// lib/whatsapp.ts
// Source pattern: WhatsApp Click to Chat FAQ + Laço landing encodeURIComponent
export function buildWaHireHref(phoneDigits: string, message: string): string {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
}

// Expected Phase 1 URL (message locked):
// https://wa.me/5562998286169?text=Ol%C3%A1%2C%20vi%20os%20sistemas%20de%20voc%C3%AAs%20e%20quero%20conversar.
```

```tsx
// components/hire-cta.tsx — Server Component, no 'use client'
export function HireCta({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
```

### Pattern 3: Semantic product blocks (motion-ready shell)

**What:** `<article>` per system with `<h2>` name, one function `<p>`, one niche `<p>` — no cards-as-decoration requirement; no images.
**When to use:** PROD-01–05; Phase 2 adds media around these nodes.

### Discretion recommendation (hero CTA placement)

Place the hero **Quero contratar** **below** the two hero lines (offer → support → button). Matches CONTEXT `<specifics>` visual order and keeps brand/offer as the first read. Side-by-side CTA is allowed by discretion but weaker for mobile stacking.

### Recommended product copy (planner may tighten wording; must keep facts)

| System | Function sentence (must cover) | Niche line (must cover) | Source |
|--------|-------------------------------|-------------------------|--------|
| **Zelo** | Day-of-shop ops on computer + phone; placa, vaga, PIX, WhatsApp | Estética automotiva · lava-jato · oficina | Zelo landing kicker/title `[VERIFIED: ZELO/.../landing.php:12-13,37]` quotes below; PROD-02 |
| **Alfa** | Cadastro, produção, nota fiscal, relatórios | Indústria | PROJECT.md / PROD-03 — no scrape |
| **Frutmix** | Same industrial ceiling as Alfa only | Indústria | PROD-04 — **no modules beyond that list** |
| **Laço** | Fidelidade white-label: app do cliente, app da equipe, painel, marca do negócio | Postos e varejo (short); full vertical list is Phase 2 CASE-04 | Laço metadata `[VERIFIED: posto marinheiro/.../page.tsx:12-16]` |

**Verbatim source quotes for Zelo:**

> `title`: `Zelo — o dia da loja no computador e no celular` `[VERIFIED: /Users/user/DevWeb/ZELO/app/Views/publico/landing.php:12]`

> `lp-kicker`: `Estética · lava-jato · oficina` `[VERIFIED: .../landing.php:37]`

> meta description fragment: `tela da loja, placa, PIX e WhatsApp` `[VERIFIED: .../landing.php:13]`

**Verbatim source quotes for Laço:**

> `title`: `Laço — Fidelidade white-label para postos e varejo | WinnerTech` `[VERIFIED: /Users/user/DevWeb/posto marinheiro/apps/web/app/page.tsx:13]`

> `description`: `Laço é a plataforma de fidelidade personalizada da WinnerTech. App do cliente, app da equipe e painel — com a marca do seu negócio.` `[VERIFIED: .../page.tsx:14-15]`

**Brand spelling:** Public site uses **Winner Tech** (space). Product landings often say `WinnerTech` — do not let that overwrite BRND-01.

### Anti-Patterns to Avoid

- **Fifth product card for "site":** Forbidden by D-03 — site is hero offer + closing line only.
- **Installing GSAP/Lenis/motion in Phase 1:** Breaks content-shell contract; semantic HTML must work without them.
- **Per-product WhatsApp buttons / prefill:** Phase 3 (CTA-03); Phase 1 uses one message for both CTAs.
- **Inventing Frutmix modules/screens:** PROD-04 / project out-of-scope.
- **Scraping alfapapeis.ind.br or importing Laço:** Explicitly forbidden.
- **Old company name as `<title>`:** BRND-02.
- **English scaffold leftovers** (`Get started`, `Deploy now`): Fail BASE-01 — replace entirely.
- **`output: 'export'`:** Not needed; STACK prefers Node host for later `next/image` — leave default.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| WhatsApp deep link encoding | Manual string concat / replace spaces | `encodeURIComponent` + `https://wa.me/{digits}?text=` | Official Click to Chat format; accents in Portuguese |
| App scaffold | Hand-roll webpack/babel | `create-next-app@latest --yes` | Matches Next 16 defaults + AGENTS.md docs path |
| Styling system | Custom CSS framework | Tailwind v4 `@import "tailwindcss"` | Already chosen in STACK |
| Product CMS | Sanity/Contentful/SQLite | `lib/content.ts` | Four known products; no editorial workflow |
| Hire forms | Contact form / chatbot | Two `wa.me` anchors | Single channel locked |

**Key insight:** Phase 1 risk is **content honesty**, not infrastructure. Spend plan budget on locked strings, Frutmix ceiling, and one shared CTA — not on libraries.

## Common Pitfalls

### Pitfall 1: Scaffold English chrome left in place
**What goes wrong:** BASE-01 fails; page looks unfinished.
**Why it happens:** create-next-app ships English starter UI.
**How to avoid:** Replace `app/page.tsx` entirely in the same plan wave as scaffold; grep for English CTAs.
**Warning signs:** "Get started by editing", Deploy on Vercel button.

### Pitfall 2: Two CTAs with different hrefs
**What goes wrong:** D-07/D-09 violated; one button missing `text=` or wrong number.
**Why it happens:** Copy-paste URL without shared constant.
**How to avoid:** Single `WA_HIRE_HREF` export; both buttons import it.
**Warning signs:** Grep finds two different `wa.me` strings.

### Pitfall 3: Phone formatting in URL
**What goes wrong:** Link fails or opens wrong chat.
**Why it happens:** Using `+55 62 99828-6169` with spaces/dashes/plus in path.
**How to avoid:** Digits only: `5562998286169` `[CITED: faq.whatsapp.com/5913398998672934]`.
**Warning signs:** `%20` or `+` inside the phone path segment.

### Pitfall 4: Frutmix feature creep
**What goes wrong:** Trust break when buyer asks for a module that does not exist.
**Why it happens:** Desire for parallel structure with richer products.
**How to avoid:** Frutmix function line ⊆ {cadastro, produção, nota fiscal, relatórios}; no third sentence.
**Warning signs:** Words like "módulo X", "dashboard Y", invented client names.

### Pitfall 5: Coupling content to motion/layout widgets
**What goes wrong:** Phase 2/3 rewrites text when adding rail/pin.
**Why it happens:** Copy buried inside decorative card components.
**How to avoid:** Content in `lib/content.ts`; presentational components only receive props; stable section ids.
**Warning signs:** Product names only appear inside className-heavy JSX with no data module.

### Pitfall 6: Ignoring bundled Next docs
**What goes wrong:** Wrong Metadata/layout APIs from stale training.
**Why it happens:** Next 16 ships docs in `node_modules/next/dist/docs/`.
**How to avoid:** After install, executor/planner agents read that tree before coding `[CITED: nextjs.org/docs/app/getting-started/installation]` (upgrade section).
**Warning signs:** Using Pages Router patterns or removed `next lint` assumptions.

## Code Examples

### Root layout — Portuguese + brand title

```tsx
// app/layout.tsx
// Source: Next.js installation + Metadata API docs
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Winner Tech",
  description:
    "Sistemas e site para quem opera. Zelo, Alfa, Frutmix e Laço.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
```

### Page shell — order locked

```tsx
// app/page.tsx (conceptual)
import { BRAND_NAME, HERO, PRODUCTS, CLOSING_LINE, CTA_LABEL } from "@/lib/content";
import { WA_HIRE_HREF } from "@/lib/whatsapp"; // prebuilt constant
import { HireCta } from "@/components/hire-cta";

export default function HomePage() {
  return (
    <>
      <header>
        <p>{BRAND_NAME}</p>
      </header>
      <main>
        <section aria-labelledby="hero-offer">
          <h1 id="hero-offer">{HERO.offer}</h1>
          <p>{HERO.support}</p>
          <HireCta href={WA_HIRE_HREF} label={CTA_LABEL} />
        </section>
        <section id="sistemas" aria-label="Sistemas">
          {PRODUCTS.map((p) => (
            <article key={p.id}>
              <h2>{p.name}</h2>
              <p>{p.functionLine}</p>
              <p>{p.nicheLine}</p>
            </article>
          ))}
        </section>
        <section id="contratar" aria-labelledby="closing">
          <p id="closing">{CLOSING_LINE}</p>
          <HireCta href={WA_HIRE_HREF} label={CTA_LABEL} />
        </section>
      </main>
    </>
  );
}
```

### WhatsApp href — locked message

```ts
// lib/whatsapp.ts
// Source: https://faq.whatsapp.com/5913398998672934
// Same construction as Laço landing [VERIFIED: posto marinheiro/.../page.tsx:18-22]
import { WA_MESSAGE, WA_PHONE_DIGITS } from "./content";

export const WA_HIRE_HREF =
  `https://wa.me/${WA_PHONE_DIGITS}?text=` +
  encodeURIComponent(WA_MESSAGE);
```

**Laço precedent (do not copy message text — only encoding pattern):**

```ts
// Quote [VERIFIED: posto marinheiro/apps/web/app/page.tsx:18-22]
const WA =
  "https://wa.me/5562998286169?text=" +
  encodeURIComponent(
    "Olá! Quero uma demonstração do Laço (fidelidade WinnerTech) para o meu negócio.",
  );
```

### Tailwind v4 entry

```css
/* app/globals.css — Source: Tailwind Next.js guide */
@import "tailwindcss";
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Pages Router + `next/head` | App Router + Metadata API | Next 13+ default | Use `export const metadata` in `layout.tsx` |
| Tailwind v3 `tailwind.config.js` content globs | Tailwind v4 CSS-first `@import "tailwindcss"` | v4 | create-next-app scaffolds PostCSS plugin |
| `next lint` inside `next build` | Separate `eslint` npm script | Next 16 | Add lint script; build won't lint for you `[CITED: nextjs.org/docs/app/getting-started/installation]` |
| Generic AI purple card landings | Content-first semantic shell, dress later | Project brief | Phase 1 skips visual kits |

**Deprecated/outdated for this phase:**
- Motion libraries as "must install with scaffold" — Phase 3 only.
- CMS for brochure copy — forbidden.
- Floating WhatsApp widget packages — Phase 3 CTA-02.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `create-next-app@latest . --yes` succeeds in a repo that already has `.git` + `.planning` + `.claude` without wiping planning files | Standard Stack | Executor may need alternate scaffold path (temp dir + move) |
| A2 | Exact Portuguese wording of Zelo/Alfa/Frutmix/Laço one-liners can be finalized by planner from the fact table without another discuss-phase | Architecture Patterns | Slight copy polish only — facts are locked by REQUIREMENTS |
| A3 | Phase 1 can ship with default/system fonts; expressive `next/font` can wait for Phase 2 | Standard Stack | Brand voice weaker until Phase 2 — acceptable for content shell |
| A4 | Legitimacy seam null-SUS can be overridden by npm view for well-known packages | Package Legitimacy | If org policy forbids override, add human-verify checkpoint |

**If wrong on A1:** Document fallback: scaffold in `/tmp/winner-tech-app` then move `app/`, config, and `package.json` into repo without deleting `.planning`.

## Open Questions (RESOLVED)

1. **create-next-app vs non-empty root**
   - What we know: Official docs show `npx create-next-app@latest my-app --yes` `[CITED: nextjs.org/docs/app/getting-started/installation]`.
   - What's unclear: Exact CLI refusal rules when `.planning` exists.
   - Recommendation: Plan Wave 0 task tries `. --yes` first; fallback temp-dir copy if it aborts.
   - **RESOLVED:** Plan 01-01 Task 1 uses temp-dir scaffold fallback when CLI refuses non-empty root (move app configs + package.json/lockfile only; preserve `.planning`).

2. **Metadata description final string**
   - What we know: Title must be Winner Tech (BRND-01/02); OG image is Phase 2 (BASE-03).
   - What's unclear: Exact meta description sentence.
   - Recommendation: Planner picks one short pt-BR sentence mentioning sistemas + contratar; not blocking.
   - **RESOLVED:** Plan 01-01 Task 1 sets a short pt-BR `metadata.description` mentioning sistemas e contratar (exact sentence is Claude discretion; title remains Winner Tech).

3. **Laço niche line length**
   - What we know: PROD-05 requires white-label function pieces; full vertical list is CASE-04 (Phase 2).
   - What's unclear: Whether Phase 1 niche line should list all verticals briefly.
   - Recommendation: Short niche ("Postos e varejo") in Phase 1; expand in Phase 2.
   - **RESOLVED:** Plan 01-01 uses short Laço niche **postos e varejo** in Phase 1; full vertical list deferred to Phase 2 CASE-04.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js ≥ 20.9 | Next 16 | ✓ | v26.0.0 | — |
| npm | Scaffold / install | ✓ | 11.14.1 | — |
| npx | create-next-app | ✓ | present | — |
| package.json / node_modules | App | ✗ | — | Wave 0 scaffold creates them |
| Database / Redis / Docker | — | n/a | — | Not required |
| Context7 MCP | Docs lookup | ✗ | — | Official WebFetch / bundled `next/dist/docs/` |

**Missing dependencies with no fallback:** none for Phase 1 scope.

**Missing dependencies with fallback:** Context7 unavailable — use nextjs.org + `node_modules/next/dist/docs/` after install.

**Step 2.6:** External tools checked (Node/npm). No DB/services required.

## Validation Architecture

> **Skipped:** `.planning/config.json` has `workflow.nyquist_validation: false`. No Nyquist test map required for this research. Planner should still include lightweight manual/automated checks in PLAN.md acceptance (e.g. grep for old brand name, assert both CTAs share href, visual pass that four products render in order).

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | no | No auth in Phase 1 |
| V3 Session Management | no | No sessions |
| V4 Access Control | no | Public static brochure |
| V5 Input Validation | yes (static) | WhatsApp `text` is a compile-time string passed through `encodeURIComponent`; no user input |
| V6 Cryptography | no | No secrets; public phone number only |

### Known Threat Patterns for static Next.js brochure + wa.me

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Malformed WhatsApp URL / injection via message | Tampering | Constant message; `encodeURIComponent`; never interpolate user query into href |
| Open redirect via CTA | Spoofing | Hardcoded `https://wa.me/5562998286169` only — no redirect param |
| XSS from CMS/HTML | Tampering | No CMS; React text escaping; no `dangerouslySetInnerHTML` |
| Supply-chain postinstall malware | Tampering | Prefer create-next-app + pin known versions; review `scripts.postinstall` (empty on core pkgs) |
| Leaking old legal name as brand | Information | Title/metadata allowlist: `Winner Tech` only |

## Sources

### Primary (HIGH confidence)
- `.planning/phases/01-product-truth-hire-path/01-CONTEXT.md` — locked D-01…D-10
- `.planning/REQUIREMENTS.md` — BRND/PROD/CTA/BASE IDs
- `.planning/research/STACK.md` — Next 16.3.6 / React 19.3.0 / Tailwind 4.3.3
- `npm view` (2026-09-23) — package versions + next engines + repository URLs
- Zelo landing `/Users/user/DevWeb/ZELO/app/Views/publico/landing.php` — voice + Zelo facts
- Laço landing `/Users/user/DevWeb/posto marinheiro/apps/web/app/page.tsx` — white-label facts + wa.me pattern

### Secondary (MEDIUM confidence)
- [WhatsApp Click to Chat FAQ](https://faq.whatsapp.com/5913398998672934) — `wa.me` + `text=` URL encoding `[CITED]` via WebSearch snippets (direct WebFetch returned HTTP 400 in this environment)
- [Next.js Installation](https://nextjs.org/docs/app/getting-started/installation) — create-next-app `--yes`, Node ≥20.9, `lang` on `<html>`, bundled docs path `[CITED]`
- [Next.js Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) — `export const metadata` `[CITED]`
- [Tailwind CSS + Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs) — `@import "tailwindcss"` + `@tailwindcss/postcss` `[CITED]`

### Tertiary (LOW confidence)
- Research-store cache writes failed (EPERM on `~/.gsd/research-cache`) — digests not persisted this session
- Package-legitimacy seam null signals — overridden by npm view

## Metadata

**Confidence breakdown:**
- Standard stack: **HIGH** — STACK.md + live `npm view` agreement
- Architecture: **HIGH** — greenfield RSC page + content module is unambiguous for locked scope
- Pitfalls: **HIGH** — Frutmix/CTA/scaffold issues grounded in project docs + WhatsApp FAQ
- create-next-app in non-empty repo: **MEDIUM** — A1

**Research date:** 2026-09-23  
**Valid until:** 2026-10-23 (stack minors move fast; re-check `npm view` if planning slips)
