import React from 'react';
import { Layers, GitBranch, ShieldCheck, Scale, Handshake } from 'lucide-react';

export const DebtRestructuring: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0e0e11] border-b border-[#212126] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <span>Gestão de Passivos</span>
            <span aria-hidden="true" className="text-[#8e6817]">·</span>
            <span>Estratégia de Repactuação</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#f5eedc] font-normal leading-tight mb-4">
            Reestruturação de dívidas bancárias e negociação estratégica
          </h2>

          <p className="text-base text-[#bcb3a7] font-light leading-relaxed">
            Em cenários de endividamento rural, a solução raras vezes reside em litigar indiscriminadamente ou, no outro extremo, aceitar refinanciamentos abusivos que apenas multiplicam a exposição patrimonial. A intervenção técnica busca a convergência entre o ciclo econômico da lavoura e as vias jurídicas cabíveis.
          </p>
        </div>

        {/* 3 Strategic Tracks (Negociação Extrajudicial vs. Defesa Contenciosa vs. Reorganização Global) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* Track 1 */}
          <div className="bg-[#121215] border border-[#26262e] p-8 rounded-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#d4af37] text-xs font-mono uppercase tracking-wider mb-3">
                <Handshake className="w-4 h-4" />
                <span>Via Extrajudicial</span>
              </div>
              <h3 className="font-serif text-xl text-[#f5eedc] font-medium mb-3">
                Negociação Direta & Alongamento
              </h3>
              <p className="text-xs text-[#a39c8e] leading-relaxed mb-6">
                Construção de propostas de pagamento compatíveis com a estimativa de safras futuras, fundamentadas em laudos de capacidade de pagamento e histórico de cumprimento.
              </p>
              <ul className="space-y-2 text-xs text-[#bcb3a7]">
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37]">▪</span>
                  <span>Adequação do fluxo de caixa e carências sazonais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37]">▪</span>
                  <span>Substituição ou liberação de garantias em excesso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37]">▪</span>
                  <span>Aplicação administrativa de regras do MCR</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#202027] text-[11px] text-[#787164]">
              Não assegura aceitação obrigatória pela instituição credora, salvo direito líquido de prorrogação.
            </div>
          </div>

          {/* Track 2 */}
          <div className="bg-[#121215] border border-[#26262e] p-8 rounded-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#d4af37] text-xs font-mono uppercase tracking-wider mb-3">
                <Scale className="w-4 h-4" />
                <span>Via Contenciosa</span>
              </div>
              <h3 className="font-serif text-xl text-[#f5eedc] font-medium mb-3">
                Defesa Judicial Estratégica
              </h3>
              <p className="text-xs text-[#a39c8e] leading-relaxed mb-6">
                Defesa em execuções de títulos bancários para conter penhoras açodadas, impugnar cálculos incorretos e tutelar bens de exploração econômica indispensável.
              </p>
              <ul className="space-y-2 text-xs text-[#bcb3a7]">
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37]">▪</span>
                  <span>Embargos à execução e arguição de nulidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37]">▪</span>
                  <span>Arguição de impenhorabilidade de sede familiar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37]">▪</span>
                  <span>Questionamento de encargos manifestamente ilegais</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#202027] text-[11px] text-[#787164]">
              Respeito rigoroso aos requisitos legais de probabilidade do direito e perigo na demora.
            </div>
          </div>

          {/* Track 3 */}
          <div className="bg-[#121215] border border-[#26262e] p-8 rounded-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#d4af37] text-xs font-mono uppercase tracking-wider mb-3">
                <Layers className="w-4 h-4" />
                <span>Via Patrimonial</span>
              </div>
              <h3 className="font-serif text-xl text-[#f5eedc] font-medium mb-3">
                Proteção Patrimonial Ética
              </h3>
              <p className="text-xs text-[#a39c8e] leading-relaxed mb-6">
                Planejamento societário e segregação de riscos entre a atividade rural operacional e os imóveis históricos da família, prevenindo a perda irreversível de terras.
              </p>
              <ul className="space-y-2 text-xs text-[#bcb3a7]">
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37]">▪</span>
                  <span>Isolamento ético de passivos operacionais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37]">▪</span>
                  <span>Gestão preventiva de garantias cruzadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37]">▪</span>
                  <span>Transição geracional e governança familiar</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#202027] text-[11px] text-[#787164]">
              Estruturada estritamente em conformidade com as regras de boa-fé e sem simulações.
            </div>
          </div>
        </div>

        {/* Ethical Framework Notice */}
        <div className="p-6 bg-[#16161c] border border-[#d4af37]/20 rounded-sm">
          <p className="text-xs text-[#a8a194] leading-relaxed text-center max-w-4xl mx-auto">
            <span className="text-[#d4af37] font-semibold">Compromisso Ético e Técnico:</span> A NS Advocacia não comercializa promessas de "descontos de 90%", "anulação automática de dívidas" ou "blindagem absoluta". Toda negociação e defesa depende dos títulos firmados, da situação financeira comprovada e da receptividade legal perante o Poder Judiciário e os comitês bancários.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DebtRestructuring;
