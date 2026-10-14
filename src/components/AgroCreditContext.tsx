import React, { useState } from 'react';
import { DollarSign, Landmark, Layers, Calendar, AlertCircle, ShieldAlert } from 'lucide-react';

export const AgroCreditContext: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'operacoes' | 'garantias' | 'ciclo'>('operacoes');

  return (
    <section id="credito-rural" className="py-24 lg:py-32 bg-[#050505] border-b border-[#1A1A1A] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD96A] font-semibold mb-3">
            <span className="w-8 h-[2px] bg-[#E6BE45]" />
            <span>DIAGNÓSTICO E COMPLEXIDADE DO SETOR</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-tight mb-5">
            A estrutura do financiamento agropecuário e suas implicações jurídicas
          </h2>

          <p className="text-base sm:text-lg text-[#C8C8C8] font-light leading-relaxed">
            As operações financeiras do agronegócio não seguem a dinâmica do crédito comercial urbano. Elas se articulam em torno de ciclos biológicos, janelas meteorológicas, cotações globais e garantias que frequentemente alcançam a totalidade dos ativos da família produtora.
          </p>
        </div>

        {/* Tab Controls: Sharp Architectural Segmented Bar */}
        <div className="flex items-center gap-2 pb-4 mb-12 border-b border-[#222222] overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('operacoes')}
            className={`px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer whitespace-nowrap rounded-[1px] ${
              activeTab === 'operacoes'
                ? 'bg-[#E6BE45] text-[#050505] shadow-[0_0_15px_rgba(230,190,69,0.3)]'
                : 'text-[#9E9E9E] hover:text-[#FFFFFF] hover:bg-[#151515]'
            }`}
          >
            Tipologias de Operações e Recursos
          </button>
          <button
            onClick={() => setActiveTab('garantias')}
            className={`px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer whitespace-nowrap rounded-[1px] ${
              activeTab === 'garantias'
                ? 'bg-[#E6BE45] text-[#050505] shadow-[0_0_15px_rgba(230,190,69,0.3)]'
                : 'text-[#9E9E9E] hover:text-[#FFFFFF] hover:bg-[#151515]'
            }`}
          >
            Estrutura de Garantias & Patrimônio
          </button>
          <button
            onClick={() => setActiveTab('ciclo')}
            className={`px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer whitespace-nowrap rounded-[1px] ${
              activeTab === 'ciclo'
                ? 'bg-[#E6BE45] text-[#050505] shadow-[0_0_15px_rgba(230,190,69,0.3)]'
                : 'text-[#9E9E9E] hover:text-[#FFFFFF] hover:bg-[#151515]'
            }`}
          >
            Sazonalidade & Inadimplemento
          </button>
        </div>

        {/* Tab 1: Operações - Editorial Grid with Intense Gold Accents */}
        {activeTab === 'operacoes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#090909] border border-[#1F1F1F] hover:border-[#E6BE45]/60 p-8 transition-colors duration-300 relative group">
              <div className="w-12 h-12 bg-[#151515] border border-[#E6BE45]/40 flex items-center justify-center text-[#FFD96A] mb-6">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#FFFFFF] font-medium mb-3">Crédito de Custeio</h3>
              <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed mb-6">
                Destinado a cobrir despesas de ciclos produtivos (insumos, sementes, fertilizantes). Possui vencimento sincronizado com o período de colheita e liquidação da safra.
              </p>
              <div className="pt-4 border-t border-[#1C1C1C] text-[11px] font-mono text-[#FFD96A] uppercase tracking-wider font-semibold">
                CCR · CPR Financeira
              </div>
            </div>

            <div className="bg-[#090909] border border-[#1F1F1F] hover:border-[#E6BE45]/60 p-8 transition-colors duration-300 relative group">
              <div className="w-12 h-12 bg-[#151515] border border-[#E6BE45]/40 flex items-center justify-center text-[#FFD96A] mb-6">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#FFFFFF] font-medium mb-3">Investimento Rural</h3>
              <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed mb-6">
                Aquisição de maquinário, implementos agrícolas, irrigação, correção de solo e infraestrutura de armazenagem. Prazos plurianuais com carência e encargos subsidiados ou livres.
              </p>
              <div className="pt-4 border-t border-[#1C1C1C] text-[11px] font-mono text-[#FFD96A] uppercase tracking-wider font-semibold">
                BNDES · Finame · Moderfrota
              </div>
            </div>

            <div className="bg-[#090909] border border-[#1F1F1F] hover:border-[#E6BE45]/60 p-8 transition-colors duration-300 relative group">
              <div className="w-12 h-12 bg-[#151515] border border-[#E6BE45]/40 flex items-center justify-center text-[#FFD96A] mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#FFFFFF] font-medium mb-3">Comercialização & CPR</h3>
              <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed mb-6">
                Operações de adiantamento com tradição física futura de grãos ou liquidação financeira por índice. Sujeitas a oscilações de bases de entrega, ágio/deságio e cláusulas penais rigorosas.
              </p>
              <div className="pt-4 border-t border-[#1C1C1C] text-[11px] font-mono text-[#FFD96A] uppercase tracking-wider font-semibold">
                CPR Física · Barter · CDCA
              </div>
            </div>

            <div className="bg-[#090909] border border-[#1F1F1F] hover:border-[#E6BE45]/60 p-8 transition-colors duration-300 relative group">
              <div className="w-12 h-12 bg-[#151515] border border-[#E6BE45]/40 flex items-center justify-center text-[#FFD96A] mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#FFFFFF] font-medium mb-3">Giro Agroindustrial</h3>
              <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed mb-6">
                Manutenção de fluxo de caixa em cooperativas, revendas de insumos, tradings e usinas. Frequente utilização de Cédulas de Crédito Bancário com garantias cruzadas entre sócios.
              </p>
              <div className="pt-4 border-t border-[#1C1C1C] text-[11px] font-mono text-[#FFD96A] uppercase tracking-wider font-semibold">
                CCB · Cessão de Recebíveis
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Garantias - High Contrast Columns */}
        {activeTab === 'garantias' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-[#090909] border-t-2 border-t-[#E6BE45] border-x border-b border-[#1F1F1F] p-8">
              <span className="text-xs font-mono text-[#FFD96A] uppercase tracking-wider block mb-2 font-semibold">
                Garantia Imobiliária
              </span>
              <h3 className="text-2xl font-serif text-[#FFFFFF] mb-4">Alienação Fiduciária e Hipoteca Rural</h3>
              <p className="text-sm text-[#A8A8A8] leading-relaxed mb-4 font-light">
                A alienação fiduciária de bem imóvel rural (Lei nº 9.514/97) transfere a propriedade resolúvel ao credor bancário, permitindo procedimento extrajudicial de consolidação de propriedade em prazos sumários. O exame dos requisitos legais de intimação pessoal e avaliação do imóvel é crucial.
              </p>
              <p className="text-xs text-[#7A7A7A] italic">
                Diferente da hipoteca tradicional, a fiduciária afasta a necessidade de prévia ação executiva judicial para a tomada do bem.
              </p>
            </div>

            <div className="bg-[#090909] border-t-2 border-t-[#E6BE45] border-x border-b border-[#1F1F1F] p-8">
              <span className="text-xs font-mono text-[#FFD96A] uppercase tracking-wider block mb-2 font-semibold">
                Garantia Mobiliária
              </span>
              <h3 className="text-2xl font-serif text-[#FFFFFF] mb-4">Penhor Agrícola e Pecuário</h3>
              <p className="text-sm text-[#A8A8A8] leading-relaxed mb-4 font-light">
                Vinculação legal de lavouras em formação, estoques em armazéns gerais, semoventes ou rebanhos. Questões críticas emergem quando ocorrem perdas climáticas parciais ou desvios de produto objeto de depósito formal.
              </p>
              <p className="text-xs text-[#7A7A7A] italic">
                Exige análise precisa da descrição do grau de penhor e das áreas georreferenciadas na cédula.
              </p>
            </div>

            <div className="bg-[#090909] border-t-2 border-t-[#E6BE45] border-x border-b border-[#1F1F1F] p-8">
              <span className="text-xs font-mono text-[#FFD96A] uppercase tracking-wider block mb-2 font-semibold">
                Garantia Pessoal
              </span>
              <h3 className="text-2xl font-serif text-[#FFFFFF] mb-4">Aval, Fiança e Responsabilidade Familiar</h3>
              <p className="text-sm text-[#A8A8A8] leading-relaxed mb-4 font-light">
                Prática comum das instituições financeiras de exigir o aval pessoal de cônjuges, filhos ou sócios de empresas rurais, gerando contaminação do patrimônio pessoal por obrigações contraídas pela pessoa jurídica ou pelo patriarca.
              </p>
              <p className="text-xs text-[#7A7A7A] italic">
                A desvinculação e a análise de outorga uxória e solidariedade são aspectos de rigor técnico essencial.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Ciclo & Inadimplemento */}
        {activeTab === 'ciclo' && (
          <div className="bg-[#090909] border border-[#1F1F1F] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFD96A] uppercase tracking-wider font-semibold">
                  <AlertCircle className="w-4 h-4" />
                  <span>Dinâmica Temporal dos Contratos Rurais</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#FFFFFF]">
                  O descompasso entre o ciclo biológico da lavoura e a exigibilidade financeira
                </h3>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Enquanto as obrigações bancárias possuem datas peremptórias de vencimento, a receita do agronegócio depende de fatores biológicos (germinação, floração, maturação) e climáticos (estiagens, geadas, excesso de chuvas na colheita) alheios à vontade do produtor.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Quando o pagamento não ocorre na data estipulada, a incidência de encargos moratórios capitalizados, comissões disfarçadas e perda de bônus pode inviabilizar a liquidação. A atuação jurídica tempestiva evita medidas expropriatórias extremas.
                </p>
              </div>

              <div className="lg:col-span-5 bg-[#151515] border-l-2 border-[#E6BE45] p-6 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-[#FFFFFF] mb-1">Avisos e Notificações de Vencimento</h4>
                  <p className="text-xs text-[#9E9E9E] leading-relaxed">
                    A notificação cartorária para purgação de mora em alienação fiduciária deflagra prazo improrrogável de 15 dias corridos. A inércia resulta na consolidação definitiva da propriedade pelo banco.
                  </p>
                </div>
                <div className="hairline-dark" />
                <div>
                  <h4 className="text-sm font-semibold text-[#FFFFFF] mb-1">Direito à Prorrogação (MCR 2.6.4)</h4>
                  <p className="text-xs text-[#9E9E9E] leading-relaxed">
                    O Manual de Crédito Rural prevê a prorrogação compulsória de operações de crédito rural em casos de quebra de safra comprovada por laudo pericial agronômico idôneo.
                  </p>
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
