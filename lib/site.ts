import { BRAND_NAME } from "./content";

/** Public site origin. Set NEXT_PUBLIC_SITE_URL in production if the domain differs. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://winnertech.com.br"
).replace(/\/$/, "");

export const SITE_TITLE = `${BRAND_NAME} — sistemas e sites para quem opera`;

export const SITE_DESCRIPTION =
  "Sistemas e sites para quem opera. Conheça Zelo, Alfa, Lume e Laço e contrate a Winner Tech.";
