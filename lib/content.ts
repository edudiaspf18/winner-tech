export const BRAND_NAME = "Winner Tech";

export const HERO = {
  offer: "Fazemos o sistema e o site do seu negócio.",
  support: "Sistemas para quem opera.",
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
