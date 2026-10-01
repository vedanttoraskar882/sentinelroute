import React from 'react';
import { XCircle, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';
import { FounderCard } from './FounderCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-10 lg:py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <span>Independent Verification Layer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Building the Trust Layer for Secure Logistics
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Most courier systems rely on delivery photographs, GPS tracking, electronic signatures and internal operational records. These may prove that information was captured, but they do not necessarily provide a cryptographically protected end-to-end evidence chain.
          </p>
          <p className="text-base sm:text-lg text-slate-300 mt-2.5 leading-relaxed">
            SentinelRoute is designed to provide an independent verification layer across the entire custody journey — ensuring courier operators and shippers possess tamper-evident proof that withstands legal, contractual and insurance scrutiny.
          </p>
        </div>

        {/* Two-Column Problem vs Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* LEFT: Problem / Market Gap */}
          <div className="rounded-2xl bg-slate-900/85 border border-red-500/25 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/8 blur-3xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-red-400 font-bold">The Market Vulnerability</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">Traditional Proof of Delivery</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 mb-5 leading-relaxed">
                Conventional courier workflows produce siloed snapshots that are easily contested when high-value goods, confidential legal packets, or sensitive parcels are damaged or intercepted.
              </p>

              <ul className="space-y-3">
                {[
                  'Capture only the final delivery point, leaving intermediate transit unaccounted for',
                  'Depend on single photographs or signatures that lack cryptographic sealing',
                  'Provide limited or zero physical-digital tamper evidence between stops',
                  'Keep verification capability trapped inside proprietary individual courier systems',
                  'Lack cross-network anomaly learning to detect systemic courier fraud patterns'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-400 font-mono">
              Status quo: Disputable, internal-only operational logs
            </div>
          </div>

          {/* RIGHT: SentinelRoute Solution */}
          <div className="rounded-2xl bg-slate-900/90 border border-amber-500/35 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/12 blur-3xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold">Evidential Trust Layer</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">The SentinelRoute Solution</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 mb-5 leading-relaxed">
                SentinelRoute embeds an evidential standard throughout transit, giving couriers, legal firms and shippers an unalterable audit trail backed by mathematics and smart hardware.
              </p>

              <ul className="space-y-3">
                {[
                  'Multi-event custody evidence captured at every custody handoff',
                  'Tamper-evident sealing pairing physical security with digital verification',
                  'Cryptographic hash chaining making retrospective ledger alterations detectable',
                  'Independent timestamp anchoring preventing retroactive metadata falsification',
                  'Real-time anomaly checks detecting deviation before claims or disputes arise',
                  'Verified custody certificates generated upon clean journey completion',
                  'Reusable infrastructure ready to integrate across multiple courier operators'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-100">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs sm:text-sm text-amber-400 font-mono flex items-center justify-between">
              <span>SentinelRoute Standard: Cryptographically defensible custody</span>
              <span className="text-xs bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded font-bold">VERIFIED</span>
            </div>
          </div>

        </div>

        {/* Founder Card inside About Section */}
        <FounderCard />

      </div>
    </section>
  );
};
