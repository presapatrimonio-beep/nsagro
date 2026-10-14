/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialIntro from './components/EditorialIntro';
import AgroCreditContext from './components/AgroCreditContext';
import PracticeAreas from './components/PracticeAreas';
import CriticalSituations from './components/CriticalSituations';
import Methodology from './components/Methodology';
import DocumentaryAnalysis from './components/DocumentaryAnalysis';
import DebtRestructuring from './components/DebtRestructuring';
import LitigationSection from './components/LitigationSection';
import RuralEstateStructure from './components/RuralEstateStructure';
import LegalArticles from './components/LegalArticles';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplore = () => {
    const overviewElem = document.getElementById('visao-geral');
    if (overviewElem) {
      overviewElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] flex flex-col font-sans selection:bg-[#E6BE45]/40 selection:text-[#050505]">
      {/* 1. Cabeçalho Institucional / Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      <main className="flex-grow">
        {/* 2. Hero — Abertura Institucional de Alto Impacto */}
        <Hero onOpenContact={handleOpenContact} onExploreClick={handleExplore} />

        {/* 3. Apresentação da Atuação Contextualizada */}
        <EditorialIntro />

        {/* 4. Contexto do Crédito no Agronegócio */}
        <AgroCreditContext />

        {/* 5. Áreas de Atuação Especializadas (A a F) */}
        <PracticeAreas />

        {/* 6. Situações que Exigem Análise Jurídica (10 Casos Práticos) */}
        <CriticalSituations onOpenContact={handleOpenContact} />

        {/* 7. Metodologia de Trabalho (Quatro Eixos Técnicos) */}
        <Methodology />

        {/* 8. Contratos, Documentos e Análise Financeira Probatória */}
        <DocumentaryAnalysis onOpenContact={handleOpenContact} />

        {/* 9. Reestruturação de Passivos e Negociação Bancária */}
        <DebtRestructuring />

        {/* 10. Contencioso e Medidas Judiciais Estratégicas */}
        <LitigationSection />

        {/* 11. Patrimônio Rural e Estrutura Empresarial */}
        <RuralEstateStructure onOpenContact={handleOpenContact} />

        {/* 12. Conteúdo Jurídico Especializado (Artigos com Leitor Modal) */}
        <LegalArticles />

        {/* 13. Perguntas Frequentes (FAQ Estruturado) */}
        <FAQSection />

        {/* 14. Contato e Triagem Institucional */}
        <ContactSection onOpenPrivacy={() => setPrivacyModalOpen(true)} />
      </main>

      {/* 15. Rodapé Institucional Completo */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Modal de Política de Privacidade e LGPD */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
