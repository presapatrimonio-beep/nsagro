import React from 'react';
import agroOperationImage from '../assets/images/hero_agronegocio_lavoura_1791945719310.jpg';

export const EditorialIntro: React.FC = () => {
  return (
    <section id="visao-geral" className="py-28 lg:py-36 bg-[#090909]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Top Header Statement */}
        <div className="max-w-4xl mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8AD36] font-semibold block mb-4">
            DIREITO BANCÁRIO APLICADO AO AGRONEGÓCIO
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] font-normal leading-[1.12]">
            As operações financeiras do campo exigem{' '}
            <span className="text-[#F3D36A]">análise jurídica contextualizada</span>{' '}
            à realidade de cada safra.
          </h2>
        </div>

        {/* Asymmetrical 2-Column Editorial Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Text Commentary */}
          <div className="lg:col-span-6 space-y-8">
            <div className="text-lg text-[#B8B8B8] leading-relaxed font-light space-y-6">
              <p>
                O financiamento do agronegócio envolve instrumentos contratuais, garantias e obrigações que precisam ser examinados à luz da operação concreta. Ao contrário do crédito comercial genérico, o crédito rural guarda conexão indissociável com o ciclo da terra, com as janelas pluviométricas e com a cotação internacional de commodities em moeda estrangeira.
              </p>
              <p>
                A análise jurídica conduzida pela <strong className="text-[#FFFFFF] font-medium">NS Advocacia</strong> considera a origem dos recursos contratados, a higidez das taxas pactuadas, o histórico da relação com o agente financeiro credor, a documentação formal disponível e os reflexos imediatos sobre a atividade produtiva e o patrimônio da família ou da empresa rural.
              </p>
              <p>
                O objetivo consiste em identificar questões juridicamente relevantes e avaliar alternativas compatíveis com os fatos, os documentos e a legislação aplicável — sem promessas ilusórias, sem fórmulas padronizadas e com rigor doutrinário estrito.
              </p>
            </div>

            {/* 3 Pillars Clean Editorial List (No Cards, Pure Text & Thin Dividing Hairlines) */}
            <div className="pt-10 border-t border-white/[0.08] space-y-6">
              <div>
                <h3 className="text-xl font-serif text-[#FFFFFF] mb-2">Equilíbrio Contratual</h3>
                <p className="text-[15px] text-[#B8B8B8] font-light leading-relaxed">
                  Confronto de encargos, taxas de juros e cláusulas resolutivas com os limites regulatórios do crédito rural e normas do Banco Central.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <h3 className="text-xl font-serif text-[#FFFFFF] mb-2">Higidez Documental</h3>
                <p className="text-[15px] text-[#B8B8B8] font-light leading-relaxed">
                  Exame de CPRs, cédulas de crédito e registros formais perante Cartórios de Registro de Imóveis competentes.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <h3 className="text-xl font-serif text-[#FFFFFF] mb-2">Patrimônio Rural</h3>
                <p className="text-[15px] text-[#B8B8B8] font-light leading-relaxed">
                  Avaliação da extensão de garantias fiduciárias, hipotecas e impenhorabilidade constitucional da pequena propriedade familiar.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Expansive Agribusiness Photograph (No Thick Borders, Clean & Cinematic) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="overflow-hidden">
              <img
                src={agroOperationImage}
                alt="Operação de colheita e logística em larga escala no agronegócio brasileiro"
                className="w-full h-[520px] lg:h-[600px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[13px] text-[#777777] font-light leading-relaxed">
              Operação de colheita em larga escala: o agronegócio brasileiro opera sob volumes vultosos e prazos biológicos peremptórios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialIntro;
