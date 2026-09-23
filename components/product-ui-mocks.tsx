/** Chrome fiel à landing do Zelo (Tela Hoje + vagas). */
export function ZeloUiMock() {
  return (
    <div
      className="overflow-hidden rounded-xl border border-white/12 bg-[#0a0a0a] text-[#f5f5f7]"
      aria-label="Interface Zelo — Tela Hoje"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#111] px-3 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <i className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <i className="block h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <i className="block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <div className="ml-2 flex items-center gap-2 text-[11px] font-medium tracking-wide text-white/70">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/proof/zelo-icon.png" alt="" width={14} height={14} className="h-3.5 w-3.5" />
          Zelo · Hoje
        </div>
      </div>
      <div className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[5.5rem_1fr]">
        <aside className="space-y-1 border-r border-white/10 bg-[#0d0d0d] px-2 py-3 text-[10px] text-white/45">
          <p className="mb-2 flex items-center gap-1.5 font-semibold text-white/80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/proof/zelo-icon.png" alt="" width={12} height={12} />
            Zelo
          </p>
          <span className="block rounded bg-[#d4a017]/20 px-1.5 py-0.5 font-medium text-[#f5d76e]">
            Hoje
          </span>
          {["Entrada", "Agenda", "WhatsApp", "Caixa"].map((l) => (
            <span key={l} className="block px-1.5 py-0.5">
              {l}
            </span>
          ))}
        </aside>
        <div className="space-y-2.5 p-3">
          <div className="flex items-end justify-between gap-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                Terça · operação
              </p>
              <p className="text-sm font-semibold">Carros na loja</p>
            </div>
            <span className="rounded-full bg-[#d4a017] px-2 py-0.5 text-[10px] font-semibold text-black">
              + Nova OS
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-center">
            {[
              ["1", "livres"],
              ["2", "OS hoje"],
              ["R$ 750", "previsto"],
            ].map(([v, l]) => (
              <div
                key={l}
                className="rounded-lg border border-white/10 bg-white/5 px-1 py-1.5"
              >
                <p className="font-mono text-xs font-semibold text-[#f5d76e]">{v}</p>
                <p className="text-[9px] text-white/45">{l}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-1.5 sm:grid-cols-3">
            {[
              {
                vaga: "Vaga 1",
                status: "Em serviço",
                placa: "ABC1D23",
                tone: "border-[#5fb8a8]/40 bg-[#5fb8a8]/10",
              },
              {
                vaga: "Vaga 2",
                status: "Em serviço",
                placa: "FIC2B02",
                tone: "border-[#5fb8a8]/40 bg-[#5fb8a8]/10",
              },
              {
                vaga: "Vaga 3",
                status: "Livre",
                placa: "—",
                tone: "border-[#a8bd72]/40 bg-[#a8bd72]/10",
              },
            ].map((card) => (
              <article
                key={card.vaga}
                className={`rounded-lg border px-2 py-2 ${card.tone}`}
              >
                <header className="flex justify-between text-[9px] text-white/60">
                  <strong className="text-white/90">{card.vaga}</strong>
                  <em className="not-italic">{card.status}</em>
                </header>
                <p className="mt-1 font-mono text-sm font-bold tracking-wider text-white">
                  {card.placa}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Chrome fiel à landing do Lume (agenda do salão). */
export function LumeUiMock() {
  const rows = [
    {
      time: "09:00",
      name: "Marina Castro",
      detail: "Corte · Amanda",
      selo: "Confirmado",
      ok: true,
    },
    {
      time: "10:30",
      name: "Beatriz Moreira",
      detail: "Coloração · Juliana",
      selo: "Sinal no PIX",
      ok: false,
    },
    {
      time: "12:00",
      name: "Almoço",
      detail: "Horário fechado",
      selo: null,
      ok: false,
    },
    {
      time: "14:00",
      name: "Denise Alencar",
      detail: "Escova · Amanda",
      selo: "Pedido no link",
      ok: false,
    },
  ] as const;

  return (
    <div
      className="overflow-hidden rounded-xl border border-[var(--line)] bg-[#f7f4ef] text-[#1a1612]"
      aria-label="Interface Lume — agenda do salão"
    >
      <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/proof/lume-marca.svg"
            alt="Lume"
            width={72}
            height={22}
            className="h-5 w-auto"
          />
          <span className="text-[11px] text-black/45">WinnerTech</span>
        </div>
        <p className="text-[11px] font-medium text-black/55">
          Sexta · Amanda e Juliana
        </p>
      </div>
      <ol className="divide-y divide-black/8 px-2 py-1">
        {rows.map((row) => (
          <li
            key={`${row.time}-${row.name}`}
            className={`flex items-center gap-3 px-2 py-2.5 ${
              row.name === "Almoço" ? "opacity-55" : ""
            }`}
          >
            <time className="w-12 shrink-0 font-mono text-xs text-black/50">
              {row.time}
            </time>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{row.name}</p>
              <p className="truncate text-[11px] text-black/50">{row.detail}</p>
            </div>
            {row.selo ? (
              <em
                className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold not-italic ${
                  row.ok
                    ? "bg-emerald-600/15 text-emerald-800"
                    : "bg-amber-500/15 text-amber-900"
                }`}
              >
                {row.selo}
              </em>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="border-t border-black/10 px-4 py-2.5 text-[11px] text-black/50">
        Se alguém pede o mesmo 14h, o sistema recusa.
      </p>
    </div>
  );
}
