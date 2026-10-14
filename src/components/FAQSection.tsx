import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '1. Quando uma operação de crédito rural deve ser analisada juridicamente?',
    answer:
      'A análise jurídica é recomendada em momentos estratégicos: antes da assinatura de contratos vultosos (análise preventiva de encargos e garantias), no momento em que se antecipa impossibilidade de pagamento devido a intempéries climáticas (para fins de prorrogação tempestiva), logo após o recebimento de qualquer notificação bancária ou cartorária de mora, e imediatamente quando ajuizada ação judicial de execução ou busca e apreensão. A avaliação precoce previne a perda irreversível de prazos decadenciais.',
  },
  {
    question: '2. Quais documentos podem ser relevantes para avaliar uma dívida bancária?',
    answer:
      'A documentação varia conforme o caso, mas inclui habitualmente: os contratos originários (Cédulas de Crédito Rural, Bancário ou CPRs), eventuais aditivos firmados, demonstrativos de evolução da dívida emitidos pela instituição financeira, extratos analíticos da conta corrente vinculada, comprovantes de entrega de grãos ou liquidação parcial, notificações extrajudiciais recebidas, certidões de matrícula de imóveis gravados e, em caso de perda de safra, laudos técnicos agronômicos que comprovem a frustração da colheita.',
  },
  {
    question: '3. É possível renegociar uma operação de crédito rural?',
    answer:
      'Sim. A renegociação pode ocorrer por via administrativa convencional (acordo bilateral entre devedor e banco) ou por direito potestativo decorrente da legislação do crédito rural (item 2.6.4 do MCR e Súmula 298 do STJ), nos casos em que o produtor comprova incapacidade de pagamento por fatores climáticos, fitossanitários ou oscilação de mercado. Contudo, a aceitação não é automática: exige prova documental rigorosa do nexo causal e da viabilidade econômica das safras futuras.',
  },
  {
    question: '4. O que deve ser observado em uma garantia sobre imóvel rural?',
    answer:
      'Deve-se atentar primeiramente para a modalidade jurídica: se hipoteca tradicional ou alienação fiduciária. Na alienação fiduciária (Lei 9.514/97), a consolidação da propriedade ocorre em cartório extrajudicial em prazo sumário de 15 dias após notificação pessoal. Também é essencial analisar a extensão da garantia (se alcança benfeitorias e maquinários), a outorga conjugal, o valor atribuído para fins de eventual leilão e se a área constitui Pequena Propriedade Rural trabalhada pela família, protegida pela impenhorabilidade constitucional (CF art. 5º, XXVI).',
  },
  {
    question: '5. Como funciona uma execução bancária no agronegócio?',
    answer:
      'A execução de título extrajudicial inicia-se quando o credor ajuíza ação cobrando valor líquido, certo e exigível lastreado em cédula ou CPR. O devedor é citado para pagar em 3 dias ou oferecer embargos no prazo de 15 dias úteis. Caso não haja pagamento espontâneo nem defesa tempestiva, o credor pode requerer penhora de contas bancárias (Sisbajud), restrição de maquinários e bloqueio de matrículas de imóveis. A defesa técnica pode questionar a liquidez do título, encargos indevidos e a essencialidade dos bens.',
  },
  {
    question: '6. Quais fatores influenciam a análise de uma defesa judicial?',
    answer:
      'A linha de defesa depende da higidez formal do título executado, da existência de abusividades nos juros e encargos moratórios, da higidez das intimações prévias, da tempestividade dos embargos e da essencialidade dos bens constritos para a continuidade da atividade agrícola. A viabilidade de obter efeito suspensivo ou medidas liminares exige a demonstração inequívoca da plausibilidade jurídica dos argumentos e do perigo de dano irreparável ao produtor.',
  },
  {
    question: '7. Uma dívida empresarial pode afetar bens oferecidos em garantia pelo grupo rural?',
    answer:
      'Sim, especialmente quando foram prestadas garantias cruzadas (avais, fianças ou hipotecas conjuntas) entre a pessoa física do produtor rural e pessoas jurídicas coligadas (como cerealistas, revendas ou transportadoras). É fundamental analisar se houve outorga de poderes regulares e se o patrimônio pessoal dos sócios pode ser protegido com base em regras de desconsideração da personalidade jurídica e separação societária.',
  },
  {
    question: '8. Quando é importante avaliar os prazos de uma cobrança?',
    answer:
      'Imediatamente. No direito bancário e agrário, os prazos são peremptórios: a purga da mora em alienação fiduciária deve ser exercida em 15 dias corridos a partir da intimação cartorária; os embargos à execução devem ser distribuídos em 15 dias úteis; a manifestação perante o banco para prorrogação do crédito rural deve preferencialmente preceder o vencimento da cédula. Perder esses prazos pode acarretar preclusão de direitos e leilão célere de bens.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0e0e11] border-b border-[#212126] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <span>Dúvidas Recorrentes</span>
            <span aria-hidden="true" className="text-[#8e6817]">·</span>
            <span>Segurança Técnica</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#f5eedc] font-normal leading-tight mb-4">
            Perguntas frequentes sobre crédito bancário e agro
          </h2>

          <p className="text-sm text-[#bcb3a7] font-light leading-relaxed">
            Respostas embasadas nas normas regulatórias e na jurisprudência dos tribunais brasileiros. As soluções concretas dependem sempre do exame individualizado da documentação.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-sm transition-all duration-200 ${
                  isOpen
                    ? 'bg-[#141418] border-[#d4af37]/50 shadow-[0_4px_16px_rgba(0,0,0,0.3)]'
                    : 'bg-[#111114] border-[#222228] hover:border-[#33333d]'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#f5eedc] leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-[#a8a194] leading-relaxed font-light border-t border-[#1e1e24] mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
