export const BRAND_NAME = "Winner Tech";

export const HERO = {
  offer: "Fazemos o sistema e o site do seu negócio.",
  support: "Sistemas para quem opera.",
} as const;

export const CTA_LABEL = "Quero contratar";

export const WA_PHONE_DIGITS = "5562998286169";

export const WA_MESSAGE =
  "Olá, vi os sistemas de vocês e quero conversar.";

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
