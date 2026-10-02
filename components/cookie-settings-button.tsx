"use client";

import { HAS_TRACKING, writeConsent } from "@/lib/consent";

/** Reopens the cookie banner by clearing the saved choice. */
export function CookieSettingsButton({ className = "" }: { className?: string }) {
  if (!HAS_TRACKING) return null;
  return (
    <button
      type="button"
      onClick={() => writeConsent(null)}
      className={className}
    >
      Gerenciar cookies
    </button>
  );
}
