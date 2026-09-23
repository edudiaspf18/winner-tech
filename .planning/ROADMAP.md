# Roadmap: Winner Tech

## Milestones

- ✅ **v1.0 MVP** — Phases 1–3 (shipped 2026-09-23)
- 🚧 **v2.0 Discovery & Trust** — Phases 4–6 (in progress)

## Phases

<details>
<summary>✅ v1.0 MVP (Phases 1–3) — SHIPPED 2026-09-23</summary>

- [x] Phase 1: Product truth + hire path (1/1 plans) — completed 2026-09-23
- [x] Phase 2: Visual proof + layout quality (1/1 plans) — completed 2026-09-23
- [x] Phase 3: Motion craft + CTA continuity (1/1 plans) — completed 2026-09-23

Archive: [v1.0-ROADMAP.md](./milestones/v1.0-ROADMAP.md) · [v1.0-REQUIREMENTS.md](./milestones/v1.0-REQUIREMENTS.md)

</details>

### Phase 4: Discovery paths + Sobre
**Goal:** Visitante encontra nicho e conhece a empresa sem sair do hire path.  
**Requirements:** DISC-01, DISC-02  
**Success criteria:**
1. Três rotas (ou equivalentes) de nicho apontam para os sistemas certos
2. `/sobre` explica quem é a Winner Tech em português curto
3. Nav/footer linkam Sobre; CTA WhatsApp presente nas páginas novas
4. Visual continua a linguagem craft do v1 (sem layout genérico)

### Phase 5: Approved testimonials / metrics
**Goal:** Prova social só com conteúdo aprovado; sem inventar.  
**Requirements:** CASE-07  
**Success criteria:**
1. Schema de depoimento/métrica em content; lista vazia = seção omitida
2. Com ≥1 entrada aprovada, seção renderiza quote/métrica + atribuição
3. Nenhum número ou frase inventada no código default
4. Integra home (e Sobre se fizer sentido) sem quebrar cases existentes

### Phase 6: Real analytics
**Goal:** Hire clicks medíveis em produção via GA4.  
**Requirements:** ANAL-01, ANAL-02  
**Success criteria:**
1. GA4 script só com `NEXT_PUBLIC_GA_MEASUREMENT_ID`
2. `trackHireClick` continua empurrando `hire_whatsapp_click` + `origin`
3. `.env.example` documenta a var; sem ID o site funciona offline de terceiros
4. Preferência reduced-motion / a11y inalterados

## Overview

v2.0 adds discovery entry points, a short About page, gated social proof, and production analytics on top of the v1.0 hire brochure.

## Progress

| Phase | Plans | Status |
|-------|-------|--------|
| 4 Discovery + Sobre | 0 | Not started |
| 5 Approved proof | 0 | Not started |
| 6 Real analytics | 0 | Not started |

---
*Roadmap created: 2026-09-23 for v2.0*
