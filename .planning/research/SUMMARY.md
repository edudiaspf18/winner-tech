# Project Research Summary

**Project:** Winner Tech
**Domain:** High-motion institutional product-portfolio marketing site (software-house hire-us vitrine, pt-BR)
**Researched:** 2026-09-23
**Confidence:** HIGH

## Executive Summary

Winner Tech is a **static institutional brochure**, not a SaaS product or agency services site. Experts build this class of site as a semantic document (brand → owned products → hire CTA) with a **single client-side motion runtime** on top. Content is readable without JavaScript; scroll choreography is progressive enhancement gated by `prefers-reduced-motion`. Success is a WhatsApp conversation (`wa.me/5562998286169`), not signup, checkout, or a client portal.

**Recommended approach:** Next.js 16 App Router + React 19 + Tailwind CSS 4 for the document shell; typed `content/*` modules (no CMS) for product truth; GSAP ScrollTrigger + `@gsap/react` for pinned/scrubbed product chapters; Lenis wired once through `gsap.ticker` for smooth scroll feel; `next/font` + `next/image` on a Node host (Vercel / `next start`) — not static export. Motion and Motion/Framer stay optional for UI chrome only; never as the pin/scrub engine. Portuguese-only, four-product portfolio (Zelo, Alfa, Frutmix, Laço) with função + nicho, real cases where they exist (Alfa Papéis, Posto Marinheiro), and product-aware WhatsApp prefills.

**Key risks:** inventing Frutmix modules beyond Eduardo’s industrial ceiling; scrapinging/cloning Alfa Papéis UI; merging Laço app code into this repo; vague “fazemos tecnologia” copy; always-on scroll theaters that ignore reduced motion or animate layout props (CLS/jank); generic AI landing aesthetics. Mitigate by locking a source matrix before polish, shipping content + media reservation before choreography, and building reduced-motion as a parallel path with the motion runtime — not as a late CSS kill switch.

## Key Findings

### Recommended Stack

Full detail: [STACK.md](./STACK.md)

Greenfield marketing site → **create-next-app** defaults (App Router, Turbopack, TypeScript, Tailwind v4, ESLint). Motion stack is GSAP-first; React Compiler stays off for v1. No auth, DB, ecommerce, CMS, or i18n framework.

**Core technologies:**
- **Next.js 16.3.6 (App Router)** — SSG/SSR, Metadata/OG, image/font opts — industry default for Next-class marketing sites; Server Components keep motion client-scoped
- **React 19.3.0** — UI runtime — peer of Next 16; keep aligned
- **TypeScript** (create-next-app pin; Next min 5.1) — type-safe app + content modules
- **Tailwind CSS 4.3.3** + `@tailwindcss/postcss` — utility styling and design tokens without dashboard UI kits
- **GSAP 3.15.0** + ScrollTrigger + **`@gsap/react` 2.1.2** — pin/scrub timelines and correct React cleanup; entire GSAP library free
- **Lenis 1.3.26** — smooth scroll; one ticker loop with ScrollTrigger (`autoRaf: false`); no CSS `scroll-behavior: smooth`
- **`next/font` + `next/image` (+ sharp)** — expressive self-hosted fonts with `latin-ext` for pt-BR; optimized LCP imagery on Node host

**Critical version / host rules:** Node ≥ 20.9; do **not** use `output: 'export'` for v1 (loses default image optimization); do not stack Motion as scroll engine alongside GSAP on the same properties.

### Expected Features

Full detail: [FEATURES.md](./FEATURES.md)

Site type = multi-product portfolio for **contratantes** (owners/managers), not end users of Zelo/Laço. Primary IA is owned systems, not an agency services grid.

**Must have (table stakes):**
- Brand recognition (Winner Tech + W mark) without mandatory logo-file blue field
- Hero value prop: hire Winner Tech (one-pass clarity)
- Four-product vitrine with função + nicho (Zelo, Alfa, Frutmix, Laço)
- Honest product depth + cases (Alfa Papéis, Posto Marinheiro; no Frutmix fiction)
- WhatsApp primary CTA + floating affordance + product-aware prefill (`5562998286169`)
- Portuguese-only UI, mobile-first responsive, basic SEO/OG, a11y basics

**Should have (competitive):**
- Scroll / entrance / spatial continuity motion at product-site craft level (original language — do not copy Apple/Samsung/Disney/Netflix)
- Striking brand-led color composition (anti purple-AI / cream-serif defaults)
- Product UI storytelling from real Zelo/Laço assets; industrial framing only for Frutmix
- Niche-routed paths / Laço vertical chips (stated list only); CTA click analytics after traffic

**Defer (v2+ / never for MVP):**
- Blog, careers, login/client area, checkout/pricing, multi-channel forms/chatbots
- Invented Frutmix modules/screens; fake cases/metrics; reimplementing products in this repo
- English locale; gated PDF lead magnets

### Architecture Approach

Full detail: [ARCHITECTURE.md](./ARCHITECTURE.md)

Architecture is a **static document shell** + **one motion runtime**, not an SPA with a backend. Typed content modules feed semantic sections; Lenis-or-native scroll authority feeds GSAP ScrollTrigger; section hooks register timelines and tear down cleanly. Hire path is outbound WhatsApp only.

**Major components:**
1. **Document Shell** — SSR/SSG HTML, fonts, CSS tokens, `lang="pt-BR"`, meta, reduced-motion CSS baseline
2. **Content Module** — single source of truth: brand, products[4], niches, functions, cases, WhatsApp URL
3. **Site Chrome** — header/anchors, MotionToggle, persistent Hire CTA
4. **Brand Hero + Product Section ×4 + Hire** — story order; shared `ProductSection` driven by content records
5. **Scroll Authority + Scroll Choreography** — one driver (native|Lenis); GSAP `matchMedia` gates full vs static path
6. **Media Pipeline** — reserved aspect boxes, LCP hero eager, compositor-only animation budget

### Critical Pitfalls

Full detail: [PITFALLS.md](./PITFALLS.md)

1. **Inventing Frutmix (or any product) modules** — hard ceiling: cadastro, produção, NF-e, relatórios (same class as Alfa); every bullet maps to a cited source or is cut
2. **Scraping/cloning Alfa Papéis private UI** — public case name + link only; owner-supplied assets only if screenshots needed later
3. **Merging Laço app into this repo** — present and link out; never vendor Expo/auth/product runtime here
4. **Vague hire copy + audience inversion** — name systems + niches; speak to contratante, not frentista/lava-jato attendant; ban interchangeable “soluções digitais” fluff
5. **Motion without reduced-motion / CLS budget** — `gsap.matchMedia()` parallel path; animate only `transform`/`opacity`; reserve media space; verify CLS while scrolling on real mobile — Lighthouse load CLS is insufficient
6. **Wrong CTA or AI-template aesthetic** — WhatsApp only (smoke-test device); brand-first composition; no purple card farm, no mandatory blue full-bleed

## Implications for Roadmap

Based on research, suggested phase structure (aligns ARCHITECTURE build order with PITFALLS prevention):

### Phase 1: Foundation shell + product-truth content
**Rationale:** Content schema and repo boundaries must lock before visuals or motion, or polish invents Frutmix and blurs Laço ownership.
**Delivers:** Next.js scaffold (`lang="pt-BR"`), typed `content/*` (brand, products, cta), semantic page order Brand → Zelo → Alfa → Frutmix → Laço → Hire, static WhatsApp links, Portuguese chrome.
**Addresses:** Brand recognition, four-product portfolio with função + nicho, WhatsApp CTA baseline, PT copy, honest Frutmix scope.
**Avoids:** Inventing Frutmix modules; merging Laço; CMS/auth/db; coding timelines before copy schema.

### Phase 2: Visual system + media budget + hire messaging
**Rationale:** Reserved layout and brand-led composition must exist before scroll theaters; vague copy and blue-obligation must die before motion hides them.
**Delivers:** Design tokens (non-AI, non-mandatory-logo-blue), Brand Hero composition, product visual anchors, `next/font` + sized `next/image`, case blocks (Alfa Papéis, Posto Marinheiro), inline CTAs after proof, one-pass comprehension copy.
**Addresses:** Striking color/composition, cases, product detail honesty, mobile-first layout, SEO/meta, contrast-ready text surfaces.
**Avoids:** Alfa UI scrape; mandatory blue full-bleed; AI purple/cream template look; audience inversion; CLS from unsized hero media.

### Phase 3: Motion runtime + reduced-motion path
**Rationale:** Single scroll authority and preference gate must ship **with** the runtime — retrofit after theaters is expensive and a11y-hostile.
**Delivers:** ScrollProvider (Lenis ↔ GSAP ticker), `gsap.matchMedia` motionOK/reduce branches, CSS reduced baseline, optional MotionToggle, `ScrollTrigger.refresh` after fonts/images.
**Uses:** GSAP, `@gsap/react`, Lenis; compositor-only animation contract from STACK.
**Implements:** Scroll Authority, Motion Preference Gate, reduced parallel architecture path.
**Avoids:** CSS-only `animation: none` afterthought; multiple smooth-scroll libs; CSS `scroll-behavior: smooth` + Lenis.

### Phase 4: Section choreography + CTA continuity + performance
**Rationale:** Product storytelling motion depends on stable content, reserved media, and a gated runtime; conversion and field performance verify last.
**Delivers:** Per-section ScrollTrigger stories, spatial continuity between products, floating/persistent WhatsApp with product-aware prefill, mobile-lighter pin density, LCP/CLS/main-thread pass on real devices.
**Addresses:** Craft-tier motion differentiator, contextual WhatsApp, floating affordance, a11y under motion, responsive hire path.
**Avoids:** Layout-property scrubbing; heavy mobile pin theaters; decoration-as-product motion; broken/wrong WhatsApp number; trusting Lighthouse CLS alone.

### Optional Phase 5 (post-validation)
**Rationale:** Only after hire pipeline works and assets exist.
**Delivers:** CTA analytics, niche-routed entry paths, richer approved case metrics, optional short Sobre, links to live product sites when URLs confirmed.
**Defer:** Blog, careers, forms, demos/sandboxes.

### Phase Ordering Rationale

- Dependencies: content/layout → media/CLS → motion runtime → section choreography (ARCHITECTURE explicit build order).
- Product truth + messaging before theaters so polish cannot lock in fiction or vague positioning (PITFALLS).
- Reduced-motion path ships in Phase 3 with the runtime, not as launch-day patch.
- WhatsApp wired early (Phase 1) and smoke-tested on devices in Phase 4 when every product block has a CTA.

### Research Flags

Phases likely needing deeper research during planning (`/gsd:plan-phase --research`):
- **Phase 2:** Brand/color system + expressive font pairing under Winner Tech W mark (design contract; avoid AI-default palettes).
- **Phase 4:** Mobile ScrollTrigger pin density / Lenis touch behavior on mid-tier Android/iOS; field CLS verification approach (RUM tooling not chosen).

Phases with standard patterns (skip deep research-phase):
- **Phase 1:** create-next-app + typed content modules + wa.me links — well-documented.
- **Phase 3:** Official Lenis↔GSAP ticker + `gsap.matchMedia` reduced-motion — patterns documented in STACK/ARCHITECTURE sources.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Official Next/Tailwind/GSAP docs + npm versions on research date; Lenis sync MEDIUM→HIGH from ecosystem guides |
| Features | MEDIUM–HIGH | PROJECT.md constraints HIGH; BR WhatsApp + competitor IA MEDIUM; Frutmix anti-invention HIGH |
| Architecture | MEDIUM–HIGH | Patterns solid; early note left stack open — STACK now resolves Next+GSAP+Lenis |
| Pitfalls | HIGH | Project constraints + WCAG/web.dev CLS/reduced-motion primary sources |

**Overall confidence:** HIGH

### Gaps to Address

- **Exact minor versions:** Trust create-next-app resolution at scaffold time; re-pin from npm if registry drifts.
- **Field RUM / CLS tooling:** Not chosen — pick during Phase 4 planning (Performance panel + real devices minimum).
- **Product UI assets:** Zelo/Laço real screens vs industrial metaphor for Alfa/Frutmix — confirm owner assets before Phase 2 media work.
- **Optional Motion (`motion` package):** Use only if UI chrome needs it; keep out of scroll path.
- **ScrollSmoother vs Lenis:** Lenis recommended; swap only if team already owns ScrollSmoother — never both.

## Sources

### Primary (HIGH confidence)
- `.planning/PROJECT.md` — scope, products, CTA, anti-scope, brand rules
- [Next.js Installation](https://nextjs.org/docs/app/getting-started/installation) — App Router, Node ≥20.9, React 19
- [Tailwind CSS + Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs) — v4 PostCSS
- [GSAP Pricing](https://gsap.com/pricing/) / [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) / [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/) / [a11y](https://gsap.com/resources/a11y/)
- [web.dev animations](https://web.dev/articles/animations-guide) / [CLS](https://web.dev/articles/optimize-cls) / [prefers-reduced-motion](https://web.dev/articles/prefers-reduced-motion)
- W3C WCAG Technique C39, Understanding 1.4.3 / Failure F83
- npm registry version checks (2026-09-23) — next, react, gsap, lenis, tailwindcss, sharp

### Secondary (MEDIUM confidence)
- Lenis README + React package — GSAP ticker integration
- BR WhatsApp CTA practice (Malvis, IndexaGO, agency norms)
- BR software-house examples (Fluxo, Astrotech, M3CS) + multi-product IA patterns
- Core Web Vitals community — scroll-triggered animations vs Lighthouse CLS
- GSAP community mobile/jank guidance (`normalizeScroll`, `ignoreMobileResize`)

### Tertiary (LOW confidence)
- The Pudding sticky scrollytelling — pattern reference only
- Aceternity / Motion docs — GSAP vs Motion role split (optional UI layer)

### Research artifacts
- [STACK.md](./STACK.md)
- [FEATURES.md](./FEATURES.md)
- [ARCHITECTURE.md](./ARCHITECTURE.md)
- [PITFALLS.md](./PITFALLS.md)

---
*Research completed: 2026-09-23*
*Ready for roadmap: yes*
