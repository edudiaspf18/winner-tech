import { WA_MESSAGE, waMessageForProduct } from "./content";

/** Hire WhatsApp Click-to-Chat — digits locked; never built from request input. */
const WA_PHONE_DIGITS = "5562998286169";

export function buildWaHireHref(productName?: string | null) {
  const text = waMessageForProduct(productName);
  return `https://wa.me/${WA_PHONE_DIGITS}?text=${encodeURIComponent(text)}`;
}

export const WA_HIRE_HREF = buildWaHireHref();

export function trackHireClick(origin: string) {
  if (typeof window === "undefined") return;
  const payload = {
    event: "hire_whatsapp_click",
    origin,
  };
  const w = window as Window & {
    dataLayer?: Array<Record<string, string>>;
  };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(payload);
}
