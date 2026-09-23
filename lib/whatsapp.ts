import { WA_MESSAGE } from "./content";

/** Hire WhatsApp Click-to-Chat — digits locked; never built from request input. */
const WA_PHONE_DIGITS = "5562998286169";

export const WA_HIRE_HREF = `https://wa.me/${WA_PHONE_DIGITS}?text=${encodeURIComponent(WA_MESSAGE)}`;
