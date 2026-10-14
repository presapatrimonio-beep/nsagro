import React from 'react';
import { Scale, FileText, ShieldCheck, ArrowRight } from 'lucide-react';
import contractImage from '../assets/images/agro_contratos_documental_1791945720132.jpg';

export const EditorialIntro: React.FC = () => {
  return (
    <section id="visao-geral" className="py-24 lg:py-32 bg-[#090909] border-b border-[#1A1A1A] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Full-Width Typographic Statement */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD96A] font-semibold mb-4">
            <span className="w-8 h-[2px] bg-[#E6BE45]" />
            <span>DIREITO BANCÁRIO APLICADO AO AGRONEGÓCIO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] font-normal leading-[1.12] tracking-tight">
            As operações financeiras do campo exigem{' '}
            <span className="italic font-light text-gold-gradient">análise jurídica contextualizada</span>{' '}
            à realidade de cada safra.
          </h2>
        </div>

        {/* Asymmetrical 2-Column Editorial Grid with Document Masterpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Deep Legal Text (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-base sm:text-lg text-[#D0D0D0] leading-relaxed font-light space-y-6">
              <p>
                O financiamento do agronegócio envolve instrumentos contratuais, garantias e obrigações que precisam ser examinados à luz da operação concreta. Ao contrário do crédito empresarial genérico, o crédito rural guarda conexão indissociável com o ciclo da terra, com as janelas pluviométricas e com a cotação internacional de commodities em moeda estrangeira.
              </p>
              <p>
                A análise jurídica conduzida pela <strong className="text-[#FFFFFF] font-medium">NS Advocacia</strong> considera a origem dos recursos contratados, a higidez das taxas pactuadas, o histórico da relação com o agente financeiro credor, a documentação formal disponível e os reflexos imediatos sobre a atividade produtiva e o patrimônio da família ou da empresa rural.
              </p>
              <p>
                O objetivo consiste em identificar questões juridicamente relevantes e avaliar alternativas compatíveis com os fatos, os documentos e a legislação aplicável — sem promessas ilusórias, sem fórmulas padronizadas e com rigor doutrinário estrito.
              </p>
            </div>

            {/* Editorial 3-Point Horizontal Strip with Gold Accents */}
            <div className="pt-8 border-t border-[#1F1F1F] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border-l-2 border-[#E6BE45] pl-4">
                <span className="font-serif text-base text-[#FFFFFF] font-medium block mb-1">
                  Equilíbrio Contratual
                </span>
                <p className="text-xs text-[#999999] leading-relaxed">
                  Confronto de encargos, juros e cláusulas resolutivas com os limites regulatórios do crédito rural.
                </p>
              </div>

              <div className="border-l-2 border-[#E6BE45] pl-4">
                <span className="font-serif text-base text-[#FFFFFF] font-medium block mb-1">
                  Higidez Documental
                </span>
                <p className="text-xs text-[#999999] leading-relaxed">
                  Exame de CPRs, cédulas de crédito e registros formais perante Cartórios de Registro de Imóveis.
                </p>
              </div>

              <div className="border-l-2 border-[#E6BE45] pl-4">
                <span className="font-serif text-base text-[#FFFFFF] font-medium block mb-1">
                  Patrimônio Rural
                </span>
                <p className="text-xs text-[#999999] leading-relaxed">
                  Avaliação da extensão de garantias fiduciárias, hipotecas e impenhorabilidade de sede familiar.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Document Photography with Gold Rim (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#E6BE45]/40 p-2 bg-[#050505] shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
              <img
                src={contractImage}
                alt="Documentos contratuais de crédito rural sob exame minucioso"
                className="w-full h-[480px] object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />

              {/* Architectural Institutional Caption */}
              <div className="absolute bottom-4 inset-x-4 p-5 bg-[#090909]/95 border-t border-[#E6BE45]/30 backdrop-blur-md">
                <span className="font-mono text-xs uppercase tracking-wider text-[#FFD96A] font-semibold block mb-1">
                  Auditoria de Instrumentos Financeiros
                </span>
                <p className="text-xs text-[#D0D0D0] font-light leading-snug">
                  A atuação jurídica fundamenta-se estritamente na prova documental e na realidade contratual verificada em cada operação.
                </p>
              </div>
            </div>

            {/* Pure Gold Accent Accent Lines */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#E6BE45] pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#E6BE45] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialIntro;
