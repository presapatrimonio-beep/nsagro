import React, { useState } from 'react';
import { Calendar, DollarSign, Layers, Landmark, AlertCircle, ShieldAlert } from 'lucide-react';

export const AgroCreditContext: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'operacoes' | 'garantias' | 'ciclo'>('operacoes');

  return (
    <section id="credito-rural" className="py-20 lg:py-28 bg-[#0c0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <span>Diagnóstico Setorial</span>
            <span aria-hidden="true" className="text-[#8e6817]">·</span>
            <span>Particularidades do Crédito Rural</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#f5eedc] font-normal leading-tight mb-5">
            A estrutura do financiamento agropecuário e suas implicações jurídicas
          </h2>

          <p className="text-base text-[#bcb3a7] font-light leading-relaxed">
            As operações financeiras do agronegócio não seguem o padrão do crédito empresarial urbano. Elas se articulam em torno de ciclos biológicos, janelas meteorológicas, cotações internacionais em dólar e estruturas de garantias que frequentemente alcançam a totalidade dos ativos do produtor.
          </p>
        </div>

        {/* Interactive Editorial Segmented Navigation (functional buttons, not pill badge sandwich) */}
        <div className="flex items-center gap-2 pb-4 mb-10 border-b border-[#24242a] overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('operacoes')}
            className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap rounded-sm ${
              activeTab === 'operacoes'
                ? 'bg-[#1e1e24] text-[#d4af37] border-b-2 border-[#d4af37]'
                : 'text-[#9b9487] hover:text-[#f5eedc] hover:bg-[#151518]'
            }`}
          >
            Tipologias de Operações e Recursos
          </button>
          <button
            onClick={() => setActiveTab('garantias')}
            className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap rounded-sm ${
              activeTab === 'garantias'
                ? 'bg-[#1e1e24] text-[#d4af37] border-b-2 border-[#d4af37]'
                : 'text-[#9b9487] hover:text-[#f5eedc] hover:bg-[#151518]'
            }`}
          >
            Estrutura de Garantias & Patrimônio
          </button>
          <button
            onClick={() => setActiveTab('ciclo')}
            className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap rounded-sm ${
              activeTab === 'ciclo'
                ? 'bg-[#1e1e24] text-[#d4af37] border-b-2 border-[#d4af37]'
                : 'text-[#9b9487] hover:text-[#f5eedc] hover:bg-[#151518]'
            }`}
          >
            Sazonalidade & Inadimplemento
          </button>
        </div>

        {/* Content Tab 1: Tipologias de Operações */}
        {activeTab === 'operacoes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#121215] border border-[#2a2a32] hover:border-[#d4af37]/40 p-6 transition-colors">
              <DollarSign className="w-5 h-5 text-[#d4af37] mb-4" />
              <h3 className="text-base font-serif text-[#f5eedc] font-medium mb-2">Crédito de Custeio</h3>
              <p className="text-xs text-[#a8a194] leading-relaxed mb-4">
                Destinado a cobrir despesas habituais de ciclos produtivos (sementes, defensivos, fertilizantes). Possui vencimento sincronizado com o período de colheita e liquidação da safra.
              </p>
              <span className="text-[11px] font-mono text-[#c59b27] tracking-wider uppercase">CCR · CPR Financeira</span>
            </div>

            <div className="bg-[#121215] border border-[#2a2a32] hover:border-[#d4af37]/40 p-6 transition-colors">
              <Landmark className="w-5 h-5 text-[#d4af37] mb-4" />
              <h3 className="text-base font-serif text-[#f5eedc] font-medium mb-2">Financiamento de Investimento</h3>
              <p className="text-xs text-[#a8a194] leading-relaxed mb-4">
                Aquisição de maquinário, implementos agrícolas, irrigação, correção de solo e infraestrutura de armazenagem. Prazos plurianuais com carência e encargos atrelados a taxas subsidiadas ou livres.
              </p>
              <span className="text-[11px] font-mono text-[#c59b27] tracking-wider uppercase">BNDES · Finame · Moderfrota</span>
            </div>

            <div className="bg-[#121215] border border-[#2a2a32] hover:border-[#d4af37]/40 p-6 transition-colors">
              <Layers className="w-5 h-5 text-[#d4af37] mb-4" />
              <h3 className="text-base font-serif text-[#f5eedc] font-medium mb-2">Comercialização & CPR Física</h3>
              <p className="text-xs text-[#a8a194] leading-relaxed mb-4">
                Operações de adiantamento com tradição futura de grãos ou liquidação financeira por índice. Sujeitas a oscilações de bases de entrega, ágio/deságio e cláusulas penais rigorosas.
              </p>
              <span className="text-[11px] font-mono text-[#c59b27] tracking-wider uppercase">CPR Física · Barter · CDCA</span>
            </div>

            <div className="bg-[#121215] border border-[#2a2a32] hover:border-[#d4af37]/40 p-6 transition-colors">
              <Calendar className="w-5 h-5 text-[#d4af37] mb-4" />
              <h3 className="text-base font-serif text-[#f5eedc] font-medium mb-2">Giro Agroindustrial</h3>
              <p className="text-xs text-[#a8a194] leading-relaxed mb-4">
                Manutenção de fluxo de caixa em cooperativas, revendas de insumos, tradings e usinas. Frequente utilização de Cédulas de Crédito Bancário com garantias cruzadas entre sócios.
              </p>
              <span className="text-[11px] font-mono text-[#c59b27] tracking-wider uppercase">CCB · Cessão de Recebíveis</span>
            </div>
          </div>
        )}

        {/* Content Tab 2: Garantias & Patrimônio */}
        {activeTab === 'garantias' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-[#121215] border border-[#2a2a32] p-7">
              <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block mb-2">Garantia Imobiliária</span>
              <h3 className="text-lg font-serif text-[#f5eedc] mb-3">Alienação Fiduciária e Hipoteca Rural</h3>
              <p className="text-sm text-[#a8a194] leading-relaxed mb-4">
                A alienação fiduciária de bem imóvel rural (Lei nº 9.514/97) transfere a propriedade resolúvel ao credor bancário, permitindo procedimento extrajudicial de consolidação de propriedade em prazos sumários. O exame dos requisitos legais de intimação e avaliação do imóvel é crucial.
              </p>
              <p className="text-xs text-[#7d7568]">
                Diferente da hipoteca tradicional, a fiduciária afasta a necessidade de prévia ação executiva judicial para a tomada do bem.
              </p>
            </div>

            <div className="bg-[#121215] border border-[#2a2a32] p-7">
              <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block mb-2">Garantia Mobiliária</span>
              <h3 className="text-lg font-serif text-[#f5eedc] mb-3">Penhor Agrícola e Pecuário</h3>
              <p className="text-sm text-[#a8a194] leading-relaxed mb-4">
                Vinculação legal de lavouras em formação, estoques em armazéns gerais, semoventes ou rebanhos. Questões críticas emergem quando ocorrem perdas climáticas parciais ou desvios de produto objeto de depósito formal.
              </p>
              <p className="text-xs text-[#7d7568]">
                Exige análise precisa da descrição do grau de penhor e das áreas georreferenciadas na cédula.
              </p>
            </div>

            <div className="bg-[#121215] border border-[#2a2a32] p-7">
              <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block mb-2">Garantia Pessoal</span>
              <h3 className="text-lg font-serif text-[#f5eedc] mb-3">Aval, Fiança e Responsabilidade Familiar</h3>
              <p className="text-sm text-[#a8a194] leading-relaxed mb-4">
                Prática comum das instituições financeiras de exigir o aval pessoal de cônjuges, filhos, herdeiros ou sócios de empresas rurais, gerando contaminação do patrimônio pessoal por obrigações contraídas pela pessoa jurídica ou pelo patriarca.
              </p>
              <p className="text-xs text-[#7d7568]">
                A desvinculação e a análise de outorga uxória e solidariedade são aspectos de rigor técnico essencial.
              </p>
            </div>
          </div>
        )}

        {/* Content Tab 3: Sazonalidade & Inadimplemento */}
        {activeTab === 'ciclo' && (
          <div className="bg-[#121215] border border-[#2a2a32] p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] uppercase tracking-wider mb-3">
                  <AlertCircle className="w-4 h-4" />
                  <span>Dinâmica Temporal dos Contratos</span>
                </div>
                <h3 className="text-2xl font-serif text-[#f5eedc] mb-4">
                  O descompasso entre o ciclo biológico e a exigibilidade financeira
                </h3>
                <p className="text-sm text-[#a8a194] leading-relaxed mb-4">
                  Enquanto as obrigações bancárias possuem datas peremptórias de vencimento, a receita do agronegócio depende de fatores biológicos (germinação, floração, maturação) e climáticos (estiagens, geadas, excesso de chuvas na colheita) alheios à vontade do produtor.
                </p>
                <p className="text-sm text-[#a8a194] leading-relaxed">
                  Quando o pagamento não ocorre na data estipulada, a incidência automática de cláusulas penais, comissão de permanência disfarçada, juros moratórios capitalizados e cancelamento de bônus de adimplemento pode quadruplicar o saldo devedor em poucos meses se não houver pronta intervenção jurídica.
                </p>
              </div>

              <div className="bg-[#18181d] border border-[#30303a] p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#f5eedc] mb-1">Avisos e Notificações de Vencimento</h4>
                    <p className="text-xs text-[#9d9587] leading-relaxed">
                      O recebimento de notificação cartorária para purgação de mora em alienação fiduciária deflagra prazo improrrogável de 15 dias. A inércia resulta na consolidação definitiva da propriedade em favor do banco.
                    </p>
                  </div>
                </div>

                <div className="hairline-dark" />

                <div className="flex items-start gap-3">
                  <Landmark className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#f5eedc] mb-1">Direito à Prorrogação do Crédito Rural</h4>
                    <p className="text-xs text-[#9d9587] leading-relaxed">
                      O Manual de Crédito Rural (MCR 2.6.4) prevê hipóteses de prorrogação compulsória da dívida em caso de frustração de safras por intempérie ou queda severa de preços de mercado, condicionado ao cumprimento estrito de requisitos comprobatórios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AgroCreditContext;
