# Phase 2: Visual proof + layout quality - Context

**Gathered:** 2026-09-23
**Status:** Ready for planning

<domain>
## Phase Boundary

Fase 3 endurece movimento (reduced-motion), CTA flutuante e prefill/analytics por sistema. Não reabre copy do hero nem ordem dos produtos.

</domain>

<decisions>
## Implementation Decisions

- **D-01:** Floating CTA sempre visível após scroll; mensagem inclui sistema ativo quando houver.
- **D-02:** Clique registra `hire_whatsapp_click` + origin no `dataLayer` stub.
- **D-03:** `prefers-reduced-motion` desliga Lenis, pin do trilho, WebGL e marquee; conteúdo permanece legível.

### Claude's Discretion
- Stub analytics suficiente até analytics real.

</decisions>

<deferred>
## Deferred Ideas
- CASE-07 depoimento com métrica só quando Eduardo entregar

</deferred>
