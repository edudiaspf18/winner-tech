# Winner Tech

## What This Is

Site institucional da Winner Tech para apresentar os sistemas próprios e ser contratada. Além dos quatro sistemas, a Winner Tech faz o site do negócio do cliente. Essa oferta é a linha mais forte do hero. O site do cliente não é um quinto produto. O visitante vê Zelo, Alfa, Frutmix e Laço, cada um com a função e o nicho em que opera, e sai com um caminho claro para falar com a empresa.

A marca pública é **Winner Tech**. "Winner Tecnologia da Informação" é o nome antigo e não entra como título do site.

## Core Value

Um visitante entende, em uma passagem, o que a Winner Tech faz, para quem cada sistema serve, e como pedir uma conversa para contratar.

## Business Context

- **Customer**: dono ou gestor de operação (loja automotiva, indústria, posto, varejo) que precisa de sistema e pode contratar a Winner Tech
- **Revenue model**: contrato de sistema / desenvolvimento sob medida, não venda self-service neste site
- **Success metric**: conversa iniciada (WhatsApp) a partir do site
- **Strategy notes**: vitrine de portfólio. Os produtos continuam nos repositórios e deploys próprios; este site não os substitui.

## Requirements

### Validated

- ✓ Visitante reconhece a marca Winner Tech no header e no título do documento — v1.0
- ✓ Visitante vê os quatro sistemas: Zelo, Alfa, Frutmix e Laço — v1.0
- ✓ Cada sistema declara a função e o nicho em que opera — v1.0
- ✓ Zelo como operação de loja (placa, vaga, PIX, WhatsApp; estética, lava-jato, oficina) — v1.0
- ✓ Alfa como sistema industrial (cadastro, produção, nota fiscal, relatórios) — v1.0
- ✓ Frutmix no mesmo escopo industrial do Alfa, sem inventar módulos — v1.0
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

### Active

- [ ] Páginas de discovery / Sobre (v2)
- [ ] Depoimentos ou métricas só com dado aprovado pelo Eduardo (CASE-07)
- [ ] Analytics real no lugar do stub dataLayer

### Out of Scope

- Reimplementar Zelo, Alfa, Frutmix ou Laço dentro deste repositório — o site só apresenta
- Fundo azul chapado como obrigação de marca
- Usar "Winner Tecnologia da Informação" como nome principal
- Inventar telas, preços ou módulos da Frutmix além do escopo industrial afirmado
- Login, painel, checkout ou área do cliente neste site
- Copiar identidade visual da Apple, Samsung, Disney ou Netflix
- Estúdio 3D completo estilo Lusion — v1 ficou em cena sutil + GSAP/Lenis

## Context

Shipped **v1.0 MVP** (2026-09-23): Next.js 16 + Tailwind 4 + GSAP/Lenis + WebGL sutil.

- **Zelo** / **Laço**: landings locais para voz e prova
- **Alfa**: case Alfa Papéis (https://alfapapeis.ind.br/)
- **Frutmix**: teto industrial; sem UI inventada
- WhatsApp: +55 62 99828-6169 com prefill opcional por produto

## Constraints

- **Marca**: Winner Tech público
- **Produtos**: quatro sistemas com função + nicho
- **Fonte da verdade**: Zelo/Laço locais; Eduardo para Alfa/Frutmix
- **Idioma**: português
- **Stack**: Next.js App Router + Tailwind + GSAP + Lenis + WebGL sutil
- **Contato**: WhatsApp único

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Nome público Winner Tech | Nome antigo fora do título | ✓ Good — v1.0 |
| Ordem Zelo→Alfa→Frutmix→Laço | Pedido explícito | ✓ Good — v1.0 |
| Site para contratar | Objetivo hire | ✓ Good — v1.0 |
| W branco sem azul obrigatório | Logo boa; azul do arquivo ≠ fundo | ✓ Good — v1.0 |
| Paleta sage (não neon IA) | Legibilidade | ✓ Good — v1.0 |
| Ofício das refs sem clonar | Apple/Disney/Linear/Lusion técnica | ✓ Good — v1.0 |
| WebGL sutil + GSAP/Lenis | Imersão sem estúdio 3D | ✓ Good — v1.0 |
| CTA WhatsApp + prefill | Conversão | ✓ Good — v1.0 |
| Frutmix sem screenshot | Código ausente | ✓ Good — v1.0 |
| Oferta de site no hero | Não é 5º produto | ✓ Good — v1.0 |

## Evolution

This document evolves at phase transitions and milestone boundaries.

---
*Last updated: 2026-09-23 after v1.0 milestone*
