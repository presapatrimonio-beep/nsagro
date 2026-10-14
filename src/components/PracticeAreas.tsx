import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PracticeAreaItem {
  id: string;
  letter: string;
  title: string;
  subtitle: string;
  summary: string;
  themes: string[];
  instruments: string[];
  scopeNote: string;
}

const practiceData: PracticeAreaItem[] = [
  {
    id: 'credito-rural',
    letter: 'A',
    title: 'Crédito Rural e Contratos Bancários',
    subtitle: 'Exame de instrumentos, encargos e obrigações contratuais',
    summary:
      'Avaliação da higidez jurídica de financiamentos agrícolas, custeio, investimento e comercialização, confrontando as taxas praticadas com os limites legais e regulatórios do Manual de Crédito Rural (MCR/Bacen).',
    themes: [
      'Análise de contratos de financiamento rural (custeio, investimento, estocagem)',
      'Cédulas de Produto Rural (CPR física e financeira)',
      'Cédulas de Crédito Bancário (CCB) e Cédulas de Crédito Rural (CCR)',
      'Exame de encargos moratórios, taxas de juros remuneratórios e TAC/tarifas',
      'Cláusulas resolutivas expressas e condições de vencimento antecipado',
      'Conformidade com normas do Banco Central do Brasil e Conselho Monetário Nacional',
    ],
    instruments: ['CCR / CPR / CCB', 'Contratos de Finame / BNDES', 'Contratos de Barter'],
    scopeNote: 'A viabilidade de discussão revisional depende da análise formal do instrumento e da comprovação de abusividade frente à legislação do crédito rural.',
  },
  {
    id: 'reestruturacao',
    letter: 'B',
    title: 'Endividamento e Reestruturação de Passivos',
    subtitle: 'Diagnóstico jurídico global e repactuação de operações',
    summary:
      'Mapeamento completo do passivo financeiro da atividade agropecuária, identificando a cronologia de vencimentos, grau de exigibilidade, garantias comprometidas e viabilidade de reorganização extrajudicial ou judicial.',
    themes: [
      'Diagnóstico jurídico do passivo bancário e de insumos',
      'Organização documental das operações vencidas e vincendas',
      'Avaliação técnica do cabimento de prorrogação com base no MCR 2.6.4',
      'Mediação e negociação direta de repactuação com instituições financeiras',
      'Planejamento de cronograma de pagamento alinhado às safras futuras',
      'Proteção do fluxo produtivo contra medidas de asfixia financeira',
    ],
    instruments: ['Acordos de Alongamento de Dívida', 'Termos de Confissão e Novação', 'Planos de Liquidação Safra'],
    scopeNote: 'Negociações bancárias dependem do aceite da instituição financeira credora ou do preenchimento formal dos requisitos legais para prorrogação compulsória.',
  },
  {
    id: 'contencioso',
    letter: 'C',
    title: 'Contencioso Bancário Estratégico',
    subtitle: 'Defesa em execuções de títulos e medidas judiciais cabíveis',
    summary:
      'Atuação processual técnica e especializada na defesa dos direitos do produtor rural e empresas do agro em ações executivas, pedidos de busca e apreensão e litígios bancários complexos.',
    themes: [
      'Defesa em Execuções de Título Extrajudicial bancárias e de tradings',
      'Embargos à Execução e Ações Anulatórias de garantias',
      'Pedidos de tutela de urgência para suspensão de atos constritivos, quando cabíveis',
      'Discussão sobre liquidez, certeza e exigibilidade de CPRs e títulos vinculados',
      'Defesa em ações de reintegração de posse decorrentes de alienação fiduciária',
      'Contestação de laudos periciais de avaliação de imóveis e maquinários',
    ],
    instruments: ['Embargos do Devedor', 'Exceções de Pré-Executividade', 'Tutelas Cautelares de Urgência'],
    scopeNote: 'A concessão de liminares ou tutelas de urgência depende da comprovação do perigo da demora e da probabilidade do direito perante o Poder Judiciário.',
  },
  {
    id: 'garantias',
    letter: 'D',
    title: 'Garantias e Patrimônio Rural',
    subtitle: 'Exame de gravames, alienação fiduciária e impenhorabilidade',
    summary:
      'Diagnóstico aprofundado dos vínculos reais e pessoais incidentes sobre terras, lavouras e maquinários, avaliando a regularidade de notificações cartorárias e a proteção da pequena propriedade rural familiar.',
    themes: [
      'Alienação fiduciária de imóveis rurais (Lei 9.514/97) e procedimentos de leilão',
      'Hipoteca cedular e tradicional sobre propriedades agropecuárias',
      'Penhor de safra, grãos depositados em armazéns e semoventes',
      'Aval, fiança e garantia cruzada em operações de terceiros',
      'Tese constitucional de impenhorabilidade da Pequena Propriedade Rural (CF art. 5º, XXVI)',
      'Análise de sobreposição de gravames e nulidades registrais',
    ],
    instruments: ['Matrículas Imobiliárias', 'Cédulas com Gravame', 'Notificações de Leilão'],
    scopeNote: 'O reconhecimento da impenhorabilidade ou anulação de leilão exige prova documental rigorosa da exploração familiar da terra.',
  },
  {
    id: 'agroindustrias',
    letter: 'E',
    title: 'Agroindústrias e Grupos Empresariais',
    subtitle: 'Operações estruturadas, capital de giro e tradings',
    summary:
      'Assessoria jurídica a cooperativas, revendas de defensivos, usinas e cerealistas em contratos de fornecimento, antecipação de recebíveis, CDCA e contencioso corporativo com agentes financeiros.',
    themes: [
      'Contratos de Barter e operações triangulares (produtor - revenda - trading)',
      'Emissão e negociação de CDCA, CRA e Letras de Crédito do Agronegócio (LCA)',
      'Estruturas de capital de giro e financiamento industrial de equipamentos',
      'Controvérsias bancárias com múltiplos credores e garantias cruzadas',
      'Reorganização societária de grupos agroindustriais em crise',
    ],
    instruments: ['CDCA / CRA', 'Contratos de Fornecimento', 'Termos de Cessão Fiduciária'],
    scopeNote: 'Atuação delineada de acordo com o porte da empresa e a complexidade das relações interempresariais.',
  },
  {
    id: 'sucessao',
    letter: 'F',
    title: 'Patrimônio e Sucessão Rural',
    subtitle: 'Estruturação societária e proteção geracional ética',
    summary:
      'Prevenção de litígios e isolamento de riscos operacionais por meio de planejamento sucessório, holdings rurais e governança familiar integrada à gestão de passivos bancários.',
    themes: [
      'Relação entre passivos bancários e preservação do patrimônio familiar rural',
      'Estruturação de Holdings Patrimoniais e Rurais para segregação de riscos',
      'Protocolo familiar de governança e sucessão de lavouras e rebanhos',
      'Prevenção contra a perda de ativos fundiários históricos da família',
      'Análise do impacto de avais paternos sobre as futuras gerações',
    ],
    instruments: ['Contratos Sociais de Holdings', 'Acordo de Sócios Rurais', 'Doações com Reserva de Usufruto'],
    scopeNote: 'A estruturação societária deve ser realizada de forma preventiva, respeitando a boa-fé e a legislação contra fraude a credores.',
  },
];

export const PracticeAreas: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('credito-rural');
  const currentArea = practiceData.find((item) => item.id === selectedId) || practiceData[0];

  return (
    <section id="areas-atuacao" className="py-28 lg:py-36 bg-[#090909]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8AD36] font-semibold block mb-4">
            FRENTES ESPECIALIZADAS DE ATUAÇÃO
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-normal leading-tight mb-6">
            Índice institucional de serviços em direito bancário rural
          </h2>

          <p className="text-lg text-[#B8B8B8] font-light leading-relaxed">
            Selecione uma área abaixo para acessar o escopo temático, os instrumentos contratuais examinados e as diretrizes jurídicas aplicáveis a cada operação.
          </p>
        </div>

        {/* Editorial Index Layout: Clean Horizontal Lines, No Box Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Master Index List (5 cols) */}
          <div className="lg:col-span-5 divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
            {practiceData.map((area) => {
              const isSelected = area.id === selectedId;
              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedId(area.id)}
                  className="w-full text-left py-7 transition-colors cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-baseline gap-5 min-w-0 pr-4">
                    <span
                      className={`font-mono text-sm font-semibold tracking-wider shrink-0 transition-colors ${
                        isSelected ? 'text-[#D8AD36]' : 'text-[#666666]'
                      }`}
                    >
                      {area.letter}.
                    </span>
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-serif transition-colors ${
                          isSelected ? 'text-[#FFFFFF] font-medium' : 'text-[#B8B8B8] group-hover:text-[#FFFFFF]'
                        }`}
                      >
                        {area.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#777777] font-light mt-1">{area.subtitle}</p>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-xs tracking-widest uppercase shrink-0 transition-colors ${
                      isSelected ? 'text-[#D8AD36]' : 'text-transparent group-hover:text-[#666666]'
                    }`}
                  >
                    {isSelected ? 'ATIVO' : 'VER'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Open Reading Space (7 cols) - Directly on Background */}
          <div className="lg:col-span-7 space-y-10 lg:pl-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#D8AD36] font-semibold block mb-3">
                VERTICAL {currentArea.letter} · NS ADVOCACIA
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF] font-normal leading-tight mb-5">
                {currentArea.title}
              </h3>

              <p className="text-base sm:text-lg text-[#B8B8B8] leading-relaxed font-light">
                {currentArea.summary}
              </p>
            </div>

            {/* Themes Checklist - Clean Typography with Simple Gold Dots */}
            <div className="pt-8 border-t border-white/[0.08] space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FFFFFF] font-semibold block">
                Questões e Temas Jurídicos Abrangidos
              </span>
              <ul className="space-y-3.5">
                {currentArea.themes.map((theme, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm sm:text-base text-[#B8B8B8] leading-relaxed font-light">
                    <span className="text-[#D8AD36] mt-1 shrink-0 font-bold">―</span>
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Typical Documents List */}
            <div className="pt-8 border-t border-white/[0.08] space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FFFFFF] font-semibold block">
                Instrumentos e Contratos Analisados
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#B8B8B8]">
                {currentArea.instruments.map((inst, idx) => (
                  <span key={idx} className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8AD36]" />
                    <span>{inst}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Scope Caveat */}
            <div className="pt-6 border-t border-white/[0.08] text-xs sm:text-sm text-[#777777] font-light leading-relaxed">
              <strong className="text-[#B8B8B8] font-medium">Nota técnica:</strong> {currentArea.scopeNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
