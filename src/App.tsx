import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { Platform } from './components/Platform';
import { HowItWorks } from './components/HowItWorks';
import { MarketPricing } from './components/MarketPricing';
import { PilotForm } from './components/PilotForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

export function App() {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToPilot = () => {
    const el = document.getElementById('pilot');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPlatform = () => {
    const el = document.getElementById('platform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950 font-sans antialiased">
      {/* Fixed Navigation */}
      <Navbar onPilotClick={scrollToPilot} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Home / Hero */}
        <Hero 
          onPilotClick={scrollToPilot} 
          onExplorePlatform={scrollToPlatform} 
        />

        {/* Value / Trust Strip */}
        <TrustStrip />

        {/* 2. About & Founder Card */}
        <About />

        {/* 3. Platform, Architecture, Feature Highlights & Security */}
        <Platform />

        {/* 4. How It Works & Offline-First Callout */}
        <HowItWorks />

        {/* 5. Market & Pricing (Personas, Context, Roadmap, Revenue Model) */}
        <MarketPricing onSelectTier={() => scrollToPilot()} />

        {/* 6. Request a Pilot (LocalStorage Persistent Form) */}
        <PilotForm />

        {/* 7. FAQ */}
        <FAQ />
      </main>

      {/* 8. Footer */}
      <Footer 
        onPilotClick={scrollToPilot} 
        onOpenLegal={(type) => setLegalType(type)} 
      />

      {/* Legal Modals */}
      <LegalModal 
        type={legalType} 
        onClose={() => setLegalType(null)} 
      />
    </div>
  );
}

export default App;
