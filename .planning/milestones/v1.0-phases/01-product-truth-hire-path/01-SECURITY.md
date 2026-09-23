---
phase: "01"
slug: "product-truth-hire-path"
status: verified
threats_open: 0
asvs_level: 1
created: "2026-09-23"
---

# Phase 01 — Security

> Per-phase security contract: threat register, accepted risks, and audit trail.

---

## Trust Boundaries

| Boundary | Description | Data Crossing |
|----------|-------------|---------------|
| Visitor browser → Next.js document | Untrusted client receives static RSC HTML; no auth | Public brochure copy only |
| Visitor click → WhatsApp (wa.me) | External navigation to Meta-hosted chat URL | Fixed phone digits + constant Portuguese hire message |

---

## Threat Register

| Threat ID | Category | Component | Severity | Disposition | Mitigation | Status |
|-----------|----------|-----------|----------|-------------|------------|--------|
| T-01-01 | Spoofing | Hire CTA href | high | mitigate | Hardcoded `https://wa.me/5562998286169` via `WA_PHONE_DIGITS` in `lib/whatsapp.ts`; never built from request input | closed |
| T-01-02 | Tampering | WA message text | medium | mitigate | `WA_MESSAGE` compile-time constant in `lib/content.ts`; `encodeURIComponent` once in `lib/whatsapp.ts` | closed |
| T-01-03 | Information Disclosure | Metadata title | low | mitigate | `metadata.title: "Winner Tech"` in `app/layout.tsx`; old legal name absent | closed |
| T-01-04 | Elevation of Privilege | N/A | low | accept | No auth surface in Phase 1 | closed |
| T-01-05 | Tampering | External link target | low | mitigate | `rel="noopener noreferrer"` on `target="_blank"` hire anchors in `components/hire-cta.tsx` | closed |
| T-01-06 | Denial of Service | N/A | low | accept | Static brochure; no write APIs | closed |
| T-01-SC | Tampering | npm installs | high | mitigate | Pinned `next@16.3.6`, `react@19.3.0`, `tailwindcss@4.3.3`; no unaudited deps | closed |

*Status: open · closed · open — below high threshold (non-blocking)*
*Severity: critical > high > medium > low — only open threats at or above workflow.security_block_on count toward threats_open*
*Disposition: mitigate (implementation required) · accept (documented risk) · transfer (third-party)*

---

## Accepted Risks Log

| Risk ID | Threat Ref | Rationale | Accepted By | Date |
|---------|------------|-----------|-------------|------|
| R-01-04 | T-01-04 | Brochure phase has no auth; elevation surface absent by design | plan disposition | 2026-09-23 |
| R-01-06 | T-01-06 | Static RSC brochure; no write APIs or stateful backends | plan disposition | 2026-09-23 |

---

## Security Audit Trail

| Audit Date | Threats Total | Closed | Open | Run By |
|------------|---------------|--------|------|--------|
| 2026-09-23 | 7 | 7 | 0 | gsd-secure-phase (ASVS L1 short-circuit) |

---

## Sign-Off

- [x] All threats have a disposition (mitigate / accept / transfer)
- [x] Accepted risks documented in Accepted Risks Log
- [x] `threats_open: 0` confirmed
- [x] `status: verified` set in frontmatter

**Approval:** verified 2026-09-23
