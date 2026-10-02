"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  HAS_TRACKING,
  readConsent,
  subscribeConsent,
  writeConsent,
} from "@/lib/consent";

/** "unknown" on the server so the first client render matches the HTML. */
type Snapshot = ReturnType<typeof readConsent> | "unknown";

export function CookieBanner() {
  const consent = useSyncExternalStore<Snapshot>(
    subscribeConsent,
    readConsent,
    () => "unknown",
  );
  if (!HAS_TRACKING || consent !== null) return null;

  return (
    <section
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-[60] max-w-md rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)] p-4 shadow-sm sm:inset-x-auto sm:bottom-5 sm:left-5 sm:p-5"
    >
      <p className="text-sm leading-relaxed text-[var(--ink)]">
        Usamos cookies de medição (Google Analytics
        {process.env.NEXT_PUBLIC_META_PIXEL_ID ? " e Meta Pixel" : ""}) para
        saber quantas pessoas chamam no WhatsApp. Só com a sua permissão.{" "}
        <Link
          href="/privacidade"
          className="underline underline-offset-4 transition-all duration-200 hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          Política de privacidade
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2.5">
        <button
          type="button"
          onClick={() => writeConsent("denied")}
          className="min-h-11 flex-1 cursor-pointer rounded-xl px-4 text-sm font-semibold text-[var(--ink)] ring-1 ring-[var(--line)] transition-all duration-200 hover:bg-[var(--surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          Rejeitar
        </button>
        <button
          type="button"
          onClick={() => writeConsent("granted")}
          className="min-h-11 flex-1 cursor-pointer rounded-xl px-4 text-sm font-semibold transition-all duration-200 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          style={{ backgroundColor: "#eef1e4", color: "#10140c" }}
        >
          Aceitar
        </button>
      </div>
    </section>
  );
}
