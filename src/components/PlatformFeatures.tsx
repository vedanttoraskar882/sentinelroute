import React from 'react';
import { ShieldCheck, AlertTriangle, KeyRound, MonitorCheck } from 'lucide-react';

export const PlatformFeatures: React.FC = () => {
  const features = [
    {
      title: 'Verification Confidence',
      description: 'Every custody event can be classified according to the strength of the available verification evidence.',
      icon: ShieldCheck,
      badge: 'Defensible Evidentiary Score',
      accent: 'border-blue-500/30 text-blue-400 bg-blue-500/10'
    },
    {
      title: 'Real-Time Anomaly Flags',
      description: 'Suspicious custody activity can be surfaced during the journey rather than only when a dispute is raised later.',
      icon: AlertTriangle,
      badge: 'Proactive Alerting',
      accent: 'border-amber-500/30 text-amber-400 bg-amber-500/10'
    },
    {
      title: 'Live Seal Continuity',
      description: 'Seal integrity can form part of the custody status throughout the journey from dispatch to final sign-off.',
      icon: KeyRound,
      badge: 'Continuous Integrity',
      accent: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
    },
    {
      title: 'White-Label Integration',
      description: 'Courier partners can present SentinelRoute verification within their own customer experience and branding.',
      icon: MonitorCheck,
      badge: 'Partner Brand Native',
      accent: 'border-purple-500/30 text-purple-400 bg-purple-500/10'
    }
  ];

  return (
    <div className="mt-10">
      <div className="text-left mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          Enterprise Operational Highlights
        </h3>
        <p className="text-sm sm:text-base text-slate-300">
          Built to integrate directly into existing courier fleets, logistics software, and client-facing tracking portals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="rounded-xl bg-slate-900/85 border border-slate-800 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 shadow-md backdrop-blur-sm"
            >
              <div>
                <div className={`w-11 h-11 rounded-lg border ${feature.accent} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block mb-2">
                  {feature.badge}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
