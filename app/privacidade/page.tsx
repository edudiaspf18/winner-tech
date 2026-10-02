import type { Metadata } from "next";
import { BRAND_NAME, COMPANY, SOCIAL, WA_PHONE_DISPLAY } from "@/lib/content";
import { PageShell } from "@/components/page-shell";
import { CookieSettingsButton } from "@/components/cookie-settings-button";

export const metadata: Metadata = {
  title: `Política de privacidade · ${BRAND_NAME}`,
  description:
    "Como a Winner Tech trata dados neste site: cookies de medição só com consentimento e contato pelo WhatsApp.",
  alternates: { canonical: "/privacidade" },
};

const H2 =
  "font-display mt-12 text-xl font-semibold tracking-tight text-[var(--ink)] sm:text-2xl";
const P = "mt-4 text-base leading-relaxed text-[var(--ink-muted)]";
const UL = "mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-[var(--ink-muted)]";

export default function PrivacidadePage() {
  return (
    <PageShell>
      <article className="px-4 pb-20 pt-[calc(var(--header-h)+env(safe-area-inset-top)+2rem)] sm:px-6 sm:pb-28 sm:pt-[calc(var(--header-h)+3rem)] lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Privacidade
          </p>
          <h1 className="font-display mt-4 text-[clamp(1.85rem,7vw,3.25rem)] font-semibold leading-[1.05] tracking-tight">
            Política de privacidade
          </h1>
          <p className={P}>
            Última atualização: 2 de outubro de 2026. Este texto explica quais
            dados este site trata, para quê e como você controla isso, conforme a
            Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD).
          </p>

          <h2 className={H2}>Quem é o responsável</h2>
          <p className={P}>
            {BRAND_NAME}, CNPJ {COMPANY.cnpj}. Para falar sobre seus dados, use
            o WhatsApp {WA_PHONE_DISPLAY}.
          </p>

          <h2 className={H2}>O que este site coleta</h2>
          <p className={P}>
            Este site não tem cadastro, login nem formulário. Não pedimos nome,
            e-mail ou telefone nele. Os dados abaixo só existem se você permitir.
          </p>
          <ul className={UL}>
            <li>
              <strong className="text-[var(--ink)]">Medição de visitas.</strong>{" "}
              Com o seu consentimento, usamos o Google Analytics 4 para contar
              visitas, páginas vistas e cliques no botão de contratar (e de qual
              seção veio o clique). Isso usa cookies e identificadores do
              navegador.
            </li>
            <li>
              <strong className="text-[var(--ink)]">Meta Pixel.</strong> Se
              estiver ativo, e só com o seu consentimento, mede o clique de
              contratar para avaliar anúncios no Facebook e no Instagram. O
              banner de cookies informa quando ele está em uso.
            </li>
          </ul>
          <p className={P}>
            Sem o seu aceite, nenhuma dessas ferramentas é carregada.
          </p>

          <h2 className={H2}>Contato pelo WhatsApp</h2>
          <p className={P}>
            O botão &ldquo;Quero contratar&rdquo; abre uma conversa no WhatsApp
            com uma mensagem pronta. A partir daí, o tratamento dos dados segue
            as regras do próprio WhatsApp e do que você escrever na conversa.
            Usamos o que você enviar apenas para responder e atender o seu
            pedido.
          </p>

          <h2 className={H2}>Base legal</h2>
          <p className={P}>
            Cookies de medição: consentimento (art. 7º, I, da LGPD). Você pode
            recusar sem perder acesso a nenhuma parte do site. Atendimento no
            WhatsApp: procedimentos preliminares ao contrato, a pedido seu (art.
            7º, V).
          </p>

          <h2 className={H2}>Com quem os dados são compartilhados</h2>
          <p className={P}>
            Os dados de medição são processados pelo Google (Analytics) e, se
            ativo, pela Meta (Pixel), que podem tratar dados fora do Brasil. As
            políticas dessas empresas se aplicam a esse tratamento. Não vendemos
            dados.
          </p>

          <h2 className={H2}>Seus direitos</h2>
          <p className={P}>
            Você pode pedir confirmação de tratamento, acesso, correção,
            anonimização, eliminação, portabilidade e informação sobre
            compartilhamento, além de revogar o consentimento a qualquer momento
            (art. 18 da LGPD). Para isso, fale com a gente pelo WhatsApp{" "}
            {WA_PHONE_DISPLAY}.
          </p>

          <h2 className={H2}>Como mudar sua escolha sobre cookies</h2>
          <p className={P}>
            Você pode refazer a escolha quando quiser.{" "}
            <CookieSettingsButton className="cursor-pointer underline underline-offset-4 transition-all duration-200 hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]" />{" "}
            <span className="sr-only">
              (reabre o aviso de cookies). Esse botão só aparece quando há
              ferramentas de medição ativas.
            </span>
            Também é possível apagar cookies e dados do site nas configurações
            do navegador.
          </p>

          <h2 className={H2}>Links externos</h2>
          <p className={P}>
            Este site tem links para WhatsApp, Instagram, LinkedIn e para sites
            de clientes. Cada um deles tem a própria política de privacidade.
            Nossos perfis:{" "}
            <a
              href={SOCIAL.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-all duration-200 hover:text-[var(--accent)]"
            >
              Instagram
              <span className="sr-only"> (abre em nova aba)</span>
            </a>{" "}
            e{" "}
            <a
              href={SOCIAL.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-all duration-200 hover:text-[var(--accent)]"
            >
              LinkedIn
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            .
          </p>

          <h2 className={H2}>Mudanças nesta política</h2>
          <p className={P}>
            Se algo mudar, atualizamos esta página e a data no topo.
          </p>
        </div>
      </article>
    </PageShell>
  );
}
