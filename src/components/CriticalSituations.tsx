import React, { useState } from 'react';
import { HelpCircle, ArrowUpRight } from 'lucide-react';

interface Situation {
  id: number;
  title: string;
  context: string;
  legalImplication: string;
}

const situations: Situation[] = [
  {
    id: 1,
    title: 'Recebimento de notificação bancária ou cartorária',
    context: 'O produtor ou empresa recebe notificação para purgar a mora em prazo de 15 dias, sob pena de consolidação da propriedade fiduciária.',
    legalImplication: 'Exige análise imediata dos termos da notificação, comprovação de recebimento pessoal, planilha de evolução da dívida e cabimento de medidas preventivas antes do leilão.',
  },
  {
    id: 2,
    title: 'Operação de crédito rural com vencimento iminente',
    context: 'Data de liquidação de custeio ou parcela de investimento se aproxima e a receita esperada da safra sofreu quebra climática ou desvalorização.',
    legalImplication: 'Avaliação da possibilidade de prorrogação com fulcro no Manual de Crédito Rural (MCR 2.6.4), exigindo protocolo prévio fundamentado antes do inadimplemento formal.',
  },
  {
    id: 3,
    title: 'Distribuição de Execução de Título Extrajudicial',
    context: 'O agente financeiro ajuizou ação de execução cobrando Cédula de Crédito Rural, Cédula de Crédito Bancário ou CPR com pedido de penhora de bens.',
    legalImplication: 'Prazos processuais peremptórios para oposição de Embargos à Execução (15 dias úteis) ou Exceção de Pré-Executividade por ausência de liquidez do título.',
  },
  {
    id: 4,
    title: 'Propriedade rural de moradia ou sede oferecida em garantia',
    context: 'A fazenda principal ou gleba onde a família reside e produz foi gravada com hipoteca ou alienação fiduciária em operação de alto montante.',
    legalImplication: 'Verificação da aplicabilidade do artigo 5º, XXVI, da Constituição Federal (impenhorabilidade da pequena propriedade rural trabalhada pela família) e precedentes do STJ.',
  },
  {
    id: 5,
    title: 'Dúvidas sobre a validade ou alcance de garantias constituídas',
    context: 'Contratos apresentam garantias sobrepostas, penhor de safra já liquidada ou alienação fiduciária outorgada sem a devida anuência de todos os proprietários.',
    legalImplication: 'Exame de higidez formal dos registros cartorários, existência de outorga uxória e legalidade da extensão das garantias a operações pretéritas.',
  },
  {
    id: 6,
    title: 'Múltiplas operações bancárias interligadas (efeito cascata)',
    context: 'O grupo rural contratou linhas com múltiplos bancos, gerando garantias cruzadas onde o vencimento de uma pode acelerar o vencimento das demais.',
    legalImplication: 'Mapeamento holístico de passivos para evitar contaminação recíproca e estruturar uma mesa de negociação com cronograma global viável.',
  },
  {
    id: 7,
    title: 'Divergências entre contratos, extratos e demonstrativos',
    context: 'O saldo devedor cobrado pelo banco não confere com os valores contratados, revelando cobrança de taxas não pactuadas ou capitalização indevida.',
    legalImplication: 'Auditoria jurídica preliminar das cláusulas de juros remuneratórios, CDI/taxas flutuantes e encargos moratórios, preparando base para eventual perícia técnica.',
  },
  {
    id: 8,
    title: 'Avaliação de proposta de renegociação formulada pelo banco',
    context: 'A instituição financeira oferece um "alongamento" com exigência de inclusão de novas garantias reais, renúncia a questionamentos e assinatura de confissão.',
    legalImplication: 'Análise cuidadosa dos riscos de novação: a renegociação precipitada pode extinguir direitos revisionais anteriores e comprometer bens que estavam livres.',
  },
  {
    id: 9,
    title: 'Risco de constrição de maquinários indispensáveis à colheita',
    context: 'Credor solicita busca e apreensão de tratores, colheitadeiras ou penhora de pivôs de irrigação durante o curso do ciclo produtivo.',
    legalImplication: 'Arguição de essencialidade dos bens para a continuidade da atividade produtiva e preservação da função social da empresa agropecuária.',
  },
  {
    id: 10,
    title: 'Exposição de herdeiros e patrimônio pessoal por avais prestados',
    context: 'Membros da família que não atuam diretamente na gestão constam como avalistas solidários em cédulas bancárias de grande vulto.',
    legalImplication: 'Exame de validade de avais em CPR, eventual necessidade de inventário com passivo herdado e limites de responsabilidade de cada integrante.',
  },
];

interface CriticalSituationsProps {
  onOpenContact: () => void;
}

export const CriticalSituations: React.FC<CriticalSituationsProps> = ({ onOpenContact }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-[#050505] border-b border-[#1A1A1A] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD96A] font-semibold mb-3">
            <span className="w-8 h-[2px] bg-[#E6BE45]" />
            <span>SINAIS DE ALERTA & CONDUTA PREVENTIVA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-tight mb-4">
            Situações práticas que exigem análise jurídica individualizada
          </h2>

          <p className="text-base sm:text-lg text-[#C8C8C8] font-light leading-relaxed">
            A tomada de decisão no agronegócio depende do momento em que o risco é identificado. Quanto mais tempestiva a avaliação dos contratos e notificações, maiores são as alternativas cabíveis.
          </p>
        </div>

        {/* 2-Column Architectural List with Subtle Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-16">
          {situations.map((sit) => {
            const isExpanded = activeId === sit.id;
            return (
              <div
                key={sit.id}
                onClick={() => setActiveId(isExpanded ? null : sit.id)}
                className={`py-5 border-b transition-all duration-200 cursor-pointer ${
                  isExpanded
                    ? 'border-[#E6BE45] bg-[#0D0D0D] px-4'
                    : 'border-[#1C1C1C] hover:border-[#383838]'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-sm font-bold text-[#FFD96A] pt-0.5 shrink-0">
                      {String(sit.id).padStart(2, '0')}.
                    </span>
                    <div>
                      <h3 className="text-base font-serif font-medium text-[#FFFFFF] leading-snug">
                        {sit.title}
                      </h3>
                      <p className="text-xs text-[#999999] leading-relaxed mt-1">
                        {sit.context}
                      </p>
                    </div>
                  </div>
                  <HelpCircle
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isExpanded ? 'text-[#E6BE45] rotate-180' : 'text-[#555555]'
                    }`}
                  />
                </div>

                {/* Expanded Legal Implication */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isExpanded ? 'max-h-40 opacity-100 mt-4 pt-3 border-t border-[#222222]' : 'max-h-0 opacity-0'
                  }`}
                >
                  <span className="block text-[11px] font-mono text-[#FFD96A] uppercase tracking-wider font-semibold mb-1">
                    Exame Jurídico Aplicável:
                  </span>
                  <p className="text-xs text-[#E0E0E0] leading-relaxed font-light">
                    {sit.legalImplication}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Call to Action Box - Obsidian & Gold Banner */}
        <div className="p-8 sm:p-12 bg-[#090909] border border-[#E6BE45]/40 rounded-[1px] shadow-[0_0_30px_rgba(230,190,69,0.15)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFD96A] font-bold block mb-2">
              AVALIAÇÃO PRELIMINAR DE CONTRATOS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] font-normal mb-3">
              Cada operação possui características próprias e prazos singulares.
            </h3>
            <p className="text-xs sm:text-sm text-[#B8B8B8] font-light leading-relaxed">
              Uma avaliação inicial permite identificar quais instrumentos, extratos e notificações são juridicamente pertinentes para a elaboração de parecer ou estratégia de atuação. Não existem soluções automáticas ou universais.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs font-bold tracking-widest uppercase text-[#050505] bg-gradient-to-r from-[#FFD96A] via-[#E6BE45] to-[#B78B24] rounded-[1px] transition-all duration-200 hover:brightness-115 active:scale-[0.98] shrink-0 cursor-pointer shadow-[0_0_20px_rgba(230,190,69,0.35)]"
          >
            <span>ENTRAR EM CONTATO</span>
            <ArrowUpRight className="w-4 h-4 text-[#050505] stroke-[3]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CriticalSituations;
