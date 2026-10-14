import React, { useState } from 'react';
import { AlertTriangle, Clock, HelpCircle, FileWarning, ArrowUpRight } from 'lucide-react';

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
    <section className="py-20 lg:py-28 bg-[#0c0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <span>Sinais de Alerta</span>
            <span aria-hidden="true" className="text-[#8e6817]">·</span>
            <span>Casos Concretos</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#f5eedc] font-normal leading-tight mb-4">
            Situações práticas que exigem análise jurídica individualizada
          </h2>

          <p className="text-base text-[#bcb3a7] font-light leading-relaxed">
            A tomada de decisão jurídica no agronegócio depende do momento em que o problema é identificado. Quanto mais tempestiva a avaliação dos contratos e notificações, maiores são os caminhos legalmente disponíveis.
          </p>
        </div>

        {/* 2-Column Grid of 10 Concrete Real Situations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-12">
          {situations.map((sit) => {
            const isExpanded = activeId === sit.id;
            return (
              <div
                key={sit.id}
                onClick={() => setActiveId(isExpanded ? null : sit.id)}
                className={`p-6 rounded-sm border transition-all duration-200 cursor-pointer ${
                  isExpanded
                    ? 'bg-[#18181d] border-[#d4af37]/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                    : 'bg-[#121215] border-[#222228] hover:border-[#383842]'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-[#c59b27] pt-0.5">
                      {String(sit.id).padStart(2, '0')}.
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-[#f5eedc] leading-snug">
                      {sit.title}
                    </h3>
                  </div>
                  <HelpCircle
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isExpanded ? 'text-[#d4af37] rotate-180' : 'text-[#615a4e]'
                    }`}
                  />
                </div>

                <p className="text-xs text-[#a39b8e] leading-relaxed pl-7 mb-3">
                  {sit.context}
                </p>

                {/* Expanded Legal Implication */}
                <div
                  className={`pl-7 transition-all duration-300 overflow-hidden ${
                    isExpanded ? 'max-h-40 opacity-100 pt-3 border-t border-[#26262e]' : 'max-h-0 opacity-0'
                  }`}
                >
                  <span className="block text-[11px] font-mono text-[#d4af37] uppercase tracking-wider mb-1">
                    Exame Jurídico Aplicável:
                  </span>
                  <p className="text-xs text-[#d8d1c4] leading-relaxed">
                    {sit.legalImplication}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Call to Action Box - Quiet & Elegant */}
        <div className="p-8 sm:p-10 bg-[#141418] border border-[#d4af37]/30 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37] block mb-1">
              Avaliação Preliminar de Documentos
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#f5eedc] font-medium mb-2">
              Cada operação possui características próprias e prazos singulares.
            </h3>
            <p className="text-xs sm:text-sm text-[#a8a194] font-light leading-relaxed">
              Uma avaliação inicial permite identificar quais instrumentos, extratos e notificações são juridicamente pertinentes para a elaboração de parecer ou estratégia de atuação. Não existem soluções automáticas ou universais.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0c0c0e] bg-gradient-to-r from-[#edd387] via-[#d4af37] to-[#ba8c26] rounded-[2px] transition-all duration-200 hover:brightness-110 active:scale-[0.98] shrink-0 cursor-pointer shadow-[0_2px_12px_rgba(212,175,55,0.2)]"
          >
            <span>Entrar em Contato</span>
            <ArrowUpRight className="w-4 h-4 text-[#0c0c0e]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CriticalSituations;
