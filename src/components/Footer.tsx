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
    { label: 'Soluções 360°', href: '#solucoes-360' },
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
    <footer className="bg-[#050505] border-t border-white/[0.08] text-[#B8B8B8] pt-24 pb-16 relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.08]">
          {/* Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <NSLogo size="xl" />
            <p className="text-sm text-[#888888] font-light leading-relaxed pt-2 max-w-sm">
              Assessoria jurídica estratégica em operações bancárias relacionadas ao agronegócio, com exame técnico de contratos, CPR, garantias reais e passivos financeiros rurais.
            </p>
            <div className="pt-2 text-xs font-mono space-y-1">
              <p className="text-[#D8AD36] font-bold tracking-wider">NS Advocacia • OAB/SP 318.251</p>
              <p className="text-[#666666]">Atuação em conformidade com o Provimento nº 205/2021 da OAB</p>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="block text-xs font-mono uppercase tracking-[0.2em] text-[#FFFFFF] font-semibold mb-6">
              NAVEGAÇÃO
            </span>
            <ul className="space-y-3 text-sm font-light">
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
            <span className="block text-xs font-mono uppercase tracking-[0.2em] text-[#FFFFFF] font-semibold mb-6">
              FRENTES DE ATUAÇÃO
            </span>
            <ul className="space-y-3 text-sm font-light">
              {practiceItems.map((item, idx) => (
                <li key={idx} className="hover:text-[#FFFFFF] transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Contact & Legal Notice (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <span className="block text-xs font-mono uppercase tracking-[0.2em] text-[#FFFFFF] font-semibold mb-6">
              ATENDIMENTO TÉCNICO
            </span>
            <p className="text-sm text-[#888888] leading-relaxed font-light">
              Para consultas formais e encaminhamento de documentação confidencial, solicite instruções pelo canal institucional.
            </p>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#050505] bg-[#D8AD36] hover:bg-[#F3D36A] transition-colors cursor-pointer"
            >
              <span>Solicitar Atendimento</span>
            </button>
            <div className="pt-2">
              <button
                onClick={onOpenPrivacy}
                className="text-xs text-[#777777] hover:text-[#D8AD36] underline transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Política de Privacidade e LGPD</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666] font-light">
          <p>© {new Date().getFullYear()} NS Advocacia. Todos os direitos reservados. Vertical de Direito Bancário e Agronegócio.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#888888] hover:text-[#D8AD36] transition-colors cursor-pointer text-xs uppercase tracking-wider font-semibold"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4 text-[#D8AD36]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
