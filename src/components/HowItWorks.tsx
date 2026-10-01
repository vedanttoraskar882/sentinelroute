import { useState } from 'react';
import { 
  Send, 
  KeyRound, 
  Camera, 
  Hash, 
  SearchAlert, 
  ShieldCheck, 
  FileCheck2, 
  Network,
  ChevronRight,
  ChevronLeft,
  CheckCircle2
} from 'lucide-react';
import { OfflineCallout } from './OfflineCallout';
import type { WorkStep } from '../types';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: WorkStep[] = [
    {
      stepNumber: '01',
      title: 'Book / Initiate',
      description: 'A secure job enters SentinelRoute through a partner courier integration or approved booking channel, establishing the initial manifest and security requirements.',
      subtext: 'Origin API Dispatch Point'
    },
    {
      stepNumber: '02',
      title: 'Pair & Seal',
      description: 'The driver pairs a SentinelRoute smart seal with the item. The initial seal state becomes the origin custody record.',
      subtext: 'Hardware Initialization & UID Lock'
    },
    {
      stepNumber: '03',
      title: 'Capture Custody Evidence',
      description: 'At each relevant handling point, structured evidence is captured across multiple verifiable signals.',
      evidenceItems: ['Photo evidence', 'Signature (where applicable)', 'GPS coordinates', 'Precise timestamp', 'Device motion information', 'Real-time seal continuity status'],
      subtext: 'Multi-Signal Evidence Collection'
    },
    {
      stepNumber: '04',
      title: 'Create Cryptographic Record',
      description: 'Each custody event is hashed together with the previous event to create a continuous, append-only cryptographic chain.',
      subtext: 'SHA-256 Hash Linking'
    },
    {
      stepNumber: '05',
      title: 'Check for Anomalies',
      description: 'SentinelRoute evaluates the event chain for suspicious conditions. For the MVP, this operates as rule-based anomaly checking before advanced models.',
      evidenceItems: ['Unexpected seal breach flags', 'GPS velocity & path inconsistencies', 'Timing & transit duration anomalies', 'Implausible handling event sequences'],
      subtext: 'Rule-Based Anomaly Evaluation (MVP)'
    },
    {
      stepNumber: '06',
      title: 'Verify or Flag',
      description: 'If the evidence chain is clean, the journey continues as verified. If an anomaly is identified, it is immediately flagged for supervisor and partner review.',
      subtext: 'Real-Time Evidential Decision'
    },
    {
      stepNumber: '07',
      title: 'Issue Certificate',
      description: 'A successfully completed verified journey produces a Verified Custody Certificate providing indisputable proof of untampered transit.',
      subtext: 'Defensible Certificate Generation'
    },
    {
      stepNumber: '08',
      title: 'Improve Network Intelligence',
      description: 'De-identified and aggregated event history can contribute to future network-wide risk intelligence and trained anomaly detection.',
      subtext: 'Future Scaled Collective Intelligence'
    }
  ];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return Send;
      case 1: return KeyRound;
      case 2: return Camera;
      case 3: return Hash;
      case 4: return SearchAlert;
      case 5: return ShieldCheck;
      case 6: return FileCheck2;
      case 7: return Network;
      default: return CheckCircle2;
    }
  };

  return (
    <section id="how-it-works" className="py-10 lg:py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <span>End-to-End Custody Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            From Collection to Verified Custody
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            A continuous eight-step verification protocol linking physical items, driver actions and cryptographic proof.
          </p>
        </div>

        {/* Desktop Interactive Stepper */}
        <div className="hidden lg:block">
          
          {/* Horizontal Step Buttons Bar */}
          <div className="grid grid-cols-8 gap-2 pb-6 border-b border-slate-800">
            {steps.map((step, idx) => {
              const Icon = getStepIcon(idx);
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-center text-center p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-slate-850 border border-amber-500/50 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 transition-colors ${
                      isActive
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-mono mb-1 ${isActive ? 'text-amber-400 font-bold' : 'text-slate-500'}`}>
                    STEP {step.stepNumber}
                  </span>
                  <span className={`text-xs font-semibold line-clamp-1 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          <div className="mt-8 rounded-2xl bg-slate-900/90 border border-slate-800 p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-md border border-amber-500/30">
                    PHASE STEP {steps[activeStep].stepNumber} OF 08
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {steps[activeStep].subtext}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {steps[activeStep].title}
                </h3>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-5">
                  {steps[activeStep].description}
                </p>

                {steps[activeStep].evidenceItems && (
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <span className="text-xs font-mono uppercase text-slate-300 block mb-3 font-bold">
                      Evidentiary Signals Captured & Verified:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {steps[activeStep].evidenceItems?.map((ev, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-100 bg-slate-950/90 p-2.5 rounded-lg border border-slate-800 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{ev}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Step Navigation Controls */}
              <div className="flex flex-col gap-3 shrink-0">
                <div className="flex items-center gap-2">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors cursor-pointer"
                    aria-label="Previous step"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                    className="p-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 disabled:opacity-30 disabled:cursor-not-allowed text-slate-950 font-bold transition-colors cursor-pointer"
                    aria-label="Next step"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-[11px] font-mono text-center text-slate-500">
                  {activeStep + 1} / {steps.length}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, idx) => {
            const Icon = getStepIcon(idx);
            return (
              <div
                key={idx}
                className="relative pl-8 pb-4 border-l-2 border-slate-800 last:border-l-0"
              >
                {/* Node icon */}
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-500/70 flex items-center justify-center text-amber-400">
                  <Icon className="w-3.5 h-3.5" />
                </div>

                <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      STEP {step.stepNumber}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {step.subtext}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-3">
                    {step.description}
                  </p>

                  {step.evidenceItems && (
                    <div className="pt-3 border-t border-slate-800 space-y-1.5">
                      {step.evidenceItems.map((ev, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{ev}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Offline-First Callout Banner */}
        <OfflineCallout />

      </div>
    </section>
  );
};
