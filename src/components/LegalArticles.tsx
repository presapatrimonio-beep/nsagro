import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

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
    date: '20 de Setembro de 2026',
    readTime: '7 min de leitura',
    author: 'Equipe de Direito Bancário e Agronegócio · NS Advocacia',
    summary:
      'Como a modernização legislativa da Cédula de Produto Rural alterou as dinâmicas de custeio, liquidação física e execução direta de lavouras dadas em penhor.',
    content: [
      {
        sectionTitle: 'A transformação da CPR no financiamento privado',
        paragraphs: [
          'Instituída originalmente pela Lei nº 8.929/1994, a Cédula de Produto Rural tornou-se o principal título de crédito representativo de promessa de entrega futura de produtos agropecuários. Com o advento da Lei do Agro (Lei nº 13.986/2020) e alterações subsequentes, a emissão da CPR foi ampliada, autorizando a inclusão de cláusula de correção em moeda estrangeira e registro obrigatório em entidades registradoras autorizadas pelo Bacen.',
          'A diferenciação entre CPR física (entrega de mercadoria em grão) e financeira (liquidação pelo índice de preço pactuado) impõe reflexos processuais decisivos em caso de não cumprimento da obrigação.',
        ],
      },
      {
        sectionTitle: 'Pressupostos de liquidez e defesas cabíveis',
        paragraphs: [
          'A cobrança executiva da CPR exige que o título contenha com precisão a descrição dos produtos, critérios claros de apuração de preços e comprovante tempestivo do registro eletrônico perante depositária autorizada.',
          'Defesas em execuções de CPR financeira frequentemente versam sobre a ocorrência de caso fortuito climática (frustração integral de safra), duplicidade de garantias e discrepância entre os índices de liquidação financeira estipulados e as médias reais de mercado divulgadas por órgãos oficiais.',
        ],
      },
    ],
    references: [
      'Lei Federal nº 8.929/1994 (Cédula de Produto Rural)',
      'Lei Federal nº 13.986/2020 (Nova Lei do Agro)',
      'Resoluções do Banco Central sobre Registro de CPRs em Registradoras',
    ],
  },
];

export const LegalArticles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Crédito Rural', 'Garantias', 'Contratos Bancários'];

  const filteredArticles =
    activeCategory === 'Todos'
      ? articlesData
      : articlesData.filter((art) => art.category === activeCategory);

  return (
    <section id="artigos" className="py-28 lg:py-36 bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header and Filter Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8AD36] font-semibold block mb-4">
              PUBLICAÇÕES & DOUTRINA APLICADA
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-normal leading-tight mb-6">
              Conteúdo jurídico especializado no agronegócio
            </h2>
            <p className="text-lg text-[#B8B8B8] font-light leading-relaxed">
              Análises e artigos informativos sobre as repercussões legais e jurisprudenciais do direito bancário aplicado ao setor agropecuário.
            </p>
          </div>

          {/* Category Filter Controls: Minimalist Clean Text Buttons */}
          <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-none border-b border-white/[0.08] lg:border-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-2 text-sm font-medium tracking-wide transition-colors whitespace-nowrap cursor-pointer relative ${
                  activeCategory === cat
                    ? 'text-[#FFFFFF]'
                    : 'text-[#777777] hover:text-[#B8B8B8]'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D8AD36]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List — Pure Editorial Layout directly on the background (No Cards) */}
        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08] mb-16">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="py-12 group cursor-pointer transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                {/* Meta Column (3 cols) */}
                <div className="lg:col-span-3 space-y-2">
                  <span className="font-mono text-xs text-[#D8AD36] uppercase tracking-wider font-semibold block">
                    {article.category}
                  </span>
                  <p className="font-mono text-xs text-[#777777]">
                    {article.date} · {article.readTime}
                  </p>
                </div>

                {/* Title & Excerpt Column (8 cols) */}
                <div className="lg:col-span-8 space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] font-normal group-hover:text-[#F3D36A] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-base text-[#B8B8B8] font-light leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                {/* Action Icon (1 col) */}
                <div className="lg:col-span-1 flex items-center lg:justify-end pt-2 lg:pt-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#D8AD36] group-hover:text-[#FFFFFF] transition-colors">
                    <span className="hidden sm:inline lg:hidden">Ler</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D8AD36] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Informative Disclaimer */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-[#777777] max-w-3xl mx-auto italic font-light">
            Aviso: O conteúdo dos artigos possui finalidade estritamente informativa e acadêmica. As teses jurídicas não constituem orientação vinculante e não substituem o exame técnico de cada caso concreto por advogado habilitado.
          </p>
        </div>
      </div>

      {/* Full Article Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-12">
          <div className="bg-[#090909] border border-white/[0.12] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-12 relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 text-[#999999] hover:text-[#FFFFFF] transition-colors cursor-pointer"
              aria-label="Fechar artigo"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="border-b border-white/[0.08] pb-8 mb-8">
              <div className="flex items-center gap-3 text-xs font-mono text-[#D8AD36] uppercase tracking-wider font-semibold mb-4">
                <span>{selectedArticle.category}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
                <span>·</span>
                <span>{selectedArticle.date}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF] font-normal leading-tight mb-4">
                {selectedArticle.title}
              </h2>

              <p className="text-base text-[#D0D0D0] font-light leading-relaxed">
                {selectedArticle.subtitle}
              </p>
            </div>

            {/* Article Content */}
            <div className="space-y-8 text-base text-[#B8B8B8] leading-relaxed font-light">
              {selectedArticle.content.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FFFFFF] font-normal">
                    {sec.sectionTitle}
                  </h3>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* References */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#FFFFFF] font-semibold block">
                Legislação e Referências Doutrinárias
              </span>
              <ul className="space-y-1.5 text-xs text-[#777777] font-mono">
                {selectedArticle.references.map((ref, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#D8AD36]">▪</span>
                    <span>{ref}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Footer Note */}
            <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#777777]">
              <span>NS Advocacia • OAB/SP 318.251</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-[#D8AD36] hover:text-[#FFFFFF] uppercase tracking-wider font-semibold cursor-pointer"
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
