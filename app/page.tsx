import { ClosingHire } from "@/components/closing-hire";
import { Hero } from "@/components/hero";
import { ProductBlock } from "@/components/product-block";
import { SiteHeader } from "@/components/site-header";
import { PRODUCTS } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-zinc-900">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1">
        <Hero />
        <section id="sistemas" className="px-6 pb-8" aria-label="Sistemas">
          {PRODUCTS.map((product) => (
            <ProductBlock key={product.name} product={product} />
          ))}
        </section>
        <ClosingHire />
      </main>
    </div>
  );
}
