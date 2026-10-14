import React from 'react';
import NSLogo from './NSLogo';
import { ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Visão Geral', href: '#visao-geral' },
    { label: 'Crédito Rural', href: '#credito-rural' },
    { label: 'Áreas de Atuação', href: '#areas-atuacao' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Patrimônio Rural', href: '#patrimonio-rural' },
    { label: 'Artigos Especializados', href: '#artigos' },
    { label: 'Perguntas Frequentes', href: '#faq' },
    { label: 'Contato Institucional', href: '#contato' },
  ];

  const practiceItems = [
    'Crédito Rural & Contratos Bancários',
    'Reestruturação de Dívidas & Passivos',
    'Contencioso Bancário & Execuções',
    'Alienação Fiduciária & Hipoteca Rural',
    'Operações com Tradings & CPR',
    'Planejamento Sucessório Rural',
  ];

  return (
    <footer className="bg-[#050505] border-t border-[#1F1F1F] text-[#A0A0A0] pt-20 pb-12 relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#1A1A1A]">
          {/* Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <NSLogo size="xl" />
            <p className="text-xs sm:text-sm text-[#888888] font-light leading-relaxed pt-2">
              Assessoria jurídica estratégica em operações bancárias relacionadas ao agronegócio, com exame técnico de contratos, CPR, garantias reais e passivos financeiros rurais.
            </p>
            <div className="pt-2 text-xs font-mono space-y-1">
              <p className="text-[#FFD96A] font-bold">NS Advocacia • OAB/SP 318.251</p>
              <p className="text-[#666666]">Atuação em conformidade com o Provimento nº 205/2021 da OAB</p>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="block text-xs font-mono uppercase tracking-widest text-[#FFD96A] font-bold mb-5">
              NAVEGAÇÃO
            </span>
            <ul className="space-y-2.5 text-xs">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-[#FFFFFF] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas of Practice (3 cols) */}
          <div className="lg:col-span-3">
            <span className="block text-xs font-mono uppercase tracking-widest text-[#FFD96A] font-bold mb-5">
              FRENTES DE ATUAÇÃO
            </span>
            <ul className="space-y-2.5 text-xs">
              {practiceItems.map((item, idx) => (
                <li key={idx} className="hover:text-[#FFFFFF] transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Contact & Legal Notice (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <span className="block text-xs font-mono uppercase tracking-widest text-[#FFD96A] font-bold mb-5">
              ATENDIMENTO TÉCNICO
            </span>
            <p className="text-xs text-[#888888] leading-relaxed font-light">
              Para consultas formais e encaminhamento de documentação confidencial, solicite instruções pelo canal institucional.
            </p>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-[#050505] bg-[#E6BE45] hover:bg-[#FFD96A] rounded-[1px] transition-all cursor-pointer shadow-[0_0_15px_rgba(230,190,69,0.3)]"
            >
              <span>Solicitar Atendimento</span>
            </button>
            <div className="pt-2">
              <button
                onClick={onOpenPrivacy}
                className="text-xs text-[#777777] hover:text-[#FFD96A] underline transition-colors flex items-center gap-2"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Política de Privacidade e LGPD</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <p>© {new Date().getFullYear()} NS Advocacia. Todos os direitos reservados. Vertical de Direito Bancário e Agronegócio.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#FFD96A] transition-colors cursor-pointer text-xs uppercase tracking-wider font-semibold"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4 text-[#E6BE45]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
