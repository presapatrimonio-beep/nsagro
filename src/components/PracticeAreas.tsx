import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileCheck, Shield, ChevronRight } from 'lucide-react';

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
    subtitle: 'Estruturação societária e blindagem ética geracional',
    summary:
      'Prevenção de conflitos e isolamento de riscos operacionais por meio de planejamento sucessório, holdings rurais e governança familiar integrada à gestão de dívidas financeiras.',
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
    <section id="areas-atuacao" className="py-20 lg:py-28 bg-[#0e0e11] border-b border-[#212126] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <span>Frentes Especializadas</span>
            <span aria-hidden="true" className="text-[#8e6817]">·</span>
            <span>Atuação Integrada</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#f5eedc] font-normal leading-tight mb-4">
            Áreas de atuação em direito bancário e agronegócio
          </h2>

          <p className="text-base text-[#bcb3a7] font-light leading-relaxed">
            As frentes abaixo representam os pilares de suporte jurídico em operações financeiras rurais. Cada atuação é delineada estritamente conforme a documentação e os limites acordados com o cliente.
          </p>
        </div>

        {/* Editorial Layout: Left Master Index (4 cols) & Right Deep View (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Editorial Index */}
          <div className="lg:col-span-5 space-y-2">
            {practiceData.map((area) => {
              const isSelected = area.id === selectedId;
              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedId(area.id)}
                  className={`w-full text-left p-4.5 rounded-sm transition-all duration-200 cursor-pointer flex items-start gap-4 border ${
                    isSelected
                      ? 'bg-[#18181d] border-[#d4af37]/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                      : 'bg-[#121215] border-[#222228] hover:border-[#383844] hover:bg-[#151519]'
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-bold pt-0.5 shrink-0 ${
                      isSelected ? 'text-[#d4af37]' : 'text-[#777064]'
                    }`}
                  >
                    {area.letter}.
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-sm font-semibold truncate ${
                        isSelected ? 'text-[#f5eedc]' : 'text-[#c8c0b3]'
                      }`}
                    >
                      {area.title}
                    </h3>
                    <p className="text-xs text-[#8a8275] truncate mt-0.5">{area.subtitle}</p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#d4af37] translate-x-1' : 'text-[#4e483e]'
                    }`}
                  />
                </button>
              );
            })}

            <div className="p-4 bg-[#121215]/60 border border-[#222227] mt-4">
              <p className="text-[11px] text-[#7d7568] leading-relaxed">
                <span className="text-[#c59b27] font-medium">Nota institucional:</span> As áreas de atuação apresentadas estão sujeitas a revisão técnica e alinhamento formal específico para cada caso concreto.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Editorial Deep View */}
          <div className="lg:col-span-7 bg-[#141418] border border-[#2e2e38] p-7 sm:p-9 rounded-sm relative">
            {/* Top Area Header */}
            <div className="border-b border-[#282832] pb-6 mb-7">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#d4af37] mb-2">
                <span>Vertical {currentArea.letter}</span>
                <span aria-hidden="true" className="text-[#8e6817]">/</span>
                <span>NS Advocacia</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f5eedc] font-medium mb-3">
                {currentArea.title}
              </h3>
              <p className="text-sm text-[#c8c0b3] leading-relaxed font-light">
                {currentArea.summary}
              </p>
            </div>

            {/* List of Key Legal Themes */}
            <div className="mb-7">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#c59b27] mb-3">
                Questões e Temas Jurídicos Abrangidos
              </span>
              <ul className="space-y-2.5">
                {currentArea.themes.map((theme, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#b5ada0] leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instruments Examined */}
            <div className="mb-7 pt-5 border-t border-[#24242c]">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#c59b27] mb-2">
                Instrumentos e Documentos Típicos
              </span>
              <div className="flex flex-wrap gap-2">
                {currentArea.instruments.map((inst, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 bg-[#1b1b22] text-[#dcd6cb] border border-[#33333e] rounded-sm"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>

            {/* Scope Caveat */}
            <div className="p-4 bg-[#191920] border-l-2 border-[#d4af37] text-xs text-[#9d9587] leading-relaxed">
              <span className="font-semibold text-[#f5eedc] block mb-1">Critério de Rigor Técnico:</span>
              {currentArea.scopeNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
