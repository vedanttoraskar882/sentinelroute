import React from 'react';
import { WifiOff, RefreshCw, Database, ShieldCheck } from 'lucide-react';

export const OfflineCallout: React.FC = () => {
  return (
    <div className="mt-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-750 p-6 sm:p-8 shadow-xl relative overflow-hidden backdrop-blur-md">
      {/* Decorative accent glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10 text-left">
        
        {/* Left explanation */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-750 text-cyan-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <WifiOff className="w-3.5 h-3.5" />
            <span>Resilient Architecture</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Verification That Doesn't Stop When Signal Does
          </h3>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-3">
            Custody events are designed to be captured and hashed locally when connectivity is unavailable and synchronised when the device reconnects.
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            This offline-first cryptographic resilience allows the custody record to continue seamlessly through underground loading bays, rural transit corridors, remote client sites, and areas with poor mobile coverage without compromising event sequence or chain validity.
          </p>
        </div>

        {/* Right workflow mini-diagram */}
        <div className="lg:w-80 shrink-0 bg-slate-950/90 rounded-xl p-5 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
            <span>OFFLINE CUSTODY PROTOCOL</span>
            <span className="text-emerald-400">RESILIENT</span>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <div className="w-8 h-8 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">1. Local Hash Anchor</div>
              <div className="text-[11px] text-slate-400">Event hashed in device keystore</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <div className="w-8 h-8 rounded-md bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">2. Automatic Resync</div>
              <div className="text-[11px] text-slate-400">Buffered queue uploads on signal</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <div className="w-8 h-8 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">3. Network Verification</div>
              <div className="text-[11px] text-slate-400">Hash-chain sequence validated</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
