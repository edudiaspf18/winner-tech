# Phase 2: Visual proof + layout quality - Research

**Researched:** 2026-09-23
**Domain:** Brand-led marketing layout, honest product proof assets, Next.js OG/a11y/responsive (pt-BR institutional hire site)
**Confidence:** HIGH (stack + locked decisions + in-repo code); MEDIUM (exact palette hex — discretion); LOW (live Alfa site scrape blocked 403)

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
### Marca gráfica e paleta
- **D-01:** Header mostra o W branco (marca gráfica) sem exigir o fundo azul do arquivo da logo. O wordmark Winner Tech permanece legível. — **Reversibility:** costly — a marca gráfica publicamente colocada no header vira âncora visual da página.
- **D-02:** A página ganha paleta própria, específica e chamativa (MOTN-03). Proibido: gradiente roxo/índigo de IA, cream+#terracotta, dark-mode com glow, azul chapado de dashboard, brutalismo cru.
- **D-03:** Se o arquivo da logo ainda não estiver em `public/`, o plano inclui copiar/exportar o W (sem campo azul obrigatório) a partir do asset entregue na conversa do projeto.

### Trilho dos quatro sistemas
- **D-04:** Os quatro sistemas formam um trilho horizontal (ofício Disney+/Netflix, sem pôster de filme). Ordem travada: Zelo → Alfa → Frutmix → Laço (D-06 fase 1).
- **D-05:** Cada item do trilho continua com função + nicho (copy da fase 1). O trilho não vira card genérico idêntico; composição com âncora visual real (UI ou tipografia).
- **D-06:** No mobile, o trilho pode rolar no eixo X interno; o documento da página não gera scroll horizontal (BASE-02).

### Cases desafio → solução
- **D-07:** Case Alfa: link público https://alfapapeis.ind.br/ (CASE-01). Bloco desafio → solução sem inventar número ou depoimento (CASE-03).
- **D-08:** Case Laço: Posto Marinheiro (CASE-02). Mesmo formato desafio → solução; sem inventar prova.
- **D-09:** Verticais do Laço só as já ditas: postos, conveniência, autocenters, farmácias, supermercado, food, pet/ótica, academias (CASE-04).

### Prova visual de UI
- **D-10:** Imagens reais de interface do Zelo e do Laço entram na página (CASE-05). Fonte: landings/repos locais (`ZELO`, Posto Marinheiro); não inventar tela.
- **D-11:** Frutmix não ganha screenshot inventado (CASE-06). Tratamento: tipografia + composição / ausência explícita de mock.
- **D-12:** Site do negócio continua sem card de produto e sem mock de portfólio inventado (D-03 fase 1).

### Base: responsivo, OG, a11y
- **D-13:** Layout celular e desktop sem scroll horizontal do documento (BASE-02).
- **D-14:** Open Graph: título Winner Tech, description alinhada ao metadata atual, imagem OG dedicada (BASE-03).
- **D-15:** Controles alcançáveis por teclado com foco visível; imagens com alternativa de texto (BASE-04).

### Claude's Discretion
- Tokens exatos de cor (hex/CSS variables) e tipografia expressiva ficam com UI-SPEC / planner, desde que D-02 seja honrado.
- Composição do trilho (snap, padding, tipografia dos nomes) e crop das telas Zelo/Laço ficam com o plano, desde que a prova seja real.
- Texto desafio→solução: planner redige a partir de fatos públicos dos cases; se faltar fato, bloco fica curto e honesto — nunca inventa métrica.

### Deferred Ideas (OUT OF SCOPE)
- Scroll preso / capítulos / WebGL — Phase 3 (MOTN-01)
- prefers-reduced-motion path completo de coreografia — Phase 3 (MOTN-02)
- WhatsApp flutuante + prefill por sistema + analytics de origem — Phase 3 (CTA-02, CTA-03, BASE-05)
- Depoimento/métrica só quando Eduardo entregar dado (CASE-07)
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| BRND-03 | W branco sem fundo azul obrigatório | SVG/PNG crop do W; header sobre paleta própria; logo-ref path |
| MOTN-03 | Cor específica, não paleta IA | Anti-defaults + recommended operational ink/accent token set |
| CASE-01 | Link Alfa Papéis | External `https://alfapapeis.ind.br/`; no UI scrape |
| CASE-02 | Posto Marinheiro = case Laço | Facts from Laço landing copy |
| CASE-03 | Desafio→solução sem métrica inventada | Honest short copy patterns; forbid PhoneMock demo numbers |
| CASE-04 | Verticais Laço só lista dita | `VERTICAIS` verbatim from Laço landing |
| CASE-05 | UI real Zelo + Laço | Asset pipeline; no raster screenshots on disk — capture plan |
| CASE-06 | Sem screenshot Frutmix | Typography/composition slot only |
| BASE-02 | Sem H-scroll do documento | `overflow-x: clip` + inner rail scroll |
| BASE-03 | OG title/description/image | Next 16 `metadata` + `opengraph-image` |
| BASE-04 | Foco visível + alt | `:focus-visible`; `next/image` alt |
</phase_requirements>

## Project Constraints (from CLAUDE.md / AGENTS.md)

- This is **not** the Next.js of training data — read guides under `node_modules/next/dist/docs/` before writing code. [VERIFIED: AGENTS.md:1-9]
- Caveman communication for chat; **code/commits/PRs written normal** (workspace rules).
- Phase 1 locks: hero copy, product order Zelo→Alfa→Frutmix→Laço, WhatsApp message/number — **do not reopen**. [VERIFIED: 01-CONTEXT.md]

## Summary

Phase 2 **vests** the Phase 1 Portuguese brochure: brand mark without logo-file blue field, a striking non-AI palette, a horizontal four-system rail (copy unchanged), two honest desafio→solução cases, real Zelo/Laço UI proof, Frutmix without invented screens, plus document-level no H-scroll, OG share card, and keyboard focus/alt.

Current app is a zinc-on-white content shell (`SiteHeader` text-only, stacked `ProductBlock`s, metadata title/description only — no OG image). [VERIFIED: `app/layout.tsx:4-8`, `components/site-header.tsx:4-9`, `app/page.tsx:7-20`] No W asset in `public/` yet (only create-next-app SVGs). [VERIFIED: `public/` listing this session]

**Proof gap (critical for planner):** neither ZELO nor Posto Marinheiro ships ready **raster screenshots** of live product UI suitable to copy. ZELO landing embeds **HTML/CSS product chrome** of Tela Hoje / Entrada. [VERIFIED: `ZELO/app/Views/publico/landing.php:56-150`] Laço landing embeds **CSS PhoneMock** screens plus marketing JPEGs `hero-posto.jpg` / `hand-phone.jpg`. [VERIFIED: `posto marinheiro/apps/web/components/landing/PhoneMock.tsx:44-108`, asset paths this session] Plan must include an **asset capture/export** step before CASE-05 can pass — do not invent Frutmix; do not scrape Alfa Papéis UI (site returned HTTP 403 this session).

**Primary recommendation:** Export white W (+ optional wordmark) to `public/brand/`; tokenized ink + one operational accent (not logo blue full-bleed); replace stacked products with a snap horizontal rail driven by `PRODUCTS`; add `CaseBlock`s for Alfa Papéis + Posto Marinheiro with short honest copy; ship captured Zelo/Laço UI crops via `next/image`; Frutmix rail cell = type-only; add `app/opengraph-image` + `metadataBase`/`openGraph`; lock document `overflow-x: clip` and `:focus-visible` on CTAs/links.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| W mark + wordmark in header | Browser / Client (SSR HTML) | CDN / Static (`public/brand`) | Brand chrome is document markup + static SVG/PNG |
| Page palette / CSS variables | Frontend Server (SSR) + CSS | — | Tokens in `globals.css`; no runtime theme service |
| Horizontal product rail | Browser / Client | — | Overflow/scroll-snap is layout CSS; RSC OK if no JS needed |
| Case desafio→solução + external Alfa link | Frontend Server (SSR) | — | Static content + outbound anchor; no API |
| Laço verticals list | Frontend Server (SSR) | Content module | Copy from locked source list in `lib/content.ts` |
| Zelo/Laço UI imagery | CDN / Static | Browser (`next/image`) | Optimized static assets; alt text in markup |
| Frutmix no-mock treatment | Frontend Server (SSR) | — | Typography/composition only |
| Open Graph title/desc/image | Frontend Server (SSR) | CDN / Static | Next Metadata + `opengraph-image` file convention |
| Keyboard focus + image alt | Browser / Client | — | CSS `:focus-visible` + img alt attributes |
| Document no H-scroll | Browser / Client | — | Root overflow clip + constrained widths |

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `next` | 16.3.6 | App Router, Metadata, `next/image`, `next/og` | Already in repo; OG + image pipeline documented in bundled Next docs [VERIFIED: `package.json:12-14`] |
| `react` / `react-dom` | 19.3.0 | UI | Peer of Next 16 [VERIFIED: `package.json:13-14`] |
| `tailwindcss` + `@tailwindcss/postcss` | 4.3.3 | Utility styling + design tokens | Already in repo [VERIFIED: `package.json:17-23`] |
| TypeScript | ^5 | Typed content + components | Already scaffolded |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `next/font` (built-in) | (via next 16.3.6) | Expressive self-hosted fonts, `latin-ext` for pt-BR | UI-SPEC picks faces; no new npm package |
| `sharp` | 0.35.4 (available) | Image optimization on Node host | Already present under `node_modules`; keep Node host (no `output: 'export'`) [VERIFIED: `npm view sharp` + local `node_modules/sharp`] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Static `app/opengraph-image.png` | `opengraph-image.tsx` + `ImageResponse` | Dynamic OG nicer for brand lockup; static PNG simpler for MVP — **prefer static or simple `ImageResponse` with W + title** |
| Raster logo PNG | Inline SVG path of W | SVG scales clean; PNG crop faster from logo-ref — **export SVG if possible, PNG OK for MVP** |
| Embla / Swiper for rail | Native CSS scroll-snap | Extra dependency unnecessary for 4 items — **don't install carousel libs** |
| Scraped Alfa screenshots | Public link + typography case | Legal/trust risk — **never scrape** [CITED: PITFALLS.md Pitfall 2] |

**Installation:**

```bash
# No new packages required for Phase 2 MVP.
# Use existing next@16.3.6 + tailwindcss@4.3.3.
```

**Version verification:** `next@16.3.6`, `react@19.3.0`, `tailwindcss@4.3.3` confirmed from `package.json` this session. [VERIFIED: `package.json:12-23`]

## Package Legitimacy Audit

> Phase 2 MVP installs **no new external packages**.

| Package | Registry | Age | Downloads | Source Repo | Verdict | Disposition |
|---------|----------|-----|-----------|-------------|---------|-------------|
| — | — | — | — | — | N/A | No install |

**Packages removed due to [SLOP] verdict:** none  
**Packages flagged as suspicious [SUS]:** none  

*Do not add Embla/Swiper/framer-motion for the rail. Do not vendor Laço/ZELO app packages into this repo.*

## Architecture Patterns

### System Architecture Diagram

```text
[Visitor browser]
      │
      ▼
[Next.js Document Shell — app/layout.tsx]
  metadata (title, description, openGraph)
  + app/opengraph-image.(png|tsx)
  + globals.css tokens (--ink, --accent, --surface…)
      │
      ▼
[page.tsx composition]
  SiteHeader ──► public/brand/w-mark.svg (white W, no blue field)
  Hero (Phase 1 copy LOCKED)
  ProductRail ──► PRODUCTS[Zelo→Alfa→Frutmix→Laço]
       │              ├─ media: zelo-ui.webp (captured)
       │              ├─ media: (Alfa: type / industrial frame — no client scrape)
       │              ├─ media: Frutmix typography-only
       │              └─ media: laco-ui.webp (captured)
  CaseSection
       ├─ CaseBlock Alfa Papéis ──► <a href="https://alfapapeis.ind.br/">
       └─ CaseBlock Posto Marinheiro + VERTICAIS chips
  ClosingHire (Phase 1 CTA LOCKED)
      │
      ▼
[Static assets /public]
  brand/  proof/zelo/  proof/laco/  (no proof/frutmix screenshots)
```

### Recommended Project Structure

```
public/
├── brand/
│   ├── w-mark.svg          # white W, transparent bg
│   └── wordmark.svg        # optional WINNER TECH
├── proof/
│   ├── zelo/
│   │   └── hoje-desktop.webp
│   └── laco/
│       └── app-home.webp
app/
├── layout.tsx              # metadata + metadataBase + openGraph
├── opengraph-image.png     # or .tsx ImageResponse
├── opengraph-image.alt.txt
├── globals.css             # CSS variables + overflow-x clip + focus-visible
└── page.tsx
components/
├── site-header.tsx         # W + wordmark
├── product-rail.tsx        # horizontal snap rail
├── product-rail-item.tsx   # function+niche + visual anchor
├── case-block.tsx          # desafio → solução
├── proof-image.tsx         # next/image wrapper w/ required alt
└── …existing hero/hire…
lib/
├── content.ts              # extend: CASES, LACO_VERTICALS, PROOF_ASSETS
└── whatsapp.ts             # unchanged
```

### Pattern 1: W mark without blue field (BRND-03 / D-01 / D-03)

**What:** Treat logo-ref as a **source plate**, not a background system. Extract white geometric W (and optional wordmark) onto transparent SVG/PNG; place on page `background` from tokens — never `#1548B3`-class full-bleed as brand compliance.

**Source asset found this session:**  
`/Users/user/Library/Application Support/Cursor/AgentStores/cursor_agent_stores/bc-b3608396-d67b-4f15-8386-83d9cc9f37ca/files/media/winnertech-logo-ref.png` — PNG 1452×866, white W + “WINNER TECH” on solid royal blue with network motif. [VERIFIED: `file` + image read this session]

**When to use:** Header always; optionally OG card.

**Example:**

```tsx
// Header: white W on dark ink header bar — blue field discarded
import Image from "next/image";
import { BRAND_NAME } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="flex items-center gap-3 bg-[var(--ink)] px-6 py-4">
      <Image
        src="/brand/w-mark.svg"
        alt=""
        width={28}
        height={28}
        priority
      />
      <span className="text-lg font-semibold tracking-tight text-white">
        {BRAND_NAME}
      </span>
    </header>
  );
}
```

Decorative mark may use empty `alt` **only if** adjacent visible text already names the brand (WCAG decorative image pattern). If mark is sole brand cue, use `alt="Winner Tech"`. [ASSUMED: WCAG decorative-image practice]

### Pattern 2: Operational palette (MOTN-03 / D-02) — recommended direction

**What:** Dark operational ink + one vivid **loja/ops** accent + readable surfaces. Logo blue may appear as a **small accent**, never page field.

**Anti-defaults (locked):** purple/indigo AI gradient; cream + terracotta; dark + glow; dashboard flat blue; crude brutalism. [VERIFIED: 02-CONTEXT D-02]

**Recommended token starter (discretion — UI-SPEC may replace hex):**

| Token | Suggested role | Example direction |
|-------|----------------|-------------------|
| `--ink` | Page/chrome dark | Near-black cool ink (~`#0B1220`) — not pure Zelo clone obligation |
| `--surface` | Section panels | Slightly lifted ink (~`#141C2B`) |
| `--paper` | Text on light islands if any | Warm off-white (~`#F3F0E8`) — **not** cream+#terracotta pairing |
| `--accent` | CTA / live signal | Operational gold/amber (~`#E0A100`) — store/ops energy (Zelo gold family, not purple) |
| `--accent-ink` | Text on accent | Near-black |
| `--mute` | Secondary copy | Cool gray on ink |
| `--logo-blue` | Optional 1-use accent | Sample from logo-ref (~`#1548B3`) — chip/underline only |

**Typography:** Use `next/font` with expressive pair (display + body), `subsets: ['latin', 'latin-ext']` for Portuguese. Avoid Inter/Roboto/Arial/system-only stacks per project frontend rules. Exact faces = UI-SPEC. [ASSUMED: font pick]

### Pattern 3: Horizontal product rail (D-04..D-06)

**What:** One row, four cells, order from `PRODUCTS`, inner X-scroll on small viewports, **document** never scrolls horizontally.

**CSS contract:**

```css
html,
body {
  overflow-x: clip; /* page-level — Zelo landing uses this pattern */
}

.product-rail {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  padding-inline: 1.5rem;
  /* never width: 100vw with horizontal padding — classic H-scroll bug */
}

.product-rail__item {
  flex: 0 0 min(85vw, 22rem);
  scroll-snap-align: start;
}
```

Zelo landing already uses `overflow-x: clip` on `.lp`. [VERIFIED: `ZELO/public/assets/css/landing-zelo.css` excerpt this session: `.lp { … overflow-x: clip; }`]

**Content:** Keep Phase 1 strings from `PRODUCTS` — do not rewrite função/nicho. [VERIFIED: `lib/content.ts:24-49`]

```ts
// Verbatim product names/order from lib/content.ts:
// "Zelo", "Alfa", "Frutmix", "Laço"
```

**Visual anchors per cell (D-05):**

| Product | Anchor |
|---------|--------|
| Zelo | Real UI crop (CASE-05) |
| Alfa | Typography / industrial composition — **no** Alfa Papéis private UI |
| Frutmix | Typography + explicit no-mock (CASE-06) |
| Laço | Real UI crop (CASE-05) |

### Pattern 4: Case blocks desafio → solução (CASE-01..04)

**What:** Two semantic blocks. No invented numbers, quotes, or testimonials (CASE-03 / CASE-07 deferred).

**Alfa Papéis (CASE-01):**

- Outbound link: `https://alfapapeis.ind.br/` (required).
- Live fetch this session: **HTTP 403** — do not scrape HTML/CSS/UI. [VERIFIED: curl/WebFetch 403]
- Safe facts for copy (product side): Eduardo — sistema industrial completo: cadastro, produção, nota fiscal, relatórios; case público Alfa Papéis. [VERIFIED: PROJECT.md Context + PROD-03]
- Secondary registry noise (CNPJ directories via WebSearch): indústria de chapas/embalagens de papelão ondulado, Anápolis/GO — **optional flavor only if planner keeps it soft**; do **not** turn capital social / anos / telefone into “metrics.” [CITED: WebSearch CNPJ directories — MEDIUM, not product proof]
- If facts thin: short honest block beats fiction (CONTEXT discretion).

**Draft skeleton (planner may edit; not locked):**

- Desafio: Operação industrial precisa de cadastro, produção, nota fiscal e relatórios no mesmo sistema.
- Solução: Winner Tech entrega o Alfa; case público Alfa Papéis — link.
- Proibido: “+X% produtividade”, depoimentos, screenshots do ERP do cliente.

**Posto Marinheiro / Laço (CASE-02):**

Public facts from Laço landing (owner repo):

> “Posto Marinheiro roda no Laço.” … “a moeda do programa é exclusiva: as Âncoras — nome, visual náutico e patentes da marca Marinheiro.” … “Âncoras, QR na bomba, frentista e painel admin” [VERIFIED: `posto marinheiro/apps/web/app/page.tsx:224-254`]

**Do not copy decorative PhoneMock numbers** (`1.248 Âncoras`, `72%`) into case copy — those are mock UI fillers, not approved metrics. [VERIFIED: `PhoneMock.tsx:63-74`]

**Verticais (CASE-04) — use only this list** (map to CONTEXT wording: postos, conveniência, autocenters, farmácias, supermercado, food, pet/ótica, academias):

```ts
// Source: posto marinheiro/apps/web/app/page.tsx:122-155 VERTICAIS titles
const LACO_VERTICALS = [
  "Postos de combustível",
  "Conveniência",
  "Autocenters e oficinas",
  "Farmácias",
  "Supermercado e atacarejo",
  "Food e restaurantes",
  "Pet, ótica e especialidades",
  "Academias e serviços",
] as const;
```

[VERIFIED: `posto marinheiro/apps/web/app/page.tsx:122-155`]

### Pattern 5: Proof asset pipeline (CASE-05 / CASE-06)

**Inventory (this session):**

| Source | What exists | Usable as CASE-05? |
|--------|-------------|-------------------|
| ZELO `public/assets/img/` | Brand icons/SVG only | No product UI raster |
| ZELO `landing.php` | HTML/CSS mock of Hoje + Entrada | Depicts real IA — **capture/screenshot of this or live admin preferred** |
| Laço `PhoneMock.tsx` | CSS phone screens | Depicts product chrome — **prefer live app screenshot over shipping mock as “foto”** |
| Laço `public/landing/*.jpg` | `hero-posto.jpg` 1280×720, `hand-phone.jpg` 864×1152 | Marketing photos — OK as atmosphere, **not substitute** for UI interface requirement alone |
| Frutmix | No local code / screens | **Must not invent** (CASE-06) |
| Alfa Papéis site | 403 | Link only; no scrape |

**Recommended pipeline (planner Wave 0 / early task):**

1. Run local ZELO demo or open landing staged UI → capture desktop Hoje + optional mobile Entrada → export WebP/PNG → `public/proof/zelo/`.
2. Run Laço mobile or web panel (Posto Marinheiro theme) → capture home/QR/staff → `public/proof/laco/`. Prefer **real app pixels** over PhoneMock.
3. Commit only owner-approved crops; strip PII (fake demo data OK if clearly product UI).
4. Wire via `next/image` with explicit width/height or `fill` + `aspect-ratio` reserved box (CLS).
5. Frutmix rail item: large type “Frutmix” + industrial função lines — empty media slot or geometric composition — **no fake ERP screenshot**.

**Alt text examples (pt-BR):**  
`alt="Tela Hoje do Zelo com vagas e placas na operação da loja"`  
`alt="App Laço do Posto Marinheiro com saldo em Âncoras"`

### Pattern 6: Open Graph (BASE-03 / D-14)

Current metadata:

```ts
export const metadata: Metadata = {
  title: "Winner Tech",
  description:
    "Sistemas para quem opera. Conheça Zelo, Alfa, Frutmix e Laço e contrate a Winner Tech.",
};
```

[VERIFIED: `app/layout.tsx:4-8`]

**Use:**

1. Keep title `"Winner Tech"` and keep/align description with current string (D-14).
2. Add dedicated OG image via file convention `app/opengraph-image.png` (or `.tsx` + `ImageResponse` from `next/og`) — Next injects `og:image` tags automatically. [CITED: `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.md`]
3. Add `opengraph-image.alt.txt` (e.g. `Winner Tech`).
4. Set `metadataBase` to the eventual production origin so relative OG URLs resolve; without it, relative URL fields error at build. [CITED: `generate-metadata.md` metadataBase section]
5. Optionally mirror fields in `metadata.openGraph` (`title`, `description`, `locale: 'pt_BR'`, `type: 'website'`).

```tsx
// Source: Next generate-metadata openGraph example (adapted)
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // replace with real host when known
  title: "Winner Tech",
  description:
    "Sistemas para quem opera. Conheça Zelo, Alfa, Frutmix e Laço e contrate a Winner Tech.",
  openGraph: {
    title: "Winner Tech",
    description:
      "Sistemas para quem opera. Conheça Zelo, Alfa, Frutmix e Laço e contrate a Winner Tech.",
    siteName: "Winner Tech",
    locale: "pt_BR",
    type: "website",
  },
};
```

OG image composition: W mark + “Winner Tech” on ink (not mandatory blue field). File ≤ 8MB. [CITED: opengraph-image.md size note]

### Pattern 7: A11y focus + alt (BASE-04 / D-15)

**Gaps now:** `HireCta` has no focus ring styles; decorative create-next-app SVGs unused. [VERIFIED: `components/hire-cta.tsx:7-16`]

```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
```

- All interactive controls (header links, hire CTAs, Alfa case link, rail if focusable) reachable by Tab.
- Images that convey UI proof: non-empty descriptive `alt` in Portuguese.
- PhoneMock pattern of `aria-hidden` on decorative frames is OK only when not the sole proof; real `<Image>` proof must not be `aria-hidden`.

### Anti-Patterns to Avoid

- **Mandatory logo blue full-bleed** — contradicts D-01/D-02 and PITFALLS #11.
- **Four identical generic cards** — use rail with distinct anchors (D-05).
- **Emulating Frutmix screens** — CASE-06 hard fail.
- **Scraping alfapapeis.ind.br** — 403 + PITFALLS #2; link only.
- **Copying Laço landing stats (`3 apps`, `1 marca`, `N unidades`) as Winner Tech case metrics** without owner approval — decorative marketing; prefer qualitative copy. [ASSUMED: treat as non-metric unless Eduardo confirms]
- **`width: 100vw` + padding** causing page H-scroll.
- **GSAP/Lenis/WebGL** — Phase 3 only.
- **Merging posto marinheiro / ZELO app code** into this git — present assets only.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| OG image meta tags by hand | Manual `<meta property="og:…">` in layout | `metadata` + `opengraph-image` file convention | Next generates correct tags; less drift |
| Carousel library for 4 items | Embla/Swiper | CSS scroll-snap rail | Zero deps; a11y simpler |
| Image CDN pipeline | Custom sharp scripts | `next/image` | Built-in optimization on Node host |
| Fake Frutmix UI kit | Invented Figma screens | Typography composition | Trust / CASE-06 |
| Alfa private UI clone | Scraped dashboards | Public link + text case | Legal/trust |

**Key insight:** Honesty of proof is the product differentiator — hand-rolling “complete-looking” media destroys the hire path credibility.

## Common Pitfalls

### Pitfall 1: Shipping CSS mocks as if they were photographs without capture

**What goes wrong:** CASE-05 fails review; PhoneMock demo numbers leak into case copy.  
**Why:** No rasters on disk; agents paste landing mocks.  
**How to avoid:** Explicit capture task; separate `proof/` from marketing photos; ban mock metrics in copy.  
**Warning signs:** Repo contains only `PhoneMock`-looking composites; alt text says “screenshot” for pure CSS.

### Pitfall 2: Page horizontal scroll from the rail

**What goes wrong:** BASE-02 fails on mobile.  
**Why:** `100vw`, negative margins, or missing `overflow-x: clip` on root.  
**How to avoid:** Root clip + inner `overflow-x: auto` only; test iOS Safari.  
**Warning signs:** Body grows wider than viewport; sideways rubber-banding on page.

### Pitfall 3: OG without `metadataBase` / missing image

**What goes wrong:** Share cards blank or build errors on relative URLs.  
**Why:** Only title/description set today.  
**How to avoid:** Ship `opengraph-image` + `metadataBase` early.  
**Warning signs:** Facebook/WhatsApp debugger shows no image.

### Pitfall 4: Invisible keyboard focus after restyle

**What goes wrong:** BASE-04 fails; zinc CTA becomes hard to see on focus.  
**Why:** New dark palette removes default outlines.  
**How to avoid:** Global `:focus-visible` with accent; manual Tab pass.  
**Warning signs:** `outline: none` without replacement.

### Pitfall 5: Alfa “enrichment” from CNPJ scrapers

**What goes wrong:** Invented-feeling specificity or wrong legal entity flavor.  
**Why:** Site 403; agents fill from third-party directories.  
**How to avoid:** Prefer Eduardo product facts + link; keep block short.  
**Warning signs:** Case cites capital social or “32 anos” as product proof.

### Pitfall 6: AI-generic palette relapse

**What goes wrong:** MOTN-03 fails brand test.  
**Why:** Default generative kits.  
**How to avoid:** Checklist against D-02 banned looks before UI merge.  
**Warning signs:** Purple glow, cream+terracotta, dashboard blue wash.

## Code Examples

### Extend content module for cases + verticals

```ts
// lib/content.ts — additive; do not change HERO / PRODUCTS strings
export const CASES = [
  {
    id: "alfa-papeis",
    product: "Alfa",
    title: "Alfa Papéis",
    href: "https://alfapapeis.ind.br/",
    challenge:
      "Indústria precisa de cadastro, produção, nota fiscal e relatórios no mesmo sistema.",
    solution:
      "O Alfa cobre esse ciclo. Case público: Alfa Papéis.",
  },
  {
    id: "posto-marinheiro",
    product: "Laço",
    title: "Posto Marinheiro",
    href: null as string | null,
    challenge:
      "Rede de postos quer fidelidade com a própria marca — sem cartão plástico genérico.",
    solution:
      "Posto Marinheiro roda no Laço: Âncoras, QR na bomba, app da equipe e painel com a cara da rede.",
  },
] as const;

export const LACO_VERTICALS = [
  "Postos de combustível",
  "Conveniência",
  "Autocenters e oficinas",
  "Farmácias",
  "Supermercado e atacarejo",
  "Food e restaurantes",
  "Pet, ótica e especialidades",
  "Academias e serviços",
] as const;
```

Challenge/solution strings above are **research drafts** for planner edit — grounded in PROJECT.md + Laço landing; not locked decisions.

### `next/image` reserved proof box

```tsx
import Image from "next/image";

export function ProofImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface)]">
      <Image src={src} alt={alt} fill sizes="(max-width:768px) 85vw, 22rem" className="object-cover object-top" />
    </div>
  );
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Manual OG meta tags | App Router `metadata` + `opengraph-image` file convention | Next App Router metadata APIs | Fewer share bugs |
| jQuery carousels | CSS scroll-snap rails | Modern CSS | Lighter marketing pages |
| Full-bleed logo color as brand | Mark + designed palette | This project constraint | Distinctive MOTN-03 |

**Deprecated/outdated:**

- Treating logo-file blue as mandatory site background.
- Inventing portfolio screenshots to “look complete.”

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Exact hex tokens above are starter only; UI-SPEC may replace | Palette | Visual rework — low product risk |
| A2 | Expressive font pairing via `next/font` (faces TBD) | Standard Stack | Swap faces cheaply |
| A3 | Production `metadataBase` URL not yet known — placeholder until deploy host chosen | OG | Build/config fix at ship |
| A4 | Decorative W may use empty alt when wordmark text present | A11y | Adjust if header is icon-only |
| A5 | Laço landing “3 / 1 / N” stats should not be reused as metrics | Cases | If Eduardo later approves, can add under CASE-07 |
| A6 | CNPJ-directory industrial description is optional flavor, not required case proof | Alfa case | Over-specific wrong entity risk if mis-merged |

**If this table is empty:** N/A — assumptions listed.

## Open Questions

1. **Production canonical URL for `metadataBase`?**
   - What we know: needed for relative OG resolution.
   - What's unclear: final domain.
   - Recommendation: env `NEXT_PUBLIC_SITE_URL` or literal once host chosen; planner checkpoint.

2. **Who captures Zelo/Laço screenshots, and which screens are approved?**
   - What we know: no rasters on disk; landings have CSS chrome.
   - What's unclear: owner preference for live app vs landing-stage capture.
   - Recommendation: human capture checklist in plan; block CASE-05 verify until files in `public/proof/`.

3. **May logo-blue appear as tiny accent?**
   - What we know: full-bleed forbidden; accent not forbidden.
   - What's unclear: Eduardo taste on any blue.
   - Recommendation: default accent = operational gold; logo-blue optional 1-token.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Next build/dev | ✓ | v26.0.0 | — |
| npm | scripts | ✓ | 11.14.1 | — |
| next / react / tailwind | app | ✓ | 16.3.6 / 19.3.0 / 4.3.3 | — |
| sharp | `next/image` optimize | ✓ | 0.35.4 present | — |
| Logo source PNG | BRND-03 | ✓ | AgentStores `winnertech-logo-ref.png` | Re-ask Eduardo for file |
| ZELO local repo | CASE-05 source | ✓ | path `/Users/user/DevWeb/ZELO` | Capture blocked → human provides PNGs |
| Posto Marinheiro repo | CASE-05 / CASE-02 | ✓ | path `/Users/user/DevWeb/posto marinheiro` | Same |
| alfapapeis.ind.br live HTML | CASE enrichment | ✗ (403) | — | Link-only case; no scrape |
| Frutmix codebase | screenshots | ✗ | — | Typography only (intended) |

**Missing dependencies with no fallback:** none for code — **screenshot files themselves** are the blocking asset (fallback = owner drop into `public/proof/`).

**Missing dependencies with fallback:** Alfa HTML scrape → public link + short copy.

## Security Domain

> `workflow.security_enforcement` enabled (ASVS level 1). [VERIFIED: `.planning/config.json`]

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | no | Brochure site; no login |
| V3 Session Management | no | — |
| V4 Access Control | no | Public pages only |
| V5 Input Validation | yes (light) | No user-generated input; outbound links are static constants (`CASES[].href`, `WA_HIRE_HREF`) — never build from query params |
| V6 Cryptography | no | — |

### Known Threat Patterns for this stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Scraping/mirroring client private UI | Information disclosure / legal | Public facts + link only; no Alfa assets in repo |
| Shipping PII in “real” screenshots | Information disclosure | Capture with demo data; review before commit |
| Open redirect / injected WhatsApp text | Tampering | Keep `WA_HIRE_HREF` compile-time constant (already) [VERIFIED: `lib/whatsapp.ts`] |
| Supply-chain via new carousel deps | Tampering | Install zero new packages this phase |
| Hotlinking remote product images | Availability / privacy | Copy approved assets into `public/` |

## Sources

### Primary (HIGH confidence)

- `.planning/phases/02-visual-proof-layout-quality/02-CONTEXT.md` — D-01..D-15
- `.planning/phases/01-product-truth-hire-path/01-CONTEXT.md` — locked offer/order/CTA
- `.planning/PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md` Phase 2
- `.planning/research/SUMMARY.md`, `PITFALLS.md`
- In-repo: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `lib/content.ts`, `components/*`, `package.json`
- Next 16 bundled docs: `node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md`, `…/opengraph-image.md`, `…/generate-metadata.md` (openGraph / metadataBase)
- ZELO: `app/Views/publico/landing.php`, `public/assets/css/landing-zelo.css` (`overflow-x: clip`)
- Laço: `apps/web/app/page.tsx` (`VERTICAIS`, case copy), `PhoneMock.tsx`, landing JPEGs
- Logo-ref PNG in Cursor AgentStores (path above)

### Secondary (MEDIUM confidence)

- WebSearch CNPJ/directory hits for Alfa Papéis industrial activity (Anápolis) — **not** used as required metrics
- Project frontend design rules (anti AI-generic palettes)

### Tertiary (LOW confidence)

- Exact accent hex / font pairing (discretion until UI-SPEC)
- HTTP 403 on alfapapeis.ind.br may be bot/WAF-specific — human browser may differ; still **do not scrape UI**

## Metadata

**Confidence breakdown:**

- Standard stack: **HIGH** — already in `package.json`; Next OG docs read locally
- Architecture: **HIGH** — constrained by CONTEXT; maps cleanly onto existing RSC brochure
- Pitfalls: **HIGH** — aligns PITFALLS.md + live asset inventory gaps
- Palette hex / fonts: **MEDIUM** — discretion
- Alfa live site content: **LOW** — 403 this session

**Research date:** 2026-09-23  
**Valid until:** 2026-10-23 (30 days; re-check if Next minor bumps or logo asset moves)

---

*Nyquist validation architecture omitted: `workflow.nyquist_validation` is `false` in `.planning/config.json`.*  
*Runtime State Inventory omitted: not a rename/migration phase.*
