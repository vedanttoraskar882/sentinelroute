import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Hash, 
  MapPin, 
  FileCheck2, 
  Lock, 
  Sparkles,
  Server,
  Layers
} from 'lucide-react';

interface HeroProps {
  onPilotClick: () => void;
  onExplorePlatform: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPilotClick, onExplorePlatform }) => {
  return (
    <section id="home" className="relative pt-24 pb-10 lg:pt-28 lg:pb-14 overflow-hidden">
      {/* Background radial glow & grid patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-amber-500/12 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/95 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span>SECURE LOGISTICS VERIFICATION INFRASTRUCTURE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
              Every Custody Event.{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Verified.
              </span>
            </h1>

            {/* Supporting Line */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-100 mb-4 max-w-2xl leading-snug">
              Cryptographically defensible chain-of-custody infrastructure for secure logistics.
            </p>

            {/* Detailed Description */}
            <p className="text-base sm:text-lg text-slate-200 mb-6 max-w-2xl leading-relaxed">
              SentinelRoute combines tamper-evident smart seals, multi-signal custody capture, cryptographic event chaining and real-time anomaly checking to help courier operators create stronger evidence for every sensitive delivery.
            </p>

            {/* Clear Architecture Positioning Notice */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-200 mb-7 max-w-xl shadow-md">
              <Server className="w-5 h-5 text-blue-400 shrink-0" />
              <span>
                <strong className="text-white">Pure Infrastructure Layer:</strong> SentinelRoute licenses verification technology to courier and logistics operators — not a fleet-scaling delivery firm.
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onPilotClick}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-xl text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-amber-400 active:scale-98 cursor-pointer group"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExplorePlatform}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-850 border border-slate-750 hover:border-slate-650 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-700 cursor-pointer"
              >
                <span>Explore the Platform</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Logistics Verification Interface Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 p-5 shadow-2xl backdrop-blur-xl">
                
                {/* Header bar of the simulation */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-200 tracking-wide">
                      CUSTODY INTEGRITY ENGINE™
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    LIVE EVENT AUDIT
                  </span>
                </div>

                {/* Verification Pipeline Steps */}
                <div className="space-y-2.5 mb-5 relative">
                  
                  {/* Step 1: Collection */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/50 border border-slate-750/60">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                        <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">1. Origin Collection</div>
                        <div className="text-[10px] text-slate-400">Secure Dispatch Point • Central London</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      ANCHORED
                    </span>
                  </div>

                  {/* Pipeline arrow */}
                  <div className="flex justify-center -my-1 text-slate-600">
                    <div className="w-0.5 h-2 bg-slate-700" />
                  </div>

                  {/* Step 2: Smart Seal */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/50 border border-slate-750/60">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                        <Cpu className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">2. Smart Seal Paired</div>
                        <div className="text-[10px] text-slate-400">UID: SR-SEAL-8842-X • Active Continuity</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      PAIRED
                    </span>
                  </div>

                  <div className="flex justify-center -my-1 text-slate-600">
                    <div className="w-0.5 h-2 bg-slate-700" />
                  </div>

                  {/* Step 3: Custody Events */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/50 border border-slate-750/60">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                        <Layers className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">3. Custody Events Capture</div>
                        <div className="text-[10px] text-slate-400">Photo • GPS Track • Timestamp • Device Motion</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                      CAPTURED
                    </span>
                  </div>

                  <div className="flex justify-center -my-1 text-slate-600">
                    <div className="w-0.5 h-2 bg-slate-700" />
                  </div>

                  {/* Step 4: Hash-Chain Verification */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/50 border border-slate-750/60">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                        <Hash className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">4. Hash-Chain Verification</div>
                        <div className="text-[10px] text-slate-400">SHA-256 Link: 0x9f4a...83d2 • Append-Only</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      CHAINED
                    </span>
                  </div>

                  <div className="flex justify-center -my-1 text-slate-600">
                    <div className="w-0.5 h-2 bg-slate-700" />
                  </div>

                  {/* Step 5: Risk / Anomaly Check */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/50 border border-slate-750/60">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">5. Rule-Based Anomaly Check</div>
                        <div className="text-[10px] text-slate-400">Seal Continuity • Velocity • Sequence Plausibility</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                      CLEAN
                    </span>
                  </div>

                  <div className="flex justify-center -my-1 text-slate-600">
                    <div className="w-0.5 h-2 bg-slate-700" />
                  </div>

                  {/* Step 6: Verified Custody Certificate */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/40">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                        <FileCheck2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-300">6. Verified Custody Certificate</div>
                        <div className="text-[10px] text-amber-200/80">Defensible Evidential Record Ready</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/40">
                      ISSUED
                    </span>
                  </div>
                </div>

                {/* Four Micro Information Status Cards */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400">Seal Integrity</div>
                      <div className="text-xs font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                        <Lock className="w-3 h-3" />
                        SECURE
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500/60" />
                  </div>

                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400">Custody Chain</div>
                      <div className="text-xs font-bold text-cyan-400 flex items-center gap-1 mt-0.5">
                        <Hash className="w-3 h-3" />
                        VERIFIED
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-cyan-500/60" />
                  </div>

                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400">GPS Evidence</div>
                      <div className="text-xs font-bold text-blue-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        MATCHED
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-blue-500/60" />
                  </div>

                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400">Certificate</div>
                      <div className="text-xs font-bold text-amber-400 flex items-center gap-1 mt-0.5">
                        <FileCheck2 className="w-3 h-3" />
                        READY
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-amber-500/60" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
