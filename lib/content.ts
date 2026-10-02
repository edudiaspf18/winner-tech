export const BRAND_NAME = "Winner Tech";

export const HERO = {
  offer: "Fazemos o sistema e o site do seu negócio.",
  support:
    "Sistemas para quem opera. Landing pages e sites institucionais que apresentam o negócio com clareza.",
} as const;

export const CTA_LABEL = "Quero contratar";

export const WA_PHONE_DIGITS = "5562998286169";
export const WA_PHONE_DISPLAY = "(62) 99828-6169";

/** Company registration shown in the footer. */
export const COMPANY = {
  cnpj: "34.004.061/0001-49",
  city: "Anápolis - GO",
} as const;

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
      body: "Uma página focada: oferta, prova e CTA. Como as landings da Charles Veículos e da Aliança Móveis.",
    },
    {
      title: "Site institucional",
      body: "Empresa, serviços e conversão — mesma clareza do sistema, pronta para o WhatsApp.",
    },
    {
      title: "Mesma mão da operação",
      body: "Quem faz o sistema também faz o site. Sem agência no meio.",
    },
  ],
  gallery: [
    {
      src: "/landings/charles.jpg",
      alt: "Landing da Charles Veículos: seminovos em Anápolis-GO, com botão de WhatsApp.",
      label: "Landing · Charles Veículos",
      caption: "Seminovos em Anápolis — estoque e WhatsApp na primeira dobra.",
    },
    {
      src: "/landings/alianca.jpg",
      alt: "Landing da Aliança Móveis: cadeiras para escritório em Anápolis-GO, com pedido de orçamento.",
      label: "Landing · Aliança Móveis",
      caption: "Catálogo de cadeiras com pedido de orçamento direto no WhatsApp.",
    },
  ],
} as const;

export type Product = {
  name: string;
  /** Names used for niche matching / WhatsApp context */
  keys?: string[];
  functionLine: string;
  nicheLine: string;
  note?: string;
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
      "Cadastro, produção, nota fiscal e relatórios no mesmo sistema industrial.",
    nicheLine: "Para indústria.",
  },
  {
    name: "Lume",
    functionLine:
      "Agenda do salão sem horário duplicado: cliente, profissional e WhatsApp no mesmo fluxo.",
    nicheLine: "Para salões de beleza.",
  },
  {
    name: "Laço",
    functionLine:
      "Fidelidade white-label: app do cliente, app da equipe, painel e marca do negócio.",
    nicheLine: "Para postos e varejo.",
  },
];

export function productMatchesKey(product: Product, key: string) {
  const keys = product.keys ?? [product.name];
  return keys.includes(key) || product.name === key;
}

export function waContextName(product: Product) {
  return product.keys?.[0] ?? product.name;
}

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
    product: "Zelo",
    name: "Brasil Estética",
    challenge:
      "Estética automotiva em Anápolis (GO) precisa operar o dia da loja: placa, vaga, PIX e WhatsApp.",
    solution:
      "O Zelo concentra essa operação no computador e no celular. Case: Brasil Estética.",
  },
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
    product: "Alfa",
    name: "Frutmix",
    challenge:
      "Indústria precisa de cadastro, produção, nota fiscal e relatórios no mesmo fluxo.",
    solution: "Cliente do Alfa: o sistema industrial concentra essas operações.",
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
    "A Winner Tech faz o sistema que roda o dia a dia do negócio — e o site que apresenta ele com clareza.",
  body: [
    "Zelo, Lume, Alfa e Laço seguem nos próprios ambientes. Este site é a porta de entrada: você vê o que fazemos e chama no WhatsApp para contratar.",
    "Sem painel self-service. Conversa direta com quem entrega o sistema e o site.",
  ],
} as const;

/** Public social profiles — footer. */
export const SOCIAL = {
  whatsapp: {
    label: "WhatsApp",
    href: `https://wa.me/${WA_PHONE_DIGITS}`,
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/winnertecnologia/",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/winner-tecnologia-da-informa%C3%A7%C3%A3o",
  },
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
    slug: "salao",
    title: "Para salão",
    lead: "Agenda sem horário duplicado: cliente, profissional e WhatsApp no fluxo.",
    productNames: ["Lume"],
  },
  {
    slug: "industria",
    title: "Para indústria",
    lead: "Cadastro, produção, nota fiscal e relatórios no chão industrial.",
    productNames: ["Alfa"],
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
