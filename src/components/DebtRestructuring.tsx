import React from 'react';
import { Handshake, Scale, Layers } from 'lucide-react';

export const DebtRestructuring: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#090909] border-b border-[#1A1A1A] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD96A] font-semibold mb-3">
            <span className="w-8 h-[2px] bg-[#E6BE45]" />
            <span>ESTRATÉGIA DE REPACTUAÇÃO BANCÁRIA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-tight mb-4">
            Reestruturação de passivos bancários e negociação estratégica
          </h2>

          <p className="text-base sm:text-lg text-[#C8C8C8] font-light leading-relaxed">
            Em cenários de endividamento rural, a solução raras vezes reside em litigar indiscriminadamente ou, no outro extremo, aceitar refinanciamentos que multiplicam a exposição patrimonial. A intervenção técnica busca a convergência entre o ciclo econômico da lavoura e as vias jurídicas cabíveis.
          </p>
        </div>

        {/* 3 Strategic Tracks (Extrajudicial vs. Contenciosa vs. Patrimonial) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Track 1 */}
          <div className="bg-[#050505] border border-[#1F1F1F] hover:border-[#E6BE45]/60 p-8 rounded-[1px] flex flex-col justify-between transition-colors duration-300">
            <div>
              <div className="flex items-center gap-2.5 text-[#FFD96A] text-xs font-mono uppercase tracking-widest font-semibold mb-4">
                <Handshake className="w-4 h-4" />
                <span>Via Extrajudicial</span>
              </div>
              <h3 className="font-serif text-2xl text-[#FFFFFF] font-medium mb-4">
                Negociação Direta & Alongamento
              </h3>
              <p className="text-xs sm:text-sm text-[#999999] leading-relaxed mb-6 font-light">
                Construção de propostas de pagamento compatíveis com a estimativa de safras futuras, fundamentadas em laudos de capacidade de pagamento e histórico de cumprimento.
              </p>
              <ul className="space-y-2.5 text-xs text-[#C8C8C8]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E6BE45] font-bold">▪</span>
                  <span>Adequação do fluxo de caixa e carências sazonais</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E6BE45] font-bold">▪</span>
                  <span>Substituição ou liberação de garantias em excesso</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E6BE45] font-bold">▪</span>
                  <span>Aplicação administrativa de regras do MCR</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#1C1C1C] text-[11px] text-[#777777] font-light">
              Não assegura aceitação obrigatória pela instituição credora, salvo direito líquido de prorrogação.
            </div>
          </div>

          {/* Track 2 */}
          <div className="bg-[#050505] border border-[#1F1F1F] hover:border-[#E6BE45]/60 p-8 rounded-[1px] flex flex-col justify-between transition-colors duration-300">
            <div>
              <div className="flex items-center gap-2.5 text-[#FFD96A] text-xs font-mono uppercase tracking-widest font-semibold mb-4">
                <Scale className="w-4 h-4" />
                <span>Via Contenciosa</span>
              </div>
              <h3 className="font-serif text-2xl text-[#FFFFFF] font-medium mb-4">
                Defesa Judicial Estratégica
              </h3>
              <p className="text-xs sm:text-sm text-[#999999] leading-relaxed mb-6 font-light">
                Defesa em execuções de títulos bancários para conter penhoras açodadas, impugnar cálculos incorretos e tutelar bens de exploração econômica indispensável.
              </p>
              <ul className="space-y-2.5 text-xs text-[#C8C8C8]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E6BE45] font-bold">▪</span>
                  <span>Embargos à execução e arguição de nulidades</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E6BE45] font-bold">▪</span>
                  <span>Arguição de impenhorabilidade de sede familiar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E6BE45] font-bold">▪</span>
                  <span>Questionamento de encargos manifestamente ilegais</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#1C1C1C] text-[11px] text-[#777777] font-light">
              Respeito rigoroso aos requisitos legais de probabilidade do direito e perigo na demora.
            </div>
          </div>

          {/* Track 3 */}
          <div className="bg-[#050505] border border-[#1F1F1F] hover:border-[#E6BE45]/60 p-8 rounded-[1px] flex flex-col justify-between transition-colors duration-300">
            <div>
              <div className="flex items-center gap-2.5 text-[#FFD96A] text-xs font-mono uppercase tracking-widest font-semibold mb-4">
                <Layers className="w-4 h-4" />
                <span>Via Patrimonial</span>
              </div>
              <h3 className="font-serif text-2xl text-[#FFFFFF] font-medium mb-4">
                Proteção Patrimonial Ética
              </h3>
              <p className="text-xs sm:text-sm text-[#999999] leading-relaxed mb-6 font-light">
                Planejamento societário e segregação de riscos entre a atividade rural operacional e os imóveis históricos da família, prevenindo a perda irreversível de terras.
              </p>
              <ul className="space-y-2.5 text-xs text-[#C8C8C8]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E6BE45] font-bold">▪</span>
                  <span>Isolamento ético de passivos operacionais</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E6BE45] font-bold">▪</span>
                  <span>Gestão preventiva de garantias cruzadas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E6BE45] font-bold">▪</span>
                  <span>Transição geracional e governança familiar</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#1C1C1C] text-[11px] text-[#777777] font-light">
              Estruturada estritamente em conformidade com as regras de boa-fé e sem simulações.
            </div>
          </div>
        </div>

        {/* Ethical Framework Notice */}
        <div className="p-6 sm:p-8 bg-[#050505] border border-[#E6BE45]/30 rounded-[1px]">
          <p className="text-xs sm:text-sm text-[#C0C0C0] leading-relaxed text-center max-w-4xl mx-auto font-light">
            <strong className="text-[#FFD96A]">Compromisso Ético e Técnico:</strong> A NS Advocacia não comercializa promessas de "descontos de 90%", "anulação automática de dívidas" ou "blindagem absoluta". Toda negociação e defesa depende dos títulos firmados, da situação financeira comprovada e da receptividade legal perante o Poder Judiciário e os comitês bancários.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DebtRestructuring;
