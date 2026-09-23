import { CaseBlocks, ProofPanels } from "@/components/case-blocks";
import { ClosingHire } from "@/components/closing-hire";
import { FloatingCta } from "@/components/floating-cta";
import { Hero } from "@/components/hero";
import { MarqueeStrip } from "@/components/marquee-strip";
import { ProductRail } from "@/components/product-rail";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <div className="relative min-h-full overflow-x-clip bg-[var(--bg)] text-[var(--ink)]">
      <SiteHeader />
      <main>
        <Hero />
        <MarqueeStrip />
        <ProductRail />
        <CaseBlocks />
        <ProofPanels />
        <ClosingHire />
      </main>
      <FloatingCta />
    </div>
  );
}
