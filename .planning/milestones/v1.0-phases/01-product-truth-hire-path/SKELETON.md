# Walking Skeleton — Winner Tech

**Phase:** 1
**Generated:** 2026-09-23

## Capability Proven End-to-End

A visitor opens `/` in Portuguese, reads Winner Tech + the four systems, and starts a hire conversation by opening WhatsApp via a real `wa.me` link with the locked message.

## Architectural Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Framework | Next.js 16.3.6 App Router + React 19.3.0 + TypeScript | STACK.md / RESEARCH; Metadata + RSC for brochure; later GSAP islands |
| Data layer | **None** — hardcoded `lib/content.ts` | PROJECT/RESEARCH forbid CMS, auth, database, ORM. No Prisma/Drizzle/SQLite. |
| Auth | **None** | Public hire brochure; WhatsApp only |
| Hire interaction | Constant `https://wa.me/5562998286169?text=…` (two identical in-flow anchors) | CTA-01 / D-07–D-09; message is compile-time constant |
| Styling | Tailwind CSS 4.3.3 (`@import "tailwindcss"`) | Minimal layout shell; Phase 2 owns striking color |
| Deployment target | Local `npm run dev` / `npm run build` (Node ≥20.9); Vercel later | Prove stack without deploy gate in Phase 1 |
| Directory layout | `app/` routes, `components/` sections, `lib/` content + WhatsApp | RESEARCH + PATTERNS greenfield map |

## Stack Touched in Phase 1

- [ ] Project scaffold (Next.js, build, lint, Tailwind)
- [ ] Routing — real route `GET /`
- [ ] ~~Database — at least one real read AND one write~~ **OUT OF SCOPE** (override: no DB; truth lives in `lib/content.ts`)
- [ ] UI — two interactive hire controls (`<a href={WA_HIRE_HREF}>`) opening WhatsApp
- [ ] Deployment — documented local full-stack run: `npm run dev` then open `http://localhost:3000`

## Out of Scope (Deferred to Later Slices)

- GSAP / Lenis / WebGL / scroll pinning (Phase 3)
- Screenshots, cases, brand color composition, OG image (Phase 2)
- Floating WhatsApp button, product-aware prefill, click analytics (Phase 3)
- CMS, auth, database, forms, email, phone alternatives
- Fifth product card for “site”; inventing Frutmix modules
- English UI chrome

## Subsequent Slice Plan

Each later phase adds one vertical slice on top of this skeleton without altering its architectural decisions:

- Phase 2: Visual proof + layout quality (color, W mark, real cases/media, responsive/OG/a11y)
- Phase 3: Motion craft + CTA continuity (scroll chapters, reduced-motion path, floating product-aware WhatsApp + click origin)
