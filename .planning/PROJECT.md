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

- ✓ Visitante reconhece a marca Winner Tech no header e no título do documento — Phase 1
- ✓ Visitante vê os quatro sistemas: Zelo, Alfa, Frutmix e Laço — Phase 1
- ✓ Cada sistema declara a função e o nicho em que opera — Phase 1
- ✓ Zelo como operação de loja (placa, vaga, PIX, WhatsApp, computador e celular; estética, lava-jato, oficina) — Phase 1
- ✓ Alfa como sistema industrial (cadastro, produção, nota fiscal, relatórios) — Phase 1
- ✓ Frutmix no mesmo escopo industrial do Alfa, sem inventar módulos — Phase 1
- ✓ Laço como fidelidade white-label (app cliente, app equipe, painel, marca) — Phase 1
- ✓ Chamada para contratar abre WhatsApp +55 62 99828-6169 com mensagem travada — Phase 1
- ✓ Texto do site em português — Phase 1
- ✓ Oferta de site no hero, mais forte que a lista; não é quinto produto — Phase 1

### Active

- [ ] Visitante reconhece a marca gráfica (W branco) sem depender do fundo azul do arquivo da logo
- [ ] Alfa Papéis e Posto Marinheiro como cases públicos com prova visual (ainda só copy na Phase 1)
- [ ] O site se move: scroll, entrada e continuidade espacial no nível de sites de produto (referência de ofício: Apple, Samsung, Disney, Netflix) sem copiar layout nem marca deles
- [ ] Cor e composição chamam atenção. Visual robusto, específico, não o visual genérico de landing gerada por IA
- [ ] Layout funciona bem em celular e em desktop (baseline Phase 1; qualidade Phase 2)

### Out of Scope

- Reimplementar Zelo, Alfa, Frutmix ou Laço dentro deste repositório — o site só apresenta
- Fundo azul chapado como obrigação de marca — a logo é boa; o campo azul do arquivo não precisa ser o fundo do site
- Usar "Winner Tecnologia da Informação" como nome principal
- Inventar telas, preços ou módulos da Frutmix além do escopo industrial que o Eduardo afirmou (código não está nesta máquina)
- Login, painel, checkout ou área do cliente neste site
- Copiar identidade visual da Apple, Samsung, Disney ou Netflix

## Context

Repo `winner-tech` nasceu vazio (só git). Greenfield.

Produtos já existentes, lidos nesta máquina em 2026-09-23:

- **Zelo** (`/Users/user/DevWeb/ZELO`): operação do dia da loja no computador e no celular. Nichos na landing atual: estética automotiva, lava-jato, oficina mecânica. Funções visíveis: tela Hoje (livre / esperando PIX / em serviço), entrada por placa, agenda, WhatsApp que responde se a equipe não pegar, clientes, caixa, serviços, vagas. Empresa citada na landing: WinnerTech.
- **Alfa**: Eduardo apontou https://alfapapeis.ind.br/ como o Alfa. Sistema completo para indústria: relatórios, nota fiscal, cadastro, emitir nota, produção. Código não está em `DevWeb` nesta sessão (há histórico em `/Volumes/htdocs/alfa`, volume não montado).
- **Frutmix**: não está nesta máquina. Eduardo pediu para citar. Mesmo tipo de sistema industrial do Alfa. Há histórico em `/Volumes/htdocs/frutmix`, volume não montado. Não inventar módulos além do que ele descreveu.
- **Laço** (`/Users/user/DevWeb/posto marinheiro`, fora deste git): plataforma de fidelidade white-label. Posto Marinheiro é o case. Landing própria já diz "by WinnerTech" e lista verticais (posto, conveniência, oficina, farmácia, mercado, food, pet/ótica, academia). Apps de cliente e de frentista, painel.

Logo entregue nesta conversa: W geométrico branco e wordmark WINNERTECH sobre azul. Usar o desenho do W. A cor de fundo do site não precisa ser esse azul; a paleta do site deve chamar mais atenção e ter movimento.

WhatsApp de contato já usado na landing do Laço: `https://wa.me/5562998286169`. Eduardo confirmou esse CTA ao aprovar a síntese do projeto.

Referências de ofício dadas em 2026-09-23. O site entrega a técnica. Não clona a marca.

- [MacBook Pro](https://www.apple.com/macbook-pro/) e [iPhone 18 Pro](https://www.apple.com/iphone-18-pro/): nav local fixa, headline curto, produto como objeto, capítulo preso no scroll (um recurso, uma imagem grande), faixa "highlights", bloco denso de spec no fim.
- [Disney+](https://www.disneyplus.com/pt-br/home) e [Netflix](https://www.netflix.com/browse): campo escuro cinematográfico, billboard, trilho horizontal de peças. No nosso site o trilho são os quatro sistemas, não pôster de filme.
- [Linear](https://linear.app/) e [Raycast](https://www.raycast.com/): a interface real do produto dentro da página, tipo apertado, movimento quieto, grid de capacidade. Zelo e Laço entram com tela real. Frutmix não ganha tela inventada.
- [Lusion](https://lusion.co/) e [Active Theory](https://activetheory.net/): scroll para explorar, capítulo em viewport cheia, uma cena de canvas/WebGL como atmosfera. v1 não vira estúdio 3D inteiro. Uma cena assinatura mais capítulos GSAP.

Stack de pesquisa (Next.js, GSAP ScrollTrigger, Lenis) cobre Apple, Linear e Raycast. WebGL entra só na cena assinatura, não como motor de todo o scroll.

Público do site: quem pode contratar a Winner Tech, não o usuário final de cada sistema (o cliente do lava-jato, o frentista, o operador de chão de fábrica).

## Constraints

- **Marca**: nome público Winner Tech — nome antigo fica só como contexto histórico, se aparecer
- **Produtos**: quatro sistemas nomeados; função e nicho obrigatórios em cada um
- **Fonte da verdade**: código e landings locais de Zelo e Laço; fala do Eduardo para Alfa e Frutmix; não inventar feature que não esteja numa dessas fontes
- **Código ausente**: Laço não entra neste git; Frutmix não está no disco; Alfa ao vivo é o site da Alfa Papéis
- **Visual**: movimento e cor forte; proibido o visual padrão de template de IA (gradiente roxo, cards iguais, hero centralizado sem ideia, brutalismo cru, monocromático com acento azul de dashboard)
- **Ofício visual**: técnicas das referências abaixo. Identidade, layout, logo, copy e paleta dessas marcas ficam de fora.
- **Idioma**: português
- **Stack**: Next.js App Router + Tailwind (Phase 1). GSAP/Lenis/WebGL entram nas fases 2–3.
- **Contato**: um canal, WhatsApp +55 62 99828-6169

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Nome público Winner Tech | Eduardo: "Winner Tecnologia da Informação" é o nome antigo | Phase 1: title/header Winner Tech |
| Quatro produtos na vitrine: Zelo, Alfa, Frutmix, Laço | Pedido explícito; cada um com nicho | Phase 1: quatro blocos na ordem travada |
| Site institucional para ser contratada, não os sistemas em si | Objetivo "para sermos contratados" | Phase 1: brochure + hire path |
| Logo W branca; fundo azul do arquivo não é o fundo do site | Eduardo: logo é boa; azul de fundo não precisa | Phase 2 — marca gráfica ainda pendente |
| Direção visual com movimento e cor que chama atenção, fora do visual genérico de IA | Pedido explícito | Phase 2–3 |
| Ofício das referências, sem clonar marca | Eduardo passou Apple (MacBook Pro, iPhone), Disney+, Netflix, Linear, Raycast, Lusion, Active Theory. Técnica sim. Identidade não. Brutalismo/azul de dashboard da busca automática foi descartado. | Phase 2–3 |
| Uma cena WebGL, scroll GSAP no resto | Lusion e Active Theory pedem imersão. Entregar estúdio 3D inteiro estoura o v1. Cena assinatura + capítulos presos. | Phase 3 |
| CTA WhatsApp +55 62 99828-6169 | Número já publicado na landing do Laço; confirmado na síntese | Phase 1: `WA_HIRE_HREF` constante |
| Frutmix citada sem codebase local | Eduardo: não está aqui, pode citar; mesmo escopo industrial do Alfa | Phase 1: teto Alfa honrado |
| Texto em português | Brief e produtos são em português, público no Brasil | Phase 1: UI PT-only |
| Oferta de site no hero, mais forte que a lista de sistemas | Eduardo: fazemos o sistema e o site do negócio, e isso chama mais atenção. Não é quinto produto. | Phase 1: hero offer locked |

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
*Last updated: 2026-09-23 after Phase 1*
