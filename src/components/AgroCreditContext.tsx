import React, { useState } from 'react';

export const AgroCreditContext: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'operacoes' | 'garantias' | 'ciclo'>('operacoes');

  return (
    <section id="credito-rural" className="py-28 lg:py-36 bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8AD36] font-semibold block mb-4">
            DIAGNÓSTICO E COMPLEXIDADE DO SETOR
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-normal leading-tight mb-6">
            A estrutura do financiamento agropecuário e suas implicações jurídicas
          </h2>

          <p className="text-lg text-[#B8B8B8] font-light leading-relaxed">
            As operações financeiras do agronegócio não seguem a dinâmica do crédito comercial urbano. Elas se articulam em torno de ciclos biológicos, janelas meteorológicas, cotações globais e garantias que frequentemente alcançam a totalidade dos ativos da família produtora.
          </p>
        </div>

        {/* Tab Selector: Clean Typographic Line, No Box Containers */}
        <div className="flex items-center gap-8 pb-4 mb-16 border-b border-white/[0.08] overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('operacoes')}
            className={`pb-3 text-sm sm:text-base font-medium tracking-wide transition-colors cursor-pointer whitespace-nowrap relative ${
              activeTab === 'operacoes'
                ? 'text-[#FFFFFF]'
                : 'text-[#777777] hover:text-[#B8B8B8]'
            }`}
          >
            Tipologias de Operações
            {activeTab === 'operacoes' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D8AD36]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('garantias')}
            className={`pb-3 text-sm sm:text-base font-medium tracking-wide transition-colors cursor-pointer whitespace-nowrap relative ${
              activeTab === 'garantias'
                ? 'text-[#FFFFFF]'
                : 'text-[#777777] hover:text-[#B8B8B8]'
            }`}
          >
            Estrutura de Garantias & Patrimônio
            {activeTab === 'garantias' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D8AD36]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('ciclo')}
            className={`pb-3 text-sm sm:text-base font-medium tracking-wide transition-colors cursor-pointer whitespace-nowrap relative ${
              activeTab === 'ciclo'
                ? 'text-[#FFFFFF]'
                : 'text-[#777777] hover:text-[#B8B8B8]'
            }`}
          >
            Sazonalidade & Inadimplemento
            {activeTab === 'ciclo' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D8AD36]" />
            )}
          </button>
        </div>

        {/* Tab 1: Operações - Clean 4-Column Open Flow, Direct on Background */}
        {activeTab === 'operacoes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D8AD36] font-semibold block">
                01. Custeio Agrícola
              </span>
              <h3 className="text-2xl font-serif text-[#FFFFFF]">Crédito de Custeio</h3>
              <p className="text-[15px] text-[#B8B8B8] font-light leading-relaxed">
                Destinado a cobrir despesas de ciclos produtivos (insumos, sementes, defensivos, fertilizantes). Possui vencimento sincronizado com o período de colheita e liquidação da safra.
              </p>
              <p className="text-xs font-mono text-[#888888]">
                Instrumentos: CCR · CPR Financeira
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D8AD36] font-semibold block">
                02. Infraestrutura
              </span>
              <h3 className="text-2xl font-serif text-[#FFFFFF]">Investimento Rural</h3>
              <p className="text-[15px] text-[#B8B8B8] font-light leading-relaxed">
                Aquisição de maquinário, implementos agrícolas, irrigação, correção de solo e infraestrutura de armazenagem. Prazos plurianuais com carência e encargos subsidiados ou livres.
              </p>
              <p className="text-xs font-mono text-[#888888]">
                Instrumentos: BNDES · Finame · Moderfrota
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D8AD36] font-semibold block">
                03. Mercado Futuro
              </span>
              <h3 className="text-2xl font-serif text-[#FFFFFF]">Comercialização & CPR</h3>
              <p className="text-[15px] text-[#B8B8B8] font-light leading-relaxed">
                Operações de adiantamento com tradição física futura de grãos ou liquidação financeira por índice. Sujeitas a oscilações de bases de entrega, ágio/deságio e cláusulas penais rigorosas.
              </p>
              <p className="text-xs font-mono text-[#888888]">
                Instrumentos: CPR Física · Barter · CDCA
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D8AD36] font-semibold block">
                04. Corporativo
              </span>
              <h3 className="text-2xl font-serif text-[#FFFFFF]">Giro Agroindustrial</h3>
              <p className="text-[15px] text-[#B8B8B8] font-light leading-relaxed">
                Manutenção de fluxo de caixa em cooperativas, revendas de insumos, tradings e usinas. Frequente utilização de Cédulas de Crédito Bancário com garantias cruzadas entre sócios.
              </p>
              <p className="text-xs font-mono text-[#888888]">
                Instrumentos: CCB · Cessão de Recebíveis
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Garantias - 3 Wide Columns Directly on Background */}
        {activeTab === 'garantias' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D8AD36] font-semibold block">
                Garantia Imobiliária
              </span>
              <h3 className="text-2xl font-serif text-[#FFFFFF]">Alienação Fiduciária e Hipoteca Rural</h3>
              <p className="text-[15px] text-[#B8B8B8] font-light leading-relaxed">
                A alienação fiduciária de bem imóvel rural (Lei nº 9.514/97) transfere a propriedade resolúvel ao credor bancário, permitindo procedimento extrajudicial de consolidação de propriedade em prazos sumários de 15 dias. O exame dos requisitos legais de intimação pessoal e avaliação do imóvel é crucial.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D8AD36] font-semibold block">
                Garantia Mobiliária
              </span>
              <h3 className="text-2xl font-serif text-[#FFFFFF]">Penhor Agrícola e Pecuário</h3>
              <p className="text-[15px] text-[#B8B8B8] font-light leading-relaxed">
                Vinculação legal de lavouras em formação, estoques em armazéns gerais, semoventes ou rebanhos. Questões críticas emergem quando ocorrem perdas climáticas parciais ou desvios de produto objeto de depósito formal.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D8AD36] font-semibold block">
                Garantia Pessoal
              </span>
              <h3 className="text-2xl font-serif text-[#FFFFFF]">Aval, Fiança e Responsabilidade Familiar</h3>
              <p className="text-[15px] text-[#B8B8B8] font-light leading-relaxed">
                Prática comum das instituições financeiras de exigir o aval pessoal de cônjuges, filhos ou sócios de empresas rurais, gerando contaminação do patrimônio pessoal por obrigações contraídas pela pessoa jurídica ou pelo patriarca.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Sazonalidade & Inadimplemento - Open Editorial 2-Column Split */}
        {activeTab === 'ciclo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D8AD36] font-semibold block">
                Dinâmica Temporal dos Contratos Rurais
              </span>
              <h3 className="text-3xl font-serif text-[#FFFFFF]">
                O descompasso entre o ciclo biológico da lavoura e a exigibilidade financeira
              </h3>
              <p className="text-base text-[#B8B8B8] font-light leading-relaxed">
                Enquanto as obrigações bancárias possuem datas peremptórias de vencimento, a receita do agronegócio depende de fatores biológicos (germinação, floração, maturação) e climáticos (estiagens, geadas, excesso de chuvas na colheita) alheios à vontade do produtor.
              </p>
              <p className="text-base text-[#B8B8B8] font-light leading-relaxed">
                Quando o pagamento não ocorre na data estipulada, a incidência de encargos moratórios capitalizados e perda de bônus pode inviabilizar a liquidação. A atuação jurídica tempestiva evita medidas expropriatórias extremas.
              </p>
            </div>

            <div className="lg:col-span-5 pt-4 space-y-8 border-l border-white/[0.08] pl-8 lg:pl-12">
              <div>
                <h4 className="text-lg font-serif text-[#FFFFFF] mb-2">Avisos e Notificações de Vencimento</h4>
                <p className="text-sm text-[#B8B8B8] font-light leading-relaxed">
                  A notificação cartorária para purgação de mora em alienação fiduciária deflagra prazo improrrogável de 15 dias corridos. A inércia resulta na consolidação definitiva da propriedade pelo banco.
                </p>
              </div>

              <div className="pt-8 border-t border-white/[0.06]">
                <h4 className="text-lg font-serif text-[#FFFFFF] mb-2">Direito à Prorrogação (MCR 2.6.4)</h4>
                <p className="text-sm text-[#B8B8B8] font-light leading-relaxed">
                  O Manual de Crédito Rural prevê a prorrogação compulsória de operações de crédito rural em casos de quebra de safra comprovada por laudo pericial agronômico idôneo.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AgroCreditContext;
