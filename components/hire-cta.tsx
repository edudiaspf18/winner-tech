"use client";

import { trackHireClick } from "@/lib/whatsapp";

type HireCtaProps = {
  href: string;
  label: string;
  variant?: "primary" | "ghost";
  className?: string;
  origin?: string;
  onNavigate?: () => void;
};

export function HireCta({
  href,
  label,
  variant = "primary",
  className = "",
  origin = "inline",
  onNavigate,
}: HireCtaProps) {
  const base =
    "group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-[0.95rem] font-semibold tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--accent)]";

  const isPrimary = variant === "primary";
  const styles = isPrimary
    ? "shadow-[0_0_0_1px_color-mix(in_oklab,#a8bd72_45%,transparent)] hover:brightness-110"
    : "bg-transparent ring-1 ring-[var(--line)] hover:bg-[var(--surface)]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-origin={origin}
      className={`${base} ${styles} ${className}`}
      style={
        isPrimary
          ? { backgroundColor: "#eef1e4", color: "#10140c" }
          : { color: "var(--ink)" }
      }
      onClick={() => {
        trackHireClick(origin);
        onNavigate?.();
      }}
    >
      <span className="relative z-10" style={{ color: "inherit" }}>
        {label}
      </span>
      <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
      <span
        aria-hidden
        className="relative z-10 translate-x-0 opacity-70 transition duration-300 group-hover:translate-x-1"
        style={{ color: "inherit" }}
      >
        →
      </span>
    </a>
  );
}
