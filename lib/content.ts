export const BRAND_NAME = "Winner Tech";

export const HERO = {
  offer: "Fazemos o sistema e o site do seu negócio.",
  support:
    "Sistemas para quem opera. Landing pages e sites institucionais que apresentam o negócio com clareza.",
} as const;

export const CTA_LABEL = "Quero contratar";

export const WA_PHONE_DIGITS = "5562998286169";

export const WA_MESSAGE =
  "Olá, vi os sistemas de vocês e quero conversar.";

export function waMessageForProduct(productName?: string | null) {
  if (!productName) return WA_MESSAGE;
  return `Olá, vi o ${productName} de vocês e quero conversar.`;
}

export const CLOSING_LINE =
  "Viu o sistema ou precisa do site? Chama a gente.";

export const SITES_OFFER = {
  eyebrow: "Sites & landings",
  title: "Landing pages e sites institucionais.",
  lead:
    "Além dos sistemas, a Winner Tech faz a página que vende o negócio: landing de produto, site institucional e vitrine com a mesma linguagem do sistema — clara, rápida, pronta para o WhatsApp.",
  points: [
    {
      title: "Landing de produto",
      body: "Uma página focada: oferta, prova e CTA. Como as landings do Zelo e do Lume.",
    },
    {
      title: "Site institucional",
      body: "Empresa, sistemas e caminho para contratar — este site é o exemplo.",
    },
    {
      title: "Mesma mão da operação",
      body: "Quem faz o sistema também faz o site. Sem agência no meio.",
    },
  ],
} as const;

export type Product = {
  name: string;
  functionLine: string;
  nicheLine: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Zelo",
    functionLine:
      "Opera o dia da loja no computador e no celular: placa, vaga, PIX e WhatsApp.",
    nicheLine: "Para estética, lava-jato e oficina.",
  },
  {
    name: "Alfa",
    functionLine:
      "Cadastro, produção, nota fiscal e relatórios no mesmo sistema.",
    nicheLine: "Para indústria.",
  },
  {
    name: "Frutmix",
    functionLine:
      "Cadastro, produção, nota fiscal e relatórios no chão industrial.",
    nicheLine: "Para indústria.",
  },
  {
    name: "Laço",
    functionLine:
      "Fidelidade white-label: app do cliente, app da equipe, painel e marca do negócio.",
    nicheLine: "Para postos e varejo.",
  },
];

export const LACO_VERTICALS = [
  "postos",
  "conveniência",
  "autocenters",
  "farmácias",
  "supermercado",
  "food",
  "pet/ótica",
  "academias",
] as const;

export type CaseStudy = {
  product: string;
  name: string;
  href?: string;
  challenge: string;
  solution: string;
};

export const CASES: CaseStudy[] = [
  {
    product: "Alfa",
    name: "Alfa Papéis",
    href: "https://alfapapeis.ind.br/",
    challenge:
      "Indústria de papel precisa de cadastro, produção, nota fiscal e relatórios no mesmo fluxo.",
    solution:
      "O Alfa concentra essas operações num sistema industrial. Case público: Alfa Papéis.",
  },
  {
    product: "Laço",
    name: "Posto Marinheiro",
    challenge:
      "Posto precisa de fidelidade com a marca do negócio, app do cliente e app da equipe.",
    solution:
      "O Laço entrega fidelidade white-label. Case: Posto Marinheiro.",
  },
];

/** Short company copy for /sobre — no invented history. */
export const ABOUT = {
  eyebrow: "Sobre",
  title: "Sistemas e sites para quem opera.",
  lead:
    "A Winner Tech desenvolve sistemas para negócios reais — loja automotiva, salão, indústria, posto e varejo — e também faz landing pages e sites institucionais do cliente.",
  body: [
    "Marca pública: Winner Tech. Os produtos Zelo, Lume, Alfa, Frutmix e Laço continuam nos próprios ambientes; este site apresenta e abre a conversa para contratar.",
    "Sem painel self-service aqui. O caminho é WhatsApp: conversa direta com quem entrega o sistema e o site.",
  ],
} as const;

export type NichePath = {
  slug: string;
  title: string;
  lead: string;
  productNames: string[];
};

/** Niche discovery entry points (DISC-01). */
export const NICHES: NichePath[] = [
  {
    slug: "loja-automotiva",
    title: "Para loja automotiva",
    lead: "Estética, lava-jato e oficina: operação do dia no computador e no celular.",
    productNames: ["Zelo"],
  },
  {
    slug: "industria",
    title: "Para indústria",
    lead: "Cadastro, produção, nota fiscal e relatórios no chão industrial.",
    productNames: ["Alfa", "Frutmix"],
  },
  {
    slug: "fidelidade",
    title: "Para fidelidade",
    lead: "White-label com app do cliente, app da equipe, painel e marca do negócio.",
    productNames: ["Laço"],
  },
];

export function nicheBySlug(slug: string) {
  return NICHES.find((n) => n.slug === slug) ?? null;
}

/**
 * CASE-07 — only entries with approved: true render.
 * Leave empty until Eduardo delivers quote/metric text.
 */
export type ApprovedProof =
  | {
      kind: "quote";
      quote: string;
      attribution: string;
      approved: true;
    }
  | {
      kind: "metric";
      value: string;
      label: string;
      approved: true;
    };

export const APPROVED_PROOF: ApprovedProof[] = [];
