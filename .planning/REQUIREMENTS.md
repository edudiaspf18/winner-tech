# Requirements: Winner Tech

**Defined:** 2026-09-23  
**Core Value:** Um visitante entende, em uma passagem, o que a Winner Tech faz, para quem cada sistema serve, e como pedir uma conversa para contratar.  
**Milestone:** v2.0 Discovery & Trust

## v2 Requirements

### Discovery

- [ ] **DISC-01**: Visitante entra por um caminho de nicho (loja automotiva, indústria, fidelidade) se a vitrine única não bastar
- [ ] **DISC-02**: Visitante lê um "Sobre" curto e chega ao CTA de contratar

### Approved proof

- [ ] **CASE-07**: Visitante lê depoimento ou métrica só quando o Eduardo entregar o dado; sem entrada aprovada, a seção não aparece

### Analytics

- [ ] **ANAL-01**: Site carrega GA4 quando `NEXT_PUBLIC_GA_MEASUREMENT_ID` está definido; sem ID, não carrega script de terceiros
- [ ] **ANAL-02**: Clique em "Quero contratar" envia evento `hire_whatsapp_click` com `origin` para o dataLayer/GA4

## Future Requirements

### Content / growth (deferred)

- **CONT-01**: Visitante lê um blog só com dono editorial definido
- **CONT-02**: Visitante segue para sites públicos dos produtos só quando a URL for confirmada
- **CONT-03**: Visitante vê vagas só como meta separada da contratação comercial
- **CONT-04**: Visitante troca o idioma só se aparecer comprador fora do Brasil

## Out of Scope

| Feature | Reason |
|---------|--------|
| Depoimento inventado | CASE-07 — só dado aprovado |
| Hardcoded GA ID no repo | Segredo/config via env |
| Painel admin de depoimentos | Conteúdo em `lib/content.ts` até haver CMS |
| Blog / vagas / i18n | CONT-* fora do v2.0 |
| Reimplementar produtos | Site só apresenta |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DISC-01 | Phase 4 | Pending |
| DISC-02 | Phase 4 | Pending |
| CASE-07 | Phase 5 | Pending |
| ANAL-01 | Phase 6 | Pending |
| ANAL-02 | Phase 6 | Pending |

**Coverage:**
- v2 requirements: 5 total
- Mapped to phases: 5
- Unmapped: 0

---
*Requirements defined: 2026-09-23*  
*Last updated: 2026-09-23 after new-milestone v2.0*
