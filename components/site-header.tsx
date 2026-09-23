import { BRAND_NAME } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 px-6 py-4">
      <p className="text-lg font-semibold tracking-tight text-zinc-900">
        {BRAND_NAME}
      </p>
    </header>
  );
}
