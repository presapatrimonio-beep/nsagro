import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Phone, Mail, AlertCircle, Copy, Check, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onOpenPrivacy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPrivacy }) => {
  const [formData, setFormData] = useState({
    name: '',
    activityOrCompany: '',
    email: '',
    phone: '',
    demandType: 'Crédito rural',
    description: '',
    consent: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [protocolNumber, setProtocolNumber] = useState('');
  const [copied, setCopied] = useState(false);

  const demandOptions = [
    'Crédito rural (custeio / investimento)',
    'Endividamento bancário e renegociação',
    'Contratos, CPR e garantias',
    'Execução bancária e embargos',
    'Agroindústria e capital de giro',
    'Patrimônio rural e sucessão',
    'Outra questão bancária ou agrária',
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Por favor, informe seu nome completo.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Informe um endereço de e-mail válido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Formato de e-mail inválido.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Informe um telefone ou WhatsApp para contato.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Informe o DDD e pelo menos 8 ou 9 dígitos.';
    }
    if (!formData.description.trim()) {
      errs.description = 'Descreva resumidamente a operação ou problema bancário.';
    } else if (formData.description.trim().length < 15) {
      errs.description = 'Por favor, detalhe com pelo menos 15 caracteres.';
    }
    if (!formData.consent) {
      errs.consent = 'É necessário concordar com o tratamento dos dados conforme a LGPD.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate safe local protocol generation
    setTimeout(() => {
      const generatedProtocol = `NS-AGRO-${Math.floor(100000 + Math.random() * 900000)}`;
      setProtocolNumber(generatedProtocol);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleCopyProtocol = () => {
    navigator.clipboard.writeText(protocolNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // WhatsApp contextual action
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá, equipe NS Advocacia. Gostaria de solicitar orientação sobre operação de Direito Bancário no Agronegócio.\n\nDemanda: ${formData.demandType || 'Direito Bancário / Crédito Rural'}\nNome: ${formData.name || ''}`
    );
    // Official placeholder or standard office routing
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#0c0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Institutional Guidelines & Channels (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37] mb-3">
              <span>Atendimento Institucional</span>
              <span aria-hidden="true" className="text-[#8e6817]">·</span>
              <span>Análise Sigilosa</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5eedc] font-normal leading-tight mb-5">
              Cada operação exige uma análise própria.
            </h2>

            <p className="text-base text-[#bcb3a7] font-light leading-relaxed mb-8">
              Entre em contato com a NS Advocacia para apresentar a situação de sua propriedade ou empresa rural e receber orientações sobre os próximos passos para uma avaliação jurídica detalhada.
            </p>

            {/* Security Guarantee Box */}
            <div className="p-5 bg-[#121215] border border-[#23232a] rounded-sm space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#f5eedc] uppercase tracking-wider mb-1">
                    Sigilo Profissional Estatutário
                  </h4>
                  <p className="text-xs text-[#9d9587] leading-relaxed">
                    Todas as informações compartilhadas estão protegidas pelo sigilo profissional da advocacia (Lei nº 8.906/94) e pela Lei Geral de Proteção de Dados (LGPD).
                  </p>
                </div>
              </div>

              <div className="hairline-dark" />

              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#f5eedc] uppercase tracking-wider mb-1">
                    Aviso de Segurança Documental
                  </h4>
                  <p className="text-xs text-[#9d9587] leading-relaxed">
                    Não anexe extratos bancários com senhas ou documentos sigilosos neste formulário público. Após o contato inicial, forneceremos canal seguro e criptografado para o envio do acervo probatório.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Channels Card */}
            <div className="space-y-3">
              <div className="p-4 bg-[#141418] border border-[#212128] rounded-sm flex items-center justify-between">
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#7e7668]">Canal Direto</span>
                  <span className="text-sm font-medium text-[#f5eedc]">Atendimento a Produtores e Empresas Rurais</span>
                </div>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="px-3 py-1.5 text-xs font-medium text-[#0c0c0e] bg-[#d4af37] hover:bg-[#edd387] rounded-sm transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Mensagem Direta</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#121216] border border-[#2a2a34] p-7 sm:p-10 rounded-sm shadow-2xl relative">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 bg-[#d4af37]/15 border border-[#d4af37]/40 rounded-full flex items-center justify-center mx-auto text-[#d4af37]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#f5eedc] font-medium">
                    Solicitação Registrada com Sucesso
                  </h3>
                  <p className="text-xs sm:text-sm text-[#bcb3a7] max-w-md mx-auto leading-relaxed">
                    Recebemos os dados preliminares da sua demanda. Nossa equipe de Direito Bancário e Agronegócio analisará o relato e entrará em contato pelos canais informados.
                  </p>
                </div>

                {/* Protocol Card */}
                <div className="p-4 bg-[#18181f] border border-[#d4af37]/30 rounded-sm max-w-sm mx-auto flex items-center justify-between">
                  <div className="text-left">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-[#91897c]">
                      Protocolo de Atendimento
                    </span>
                    <span className="font-mono text-sm font-bold text-[#d4af37]">
                      {protocolNumber}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyProtocol}
                    className="p-2 text-[#999285] hover:text-[#f5eedc] rounded transition-colors cursor-pointer"
                    title="Copiar Protocolo"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#0c0c0e] bg-gradient-to-r from-[#edd387] via-[#d4af37] to-[#ba8c26] rounded-sm transition-all hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Prosseguir via WhatsApp com Protocolo</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        activityOrCompany: '',
                        email: '',
                        phone: '',
                        demandType: 'Crédito rural',
                        description: '',
                        consent: false,
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 text-xs text-[#a0988a] hover:text-[#f5eedc] border border-[#2b2b35] rounded-sm transition-colors cursor-pointer"
                  >
                    Novo Envio
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl text-[#f5eedc] font-normal mb-1">
                    Formulário de Triagem Inicial
                  </h3>
                  <p className="text-xs text-[#8e8779] font-light">
                    Preencha os campos abaixo para que possamos direcionar o atendimento de forma precisa.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#d8d1c4] mb-1.5">
                    Nome Completo <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: João Roberto da Silva"
                    className={`w-full bg-[#16161b] border rounded-sm px-4 py-2.5 text-xs text-[#f5eedc] placeholder-[#575249] focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-[#2e2e38] focus:border-[#d4af37]'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Company / Activity (optional) */}
                <div>
                  <label htmlFor="activityOrCompany" className="block text-xs font-medium text-[#d8d1c4] mb-1.5">
                    Empresa, Fazenda ou Atividade Rural <span className="text-[#736c61]">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    id="activityOrCompany"
                    value={formData.activityOrCompany}
                    onChange={(e) => setFormData({ ...formData, activityOrCompany: e.target.value })}
                    placeholder="Ex: Fazenda Santa Maria / Soja e Milho"
                    className="w-full bg-[#16161b] border border-[#2e2e38] rounded-sm px-4 py-2.5 text-xs text-[#f5eedc] placeholder-[#575249] focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                {/* Email and Phone in 2 Cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#d8d1c4] mb-1.5">
                      E-mail de Contato <span className="text-[#d4af37]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu.email@dominio.com.br"
                      className={`w-full bg-[#16161b] border rounded-sm px-4 py-2.5 text-xs text-[#f5eedc] placeholder-[#575249] focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-[#2e2e38] focus:border-[#d4af37]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-[#d8d1c4] mb-1.5">
                      Telefone / WhatsApp <span className="text-[#d4af37]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(00) 00000-0000"
                      className={`w-full bg-[#16161b] border rounded-sm px-4 py-2.5 text-xs text-[#f5eedc] placeholder-[#575249] focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-[#2e2e38] focus:border-[#d4af37]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Demand Type */}
                <div>
                  <label htmlFor="demandType" className="block text-xs font-medium text-[#d8d1c4] mb-1.5">
                    Tipo de Demanda <span className="text-[#d4af37]">*</span>
                  </label>
                  <select
                    id="demandType"
                    value={formData.demandType}
                    onChange={(e) => setFormData({ ...formData, demandType: e.target.value })}
                    className="w-full bg-[#16161b] border border-[#2e2e38] rounded-sm px-4 py-2.5 text-xs text-[#f5eedc] focus:outline-none focus:border-[#d4af37] transition-colors"
                  >
                    {demandOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-[#121215] text-[#f5eedc]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-xs font-medium text-[#d8d1c4] mb-1.5">
                    Descrição Inicial da Situação <span className="text-[#d4af37]">*</span>
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Descreva brevemente a modalidade da operação, se há notificação bancária, prazo de vencimento ou processo em andamento..."
                    className={`w-full bg-[#16161b] border rounded-sm p-3.5 text-xs text-[#f5eedc] placeholder-[#575249] focus:outline-none transition-colors resize-none ${
                      errors.description ? 'border-red-500/80 focus:border-red-500' : 'border-[#2e2e38] focus:border-[#d4af37]'
                    }`}
                  />
                  {errors.description && <p className="text-[11px] text-red-400 mt-1">{errors.description}</p>}
                </div>

                {/* Consent */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 accent-[#d4af37] h-3.5 w-3.5 rounded"
                    />
                    <span className="text-[11px] text-[#9a9284] leading-relaxed">
                      Concordo com o tratamento dos dados informados para fins de contato profissional, nos termos da{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-[#d4af37] underline hover:text-[#edd387]"
                      >
                        Política de Privacidade e LGPD
                      </button>
                      .
                    </span>
                  </label>
                  {errors.consent && <p className="text-[11px] text-red-400 mt-1">{errors.consent}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-xs font-semibold tracking-wider uppercase text-[#0c0c0e] bg-gradient-to-r from-[#edd387] via-[#d4af37] to-[#ba8c26] rounded-sm transition-all duration-200 hover:brightness-110 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-[0_2px_14px_rgba(212,175,55,0.25)]"
                >
                  {isSubmitting ? (
                    <span>Registrando solicitação...</span>
                  ) : (
                    <>
                      <span>Enviar Solicitação de Análise</span>
                      <Send className="w-3.5 h-3.5 text-[#0c0c0e]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
