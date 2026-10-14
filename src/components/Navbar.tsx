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
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/[0.08] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between gap-10">
            {/* Brand Logo */}
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, '#top')}
              className="flex items-center transition-opacity hover:opacity-90"
            >
              <NSLogo size="lg" />
            </a>

            {/* Navigation Links */}
            <nav className="hidden xl:flex items-center gap-9 text-[14px] font-normal tracking-wide text-[#B8B8B8]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="whitespace-nowrap py-1 transition-colors hover:text-[#FFFFFF]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Primary Action Button */}
            <div className="hidden sm:flex items-center shrink-0">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 text-[13px] font-semibold tracking-wider uppercase text-[#050505] bg-[#D8AD36] hover:bg-[#F3D36A] rounded-none transition-colors duration-200 cursor-pointer"
              >
                <span>Solicitar Análise</span>
                <ArrowUpRight className="w-4 h-4 text-[#050505]" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#D8AD36] hover:text-[#FFFFFF] transition-colors focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#050505] border-l border-white/[0.08] p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <NSLogo size="md" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-[#B8B8B8] hover:text-[#FFFFFF]"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-3 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="py-2.5 text-lg font-light text-[#E0E0E0] hover:text-[#D8AD36] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-4 text-center text-[13px] font-semibold tracking-wider uppercase text-[#050505] bg-[#D8AD36] hover:bg-[#F3D36A] transition-colors"
              >
                Solicitar Análise Inicial
              </button>
              <p className="text-[12px] text-center text-[#777777] font-mono">
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
