"use client";

import Image from "next/image";
import { CASES, LACO_VERTICALS } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function CaseBlocks() {
  return (
    <section
      id="cases"
      className="border-t border-[var(--line)] px-5 py-20 sm:px-8 sm:py-28"
      aria-label="Cases"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Cases
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
            Prova real. Sem número inventado.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {CASES.map((c) => (
            <Reveal key={c.name}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-7 sm:p-8">
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
      id="prova"
      className="border-t border-[var(--line)] px-5 py-20 sm:px-8 sm:py-28"
      aria-label="Prova visual"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Interface
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
            Zelo e Laço com prova real. Frutmix sem tela inventada.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
              <div className="border-b border-[var(--line)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                Zelo · Tela Hoje
              </div>
              <div className="space-y-3 p-5" aria-label="Chrome da Tela Hoje do Zelo">
                {[
                  { label: "Livre", tone: "var(--accent)" },
                  { label: "Esperando PIX", tone: "var(--accent-hot)" },
                  { label: "Em serviço", tone: "var(--accent-cool)" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3"
                  >
                    <span className="text-sm text-[var(--ink)]">{row.label}</span>
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: row.tone }}
                      aria-hidden
                    />
                  </div>
                ))}
                <p className="pt-2 text-xs text-[var(--ink-muted)]">
                  Placa · vaga · PIX · WhatsApp — chrome fiel à landing do Zelo.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <figure className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
              <Image
                src="/proof/laco-hero-posto.jpg"
                alt="Posto Marinheiro, case do Laço em operação"
                width={1200}
                height={800}
                className="h-56 w-full object-cover sm:h-72"
              />
              <figcaption className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--ink-muted)]">
                Laço · Posto Marinheiro (foto real da operação)
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <figure className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] lg:max-w-xl">
            <Image
              src="/proof/laco-hand-phone.jpg"
              alt="App do Laço no celular, fidelidade white-label"
              width={900}
              height={1200}
              className="h-64 w-full object-cover"
            />
            <figcaption className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--ink-muted)]">
              Laço · app na mão do cliente
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
