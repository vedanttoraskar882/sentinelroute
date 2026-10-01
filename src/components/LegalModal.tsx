import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl relative">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed text-left">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Data Governance & Privacy Overview</strong><br />
                SentinelRoute is dedicated to providing verifiable chain-of-custody infrastructure for logistics operators while respecting data protection principles under UK GDPR and the Data Protection Act 2018.
              </p>
              <p>
                <strong>2. Information We Process</strong><br />
                When users interact with our pilot evaluation forms, information is stored strictly within the user’s local browser storage (localStorage). SentinelRoute does not collect or transmit tracking cookies or third-party behavioral profiling scripts.
              </p>
              <p>
                <strong>3. Custody Telemetry & Cryptographic Hashes</strong><br />
                Custody events processed via the SentinelRoute Capture SDK utilize cryptographic one-way hashing (SHA-256) of transit metadata. Evidentiary records are isolated per partner tenant, with future risk analytics conducted solely on aggregated, de-identified datasets.
              </p>
              <p>
                <strong>4. Contact & Inquiries</strong><br />
                For data governance queries regarding pilot route datasets or infrastructure verification policies, please contact the SentinelRoute technical administration via the pilot request channel.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Verification Infrastructure Terms</strong><br />
                SentinelRoute provides a technology infrastructure layer incorporating smart-seal hardware, the Capture SDK, cryptographic ledger chaining, and verification APIs. SentinelRoute does not provide direct courier or haulage services.
              </p>
              <p>
                <strong>2. Defensible Evidence Standards</strong><br />
                Verified Custody Certificates reflect the cryptographic continuity of recorded events and rule-based anomaly evaluations. Operational custody remains with the participating licensed courier operator.
              </p>
              <p>
                <strong>3. Pilot Evaluation Scope</strong><br />
                Initial pilot deployments, including the founder-operated demonstration route, are conducted to validate hardware pairing, SDK event capture, and rule-based heuristics before commercial fleet rollouts.
              </p>
              <p>
                <strong>4. Intellectual Property</strong><br />
                All proprietary algorithms, Custody Integrity Engine specifications, firmware interfaces, and documentation remain the exclusive property of SentinelRoute.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};
