import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RuralEstateStructureProps {
  onOpenContact: () => void;
}

export const RuralEstateStructure: React.FC<RuralEstateStructureProps> = ({ onOpenContact }) => {
  const pillars = [
    {
      number: '01',
      title: 'Segregação entre Atividade Operacional e Terras Históricas',
      description:
        'Separação jurídica entre a pessoa jurídica que explora a lavoura (sujeita a intempéries de safra e dívidas de insumos) e o patrimônio fundiário familiar, evitando que oscilações operacionais comprometam as fazendas acumuladas ao longo de gerações.',
    },
    {
      number: '02',
      title: 'Holdings Agropecuárias e Governança Familiar',
      description:
        'Estruturação societária rural mediante acordos de sócios, cláusulas de incomunicabilidade, impenhorabilidade e inalienabilidade nas transmissões por doação com reserva de usufruto, prevenindo litígios sucessórios paralisantes.',
    },
    {
      number: '03',
      title: 'Mitigação de Riscos de Aval e Garantias Cruzadas',
      description:
        'Mapeamento preventivo da contaminação do patrimônio pessoal dos herdeiros decorrente de avais e fianças concedidos sem limitação de responsabilidade, buscando a substituição paulatina de garantias pessoais por garantias reais proporcionais.',
    },
    {
      number: '04',
      title: 'Impenhorabilidade da Pequena Propriedade Rural Familiar',
      description:
        'Enquadramento rigoroso do imóvel sob a proteção do artigo 5º, inciso XXVI, da Constituição Federal e jurisprudência consolidada do Superior Tribunal de Justiça (STJ), blindando legitimamente o módulo rural trabalhado pela entidade familiar.',
    },
  ];

  return (
    <section id="patrimonio-rural" className="py-28 lg:py-36 bg-[#090909] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8AD36] font-semibold block mb-4">
            ESTRUTURAÇÃO EMPRESARIAL & GOVERNANÇA
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-normal leading-tight mb-6">
            Patrimônio rural e estrutura societária: proteção legítima da terra
          </h2>

          <p className="text-lg text-[#B8B8B8] font-light leading-relaxed">
            No agronegócio, o patrimônio fundiário não é apenas um conjunto de matrículas imobiliárias — é o meio de subsistência e a história de famílias rurais. A assessoria da NS Advocacia examina as repercussões das garantias bancárias e dos avais sobre a sucessão e a perenidade dos negócios no campo.
          </p>
        </div>

        {/* 4 Pillars — Open Typographic Editorial Flow directly on the background (No Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 pb-20 border-b border-white/[0.08]">
          {pillars.map((item, idx) => (
            <div key={idx} className="space-y-4">
              <span className="font-mono text-sm font-semibold tracking-wider text-[#D8AD36] block">
                {item.number}.
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] font-normal leading-snug">
                {item.title}
              </h3>
              <p className="text-base text-[#B8B8B8] font-light leading-relaxed pt-1">
                {item.description}
              </p>
              <div className="pt-2 text-xs font-mono uppercase tracking-wider text-[#777777]">
                Análise de conformidade ética e registral
              </div>
            </div>
          ))}
        </div>

        {/* Advisory on Good Faith & Ethics — Open Editorial Statement */}
        <div className="pt-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#D8AD36] font-semibold block">
              DIRETRIZ DA BOA-FÉ OBJETIVA
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] font-normal">
              Planejamento Patrimonial Preventivo vs. Fraude a Credores
            </h4>
            <p className="text-base text-[#B8B8B8] font-light leading-relaxed">
              Toda e qualquer organização societária rural deve ser realizada de forma profilática, em momentos de solvência ou com observância estrita aos credores constituídos. A NS Advocacia atua exclusivamente sob a égide da boa-fé objetiva, repudiando expedientes ilegais ou de ocultação fraudulenta de bens.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-3 px-8 py-4 text-[13px] font-semibold tracking-wider uppercase text-[#050505] bg-[#D8AD36] hover:bg-[#F3D36A] transition-colors cursor-pointer shrink-0"
          >
            <span>Consultar Especialistas</span>
            <ArrowRight className="w-4 h-4 text-[#050505]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RuralEstateStructure;
