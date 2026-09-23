"use client";

import { useEffect, useState } from "react";
import { CTA_LABEL } from "@/lib/content";
import { buildWaHireHref, trackHireClick } from "@/lib/whatsapp";
import { useActiveProduct } from "@/components/active-product";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const { activeProduct } = useActiveProduct();
  const href = buildWaHireHref(activeProduct);
  const origin = activeProduct ? `floating:${activeProduct}` : "floating";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={CTA_LABEL}
      data-origin={origin}
      onClick={() => trackHireClick(origin)}
      style={{ backgroundColor: "#eef1e4", color: "#10140c" }}
      className={`fixed bottom-5 right-5 z-50 inline-flex cursor-pointer items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold shadow-[0_8px_28px_rgba(0,0,0,0.35),0_0_0_1px_color-mix(in_oklab,#a8bd72_40%,transparent)] transition duration-300 hover:brightness-110 sm:bottom-8 sm:right-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="anim-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-50" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
      </span>
      {CTA_LABEL}
    </a>
  );
}
