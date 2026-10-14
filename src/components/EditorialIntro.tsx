import React from 'react';
import { ShieldCheck, Scale, FileText } from 'lucide-react';
import contractImage from '../assets/images/agro_contratos_documental_1791945720132.jpg';

export const EditorialIntro: React.FC = () => {
  return (
    <section id="visao-geral" className="py-20 lg:py-28 bg-[#0e0e11] border-b border-[#212126] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Column - Narrative & Positioning (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37] mb-4">
              <span>Posicionamento Estratégico</span>
              <span aria-hidden="true" className="text-[#8e6817]">·</span>
              <span>Análise Individualizada</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5eedc] font-normal leading-tight mb-8">
              Por que as operações bancárias no agronegócio exigem exame contextualizado
            </h2>

            <div className="space-y-6 text-[#c5bcb0] text-base leading-relaxed font-light">
              <p>
                O financiamento do agronegócio envolve instrumentos contratuais, garantias e obrigações que precisam ser examinados à luz da operação concreta. Ao contrário de linhas ordinárias de crédito comercial, o crédito rural guarda íntima conexão com a terra, com as janelas de plantio e colheita e com a volatilidade inerente aos mercados de commodities.
              </p>
              <p>
                A análise jurídica desenvolvida pela <span className="text-[#f5eedc] font-medium">NS Advocacia</span> considera a origem dos recursos contratados, a regularidade dos encargos estipulados, o histórico da relação com o agente financeiro, a higidez da documentação formal e os reflexos imediatos sobre a atividade produtiva e o patrimônio da família ou da empresa rural.
              </p>
              <p>
                O objetivo primordial consiste em identificar questões juridicamente relevantes e avaliar alternativas compatíveis com os fatos, os documentos e a legislação aplicável — sem modelos padronizados ou soluções genéricas.
              </p>
            </div>

            {/* Editorial 3-point breakdown */}
            <div className="mt-10 pt-8 border-t border-[#26262e] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Scale className="w-4 h-4" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#edd387]">Equilíbrio Contratual</span>
                </div>
                <p className="text-xs text-[#9d9587] leading-relaxed">
                  Avaliação técnica de juros, encargos moratórios, cláusulas resolutivas e indexadores de mercado.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <FileText className="w-4 h-4" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#edd387]">Higidez Formal</span>
                </div>
                <p className="text-xs text-[#9d9587] leading-relaxed">
                  Conformidade de CPRs, cédulas de crédito e registros em cartório de registro de imóveis.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#edd387]">Patrimônio Rural</span>
                </div>
                <p className="text-xs text-[#9d9587] leading-relaxed">
                  Exame da extensão das garantias fiduciárias e hipotecárias sobre imóveis e penhor da safra.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Column - Document Documentary Photography with Gold Hairline Trim (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#d4af37]/25 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
              <img
                src={contractImage}
                alt="Documentos contratuais de crédito rural e CPR sob exame jurídico"
                className="w-full h-[440px] object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/20 to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-[#0e0e11]/90 backdrop-blur-sm border-t border-[#d4af37]/20">
                <span className="block text-[11px] font-mono tracking-wider uppercase text-[#d4af37] mb-1">
                  Exame de Instrumentos Financeiros
                </span>
                <p className="text-xs text-[#d3cbbe] leading-normal font-light">
                  A atuação jurídica fundamenta-se estritamente na prova documental e na realidade contratual verificada em cada operação.
                </p>
              </div>
            </div>

            {/* Decorative Gold Corner Accent */}
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialIntro;
