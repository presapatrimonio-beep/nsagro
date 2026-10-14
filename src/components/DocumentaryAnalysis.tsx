import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import silosImage from '../assets/images/agro_silos_logistica_1791945718981.jpg';

interface DocumentaryAnalysisProps {
  onOpenContact: () => void;
}

export const DocumentaryAnalysis: React.FC<DocumentaryAnalysisProps> = ({ onOpenContact }) => {
  const documentTypes = [
    { name: 'Contratos Originários e Cédulas', desc: 'CCR, CCB, CPR física ou financeira, contratos de abertura de crédito e cédulas hipotecárias.' },
    { name: 'Termos Aditivos e Re-ratificações', desc: 'Instrumentos de prorrogação de prazo, consolidação de encargos ou alteração de garantias.' },
    { name: 'Demonstrativos de Evolução da Dívida', desc: 'Planilhas analíticas fornecidas pelo banco detalhando amortizações, juros e saldos históricos.' },
    { name: 'Extratos de Conta Corrente Vinculada', desc: 'Histórico de lançamentos desde o momento da liberação dos recursos para aferir tarifas e débitos automáticos.' },
    { name: 'Comprovantes de Entrega e Pagamentos', desc: 'Recibos de quitação, romaneios de armazéns gerais, notas promissórias liquidadas ou canhotos.' },
    { name: 'Notificações Extrajudiciais e Cartorárias', desc: 'Comunicações formais de mora, cartas de intimação para purga de débito ou editais de leilão.' },
    { name: 'Certidões e Matrículas Atualizadas', desc: 'Certidões de inteiro teor dos imóveis rurais com averbação dos gravames fiduciários e hipotecas.' },
    { name: 'Documentação da Atividade Produtiva', desc: 'Laudos técnicos agronômicos de quebra de safra, CAR (Cadastro Ambiental Rural) e comprovantes de comercialização.' },
  ];

  return (
    <section className="py-28 lg:py-36 bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8AD36] font-semibold block mb-4">
            INSTRUÇÃO PROBATÓRIA & CONTRATOS
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-normal leading-tight mb-6">
            A força probatória dos contratos e demonstrativos contábeis
          </h2>

          <p className="text-lg text-[#B8B8B8] font-light leading-relaxed">
            Em direito bancário agropecuário, alegações sem respaldo documental não encontram acolhida nem em mesas de renegociação nem perante os tribunais. A precisão da assessoria depende diretamente da higidez e integridade do acervo contratual disponibilizado.
          </p>
        </div>

        {/* Spacious 2-Column Split: Big Photography on Left, Clean Typographic Document List on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start mb-16">
          {/* Left: Large Photo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="overflow-hidden">
              <img
                src={silosImage}
                alt="Infraestrutura industrial de armazenagem e silos de grãos"
                className="w-full h-[520px] lg:h-[620px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-start gap-3 pt-2 text-xs text-[#777777] font-light leading-relaxed">
              <Lock className="w-4 h-4 text-[#D8AD36] shrink-0 mt-0.5" />
              <span>
                Sigilo bancário: documentos financeiros são analisados sob protocolo confidencial. Não envie senhas ou dados bancários desprotegidos.
              </span>
            </div>
          </div>

          {/* Right: Open Typographic List (No Boxes) */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
            {documentTypes.map((doc, idx) => (
              <div key={idx} className="py-5 sm:py-6">
                <h3 className="text-lg font-serif text-[#FFFFFF] mb-1 font-medium">
                  {doc.name}
                </h3>
                <p className="text-sm text-[#B8B8B8] font-light leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Advisory Bar */}
        <div className="pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-sm text-[#B8B8B8] font-light max-w-2xl">
            A relação acima é exemplificativa. Entre em contato com a equipe jurídica para receber instruções seguras sobre a triagem prévia do acervo documental de sua operação.
          </p>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-[#D8AD36] hover:text-[#FFFFFF] transition-colors shrink-0 cursor-pointer"
          >
            <span>Falar com o escritório</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DocumentaryAnalysis;
