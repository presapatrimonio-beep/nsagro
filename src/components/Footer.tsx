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
    <footer className="bg-[#08080a] border-t border-[#212128] text-[#a0988a] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#1c1c22]">
          {/* Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <NSLogo size="xl" />
            <p className="text-xs text-[#8c8578] font-light leading-relaxed pt-2">
              Assessoria jurídica estratégica em operações bancárias relacionadas ao agronegócio, com exame técnico de contratos, CPR, garantias reais e passivos financeiros rurais.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#6e675b] space-y-1">
              <p>OAB: [A preencher pelo escritório: OAB/UF nº XXXXX]</p>
              <p>Atuação em conformidade com o Provimento nº 205/2021 da OAB</p>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="block text-xs font-mono uppercase tracking-wider text-[#d4af37] mb-4">
              Navegação
            </span>
            <ul className="space-y-2 text-xs">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-[#f5eedc] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas of Practice (3 cols) */}
          <div className="lg:col-span-3">
            <span className="block text-xs font-mono uppercase tracking-wider text-[#d4af37] mb-4">
              Frentes de Atuação
            </span>
            <ul className="space-y-2 text-xs">
              {practiceItems.map((item, idx) => (
                <li key={idx} className="hover:text-[#f5eedc] transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Contact & Legal Notice (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block text-xs font-mono uppercase tracking-wider text-[#d4af37] mb-4">
              Atendimento Técnico
            </span>
            <p className="text-xs text-[#8c8578] leading-relaxed">
              Para consultas formais e encaminhamento de documentação confidencial, solicite instruções pelo canal institucional.
            </p>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#d4af37] border border-[#d4af37]/40 hover:border-[#d4af37] rounded-sm transition-colors cursor-pointer"
            >
              <span>Solicitar Atendimento</span>
            </button>
            <div className="pt-2">
              <button
                onClick={onOpenPrivacy}
                className="text-[11px] text-[#70695d] hover:text-[#d4af37] underline transition-colors flex items-center gap-1.5"
              >
                <Shield className="w-3 h-3" />
                <span>Política de Privacidade e LGPD</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#635c52]">
          <p>© {new Date().getFullYear()} NS Advocacia. Todos os direitos reservados. Vertical de Direito Bancário e Agronegócio.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors cursor-pointer text-xs"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
