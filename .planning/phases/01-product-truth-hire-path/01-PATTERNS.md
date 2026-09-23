# Phase 1: Product truth + hire path - Pattern Map

**Mapped:** 2026-09-23
**Files analyzed:** 12
**Analogs found:** 0 / 12

## Greenfield Verdict

**No application source in this repository.** Directory listing confirms only `.git`, `.claude`, and `.planning`. No `package.json`, no `src/`, no `app/`, no reusable components, no established UI/server patterns.

Do **not** invent analogs from other repos. Do **not** copy Zelo or Laço application code into this repo. Voice/facts for copy may be read from external landings (CONTEXT/RESEARCH), but pattern assignment for implementation is greenfield: follow `01-RESEARCH.md` recommended structure and Next.js / Tailwind docs after scaffold.

Planner: treat every file below as **new file — no in-repo analog**. Prefer RESEARCH.md code examples as the planning blueprint.

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `package.json` (+ scaffold configs) | config | — | — | no analog — new file |
| `app/layout.tsx` | route | request-response | — | no analog — new file |
| `app/page.tsx` | route | request-response | — | no analog — new file |
| `app/globals.css` | config | — | — | no analog — new file |
| `components/site-header.tsx` | component | request-response | — | no analog — new file |
| `components/hero.tsx` | component | request-response | — | no analog — new file |
| `components/product-block.tsx` | component | request-response | — | no analog — new file |
| `components/hire-cta.tsx` | component | request-response | — | no analog — new file |
| `components/closing-hire.tsx` | component | request-response | — | no analog — new file |
| `lib/content.ts` | utility | transform | — | no analog — new file |
| `lib/whatsapp.ts` | utility | transform | — | no analog — new file |
| `public/` (favicon only optional) | config | file-I/O | — | no analog — new file |

## Pattern Assignments

### `package.json` (+ create-next-app scaffold) (config)

**Analog:** none — greenfield

**Guidance:** Scaffold with `create-next-app@latest . --yes`, then pin Next **16.3.6**, React **19.3.0**, Tailwind **4.3.3** per RESEARCH.md. After install, read `node_modules/next/dist/docs/`. No in-repo package/scripts pattern to copy.

---

### `app/layout.tsx` (route, request-response)

**Analog:** none — greenfield

**Guidance:** Root layout RSC: `export const metadata` with title `Winner Tech`; `<html lang="pt-BR">`; import `./globals.css`. Blueprint: RESEARCH.md "Root layout — Portuguese + brand title". Forbid old legal name as title (BRND-02).

---

### `app/page.tsx` (route, request-response)

**Analog:** none — greenfield

**Guidance:** Server Component composing header → hero → products → closing. Import copy/CTA from `lib/content` + shared href from `lib/whatsapp`. Replace all English scaffold chrome. Blueprint: RESEARCH.md "Page shell — order locked". Stable section ids `#sistemas`, `#contratar`.

---

### `app/globals.css` (config)

**Analog:** none — greenfield

**Guidance:** Tailwind v4 entry only: `@import "tailwindcss";`. Minimal layout; Phase 2 owns striking color. No motion CSS libraries.

---

### `components/site-header.tsx` (component, request-response)

**Analog:** none — greenfield

**Guidance:** New Server Component. Visible public brand string `Winner Tech` (BRND-01). No nav chrome required beyond brand name for Phase 1.

---

### `components/hero.tsx` (component, request-response)

**Analog:** none — greenfield

**Guidance:** New Server Component. Props/copy from content module: D-01 offer, D-02 support, HireCta with shared href. Visual order: offer → support → CTA below (discretion recommendation).

---

### `components/product-block.tsx` (component, request-response)

**Analog:** none — greenfield

**Guidance:** New Server Component. Semantic `<article>` + `<h2>` name + one function `<p>` + one niche `<p>`. No images/cards-as-decoration. Map over `PRODUCTS` ordered Zelo → Alfa → Frutmix → Laço.

---

### `components/hire-cta.tsx` (component, request-response)

**Analog:** none — greenfield

**Guidance:** New Server Component (no `'use client'`). Plain `<a href={href} target="_blank" rel="noopener noreferrer">{label}</a>`. Same instance used twice (hero + closing). Label + href from content/whatsapp modules — never hardcode a second `wa.me` string.

---

### `components/closing-hire.tsx` (component, request-response)

**Analog:** none — greenfield

**Guidance:** New Server Component. D-10 closing line + same HireCta. Section id `#contratar`.

---

### `lib/content.ts` (utility, transform)

**Analog:** none — greenfield

**Guidance:** Single source of truth: brand, HERO, CTA_LABEL, WA_PHONE_DIGITS, WA_MESSAGE, CLOSING_LINE, PRODUCTS[4] with function + niche lines. Blueprint: RESEARCH.md Pattern 1. Do not invent Frutmix modules beyond industrial ceiling.

---

### `lib/whatsapp.ts` (utility, transform)

**Analog:** none — greenfield

**Guidance:** Build `WA_HIRE_HREF` once via `encodeURIComponent` + digits-only phone `5562998286169`. Blueprint: RESEARCH.md Pattern 2 / WhatsApp FAQ. External Laço landing encoding is reference-only — do not import or copy that app's message text.

---

### `public/` (config, file-I/O)

**Analog:** none — greenfield

**Guidance:** Empty or favicon only. No product screenshots in Phase 1.

---

## Shared Patterns

### In-repo shared patterns

**None.** No auth middleware, error wrappers, response formatters, DB transactions, or UI primitives exist in this repository.

### Cross-cutting rules for all new files (from RESEARCH — not from local analogs)

| Concern | Rule | Apply to |
|---------|------|----------|
| Locale | `lang="pt-BR"`; all UI strings Portuguese | layout, all components |
| Brand | Public name `Winner Tech` only; never old legal name as title | layout metadata, header |
| Content | One module owns copy + product order + WA constants | content.ts consumers |
| CTA | One shared `WA_HIRE_HREF`; two identical in-flow anchors | hire-cta ×2 |
| Stack | RSC by default; no `'use client'` unless later phases need it | all Phase 1 components |
| Out of scope | No GSAP/Lenis/motion, floating CTA, CMS, auth, DB, product prefill | package.json + all files |

## No Analog Found

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| `package.json` (+ scaffold) | config | — | No package.json; greenfield |
| `app/layout.tsx` | route | request-response | No `app/` tree |
| `app/page.tsx` | route | request-response | No `app/` tree |
| `app/globals.css` | config | — | No styles |
| `components/site-header.tsx` | component | request-response | No components |
| `components/hero.tsx` | component | request-response | No components |
| `components/product-block.tsx` | component | request-response | No components |
| `components/hire-cta.tsx` | component | request-response | No components |
| `components/closing-hire.tsx` | component | request-response | No components |
| `lib/content.ts` | utility | transform | No `lib/` |
| `lib/whatsapp.ts` | utility | transform | No `lib/` |
| `public/` | config | file-I/O | No public assets |

## Metadata

**Analog search scope:** repo root (confirmed `.git` / `.claude` / `.planning` only); no `src/`, `app/`, `components/`, `lib/`, `package.json`
**Files scanned:** 0 application source files
**External code:** Explicitly excluded as analogs (Zelo landing, Laço app — voice/facts only per CONTEXT/RESEARCH)
**Pattern extraction date:** 2026-09-23
