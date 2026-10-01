import React from 'react';
import { ShieldAlert, Hash, Activity, Terminal } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      title: 'Tamper-Evident Hardware',
      subtitle: 'Reusable smart-seal continuity',
      icon: ShieldAlert,
      iconColor: 'text-amber-400',
      bgColor: 'bg-amber-400/10',
      borderColor: 'border-amber-500/20'
    },
    {
      title: 'Cryptographic Custody Records',
      subtitle: 'Append-only hash chaining',
      icon: Hash,
      iconColor: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      title: 'Real-Time Verification',
      subtitle: 'Instant anomaly & rule checks',
      icon: Activity,
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      borderColor: 'border-emerald-500/20'
    },
    {
      title: 'Partner-Ready API',
      subtitle: 'Seamless courier integration',
      icon: Terminal,
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-500/20'
    }
  ];

  return (
    <section className="relative py-4 sm:py-5 bg-slate-950/80 border-y border-slate-800/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-900/85 border border-slate-800/90 hover:border-slate-700 transition-colors shadow-sm"
              >
                <div className={`w-10 h-10 rounded-lg ${item.bgColor} border ${item.borderColor} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div className="min-w-0 text-left">
                  <h2 className="text-sm sm:text-base font-bold text-white truncate">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
