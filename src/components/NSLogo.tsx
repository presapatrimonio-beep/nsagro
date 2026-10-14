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
  showText = false, // Pure logo by default as requested: "deixar so o logo NS"
  subtext,
}) => {
  const sizeMap = {
    sm: 'h-12 w-12 sm:h-14 sm:w-14',
    md: 'h-16 w-16 sm:h-20 sm:w-20',
    lg: 'h-20 w-20 sm:h-24 sm:w-24',
    xl: 'h-28 w-28 sm:h-36 sm:w-36',
    hero: 'h-32 w-32 sm:h-44 sm:w-44',
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Official NS Gold Monogram Image - Pure Logo */}
      <div className={`relative ${currentSize} shrink-0 flex items-center justify-center`}>
        <img
          src={nsLogoImg}
          alt="NS Advocacia"
          className="w-full h-full object-contain filter drop-shadow-[0_4px_18px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 hover:brightness-110"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/ns.png';
          }}
        />
      </div>

      {showText && subtext && (
        <div className="flex flex-col text-left justify-center ml-4">
          <span className="font-display tracking-[0.22em] text-[#F5EEDB] font-bold uppercase leading-tight">
            NS ADVOCACIA
          </span>
          <span className="tracking-[0.2em] text-[#D4AF37] uppercase font-semibold mt-1 leading-none text-xs">
            {subtext}
          </span>
        </div>
      )}
    </div>
  );
};

export default NSLogo;
