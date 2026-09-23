import type { Product } from "@/lib/content";

type ProductBlockProps = {
  product: Product;
};

export function ProductBlock({ product }: ProductBlockProps) {
  return (
    <article className="border-t border-zinc-200 py-10">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
        {product.name}
      </h2>
      <p className="mt-3 text-base text-zinc-800">{product.functionLine}</p>
      <p className="mt-2 text-base text-zinc-600">{product.nicheLine}</p>
    </article>
  );
}
