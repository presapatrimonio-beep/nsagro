import React from 'react';
import nsLogoImg from '../assets/ns.png';

interface NSLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showText?: boolean;
  subtext?: string;
}

export const NSLogo: React.FC<NSLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  subtext = 'DIREITO BANCÁRIO & AGRONEGÓCIO',
}) => {
  const sizeMap = {
    sm: {
      icon: 'h-12 w-12',
      text: 'text-base',
      sub: 'text-[10px]',
      gap: 'gap-3',
    },
    md: {
      icon: 'h-16 w-16 sm:h-20 sm:w-20',
      text: 'text-lg sm:text-xl',
      sub: 'text-[10px] sm:text-[11px]',
      gap: 'gap-4',
    },
    lg: {
      icon: 'h-20 w-20 sm:h-28 sm:w-28',
      text: 'text-xl sm:text-2xl',
      sub: 'text-xs sm:text-sm',
      gap: 'gap-5',
    },
    xl: {
      icon: 'h-28 w-28 sm:h-36 sm:w-36',
      text: 'text-2xl sm:text-3xl',
      sub: 'text-xs sm:text-sm',
      gap: 'gap-5',
    },
    hero: {
      icon: 'h-32 w-32 sm:h-44 sm:w-44',
      text: 'text-3xl sm:text-4xl',
      sub: 'text-sm sm:text-base',
      gap: 'gap-6',
    },
  };

  const current = sizeMap[size];

  return (
    <div className={`inline-flex items-center ${current.gap} select-none ${className}`}>
      {/* Official NS Gold Monogram Image */}
      <div className={`relative ${current.icon} shrink-0 flex items-center justify-center`}>
        <img
          src={nsLogoImg}
          alt="NS Advocacia — Logotipo Oficial"
          className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.45)] transition-all duration-300 hover:scale-105 hover:brightness-110"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/ns.png';
          }}
        />
      </div>

      {/* Brand Text Lockup */}
      {showText && (
        <div className="flex flex-col text-left justify-center">
          <span className={`font-display tracking-[0.22em] text-[#F5EEDB] font-bold uppercase leading-tight drop-shadow-sm ${current.text}`}>
            NS ADVOCACIA
          </span>
          <span className={`tracking-[0.2em] text-[#D4AF37] uppercase font-semibold mt-1 leading-none ${current.sub}`}>
            {subtext}
          </span>
        </div>
      )}
    </div>
  );
};

export default NSLogo;
