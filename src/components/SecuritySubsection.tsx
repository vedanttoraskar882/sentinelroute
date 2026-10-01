import React from 'react';
import { Lock, Database, Shield, FileText, DatabaseZap } from 'lucide-react';

export const SecuritySubsection: React.FC = () => {
  const securityItems = [
    {
      title: 'Encryption in Transit',
      spec: 'TLS 1.3',
      description: 'End-to-end cryptographic transit security across all SDK submissions and verification queries.',
      icon: Lock
    },
    {
      title: 'Encryption at Rest',
      spec: 'AES-256',
      description: 'Zero plaintext evidence storage with cryptographic hashing of all ledger records.',
      icon: Database
    },
    {
      title: 'Data Isolation',
      spec: 'Multi-Tenant Partner Separation',
      description: 'Strict architectural segregation ensuring courier operators cannot view or access competitor event data.',
      icon: Shield
    },
    {
      title: 'Auditability',
      spec: 'Immutable Event Ledger',
      description: 'Granular actor, precise timestamp and verification outcome logging for complete legal defensibility.',
      icon: FileText
    },
    {
      title: 'Data Governance',
      spec: 'Strict Retention & De-Identification',
      description: 'Compliant evidence retention policies with de-identified aggregated records isolated for future risk intelligence.',
      icon: DatabaseZap
    }
  ];

  return (
    <div className="mt-10 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-800 mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
            DEFENSIVE ARCHITECTURE
          </span>
          <h3 className="text-2xl font-bold text-white mt-1">
            Data Integrity & Cryptographic Security
          </h3>
        </div>
        <div className="text-xs sm:text-sm text-slate-300 max-w-sm">
          Technical specifications designed around evidential standards for dispute-prone logistics.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {securityItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/85 border border-slate-800 hover:border-slate-700 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
                  <Icon className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                  {item.spec}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
