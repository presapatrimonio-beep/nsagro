import React from 'react';
import { CheckSquare } from 'lucide-react';
import harvestImage from '../assets/images/agro_maquinas_colheita_1791945719211.jpg';

export const LitigationSection: React.FC = () => {
  const criteria = [
    { title: 'Natureza Formal do Título', desc: 'Aferição dos requisitos de certeza, liquidez e exigibilidade do título (art. 783 do CPC e legislação extravagante).' },
    { title: 'Cláusulas e Encargos Efetivos', desc: 'Identificação de abusividades flagrantes que autorizem a suspensão liminar de exigibilidade de encargos.' },
    { title: 'Quadro Probatório Disponível', desc: 'Existência de extratos analíticos, relatórios agronômicos e notas fiscais hábeis a instruir o feito.' },
    { title: 'Prazos Processuais Peremptórios', desc: 'Atuação célere dentro dos marcos de 15 dias para defesas de urgência e embargos à execução.' },
    { title: 'Garantias em Risco Imediato', desc: 'Avaliação de procedimentos de leilão extrajudicial ou atos expropriatórios em vias de consumação.' },
    { title: 'Preservação da Atividade Produtiva', desc: 'Demonstração em juízo de que o maquinário ou terra objeto de constrição é indispensável à safra.' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#050505] border-b border-[#1A1A1A] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Litigation Strategy (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD96A] font-semibold mb-3">
              <span className="w-8 h-[2px] bg-[#E6BE45]" />
              <span>ATUAÇÃO PROCESSUAL ESTRATÉGICA</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-tight mb-6">
              Contencioso judicial fundamentado e medidas de urgência
            </h2>

            <p className="text-base sm:text-lg text-[#C8C8C8] font-light leading-relaxed mb-6">
              A judicialização de controvérsias bancárias no agronegócio não deve ser adotada como artifício protelatório temerário, mas sim como instrumento legítimo e técnico para restabelecer o equilíbrio contratual e fazer cessar atos ilegais de expropriação.
            </p>

            <p className="text-sm text-[#9E9E9E] font-light leading-relaxed mb-8">
              A escolha da medida judicial cabível decorre de uma ponderação estrita de variáveis jurídicas, assegurando que o cliente compreenda os riscos de sucumbência, os custos processuais e a probabilidade de êxito em cada instância recursal.
            </p>

            {/* Criteria Grid with Gold Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {criteria.map((item, index) => (
                <div key={index} className="p-4 bg-[#090909] border border-[#1F1F1F] hover:border-[#E6BE45]/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FFFFFF] mb-1.5">
                    <CheckSquare className="w-4 h-4 text-[#E6BE45] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[#999999] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image with Harvest Machinery & Rigorous Framing (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#E6BE45]/40 p-2 bg-[#090909] shadow-[0_10px_40px_rgba(0,0,0,0.85)]">
              <img
                src={harvestImage}
                alt="Colheitadeiras em operação agrícola — proteção da atividade produtiva"
                className="w-full h-[500px] object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

              <div className="absolute bottom-4 inset-x-4 p-5 bg-[#090909]/95 border-t border-[#E6BE45]/30 backdrop-blur-md">
                <span className="block text-xs font-mono tracking-wider uppercase text-[#FFD96A] font-semibold mb-1">
                  Princípio da Continuidade da Empresa Rural
                </span>
                <p className="text-xs text-[#C8C8C8] font-light leading-relaxed">
                  A atividade agropecuária cumpre relevante função social e econômica. A atuação jurídica busca resguardar os instrumentos de produção contra constrições ilegais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LitigationSection;
