import React from 'react';
import { Lock, ArrowRight } from 'lucide-react';
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
    <section className="py-24 lg:py-32 bg-[#050505] border-b border-[#1A1A1A] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Silos Photograph with Sharp Gold Framing (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative border border-[#E6BE45]/40 p-2 bg-[#090909] shadow-[0_10px_40px_rgba(0,0,0,0.85)]">
              <img
                src={silosImage}
                alt="Estrutura industrial de armazenagem e silos de grãos"
                className="w-full h-[500px] object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

              <div className="absolute bottom-4 inset-x-4 p-5 bg-[#090909]/95 border-t border-[#E6BE45]/30 backdrop-blur-md">
                <div className="flex items-center gap-2 text-[#FFD96A] text-xs font-mono uppercase tracking-wider font-semibold mb-1">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Protocolo de Sigilo Bancário</span>
                </div>
                <p className="text-xs text-[#C8C8C8] font-light leading-relaxed">
                  Documentos financeiros contêm dados protegidos por sigilo fiscal e bancário. Não transmitimos nem recebemos arquivos sensíveis por canais públicos sem protocolo prévio.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Documentary Rigor & Breakdown (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD96A] font-semibold mb-3">
              <span className="w-8 h-[2px] bg-[#E6BE45]" />
              <span>INSTRUÇÃO PROBATÓRIA & CONTRATOS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-tight mb-6">
              A força probatória dos contratos e demonstrativos contábeis
            </h2>

            <p className="text-base sm:text-lg text-[#C8C8C8] font-light leading-relaxed mb-6">
              Em direito bancário agropecuário, alegações sem respaldo documental não encontram acolhida nem em mesas de renegociação nem perante os tribunais. A precisão da assessoria depende diretamente da higidez e integridade do acervo contratual disponibilizado.
            </p>

            <p className="text-xs text-[#888888] leading-relaxed mb-8 italic">
              A relação abaixo é exemplificativa e varia conforme a modalidade de operação e o objetivo específico da consulta. Nem todos os documentos são exigidos em todos os casos.
            </p>

            {/* Grid of Documents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {documentTypes.map((doc, idx) => (
                <div key={idx} className="p-4 bg-[#090909] border border-[#1C1C1C] hover:border-[#E6BE45]/40 transition-colors">
                  <span className="block text-xs sm:text-sm font-semibold text-[#FFFFFF] mb-1">
                    {doc.name}
                  </span>
                  <p className="text-xs text-[#999999] leading-snug font-light">
                    {doc.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Advisory regarding security of sensitive documents */}
            <div className="p-5 bg-[#0D0D0D] border-l-2 border-[#E6BE45] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="text-xs text-[#C0C0C0] leading-relaxed">
                <strong className="text-[#FFFFFF] block mb-0.5">Como apresentar sua documentação:</strong>
                Entre em contato pelo formulário ou canal oficial para receber orientações seguras sobre a triagem e compartilhamento confidencial dos contratos.
              </div>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#FFD96A] hover:text-[#FFFFFF] transition-colors shrink-0 cursor-pointer"
              >
                <span>Falar com o escritório</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentaryAnalysis;
