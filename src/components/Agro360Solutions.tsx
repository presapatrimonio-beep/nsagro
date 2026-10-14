import React, { useState } from 'react';
import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import agroPanoramaImg from '../assets/images/agro_visao_360_panorama_1791996909101.jpg';

interface Agro360SolutionsProps {
  onOpenContact: () => void;
}

interface AreaDossier {
  id: string;
  numeral: string;
  axis: string;
  title: string;
  subtitle: string;
  strategicSummary: string;
  topics: string[];
  disclaimer?: string;
}

export const Agro360Solutions: React.FC<Agro360SolutionsProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  const areas: AreaDossier[] = [
    {
      id: 'bancario',
      numeral: '01',
      axis: 'Eixo Financeiro & Produtivo',
      title: 'Direito Rural e Bancário',
      subtitle: 'Estruturação de crédito, renegociação de dívidas e garantias da safra',
      strategicSummary:
        'A análise jurídica da atividade bancária rural assegura que o produtor mantenha sua capacidade produtiva diante de volatilidades de mercado, quebras climáticas ou oscilações de preços, examinando a legitimidade dos encargos e a higidez das garantias vinculadas.',
      topics: [
        'Crédito rural e financiamento agropecuário em linhas oficiais (Plano Safra) e recursos livres.',
        'Cédulas de Crédito Rural (CCR) e Cédulas de Produto Rural (CPR física e financeira).',
        'Revisão documental criteriosa de contratos bancários, indexadores e encargos incidentes.',
        'Renegociação técnica e alongamento de passivos bancários conforme o manual de crédito e a jurisprudência.',
        'Garantias vinculadas à atividade produtiva: penhor agrícola, aval e alienação fiduciária da terra.',
        'Defesa estratégica em execuções bancárias, medidas cautelares e busca e apreensão.',
        'Análise jurídica especializada de situações relacionadas à quebra ou frustração de safra, quando documentalmente aplicável.'
      ]
    },
    {
      id: 'tributario',
      numeral: '02',
      axis: 'Eixo Fiscal & Estrutural',
      title: 'Direito Tributário',
      subtitle: 'Segurança fiscal, passivos e estruturação da atividade agropecuária',
      strategicSummary:
        'A complexidade da tributação sobre o agronegócio exige exame meticuloso das obrigações fiscais da produção rural, evitando autuações desnecessárias e identificando alternativas legais para a gestão de contingências do produtor pessoa física ou jurídica.',
      disclaimer:
        'Trata-se de exame técnico das hipóteses e alternativas legais aplicáveis a cada caso concreto e documentação disponível, sem promessa de resultado automático.',
      topics: [
        'Análise de questões tributárias diretamente vinculadas à atividade rural e à cadeia produtiva do agronegócio.',
        'Obrigações fiscais do produtor rural (pessoa física e jurídica) e da empresa agropecuária.',
        'Impactos tributários sobre alienações, transmissões e operações imobiliárias com terras rurais.',
        'Mapeamento e gestão estratégica de contingências e passivos tributários conforme as normas vigentes.',
        'Reflexos fiscais e societários decorrentes de reorganizações patrimoniais e cisões de grupos familiares.',
        'Análise documental de notas fiscais, livros-caixa, cruzamentos digitais e operações rurais.'
      ]
    },
    {
      id: 'civel',
      numeral: '03',
      axis: 'Eixo Comercial & Contratual',
      title: 'Direito Cível e Empresarial',
      subtitle: 'Cadeia de fornecimento, relações comerciais e equilíbrio de contratos',
      strategicSummary:
        'A atividade do campo opera por meio de uma densa rede de contratos comerciais com tradings, revendas, agroindústrias e fornecedores de insumos químicos e maquinários. A proteção jurídica preventiva preserva o equilíbrio econômico-financeiro dos instrumentos bilaterais.',
      topics: [
        'Contratos comerciais de compra, venda e fornecimento de insumos agropecuários (fertilizantes, defensivos, sementes).',
        'Responsabilidade civil e contratual em operações agrícolas e distribuição da produção.',
        'Gestão jurídica de conflitos decorrentes de inadimplemento, atrasos de pagamento e cobranças no setor rural.',
        'Discussão e assessoria jurídica sobre descumprimento de prazos e entrega física de safras e insumos.',
        'Relações jurídicas com cooperativas, tradings multinacionais, revendas e indústrias de processamento.',
        'Elaboração e revisão preventiva de contratos agrários, minutas comerciais e instrumentos de cooperação rural.'
      ]
    },
    {
      id: 'imobiliario',
      numeral: '04',
      axis: 'Eixo Fundiário & Patrimonial',
      title: 'Direito Imobiliário e Patrimonial',
      subtitle: 'Segurança dominial da terra, governança rural e sucessão da família produtora',
      strategicSummary:
        'A terra é o ativo mais valioso e perene do produtor. Garantir a higidez registral, a solidez dos arrendamentos e a perenidade dos bens através de governança sucessória familiar estruturada é o pilar definitivo da estabilidade do negócio rural.',
      topics: [
        'Regularização fundiária, exame dominial histórico (cadeia vintenária) e segurança na titularidade da terra.',
        'Elaboração e auditoria de contratos agrários: arrendamento rural, parceria agrícola e cessão de pastagens.',
        'Proteção de garantias reais: análise crítica de hipotecas, alienações fiduciárias e averbações na matrícula.',
        'Planejamento sucessório para famílias produtoras rurais e desenho de governança geracional no campo.',
        'Estruturação societária de holdings agropecuárias e veículos de proteção patrimonial lícita.',
        'Análise jurídica estratégica na aquisição, alienação, permuta e conferência de imóveis rurais em capital.'
      ]
    }
  ];

  const currentArea = areas.find((a) => a.id === activeTab);

  return (
    <section
      id="solucoes-360"
      className="relative bg-[#050505] text-[#FFFFFF] border-t border-white/[0.08] overflow-hidden"
    >
      {/* 1. Backdrop Fotográfico Cinematográfico Integrado (sem molduras ou cartões) */}
      <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] overflow-hidden">
        <img
          src={agroPanoramaImg}
          alt="Paisagem e sede de complexo agropecuário brasileiro ao entardecer"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Gradients cinematográficos fundindo a foto diretamente no preto obsidiana */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />

        {/* Título e Identificador Editorial sobre a imagem integrada */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-12 lg:px-16 pb-12 sm:pb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-[#E6BE45]" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E6BE45]">
                NS Advocacia • Visão Jurídica Integrada do Agronegócio
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-white font-normal tracking-tight leading-[1.08] max-w-5xl">
              Uma visão 360° sobre o patrimônio, a operação e o{' '}
              <span className="italic text-[#E6BE45]">futuro rural</span>.
            </h2>
          </div>
        </div>
      </div>

      {/* 2. Manifesto Editorial em Duas Colunas Assimétricas (sem caixas) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-8 pb-16 sm:pb-20 border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline">
          <div className="lg:col-span-6">
            <p className="text-lg sm:text-xl lg:text-2xl text-[#E8E8E8] font-light leading-relaxed font-serif">
              A atividade rural envolve decisões que ultrapassam o crédito bancário. Questões contratuais, tributárias, cíveis e imobiliárias podem influenciar a continuidade produtiva, a organização patrimonial e a segurança jurídica do produtor.
            </p>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed">
              A NS Advocacia propõe uma análise jurídica integrada, considerando as particularidades de cada operação, os documentos disponíveis, os riscos identificados e os objetivos do produtor rural ou da empresa do agronegócio.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Navegação Arquitetônica Superior (Abandona cartões; pura tipografia e linhas finas) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-8 border-b border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Compass className="w-4 h-4 text-[#E6BE45]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#909090]">
              Arquitetura dos 4 Quadrantes Estratégicos
            </span>
          </div>

          {/* Seletor Estilo Editorial / Tabular */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`text-xs font-mono uppercase tracking-wider px-3.5 py-2 transition-colors duration-200 ${
                activeTab === 'overview'
                  ? 'text-[#E6BE45] border-b-2 border-[#E6BE45]'
                  : 'text-[#808080] hover:text-white border-b-2 border-transparent'
              }`}
            >
              Visão Sistêmica 360°
            </button>
            {areas.map((area) => (
              <button
                key={area.id}
                onClick={() => setActiveTab(area.id)}
                className={`text-xs font-mono uppercase tracking-wider px-3.5 py-2 transition-colors duration-200 ${
                  activeTab === area.id
                    ? 'text-[#E6BE45] border-b-2 border-[#E6BE45]'
                    : 'text-[#808080] hover:text-white border-b-2 border-transparent'
                }`}
              >
                {area.numeral} · {area.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Corpo Principal: Transição entre Visão Sistêmica e Dossiês Específicos */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-24">
        {activeTab === 'overview' ? (
          /* ==============================================================
             VISÃO SISTÊMICA 360° — Diagrama Arquitetônico e Editorial
             Sem caixas repetitivas, sem quadrados com ícones, sem PowerPoint
             ============================================================== */
          <div>
            {/* Núcleo Central: O Produtor Rural como Âncora Estrutural */}
            <div className="py-12 lg:py-16 mb-20 border-b border-white/[0.08]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#E6BE45] mb-3">
                    Núcleo Estratégico da Atividade
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-none mb-4">
                    PRODUTOR RURAL
                  </h3>
                  <div className="text-sm font-mono tracking-widest text-[#E6BE45] uppercase">
                    Patrimônio • Produção • Contratos • Continuidade
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-lg sm:text-xl text-[#C0C0C0] font-light leading-relaxed mb-6 font-serif">
                    O centro de gravidade de todas as repercussões jurídicas no agronegócio. Uma alteração em um contrato de custeio bancário não é um fato isolado: reverbera na higidez da terra dada em garantia, nas obrigações fiscais da fazenda e nos vínculos mercantis com tradings e cooperativas.
                  </p>
                  <p className="text-sm sm:text-base text-[#808080] font-light leading-relaxed">
                    A NS Advocacia opera a partir desse centro convergente, alinhando a defesa judicial, a repactuação financeira e a governança da propriedade rural para proteger o patrimônio e a continuidade geracional da família produtora.
                  </p>
                </div>
              </div>
            </div>

            {/* Os 4 Eixos da Atividade dispostos em Colunas Editoriais Amplas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              {areas.map((area) => (
                <div
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className="group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Grande numeral estilizado editorial */}
                    <div className="text-4xl sm:text-5xl font-serif text-[#E6BE45]/40 group-hover:text-[#E6BE45] transition-colors duration-300 mb-4 font-light">
                      {area.numeral}
                    </div>

                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#808080] mb-2">
                      {area.axis}
                    </div>

                    <h4 className="text-2xl font-serif text-white tracking-tight mb-3 group-hover:text-[#E6BE45] transition-colors duration-300">
                      {area.title}
                    </h4>

                    <p className="text-sm text-[#A0A0A0] font-light leading-relaxed mb-6">
                      {area.strategicSummary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#E6BE45] uppercase tracking-wider">
                      Examinar Dossiê Completo
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#E6BE45] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ==============================================================
             DOSSIÊ ESPECÍFICO — Espalhado Editorial de Alta Hierarquia
             Tipografia imponente, lista editorial corrida, zero caixas
             ============================================================== */
          currentArea && (
            <div className="transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Coluna Esquerda: Título, Eixo, Resumo e Aviso */}
                <div className="lg:col-span-5">
                  <div className="sticky top-28 space-y-8">
                    <div>
                      <div className="text-6xl sm:text-7xl lg:text-8xl font-serif text-[#E6BE45]/30 leading-none mb-4 font-light">
                        {currentArea.numeral}
                      </div>

                      <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#E6BE45] mb-3">
                        {currentArea.axis}
                      </div>

                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-[1.1] mb-4">
                        {currentArea.title}
                      </h3>

                      <p className="text-base font-serif italic text-[#D8AD36] leading-relaxed mb-6">
                        {currentArea.subtitle}
                      </p>

                      <p className="text-base sm:text-lg text-[#B0B0B0] font-light leading-relaxed">
                        {currentArea.strategicSummary}
                      </p>
                    </div>

                    {currentArea.disclaimer && (
                      <div className="pt-6 border-t border-white/[0.08]">
                        <p className="text-xs text-[#707070] font-light leading-relaxed">
                          <strong className="text-[#A0A0A0] uppercase font-mono tracking-wider block mb-1">
                            Critério Técnico Institucional:
                          </strong>
                          {currentArea.disclaimer}
                        </p>
                      </div>
                    )}

                    <div className="pt-4">
                      <button
                        onClick={() => setActiveTab('overview')}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#808080] hover:text-[#E6BE45] transition-colors"
                      >
                        ← Voltar para a Visão Sistêmica 360°
                      </button>
                    </div>
                  </div>
                </div>

                {/* Coluna Direita: Matérias e Tópicos Técnicos Editoriais */}
                <div className="lg:col-span-7">
                  <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#808080] pb-4 mb-6 border-b border-white/[0.08]">
                    Matérias de Avaliação & Atuação Especializada
                  </div>

                  <div className="space-y-8">
                    {currentArea.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="pb-8 border-b border-white/[0.06] last:border-b-0 flex items-start gap-6 group"
                      >
                        <span className="text-xs font-mono text-[#E6BE45] pt-1">
                          {currentArea.numeral}.{idx + 1}
                        </span>
                        <div className="flex-1">
                          <p className="text-base sm:text-lg text-[#E0E0E0] font-light leading-relaxed group-hover:text-white transition-colors duration-200">
                            {topic}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* 5. Bloco de Síntese e Chamada Institucional (Totalmente integrado, sem cartões soltos) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-16 pb-24 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight leading-snug mb-4">
              Uma visão integrada que conecta crédito, conformidade fiscal, segurança contratual e proteção da terra para garantir a continuidade da empresa rural.
            </h3>
            <p className="text-sm sm:text-base text-[#909090] font-light leading-relaxed max-w-3xl mb-6">
              A atuação isolada diante de passivos ou execuções costuma gerar desequilíbrios em outras frentes da fazenda. A integração multidisciplinar assegura decisões juridicamente seguras e economicamente sustentáveis.
            </p>

            {/* Aviso Ético OAB */}
            <div className="flex items-start gap-3 text-xs text-[#707070] font-light max-w-3xl leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-[#E6BE45] flex-shrink-0 mt-0.5" />
              <span>
                <strong>Aviso Ético Institucional (OAB):</strong> As análises jurídicas dependem do exame individualizado dos títulos de crédito, certidões e contratos da operação rural. Não constituem promessa de resultado pecuniário nem garantia de deferimento de medidas judiciais.
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-start lg:items-end">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E6BE45] hover:bg-[#FFD96A] text-[#050505] font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-[0_0_30px_rgba(230,190,69,0.2)] group"
            >
              <span>Solicitar Análise Integrada 360°</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <span className="text-xs font-mono text-[#808080] tracking-wider uppercase">
              Atendimento confidencial a produtores rurais
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agro360Solutions;
