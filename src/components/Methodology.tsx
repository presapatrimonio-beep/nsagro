import React from 'react';
import { FileSearch, FolderCheck, Building2, Compass } from 'lucide-react';

export const Methodology: React.FC = () => {
  const axes = [
    {
      number: '01',
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
      number: '02',
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
      number: '03',
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
      number: '04',
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
    <section id="metodologia" className="py-24 lg:py-32 bg-[#090909] border-b border-[#1A1A1A] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD96A] font-semibold mb-3">
            <span className="w-8 h-[2px] bg-[#E6BE45]" />
            <span>METODOLOGIA JURÍDICA ESTRUTURADA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-tight mb-4">
            Quatro eixos de rigor técnico para operações bancárias rurais
          </h2>

          <p className="text-base sm:text-lg text-[#C8C8C8] font-light leading-relaxed">
            Sem recorrer a fórmulas prontas ou promessas infundadas, a assessoria jurídica se desenvolve a partir de quatro eixos analíticos complementares que permitem compreender com exatidão o cenário de cada produtor.
          </p>
        </div>

        {/* Continuous Magazine Editorial Sequence */}
        <div className="space-y-12">
          {axes.map((axis, index) => {
            const Icon = axis.icon;
            return (
              <div key={index} className="pt-10 border-t border-[#1F1F1F]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number & Title (4 cols) */}
                  <div className="lg:col-span-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#FFD96A] block mb-2">
                      EIXO {axis.number}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] font-normal leading-snug mb-4">
                      {axis.title}
                    </h3>
                    <div className="flex items-center gap-3 text-[#E6BE45]">
                      <Icon className="w-5 h-5 text-[#FFD96A]" />
                      <div className="h-[2px] w-20 bg-gradient-to-r from-[#E6BE45] to-transparent" />
                    </div>
                  </div>

                  {/* Middle Column: Summary (4 cols) */}
                  <div className="lg:col-span-4">
                    <p className="text-sm sm:text-base text-[#D0D0D0] leading-relaxed font-light">
                      {axis.summary}
                    </p>
                  </div>

                  {/* Right Column: Key Verification Checks (4 cols) */}
                  <div className="lg:col-span-4 bg-[#050505] border border-[#222222] p-6 rounded-[1px]">
                    <span className="block text-xs font-mono uppercase tracking-wider text-[#FFD96A] font-bold mb-4">
                      Procedimentos Abrangidos
                    </span>
                    <ul className="space-y-2.5">
                      {axis.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-[#A0A0A0] flex items-start gap-2.5 leading-relaxed font-light">
                          <span className="text-[#E6BE45] select-none font-mono font-bold">›</span>
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
