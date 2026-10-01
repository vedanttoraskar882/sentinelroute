import React from 'react';

interface FooterProps {
  onPilotClick?: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Left Brand Column (lg:col-span-8) */}
          <div className="lg:col-span-8 text-left">
            <div className="mb-3">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                Sentinel<span className="text-amber-400">Route</span>
              </span>
            </div>

            <p className="text-sm sm:text-base font-semibold text-slate-200 mb-2">
              Custody Integrity Infrastructure for the UK Secure Logistics Sector.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed max-w-lg mb-5">
              Building cryptographically defensible proof-of-custody infrastructure for secure logistics.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Custody Integrity Engine • UK Security Principles
            </div>
          </div>

          {/* Navigation Column (lg:col-span-4) */}
          <div className="lg:col-span-4 text-left lg:text-right">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Platform', href: '#platform' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Market & Pricing', href: '#market-pricing' },
                { label: 'FAQ', href: '#faq' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 SentinelRoute. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
