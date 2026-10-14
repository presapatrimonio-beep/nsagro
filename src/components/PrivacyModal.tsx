import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="bg-[#090909] border border-[#E6BE45]/60 max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-[1px] p-6 sm:p-10 relative shadow-[0_0_50px_rgba(0,0,0,0.9)]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#888888] hover:text-[#FFFFFF] hover:bg-[#151515] rounded transition-colors cursor-pointer"
          aria-label="Fechar política de privacidade"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFD96A] font-bold mb-3">
          <ShieldCheck className="w-4 h-4 text-[#E6BE45]" />
          <span>AVISO INSTITUCIONAL DE PRIVACIDADE</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] font-normal leading-tight mb-4">
          Política de Privacidade e Tratamento de Dados (LGPD)
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-[#CCCCCC] font-light leading-relaxed">
          <p>
            A <strong className="text-[#FFFFFF]">NS Advocacia</strong> está comprometida com a salvaguarda da privacidade e a proteção de dados pessoais dos visitantes deste website e de seus clientes, em estrita conformidade com a Lei Federal nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD) e com as normas éticas do Conselho Federal da OAB.
          </p>

          <h3 className="font-serif text-base text-[#FFFFFF] pt-2 font-medium">
            1. Coleta e Finalidade dos Dados
          </h3>
          <p>
            Os dados fornecidos no formulário de contato (nome, telefone, e-mail, atividade rural e relato preliminar) destinam-se exclusivamente à realização de triagem inicial da demanda jurídica, viabilizando o retorno pelo escritório. Esses dados não são compartilhados com terceiros para fins de marketing.
          </p>

          <h3 className="font-serif text-base text-[#FFFFFF] pt-2 font-medium">
            2. Sigilo Profissional da Advocacia
          </h3>
          <p>
            O sigilo das comunicações entre advogado e cliente constitui garantia estatutária (art. 7º, II da Lei 8.906/94). Todas as informações encaminhadas encontram-se protegidas por dever absoluto de confidencialidade.
          </p>

          <h3 className="font-serif text-base text-[#FFFFFF] pt-2 font-medium">
            3. Direitos do Titular
          </h3>
          <p>
            O titular dos dados poderá, a qualquer tempo, solicitar a confirmação da existência de tratamento, o acesso aos seus dados ou a revogação de seu consentimento por meio dos canais oficiais do escritório.
          </p>

          <div className="p-4 bg-[#050505] border-l-2 border-[#E6BE45] text-xs text-[#A0A0A0] mt-4">
            <strong className="text-[#FFD96A] block mb-1">Identificação Institucional:</strong>
            NS Advocacia • OAB/SP 318.251 — Assessoria Jurídica Estratégica em Direito Bancário no Agronegócio.
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#1F1F1F] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-[#050505] bg-gradient-to-r from-[#FFD96A] via-[#E6BE45] to-[#B78B24] rounded-[1px] transition-all hover:brightness-115 cursor-pointer shadow-[0_0_15px_rgba(230,190,69,0.3)]"
          >
            Compreendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
