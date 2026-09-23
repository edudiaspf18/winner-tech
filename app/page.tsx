import { ApprovedProofSection } from "@/components/approved-proof";
import { CaseBlocks, ProofPanels } from "@/components/case-blocks";
import { ClosingHire } from "@/components/closing-hire";
import { Hero } from "@/components/hero";
import { MarqueeStrip } from "@/components/marquee-strip";
import { PageShell } from "@/components/page-shell";
import { ProductRail } from "@/components/product-rail";

export default function HomePage() {
  return (
    <PageShell homeAnchors>
      <Hero />
      <MarqueeStrip />
      <ProductRail />
      <CaseBlocks />
      <ProofPanels />
      <ApprovedProofSection />
      <ClosingHire />
    </PageShell>
  );
}
