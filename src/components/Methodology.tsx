import React from 'react';
import { FileSearch, FolderCheck, Building2, Compass } from 'lucide-react';

export const Methodology: React.FC = () => {
  const axes = [
    {
      number: 'EIXO 01',
      title: 'Contratos, Encargos e Riscos',
      icon: FileSearch,
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
      number: 'EIXO 02',
      title: 'Documentação e Prova',
      icon: FolderCheck,
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
      number: 'EIXO 03',
      title: 'Garantias e Estrutura Patrimonial',
      icon: Building2,
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
      number: 'EIXO 04',
      title: 'Prazos e Estratégia Jurídica',
      icon: Compass,
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
    <section id="metodologia" className="py-20 lg:py-28 bg-[#0e0e11] border-b border-[#212126] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <span>Rigor de Análise</span>
            <span aria-hidden="true" className="text-[#8e6817]">·</span>
            <span>Quatro Eixos Técnicos</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#f5eedc] font-normal leading-tight mb-4">
            Metodologia estruturada para exame de operações agrofinanceiras
          </h2>

          <p className="text-base text-[#bcb3a7] font-light leading-relaxed">
            Sem recorrer a fórmulas prontas ou promessas infundadas, a assessoria jurídica se desenvolve a partir de quatro eixos analíticos complementares que permitem compreender com clareza o cenário de cada cliente.
          </p>
        </div>

        {/* Continuous Editorial Flow - 4 Axes with Discreet Hairline Dividers */}
        <div className="space-y-12">
          {axes.map((axis, index) => {
            const Icon = axis.icon;
            return (
              <div key={index} className="pt-8 border-t border-[#25252e]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number & Title (4 cols) */}
                  <div className="lg:col-span-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#d4af37] block mb-2">
                      {axis.number}
                    </span>
                    <h3 className="font-serif text-2xl text-[#f5eedc] font-medium leading-snug mb-3">
                      {axis.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[#8e6817]">
                      <Icon className="w-5 h-5 text-[#d4af37]" />
                      <div className="h-[1px] w-16 bg-[#d4af37]/40" />
                    </div>
                  </div>

                  {/* Middle Column: Summary (4 cols) */}
                  <div className="lg:col-span-4">
                    <p className="text-sm text-[#c8c0b3] leading-relaxed font-light">
                      {axis.summary}
                    </p>
                  </div>

                  {/* Right Column: Key Verification Checks (4 cols) */}
                  <div className="lg:col-span-4 bg-[#141418] border border-[#262630] p-5 rounded-sm">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-[#c59b27] mb-3">
                      Procedimentos Abrangidos
                    </span>
                    <ul className="space-y-2">
                      {axis.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-[#a0988a] flex items-start gap-2 leading-relaxed">
                          <span className="text-[#d4af37] select-none font-mono">›</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
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

export default Methodology;
