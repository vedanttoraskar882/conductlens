import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { PlatformSection } from './components/PlatformSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';

export const App: React.FC = () => {
  const [pilotModalOpen, setPilotModalOpen] = useState(false);
  const [pilotTriggerEl, setPilotTriggerEl] = useState<HTMLElement | null>(null);

  const handleOpenPilotModal = (triggerEl: HTMLElement) => {
    setPilotTriggerEl(triggerEl);
    setPilotModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setPilotModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-warm text-navy-900 font-sans selection:bg-teal-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenPilotModal={handleOpenPilotModal} />

      {/* Main Content Sections strictly in required order */}
      <main className="flex-grow">
        {/* 1. Home */}
        <HomeSection onOpenPilotModal={handleOpenPilotModal} />

        {/* 2. About */}
        <AboutSection />

        {/* 3. Platform */}
        <PlatformSection />

        {/* 4. How It Works */}
        <HowItWorksSection />

        {/* 5. Market & Pricing */}
        <PricingSection onOpenPilotModal={handleOpenPilotModal} />

        {/* 6. FAQ */}
        <FaqSection />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Pilot Request Modal (All CTAs open this same accessible modal) */}
      <PilotModal
        isOpen={pilotModalOpen}
        onClose={handleClosePilotModal}
        triggerElement={pilotTriggerEl}
      />
    </div>
  );
};

export default App;
