import React from 'react';

export const DebtRestructuring: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#090909] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8AD36] font-semibold block mb-4">
            ESTRATÉGIA DE REPACTUAÇÃO BANCÁRIA
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-normal leading-tight mb-6">
            Reestruturação de passivos bancários e negociação estratégica
          </h2>

          <p className="text-lg text-[#B8B8B8] font-light leading-relaxed">
            Em cenários de endividamento rural, a solução raras vezes reside em litigar indiscriminadamente ou, no outro extremo, aceitar refinanciamentos que multiplicam a exposição patrimonial. A intervenção técnica busca a convergência entre o ciclo econômico da lavoura e as vias jurídicas cabíveis.
          </p>
        </div>

        {/* 3 Strategic Tracks — Clean Editorial Columns directly on the background (No Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 lg:divide-x lg:divide-white/[0.08] pb-20 border-b border-white/[0.08]">
          {/* Track 1: Extrajudicial */}
          <div className="lg:pr-12 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#D8AD36] font-semibold block mb-2">
                VIA 01 · EXTRAJUDICIAL
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] font-normal leading-snug">
                Negociação Direta & Alongamento
              </h3>
            </div>

            <p className="text-base text-[#B8B8B8] leading-relaxed font-light">
              Construção de propostas de pagamento compatíveis com a estimativa de safras futuras, fundamentadas em laudos de capacidade de pagamento e histórico de cumprimento.
            </p>

            <ul className="space-y-3.5 pt-2 text-sm sm:text-base text-[#B8B8B8] font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#D8AD36] font-bold">―</span>
                <span>Adequação do fluxo de caixa e carências sazonais</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D8AD36] font-bold">―</span>
                <span>Substituição ou liberação de garantias em excesso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D8AD36] font-bold">―</span>
                <span>Aplicação administrativa de regras do MCR 2.6.4</span>
              </li>
            </ul>

            <div className="pt-6 border-t border-white/[0.06] text-xs text-[#777777] font-light leading-relaxed">
              Não assegura aceitação obrigatória pela instituição credora, salvo preenchimento formal de direito potestativo de prorrogação.
            </div>
          </div>

          {/* Track 2: Contenciosa */}
          <div className="lg:px-12 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#D8AD36] font-semibold block mb-2">
                VIA 02 · CONTENCIOSA
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] font-normal leading-snug">
                Defesa Judicial Estratégica
              </h3>
            </div>

            <p className="text-base text-[#B8B8B8] leading-relaxed font-light">
              Defesa em execuções de títulos bancários para conter penhoras açodadas, impugnar cálculos incorretos e tutelar bens de exploração econômica indispensável à colheita.
            </p>

            <ul className="space-y-3.5 pt-2 text-sm sm:text-base text-[#B8B8B8] font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#D8AD36] font-bold">―</span>
                <span>Embargos à execução e arguição de nulidades do título</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D8AD36] font-bold">―</span>
                <span>Arguição de impenhorabilidade da sede familiar (CF art. 5º)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D8AD36] font-bold">―</span>
                <span>Questionamento de encargos moratórios abusivos</span>
              </li>
            </ul>

            <div className="pt-6 border-t border-white/[0.06] text-xs text-[#777777] font-light leading-relaxed">
              Respeito rigoroso aos requisitos legais de probabilidade do direito e perigo na demora perante o juízo competente.
            </div>
          </div>

          {/* Track 3: Patrimonial */}
          <div className="lg:pl-12 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#D8AD36] font-semibold block mb-2">
                VIA 03 · PATRIMONIAL
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] font-normal leading-snug">
                Proteção Patrimonial Ética
              </h3>
            </div>

            <p className="text-base text-[#B8B8B8] leading-relaxed font-light">
              Planejamento societário e segregação de riscos entre a atividade rural operacional e os imóveis históricos da família, prevenindo a perda irreversível de terras.
            </p>

            <ul className="space-y-3.5 pt-2 text-sm sm:text-base text-[#B8B8B8] font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#D8AD36] font-bold">―</span>
                <span>Isolamento preventivo de passivos operacionais e de insumos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D8AD36] font-bold">―</span>
                <span>Gestão preventiva e limitação de garantias cruzadas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D8AD36] font-bold">―</span>
                <span>Transição geracional, holdings familiares e governança</span>
              </li>
            </ul>

            <div className="pt-6 border-t border-white/[0.06] text-xs text-[#777777] font-light leading-relaxed">
              Estruturada estritamente em conformidade com as normas de boa-fé objetiva e sem expedientes de simulação fraudulenta.
            </div>
          </div>
        </div>

        {/* Ethical Framework Notice — Open Typographic Statement */}
        <div className="pt-12 max-w-4xl">
          <p className="text-sm sm:text-base text-[#888888] leading-relaxed font-light">
            <strong className="text-[#D8AD36] font-medium uppercase tracking-wider text-xs block mb-2">
              Compromisso Ético e Técnico
            </strong>
            A NS Advocacia não comercializa promessas de &ldquo;descontos de 90%&rdquo;, &ldquo;anulação automática de dívidas&rdquo; ou &ldquo;blindagem absoluta&rdquo;. Toda negociação e defesa depende dos títulos firmados, da situação financeira comprovada e da receptividade legal perante o Poder Judiciário e os comitês bancários.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DebtRestructuring;
