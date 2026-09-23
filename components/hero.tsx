import { CTA_LABEL, HERO } from "@/lib/content";
import { WA_HIRE_HREF } from "@/lib/whatsapp";
import { HireCta } from "@/components/hire-cta";

export function Hero() {
  return (
    <section className="px-6 py-16">
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        {HERO.offer}
      </h1>
      <p className="mt-4 text-xl text-zinc-600">{HERO.support}</p>
      <div className="mt-8">
        <HireCta href={WA_HIRE_HREF} label={CTA_LABEL} />
      </div>
    </section>
  );
}
