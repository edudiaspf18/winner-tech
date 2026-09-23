# Feature Research

**Domain:** Institutional product-portfolio marketing site (software house with own systems)
**Researched:** 2026-09-23
**Confidence:** MEDIUM (web + competitor patterns cross-checked; Brazil WhatsApp CTA norms verified)

> Scope: **marketing site only**. Do not treat rows below as product roadmap for Zelo / Alfa / Frutmix / Laço.
> Frutmix flag: any feature that invents modules, screens, or capabilities beyond the stated industrial scope (cadastro, produção, nota fiscal / NF-e, relatórios) is **out of scope** and listed under Anti-Features.

## Feature Landscape

### Table Stakes (Users Expect These)

Features buyers assume on a software-house / product-portfolio site. Missing = site feels incomplete or untrustworthy; visitors bounce or never open WhatsApp.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Brand recognition (Winner Tech + W mark) | Buyer must know who they are talking to before product detail | LOW | Public name **Winner Tech**; W logo usable without flat blue file background |
| Clear company value prop (hero) | One pass: what company does + why hire | LOW–MEDIUM | Hire intent, not end-user SaaS signup |
| Four-product portfolio vitrine | Multi-product houses show owned systems up front | MEDIUM | Zelo, Alfa, Frutmix, Laço — each card: name, function, niche |
| Per-product niche + function copy | Buyer self-selects (“isso é pro meu tipo de loja/indústria”) | LOW | From PROJECT.md sources only; no invented Frutmix modules |
| Product detail sections or pages | Portfolio card alone is not enough for hire decision | MEDIUM | Keep depth honest: Alfa Papéis + Posto Marinheiro cases; Frutmix = same industrial scope as Alfa |
| Named case / proof where available | B2B buyers expect evidence, not claims | MEDIUM | Alfa → https://alfapapeis.ind.br/; Laço → Posto Marinheiro; Zelo → niches from product landing; Frutmix → no fake client |
| Primary WhatsApp CTA | Brazil B2B default conversion path | LOW | `wa.me/5562998286169`; decided channel |
| Contextual WhatsApp (product-aware prefill) | Generic “olá” wastes first message; product context qualifies lead | LOW | Prefill e.g. interesse em Zelo / Alfa / Frutmix / Laço |
| Floating WhatsApp affordance | Expected on BR institutional sites; always reachable | LOW | Discreet FAB + inline CTAs after proof; don’t cover content |
| Portuguese-only UI copy | Audience and products are BR | LOW | No bilingual requirement for MVP |
| Mobile-first responsive layout | Hire conversations start on phone | MEDIUM | Desktop + mobile; thumb-reachable CTA |
| Basic SEO / share metadata | Name + products findable; WhatsApp/link previews work | LOW | Title, description, OG image per key route |
| Footer with identity + contact | Legal/contact hygiene; reinforces single channel | LOW | WhatsApp; no fake address/CNPJ theater unless provided |
| Accessibility basics | Keyboard/focus, contrast, alt text for product imagery | LOW–MEDIUM | Especially with motion + strong color |

### Differentiators (Competitive Advantage)

Not required to “look complete,” but align with Core Value and the already-demanded visual craft bar.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Scroll / entrance / spatial continuity motion | Signals craft; reference-tier product sites; not AI-template static | HIGH | Apple/Samsung/Disney/Netflix as craft reference — **do not copy** layout or brand |
| Striking, specific color composition | Stands out vs purple-gradient / cream-serif AI defaults | MEDIUM | Palette must serve W mark; blue file bg not obligatory site bg |
| Product UI storytelling (real screens / motion) | “Show don’t tell” for shop-floor, industrial, loyalty apps | HIGH | Prefer real Zelo/Laço UI; Alfa via public case; Frutmix: industrial framing only — no invented UI |
| Niche-routed portfolio (buyer path by vertical) | Faster “this is for me” than flat agency services grid | MEDIUM | e.g. loja automotiva → Zelo; indústria → Alfa/Frutmix; fidelidade varejo → Laço |
| Case narrative blocks (challenge → solution → outcome) | Trust without a client portal | MEDIUM | Only where real cases exist; soft metrics if no numbers approved |
| Prefilled WhatsApp by product + niche | Higher-quality first message; sales knows intent | LOW | Differentiator vs bare floating green button |
| Single-composition homepage (not dashboard of widgets) | Memorable brand + product story in one viewport philosophy | MEDIUM | Aligns with design constraints already set |
| Lightweight analytics on CTA clicks | Know which product drives hire conversations | LOW | Event on WhatsApp clicks; no marketing CDP needed for MVP |
| Vertical chips on Laço (stated list only) | Shows breadth of white-label without fake modules | LOW | postos, conveniência, autocenters, farmácias, supermercado, food, pet/ótica, academias |

### Anti-Features (Commonly Requested, Often Problematic)

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Login / client area / product dashboards | “Look like a SaaS” | Out of scope; wrong audience (hirers ≠ end users); build/security cost | Link to existing product deploys only if Eduardo provides public URLs |
| Checkout / pricing calculator / self-serve buy | Convert like e-commerce | Revenue is contract/hire; invents prices | WhatsApp conversation for commercial terms |
| Invented Frutmix modules / screens / feature lists | Fill empty product page | Code absent; violates source-of-truth; legal/trust risk | Same industrial scope as Alfa: cadastro, produção, NF-e, relatórios — nothing more |
| Fake case studies or invented metrics | Fill proof gaps | Credibility destroyer if buyer checks | Honest “sistema industrial implantado” framing; use only Alfa Papéis + Posto Marinheiro |
| Agency “services grid” as primary IA | Template default | Winner Tech sells **own systems**, not generic web packages | Product portfolio first; hire CTA second |
| Blog / content engine at launch | SEO long game | Dilutes MVP; no editorial process yet | Ship portfolio + CTA; blog only after hire pipeline works |
| Careers / team / culture megapage | Enterprise template completeness | Not needed for hire-by-WhatsApp MVP | Short about blurb optional later |
| Multi-channel contact forms + chatbot + email + phone | “More ways to reach us” | Splits attention; CTA already decided | One channel: WhatsApp |
| Gated PDF case studies | Lead capture fashion | Friction before trust; BR buyers expect WhatsApp | Open case narrative + WhatsApp CTA |
| Copy of Apple/Samsung/Disney/Netflix layout/brand | “Premium motion” | Brand theft / lookalike; PROJECT forbids | Original motion language + own color system |
| Reimplementing Zelo/Alfa/Frutmix/Laço in this repo | “Demo inside site” | Wrong product; huge scope | Present only; products stay in their repos/deploys |
| “Winner Tecnologia da Informação” as primary title | Historical accuracy | Old name; confuses public brand | Winner Tech only |
| Purple-on-white / cream-serif / generic AI landing look | Fast template | Explicitly rejected differentiator opposite | Strong color + real motion |
| Interactive product demos / sandboxes | Engagement | Auth, data, maintenance; not hire funnel | Static/motion UI storytelling + WhatsApp |
| English locale toggle | “Look international” | Audience is PT-BR operators | Portuguese only for MVP |

## Feature Dependencies

```
Brand + value prop (hero)
    └──requires──> Portfolio vitrine (4 products)
                       └──requires──> Per-product niche + function
                       └──enhances──> Product detail / case blocks
                                          └──enhances──> Contextual WhatsApp CTA
WhatsApp primary CTA
    └──requires──> Stable number + wa.me link
    └──enhances──> Floating affordance + inline CTAs
Motion + color system
    └──enhances──> Hero + portfolio storytelling
    └──conflicts──> Generic AI template patterns
Real UI assets (Zelo/Laço)
    └──enhances──> Product UI storytelling
Frutmix honesty constraint
    └──conflicts──> Invented modules / fake UI / fake case
Analytics on CTA
    └──requires──> Stable CTA markup / events
```

### Dependency Notes

- **Portfolio requires niche+function:** Without both, cards look like agency fluff; Core Value fails.
- **Contextual WhatsApp enhances product pages:** Prefill only valuable after visitor knows which system they want.
- **Motion enhances brand/hero:** Without clear copy first, motion is noise.
- **Frutmix honesty conflicts with invented UI:** Any “demo screen” for Frutmix without assets invents product features — forbidden.
- **Cases enhance hire CTA:** Proof before ask increases WhatsApp open quality.

## MVP Definition

### Launch With (v1)

- [ ] Brand + hero value prop (hire Winner Tech) — Core Value entry
- [ ] Four-product portfolio with niche + function — table stakes
- [ ] Product sections/pages with honest depth (no Frutmix invention) — table stakes
- [ ] Alfa Papéis + Posto Marinheiro case anchors — available proof
- [ ] WhatsApp CTA (inline + floating) to +55 62 99828-6169 — success metric
- [ ] Product-aware WhatsApp prefill — low-cost qualifier
- [ ] Portuguese, responsive, basic SEO/meta — BR institutional baseline
- [ ] Distinct motion + color (non-AI-template) — demanded differentiator

### Add After Validation (v1.x)

- [ ] CTA click analytics (which product → WhatsApp) — after traffic exists
- [ ] Niche-routed entry paths / vertical chips navigation — if bounce shows confusion
- [ ] Richer case narratives (approved quotes/metrics) — when Eduardo supplies
- [ ] Optional short “Sobre” — if buyers ask “quem é a empresa?”

### Future Consideration (v2+)

- [ ] Blog / SEO content program — only with editorial owner
- [ ] Links out to live product marketing sites — when public URLs confirmed
- [ ] Careers / hiring — separate goal from commercial hire
- [ ] Multi-language — only if non-BR buyers appear

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Brand + hero value prop | HIGH | LOW | P1 |
| 4-product portfolio (niche + function) | HIGH | MEDIUM | P1 |
| Honest product detail (Frutmix = Alfa scope) | HIGH | MEDIUM | P1 |
| WhatsApp CTA + floating | HIGH | LOW | P1 |
| Product-aware WhatsApp prefill | HIGH | LOW | P1 |
| Cases (Alfa Papéis, Posto Marinheiro) | HIGH | MEDIUM | P1 |
| Motion + striking color | HIGH | HIGH | P1 |
| PT + responsive + meta | HIGH | LOW–MEDIUM | P1 |
| Product UI storytelling (real assets) | MEDIUM–HIGH | HIGH | P2 |
| Niche-routed paths | MEDIUM | MEDIUM | P2 |
| CTA analytics | MEDIUM | LOW | P2 |
| Blog / careers / forms / login | LOW (for this goal) | HIGH | P3 / never |

**Priority key:**
- P1: Must have for launch
- P2: Should have when assets/traffic allow
- P3: Nice to have / defer or never

## Competitor Feature Analysis

| Feature | BR software houses (Fluxo, Astrotech, M3CS) | Multi-product cos (Automattic-style / suite sites) | Winner Tech approach |
|---------|-----------------------------------------------|-----------------------------------------------------|----------------------|
| Primary IA | Services + client work portfolio | Owned products grid | **Owned products** (Zelo, Alfa, Frutmix, Laço) |
| CTA | WhatsApp dominant | Demo / contact / signup | **WhatsApp only** |
| Proof | Client website cases | Product logos / live products | Real cases where exist; no Frutmix fiction |
| Depth | Service pages | Product pages | Product niche + function + case when available |
| Motion / craft | Often template | Varies | **Required differentiator** |
| Client login | Rare on marketing | Sometimes product links | **None on this site** |

## Sources

- PROJECT.md (Winner Tech scope, products, CTA, anti-scope) — HIGH confidence for requirements
- B2B SaaS / multi-product IA: Webstacks B2B website anatomy; Hyperhelios multi-product architecture; Raze case-study hubs — MEDIUM
- Software-house template section norms (hero, services, process, cases, CTA) — Framer/marketplace patterns — MEDIUM (template bias; we reject services-first)
- Brazil WhatsApp CTA: Malvis, IndexaGO, agency practice (floating + inline, wa.me prefill) — MEDIUM
- BR software-house examples: fluxosistemas.com.br, astrotech.solutions, m3cs.com.br — MEDIUM
- Product-portfolio exemplars: Automattic products, suite-style product pages — MEDIUM (scale differs; pattern holds)

### Confidence notes

| Claim | Confidence | Why |
|-------|------------|-----|
| Table stakes list for this site type | MEDIUM | Cross-checked templates + BR houses + multi-product IA; adapted to hire-via-WhatsApp |
| WhatsApp as primary CTA in BR | MEDIUM–HIGH | Consistent local practice + PROJECT decision |
| Frutmix anti-invention | HIGH | Explicit PROJECT constraint |
| Motion as differentiator | HIGH | Explicit PROJECT demand |

---
*Feature research for: Winner Tech institutional product-portfolio marketing site*
*Researched: 2026-09-23*
