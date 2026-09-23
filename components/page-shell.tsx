import { FloatingCta } from "@/components/floating-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PageShellProps = {
  children: React.ReactNode;
  /** Home uses in-page anchors; other routes link back to `/#…`. */
  homeAnchors?: boolean;
};

export function PageShell({ children, homeAnchors = false }: PageShellProps) {
  return (
    <div className="relative min-h-full overflow-x-clip bg-[var(--bg)] text-[var(--ink)]">
      <SiteHeader homeAnchors={homeAnchors} />
      <main>{children}</main>
      <SiteFooter />
      <FloatingCta />
    </div>
  );
}
