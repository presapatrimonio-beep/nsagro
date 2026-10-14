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
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Visão Geral', href: '#visao-geral' },
    { label: 'Crédito Rural', href: '#credito-rural' },
    { label: 'Áreas de Atuação', href: '#areas-atuacao' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Patrimônio Rural', href: '#patrimonio-rural' },
    { label: 'Artigos', href: '#artigos' },
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
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#E6BE45]/30 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-[#050505] via-[#050505]/70 to-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Pure Brand Wordmark Emblem */}
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, '#top')}
              className="group flex items-center transition-transform duration-200 hover:scale-105"
            >
              <NSLogo size="lg" />
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden xl:flex items-center gap-8 text-[13px] font-medium tracking-wide text-[#D0D0D0]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative whitespace-nowrap py-1 transition-colors hover:text-[#FFFFFF] group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E6BE45] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 High-Impact Primary Action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <button
                onClick={onOpenContact}
                className="relative inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs font-bold tracking-widest uppercase text-[#050505] bg-gradient-to-r from-[#FFD96A] via-[#E6BE45] to-[#B78B24] rounded-[1px] transition-all duration-200 hover:brightness-115 active:scale-[0.98] shadow-[0_0_20px_rgba(230,190,69,0.35)] whitespace-nowrap cursor-pointer"
              >
                <span>Solicitar Análise</span>
                <ArrowUpRight className="w-4 h-4 text-[#050505] stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#E6BE45] hover:text-[#FFD96A] transition-colors focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#090909] border-l border-[#E6BE45]/30 p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#1A1A1A]">
                <NSLogo size="md" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#D0D0D0] hover:text-[#FFFFFF]"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-3.5 text-base font-medium text-[#E0E0E0] hover:text-[#FFD96A] hover:bg-[#151515] rounded transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#1A1A1A] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-4 text-center text-xs font-bold tracking-widest uppercase text-[#050505] bg-gradient-to-r from-[#FFD96A] via-[#E6BE45] to-[#B78B24] rounded-[1px] transition-all hover:brightness-110 active:scale-[0.98] shadow-[0_0_20px_rgba(230,190,69,0.3)]"
              >
                Solicitar Análise Inicial
              </button>
              <p className="text-[11px] text-center text-[#888888] font-mono">
                NS Advocacia • OAB/SP 318.251
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
