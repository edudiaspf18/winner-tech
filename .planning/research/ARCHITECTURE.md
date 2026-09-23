# Architecture Research

**Domain:** High-motion institutional / product-marketing website (static, single public experience)
**Researched:** 2026-09-23
**Confidence:** MEDIUM (cross-checked GSAP official a11y, Lenis+ScrollTrigger integration, web.dev CLS/animation guidance, Next.js static export docs; stack choice still open)

## Standard Architecture

High-motion institutional sites are **not** SPAs with a backend. They are a **static document** with a **single motion runtime** layered on top of semantic sections. Content is readable without JavaScript; motion is progressive enhancement gated by `prefers-reduced-motion`.

### System Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         DOCUMENT SHELL (SSR/SSG HTML)                    │
│  fonts · CSS tokens · meta · skip link · reduced-motion CSS baseline     │
├─────────────────────────────────────────────────────────────────────────┤
│  CHROME                                                                  │
│  ┌──────────────┐  ┌──────────────────┐  ┌────────────────────────────┐ │
│  │ SiteHeader   │  │ MotionToggle     │  │ PersistentHireCTA (opt)    │ │
│  │ (nav anchors)│  │ (UI + OS sync)   │  │ → WhatsApp deep link       │ │
│  └──────┬───────┘  └────────┬─────────┘  └─────────────┬──────────────┘ │
├─────────┴───────────────────┴──────────────────────────┴────────────────┤
│  PAGE SECTIONS (semantic, order = story)                                 │
│  ┌─────────┐ ┌──────┐ ┌──────┐ ┌─────────┐ ┌──────┐ ┌────────────────┐ │
│  │ Brand   │ │ Zelo │ │ Alfa │ │ Frutmix │ │ Laço │ │ Hire / CTA     │ │
│  │ Hero    │ │      │ │      │ │         │ │      │ │ (wa.me)        │ │
│  └────┬────┘ └──┬───┘ └──┬───┘ └────┬────┘ └──┬───┘ └───────┬────────┘ │
│       │         │        │          │         │             │           │
│       └─────────┴────────┴──────────┴─────────┴─────────────┘           │
│                         read from Content Module                         │
├─────────────────────────────────────────────────────────────────────────┤
│  MOTION RUNTIME (client-only; one authority)                             │
│  ┌────────────────┐   ┌─────────────────┐   ┌────────────────────────┐  │
│  │ ScrollAuthority│──▶│ ScrollChoreo    │──▶│ SectionMotion hooks    │  │
│  │ (native|Lenis) │   │ (GSAP ST + mm)  │   │ (per-section timelines)│  │
│  └────────┬───────┘   └────────┬────────┘   └────────────────────────┘  │
│           │                    │                                         │
│           └──── prefers-reduced-motion / MotionToggle ───────────────────┤
├─────────────────────────────────────────────────────────────────────────┤
│  MEDIA + PERFORMANCE                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────────────────────────┐  │
│  │ AssetManifest│  │ Image slots  │  │ Layout budget (CLS / LCP)      │  │
│  │ (dims, srcset│  │ (aspect lock)│  │ transform/opacity only animate │  │
│  └──────────────┘  └──────────────┘  └────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────┤
│  CONTENT MODULE (static TS/JSON — no CMS/DB required for v1)             │
│  brand · products[4] · niches · functions · cases · cta.whatsapp         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| **Document Shell** | First paint HTML, fonts, CSS variables, meta, Portuguese `lang`, reduced-motion CSS that keeps content visible | App Router layout / static HTML root |
| **Content Module** | Single source of truth for copy, product metadata (função + nicho), case links, WhatsApp URL | Typed `content/*.ts` or JSON imported at build — **not** a CMS for v1 |
| **Site Chrome** | Header, section anchors, optional sticky hire control, motion toggle | Client island for toggle; rest can be static |
| **Brand Hero** | Winner Tech recognition + graphic W; one composition, dominant visual plane | Section component + media slot |
| **Product Section ×4** | Niche + function for Zelo / Alfa / Frutmix / Laço; optional case link | Shared `ProductSection` driven by content records |
| **Hire CTA** | Opens WhatsApp conversation (`wa.me/5562998286169`) | Anchor with `rel`, tracking-safe; no form backend |
| **Scroll Authority** | Exactly one scroll driver: native scroll **or** Lenis — never both competing | Shell-level provider; **off** when reduced motion |
| **Scroll Choreography** | Pins, scrubs, reveals, continuity between sections | GSAP + ScrollTrigger inside `gsap.matchMedia()` |
| **Section Motion** | Per-section timelines registered against shared ScrollTrigger | Hooks/effects scoped to section refs; cleanup on unmount |
| **Media Pipeline** | Dimensions, formats, lazy below-fold, LCP hero eager | Build-time assets + explicit width/height or `aspect-ratio` |
| **Motion Preference Gate** | OS `prefers-reduced-motion` + optional UI toggle; reverts timelines | `matchMedia` conditions + `matchMediaRefresh` on toggle |

## Recommended Project Structure

Stack-agnostic shape (fits Next/Astro/Vite equally). Prefer **static content modules** over a headless CMS for v1.

```
src/
├── app/ or pages/          # route shell, layout, metadata (pt-BR)
│   └── (site)/page         # single public experience
├── content/
│   ├── brand.ts            # name, tagline, logo usage rules
│   ├── products.ts         # Zelo, Alfa, Frutmix, Laço records
│   └── cta.ts              # WhatsApp URL + label
├── components/
│   ├── chrome/             # Header, MotionToggle, HireCTA
│   ├── sections/           # BrandHero, ProductSection, HireSection
│   └── media/              # ResponsiveImage with reserved box
├── motion/
│   ├── ScrollProvider.tsx  # Lenis|native + ticker sync
│   ├── matchMedia.ts       # motionOK / reduce / breakpoints
│   ├── useSectionMotion.ts # scoped ScrollTrigger registration
│   └── reduced.css         # CSS fallback when motion off
├── styles/
│   ├── tokens.css          # color, type, space — brand-led
│   └── global.css
└── assets/
    └── images/             # sized sources; never animate layout size
```

### Structure Rationale

- **`content/`:** Keeps Portuguese copy and product facts out of JSX so motion work cannot drift inventing features. Alfa/Frutmix facts stay editable without touching choreography.
- **`motion/`:** Isolates the single scroll authority and `matchMedia` gate. Section components declare **what** to animate; motion layer owns **when/how** and teardown.
- **`sections/`:** One job per section. Product sections share a template; visual identity differs via content + media, not four unrelated page trees.
- **No `api/` / `db/` for v1:** Hire path is outbound WhatsApp. Adding a form/CMS later should not reshape section or motion boundaries.

## Architectural Patterns

### Pattern 1: Single Scroll Authority

**What:** One library owns scroll position. GSAP ScrollTrigger listens; section timelines do not start their own RAF loops or second smooth-scroll libs.
**When to use:** Always on high-motion marketing sites.
**Trade-offs:** Lenis improves continuity feel but costs main-thread work and complicates mobile address-bar resize — disable under reduced motion and consider native-only on low-power devices.

**Example:**
```typescript
// Wire once at shell. Official Lenis ↔ ScrollTrigger pattern:
const lenis = new Lenis({ autoRaf: false });
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
// Document-level Lenis: usually no scrollerProxy needed.
```

### Pattern 2: Reduced-Motion as Parallel Architecture Path

**What:** Motion is not toggled with CSS `animation: none` alone. Build **two paths**: full choreography vs static/opacity-only layout. `gsap.matchMedia()` creates and auto-reverts ScrollTriggers when preference changes.
**When to use:** Any site where scroll continuity / parallax / pin is first-class.
**Trade-offs:** Slightly more design work (static path must still feel intentional). Prevents vestibular harm and avoids shipping a broken “motion-only” site.

**Example:**
```typescript
const mm = gsap.matchMedia();
mm.add(
  {
    motionOK: "(prefers-reduced-motion: no-preference)",
    reduce: "(prefers-reduced-motion: reduce)",
  },
  (ctx) => {
    const { motionOK } = ctx.conditions!;
    if (motionOK) {
      // pins, scrub, parallax, Lenis-enabled path
    } else {
      // no Lenis; no pin; optional brief opacity; content already visible in CSS
    }
    return () => {
      /* custom cleanup only; mm reverts tweens */
    };
  }
);
```

### Pattern 3: Content-Driven Sections, Motion-Attached Hooks

**What:** Sections render from typed content. Motion attaches via refs/`useGSAP`-style scoped selectors after layout is stable (`ScrollTrigger.refresh` after fonts/images).
**When to use:** Portfolio / institutional sites with N similar product blocks.
**Trade-offs:** Forces content schema early (good). Prevents “animation owns the DOM” rewrites.

### Pattern 4: Compositor-Safe Animation Budget

**What:** Animate only `transform` and `opacity` (and carefully `filter`). Reserve image space with width/height or `aspect-ratio`. Never animate `top`/`left`/`height`/`margin` for storytelling moves — those inflate CLS and main-thread cost (web.dev).
**When to use:** Always; critical because scroll-driven shifts are not exempt from CLS the way some user-input animations are.
**Trade-offs:** Limits some layout morphs; use scale/clip-path alternatives instead of height expansion.

## Data Flow

### Request Flow (v1 — static)

```
Build time
    ↓
Content Module (TS/JSON) → Section components → Static HTML + CSS
    ↓
Client hydrate (motion islands only)
    ↓
Motion Preference Gate → Scroll Authority → ScrollTrigger timelines
    ↓
User scroll → scrub/reveal (or static path)
    ↓
Hire CTA click → external WhatsApp (wa.me)  [no app backend]
```

### State Management

```
No global product store needed.

MotionPreference (OS media query + optional UI toggle)
    ↓
ScrollProvider enables/disables Lenis
    ↓
matchMedia builds or reverts ScrollTriggers
    ↓
SectionMotion effects subscribe via refs (local), not Redux

Content is immutable import — treat as build-time constants.
```

### Key Data Flows

1. **Brand → visitor recognition:** `content/brand` + logo asset → Brand Hero (static HTML first) → optional entrance timeline only if `motionOK`.
2. **Product facts → sections:** `products[]` → `ProductSection` props (nome, função, nicho, case URL) → no runtime fetch.
3. **Scroll position → choreography:** Scroll Authority → ScrollTrigger → section timelines (scrub/pin). Direction: scroll drives animation; animation must not rewrite document height after first layout without `refresh`.
4. **Hire intent → WhatsApp:** CTA components read `cta.whatsapp` → navigate to `https://wa.me/5562998286169` (outbound). Success metric lives outside the site.
5. **Preference change → teardown:** OS toggle or UI Motionswitch → `matchMedia` revert → Lenis destroy → static CSS path active; content remains.

## Component Boundaries (what talks to what)

| From | To | Communication | Rule |
|------|----|---------------|------|
| Content Module | Sections / CTA | Import at build | Sections never hardcode product facts |
| Document Shell | ScrollProvider | Mount once | Only shell creates Lenis/ticker |
| ScrollProvider | SectionMotion | Shared ScrollTrigger context | Sections register; do not create second smooth-scroll |
| MotionToggle | ScrollProvider + matchMedia | Event / shared preference atom | Must call refresh/revert, not only CSS |
| Sections | Media Pipeline | Props (src, w, h, priority) | Hero eager; below-fold lazy + dimensions |
| Hire CTA | WhatsApp | Full navigation / new tab | No XHR; no lead DB in v1 |
| Chrome anchors | Sections | In-page hash / Lenis.scrollTo | Programmatic scroll goes through Scroll Authority |

## Suggested Build Order (roadmap phases ≈ 4)

Dependencies flow **content/layout → media/CLS → motion runtime → section choreography → polish**.

| Order | Phase focus | Delivers | Depends on | Avoids |
|------:|-------------|----------|------------|--------|
| **1** | **Foundation shell + content model** | App scaffold, `content/*`, semantic page order (Brand → 4 products → Hire), Portuguese chrome, static WhatsApp CTA | — | Coding timelines before copy schema |
| **2** | **Visual system + media budget** | Tokens, brand hero composition, product visual anchors, image dimensions/srcset, font loading strategy | Phase 1 | Motion on unreserved images (CLS) |
| **3** | **Motion runtime + reduced-motion path** | ScrollProvider (native\|Lenis), `matchMedia` gate, CSS reduced baseline, MotionToggle, shared refresh-after-assets | Phases 1–2 | Sprinkling CSS animations without a gate |
| **4** | **Section choreography + hire continuity** | Per-section ScrollTrigger stories, scroll continuity between products, sticky/persistent CTA behavior, perf pass (main-thread, LCP, CLS) | Phase 3 | Pinning huge unbounded scenes; layout-property tweens |

Optional **Phase 5** (only if needed): deeper product case embeds / video — still static assets, still no auth/DB.

**Phase ordering rationale:** Motion that lands before reserved layout and a preference gate causes rewrites. Content module first locks “não inventar features.” Reduced-motion path ships **with** the motion runtime (Phase 3), not as a late a11y patch.

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| Institutional v1 (hundreds–low thousands visits) | Static export / CDN; one HTML experience; motion JS budget watched on mid mobile |
| Traffic spike / campaigns | CDN cache; image CDN or pre-sized AVIF/WebP; no server scale story |
| Multi-page later (blog, careers) | Keep motion runtime in shared layout; new routes opt into choreography — do not fork Lenis per page |

### Scaling Priorities

1. **First bottleneck:** Main-thread jank from Lenis + heavy ScrollTrigger + large images — fix by fewer pins, native scroll on mobile if needed, image weight, compositor-only props.
2. **Second bottleneck:** CLS from late fonts/images and pin refreshes — fix with size attributes, `font-display`, `ScrollTrigger.refresh` after load, bounded pin distances.

## Anti-Patterns

### Anti-Pattern 1: Motion as CSS Sprinkle

**What people do:** Add AOS/Framer snippets per section with no shared scroll clock or reduced-motion architecture.
**Why it's wrong:** Competing RAF loops, inconsistent continuity, preference ignored, hard to tear down.
**Do this instead:** One Scroll Authority + matchMedia-gated ScrollTrigger; sections register into it.

### Anti-Pattern 2: Reduced Motion as Afterthought `animation: none`

**What people do:** Ship full pins/parallax, then slap a global CSS kill switch.
**Why it's wrong:** Pinned heights, `from()` hidden states, and Lenis leave content unreachable or layout broken when motion is “off.”
**Do this instead:** Parallel static path; never rely on `from` opacity 0 without CSS-visible defaults; disable Lenis when reduce.

### Anti-Pattern 3: Animating Layout Properties for Storytelling

**What people do:** Scrub `height`, `top`, or margin to morph sections.
**Why it's wrong:** Layout thrash + CLS; scroll-linked shifts count against CLS.
**Do this instead:** `transform` / `opacity` / clip-path; reserve space in the document flow.

### Anti-Pattern 4: CMS/Backend Before Content Shape

**What people do:** Stand up Sanity/Supabase for four product blurbs and a WhatsApp link.
**Why it's wrong:** Delays motion/visual work; invents auth/deploy surface for static facts.
**Do this instead:** Typed content modules; promote to CMS only if editors outside git become a real requirement.

### Anti-Pattern 5: Multiple Smooth-Scroll Libraries

**What people do:** Lenis + Locomotive + CSS scroll-smooth + ScrollTrigger.scrollerProxy guesswork.
**Why it's wrong:** Desync, jumpy pins, unmaintainable mobile bugs.
**Do this instead:** Native **or** Lenis (one); sync via official ticker pattern; skip scrollerProxy for document scroll unless a custom scroller element exists.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| WhatsApp | `https://wa.me/5562998286169` link | Only “backend”; confirm number from content module |
| Product case sites | Outbound links (e.g. Alfa Papéis, Posto Marinheiro) | Open external; do not iframe-heavy if CLS/main-thread risk |
| Analytics (optional later) | Script after consent if ever required | Out of scope for core architecture; don’t block CTA |
| Image CDN (optional) | Static host or loader | Needed if not using framework optimizer on `output: 'export'` |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| Content ↔ UI | Typed imports | UI may not invent Frutmix modules |
| UI ↔ Motion | Refs + register/unregister | Motion may not own copy |
| Motion ↔ Scroll | Single provider API | `scrollTo`, pause, destroy |
| Chrome ↔ Sections | Anchor IDs stable | IDs are part of the public contract |

## Sources

- [GSAP — Accessible Animation / prefers-reduced-motion](https://gsap.com/resources/a11y/) — MEDIUM (official, webfetch)
- [GSAP — gsap.matchMedia()](https://gsap.com/docs/v3/GSAP/gsap.matchMedia/) — MEDIUM (official via search synthesis)
- [Lenis — GSAP ScrollTrigger integration](https://github.com/darkroomengineering/lenis) — MEDIUM (official README pattern via websearch)
- [Lenis React GSAP ticker note](https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md) — MEDIUM
- [web.dev — Optimize CLS](https://web.dev/articles/optimize-cls) — MEDIUM (official)
- [web.dev — High-performance CSS animations](https://web.dev/articles/animations-guide) — MEDIUM (official)
- [Next.js — Static Exports](https://nextjs.org/docs/app/guides/static-exports) — MEDIUM (official; stack still undecided)
- [The Pudding — sticky scrollytelling](https://pudding.cool/process/scrollytelling-sticky/) — LOW–MEDIUM (pattern reference)
- [GoogleChrome modern-web-guidance — scrollytelling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/scrollytelling.md) — MEDIUM (CSS scroll-driven guidance)

---
*Architecture research for: Winner Tech institutional high-motion marketing site*
*Researched: 2026-09-23*
