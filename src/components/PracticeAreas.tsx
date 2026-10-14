import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

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
    <section id="areas-atuacao" className="py-24 lg:py-32 bg-[#090909] border-b border-[#1A1A1A] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD96A] font-semibold mb-3">
            <span className="w-8 h-[2px] bg-[#E6BE45]" />
            <span>FRENTES ESPECIALIZADAS DE ATUAÇÃO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-tight mb-4">
            Índice institucional de serviços em direito bancário rural
          </h2>

          <p className="text-base sm:text-lg text-[#C8C8C8] font-light leading-relaxed">
            Selecione uma área abaixo para acessar o escopo temático, os instrumentos contratuais examinados e as diretrizes jurídicas aplicáveis.
          </p>
        </div>

        {/* Asymmetrical Master Navigation & Expansive Deep-Dive View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Master Left Index (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {practiceData.map((area) => {
              const isSelected = area.id === selectedId;
              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedId(area.id)}
                  className={`w-full text-left p-5 transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#151515] border-[#E6BE45] shadow-[0_0_20px_rgba(230,190,69,0.2)]'
                      : 'bg-[#050505] border-[#1C1C1C] hover:border-[#333333] hover:bg-[#0D0D0D]'
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className={`font-mono text-sm font-bold w-7 h-7 rounded-[1px] flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-[#E6BE45] text-[#050505]'
                          : 'bg-[#151515] text-[#888888]'
                      }`}
                    >
                      {area.letter}
                    </span>
                    <div className="truncate">
                      <h3
                        className={`text-sm sm:text-base font-semibold truncate ${
                          isSelected ? 'text-[#FFFFFF]' : 'text-[#CCCCCC]'
                        }`}
                      >
                        {area.title}
                      </h3>
                      <p className="text-xs text-[#888888] truncate mt-0.5">{area.subtitle}</p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      isSelected ? 'text-[#FFD96A] translate-x-1' : 'text-[#444444]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Expansive Panel (7 cols) - Editorial Magazine Grade */}
          <div className="lg:col-span-7 bg-[#050505] border border-[#222222] p-8 sm:p-12 relative shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
            {/* Top Badge & Title */}
            <div className="border-b border-[#1C1C1C] pb-8 mb-8">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#FFD96A] font-bold mb-3">
                <span>VERTICAL {currentArea.letter}</span>
                <span className="text-[#E6BE45]">/</span>
                <span>NS ADVOCACIA</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF] font-normal mb-4 leading-tight">
                {currentArea.title}
              </h3>

              <p className="text-base text-[#D0D0D0] leading-relaxed font-light">
                {currentArea.summary}
              </p>
            </div>

            {/* Themes Checklist */}
            <div className="mb-8">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#FFD96A] font-bold mb-4">
                Questões e Temas Jurídicos Abrangidos
              </span>
              <ul className="space-y-3">
                {currentArea.themes.map((theme, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-[#C0C0C0] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#E6BE45] shrink-0 mt-0.5" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Typical Documents */}
            <div className="mb-8 pt-6 border-t border-[#1C1C1C]">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#FFD96A] font-bold mb-3">
                Instrumentos Analisados
              </span>
              <div className="flex flex-wrap gap-2.5">
                {currentArea.instruments.map((inst, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3.5 py-1.5 bg-[#151515] text-[#E0E0E0] border border-[#2A2A2A] rounded-[1px]"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>

            {/* Scope Caveat */}
            <div className="p-5 bg-[#0D0D0D] border-l-2 border-[#E6BE45] text-xs text-[#999999] leading-relaxed">
              <strong className="text-[#FFFFFF] block mb-1">Critério de Rigor Técnico:</strong>
              {currentArea.scopeNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
