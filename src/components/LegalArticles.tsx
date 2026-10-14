import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, X } from 'lucide-react';

export interface Article {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  date: string;
  updatedDate?: string;
  readTime: string;
  author: string;
  summary: string;
  content: {
    sectionTitle: string;
    paragraphs: string[];
  }[];
  references: string[];
}

const articlesData: Article[] = [
  {
    id: 'prorrogacao-credito-rural',
    category: 'Crédito Rural',
    title: 'O direito à prorrogação do crédito rural por intempérie climática ou queda de preços',
    subtitle: 'Requisitos do item 2.6.4 do Manual de Crédito Rural e a jurisprudência da Súmula 298 do STJ',
    date: '14 de Outubro de 2026',
    updatedDate: '14 de Outubro de 2026',
    readTime: '6 min de leitura',
    author: 'Equipe de Direito Bancário e Agronegócio · NS Advocacia',
    summary:
      'Compreenda os requisitos materiais e formais para postular a prorrogação das operações de custeio e investimento rural perante o agente financeiro em situações de frustração de safra.',
    content: [
      {
        sectionTitle: 'A natureza especial do crédito rural brasileiro',
        paragraphs: [
          'O crédito rural no Brasil não constitui mera relação de mútuo financeiro regulada pelo Código Civil ou pelas regras ordinárias do direito bancário urbano. Criado pela Lei nº 4.829/1965, o Sistema Nacional de Crédito Rural foi desenhado como instrumento de fomento para garantir a estabilidade do abastecimento nacional e a continuidade da atividade agropecuária.',
          'Em virtude dessa finalidade constitucional e legal, o produtor rural não pode ser tratado como um devedor comum quando eventos imprevisíveis — como secas severas, excesso de precipitação pluviométrica, pragas ou desabamento abrupto nas cotações de commodities — comprometem sua capacidade de pagamento no vencimento da operação.',
        ],
      },
      {
        sectionTitle: 'A Súmula 298 do STJ e o MCR 2.6.4',
        paragraphs: [
          'O Superior Tribunal de Justiça consolidou entendimento histórico por meio da Súmula nº 298: "O alongamento de dívida originada de crédito rural não constitui faculdade da instituição financeira, mas, direito do devedor nos termos da lei".',
          'Para que esse direito possa ser exercido, todavia, o produtor deve cumprir rigorosamente as condições estipuladas no item 2.6.4 do Manual de Crédito Rural (MCR), editado pelo Banco Central do Brasil. Entre os requisitos essenciais estão: a) comprovação da incapacidade de pagamento por fatores fortuitos alheios à sua vontade; b) apresentação de laudo técnico agronômico idôneo; c) comprovação de viabilidade econômica de recuperação da atividade nas safras subsequentes.',
        ],
      },
      {
        sectionTitle: 'O momento processual e probatório do pedido',
        paragraphs: [
          'Um dos equívocos mais frequentes observados na prática é o produtor aguardar o inadimplemento formal da parcela para formular o pedido de prorrogação. O requerimento administrativo deve ser protocolizado formalmente perante a agência bancária antes do vencimento do título.',
          'O protocolo prévio com aviso de recebimento e instruído com o laudo pericial agronômico e o cronograma de safras futuras descaracteriza a mora culposa, impedindo que o banco inscreva o produtor nos cadastros restritivos de crédito ou dê início à execução de garantias enquanto a solicitação não for tecnicamente apreciada.',
        ],
      },
    ],
    references: [
      'Lei Federal nº 4.829/1965 (Institucionalização do Crédito Rural)',
      'Súmula nº 298 do Superior Tribunal de Justiça (STJ)',
      'Manual de Crédito Rural (MCR) - Seção 2.6, item 4 (Bacen)',
      'REsp 1.333.977/MT - Rel. Min. Maria Isabel Gallotti',
    ],
  },
  {
    id: 'alienacao-fiduciaria-imovel-rural',
    category: 'Garantias',
    title: 'Alienação fiduciária de imóveis rurais e a defesa prévia contra a consolidação de propriedade',
    subtitle: 'Aspectos procedimentais da Lei 9.514/97, intimação pessoal e avaliação do bem rural',
    date: '02 de Outubro de 2026',
    readTime: '8 min de leitura',
    author: 'Equipe de Direito Bancário e Agronegócio · NS Advocacia',
    summary:
      'Uma análise minuciosa das fases extrajudiciais da consolidação da propriedade fiduciária e os marcos temporais de intervenção jurídica cabíveis para evitar leilões prematuros.',
    content: [
      {
        sectionTitle: 'A severidade da garantia fiduciária sobre imóveis rurais',
        paragraphs: [
          'A introdução da alienação fiduciária de coisa imóvel pela Lei nº 9.514/1997 e sua ampla utilização pelas instituições financeiras em cédulas agropecuárias transformou profundamente o risco patrimonial do produtor rural. Ao alienar fiduciariamente a fazenda, a propriedade resolúvel é transferida ao credor, dispensando ação judicial de execução para a retomada do imóvel.',
          'Em caso de inadimplemento, o credor bancário solicita ao Oficial de Registro de Imóveis competente a intimação do fiduciante para purgar a mora no prazo peremptório de 15 (quinze) dias.',
        ],
      },
      {
        sectionTitle: 'Nulidades frequentes no procedimento cartorário',
        paragraphs: [
          'A jurisprudência pacífica dos Tribunais Estaduais e do STJ impõe observância estrita a formalidades essenciais. A intimação pessoal do devedor fiduciante e de seu cônjuge é obrigatória; a notificação por edital somente é admitida após esgotadas todas as diligências reais para localização do produtor.',
          'Outro aspecto relevante diz respeito ao valor de avaliação do imóvel fixado para o primeiro leilão público. A legislação impõe que o imóvel não seja leiloado por preço vil ou com base em estimativa fiscal defasada que não reflita o valor real de mercado das terras e de suas benfeitorias produtivas.',
        ],
      },
    ],
    references: [
      'Lei Federal nº 9.514/1997 (Alienação Fiduciária de Imóveis)',
      'Lei Federal nº 14.711/2023 (Marco Legal das Garantias)',
      'Tema 1.095 do Superior Tribunal de Justiça (STJ)',
      'Código de Processo Civil, artigos 805 e 891 (vedação ao preço vil)',
    ],
  },
  {
    id: 'cpr-financeira-versus-fisica',
    category: 'Contratos Bancários',
    title: 'CPR Física e Financeira: distinções fundamentais na emissão e execução',
    subtitle: 'A evolução da Lei 8.929/94 pós-Lei do Agro e os limites da liquidez executiva',
    date: '18 de Setembro de 2026',
    readTime: '5 min de leitura',
    author: 'Equipe de Direito Bancário e Agronegócio · NS Advocacia',
    summary:
      'Como a alteração do regime jurídico das Cédulas de Produto Rural impacta as obrigações de entrega física de grãos e as controvérsias de liquidez em cobranças bancárias.',
    content: [
      {
        sectionTitle: 'O papel da Cédula de Produto Rural no fomento agropecuário',
        paragraphs: [
          'A Cédula de Produto Rural (CPR), instituída pela Lei nº 8.929/1994, consolidou-se como o instrumento central de financiamento privado da agricultura brasileira. Contudo, as alterações promovidas pela Lei nº 13.986/2020 (Lei do Agro) e legislações subsequentes ampliaram consideravelmente o rol de emissores e a sofisticação das cláusulas financeiras.',
          'A distinção primordial reside entre a CPR com liquidação física (que obriga o emitente a entregar quantidade certa de produto rural colhido) e a CPR com liquidação financeira (que vincula o pagamento a índice de preço de mercado ou taxa prefixada).',
        ],
      },
      {
        sectionTitle: 'Controvérsias executivas e desvio de finalidade',
        paragraphs: [
          'Não raro, constata-se a utilização da CPR financeira como mero instrumento de simulação para operações de capital de giro comum, desprovidas de destinação à atividade agropecuária e inflacionadas com encargos remuneratórios ilegais.',
          'Em sede de contencioso, o exame da efetiva liberação dos recursos e da vinculação da cédula à produção agrícola real pode fundamentar a desconstituição de sua força executiva ou o expurgo de encargos abusivos.',
        ],
      },
    ],
    references: [
      'Lei Federal nº 8.929/1994 (Cédula de Produto Rural)',
      'Lei Federal nº 13.986/2020 (Lei do Agro)',
      'Súmula 286 do Superior Tribunal de Justiça',
      'Artigo 784, inciso XII, do Código de Processo Civil',
    ],
  },
];

export const LegalArticles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Crédito Rural', 'Garantias', 'Contratos Bancários'];

  const filteredArticles = activeCategory === 'Todos'
    ? articlesData
    : articlesData.filter((a) => a.category === activeCategory);

  return (
    <section id="artigos" className="py-24 lg:py-32 bg-[#050505] border-b border-[#1A1A1A] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD96A] font-semibold mb-3">
              <span className="w-8 h-[2px] bg-[#E6BE45]" />
              <span>PRODUÇÃO TÉCNICA & DOUTRINA</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-tight mb-3">
              Conteúdo jurídico especializado no agronegócio
            </h2>
            <p className="text-base text-[#C8C8C8] font-light leading-relaxed">
              Análises e artigos informativos sobre as repercussões legais e jurisprudenciais do direito bancário aplicado ao setor agropecuário.
            </p>
          </div>

          {/* Category Filter Controls in Gold */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-[1px] transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#E6BE45] text-[#050505] shadow-[0_0_15px_rgba(230,190,69,0.35)]'
                    : 'bg-[#0D0D0D] text-[#A0A0A0] hover:text-[#FFFFFF] hover:bg-[#151515] border border-[#222222]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-[#090909] border border-[#1F1F1F] hover:border-[#E6BE45] p-8 rounded-[1px] flex flex-col justify-between transition-all duration-300 group shadow-[0_5px_25px_rgba(0,0,0,0.7)]"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFD96A] uppercase tracking-wider font-semibold mb-4">
                  <span>{article.category}</span>
                  <span aria-hidden="true" className="text-[#E6BE45]">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#FFFFFF] font-normal group-hover:text-[#FFD96A] transition-colors leading-snug mb-4">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed mb-8">
                  {article.summary}
                </p>
              </div>

              <div>
                <div className="hairline-dark mb-5" />
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#777777] font-mono">{article.date}</span>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#FFD96A] group-hover:text-[#FFFFFF] transition-colors cursor-pointer"
                  >
                    <span>LER ARTIGO</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Informative Disclaimer */}
        <div className="text-center">
          <p className="text-xs text-[#777777] max-w-3xl mx-auto italic font-light">
            Aviso: O conteúdo dos artigos possui finalidade estritamente informativa e acadêmica. As teses jurídicas não constituem orientação vinculante e não substituem o exame técnico de cada caso concreto por advogado habilitado.
          </p>
        </div>
      </div>

      {/* Full Article Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10">
          <div className="bg-[#090909] border border-[#E6BE45]/60 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-[1px] p-6 sm:p-12 relative shadow-[0_0_50px_rgba(0,0,0,0.9)]">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 text-[#999999] hover:text-[#FFFFFF] hover:bg-[#151515] rounded transition-colors cursor-pointer"
              aria-label="Fechar artigo"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="border-b border-[#222222] pb-6 mb-8">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFD96A] uppercase tracking-wider font-semibold mb-3">
                <span>{selectedArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.date}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF] font-normal leading-tight mb-4">
                {selectedArticle.title}
              </h2>

              <p className="text-sm sm:text-base text-[#D0D0D0] font-light leading-relaxed">
                {selectedArticle.subtitle}
              </p>

              <div className="mt-4 pt-4 border-t border-[#1A1A1A] text-xs text-[#888888]">
                <span>Autor: </span>
                <span className="text-[#FFD96A] font-semibold">{selectedArticle.author}</span>
              </div>
            </div>

            <div className="space-y-8 text-sm sm:text-base text-[#D0D0D0] font-light leading-relaxed">
              {selectedArticle.content.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FFFFFF] font-medium">
                    {sec.sectionTitle}
                  </h3>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed text-xs sm:text-sm text-[#B0B0B0]">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-[#050505] border-t-2 border-[#E6BE45] rounded-[1px]">
              <span className="block text-xs font-mono text-[#FFD96A] uppercase tracking-wider font-bold mb-3">
                Dispositivos e Precedentes Referenciados
              </span>
              <ul className="space-y-2 text-xs text-[#A0A0A0]">
                {selectedArticle.references.map((ref, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#E6BE45] font-mono">›</span>
                    <span>{ref}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs text-[#777777]">
              <span>NS Advocacia • OAB/SP 318.251</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-[#FFD96A] font-bold hover:underline"
              >
                Fechar Artigo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LegalArticles;
