# Pitfalls Research

**Domain:** High-motion institutional software-house marketing website (hire-us vitrine, Brazil / Portuguese)
**Project:** Winner Tech
**Researched:** 2026-09-23
**Confidence:** HIGH (content/scope + a11y/CLS from primary sources); MEDIUM (GSAP mobile jank, B2B conversion patterns from secondary sources)

## Critical Pitfalls

### Pitfall 1: Inventing Frutmix (or any product) modules without a source of truth

**What goes wrong:**
Site lists Frutmix screens, prices, or modules that Eduardo never stated and that have no local codebase. Buyer later compares claim to reality and trust collapses. Same trap applies if Alfa or Laço features are extrapolated past approved sources.

**Why it happens:**
Frutmix has no local source; agents and designers fill gaps with plausible industrial ERP modules. Empty sections feel unfinished, so invention looks like “completeness.”

**How to avoid:**
- Treat Eduardo’s stated industrial scope as a hard ceiling for Frutmix: cadastro, produção, nota fiscal (emitir), relatórios — same class as Alfa.
- Source matrix (mandatory before copy ships):
  - **Zelo** → local repo/landing (`/Users/user/DevWeb/ZELO`)
  - **Laço** → other repo landing (`posto marinheiro`) — cite niches/verticais already published there
  - **Alfa** → Eduardo’s description + public case link only (not private UI scrape)
  - **Frutmix** → Eduardo’s description only; no invented modules
- Every product bullet must map to a cited source in content docs. No source → cut or mark “pending owner.”

**Warning signs:**
- Feature lists longer for Frutmix than for Alfa without new owner input
- Phrases like “incluindo…” followed by modules never mentioned in PROJECT.md
- Mockups of Frutmix screens that look “complete” but have no screenshot source

**Phase to address:**
Content / product-truth phase (before UI polish). Re-check at verification.

---

### Pitfall 2: Scraping or cloning Alfa Papéis private UI as “proof”

**What goes wrong:**
Team uses https://alfapapeis.ind.br/ as a design template, copies screenshots of logged-in/private surfaces, or reverse-engineers their UI into this marketing site. Legal/trust risk; also misrepresents Winner Tech as the client’s public brand.

**Why it happens:**
Alfa has no local code mounted; the live client site feels like the only visual reference. “Case study fidelity” gets confused with “copy their product UI.”

**How to avoid:**
- Public case = name + niche + approved public facts only.
- Do **not** scrape, mirror, or recreate Alfa Papéis private panels.
- Visuals for Alfa: abstract industrial metaphor, Winner-owned photography, or owner-supplied assets — never client-app chrome.
- If a screenshot is needed later: written permission + owner-provided export only.

**Warning signs:**
- Figma/frames that match alfapapeis.ind.br layout grids or private dashboards
- Network logs or scripts hitting the client domain during build
- Copy that reads as if Winner Tech *is* Alfa Papéis

**Phase to address:**
Design direction + product showcase. Gate in content review.

---

### Pitfall 3: Merging Laço (posto marinheiro) into this git repo

**What goes wrong:**
Loyalty app, frentista app, or painel code lands inside `winner-tech`. Site stops being a vitrine and becomes a Frankenstein monorepo; deploys and ownership blur.

**Why it happens:**
Laço already has a landing “by WinnerTech”; shortcut is “just move it here.” Greenfield empty repo invites “import the product.”

**How to avoid:**
- Out of scope is absolute: present Laço; do not reimplement or vendor the app.
- Link out or describe; keep product code in its own repo/deploy.
- Case: Posto Marinheiro as named reference; verticais from existing Laço landing only.

**Warning signs:**
- PRs adding `apps/laco`, Expo, or auth routes
- `package.json` dependencies that only make sense for the loyalty runtime
- Copy that invites end users to “entrar no app” as primary CTA

**Phase to address:**
Architecture / repo boundaries (first phase). Enforce in every product-showcase plan.

---

### Pitfall 4: Vague “fazemos tecnologia” copy (business failure)

**What goes wrong:**
Hero and about copy could sit on any software house homepage. Visitor who can hire Winner Tech never learns *which* systems, *for whom*, or *why message now*. Hire conversation never starts.

**Why it happens:**
Institutional sites default to safe abstractions (“soluções digitais”, “transformação”, “inovação”). Motion and polish mask empty positioning. Agency research consistently shows vague value props kill conversion before contact.

**How to avoid:**
- One-pass test: after hero + one product block, visitor can name Winner Tech, at least one system, and its niche (loja de carro / indústria / fidelidade).
- Portuguese copy must name **Zelo, Alfa, Frutmix, Laço** with função + nicho — not a generic services grid.
- Audience is the **contratante** (dono/gestor), not the end user of each system.
- Ban interchangeable fluff unless tied to a concrete product outcome.

**Warning signs:**
- Hero works with brand name swapped for a competitor
- First viewport has motion but no product names
- “Tecnologia da informação” used as primary title (old legal name drift)

**Phase to address:**
Messaging / content phase immediately after product-truth. Re-audit before launch.

---

### Pitfall 5: Motion that ignores `prefers-reduced-motion`

**What goes wrong:**
Parallax, pin-scrub, scroll-linked scale/rotate, and autoplay motion run for users who opted into reduced motion. Vestibular harm, WCAG 2.3.3 failure risk, and a premium site that feels hostile.

**Why it happens:**
“Premium product site” references (Apple-class craft) are implemented as always-on GSAP/CSS. CSS media query alone does not stop Web Animations API / GSAP timelines.

**How to avoid:**
- Motion-safe default: static layout first; enable rich motion only under `(prefers-reduced-motion: no-preference)` (W3C technique C39 / web.dev).
- Gate **CSS and JS** via `matchMedia`; listen for preference changes.
- Reduced path: opacity/color fades OK; kill parallax, scroll-jacking, pin theaters, autoplay video.
- Pause/stop control for any auto-moving content lasting >5s (WCAG 2.2.2).

**Warning signs:**
- DevTools “Emulate CSS prefers-reduced-motion” still shows scrub/pin motion
- Animations defined only in JS with no `matchMedia` branch
- Reduced-motion users report nausea or cannot read while scrolling

**Phase to address:**
Motion system phase (foundation before shipping scroll theaters). Verify in a11y pass.

---

### Pitfall 6: Scroll animation that creates CLS and jank (lab green, field red)

**What goes wrong:**
Page feels premium on desktop video capture but: (1) layout shifts while scrolling, (2) mobile pin/scrub stutters, (3) Lighthouse CLS looks fine because Lighthouse does not scroll — field CLS fails.

**Why it happens:**
Animating `top`/`left`/`height`/`margin`/`width` on scroll. Scroll is **not** excluding input for CLS (unlike click/tap 500ms grace — web.dev Layout Instability). Mobile address-bar resize + pin flash known with ScrollTrigger-class tools. Animating the trigger element on Y breaks start/end math.

**How to avoid:**
- Animate **only** `transform` and `opacity` for movement/fade.
- Reserve space for images/video (`width`/`height` or `aspect-ratio`) before reveal.
- Fonts: size-adjust / fallback metrics to limit FOIT/FOUT shift.
- Mobile: simplify or disable heavy pins via `matchMedia`; refresh triggers after images/fonts load, not only `DOMContentLoaded`.
- Verify CLS with Performance panel **while scrolling** and/or field RUM — do not trust load-only Lighthouse CLS for a motion site.

**Warning signs:**
- CrUX/field CLS worse than Lighthouse
- Sticky/pin sections jump on iOS when chrome shows/hides
- Decorations inject height as they enter viewport

**Phase to address:**
Motion + performance hardening. Re-check on real mid-tier Android/iOS before launch.

---

### Pitfall 7: Unreadable contrast over motion, gradients, or video

**What goes wrong:**
Headline/CTA sits on animated hero or patterned background; contrast fails at the worst frame. Looks cinematic in Figma; fails WCAG 1.4.3 / F83 in production. Hire CTA becomes hard to find or read.

**Why it happens:**
High-motion sites prioritize atmosphere over scrims. Animated backgrounds change luminance under static text.

**How to avoid:**
- Solid or semi-opaque scrim/panel behind all critical text and WhatsApp CTA.
- Measure contrast at the **worst** background sample under the text (WebAIM/W3C guidance for gradients/images).
- Normal text ≥ 4.5:1; large text ≥ 3:1 (WCAG 1.4.3).
- Never rely on motion itself to “reveal” readability.

**Warning signs:**
- White text on busy photo without overlay
- Contrast passes on a still frame, fails mid-animation
- CTA only readable on desktop dark theme mock, not mobile daylight

**Phase to address:**
Visual design system + motion integration. Automated contrast check in verification.

---

### Pitfall 8: Decoration-as-product (motion with no meaning) + generic AI aesthetic

**What goes wrong:**
Equal cards, purple/indigo gradients, glow pills, centered empty hero — or Awwwards-style motion that does not explain any of the four systems. Site looks like every AI landing; fails brand test and hire goal.

**Why it happens:**
Default generative layouts + “add scroll animations” without a storyboard that maps motion → product understanding. User already rejected generic AI look and mandatory blue full-bleed.

**How to avoid:**
- Brand-first composition: Winner Tech + W mark readable without depending on logo-file blue field.
- Motion must teach something (spatial continuity between products, niche atmosphere for Zelo vs industrial Alfa/Frutmix vs white-label Laço) — else cut it.
- Explicit anti-defaults: no purple-on-white template look; no obligatory blue full-bleed background; no card grid as hero.
- First viewport budget: brand, one headline, one support line, CTA group, one dominant visual — not stats strip + four product teasers + schedule junk.

**Warning signs:**
- Removing brand name leaves a page that could be any SaaS
- Motion demo reel with no product nouns in voiceover/copy
- Design review feedback: “parece template”

**Phase to address:**
UI direction / design contract before build. Enforce in UI review.

---

### Pitfall 9: Wrong CTA model (heavy lead form, or broken WhatsApp)

**What goes wrong:**
Multi-field “solicite orçamento” form becomes the only path; Brazil B2B hire intent stalls. Or WhatsApp link uses wrong number, missing `wa.me` format, or no context — conversation never starts (success metric fails).

**Why it happens:**
Global B2B templates assume gated forms. Conversely, “WhatsApp is easy” skips QA of the actual deep link. Research does **not** require a form for this project; PROJECT.md already chose WhatsApp.

**How to avoid:**
- Primary CTA: WhatsApp `https://wa.me/5562998286169` (confirmed).
- Optional short prefilled text naming Winner Tech + product interest — keep optional, not a form.
- Do not add a mandatory lead form unless a later decision explicitly overrides PROJECT.md.
- Place CTA where contrast and thumb reach work on mobile; repeat after each product block without harassment.

**Warning signs:**
- Contact page is only a Formspree/email form
- Link opens chat to a different number than Laço landing
- CTA buried below three scroll theaters

**Phase to address:**
Conversion / CTA phase. Smoke-test on real device before launch.

---

### Pitfall 10: Audience inversion (selling to end users of Zelo/Laço)

**What goes wrong:**
Copy recruits lava-jato attendants or frentistas (“baixe o app”, “veja sua pontuação”) instead of owners who buy systems. Site competes with product landings and fails institutional hire goal.

**Why it happens:**
Product landings already speak to operators; easy to paste tone into the institutional site.

**How to avoid:**
- Every section answers: “Por que contratar a Winner Tech para *este* sistema?”
- Product pages here are vitrine summaries, not full product onboarding.
- End-user journeys stay on product deploys/repos.

**Warning signs:**
- Primary verbs: baixar, pontuar, bater ponto, emitir como operador
- Screenshots emphasize cashier/frentista UX without owner framing

**Phase to address:**
Messaging phase. Spot-check each product block.

---

### Pitfall 11: Mandatory blue full-bleed as “brand compliance”

**What goes wrong:**
Entire site becomes the logo file’s blue rectangle. Brand recognition attaches to a flat field instead of the W mark and wordmark; contradicts owner direction and kills distinctive color/motion direction.

**Why it happens:**
Logo asset includes blue field; designers treat asset background as brand color system.

**How to avoid:**
- Use geometric W + WINNERTECH wordmark; background is a designed palette that can move and call attention.
- Logo blue may appear as an accent, not an obligation for full-bleed surfaces.

**Warning signs:**
- Every section background = logo blue
- Dark/light themes only swap blue shades

**Phase to address:**
Brand/visual foundation phase.

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Ship scroll theaters before reduced-motion branches | Looks done in demos | A11y rewrite; vestibular complaints | Never for launch |
| Invent Frutmix bullets “temporarily” | Fills empty section | Credibility debt; rewrite under pressure | Never — leave thinner accurate copy |
| Embed Laço app routes “just for demo” | One deploy | Repo ownership mess | Never |
| Animate with `top`/`height` for pinning feel | Easy CSS | CLS + jank; hard retrofit | Never for scroll-linked motion |
| Trust Lighthouse CLS only | Fast CI | Field CLS fails on scroll site | Lab OK as smoke; not as pass |
| Stock AI purple gradient kit | Fast first draft | Brand rejection already stated | Never |
| Add lead form “in case” | Familiar B2B pattern | Extra friction vs WhatsApp success metric | Only if owner overrides CTA decision |
| Copy Alfa Papéis UI chrome | Visual specificity | Legal/trust + wrong brand | Never |

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| WhatsApp (`wa.me`) | Wrong digits, desktop-only `api.whatsapp.com` assumptions, no mobile QA | Use confirmed `5562998286169`; test iOS + Android |
| Alfa case link | Scraping client site for assets/UI | Link as public case reference; no private UI |
| Laço product | Importing posto marinheiro into this repo | Cite + link out; keep code separate |
| Motion library (GSAP-class) | CSS `prefers-reduced-motion` only | Also gate JS timelines with `matchMedia` |
| Fonts (expressive) | Swap after paint → CLS under hero | Preload critical face; metric-matched fallback |
| Analytics (if added later) | Third-party widgets without reserved space | Reserve height; defer non-critical |

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Scroll-linked layout animation | CLS rises while scrolling; buttons jump | transform/opacity only | Immediately on scroll-heavy pages |
| Heavy pin scrub on mobile | Jank, pin flash, address-bar jump | `matchMedia` lighter mobile path | Mid-tier phones, iOS Safari |
| Unsized hero media | Content jumps when image arrives | aspect-ratio / explicit dimensions | First paint on slow 4G |
| Too many ScrollTriggers | Main-thread busy; battery heat | Fewer theaters; kill off-screen | Multi-section marketing pages |
| will-change on everything | Memory pressure | Only on actively animating nodes | Long sessions / low RAM |
| Autoplay video backgrounds | Data + a11y + contrast fights | Prefer still + motion CSS; respect reduced motion | Mobile data + reduce preference |

## Security Mistakes

| Mistake | Risk | Prevention |
|---------|------|------------|
| Scraping/mirroring client private UI | Copyright, contract, trust | Public facts only; owner assets |
| Leaking internal Alfa/Frutmix URLs or credentials into marketing repo | Exposure of private systems | No env secrets in site; no private paths in public copy |
| Open WhatsApp with attacker-controlled query from user input | Message injection if later dynamic | Keep deep link static or tightly templated |
| “Contact form” to random third-party without DPA | LGPD exposure of leads | Prefer WhatsApp; if form added later, choose compliant processor |

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Motion blocks reading | Buyer cannot finish product story | Reduced-motion path; shorter theaters |
| CTA contrast failure | Cannot start hire chat | Scrim + high-contrast button |
| Four equal feature cards | No niche differentiation | Distinct atmosphere per product |
| English-first or mixed jargon | Brazil audience friction | Portuguese throughout; Brazilian niches named |
| Scroll-jack hijack | Feels trapped; rage-quit | Prefer scroll-linked enhancement over replacing scroll |
| Hero clutter | No brand recognition | Hero budget: brand + one claim + CTA + one visual |

## "Looks Done But Isn't" Checklist

- [ ] **Frutmix copy:** No modules beyond Eduardo’s industrial scope — verify against PROJECT.md source matrix
- [ ] **Alfa case:** Mentions Alfa Papéis publicly without cloned private UI
- [ ] **Laço:** Described as white-label fidelidade with Posto Marinheiro case; **not** merged into this repo
- [ ] **Zelo:** Automotive/lava-jato/oficina framing matches local landing truths
- [ ] **Reduced motion:** Emulate `prefers-reduced-motion: reduce` — pin/parallax/scrub off
- [ ] **CLS while scrolling:** Performance observer / DevTools while scrubbing full page on mobile
- [ ] **Contrast:** Worst-frame check on hero + CTA (WCAG 1.4.3)
- [ ] **WhatsApp:** Opens correct number on real phone; Portuguese context OK
- [ ] **Brand:** W mark readable without mandatory blue full-bleed
- [ ] **Hire clarity:** Stranger can state what Winner Tech sells after one pass
- [ ] **No AI-template look:** No purple gradient card farm as default identity
- [ ] **Old name:** “Winner Tecnologia da Informação” not used as site title

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Invented Frutmix features | MEDIUM | Delete unverified bullets; republish thin accurate scope; owner review |
| Copied client UI | HIGH | Remove assets/code; legal review if published; replace with owned visuals |
| Laço merged into repo | HIGH | Extract product code back; leave marketing stubs only |
| Missing reduced-motion | MEDIUM | Add global motion gate; retest theaters |
| Scroll CLS/jank | MEDIUM–HIGH | Replace layout animations with transform; simplify mobile pins |
| Vague copy | MEDIUM | Rewrite hero + product blocks to função/nicho; A/B not required for v1 |
| Wrong WhatsApp | LOW | Fix link; smoke-test devices |
| Blue-only brand | LOW–MEDIUM | Retokenize palette; keep W mark |

## Pitfall-to-Phase Mapping

Suggested roadmap phases (names may be adjusted by roadmapper):

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Inventing Frutmix / product fiction | **Content & product truth** | Source matrix checklist; no orphan bullets |
| Alfa UI scrape/clone | **Design + product showcase** | No client-domain assets in repo |
| Merging Laço app | **Architecture / repo boundaries** | Repo contains presentation only |
| Vague hire copy | **Messaging** | One-pass comprehension test with outsider |
| Ignoring reduced motion | **Motion system** | Emulate reduce; JS+CSS gated |
| CLS / mobile jank | **Motion + performance** | Scroll CLS trace; real-device scrub |
| Contrast on motion | **Visual system + motion** | Worst-frame contrast ≥ AA |
| AI aesthetic / blue obligation | **UI direction / brand** | Brand test; palette ≠ logo-file blue only |
| Wrong CTA | **Conversion** | Device WhatsApp smoke test |
| Audience inversion | **Messaging** | Copy audit: contratante verbs only |

**Phase ordering rationale:** Product truth and messaging before motion theaters — otherwise polish locks in wrong content. Motion foundation (reduced-motion + transform-only rules) before building multiple scroll sections — retrofit is expensive. CTA wiring early enough to appear in every product block, verified last on devices.

## Sources

- Project constraints: `.planning/PROJECT.md` (Winner Tech products, WhatsApp CTA, Frutmix/Alfa/Laço boundaries, visual rejections)
- W3C WCAG Technique C39 — `prefers-reduced-motion` ([w3.org](https://www.w3.org/WAI/WCAG21/Techniques/css/C39.html)) — **HIGH**
- web.dev — `prefers-reduced-motion` ([web.dev](https://web.dev/articles/prefers-reduced-motion)) — **HIGH**
- web.dev — Cumulative Layout Shift; scroll not excluding input ([web.dev/cls](https://web.dev/articles/cls)) — **HIGH**
- Core Web Vitals community — scroll-triggered animations → CLS; Lighthouse does not scroll ([corewebvitals.io](https://www.corewebvitals.io/pagespeed/scroll-triggered-animations-cause-cls)) — **MEDIUM**
- W3C WCAG 1.4.3 / Failure F83 — contrast over images ([w3.org](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [F83](https://www.w3.org/WAI/WCAG22/Techniques/failures/F83.html)) — **HIGH**
- GSAP ScrollTrigger mobile/jank guidance (community + docs: `normalizeScroll`, `ignoreMobileResize`, do not animate trigger Y) — **MEDIUM**
- B2B/agency conversion patterns — vague value props and gallery-without-proof (industry analyses; WhatsApp preferred here by project decision, form not required) — **MEDIUM**

**Gaps:** Exact GSAP vs CSS scroll-driven choice not decided (stack research owns that). Field RUM tooling not chosen yet — flag for performance phase. No scrape of alfapapeis.ind.br performed (intentional).

---
*Pitfalls research for: Winner Tech institutional high-motion marketing site*
*Researched: 2026-09-23*
