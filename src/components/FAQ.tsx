import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'What is SentinelRoute?',
      answer: 'SentinelRoute is a custody-integrity verification infrastructure platform designed for secure courier and logistics operations. It combines tamper-evident hardware, structured custody-event capture, cryptographic record chaining and anomaly checking.'
    },
    {
      id: 'faq-2',
      question: 'Is SentinelRoute a courier company?',
      answer: "SentinelRoute's scalable core business is verification infrastructure rather than operating a large courier fleet. The founder-operated route is intended as the platform's initial real-world pilot environment."
    },
    {
      id: 'faq-3',
      question: 'What is a custody event?',
      answer: "A custody event is a timestamped point in an item's journey, such as collection, an intermediate handling point or delivery, supported by evidence such as photography, GPS, signature where applicable and seal-continuity information."
    },
    {
      id: 'faq-4',
      question: 'What is a hash-chain ledger?',
      answer: 'Each custody event is cryptographically linked to the event before it. If an earlier record is altered, deleted or reordered, the chain changes and that alteration becomes detectable.'
    },
    {
      id: 'faq-5',
      question: 'What does the smart seal do?',
      answer: 'The reusable tamper-evident smart seal is paired with an item and helps the system monitor seal continuity as the item moves through the custody journey.'
    },
    {
      id: 'faq-6',
      question: 'Does SentinelRoute work without mobile signal?',
      answer: 'The architecture is designed to capture and hash events locally when connectivity is unavailable and synchronise them when connectivity returns.'
    },
    {
      id: 'faq-7',
      question: 'Does SentinelRoute use artificial intelligence?',
      answer: 'The MVP uses rule-based anomaly checks such as seal-continuity and GPS-versus-timestamp plausibility checks. A trained anomaly-detection model is planned after enough real-world pooled event data has been generated.'
    },
    {
      id: 'faq-8',
      question: 'Can courier companies integrate SentinelRoute into their own applications?',
      answer: 'Yes. SentinelRoute is designed around a Verification API, Capture SDK and partner integration layer so courier operators can incorporate verification into their existing workflows.'
    },
    {
      id: 'faq-9',
      question: 'Who is SentinelRoute designed for?',
      answer: 'Target users include courier and logistics operators, specialist legal-document couriers, SME trades and retailers requiring secure transport and, in a later phase, insurers and underwriters.'
    },
    {
      id: 'faq-10',
      question: 'How much does SentinelRoute cost?',
      answer: 'The business model combines partner platform licensing, usage-based verification charges, smart-seal hardware and future risk-data subscriptions. Commercial pricing is discussed according to integration scope, hardware requirements and verification volume.'
    },
    {
      id: 'faq-11',
      question: 'Is the insurer risk feed available immediately?',
      answer: 'No. It is a later-stage capability intended to launch after SentinelRoute has accumulated a credible and sustained history of verified custody events.'
    },
    {
      id: 'faq-12',
      question: 'What happens after a successful custody journey?',
      answer: 'A clean verified journey can result in a Verified Custody Certificate summarising the integrity of the custody record.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-10 lg:py-14 relative bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Platform & Operational FAQ
          </h2>
          <p className="text-base sm:text-lg text-slate-200">
            Clear answers to common questions regarding SentinelRoute’s verification architecture, hardware integration, and commercial model.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-slate-900/85 border border-slate-800 transition-colors duration-200 overflow-hidden shadow-sm backdrop-blur-sm"
              >
                <button
                  type="button"
                  id={`accordion-heading-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-body-${faq.id}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`accordion-body-${faq.id}`}
                    role="region"
                    aria-labelledby={`accordion-heading-${faq.id}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-200 leading-relaxed border-t border-slate-800/80 animate-in fade-in duration-150"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
