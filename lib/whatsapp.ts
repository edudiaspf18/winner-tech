import { WA_MESSAGE, waMessageForProduct } from "./content";

/** Hire WhatsApp Click-to-Chat — digits locked; never built from request input. */
const WA_PHONE_DIGITS = "5562998286169";

export function buildWaHireHref(productName?: string | null) {
  const text = waMessageForProduct(productName);
  return `https://wa.me/${WA_PHONE_DIGITS}?text=${encodeURIComponent(text)}`;
}

export const WA_HIRE_HREF = buildWaHireHref();

type GtagFn = (...args: unknown[]) => void;

export function trackHireClick(origin: string) {
  if (typeof window === "undefined") return;
  const payload = {
    event: "hire_whatsapp_click",
    origin,
  };
  const w = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: GtagFn;
  };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(payload);
  // ANAL-02 — also emit GA4 event when gtag is present
  if (typeof w.gtag === "function") {
    w.gtag("event", "hire_whatsapp_click", { origin });
  }
}
