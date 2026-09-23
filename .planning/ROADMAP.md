# Roadmap: Winner Tech

## Overview

Greenfield institutional site: visitor recognizes Winner Tech, understands four owned systems (Zelo, Alfa, Frutmix, Laço) with honest função/nicho and real proof, then opens a product-aware WhatsApp hire path — with craft-tier scroll motion and a full reduced-motion escape. Content truth locks first so polish never invents Frutmix or clones foreign UIs; visual/media/cases next; motion runtime, section choreography, floating CTA, and click telemetry last.

## Milestones

- 🚧 **v1.0 MVP** — Phases 1–3 (in progress)
- 📋 **v2.0** — Discovery paths, Sobre, approved metrics, editorial content (see REQUIREMENTS.md v2)

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [ ] **Phase 1: Product truth + hire path** - Brand, four systems with honest depth, Portuguese copy, baseline WhatsApp
- [ ] **Phase 2: Visual proof + layout quality** - Striking brand composition, real cases/media, responsive/OG/a11y
- [ ] **Phase 3: Motion craft + CTA continuity** - Scroll storytelling with reduced-motion path, floating product-aware WhatsApp, click events

## Phase Details

### Phase 1: Product truth + hire path
**Goal:** As a contratante, I want to see Winner Tech, the four systems with função/nicho, and open WhatsApp to hire, so that I understand the offer and start a conversation — all in Portuguese.
**Mode:** mvp
**Depends on**: Nothing (first phase)
**Requirements**: BRND-01, BRND-02, BRND-04, PROD-01, PROD-02, PROD-03, PROD-04, PROD-05, CTA-01, BASE-01
**Success Criteria** (what must be TRUE):
  1. Visitor sees Winner Tech as the public brand and does not see "Winner Tecnologia da Informação" as the page title
  2. Visitor reads in the hero that Winner Tech builds systems and can be hired
  3. Visitor sees Zelo, Alfa, Frutmix, and Laço, each with função and nicho (Frutmix stays within industrial scope only — no invented modules)
  4. Visitor opens WhatsApp +55 62 99828-6169 from an in-flow control on the page
  5. Every interface string on the page is in Portuguese
**Plans:** 1 plan
Plans:
- [ ] 01-01-PLAN.md — Next.js scaffold + Portuguese content shell + two shared wa.me hire CTAs
**UI hint**: yes

### Phase 2: Visual proof + layout quality
**Goal:** Visitor experiences a brand-led, non-generic visual composition with honest proof assets, and can use and share the page with solid layout and access basics.
**Mode:** mvp
**Depends on**: Phase 1
**Requirements**: BRND-03, MOTN-03, CASE-01, CASE-02, CASE-03, CASE-04, CASE-05, CASE-06, BASE-02, BASE-03, BASE-04
**Success Criteria** (what must be TRUE):
  1. Visitor sees the white W mark without a mandatory blue page field, and page color feels specific and striking — not a generic AI-landing palette
  2. Visitor opens the Alfa Papéis case at https://alfapapeis.ind.br/ and sees Posto Marinheiro as the Laço case, each with a desafio → solução block and no invented numbers or quotes
  3. Visitor sees only the stated Laço verticals, real Zelo and Laço UI imagery, and no invented Frutmix screenshot
  4. Visitor uses the page on phone and desktop without horizontal scroll, reaches controls by keyboard with visible focus, and gets text alternatives on images
  5. A shared link shows Open Graph title, description, and image
**Plans**: TBD
**UI hint**: yes
**Craft**: Interface real de Zelo e Laço dentro da página (ofício Linear/Raycast). Trilho horizontal dos quatro sistemas (ofício Disney+/Netflix, sem pôster de filme). Cor específica, W branca, sem brutalismo e sem azul de dashboard. Frutmix sem tela inventada.

### Phase 3: Motion craft + CTA continuity
**Goal:** Visitor feels product-site scroll continuity between brand and systems (or reads everything without that choreography), and can always hire via a floating WhatsApp that knows which system they were viewing — with that origin recorded.
**Mode:** mvp
**Depends on**: Phase 2
**Requirements**: MOTN-01, MOTN-02, CTA-02, CTA-03, BASE-05
**Success Criteria** (what must be TRUE):
  1. Visitor sees entrance and scroll continuity between brand and the four systems
  2. Visitor with prefers-reduced-motion (or equivalent reduced path) reads the full page without that choreography
  3. Visitor opens the same WhatsApp number from a floating control that stays reachable while scrolling
  4. WhatsApp message arrives prefilled with the system the visitor was viewing
  5. A WhatsApp click records which system originated the click
**Plans**: TBD
**UI hint**: yes
**Craft**: Capítulos presos no scroll, um sistema por vez (ofício Apple). Uma cena WebGL de assinatura (ofício Lusion/Active Theory). O resto do scroll em GSAP + Lenis. `prefers-reduced-motion` lê a página sem coreografia.

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Product truth + hire path | 0/1 | Not started | - |
| 2. Visual proof + layout quality | 0/TBD | Not started | - |
| 3. Motion craft + CTA continuity | 0/TBD | Not started | - |

## Coverage Validation

| Requirement | Phase |
|-------------|-------|
| BRND-01 | Phase 1 |
| BRND-02 | Phase 1 |
| BRND-03 | Phase 2 |
| BRND-04 | Phase 1 |
| PROD-01 | Phase 1 |
| PROD-02 | Phase 1 |
| PROD-03 | Phase 1 |
| PROD-04 | Phase 1 |
| PROD-05 | Phase 1 |
| CASE-01 | Phase 2 |
| CASE-02 | Phase 2 |
| CASE-03 | Phase 2 |
| CASE-04 | Phase 2 |
| CASE-05 | Phase 2 |
| CASE-06 | Phase 2 |
| CTA-01 | Phase 1 |
| CTA-02 | Phase 3 |
| CTA-03 | Phase 3 |
| MOTN-01 | Phase 3 |
| MOTN-02 | Phase 3 |
| MOTN-03 | Phase 2 |
| BASE-01 | Phase 1 |
| BASE-02 | Phase 2 |
| BASE-03 | Phase 2 |
| BASE-04 | Phase 2 |
| BASE-05 | Phase 3 |

**Coverage:** 26/26 v1 requirements mapped. Unmapped: 0. v2 IDs excluded from v1 phases.
