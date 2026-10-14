import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import heroImage from '../assets/images/hero_agronegocio_lavoura_1791945719310.jpg';
import nsLogoImg from '../assets/ns.png';

interface HeroProps {
  onOpenContact: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreClick }) => {
  return (
    <section id="top" className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-36 pb-12 overflow-hidden bg-[#0c0c0e]">
      {/* Background Image with Measured Editorial Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lavouras e infraestrutura do agronegócio brasileiro ao entardecer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Deep noir gradient overlays for perfect contrast and editorial warmth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/85 to-[#0c0c0e]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-14 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Prominent Official NS Monogram Emblem in Hero */}
          <div className="mb-6 flex items-center gap-4">
            <div className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 relative">
              <img
                src={nsLogoImg}
                alt="NS Advocacia Monograma"
                className="w-full h-full object-contain filter drop-shadow-[0_8px_24px_rgba(212,175,55,0.45)] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-14 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent hidden sm:block" />
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#d4af37] font-semibold">
                <span>NS ADVOCACIA</span>
                <span aria-hidden="true" className="text-[#8e6817]">·</span>
                <span>DESDE AS RAÍZES</span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#a39b8e] font-light tracking-widest uppercase mt-0.5">
                Direito Bancário Estratégico para o Agronegócio
              </span>
            </div>
          </div>

          {/* Headline - Editorial Serif */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f5eedc] font-normal leading-[1.12] tracking-tight mb-6">
            Crédito, patrimônio e estratégia jurídica no{' '}
            <span className="italic font-light text-gold-gradient font-serif">agronegócio.</span>
          </h1>

          {/* Subtitle / Lead Paragraph */}
          <p className="text-base sm:text-lg text-[#c3bbb0] leading-relaxed font-light max-w-2xl mb-10">
            Operações de crédito rural, garantias e passivos bancários exigem análise jurídica que considere os contratos, a documentação, a estrutura patrimonial e o ciclo produtivo de cada operação.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-[#0c0c0e] bg-gradient-to-r from-[#edd387] via-[#d4af37] to-[#ba8c26] rounded-[2px] shadow-[0_4px_20px_rgba(212,175,55,0.25)] transition-all duration-200 hover:brightness-110 active:scale-[0.98] cursor-pointer"
            >
              <span>Solicitar Análise Inicial</span>
              <ChevronRight className="w-4 h-4 text-[#0c0c0e]" />
            </button>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-medium tracking-wider uppercase text-[#e5decf] bg-[#1a191d]/80 hover:bg-[#25242a] border border-[#d4af37]/30 hover:border-[#d4af37]/60 rounded-[2px] transition-all duration-200 cursor-pointer"
            >
              <span>Conhecer a Atuação</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#d4af37]" />
            </button>
          </div>
        </div>
      </div>

      {/* Institutional Reality Strip (Below Hero) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 w-full">
        <div className="hairline-gold mb-6 opacity-60" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <span className="block text-[11px] font-mono tracking-wider uppercase text-[#c59b27] mb-1">
              01. Ciclo & Safra
            </span>
            <p className="text-xs sm:text-sm text-[#e6ded0] font-medium leading-snug">
              Fluxo de caixa atrelado ao calendário de plantio e colheita
            </p>
          </div>

          <div>
            <span className="block text-[11px] font-mono tracking-wider uppercase text-[#c59b27] mb-1">
              02. Instrumentos & Títulos
            </span>
            <p className="text-xs sm:text-sm text-[#e6ded0] font-medium leading-snug">
              CPR, CCB, CCR, CDCA e contratos de custeio/investimento
            </p>
          </div>

          <div>
            <span className="block text-[11px] font-mono tracking-wider uppercase text-[#c59b27] mb-1">
              03. Garantias & Risco
            </span>
            <p className="text-xs sm:text-sm text-[#e6ded0] font-medium leading-snug">
              Alienação fiduciária, hipoteca, penhor e responsabilidades cruzadas
            </p>
          </div>

          <div>
            <span className="block text-[11px] font-mono tracking-wider uppercase text-[#c59b27] mb-1">
              04. Passivos & Defesa
            </span>
            <p className="text-xs sm:text-sm text-[#e6ded0] font-medium leading-snug">
              Negociação extrajudicial, embargos e contencioso estratégico
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
