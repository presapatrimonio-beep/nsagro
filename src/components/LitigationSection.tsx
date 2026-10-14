import React from 'react';
import { ShieldCheck, Scale, AlertOctagon, CheckSquare } from 'lucide-react';
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
    <section className="py-20 lg:py-28 bg-[#0c0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Litigation Strategy (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37] mb-3">
              <span>Atuação Processual</span>
              <span aria-hidden="true" className="text-[#8e6817]">·</span>
              <span>Defesa Técnica Qualificada</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5eedc] font-normal leading-tight mb-5">
              Contencioso judicial fundamentado e medidas de urgência
            </h2>

            <p className="text-base text-[#bcb3a7] font-light leading-relaxed mb-6">
              A judicialização de controvérsias bancárias no agronegócio não deve ser adotada como artifício protelatório temerário, mas sim como instrumento legítimo e técnico para restabelecer o equilíbrio contratual e fazer cessar atos ilegais de expropriação.
            </p>

            <p className="text-sm text-[#9b9487] font-light leading-relaxed mb-8">
              A escolha da medida judicial cabível decorre de uma ponderação estrita de variáveis jurídicas, assegurando que o cliente compreenda os riscos de sucumbência, os custos processuais e a probabilidade de êxito em cada instância recursal.
            </p>

            {/* Criteria Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {criteria.map((item, index) => (
                <div key={index} className="p-4 bg-[#121215] border border-[#202026] rounded-sm">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#f5eedc] mb-1">
                    <CheckSquare className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-[#8e877a] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image with Harvest Machinery & Rigorous Framing (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#d4af37]/25 shadow-2xl">
              <img
                src={harvestImage}
                alt="Colheitadeiras em operação agrícola — proteção da atividade produtiva"
                className="w-full h-[460px] object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/30 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6 bg-[#0e0e11]/95 backdrop-blur-md border-t border-[#d4af37]/20">
                <span className="block text-[11px] font-mono tracking-wider uppercase text-[#d4af37] mb-1">
                  Princípio da Continuidade da Empresa Rural
                </span>
                <p className="text-xs text-[#bcb3a7] font-light leading-relaxed">
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
