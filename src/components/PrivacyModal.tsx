import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="bg-[#111114] border border-[#d4af37]/40 max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-sm p-6 sm:p-10 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#999285] hover:text-[#f5eedc] hover:bg-[#1a1a20] rounded transition-colors cursor-pointer"
          aria-label="Fechar política de privacidade"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#d4af37] mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Aviso Institucional de Privacidade</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#f5eedc] font-medium leading-tight mb-4">
          Política de Privacidade e Tratamento de Dados (LGPD)
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-[#b8b0a2] font-light leading-relaxed">
          <p>
            A <strong className="text-[#f5eedc]">NS Advocacia</strong> está comprometida com a salvaguarda da privacidade e a proteção de dados pessoais dos visitantes deste website e de seus clientes, em estrita conformidade com a Lei Federal nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD) e com as normas éticas do Conselho Federal da OAB.
          </p>

          <h3 className="font-serif text-base text-[#f5eedc] pt-2 font-medium">
            1. Coleta e Finalidade dos Dados
          </h3>
          <p>
            Os dados fornecidos no formulário de contato (nome, telefone, e-mail, atividade rural e relato preliminar) destinam-se exclusivamente à realização de triagem inicial da demanda jurídica, viabilizando o retorno pelo escritório. Esses dados não são compartilhados com terceiros para fins de marketing.
          </p>

          <h3 className="font-serif text-base text-[#f5eedc] pt-2 font-medium">
            2. Sigilo Profissional da Advocacia
          </h3>
          <p>
            O sigilo das comunicações entre advogado e cliente constitui garantia estatutária (art. 7º, II da Lei 8.906/94). Todas as informações encaminhadas encontram-se protegidas por dever absoluto de confidencialidade.
          </p>

          <h3 className="font-serif text-base text-[#f5eedc] pt-2 font-medium">
            3. Direitos do Titular
          </h3>
          <p>
            O titular dos dados poderá, a qualquer tempo, solicitar a confirmação da existência de tratamento, o acesso aos seus dados ou a revogação de seu consentimento por meio dos canais oficiais do escritório.
          </p>

          <div className="p-4 bg-[#16161c] border-l-2 border-[#d4af37] text-xs text-[#8e8779] mt-4">
            [Informações cadastrais e dados do Encarregado de Proteção de Dados (DPO) a serem confirmados pelo escritório antes da publicação definitiva].
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#222228] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0c0c0e] bg-[#d4af37] hover:bg-[#edd387] rounded-sm transition-colors cursor-pointer"
          >
            Compreendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
