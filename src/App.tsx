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
    <div className="min-h-screen bg-[#0c0c0e] text-[#f4efe6] flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#fae5a5]">
      {/* 1. Top Bar / Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      <main className="flex-grow">
        {/* 2. Hero - Institutional Opening */}
        <Hero onOpenContact={handleOpenContact} onExploreClick={handleExplore} />

        {/* 3. Editorial Introduction - Why Agro Banking Needs Contextual Analysis */}
        <EditorialIntro />

        {/* 4. Context of Rural Credit - Dynamics, Instruments & Guarantees */}
        <AgroCreditContext />

        {/* 5. Practice Areas - 6 Structured Vertical Tracks with Master Deep-Dive */}
        <PracticeAreas />

        {/* 6. Critical Situations - 10 Concrete Practical Triggers */}
        <CriticalSituations onOpenContact={handleOpenContact} />

        {/* 7. Methodology - The 4 Technical Axes */}
        <Methodology />

        {/* 8. Documentation and Financial Analysis - Evidentiary Rigor & Data Protection */}
        <DocumentaryAnalysis onOpenContact={handleOpenContact} />

        {/* 9. Debt Restructuring & Banking Renegotiation */}
        <DebtRestructuring />

        {/* 10. Litigation and Court Measures - Responsible Processual Defense */}
        <LitigationSection />

        {/* 11. Specialized Legal Content - Categorized Articles & Reader */}
        <LegalArticles />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />

        {/* 13. Contact & Case Intake Section */}
        <ContactSection onOpenPrivacy={() => setPrivacyModalOpen(true)} />
      </main>

      {/* 14. Institutional Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* 15. Privacy & LGPD Compliance Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
