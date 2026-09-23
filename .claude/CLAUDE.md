<!-- GSD:project-start source:PROJECT.md -->

## Project

**Winner Tech**

Site institucional da Winner Tech para apresentar os sistemas próprios e ser contratada. O visitante vê quatro produtos — Zelo, Alfa, Frutmix e Laço — cada um com a função e o nicho em que opera, e sai com um caminho claro para falar com a empresa.

A marca pública é **Winner Tech**. "Winner Tecnologia da Informação" é o nome antigo e não entra como título do site.

**Core Value:** Um visitante entende, em uma passagem, o que a Winner Tech faz, para quem cada sistema serve, e como pedir uma conversa para contratar.

### Constraints

- **Marca**: nome público Winner Tech — nome antigo fica só como contexto histórico, se aparecer
- **Produtos**: quatro sistemas nomeados; função e nicho obrigatórios em cada um
- **Fonte da verdade**: código e landings locais de Zelo e Laço; fala do Eduardo para Alfa e Frutmix; não inventar feature que não esteja numa dessas fontes
- **Código ausente**: Laço não entra neste git; Frutmix não está no disco; Alfa ao vivo é o site da Alfa Papéis
- **Visual**: movimento e cor forte; proibido o visual padrão de template de IA (gradiente roxo, cards iguais, hero centralizado sem ideia, brutalismo cru, monocromático com acento azul de dashboard)
- **Ofício visual**: técnicas das referências abaixo. Identidade, layout, logo, copy e paleta dessas marcas ficam de fora.
- **Idioma**: português
- **Stack**: ainda não escolhida. Repo sem `package.json`. Pesquisa de stack vem depois deste documento.
- **Contato**: um canal, WhatsApp +55 62 99828-6169

<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->

## Technology Stack

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended | Confidence |
|------------|---------|---------|-----------------|------------|
| **Next.js** (App Router) | **16.3.6** (`latest`) | Framework, routing, SSG/SSR, image/font opts, Metadata API | Industry default for “Next.js-class” marketing sites. App Router + Turbopack are create-next-app defaults. Server Components keep motion code client-scoped; Metadata/OG without a CMS. Node ≥20.9. | HIGH |
| **React** / **react-dom** | **19.3.0** | UI runtime | Peer of Next 16; required for App Router. Keep versions aligned with `next`. | HIGH |
| **TypeScript** | **7.0.2** (or whatever `create-next-app` pins; Next min **5.1**) | Type-safe app code | Default in recommended Next scaffold. Prefer create-next-app’s resolved version if it differs. | HIGH |
| **Tailwind CSS** | **4.3.3** + **`@tailwindcss/postcss` 4.3.3** | Utility styling, design tokens via CSS | Official Next + Tailwind v4 path (`@import "tailwindcss"`). Fast iteration for bold color/composition without a component library aesthetic. | HIGH |
| **GSAP** | **3.15.0** + **ScrollTrigger** (bundled plugin) | Scroll choreography: pin, scrub, timelines, snap | Standard for Apple/Samsung-league product storytelling. Pinning + scrubbed multi-step timelines beat React-prop animation. **Entire GSAP library is free** (Webflow-backed; verified gsap.com/pricing). | HIGH |
| **`@gsap/react`** | **2.1.2** | `useGSAP` hook / cleanup | Correct React 18/19 lifecycle for GSAP; avoids leaked ScrollTriggers on route remount. Peers: `gsap ^3.12.5`, `react >=17`. | HIGH |
| **Lenis** | **1.3.26** | Smooth scroll feel | Current Awwwards-class default with Next. Drive from `gsap.ticker` (`autoRaf: false`) + `lenis.on('scroll', ScrollTrigger.update)`. Do **not** stack CSS `scroll-behavior: smooth`. | HIGH |
| **`next/font`** | built into Next 16 | Self-hosted display/body fonts | Zero CLS, no Google runtime requests. Use **`subsets: ['latin', 'latin-ext']`** for Portuguese (ã, ç, õ…). Pick expressive faces — avoid Inter/Roboto/Arial as brand voice. | HIGH |
| **`next/image`** + **sharp** | Next built-in + **sharp 0.35.4** | Responsive product/case imagery | Required for fast LCP on image-heavy product storytelling. Prefer **Node hosting** (Vercel or Node server), not `output: 'export'`, so optimization stays on. | HIGH |

### Supporting Libraries

| Library | Version | Purpose | When to Use | Confidence |
|---------|---------|---------|-------------|------------|
| **motion** (`motion` / `framer-motion`) | **13.4.1** | UI micro-interactions (menu, CTA hover, shared layout) | Optional second layer for React-state UI only. **Do not** use as primary pin/scrub engine. Never animate the same element/property as GSAP. | MEDIUM |
| **clsx** + **tailwind-merge** | **2.1.1** / **3.7.0** | Conditional class composition | Any non-trivial component variants. | HIGH |
| **GSAP SplitText** (from `gsap` package plugins) | with GSAP 3.15 | Line/word/char typography reveals | Product chapter headlines; still gate with `prefers-reduced-motion`. Now free with GSAP. | HIGH |
| **`@vercel/analytics`** | **2.0.1** | Lightweight page analytics | Optional; only if deploying on Vercel and wanting visit signals. Not required for WhatsApp CTA. | MEDIUM |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| **create-next-app@latest** | Scaffold | Use recommended defaults: TypeScript, ESLint, Tailwind, App Router, Turbopack, `AGENTS.md`. Set `lang="pt-BR"` in root layout after scaffold. |
| **ESLint** + **eslint-config-next 16.3.6** | Lint | Matches Next 16; `next build` no longer auto-lints (run via npm script). |
| **Turbopack** | Dev/build bundler | Default in Next 16 (`next dev` / `next build`). Fallback: `--webpack` only if a plugin breaks. |
| **Node.js ≥ 20.9** | Runtime | Hard requirement from Next 16 docs. |
| **React Compiler** | Optional optimize | **Leave off** for v1. Imperative GSAP + ScrollTrigger benefit little; Compiler adds risk during motion-heavy build. Revisit later. |
| **Biome** | Alt linter/formatter | Use only if team prefers speed over Next’s ESLint defaults — not recommended for greenfield Next. |

### Hosting / Deploy (no CMS)

| Choice | Why |
|--------|-----|
| **Vercel** (or any Node host running `next start`) | Preserves `next/image` optimization, ISR if ever needed, edge CDN. |
| **Not** `output: 'export'` for v1 | Static export disables default Image Optimization; high-motion product sites need sharp-backed images. |

## Installation

# Scaffold (recommended path)

# then ensure Portuguese root: <html lang="pt-BR">

# Motion stack (after scaffold)

# Optional UI motion + class helpers

# Optional analytics (Vercel only)

# Tailwind v4 is already installed by create-next-app; if manual:

# npm install tailwindcss @tailwindcss/postcss postcss

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Next.js 16 App Router | Astro | Content-first docs/blog with little React choreography. Inferior ergonomics for GSAP+Lenis client islands vs a single Next app. |
| Next.js | Vite + React SPA | Faster toy prototypes; weaker SEO/Metadata/image story for a hire-us brochure. |
| GSAP + ScrollTrigger | Motion (`useScroll` / `whileInView`) alone | Fine for fades/parallax only. **Not** enough for pinned product chapters. |
| Lenis | GSAP ScrollSmoother | Also free now and integrates tightly with ScrollTrigger. Prefer if team wants zero third-party scroll libs. Lenis wins on Next tutorial/ecosystem density. |
| Lenis | Locomotive Scroll | Legacy; migrate away — Lenis is the maintained successor pattern. |
| Tailwind v4 | CSS Modules / vanilla CSS | Only if design system is already tokenized without utilities. Slower for marketing iteration. |
| `next/font` | Manual `@font-face` / CDN | Only for licensed fonts not on Google/local pipeline; still self-host via `next/font/local`. |
| Node/`next start` | Cloudflare Pages static | Only if accepting unoptimized images or a custom loader. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| **CMS** (Sanity, Contentful, WordPress) | Brochure copy for four known products; CMS adds auth, schemas, cost with no editorial workflow. | Hardcoded React/MDX/content modules in repo. |
| **Auth / database / ecommerce** | Out of scope — WhatsApp CTA only. | `https://wa.me/5562998286169` links. |
| **Framer Motion / Motion as scroll engine** | Weak pinning/scrub vs ScrollTrigger; easy to ship “generic AI landing” motion. | GSAP + ScrollTrigger for chapters; Motion optional for UI chrome. |
| **Three.js / R3F / Theatre.js by default** | Bundle + a11y + mobile cost for a brochure; craft ≠ WebGL. | 2D scroll + typography + imagery first; 3D only if a specific scene proves necessary later. |
| **Locomotive Scroll** | Unmaintained relative to Lenis; painful ScrollTrigger sync. | Lenis 1.3.x. |
| **CSS `scroll-behavior: smooth` + Lenis** | Double-smoothing breaks ScrollTrigger measurements. | Lenis only (or native scroll only). |
| **Animating `width` / `height` / `top` / `left` / layout props** | Forces layout/paint every frame (web.dev). | `transform` (`translate`, `scale`, `rotate`) + `opacity`. |
| **Ignoring `prefers-reduced-motion`** | Vestibular harm; fails accessible craft bar. | `gsap.matchMedia()` with `(prefers-reduced-motion: reduce)` → instant states / no Lenis smoothing. |
| **`output: 'export'` (static export) for v1** | Loses default `next/image` optimization. | Node host + `next start` (e.g. Vercel). |
| **create-react-app / Pages Router greenfield** | CRA dead; Pages Router is legacy for new projects. | App Router. |
| **Heavy UI kits (MUI, generic shadcn dashboard look)** | Pushes card-grid / purple-saas aesthetics the brief forbids. | Custom sections + Tailwind tokens; no dashboard chrome. |

## Motion & Accessibility Contract (non-negotiable)

## Stack Patterns by Variant

- Use `next/image`, optional `@vercel/analytics`.
- No edge workers needed for WhatsApp CTA.
- Accept `unoptimized` images or an external image CDN; keep GSAP/Lenis client-side. Prefer avoiding this for v1.
- Drop Lenis; use native scroll + GSAP ScrollTrigger (or Motion `whileInView` only). Keep GSAP if any pinning remains.
- Swap Lenis for ScrollSmoother; keep ScrollTrigger. Do not run Lenis and ScrollSmoother together.

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| `next@16.3.6` | `react@19.3.0`, `react-dom@19.3.0` | Align all three from the same install. |
| `next@16.3.6` | Node `>=20.9.0` | Engines field on `next`. |
| `next@16.3.6` | `eslint-config-next@16.3.6` | Keep major/minor matched. |
| `tailwindcss@4.3.3` | `@tailwindcss/postcss@4.3.3` | Install as a pair; PostCSS plugin config required. |
| `@gsap/react@2.1.2` | `gsap@^3.12.5` (use **3.15.0**), `react>=17` | Import ScrollTrigger via `gsap/ScrollTrigger`. |
| `lenis@1.3.26` | GSAP 3.x ScrollTrigger | Sync via ticker pattern; skip `scrollerProxy` for normal document scroll. |
| `motion@13.4.1` | React 19 | Optional; `framer-motion@13.4.1` is the same line — prefer package name **`motion`**. |
| TypeScript | Next min **5.1**; registry latest **7.0.2** | Trust create-next-app resolution if scaffold picks a different 5.x/7.x. |

## Explicit Non-Goals (stack)

- No Prisma/Supabase/Firebase
- No NextAuth/Clerk
- No Shopify/Stripe
- No headless CMS
- No i18n framework beyond `lang="pt-BR"` (single locale)

## Sources

- npm registry (`npm view … version`) — 2026-09-23 — versions for next, react, gsap, lenis, motion, tailwindcss, sharp, @gsap/react — **confidence MEDIUM→HIGH for version numbers**
- [Next.js Installation](https://nextjs.org/docs/app/getting-started/installation) — App Router defaults, Turbopack, Node ≥20.9, React 19 — **HIGH**
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — `next/font` self-host — **HIGH**
- [Tailwind CSS + Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs) — v4 PostCSS setup — **HIGH**
- [GSAP Pricing](https://gsap.com/pricing/) — GSAP free for everyone — **HIGH**
- [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/) — `prefers-reduced-motion` — **HIGH**
- [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) — pin/scrub; scrollerProxy notes — **HIGH**
- Lenis + GSAP + Next integration guides (madeforaward, bridger.to, GSAP forums) — ticker sync pattern — **MEDIUM**
- [web.dev animations guide](https://web.dev/articles/animations-guide) — transform/opacity only — **HIGH**
- Aceternity / Motion docs — GSAP vs Motion role split — **MEDIUM**

<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->

## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->

## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->

## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:

- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->

## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
