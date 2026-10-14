import React from 'react';

export const Methodology: React.FC = () => {
  const axes = [
    {
      number: '01',
      title: 'Contratos, Encargos e Riscos',
      summary:
        'Análise exaustiva dos instrumentos contratuais vigentes, encargos pactuados, obrigações recíprocas, cláusulas de vencimento antecipado e taxas praticadas, confrontadas com os limites regulatórios aplicáveis ao crédito rural.',
      details: [
        'Exame de Cédulas de Crédito Rural (CCR), Cédulas de Produto Rural (CPR) e Cédulas de Crédito Bancário (CCB)',
        'Auditoria da capitalização de juros remuneratórios e legalidade de comissões de permanência',
        'Avaliação da vinculação de recursos públicos subsidiados (Pronaf, Pronamp, Moderfrota) frente a recursos livres',
        'Mapeamento dos gatilhos de aceleração contratual decorrentes de inadimplemento parcial',
      ],
    },
    {
      number: '02',
      title: 'Documentação e Prova',
      summary:
        'Triagem e consolidação documental de todo o histórico da relação financeira: instrumentos originários, termos aditivos, extratos de movimentação, comprovantes de entrega de safras, notificações recebidas e eventuais laudos agronômicos.',
      details: [
        'Sistematização cronológica da evolução do saldo devedor desde a liberação dos recursos',
        'Organização de laudos de frustração de safra emitidos por engenheiros agrônomos para fundamentar prorrogação',
        'Confronto entre notas fiscais de insumos adquiridos e valores debitados pelo agente financiador',
        'Identificação de lacunas probatórias e avaliação da conveniência de perícia contábil preliminar',
      ],
    },
    {
      number: '03',
      title: 'Garantias e Estrutura Patrimonial',
      summary:
        'Exame detalhado da extensão dos gravames constituídos, diferenciando garantias reais imobiliárias (alienação fiduciária e hipoteca) de garantias mobiliárias (penhor de safra e máquinas) e pessoais (aval e fiança).',
      details: [
        'Verificação da regularidade registral nas matrículas dos imóveis junto aos Cartórios de Registro de Imóveis',
        'Avaliação da aplicabilidade da impenhorabilidade da Pequena Propriedade Rural (art. 5º, XXVI da CF)',
        'Exame da contaminação patrimonial entre pessoas físicas familiares e a pessoa jurídica produtora',
        'Identificação de garantias sobrepostas e nulidades formais em atos de constituição de gravames',
      ],
    },
    {
      number: '04',
      title: 'Prazos e Estratégia Jurídica',
      summary:
        'Ponderação dos prazos decadenciais, prescricionais e processuais em curso, definindo o momento e o ambiente adequado de intervenção: mesa de negociação extrajudicial preventiva ou ajuizamento de medidas judiciais pertinentes.',
      details: [
        'Controle de prazos peremptórios (15 dias para purga de mora em alienação fiduciária, 15 dias úteis para embargos)',
        'Desenho de proposta fundamentada de repactuação alinhada à capacidade real de pagamento das safras futuras',
        'Estruturação de pedidos de tutela de urgência para impedir leilões ou constrição de maquinário essencial',
        'Acompanhamento contínuo da jurisprudência dominante nos Tribunais de Justiça e no Superior Tribunal de Justiça',
      ],
    },
  ];

  return (
    <section id="metodologia" className="py-28 lg:py-36 bg-[#090909]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8AD36] font-semibold block mb-4">
            MÉTODO DE ANÁLISE EM QUATRO EIXOS
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-normal leading-tight mb-6">
            Rigor técnico e estruturação analítica para operações rurais
          </h2>

          <p className="text-lg text-[#B8B8B8] font-light leading-relaxed">
            Sem recorrer a fórmulas prontas ou promessas infundadas, a assessoria jurídica se desenvolve a partir de quatro eixos analíticos complementares que permitem compreender com exatidão o cenário de cada produtor.
          </p>
        </div>

        {/* 4 Open Editorial Chapters with Big Expressive Numbers (No Cards) */}
        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {axes.map((axis, index) => (
            <div key={index} className="py-16 lg:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Large Artistic Number (2 cols) */}
                <div className="lg:col-span-2">
                  <span className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#D8AD36] font-light leading-none">
                    {axis.number}
                  </span>
                </div>

                {/* Title & Core Commentary (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FFFFFF] font-normal leading-snug">
                    {axis.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#B8B8B8] font-light leading-relaxed">
                    {axis.summary}
                  </p>
                </div>

                {/* Scope & Detailed Procedures (5 cols) - Clean Typographic List */}
                <div className="lg:col-span-5 space-y-4 pt-2 lg:pt-0">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#FFFFFF] font-semibold block">
                    Procedimentos Técnicos
                  </span>
                  <ul className="space-y-3">
                    {axis.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-[#B8B8B8] font-light leading-relaxed">
                        <span className="text-[#D8AD36] font-bold mt-0.5 select-none">―</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
