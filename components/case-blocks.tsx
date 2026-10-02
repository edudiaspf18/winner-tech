"use client";

import Image from "next/image";
import { CASES, CTA_LABEL, LACO_VERTICALS } from "@/lib/content";
import { WA_HIRE_HREF } from "@/lib/whatsapp";
import { HireCta } from "@/components/hire-cta";
import { LumeUiMock, ZeloUiMock } from "@/components/product-ui-mocks";
import { Reveal } from "@/components/reveal";

export function CaseBlocks() {
  return (
    <section
      id="cases"
      className="border-t border-[var(--line)] px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
      aria-label="Cases"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Cases
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-[1.65rem] font-semibold tracking-tight text-[var(--ink)] sm:mt-4 sm:text-3xl lg:text-4xl">
            Prova real. Sem número inventado.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-8 lg:grid-cols-2">
          {CASES.map((c) => (
            <Reveal key={c.name}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-7 lg:p-8">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                  {c.product}
                </p>
                <h3 className="font-display mt-3 text-2xl font-semibold text-[var(--ink)]">
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      {c.name}
                      <span className="sr-only"> (abre em nova aba)</span>
                    </a>
                  ) : (
                    c.name
                  )}
                </h3>
                <div className="mt-6 space-y-4 text-base leading-relaxed">
                  <p>
                    <span className="font-semibold text-[var(--accent)]">
                      Desafio.{" "}
                    </span>
                    <span className="text-[var(--ink)]">{c.challenge}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--accent)]">
                      Solução.{" "}
                    </span>
                    <span className="text-[var(--ink)]">{c.solution}</span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ink-muted)]">
            Verticais Laço
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {LACO_VERTICALS.map((v) => (
              <li
                key={v}
                className="rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-1.5 text-sm text-[var(--ink)]"
              >
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function ProofPanels() {
  return (
    <section
      id="interface"
      className="border-t border-[var(--line)] px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
      aria-label="Prova visual"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Interface
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-[1.65rem] font-semibold tracking-tight text-[var(--ink)] sm:mt-4 sm:text-3xl lg:text-4xl">
            Pare de operar no improviso. Tenha o seu sistema.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--ink-muted)] sm:mt-4 sm:text-base">
            Veja as telas por dentro. Escolha o sistema do seu negócio e chame a
            gente no WhatsApp para contratar.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-5 sm:gap-8">
            <Reveal>
              <figure className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
                <div className="border-b border-[var(--line)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                  Zelo · Tela Hoje
                </div>
                <div className="p-4 sm:p-5">
                  <ZeloUiMock />
                </div>
                <figcaption className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--ink-muted)]">
                  Placa, vaga e status — mesmo palco da landing do Zelo.
                </figcaption>
              </figure>
            </Reveal>
            <Reveal>
              <figure className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
                <div className="border-b border-[var(--line)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                  Laço · App do cliente
                </div>
                <div className="relative aspect-[740/560] w-full bg-[var(--bg)]">
                  <Image
                    src="/landings/laco-app.jpg"
                    alt="App do cliente do Laço em três marcas: QR do cliente, saldo e meta do mês."
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--ink-muted)]">
                  Fidelidade com a marca do negócio — QR, saldo e meta do mês.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal className="h-full">
            <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
              <div className="border-b border-[var(--line)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                Lume · Agenda do salão
              </div>
              <div className="flex-1 p-4 sm:p-5">
                <LumeUiMock />
              </div>
              <figcaption className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--ink-muted)]">
                Agenda sem horário duplicado — mock da landing do Lume.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal className="mt-8 flex justify-center sm:mt-12">
          <HireCta
            href={WA_HIRE_HREF}
            label={CTA_LABEL}
            origin="interface"
            className="w-full max-w-sm sm:w-auto"
          />
        </Reveal>
      </div>
    </section>
  );
}
