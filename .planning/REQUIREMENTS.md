# Requirements: Winner Tech

**Defined:** 2026-09-23
**Core Value:** Um visitante entende, em uma passagem, o que a Winner Tech faz, para quem cada sistema serve, e como pedir uma conversa para contratar.

## v1 Requirements

### Marca

- [ ] **BRND-01**: Visitante vê o nome Winner Tech como marca pública da página
- [ ] **BRND-02**: Visitante não vê "Winner Tecnologia da Informação" como título
- [ ] **BRND-03**: Visitante vê a marca gráfica W branca sem fundo azul obrigatório na página
- [ ] **BRND-04**: Visitante lê no hero que a Winner Tech faz sistemas e pode ser contratada

### Portfólio

- [ ] **PROD-01**: Visitante vê os quatro sistemas: Zelo, Alfa, Frutmix e Laço
- [ ] **PROD-02**: Visitante lê a função do Zelo e os nichos estética automotiva, lava-jato e oficina, incluindo placa, vaga, PIX, WhatsApp, computador e celular
- [ ] **PROD-03**: Visitante lê o Alfa como sistema industrial completo: cadastro, produção, nota fiscal e relatórios
- [ ] **PROD-04**: Visitante lê a Frutmix no mesmo escopo industrial do Alfa, sem módulo, tela ou case inventado
- [ ] **PROD-05**: Visitante lê o Laço como fidelidade white-label: app do cliente, app da equipe, painel e marca do negócio

### Prova

- [ ] **CASE-01**: Visitante abre o case Alfa Papéis em https://alfapapeis.ind.br/
- [ ] **CASE-02**: Visitante vê Posto Marinheiro como case do Laço
- [ ] **CASE-03**: Visitante lê um bloco desafio → solução nos cases reais, sem número ou depoimento inventado
- [ ] **CASE-04**: Visitante vê só as verticais já ditas do Laço: postos, conveniência, autocenters, farmácias, supermercado, food, pet/ótica, academias
- [ ] **CASE-05**: Visitante vê imagem real de interface do Zelo e do Laço
- [ ] **CASE-06**: Visitante não vê screenshot inventado da Frutmix

### Contato

- [ ] **CTA-01**: Visitante abre WhatsApp +55 62 99828-6169 por um controle no fluxo da página
- [ ] **CTA-02**: Visitante abre o mesmo WhatsApp por um controle flutuante que permanece alcançável
- [ ] **CTA-03**: Mensagem do WhatsApp já vem preenchida com o sistema que o visitante estava vendo

### Movimento

- [ ] **MOTN-01**: Visitante vê movimento de entrada e continuidade no scroll entre marca e sistemas
- [ ] **MOTN-02**: Visitante com preferência de movimento reduzido lê a página inteira sem essa coreografia
- [ ] **MOTN-03**: Cor da página é específica e chamativa, fora da paleta genérica de landing gerada por modelo

### Base

- [ ] **BASE-01**: Todo texto de interface está em português
- [ ] **BASE-02**: Visitante usa a página no celular e no desktop sem scroll horizontal
- [ ] **BASE-03**: Link compartilhado mostra título, descrição e imagem Open Graph
- [ ] **BASE-04**: Visitante alcança cada controle pelo teclado, com foco visível e alternativa de texto nas imagens
- [ ] **BASE-05**: Clique no WhatsApp registra um evento que diz qual sistema originou o clique

## User Stories

- Como contratante, quero ver os quatro sistemas e o nicho de cada um, para saber se a Winner Tech serve a minha operação.
- Como contratante, quero abrir um WhatsApp já dizendo o sistema, para não explicar do zero.
- Como contratante, quero prova real (Alfa Papéis, Posto Marinheiro, telas de Zelo e Laço), para confiar antes de chamar.

## Acceptance Criteria

- Os requisitos v1 acima estão verificáveis na página publicada, em viewport de celular e de desktop.
- Frutmix não ganha módulo, tela ou cliente que não esteja no PROJECT.md.
- `prefers-reduced-motion: reduce` entrega o conteúdo sem a coreografia de scroll.

## Definition of Done

- Release quando a verificação automática e a checagem manual dos requisitos v1 passarem, incluindo o caminho de movimento reduzido e o clique do WhatsApp com o sistema na mensagem.

## v2 Requirements

### Descoberta

- **DISC-01**: Visitante entra por um caminho de nicho (loja automotiva, indústria, fidelidade) se a vitrine única não bastar
- **DISC-02**: Visitante lê um "Sobre" curto se os compradores perguntarem quem é a empresa
- **CASE-07**: Visitante lê depoimento ou métrica só quando o Eduardo entregar o dado

### Conteúdo futuro

- **CONT-01**: Visitante lê um blog só com dono editorial definido
- **CONT-02**: Visitante segue para sites públicos dos produtos só quando a URL for confirmada
- **CONT-03**: Visitante vê vagas só como meta separada da contratação comercial
- **CONT-04**: Visitante troca o idioma só se aparecer comprador fora do Brasil

## Out of Scope

| Feature | Reason |
|---------|--------|
| Login, área do cliente, painel | Público é quem contrata, não o usuário final do sistema |
| Checkout, calculadora de preço, compra self-service | Receita é contrato; preço não foi dado |
| Módulo, tela ou lista extra da Frutmix | Código ausente; teto é cadastro, produção, nota fiscal, relatórios |
| Case ou métrica inventados | Quebra confiança se o comprador checar |
| Grade de serviços de agência como navegação principal | A Winner Tech vende sistemas próprios |
| Blog no lançamento | Sem processo editorial |
| Página de carreiras ou cultura | Não serve o funil de contratação comercial |
| Formulário, chatbot, e-mail e telefone além do WhatsApp | Um canal já decidido |
| PDF de case com gate | Atrito; o caminho é WhatsApp |
| Cópia de layout ou marca Apple, Samsung, Disney, Netflix | Referência de ofício, não de identidade |
| Reimplementar Zelo, Alfa, Frutmix ou Laço neste repo | Este site só apresenta |
| Nome antigo como título | Marca pública é Winner Tech |
| Visual genérico de landing de IA | Pedido explícito de recusa |
| Demo interativo / sandbox dos produtos | Custo e público errado |
| Idioma inglês no v1 | Público é operador no Brasil |
| Fundir o app Laço ou raspar a UI da Alfa Papéis | Outros repositórios e superfície pública só como case |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| BRND-01 | — | Pending |
| BRND-02 | — | Pending |
| BRND-03 | — | Pending |
| BRND-04 | — | Pending |
| PROD-01 | — | Pending |
| PROD-02 | — | Pending |
| PROD-03 | — | Pending |
| PROD-04 | — | Pending |
| PROD-05 | — | Pending |
| CASE-01 | — | Pending |
| CASE-02 | — | Pending |
| CASE-03 | — | Pending |
| CASE-04 | — | Pending |
| CASE-05 | — | Pending |
| CASE-06 | — | Pending |
| CTA-01 | — | Pending |
| CTA-02 | — | Pending |
| CTA-03 | — | Pending |
| MOTN-01 | — | Pending |
| MOTN-02 | — | Pending |
| MOTN-03 | — | Pending |
| BASE-01 | — | Pending |
| BASE-02 | — | Pending |
| BASE-03 | — | Pending |
| BASE-04 | — | Pending |
| BASE-05 | — | Pending |

**Coverage:**
- v1 requirements: 26 total
- Mapped to phases: 0
- Unmapped: 26 ⚠️

---
*Requirements defined: 2026-09-23*
*Last updated: 2026-09-23 after scoping*
