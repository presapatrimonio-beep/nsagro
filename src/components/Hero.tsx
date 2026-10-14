import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import heroImage from '../assets/images/hero_agronegocio_lavoura_1791945719310.jpg';

interface HeroProps {
  onOpenContact: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreClick }) => {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-between bg-[#050505] overflow-hidden pt-28 lg:pt-32">
      {/* Background & Asymmetrical Cinematic Photography */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Main Hero Photograph with Rich Golden Hour Illumination */}
          <img
            src={heroImage}
            alt="Operação agrícola brasileira com lavouras e maquinário ao pôr do sol"
            className="w-full h-full object-cover object-[70%_center] lg:object-right transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />

          {/* Measured Obsidian Gradient Overlays: Intense on text area (left), transparent on photography (right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 via-55% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent via-40% to-[#050505]/70" />
          <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Main Content: Asymmetrical Architecture */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 w-full flex-1 flex flex-col justify-center py-12 lg:py-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Identificação Institucional da Área */}
          <div className="mb-8 flex flex-col">
            <span className="font-mono text-xs sm:text-sm tracking-[0.28em] uppercase text-[#FFD96A] font-bold">
              DIREITO BANCÁRIO & AGRONEGÓCIO
            </span>
            <span className="text-xs sm:text-sm text-[#D0D0D0] tracking-wider mt-1 font-light">
              Assessoria Jurídica Estratégica em Operações Financeiras Rurais
            </span>
          </div>

          {/* Mandatory Headline: High-Contrast Editorial Serif */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#FFFFFF] font-normal leading-[1.08] tracking-tight mb-8">
            Crédito, patrimônio e estratégia jurídica no{' '}
            <span className="text-[#FFD96A] font-medium drop-shadow-[0_2px_20px_rgba(255,217,106,0.35)]">
              agronegócio.
            </span>
          </h1>

          {/* Institutional Body Paragraph */}
          <p className="text-base sm:text-lg text-[#D0D0D0] leading-relaxed font-light max-w-2xl mb-12">
            Operações de crédito rural, garantias e passivos bancários exigem análise jurídica que considere os contratos, a documentação, a estrutura patrimonial e o ciclo produtivo de cada operação.
          </p>

          {/* Command Buttons with Intense Contrast */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#050505] bg-gradient-to-r from-[#FFD96A] via-[#E6BE45] to-[#B78B24] rounded-[1px] shadow-[0_0_30px_rgba(230,190,69,0.45)] hover:shadow-[0_0_40px_rgba(230,190,69,0.65)] hover:brightness-110 active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>SOLICITAR ANÁLISE INICIAL</span>
              <ChevronRight className="w-4 h-4 text-[#050505] stroke-[3]" />
            </button>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:py-5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#FFFFFF] bg-[#050505]/90 hover:bg-[#151515] border-2 border-[#E6BE45] hover:border-[#FFD96A] rounded-[1px] shadow-[0_0_15px_rgba(0,0,0,0.8)] transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>CONHECER A ATUAÇÃO</span>
              <ArrowDown className="w-4 h-4 text-[#E6BE45] stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Redesigned Architectural Ribbon (Eliminating PowerPoint Slide Card Appearance) */}
      <div className="relative z-10 w-full bg-[#090909]/95 border-t border-b border-[#E6BE45]/35 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#E6BE45]/25">
            <div className="lg:px-6 first:lg:pl-0">
              <div className="flex items-baseline gap-2.5 mb-1.5">
                <span className="font-mono text-xs font-bold text-[#FFD96A]">01.</span>
                <span className="text-sm font-serif font-medium uppercase tracking-wider text-[#FFFFFF]">Ciclo & Safra</span>
              </div>
              <p className="text-xs text-[#A8A8A8] font-light leading-snug">
                Sincronismo entre vencimentos de cédulas e colheita de grãos
              </p>
            </div>

            <div className="lg:px-6">
              <div className="flex items-baseline gap-2.5 mb-1.5">
                <span className="font-mono text-xs font-bold text-[#FFD96A]">02.</span>
                <span className="text-sm font-serif font-medium uppercase tracking-wider text-[#FFFFFF]">Instrumentos & Títulos</span>
              </div>
              <p className="text-xs text-[#A8A8A8] font-light leading-snug">
                Auditoria de CPR física/financeira, CCB, CCR, CDCA e contratos
              </p>
            </div>

            <div className="lg:px-6">
              <div className="flex items-baseline gap-2.5 mb-1.5">
                <span className="font-mono text-xs font-bold text-[#FFD96A]">03.</span>
                <span className="text-sm font-serif font-medium uppercase tracking-wider text-[#FFFFFF]">Garantias & Risco</span>
              </div>
              <p className="text-xs text-[#A8A8A8] font-light leading-snug">
                Alienação fiduciária de terras, penhor agrícola e avais familiares
              </p>
            </div>

            <div className="lg:px-6 last:lg:pr-0">
              <div className="flex items-baseline gap-2.5 mb-1.5">
                <span className="font-mono text-xs font-bold text-[#FFD96A]">04.</span>
                <span className="text-sm font-serif font-medium uppercase tracking-wider text-[#FFFFFF]">Passivos & Defesa</span>
              </div>
              <p className="text-xs text-[#A8A8A8] font-light leading-snug">
                Repactuação preventiva e atuação contenciosa em execuções
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
