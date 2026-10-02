# Winner Tech

## What This Is

Site institucional da Winner Tech para apresentar os sistemas próprios e ser contratada. Além dos quatro sistemas, a Winner Tech faz o site do negócio do cliente. Essa oferta é a linha mais forte do hero. O site do cliente não é um quinto produto. O visitante vê Zelo, Alfa, Lume e Laço, cada um com a função e o nicho em que opera, e sai com um caminho claro para falar com a empresa.

A marca pública é **Winner Tech**. "Winner Tecnologia da Informação" é o nome antigo e não entra como título do site.

## Core Value

Um visitante entende, em uma passagem, o que a Winner Tech faz, para quem cada sistema serve, e como pedir uma conversa para contratar.

## Business Context

- **Customer**: dono ou gestor de operação (loja automotiva, indústria, posto, varejo) que precisa de sistema e pode contratar a Winner Tech
- **Revenue model**: contrato de sistema / desenvolvimento sob medida, não venda self-service neste site
- **Success metric**: conversa iniciada (WhatsApp) a partir do site
- **Strategy notes**: vitrine de portfólio. Os produtos continuam nos repositórios e deploys próprios; este site não os substitui.

## Current Milestone: v2.0 Discovery & Trust

**Goal:** Visitante encontra caminho por nicho, conhece a empresa no Sobre, só vê prova citada quando aprovada, e cliques de contratar viram eventos reais de analytics.

**Target features:**
- Discovery por nicho (loja automotiva, indústria, fidelidade) + página Sobre
- Depoimentos/métricas só com conteúdo aprovado (CASE-07); vazio = seção omitida
- Analytics real (GA4 via env) no lugar do stub dataLayer

## Requirements

### Validated

- ✓ Visitante reconhece a marca Winner Tech no header e no título do documento — v1.0
- ✓ Visitante vê os quatro sistemas: Zelo, Alfa, Lume e Laço — v1.0
- ✓ Cada sistema declara a função e o nicho em que opera — v1.0
- ✓ Zelo como operação de loja (placa, vaga, PIX, WhatsApp; estética, lava-jato, oficina) — v1.0
- ✓ Alfa como sistema industrial (cadastro, produção, nota fiscal, relatórios) — v1.0
- ✓ Frutmix aparece como cliente do Alfa (case), não como sistema, sem inventar módulos — v1.0
- ✓ Laço como fidelidade white-label (app cliente, app equipe, painel, marca) — v1.0
- ✓ Chamada para contratar abre WhatsApp +55 62 99828-6169 — v1.0
- ✓ Texto do site em português — v1.0
- ✓ Oferta de site no hero; não é quinto produto — v1.0
- ✓ Marca gráfica W branco sem fundo azul obrigatório — v1.0
- ✓ Cases Alfa Papéis + Posto Marinheiro com prova visual honesta — v1.0
- ✓ Scroll/motion craft + reduced-motion path — v1.0
- ✓ Paleta operacional específica (não visual genérico de IA) — v1.0
- ✓ Layout mobile/desktop + OG + a11y básicos — v1.0
- ✓ CTA flutuante com prefill por sistema + origem do clique — v1.0
- ✓ Discovery por nicho (`/para/…`) + Sobre — v2.0
- ✓ Depoimento/métrica só com dado aprovado (seção omitida se vazio) — v2.0
- ✓ GA4 condicional + evento `hire_whatsapp_click` — v2.0

### Active

- [ ] CONT-* growth (blog, product URLs, vagas, i18n) — futuro

### Out of Scope

- Reimplementar Zelo, Alfa, Lume ou Laço dentro deste repositório — o site só apresenta
- Fundo azul chapado como obrigação de marca
- Usar "Winner Tecnologia da Informação" como nome principal
- Inventar telas, preços ou módulos do Alfa além do escopo industrial afirmado
- Login, painel, checkout ou área do cliente neste site
- Copiar identidade visual da Apple, Samsung, Disney ou Netflix
- Estúdio 3D completo estilo Lusion — v1 ficou em cena sutil + GSAP/Lenis
- Inventar depoimento, métrica ou quote sem aprovação do Eduardo
- Blog, vagas, i18n (CONT-*) — fora deste milestone

## Context

Shipped **v1.0 MVP** (2026-09-23): Next.js 16 + Tailwind 4 + GSAP/Lenis + WebGL sutil.

Active **v2.0 Discovery & Trust**: nicho paths, Sobre, prova aprovada, analytics GA4.

- **Zelo** / **Laço**: landings locais para voz e prova
- **Alfa**: case Alfa Papéis (https://alfapapeis.ind.br/)
- **Frutmix** e **Alfa Papéis**: clientes do Alfa (cases); sem UI inventada
- WhatsApp: +55 62 99828-6169 com prefill opcional por produto

## Constraints

- **Marca**: Winner Tech público
- **Produtos**: quatro sistemas com função + nicho
- **Fonte da verdade**: Zelo/Laço locais; Eduardo para Alfa e seus clientes
- **Idioma**: português
- **Stack**: Next.js App Router + Tailwind + GSAP + Lenis + WebGL sutil
- **Contato**: WhatsApp único

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Nome público Winner Tech | Nome antigo fora do título | ✓ Good — v1.0 |
| Ordem Zelo→Alfa→Lume→Laço | Pedido explícito | ✓ Good — v1.0 |
| Site para contratar | Objetivo hire | ✓ Good — v1.0 |
| W branco sem azul obrigatório | Logo boa; azul do arquivo ≠ fundo | ✓ Good — v1.0 |
| Paleta sage (não neon IA) | Legibilidade | ✓ Good — v1.0 |
| Ofício das refs sem clonar | Apple/Disney/Linear/Lusion técnica | ✓ Good — v1.0 |
| WebGL sutil + GSAP/Lenis | Imersão sem estúdio 3D | ✓ Good — v1.0 |
| CTA WhatsApp + prefill | Conversão | ✓ Good — v1.0 |
| Alfa e clientes sem screenshot | Código ausente | ✓ Good — v1.0 |
| Oferta de site no hero | Não é 5º produto | ✓ Good — v1.0 |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-09-23 after starting v2.0 Discovery & Trust*
