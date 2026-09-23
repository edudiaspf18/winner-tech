# Phase 2: Visual proof + layout quality - Context

**Gathered:** 2026-09-23
**Status:** Ready for planning

[--auto] Selected all gray areas: Marca gráfica e paleta; Trilho dos quatro sistemas; Cases desafio→solução; Prova visual (UI real / Frutmix); Base OG + a11y + responsivo.

[auto] Marca gráfica e paleta — Q: "Como o W branco entra sem fundo azul obrigatório?" → Selected: "W branco (ou marca tipográfica Winner Tech) no header; fundo de página próprio, nunca o azul chapado do arquivo da logo" (recommended default)
[auto] Marca gráfica e paleta — Q: "Qual direção de cor?" → Selected: "Paleta operacional específica (ink escuro + um acento vivo de operação/loja), fora de roxo-IA, cream+terracota, dark-glow e azul de dashboard" (recommended default)
[auto] Trilho dos quatro sistemas — Q: "Como organizar os quatro produtos visualmente?" → Selected: "Trilho horizontal dos quatro sistemas (ofício Disney+/Netflix sem pôster de filme); ordem Zelo→Alfa→Frutmix→Laço preservada; mobile: scroll horizontal do trilho sem scroll horizontal da página" (recommended default)
[auto] Cases desafio→solução — Q: "Como apresentar Alfa Papéis e Posto Marinheiro?" → Selected: "Dois blocos desafio→solução; Alfa Papéis linka https://alfapapeis.ind.br/; Posto Marinheiro é case Laço; sem número, métrica ou depoimento inventado" (recommended default)
[auto] Prova visual — Q: "Quais imagens de UI entram?" → Selected: "Só UI real de Zelo e Laço; Frutmix fica tipografia/composição sem screenshot inventado; Laço lista só verticais já ditas" (recommended default)
[auto] Base OG + a11y — Q: "Compartilhamento e acesso?" → Selected: "OG title/description/image com Winner Tech; foco de teclado visível; alt em imagens; sem scroll horizontal no documento" (recommended default)

<domain>
## Phase Boundary

Fase 2 veste a página da fase 1 com marca gráfica, cor específica, trilho dos quatro sistemas, cases reais (Alfa Papéis, Posto Marinheiro), imagens reais de Zelo e Laço, e base de layout/OG/a11y. Não muda a oferta do hero, a ordem dos produtos, nem o destino do WhatsApp. Scroll preso, WebGL, botão flutuante e prefill por produto ficam na fase 3.

</domain>

<decisions>
## Implementation Decisions

### Marca gráfica e paleta
- **D-01:** Header mostra o W branco (marca gráfica) sem exigir o fundo azul do arquivo da logo. O wordmark Winner Tech permanece legível. — **Reversibility:** costly — a marca gráfica publicamente colocada no header vira âncora visual da página.
- **D-02:** A página ganha paleta própria, específica e chamativa (MOTN-03). Proibido: gradiente roxo/índigo de IA, cream+#terracotta, dark-mode com glow, azul chapado de dashboard, brutalismo cru.
- **D-03:** Se o arquivo da logo ainda não estiver em `public/`, o plano inclui copiar/exportar o W (sem campo azul obrigatório) a partir do asset entregue na conversa do projeto.

### Trilho dos quatro sistemas
- **D-04:** Os quatro sistemas formam um trilho horizontal (ofício Disney+/Netflix, sem pôster de filme). Ordem travada: Zelo → Alfa → Frutmix → Laço (D-06 fase 1).
- **D-05:** Cada item do trilho continua com função + nicho (copy da fase 1). O trilho não vira card genérico idêntico; composição com âncora visual real (UI ou tipografia).
- **D-06:** No mobile, o trilho pode rolar no eixo X interno; o documento da página não gera scroll horizontal (BASE-02).

### Cases desafio → solução
- **D-07:** Case Alfa: link público https://alfapapeis.ind.br/ (CASE-01). Bloco desafio → solução sem inventar número ou depoimento (CASE-03).
- **D-08:** Case Laço: Posto Marinheiro (CASE-02). Mesmo formato desafio → solução; sem inventar prova.
- **D-09:** Verticais do Laço só as já ditas: postos, conveniência, autocenters, farmácias, supermercado, food, pet/ótica, academias (CASE-04).

### Prova visual de UI
- **D-10:** Imagens reais de interface do Zelo e do Laço entram na página (CASE-05). Fonte: landings/repos locais (`ZELO`, Posto Marinheiro); não inventar tela.
- **D-11:** Frutmix não ganha screenshot inventado (CASE-06). Tratamento: tipografia + composição / ausência explícita de mock.
- **D-12:** Site do negócio continua sem card de produto e sem mock de portfólio inventado (D-03 fase 1).

### Base: responsivo, OG, a11y
- **D-13:** Layout celular e desktop sem scroll horizontal do documento (BASE-02).
- **D-14:** Open Graph: título Winner Tech, description alinhada ao metadata atual, imagem OG dedicada (BASE-03).
- **D-15:** Controles alcançáveis por teclado com foco visível; imagens com alternativa de texto (BASE-04).

### Claude's Discretion
- Tokens exatos de cor (hex/CSS variables) e tipografia expressiva ficam com UI-SPEC / planner, desde que D-02 seja honrado.
- Composição do trilho (snap, padding, tipografia dos nomes) e crop das telas Zelo/Laço ficam com o plano, desde que a prova seja real.
- Texto desafio→solução: planner redige a partir de fatos públicos dos cases; se faltar fato, bloco fica curto e honesto — nunca inventa métrica.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Projeto
- `.planning/PROJECT.md` — marca W, ofício visual, anti-padrões de IA, cases
- `.planning/REQUIREMENTS.md` — BRND-03, MOTN-03, CASE-01..06, BASE-02..04
- `.planning/ROADMAP.md` — Phase 2 goal, success criteria, craft notes
- `.planning/phases/01-product-truth-hire-path/01-CONTEXT.md` — hero/copy/ordem/WhatsApp travados; fase 2 não reabre

### Pesquisa
- `.planning/research/SUMMARY.md` — stack e anti-padrões de landing genérica
- `.planning/research/PITFALLS.md` — motion/a11y/OG pitfalls

### Código desta fase (base)
- `components/site-header.tsx`, `components/hero.tsx`, `components/product-block.tsx`, `app/layout.tsx`, `lib/content.ts` — vestir, não reescrever o contrato de texto

### Fora deste git (prova)
- `/Users/user/DevWeb/ZELO` — UI real Zelo / voz
- `/Users/user/DevWeb/posto marinheiro` — UI real Laço / case Posto Marinheiro
- https://alfapapeis.ind.br/ — case Alfa Papéis

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `HireCta` + `WA_HIRE_HREF` — manter CTAs; fase 2 não muda destino
- `PRODUCTS` em `lib/content.ts` — fonte única de nome/função/nicho
- `SiteHeader` / `Hero` / `ProductBlock` / `ClosingHire` — estender visualmente

### Established Patterns
- RSC brochure, sem DB/auth
- Copy e WhatsApp como constantes compile-time
- Tailwind 4 + Next 16 App Router

### Integration Points
- Phase 2 adiciona assets em `public/`, componentes de trilho/case/media, CSS variables de marca, metadata OG
- Phase 3 vai empilhar motion/WebGL/CTA flutuante em cima desta composição

</code_context>

<specifics>
## Specific Ideas

- Trilho: quatro sistemas como trilha horizontal, não grade de cards iguais.
- Cases: dois blocos desafio → solução (Alfa Papéis, Posto Marinheiro).
- Zelo e Laço: screenshot/crop real; Frutmix: sem mock.
- Header: W branco sem azul obrigatório; página com cor própria.
- OG: título Winner Tech + imagem compartilhada.

</specifics>

<deferred>
## Deferred Ideas

- Scroll preso / capítulos / WebGL — Phase 3 (MOTN-01)
- prefers-reduced-motion path completo de coreografia — Phase 3 (MOTN-02)
- WhatsApp flutuante + prefill por sistema + analytics de origem — Phase 3 (CTA-02, CTA-03, BASE-05)
- Depoimento/métrica só quando Eduardo entregar dado (CASE-07)

</deferred>

---

*Phase: 2-Visual proof + layout quality*
*Context gathered: 2026-09-23 (--auto)*
