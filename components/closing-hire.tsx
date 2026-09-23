import { CLOSING_LINE, CTA_LABEL } from "@/lib/content";
import { WA_HIRE_HREF } from "@/lib/whatsapp";
import { HireCta } from "@/components/hire-cta";

export function ClosingHire() {
  return (
    <section id="contratar" className="px-6 py-16">
      <p className="max-w-2xl text-2xl font-semibold tracking-tight text-zinc-900">
        {CLOSING_LINE}
      </p>
      <div className="mt-8">
        <HireCta href={WA_HIRE_HREF} label={CTA_LABEL} />
      </div>
    </section>
  );
}
