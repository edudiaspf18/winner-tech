# Retrospective

## Milestone: v1.0 — MVP

**Shipped:** 2026-09-23  
**Phases:** 3 | **Plans:** 3

### What Was Built
- Phase 1: content truth + WhatsApp hire path
- Phase 2: visual craft, cases, proof, OG
- Phase 3: motion hardening + product-aware floating CTA

### What Worked
- Locking copy/CTA early (Phase 1) prevented polish from inventing Frutmix
- Absorbing live craft into Phase 2 plan instead of reverting to zinc brochure
- User feedback loops (green CTA, 3D subtlety, remove chapters) steered visual quality fast

### What Was Inefficient
- Phase 1 shipped as white skeleton; motion deferred then rushed forward after feedback
- Skipping formal milestone audit; verification digests went stale after craft evolution
- Research assumed CSS snap rail; implementation used GSAP pin (fine, but docs lagged)

### Patterns Established
- Compile-time WhatsApp constants; never build from request input
- `ActiveProductProvider` for CTA context
- Reveal-on-scroll with `prefers-reduced-motion` gates

### Key Lessons
- Ship a craft-credible first viewport early for marketing sites; “walking skeleton” feels broken to stakeholders
- Accent colors for CTA need high contrast — neon green on dark fails readability
- Honest proof > invented screenshots (Frutmix type-only rule held)

### Cost Observations
- Single continuous session; phases compressed after Phase 1 UAT

## Cross-Milestone Trends

| Milestone | Phases | Pattern |
|-----------|--------|---------|
| v1.0 | 3 | Content lock → visual → motion |
