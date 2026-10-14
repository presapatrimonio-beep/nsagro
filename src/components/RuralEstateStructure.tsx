import React from 'react';
import { Landmark, Shield, Users, Network, CheckCircle2, ArrowRight } from 'lucide-react';

interface RuralEstateStructureProps {
  onOpenContact: () => void;
}

export const RuralEstateStructure: React.FC<RuralEstateStructureProps> = ({ onOpenContact }) => {
  const pillars = [
    {
      title: 'Segregação entre Atividade Operacional e Terras Históricas',
      description:
        'Separação jurídica entre a pessoa jurídica que explora a lavoura (sujeita a intempéries de safra e dívidas de insumos) e o patrimônio fundiário familiar, evitando que oscilações operacionais comprometam as fazendas acumuladas ao longo de gerações.',
      icon: Shield,
    },
    {
      title: 'Holdings Agropecuárias e Governança Familiar',
      description:
        'Estruturação societária rural mediante acordos de sócios, cláusulas de incomunicabilidade, impenhorabilidade e inalienabilidade nas transmissões por doação com reserva de usufruto, prevenindo litígios sucessórios paralisantes.',
      icon: Users,
    },
    {
      title: 'Mitigação de Riscos de Aval e Garantias Cruzadas',
      description:
        'Mapeamento preventivo da contaminação do patrimônio pessoal dos herdeiros decorrente de avais e fianças concedidos sem limitação de responsabilidade, buscando a substituição paulatina de garantias pessoais por garantias reais proporcionais.',
      icon: Network,
    },
    {
      title: 'Impenhorabilidade da Pequena Propriedade Rural Familiar',
      description:
        'Enquadramento rigoroso do imóvel sob a proteção do artigo 5º, inciso XXVI, da Constituição Federal e jurisprudência consolidada do Superior Tribunal de Justiça (STJ), blindando legitimamente o módulo rural trabalhado pela entidade familiar.',
      icon: Landmark,
    },
  ];

  return (
    <section id="patrimonio-rural" className="py-24 lg:py-32 bg-[#090909] border-b border-[#1A1A1A] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD96A] font-semibold mb-3">
            <span className="w-8 h-[2px] bg-[#E6BE45]" />
            <span>ESTRUTURAÇÃO EMPRESARIAL & GOVERNANÇA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-tight mb-4">
            Patrimônio rural e estrutura societária: proteção legítima da terra
          </h2>

          <p className="text-base sm:text-lg text-[#C8C8C8] font-light leading-relaxed">
            No agronegócio, o patrimônio fundiário não é apenas um conjunto de matrículas imobiliárias — é o meio de subsistência e a história de famílias rurais. A assessoria da NS Advocacia examina as repercussões das garantias bancárias e dos avais sobre a sucessão e a perenidade dos negócios no campo.
          </p>
        </div>

        {/* 4 Architectural Columns / Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#050505] border border-[#1F1F1F] hover:border-[#E6BE45]/60 p-8 sm:p-10 rounded-[1px] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[1px] bg-[#151515] border border-[#E6BE45]/40 flex items-center justify-center text-[#FFD96A]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#FFD96A]">0{idx + 1}.</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#FFFFFF] font-normal mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-[#1C1C1C] flex items-center gap-2.5 text-[11px] font-mono text-[#FFD96A] uppercase tracking-wider font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#E6BE45]" />
                  <span>Análise de Conformidade Ética e Registral</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory Banner on Good Faith & Ethics */}
        <div className="bg-[#050505] border border-[#E6BE45]/40 p-8 sm:p-10 rounded-[1px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-[0_0_30px_rgba(230,190,69,0.15)]">
          <div className="max-w-3xl">
            <h4 className="font-serif text-2xl text-[#FFFFFF] mb-2 font-normal">
              Planejamento Patrimonial Preventivo vs. Fraude a Credores
            </h4>
            <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed">
              Toda e qualquer organização societária rural deve ser realizada de forma profilática, em momentos de solvência ou com observância estrita aos credores constituídos. A NS Advocacia atua exclusivamente sob a égide da boa-fé objetiva, repudiando expedientes ilegais ou de ocultação fraudulenta de bens.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs font-bold tracking-widest uppercase text-[#050505] bg-gradient-to-r from-[#FFD96A] via-[#E6BE45] to-[#B78B24] rounded-[1px] transition-all hover:brightness-115 active:scale-[0.98] shrink-0 cursor-pointer shadow-[0_0_20px_rgba(230,190,69,0.3)] whitespace-nowrap"
          >
            <span>CONSULTAR VIABILIDADE</span>
            <ArrowRight className="w-4 h-4 text-[#050505] stroke-[3]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RuralEstateStructure;
