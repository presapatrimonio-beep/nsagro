import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, AlertCircle, Copy, Check, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onOpenPrivacy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPrivacy }) => {
  const [formData, setFormData] = useState({
    name: '',
    activityOrCompany: '',
    email: '',
    phone: '',
    demandType: 'Crédito rural (custeio / investimento)',
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

    setTimeout(() => {
      const generatedProtocol = `NS-AGRO-${Math.floor(100000 + Math.random() * 900000)}`;
      setProtocolNumber(generatedProtocol);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleCopyProtocol = () => {
    navigator.clipboard.writeText(protocolNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá, equipe NS Advocacia. Gostaria de solicitar orientação sobre operação de Direito Bancário no Agronegócio.\n\nDemanda: ${formData.demandType}\nNome: ${formData.name || ''}\nProtocolo: ${protocolNumber || 'Novo Contato'}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#050505] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Institutional Guidelines & Channels (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD96A] font-semibold mb-3">
              <span className="w-8 h-[2px] bg-[#E6BE45]" />
              <span>ATENDIMENTO TÉCNICO RESERVADO</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-tight mb-6">
              Cada operação exige uma análise própria.
            </h2>

            <p className="text-base sm:text-lg text-[#C8C8C8] font-light leading-relaxed mb-8">
              Entre em contato com a NS Advocacia para apresentar a situação de sua propriedade ou empresa rural e receber orientações sobre os próximos passos para uma avaliação jurídica detalhada.
            </p>

            {/* Security Guarantee Box */}
            <div className="p-6 bg-[#090909] border border-[#1F1F1F] rounded-[1px] space-y-5 mb-8">
              <div className="flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-[#E6BE45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#FFFFFF] uppercase tracking-wider mb-1">
                    Sigilo Profissional Estatutário
                  </h4>
                  <p className="text-xs text-[#9E9E9E] leading-relaxed font-light">
                    Todas as informações compartilhadas estão protegidas pelo sigilo profissional da advocacia (Lei nº 8.906/94) e pela Lei Geral de Proteção de Dados (LGPD).
                  </p>
                </div>
              </div>

              <div className="hairline-dark" />

              <div className="flex items-start gap-3.5">
                <AlertCircle className="w-5 h-5 text-[#E6BE45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#FFFFFF] uppercase tracking-wider mb-1">
                    Aviso de Segurança Documental
                  </h4>
                  <p className="text-xs text-[#9E9E9E] leading-relaxed font-light">
                    Não anexe extratos bancários com senhas ou documentos sigilosos neste formulário público. Após o contato inicial, forneceremos canal seguro e criptografado para o envio do acervo probatório.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Channel Button */}
            <div className="p-5 bg-[#090909] border border-[#1F1F1F] rounded-[1px] flex items-center justify-between">
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#888888]">Canal Direto</span>
                <span className="text-sm font-medium text-[#FFFFFF]">Atendimento a Produtores e Empresas Rurais</span>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="px-4 py-2 text-xs font-bold text-[#050505] bg-[#E6BE45] hover:bg-[#FFD96A] rounded-[1px] transition-colors cursor-pointer flex items-center gap-1.5 shadow-[0_0_15px_rgba(230,190,69,0.3)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Mensagem Direta</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#090909] border border-[#222222] p-8 sm:p-12 rounded-[1px] shadow-[0_10px_50px_rgba(0,0,0,0.9)] relative">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 bg-[#151515] border-2 border-[#E6BE45] rounded-full flex items-center justify-center mx-auto text-[#FFD96A]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-[#FFFFFF] font-normal">
                    Solicitação Registrada com Sucesso
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CCCCCC] max-w-md mx-auto leading-relaxed font-light">
                    Recebemos os dados preliminares da sua demanda. Nossa equipe de Direito Bancário e Agronegócio analisará o relato e entrará em contato pelos canais informados.
                  </p>
                </div>

                {/* Protocol Card */}
                <div className="p-5 bg-[#050505] border border-[#E6BE45]/50 rounded-[1px] max-w-sm mx-auto flex items-center justify-between">
                  <div className="text-left">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-[#888888]">
                      Protocolo de Atendimento
                    </span>
                    <span className="font-mono text-base font-bold text-[#FFD96A]">
                      {protocolNumber}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyProtocol}
                    className="p-2 text-[#CCCCCC] hover:text-[#FFFFFF] rounded transition-colors cursor-pointer"
                    title="Copiar Protocolo"
                  >
                    {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-7 py-3.5 text-xs font-bold tracking-widest uppercase text-[#050505] bg-gradient-to-r from-[#FFD96A] via-[#E6BE45] to-[#B78B24] rounded-[1px] transition-all hover:brightness-115 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(230,190,69,0.35)]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Prosseguir via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        activityOrCompany: '',
                        email: '',
                        phone: '',
                        demandType: 'Crédito rural (custeio / investimento)',
                        description: '',
                        consent: false,
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 text-xs text-[#A0A0A0] hover:text-[#FFFFFF] border border-[#2B2B2B] rounded-[1px] transition-colors cursor-pointer"
                  >
                    Novo Envio
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] font-normal mb-1">
                    Formulário de Triagem Inicial
                  </h3>
                  <p className="text-xs text-[#888888] font-light">
                    Preencha os campos abaixo para direcionamento técnico prévio de sua demanda.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#D0D0D0] mb-2">
                    Nome Completo <span className="text-[#FFD96A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: João Roberto da Silva"
                    className={`w-full bg-[#050505] border rounded-[1px] px-4 py-3 text-sm text-[#FFFFFF] placeholder-[#555555] focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#222222] focus:border-[#E6BE45]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Company / Activity */}
                <div>
                  <label htmlFor="activityOrCompany" className="block text-xs font-semibold uppercase tracking-wider text-[#D0D0D0] mb-2">
                    Empresa, Fazenda ou Atividade Rural <span className="text-[#777777] font-normal">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    id="activityOrCompany"
                    value={formData.activityOrCompany}
                    onChange={(e) => setFormData({ ...formData, activityOrCompany: e.target.value })}
                    placeholder="Ex: Fazenda Santa Maria / Soja e Milho"
                    className="w-full bg-[#050505] border border-[#222222] rounded-[1px] px-4 py-3 text-sm text-[#FFFFFF] placeholder-[#555555] focus:outline-none focus:border-[#E6BE45] transition-colors"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#D0D0D0] mb-2">
                      E-mail de Contato <span className="text-[#FFD96A]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu.email@dominio.com.br"
                      className={`w-full bg-[#050505] border rounded-[1px] px-4 py-3 text-sm text-[#FFFFFF] placeholder-[#555555] focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#222222] focus:border-[#E6BE45]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#D0D0D0] mb-2">
                      Telefone / WhatsApp <span className="text-[#FFD96A]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(00) 00000-0000"
                      className={`w-full bg-[#050505] border rounded-[1px] px-4 py-3 text-sm text-[#FFFFFF] placeholder-[#555555] focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#222222] focus:border-[#E6BE45]'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Demand Type */}
                <div>
                  <label htmlFor="demandType" className="block text-xs font-semibold uppercase tracking-wider text-[#D0D0D0] mb-2">
                    Tipo de Demanda <span className="text-[#FFD96A]">*</span>
                  </label>
                  <select
                    id="demandType"
                    value={formData.demandType}
                    onChange={(e) => setFormData({ ...formData, demandType: e.target.value })}
                    className="w-full bg-[#050505] border border-[#222222] rounded-[1px] px-4 py-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#E6BE45] transition-colors"
                  >
                    {demandOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-[#090909] text-[#FFFFFF]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-wider text-[#D0D0D0] mb-2">
                    Descrição Inicial da Situação <span className="text-[#FFD96A]">*</span>
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Descreva brevemente a modalidade da operação, se há notificação bancária, prazo de vencimento ou processo em andamento..."
                    className={`w-full bg-[#050505] border rounded-[1px] p-4 text-sm text-[#FFFFFF] placeholder-[#555555] focus:outline-none transition-colors resize-none ${
                      errors.description ? 'border-red-500 focus:border-red-500' : 'border-[#222222] focus:border-[#E6BE45]'
                    }`}
                  />
                  {errors.description && <p className="text-xs text-red-400 mt-1">{errors.description}</p>}
                </div>

                {/* Consent */}
                <div className="pt-1">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 accent-[#E6BE45] h-4 w-4 rounded-[1px]"
                    />
                    <span className="text-xs text-[#9E9E9E] leading-relaxed">
                      Concordo com o tratamento dos dados informados para fins de contato profissional, nos termos da{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-[#FFD96A] underline hover:text-[#FFFFFF]"
                      >
                        Política de Privacidade e LGPD
                      </button>
                      .
                    </span>
                  </label>
                  {errors.consent && <p className="text-xs text-red-400 mt-1">{errors.consent}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#050505] bg-gradient-to-r from-[#FFD96A] via-[#E6BE45] to-[#B78B24] rounded-[1px] transition-all duration-200 hover:brightness-115 active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 shadow-[0_0_25px_rgba(230,190,69,0.35)]"
                >
                  {isSubmitting ? (
                    <span>Registrando solicitação...</span>
                  ) : (
                    <>
                      <span>ENVIAR SOLICITAÇÃO DE ANÁLISE</span>
                      <Send className="w-4 h-4 text-[#050505] stroke-[2.5]" />
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
