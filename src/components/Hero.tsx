import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import heroImage from '../assets/images/agro_complexo_estrategico_1791995435673.jpg';

interface HeroProps {
  onOpenContact: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreClick }) => {
  return (
    <section id="top" className="relative min-h-[96vh] flex flex-col justify-between bg-[#050505] overflow-hidden pt-36 sm:pt-44">
      {/* Background Cinematic Photography — High-Impact Combine Harvester Fleet Harvest */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Operação agrícola brasileira de grande escala com colheitadeiras e caminhões sob o pôr do sol"
          className="w-full h-full object-cover object-[70%_center] lg:object-center brightness-95 contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Soft, natural gradient overlay: deep obsidian black on the left for crisp typography, preserving photographic depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 via-45% to-[#050505]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent via-25% to-black/30" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 w-full flex-1 flex flex-col justify-center py-12 lg:py-24">
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Institutional Identification Text */}
          <div className="mb-8 space-y-1.5">
            <span className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-[#F3D36A] font-semibold block">
              DIREITO BANCÁRIO & AGRONEGÓCIO
            </span>
            <span className="text-sm sm:text-base text-[#D0D0D0] tracking-wide font-light block">
              Assessoria Jurídica Estratégica em Operações Financeiras Rurais
            </span>
          </div>

          {/* Large Hero Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#FFFFFF] font-normal leading-[1.08] tracking-tight mb-8">
            Crédito, patrimônio e estratégia jurídica no{' '}
            <span className="text-[#F3D36A] font-medium">
              agronegócio.
            </span>
          </h1>

          {/* Generous Lead Paragraph */}
          <p className="text-lg sm:text-xl text-[#B8B8B8] leading-relaxed font-light max-w-2xl mb-12">
            Operações de crédito rural, garantias e passivos bancários exigem análise jurídica que considere os contratos, a documentação, a estrutura patrimonial e o ciclo produtivo de cada operação.
          </p>

          {/* Clean, Prominent Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-3 px-9 py-4 sm:py-5 text-[13px] font-semibold tracking-wider uppercase text-[#050505] bg-[#D8AD36] hover:bg-[#F3D36A] transition-colors duration-200 cursor-pointer shadow-[0_4px_20px_rgba(216,173,54,0.35)]"
            >
              <span>Solicitar Análise Inicial</span>
              <ArrowUpRight className="w-4 h-4 text-[#050505]" />
            </button>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 sm:py-5 text-[13px] font-medium tracking-wider uppercase text-[#FFFFFF] bg-transparent hover:bg-white/[0.06] border border-[#D8AD36] transition-colors duration-200 cursor-pointer"
            >
              <span>Conhecer a Atuação</span>
              <ArrowDown className="w-4 h-4 text-[#D8AD36]" />
            </button>
          </div>
        </div>
      </div>

      {/* Seamless Editorial Horizontal Ribbon - No Cards, Clean Spacing & Delicate Hairline Dividers */}
      <div className="relative z-10 w-full border-t border-b border-white/[0.08] bg-[#050505]/85 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.08]">
            <div className="lg:pr-8">
              <span className="font-mono text-xs text-[#D8AD36] font-medium block mb-1.5">01.</span>
              <h2 className="text-base font-serif font-medium text-[#FFFFFF] mb-1">Ciclo & Safra</h2>
              <p className="text-[14px] text-[#B8B8B8] font-light leading-relaxed">
                Sincronismo entre vencimentos contratuais e colheita
              </p>
            </div>

            <div className="lg:px-8">
              <span className="font-mono text-xs text-[#D8AD36] font-medium block mb-1.5">02.</span>
              <h2 className="text-base font-serif font-medium text-[#FFFFFF] mb-1">Instrumentos & Títulos</h2>
              <p className="text-[14px] text-[#B8B8B8] font-light leading-relaxed">
                Auditoria de CPR física e financeira, CCB, CCR e CDCA
              </p>
            </div>

            <div className="lg:px-8">
              <span className="font-mono text-xs text-[#D8AD36] font-medium block mb-1.5">03.</span>
              <h2 className="text-base font-serif font-medium text-[#FFFFFF] mb-1">Garantias & Risco</h2>
              <p className="text-[14px] text-[#B8B8B8] font-light leading-relaxed">
                Alienação fiduciária, penhor agrícola e avais familiares
              </p>
            </div>

            <div className="lg:pl-8">
              <span className="font-mono text-xs text-[#D8AD36] font-medium block mb-1.5">04.</span>
              <h2 className="text-base font-serif font-medium text-[#FFFFFF] mb-1">Passivos & Defesa</h2>
              <p className="text-[14px] text-[#B8B8B8] font-light leading-relaxed">
                Repactuação preventiva e contencioso estratégico
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
