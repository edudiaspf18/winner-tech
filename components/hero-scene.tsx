"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import gsap from "gsap";

/** Background mesh only */
export function HeroBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 mesh-field opacity-90" />
    </div>
  );
}

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia(REDUCED_QUERY).matches;
}

/**
 * Site + app devices — in-flow on mobile, decorative on large screens.
 */
export function HeroDevices({ className = "" }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );

  useEffect(() => {
    const el = root.current;
    if (!el || reduced) return;

    const site = el.querySelector<HTMLElement>("[data-device=site]");
    const phone = el.querySelector<HTMLElement>("[data-device=phone]");
    const bars = el.querySelectorAll<HTMLElement>("[data-bar]");
    const status = el.querySelectorAll<HTMLElement>("[data-status]");
    const slots = el.querySelectorAll<HTMLElement>("[data-slot]");

    const loops: gsap.core.Tween[] = [];
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [site, phone],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        },
      );

      if (window.matchMedia("(min-width: 1024px)").matches) {
        loops.push(gsap.to(site, {
          y: "-=8",
          duration: 3.6,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: 1,
        }));
        loops.push(gsap.to(phone, {
          y: "-=10",
          duration: 4.1,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: 1.2,
        }));
      }

      if (bars.length) {
        loops.push(gsap.fromTo(
          bars,
          { scaleX: 0.4, opacity: 0.3 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1.3,
            stagger: 0.16,
            ease: "power2.out",
            repeat: -1,
            repeatDelay: 2.2,
            yoyo: true,
          },
        ));
      }

      if (status.length) {
        loops.push(gsap.to(status, {
          opacity: 0.4,
          duration: 0.85,
          stagger: { each: 0.3, repeat: -1, yoyo: true },
          ease: "sine.inOut",
        }));
      }

      if (slots.length) {
        loops.push(gsap.to(slots, {
          borderColor: "color-mix(in oklab, #5fb8a8 50%, transparent)",
          duration: 1.1,
          stagger: { each: 0.5, repeat: -1, yoyo: true },
          ease: "sine.inOut",
        }));
      }
    }, el);

    // Endless loops only run while the devices are on screen.
    const io = new IntersectionObserver(([entry]) => {
      for (const t of loops) t.paused(!entry.isIntersecting);
    });
    io.observe(el);

    return () => {
      io.disconnect();
      ctx.revert();
    };
  }, [reduced]);

  return (
    <div
      ref={root}
      className={`relative w-full ${className}`}
      aria-hidden="true"
    >
      <div className="mx-auto flex max-w-lg flex-col items-stretch gap-4 sm:max-w-xl lg:relative lg:mx-0 lg:max-w-none lg:block lg:h-[min(28rem,52vh)] lg:w-full">
        {/* Site */}
        <div
          data-device="site"
          className="w-full lg:absolute lg:right-[8%] lg:top-0 lg:w-[min(100%,28rem)]"
          style={{ opacity: reduced ? 1 : undefined }}
        >
          <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface)_94%,transparent)] shadow-[0_24px_48px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-[var(--line)] px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#e07a55]/80 sm:h-2.5 sm:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-[#d4b86a]/80 sm:h-2.5 sm:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-[#a8bd72]/80 sm:h-2.5 sm:w-2.5" />
              <span className="ml-2 h-4 flex-1 rounded-md bg-[var(--bg)]/80 ring-1 ring-[var(--line)] sm:h-5" />
            </div>
            <div className="grid gap-3 p-3 sm:grid-cols-[1fr_0.9fr] sm:p-4">
              <div className="space-y-2">
                <div
                  data-bar
                  className="h-2.5 w-[58%] origin-left rounded-full bg-[var(--accent)]/70 sm:h-3"
                />
                <div
                  data-bar
                  className="h-2 w-[78%] origin-left rounded-full bg-[var(--ink)]/25"
                />
                <div
                  data-bar
                  className="h-2 w-[64%] origin-left rounded-full bg-[var(--ink)]/18"
                />
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[
                    { label: "Livre", tone: "var(--accent)" },
                    { label: "PIX", tone: "var(--accent-hot)" },
                    { label: "Serviço", tone: "var(--accent-cool)" },
                  ].map((s) => (
                    <span
                      key={s.label}
                      data-status
                      className="inline-flex items-center gap-1 rounded-md border border-[var(--line)] bg-[var(--bg)]/70 px-2 py-1 text-[9px] font-medium uppercase tracking-wider text-[var(--ink-muted)] sm:text-[10px]"
                    >
                      <i
                        className="block h-1.5 w-1.5 rounded-full"
                        style={{ background: s.tone }}
                      />
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-[var(--line)] bg-[var(--bg)]/60 p-2.5 sm:p-3">
                <div className="mb-2 text-[9px] uppercase tracking-[0.18em] text-[var(--ink-muted)] sm:text-[10px]">
                  Painel
                </div>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  {["OS", "Agenda", "Caixa", "Cliente"].map((cell) => (
                    <div
                      key={cell}
                      className="rounded-lg border border-[var(--line)] bg-[var(--surface)]/80 px-1.5 py-2 text-center text-[10px] text-[var(--ink-muted)] sm:py-2.5 sm:text-[11px]"
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App */}
        <div
          data-device="phone"
          className="mx-auto w-[min(100%,14rem)] sm:w-[min(100%,15rem)] lg:absolute lg:bottom-0 lg:right-0 lg:mx-0 lg:w-[11.5rem]"
          style={{ opacity: reduced ? 1 : undefined }}
        >
          <div className="overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[#0a0e14] shadow-[0_24px_48px_rgba(0,0,0,0.45)] ring-1 ring-white/10 sm:rounded-[1.75rem]">
            <div className="mx-auto mt-2 h-1.5 w-14 rounded-full bg-white/15" />
            <div className="space-y-2 px-2.5 pb-3.5 pt-3 sm:px-3 sm:pb-4">
              <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-cool)] sm:text-[10px]">
                App · hoje
              </div>
              {[
                { t: "09:00", n: "Confirmado", ok: true },
                { t: "10:30", n: "Sinal PIX", ok: false },
                { t: "14:00", n: "No link", ok: false },
              ].map((row) => (
                <div
                  key={row.t}
                  data-slot
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-1.5 sm:px-2.5 sm:py-2"
                >
                  <span className="font-mono text-[9px] text-white/45 sm:text-[10px]">
                    {row.t}
                  </span>
                  <span className="flex-1 truncate text-[10px] text-white/80 sm:text-[11px]">
                    {row.n}
                  </span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      row.ok ? "bg-[var(--accent)]" : "bg-[var(--accent-hot)]"
                    }`}
                  />
                </div>
              ))}
              <div className="mt-1 h-7 rounded-xl bg-[var(--accent)]/20 ring-1 ring-[var(--accent)]/30 sm:h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** @deprecated use HeroBackdrop + HeroDevices */
export function HeroScene() {
  return <HeroBackdrop />;
}
