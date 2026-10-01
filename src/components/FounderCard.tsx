import React from 'react';
import { UserCheck, Award, Shield, FileCheck, Car } from 'lucide-react';

export const FounderCard: React.FC = () => {
  return (
    <div className="mt-8 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-950 border border-slate-750/80 p-6 sm:p-8 relative overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
        
        {/* Left: Founder Details */}
        <div className="max-w-2xl text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/15 px-3 py-1 rounded-md border border-amber-500/30">
              Founder-Market Fit
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Muhammad Maqsood Raza
          </h3>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-4">
            Muhammad's experience across UK security operations involved access control, incident reporting, patrols, shift handovers and the creation of timestamped records that supervisors and clients could later rely upon.
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            SentinelRoute applies the same evidential discipline to logistics custody — converting structured security reporting principles into scalable verification infrastructure.
          </p>
        </div>

        {/* Right: Verified Qualifications Grid */}
        <div className="lg:w-88 shrink-0 bg-slate-950/90 rounded-xl p-5 border border-slate-800 shadow-lg space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-300 pb-2.5 border-b border-slate-800 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-amber-400" />
            <span>Verified Background</span>
          </div>

          <div className="space-y-3.5 text-sm">
            <div className="flex items-start gap-3">
              <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">LLM / Master of Laws</span>
                <div className="text-slate-400 text-xs">University of Essex (also holds LLB)</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">SIA Door Supervisor Licence</span>
                <div className="text-slate-400 text-xs">First Aid Training Certified</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">UK Security Operations Experience</span>
                <div className="text-slate-400 text-xs">The Lodge Security, Guardian Nationwide, Excellerate Security</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Car className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Full UK Driving Licence</span>
                <div className="text-slate-400 text-xs">Founder-operated vehicle for founding live pilot route</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
