---
phase: 01-product-truth-hire-path
plan: 01
subsystem: ui
tags: [nextjs, react, tailwind, whatsapp, portuguese, brochure]

requires: []
provides:
  - Next.js 16 App Router brochure shell with pt-BR content
  - lib/content.ts locked brand/hero/products/CTA strings
  - Shared WA_HIRE_HREF hire path used twice in-flow
affects:
  - 02-visual-proof-layout
  - 03-motion-cta-continuity

actuals:
  tokens: 68848
  tasks: 3
  commits: 1

plan_head_before: fd0678ece000fddc1e58606a177f8ddec5c6e08b

tech-stack:
  added: [next@16.3.6, react@19.3.0, react-dom@19.3.0, tailwindcss@4.3.3, @tailwindcss/postcss@4.3.3, eslint-config-next@16.3.6]
  patterns: [RSC brochure page, hardcoded content module, constant wa.me href]

key-files:
  created:
    - lib/content.ts
    - lib/whatsapp.ts
    - components/site-header.tsx
    - components/hero.tsx
    - components/product-block.tsx
    - components/hire-cta.tsx
    - components/closing-hire.tsx
    - app/layout.tsx
    - app/page.tsx
    - package.json
  modified: []

key-decisions:
  - "Scaffold via temp dir then move into non-empty repo (create-next-app refused .planning)"
  - "WA_PHONE_DIGITS literal in lib/whatsapp.ts for grep + open-redirect mitigation"
  - "Tasks 2–3 verify-only — no empty commits when honesty/build greps already green"

patterns-established:
  - "Single lib/content.ts source of truth for locked D-01…D-10 strings"
  - "HireCta Server Component + shared WA_HIRE_HREF for both in-flow CTAs"
  - "PRODUCTS ordered Zelo → Alfa → Frutmix → Laço; site offer not a card"

requirements-completed: [BRND-01, BRND-02, BRND-04, PROD-01, PROD-02, PROD-03, PROD-04, PROD-05, CTA-01, BASE-01]

coverage:
  - id: D1
    description: Visitor sees Winner Tech brand in header and metadata title
    requirement: BRND-01
    verification:
      - kind: other
        ref: "grep Winner Tech lib/content.ts + app/layout.tsx metadata title"
        status: pass
    human_judgment: false
  - id: D2
    description: Metadata title is Winner Tech only (not old legal name)
    requirement: BRND-02
    verification:
      - kind: other
        ref: "grep title Winner Tech; negative grep Tecnologia da Informação in title"
        status: pass
    human_judgment: false
  - id: D3
    description: Locked hero offer/support plus Quero contratar CTA
    requirement: BRND-04
    verification:
      - kind: other
        ref: "grep locked HERO strings in lib/content.ts"
        status: pass
    human_judgment: false
  - id: D4
    description: Four products Zelo Alfa Frutmix Laço with function+niche; Frutmix industrial ceiling
    requirement: PROD-01
    verification:
      - kind: other
        ref: "python3 honesty script order + token checklists"
        status: pass
    human_judgment: false
  - id: D5
    description: Two identical wa.me hire CTAs share WA_HIRE_HREF
    requirement: CTA-01
    verification:
      - kind: other
        ref: "grep WA_HIRE_HREF in hero.tsx and closing-hire.tsx; encodeURIComponent in whatsapp.ts"
        status: pass
    human_judgment: false
  - id: D6
    description: html lang=pt-BR and Portuguese UI chrome
    requirement: BASE-01
    verification:
      - kind: other
        ref: "grep lang=pt-BR; negative English scaffold chrome under app/components"
        status: pass
    human_judgment: false
  - id: D7
    description: Production build compiles App Router home page
    requirement: BASE-01
    verification:
      - kind: other
        ref: "npm run build"
        status: pass
    human_judgment: false

duration: 7min
completed: 2026-09-23
status: complete
---

# Phase 01 Plan 01: Product truth + hire path Summary

**Next.js 16 brochure in pt-BR with Winner Tech brand, four honest product blocks, and two identical WhatsApp hire anchors on one constant wa.me href.**

## Performance

- **Duration:** 7 min
- **Started:** 2026-09-23T04:19:32Z
- **Completed:** 2026-09-23T04:26:32Z
- **Tasks:** 3/3
- **Files modified:** 26 created in production commit

## Accomplishments

- Scaffolded Next 16.3.6 / React 19.3.0 / Tailwind 4.3.3 into existing repo without wiping `.planning`
- Locked D-01…D-10 copy + PRODUCTS (Zelo → Alfa → Frutmix → Laço) in `lib/content.ts`
- Shared `WA_HIRE_HREF` wired in hero and closing; `npm run build` exit 0

## Task Commits

Each task was committed atomically:

1. **Task 1: End-to-end Portuguese hire page — scaffold + locked content + two wa.me CTAs** - `22f4283` (feat)
2. **Task 2: Content honesty gates — product facts, Frutmix ceiling, Portuguese chrome** - verify-only (no delta; honesty script + English-chrome grep already green on `22f4283`)
3. **Task 3: Build + brand/title/CTA acceptance greps** - verify-only (no delta; `npm run build` + title/CTA/COVERAGE greps passed on `22f4283`)

**Plan metadata:** `e5598e3` (docs: SUMMARY), `5eab7f4` (docs: STATE/ROADMAP/REQUIREMENTS)

_Note: Tasks 2–3 produced no file changes after Task 1; empty commits omitted per protocol._

## Files Created/Modified

- `lib/content.ts` - Brand, hero, CTA, WhatsApp message, closing, PRODUCTS[4]
- `lib/whatsapp.ts` - Single `WA_HIRE_HREF` with encodeURIComponent
- `components/site-header.tsx` - Winner Tech header
- `components/hero.tsx` - Locked offer/support + HireCta
- `components/product-block.tsx` - Semantic article per product
- `components/hire-cta.tsx` - Shared blank-target hire anchor
- `components/closing-hire.tsx` - D-10 line + same HireCta
- `app/layout.tsx` - metadata.title Winner Tech, lang=pt-BR
- `app/page.tsx` - header → hero → #sistemas → #contratar
- `package.json` / lockfile - Pinned stack

## Decisions Made

- Temp-dir scaffold then move (create-next-app blocked non-empty root with `.planning`)
- Digits hardcoded in `lib/whatsapp.ts` (T-01-01 + Task 1 grep)
- No empty commits for verify-only Tasks 2–3

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing critical] Literal phone digits in whatsapp.ts**
- **Found during:** Task 1 verify
- **Issue:** `WA_HIRE_HREF` imported digits from content only; `grep -F "5562998286169" lib/whatsapp.ts` failed and threat T-01-01 prefers digits in the WA module
- **Fix:** Local `WA_PHONE_DIGITS = "5562998286169"` constant inside `lib/whatsapp.ts`
- **Files modified:** `lib/whatsapp.ts`
- **Commit:** `22f4283`

**2. [Rule 3 - Blocking] create-next-app refused non-empty root**
- **Found during:** Task 1 scaffold
- **Issue:** CLI conflicted on `.planning/` / `.gsd/`
- **Fix:** Scaffold in temp dir; move scaffold unit into repo without deleting `.planning`
- **Files modified:** scaffold files moved to repo root
- **Commit:** `22f4283`

## Threat Flags

None — hire href remains compile-time constant; no new network endpoints or auth.

## Known Stubs

None.

## Self-Check: PASSED

- FOUND: lib/content.ts, lib/whatsapp.ts, app/layout.tsx, app/page.tsx, components/hero.tsx, components/closing-hire.tsx, components/hire-cta.tsx
- FOUND: commit 22f4283
- FOUND: package.json next 16.3.6 / react 19.3.0 / tailwindcss 4.3.3
