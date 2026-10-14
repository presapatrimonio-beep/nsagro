import React from 'react';
import { ArrowUpRight } from 'lucide-react';

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
  return (
    <section className="py-28 lg:py-36 bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8AD36] font-semibold block mb-4">
            SINAIS DE ALERTA & CONDUTA PREVENTIVA
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-normal leading-tight mb-6">
            Situações práticas que exigem análise jurídica individualizada
          </h2>

          <p className="text-lg text-[#B8B8B8] font-light leading-relaxed">
            A tomada de decisão no agronegócio depende do momento em que o risco é identificado. Quanto mais tempestiva a avaliação dos contratos e notificações, maiores são as alternativas jurídicas cabíveis.
          </p>
        </div>

        {/* 2-Column Open Editorial List, No Boxes, Quiet Dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 mb-20 divide-y lg:divide-y-0 divide-white/[0.08]">
          {situations.map((sit) => (
            <div key={sit.id} className="pt-8 lg:pt-0 border-b border-white/[0.08] pb-10">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-sm font-semibold text-[#D8AD36]">
                  {String(sit.id).padStart(2, '0')}.
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#FFFFFF] font-normal">
                  {sit.title}
                </h3>
              </div>
              <p className="text-[15px] text-[#B8B8B8] font-light leading-relaxed mb-3 pl-8">
                {sit.context}
              </p>
              <div className="pl-8 text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
                <strong className="text-[#D8AD36] font-medium">Exame aplicável:</strong> {sit.legalImplication}
              </div>
            </div>
          ))}
        </div>

        {/* Clean Open CTA Block (No Boxed Card) */}
        <div className="pt-12 border-t border-white/[0.08] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D8AD36] font-semibold block">
              AVALIAÇÃO PRELIMINAR DE CONTRATOS
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF]">
              Cada operação possui características próprias e prazos singulares.
            </h4>
            <p className="text-sm sm:text-base text-[#B8B8B8] font-light leading-relaxed">
              Uma avaliação inicial permite identificar quais instrumentos, extratos e notificações são juridicamente pertinentes para a elaboração de parecer ou estratégia de atuação. Não existem soluções automáticas ou universais.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-3 px-9 py-4 sm:py-5 text-[13px] font-semibold tracking-wider uppercase text-[#050505] bg-[#D8AD36] hover:bg-[#F3D36A] transition-colors duration-200 shrink-0 cursor-pointer"
          >
            <span>Entrar em Contato</span>
            <ArrowUpRight className="w-4 h-4 text-[#050505]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CriticalSituations;
