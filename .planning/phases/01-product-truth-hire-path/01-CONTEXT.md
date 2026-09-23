# Phase 1: Product truth + hire path - Context

**Gathered:** 2026-09-23
**Status:** Ready for planning

<domain>
## Phase Boundary

Fase 1 entrega a página em português em que o visitante lê a oferta da Winner Tech, vê Zelo, Alfa, Frutmix e Laço com função e nicho, e abre o WhatsApp por um controle no fluxo. Cor, telas, trilho, scroll, botão flutuante e mensagem por produto ficam nas fases 2 e 3.

</domain>

<decisions>
## Implementation Decisions

### Oferta de site
- **D-01:** A linha maior do hero é "Fazemos o sistema e o site do seu negócio." Os quatro sistemas vêm abaixo. — **Reversibility:** costly — o hero é o contrato público da página; mudar a oferta reescreve a primeira leitura e o fechamento.
- **D-02:** A linha menor, embaixo da oferta, é "Sistemas para quem opera." A frase "Não para quem só anuncia." foi retirada.
- **D-03:** O site do negócio é um serviço da Winner Tech, ao lado dos quatro sistemas. Não vira quinto card, não ganha nome de produto e não entra na ordem Zelo → Alfa → Frutmix → Laço.

### Voz do texto
- **D-04:** Voz direta e curta, no tom da landing do Zelo. Sem frase institucional longa.
- **D-05:** Cada sistema tem uma frase de função e os nichos na linha de baixo. Sem parágrafo de três frases nesta fase.
- **D-06:** Ordem de cima para baixo: Zelo, Alfa, Frutmix, Laço.

### WhatsApp no fluxo
- **D-07:** Dois controles iguais no fluxo: um no hero e um no bloco final, depois dos quatro sistemas. Não há botão depois de cada sistema nesta fase.
- **D-08:** O botão mostra "Quero contratar".
- **D-09:** A mensagem do WhatsApp, igual nos dois botões, é "Olá, vi os sistemas de vocês e quero conversar." Número +55 62 99828-6169.
- **D-10:** O bloco final diz "Viu o sistema ou precisa do site? Chama a gente." e em seguida o botão.

### Claude's Discretion
- Posição exata do botão do hero (ao lado da oferta ou logo abaixo das duas linhas) fica com o planejamento, desde que os dois controles existam e usem o mesmo destino.
- A mensagem do WhatsApp continua só sobre sistemas, como o Eduardo escolheu, mesmo com a oferta de site no hero. Não reescrever esse texto na fase 1.
- "Não para quem só anuncia." saiu porque brigava com a oferta de site.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Projeto
- `.planning/PROJECT.md` — marca, produtos, CTA, ofício visual, o que está fora
- `.planning/REQUIREMENTS.md` — BRND-01, BRND-02, BRND-04, PROD-01 a PROD-05, CTA-01, BASE-01 nesta fase
- `.planning/ROADMAP.md` — fase 1, meta e critérios; fases 2 e 3 não entram aqui

### Voz de referência (fora deste git)
- `/Users/user/DevWeb/ZELO/app/Views/publico/landing.php` — tom curto da casa. Não copiar o layout. Não tratar como código deste repo.

Não há spec externa dentro do repositório. As decisões acima fecham o texto da fase 1.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Nenhum. O repositório não tem `src/` nem componentes. Greenfield.

### Established Patterns
- Nenhum padrão de UI neste repo. A voz de referência está na landing do Zelo, fora do git.

### Integration Points
- A página da fase 1 é o documento que as fases 2 e 3 vão vestir (cor, prova, movimento, WhatsApp flutuante, prefill por produto). O texto e a ordem dos sistemas não podem depender de screenshot nem de scroll preso.

</code_context>

<specifics>
## Specific Ideas

Hero, nesta ordem visual:

1. Linha maior: Fazemos o sistema e o site do seu negócio.
2. Linha menor: Sistemas para quem opera.
3. Botão: Quero contratar.

Depois, quatro blocos curtos, nesta ordem: Zelo, Alfa, Frutmix, Laço. Uma frase de função e a linha de nichos. Sem tela.

Fechamento: "Viu o sistema ou precisa do site? Chama a gente." Botão "Quero contratar".

</specifics>

<deferred>
## Deferred Ideas

- Prefill do WhatsApp por produto — fase 3 (CTA-03).
- Botão flutuante — fase 3 (CTA-02).
- Telas reais, cases, trilho, cor — fase 2.
- Scroll preso, cena WebGL — fase 3.
- Portfólio de sites de clientes — sem case real, não inventar.

</deferred>

---

*Phase: 1-Product truth + hire path*
*Context gathered: 2026-09-23*
