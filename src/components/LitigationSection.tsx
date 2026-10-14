import React from 'react';
import harvestImage from '../assets/images/agro_maquinas_colheita_1791945719211.jpg';

export const LitigationSection: React.FC = () => {
  const criteria = [
    {
      title: 'Natureza Formal do Título Executivo',
      desc: 'Aferição rigorosa dos requisitos de certeza, liquidez e exigibilidade do título (art. 783 do CPC e legislação especial de títulos rurais).',
    },
    {
      title: 'Cláusulas e Encargos Moratórios',
      desc: 'Identificação de abusividades flagrantes que autorizem a suspensão liminar de exigibilidade de encargos e tarifas não pactuadas.',
    },
    {
      title: 'Quadro Probatório Disponível',
      desc: 'Existência de extratos analíticos, relatórios agronômicos de safra e notas fiscais hábeis a instruir com precisão a peça de defesa.',
    },
    {
      title: 'Prazos Processuais Peremptórios',
      desc: 'Atuação célere dentro dos marcos de 15 dias para defesas de urgência, embargos à execução e recursos aos tribunais.',
    },
    {
      title: 'Garantias em Risco Imediato',
      desc: 'Avaliação de procedimentos de leilão extrajudicial ou atos expropriatórios em vias de consumação sobre imóveis produtivos.',
    },
    {
      title: 'Preservação da Atividade Produtiva',
      desc: 'Demonstração inequívoca em juízo de que o maquinário ou terra objeto de constrição é indispensável à continuidade da safra.',
    },
  ];

  return (
    <section className="py-28 lg:py-36 bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Litigation Strategy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8AD36] font-semibold block mb-4">
                ATUAÇÃO PROCESSUAL ESTRATÉGICA
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-normal leading-tight mb-6">
                Contencioso judicial fundamentado e medidas de urgência
              </h2>

              <p className="text-lg text-[#B8B8B8] font-light leading-relaxed">
                A judicialização de controvérsias bancárias no agronegócio não deve ser adotada como artifício protelatório temerário, mas sim como instrumento legítimo e técnico para restabelecer o equilíbrio contratual e fazer cessar atos ilegais de expropriação.
              </p>
            </div>

            <p className="text-base text-[#888888] font-light leading-relaxed">
              A escolha da medida judicial cabível decorre de uma ponderação estrita de variáveis jurídicas, assegurando que o produtor compreenda com total transparência os riscos de sucumbência, os custos processuais e a probabilidade de êxito em cada instância recursal.
            </p>

            {/* Criteria List — Clean Typographic Flow directly on background (No Boxed Cards) */}
            <div className="pt-8 border-t border-white/[0.08] divide-y divide-white/[0.08]">
              {criteria.map((item, index) => (
                <div key={index} className="py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="font-mono text-xs text-[#D8AD36] font-semibold shrink-0">
                    0{index + 1}.
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-medium text-[#FFFFFF] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#B8B8B8] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Photographic Scale (5 cols) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <div className="overflow-hidden">
              <img
                src={harvestImage}
                alt="Colheitadeiras em operação agrícola — proteção da atividade produtiva"
                className="w-full h-[520px] lg:h-[620px] object-cover object-center brightness-90 contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#D8AD36] font-semibold block mb-1">
                Princípio da Continuidade da Empresa Rural
              </span>
              <p className="text-xs text-[#777777] font-light leading-relaxed">
                A atividade agropecuária cumpre relevante função social e econômica. A atuação jurídica busca resguardar os instrumentos de produção contra constrições ilegais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LitigationSection;
