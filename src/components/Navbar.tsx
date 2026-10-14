import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import NSLogo from './NSLogo';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Visão Geral', href: '#visao-geral' },
    { label: 'Crédito Rural', href: '#credito-rural' },
    { label: 'Áreas de Atuação', href: '#areas-atuacao' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Conteúdo Jurídico', href: '#artigos' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0c0e]/95 backdrop-blur-md border-b border-[#d4af37]/20 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-[#0c0c0e]/90 via-[#0c0c0e]/50 to-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, '#top')}
              className="group flex items-center transition-transform duration-200 hover:opacity-95"
            >
              <NSLogo size="lg" />
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#c8c0b2]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative whitespace-nowrap py-1 transition-colors hover:text-[#f4efe6] group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <button
                onClick={onOpenContact}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0c0c0e] bg-gradient-to-r from-[#edd387] via-[#d4af37] to-[#ba8c26] rounded-[2px] transition-all duration-200 hover:brightness-110 active:scale-[0.98] shadow-[0_2px_14px_rgba(212,175,55,0.25)] whitespace-nowrap cursor-pointer"
              >
                <span>Solicitar Análise</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0c0c0e]" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#d4af37] hover:text-[#edd387] transition-colors focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#111114] border-l border-[#d4af37]/30 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#242429]">
                <NSLogo size="md" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-[#a59f93] hover:text-[#f4efe6]"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-3 text-base font-medium text-[#dcd6ca] hover:text-[#d4af37] hover:bg-[#1a1a20] rounded transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#242429] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-[#0c0c0e] bg-gradient-to-r from-[#edd387] via-[#d4af37] to-[#ba8c26] rounded-[2px] transition-all hover:brightness-110 active:scale-[0.98]"
              >
                Solicitar Análise Inicial
              </button>
              <p className="text-[11px] text-center text-[#7a7469]">
                Atendimento jurídico sob sigilo profissional
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
