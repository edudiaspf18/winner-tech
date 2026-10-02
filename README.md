# Winner Tech

Site institucional da Winner Tech. Apresenta os sistemas próprios da empresa (Zelo, Alfa, Lume e Laço), a oferta de sites e landing pages sob medida, e leva o visitante a iniciar uma conversa pelo WhatsApp.

O site é uma vitrine. Os produtos continuam nos próprios repositórios e ambientes; nada deles é reimplementado aqui.

## O que o site mostra

- **Hero** com a oferta principal: sistema e site do negócio do cliente.
- **Sistemas**, cada um com função e nicho:
  - **Zelo**: operação da loja (placa, vaga, PIX, WhatsApp). Estética, lava-jato e oficina.
  - **Alfa**: cadastro, produção, nota fiscal e relatórios. Indústria.
  - **Lume**: agenda sem horário duplicado. Salões de beleza.
  - **Laço**: fidelidade white-label com app do cliente, app da equipe e painel. Postos e varejo.
- **Sites e landings**: oferta de landing de produto e site institucional.
- **Cases**: Alfa Papéis e Posto Marinheiro.
- **Prova aprovada**: depoimentos e métricas só aparecem quando marcados com `approved: true`. Lista vazia significa seção omitida.
- **Discovery por nicho**: `/para/loja-automotiva`, `/para/salao`, `/para/industria`, `/para/fidelidade`.
- **Sobre**: `/sobre`.
- **CTA de contratação**: abre o WhatsApp com mensagem pré-preenchida por produto e registra a origem do clique.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) e React 19
- TypeScript
- Tailwind CSS 4
- GSAP + ScrollTrigger e Lenis (scroll e motion)
- Three.js, React Three Fiber e drei (cena WebGL do hero)
- `next/font` com Syne e DM Sans

Sem CMS, banco de dados ou autenticação. O conteúdo fica em código.

## Rodando localmente

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # serve o build
npm run lint    # ESLint
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local`.

| Variável | Descrição |
|----------|-----------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ID de medição do GA4 (`G-XXXXXXXXXX`). Vazio desativa o carregamento do gtag. |

## Estrutura

```
app/
  page.tsx                 home
  sobre/page.tsx           página Sobre
  para/[slug]/page.tsx     discovery por nicho (SSG)
  opengraph-image.tsx      imagem OG
components/                seções, header, footer, CTA, cena do hero
lib/
  content.ts               produtos, nichos, cases, textos, prova aprovada
  whatsapp.ts              link do WhatsApp e evento de analytics
public/brand/              marca gráfica
.planning/                 planejamento do projeto (GSD)
```

## Editando conteúdo

- Produtos, nichos, cases e textos: `lib/content.ts`.
- Prova social: adicione itens em `APPROVED_PROOF` com `approved: true`, somente com texto aprovado pelo responsável.
- Número e mensagem do WhatsApp: `lib/content.ts` e `lib/whatsapp.ts`.

## Analytics

O clique em "Quero contratar" dispara o evento `hire_whatsapp_click` com o parâmetro `origin` (seção ou nicho de onde veio). O evento vai para `window.dataLayer` e, se o GA4 estiver configurado, para o `gtag`.

## Acessibilidade e motion

Animações respeitam `prefers-reduced-motion`. Apenas `transform` e `opacity` são animados.

## Deploy

Pensado para Vercel ou qualquer host Node com `next start`. Não usar `output: 'export'`, para manter a otimização de imagens do `next/image`.

## Contato

WhatsApp: +55 62 99828-6169
