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
    <section id="contato" className="py-28 lg:py-36 bg-[#050505] border-t border-white/[0.06] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Guidelines & Advisory (5 cols) - Directly on Background */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8AD36] font-semibold block mb-4">
                ATENDIMENTO TÉCNICO RESERVADO
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-normal leading-tight mb-6">
                Cada operação exige uma análise própria.
              </h2>

              <p className="text-lg text-[#B8B8B8] font-light leading-relaxed">
                Entre em contato com a NS Advocacia para apresentar a situação de sua propriedade ou empresa rural e receber orientações seguras sobre os próximos passos para uma avaliação jurídica detalhada.
              </p>
            </div>

            {/* Statutory Secrecy & Security Notes — Open Layout */}
            <div className="pt-8 border-t border-white/[0.08] space-y-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-5 h-5 text-[#D8AD36] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-[#FFFFFF] uppercase tracking-wider mb-1">
                    Sigilo Profissional Estatutário
                  </h4>
                  <p className="text-sm text-[#888888] leading-relaxed font-light">
                    Todas as informações compartilhadas estão protegidas pelo sigilo profissional da advocacia (Lei nº 8.906/94) e pela Lei Geral de Proteção de Dados (LGPD).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AlertCircle className="w-5 h-5 text-[#D8AD36] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-[#FFFFFF] uppercase tracking-wider mb-1">
                    Aviso de Segurança Documental
                  </h4>
                  <p className="text-sm text-[#888888] leading-relaxed font-light">
                    Não anexe extratos bancários com senhas ou documentos sigilosos neste formulário público. Após o contato inicial, forneceremos canal seguro para o envio do acervo probatório.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Channel Action */}
            <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-[#777777]">Canal Direto</span>
                <span className="text-sm text-[#FFFFFF] font-light">Atendimento reservado a produtores e agroindústrias</span>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#050505] bg-[#D8AD36] hover:bg-[#F3D36A] transition-colors cursor-pointer shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Mensagem Direta</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Form Layout (7 cols) */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="py-12 space-y-6">
                <div className="w-14 h-14 bg-[#151515] border border-[#D8AD36] flex items-center justify-center text-[#D8AD36]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF] font-normal">
                    Solicitação Registrada com Sucesso
                  </h3>
                  <p className="text-base text-[#B8B8B8] leading-relaxed font-light">
                    Recebemos os dados preliminares da sua demanda. Nossa equipe de Direito Bancário e Agronegócio analisará o relato e entrará em contato pelos canais informados.
                  </p>
                </div>

                {/* Protocol Details */}
                <div className="p-6 bg-[#090909] border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-[#777777]">
                      Protocolo de Atendimento
                    </span>
                    <span className="font-mono text-lg font-bold text-[#F3D36A]">
                      {protocolNumber}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyProtocol}
                    className="p-2 text-[#888888] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                    title="Copiar Protocolo"
                  >
                    {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-wider uppercase text-[#050505] bg-[#D8AD36] hover:bg-[#F3D36A] transition-colors flex items-center justify-center gap-2 cursor-pointer"
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
                    className="w-full sm:w-auto px-6 py-4 text-xs text-[#888888] hover:text-[#FFFFFF] border border-white/[0.1] transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    Novo Envio
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] font-normal mb-2">
                    Formulário de Triagem Inicial
                  </h3>
                  <p className="text-sm text-[#888888] font-light">
                    Preencha os campos abaixo para direcionamento técnico prévio de sua demanda.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-[#B8B8B8]">
                    Nome Completo <span className="text-[#D8AD36]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Roberto da Silva"
                    className={`w-full bg-[#090909] border px-4 py-3.5 text-base text-[#FFFFFF] placeholder-[#555555] focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/[0.1] focus:border-[#D8AD36]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                </div>

                {/* Company / Activity */}
                <div className="space-y-2">
                  <label htmlFor="activityOrCompany" className="block text-xs font-medium uppercase tracking-wider text-[#B8B8B8]">
                    Empresa, Fazenda ou Atividade Rural <span className="text-[#666666] font-normal">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    id="activityOrCompany"
                    value={formData.activityOrCompany}
                    onChange={(e) => setFormData({ ...formData, activityOrCompany: e.target.value })}
                    placeholder="Ex: Fazenda Santa Maria / Soja e Milho"
                    className="w-full bg-[#090909] border border-white/[0.1] px-4 py-3.5 text-base text-[#FFFFFF] placeholder-[#555555] focus:outline-none focus:border-[#D8AD36] transition-colors"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-[#B8B8B8]">
                      E-mail de Contato <span className="text-[#D8AD36]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu.email@dominio.com.br"
                      className={`w-full bg-[#090909] border px-4 py-3.5 text-base text-[#FFFFFF] placeholder-[#555555] focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/[0.1] focus:border-[#D8AD36]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-wider text-[#B8B8B8]">
                      Telefone / WhatsApp <span className="text-[#D8AD36]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(00) 00000-0000"
                      className={`w-full bg-[#090909] border px-4 py-3.5 text-base text-[#FFFFFF] placeholder-[#555555] focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/[0.1] focus:border-[#D8AD36]'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-400">{errors.phone}</p>}
                  </div>
                </div>

                {/* Demand Type */}
                <div className="space-y-2">
                  <label htmlFor="demandType" className="block text-xs font-medium uppercase tracking-wider text-[#B8B8B8]">
                    Tipo de Demanda <span className="text-[#D8AD36]">*</span>
                  </label>
                  <select
                    id="demandType"
                    value={formData.demandType}
                    onChange={(e) => setFormData({ ...formData, demandType: e.target.value })}
                    className="w-full bg-[#090909] border border-white/[0.1] px-4 py-3.5 text-base text-[#FFFFFF] focus:outline-none focus:border-[#D8AD36] transition-colors"
                  >
                    {demandOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-[#090909] text-[#FFFFFF]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label htmlFor="description" className="block text-xs font-medium uppercase tracking-wider text-[#B8B8B8]">
                    Descrição Inicial da Situação <span className="text-[#D8AD36]">*</span>
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Descreva brevemente a modalidade da operação, se há notificação bancária, prazo de vencimento ou processo em andamento..."
                    className={`w-full bg-[#090909] border p-4 text-base text-[#FFFFFF] placeholder-[#555555] focus:outline-none transition-colors resize-none ${
                      errors.description ? 'border-red-500 focus:border-red-500' : 'border-white/[0.1] focus:border-[#D8AD36]'
                    }`}
                  />
                  {errors.description && <p className="text-xs text-red-400">{errors.description}</p>}
                </div>

                {/* Consent */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 accent-[#D8AD36] h-4 w-4"
                    />
                    <span className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                      Concordo com o tratamento dos dados informados para fins de contato profissional, nos termos da{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-[#D8AD36] underline hover:text-[#FFFFFF]"
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
                  className="w-full py-4 px-8 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#050505] bg-[#D8AD36] hover:bg-[#F3D36A] transition-colors flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registrando solicitação...</span>
                  ) : (
                    <>
                      <span>ENVIAR SOLICITAÇÃO DE ANÁLISE</span>
                      <Send className="w-4 h-4 text-[#050505]" />
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
