import React from 'react';
import { 
  KeyRound, 
  Smartphone, 
  Hash, 
  SearchAlert, 
  Terminal, 
  Share2, 
  TrendingUp, 
  Scale 
} from 'lucide-react';
import { Architecture } from './Architecture';
import { PlatformFeatures } from './PlatformFeatures';
import { SecuritySubsection } from './SecuritySubsection';
import type { PlatformModule } from '../types';

export const Platform: React.FC = () => {
  const modules: PlatformModule[] = [
    {
      id: 1,
      title: 'Smart-Seal Manager',
      description: 'Pairs, issues, tracks and retires tamper-evident smart-seal hardware against individual items and partner accounts.'
    },
    {
      id: 2,
      title: 'Custody Capture SDK',
      description: 'Enables partner applications to capture structured custody evidence including photographs, signatures, GPS location, timestamp and device motion information.'
    },
    {
      id: 3,
      title: 'Hash-Chain Ledger',
      description: 'Maintains an append-only cryptographically chained record of each custody event, making later modification or reordering detectable.'
    },
    {
      id: 4,
      title: 'Anomaly Detection Engine',
      description: 'Checks custody events and complete journeys for indicators of seal breach, location inconsistency, implausible timing and other suspicious patterns. The MVP operates with rule-based anomaly checking, establishing the baseline before network-trained anomaly intelligence in later phases.'
    },
    {
      id: 5,
      title: 'Verification API',
      description: 'Allows partner systems to query custody status, verification outcomes and relevant risk information in real time.'
    },
    {
      id: 6,
      title: 'Partner Integration Hub',
      description: 'Supports onboarding and integration of courier operators and SME booking channels into SentinelRoute’s verification infrastructure.'
    },
    {
      id: 7,
      title: 'Insurer Risk Feed',
      description: 'A future capability intended to provide aggregated and de-identified custody-risk data to insurers and underwriters once sufficient verified event history exists.',
      badge: 'Phase 2'
    },
    {
      id: 8,
      title: 'Compliance & Audit Console',
      description: 'Supports evidence exports, data-retention policies, access logging and auditable verification records for legal and insurer compliance.'
    }
  ];

  const getModuleIcon = (id: number) => {
    switch (id) {
      case 1: return KeyRound;
      case 2: return Smartphone;
      case 3: return Hash;
      case 4: return SearchAlert;
      case 5: return Terminal;
      case 6: return Share2;
      case 7: return TrendingUp;
      case 8: return Scale;
      default: return Terminal;
    }
  };

  return (
    <section id="platform" className="py-10 lg:py-14 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <span>Modular Verification Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            The SentinelRoute Platform
          </h2>
          <p className="text-base sm:text-lg font-semibold text-slate-200">
            Eight connected modules. One verified custody infrastructure.
          </p>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            An evidential trust layer designed for seamless API integration into existing courier management systems, dispatch software and handheld logistics terminals.
          </p>
        </div>

        {/* 8 Connected Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod) => {
            const Icon = getModuleIcon(mod.id);
            return (
              <div
                key={mod.id}
                className="group relative rounded-xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-200 shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:border-amber-400/50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      {mod.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-500/30">
                          {mod.badge}
                        </span>
                      )}
                      <span className="text-xs font-mono text-slate-500">
                        0{mod.id}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>MODULE {mod.id}</span>
                  <span className="text-slate-300">STATUS: READY</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5-Layer Technical Architecture */}
        <Architecture />

        {/* Platform Feature Highlights */}
        <PlatformFeatures />

        {/* Defensive Integrity & Security Subsection */}
        <SecuritySubsection />

      </div>
    </section>
  );
};
