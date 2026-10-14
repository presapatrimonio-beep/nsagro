import React from 'react';
import { Lock, FileSpreadsheet, ShieldCheck, MailQuestion, ArrowRight } from 'lucide-react';
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
    <section className="py-20 lg:py-28 bg-[#0c0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Architecture & Logistics (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#d4af37]/25 shadow-2xl">
              <img
                src={silosImage}
                alt="Infraestrutura de armazenagem e logística de grãos no agronegócio"
                className="w-full h-[460px] object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/30 to-transparent" />

              {/* Box overlaid on image */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-[#0e0e11]/95 backdrop-blur-md border-t border-[#d4af37]/25">
                <div className="flex items-center gap-2 text-[#d4af37] text-xs font-mono uppercase tracking-wider mb-1">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Protocolo de Sigilo Bancário</span>
                </div>
                <p className="text-xs text-[#bcb3a7] font-light leading-relaxed">
                  Documentos financeiros e contratos rurais contêm dados protegidos por sigilo fiscal e bancário. Não transmitimos nem recebemos arquivos sensíveis por canais públicos sem protocolo criptográfico prévio.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Documentary Rigor & Breakdown (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37] mb-3">
              <span>Instrução Probatória</span>
              <span aria-hidden="true" className="text-[#8e6817]">·</span>
              <span>Organização Documental</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5eedc] font-normal leading-tight mb-5">
              A força probatória dos contratos e demonstrativos contábeis
            </h2>

            <p className="text-base text-[#bcb3a7] font-light leading-relaxed mb-6">
              Em direito bancário, alegações desprovidas de respaldo documental não encontram acolhida nem em mesas de repactuação nem perante os tribunais. A precisão da assessoria depende diretamente da qualidade e integridade do acervo contratual disponibilizado.
            </p>

            <p className="text-xs text-[#8f887b] leading-relaxed mb-8 italic">
              A relação abaixo é exemplificativa e varia conforme a modalidade de operação e o objetivo específico da consulta. Nem todos os documentos são exigidos em todos os casos.
            </p>

            {/* Grid of Documents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {documentTypes.map((doc, idx) => (
                <div key={idx} className="p-3.5 bg-[#121215] border border-[#212127] rounded-sm">
                  <span className="block text-xs font-semibold text-[#f5eedc] mb-1">
                    {doc.name}
                  </span>
                  <p className="text-[11px] text-[#938b7e] leading-snug">
                    {doc.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Advisory regarding security of sensitive documents */}
            <div className="p-4 bg-[#16161c] border-l-2 border-[#d4af37] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-[#a39c8f] leading-relaxed">
                <span className="font-semibold text-[#f5eedc] block">Como apresentar sua documentação:</span>
                Entre em contato pelo formulário ou canal oficial para receber orientações seguras sobre a triagem e compartilhamento confidencial dos contratos.
              </div>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#d4af37] hover:text-[#f5eedc] transition-colors shrink-0 cursor-pointer"
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
