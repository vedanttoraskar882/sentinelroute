import { 
  ShieldCheck, 
  Camera, 
  MapPin, 
  Clock, 
  Hash, 
  Cpu, 
  Layers, 
  Terminal, 
  Activity, 
  Lock 
} from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <div className="mt-10">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-500/30">
          SYSTEM TOPOLOGY
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2.5 mb-2">
          Five-Layer Integrity Architecture
        </h3>
        <p className="text-sm sm:text-base text-slate-300">
          From physical hardware pairing to cross-network verification APIs, SentinelRoute provides a continuous evidential stack.
        </p>
      </div>

      {/* Architecture Visual Container */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
        
        {/* Connection pipeline track */}
        <div className="space-y-6 relative">
          
          {/* Layer 5: Integration / API Layer */}
          <div className="relative group">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 sm:p-5 rounded-xl bg-slate-950 border border-blue-500/30 hover:border-blue-400/50 transition-all shadow-md">
              <div className="flex items-center gap-3.5 mb-3 md:mb-0">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest font-semibold">LAYER 5</span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs text-slate-400">Egress & Interfaces</span>
                  </div>
                  <h4 className="text-base font-bold text-white">Integration & API Layer</h4>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-200 border border-slate-750">
                  Verification API
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-200 border border-slate-750">
                  Partner Integrations
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-200 border border-slate-750">
                  SME Access
                </span>
                <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Future Insurer Risk Feed (Phase 2)
                </span>
              </div>
            </div>
            
            {/* Visual connector */}
            <div className="flex justify-center py-2">
              <div className="w-0.5 h-4 bg-gradient-to-b from-blue-500 to-indigo-500" />
            </div>
          </div>

          {/* Layer 4: Intelligence Layer */}
          <div className="relative group">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 sm:p-5 rounded-xl bg-slate-950 border border-indigo-500/30 hover:border-indigo-400/50 transition-all shadow-md">
              <div className="flex items-center gap-3.5 mb-3 md:mb-0">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-widest font-semibold">LAYER 4</span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs text-slate-400">Heuristics & Analysis</span>
                  </div>
                  <h4 className="text-base font-bold text-white">Intelligence Layer</h4>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-medium">
                  Rule-Based Anomaly Checks (Live MVP)
                </span>
                <span className="text-slate-500 font-mono text-xs">→</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-750">
                  Network-Trained Anomaly Model (Later Stage)
                </span>
              </div>
            </div>

            <div className="flex justify-center py-2">
              <div className="w-0.5 h-4 bg-gradient-to-b from-indigo-500 to-cyan-500" />
            </div>
          </div>

          {/* Layer 3: Integrity Ledger */}
          <div className="relative group">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 sm:p-5 rounded-xl bg-slate-950 border border-cyan-500/30 hover:border-cyan-400/50 transition-all shadow-md">
              <div className="flex items-center gap-3.5 mb-3 md:mb-0">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Hash className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">LAYER 3</span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs text-slate-400">Cryptographic Defense</span>
                  </div>
                  <h4 className="text-base font-bold text-white">Integrity Ledger</h4>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 text-cyan-200 border border-slate-750">
                  Cryptographic Hash Chaining
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 text-cyan-200 border border-slate-750">
                  Append-Only Custody Records
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 text-cyan-200 border border-slate-750">
                  Independent Timestamp Anchoring
                </span>
              </div>
            </div>

            <div className="flex justify-center py-2">
              <div className="w-0.5 h-4 bg-gradient-to-b from-cyan-500 to-emerald-500" />
            </div>
          </div>

          {/* Layer 2: Capture Layer */}
          <div className="relative group">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 sm:p-5 rounded-xl bg-slate-950 border border-emerald-500/30 hover:border-emerald-400/50 transition-all shadow-md">
              <div className="flex items-center gap-3.5 mb-3 md:mb-0">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest font-semibold">LAYER 2</span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs text-slate-400">SDK & Multi-Signal Input</span>
                  </div>
                  <h4 className="text-base font-bold text-white">Capture Layer</h4>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-750 flex items-center gap-1">
                  <Camera className="w-3 h-3 text-slate-400" /> Photos
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-750">
                  Signatures
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-750 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" /> GPS
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-750">
                  Motion
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-750 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" /> Timestamp
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-750 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-slate-400" /> Seal Status
                </span>
              </div>
            </div>

            <div className="flex justify-center py-2">
              <div className="w-0.5 h-4 bg-gradient-to-b from-emerald-500 to-amber-500" />
            </div>
          </div>

          {/* Layer 1: Hardware Layer */}
          <div className="relative group">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 sm:p-5 rounded-xl bg-slate-950 border border-amber-500/40 hover:border-amber-400/60 transition-all shadow-lg">
              <div className="flex items-center gap-3.5 mb-3 md:mb-0">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest font-semibold">LAYER 1</span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs text-slate-400">Physical Origin Foundation</span>
                  </div>
                  <h4 className="text-base font-bold text-white">Hardware Layer</h4>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-amber-400/10 text-amber-300 border border-amber-500/30 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Reusable Tamper-Evident Smart Seals
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
