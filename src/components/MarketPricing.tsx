import { 
  Truck, 
  FileText, 
  Store, 
  Building2, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';
import type { CustomerPersona, CommercialTier } from '../types';

interface MarketPricingProps {
  onSelectTier: (tierName: string) => void;
}

export const MarketPricing: React.FC<MarketPricingProps> = ({ onSelectTier }) => {
  const personas: CustomerPersona[] = [
    {
      title: 'Courier & Logistics Operators',
      description: 'For SME courier firms, man-and-van operators and gig-adjacent logistics businesses that need stronger proof-of-custody capability without building proprietary verification technology.'
    },
    {
      title: 'Specialist Legal-Document Couriers',
      description: 'For established secure-document operators seeking to modernise existing GPS, signature and chain-of-custody processes with cryptographic verification.'
    },
    {
      title: 'SME Trades & Retail',
      description: 'Designed for organisations that occasionally need valuable keys, documents, equipment or sensitive items transported with stronger evidence.',
      examples: ['Locksmiths', 'Letting agents', 'Estate agents', 'Independent retailers', 'Pharmacies']
    },
    {
      title: 'Insurers & Underwriters',
      description: 'A future customer group for aggregated, de-identified custody-risk data once SentinelRoute has built a sustained event history.',
      isFuture: true
    }
  ];

  const commercialTiers: CommercialTier[] = [
    {
      title: 'Partner Platform Licence',
      pricingLabel: 'Commercial Pricing',
      description: 'Recurring platform access for courier and logistics partners using the SentinelRoute Verification API and supporting infrastructure.',
      features: [
        'Verification API access',
        'Partner integration support',
        'Smart-seal provisioning support',
        'Custody-status infrastructure',
        'Partner onboarding support'
      ],
      ctaText: 'Request Partner Pricing'
    },
    {
      title: 'Verification Events',
      pricingLabel: 'Usage Based',
      description: 'A per-verification-event commercial structure designed to scale with the number of verified custody events processed across the network.',
      features: [
        'Custody-event processing',
        'Cryptographic event chaining',
        'Verification status querying',
        'Rule-based anomaly checks',
        'Evidence-chain processing'
      ],
      ctaText: 'Discuss Volume Pricing'
    },
    {
      title: 'Smart-Seal Hardware',
      pricingLabel: 'Hardware Pricing',
      description: 'Commercial supply of reusable tamper-evident SentinelRoute smart-seal units to approved partner operators and participating customers.',
      features: [
        'Reusable seal hardware supply',
        'Hardware pairing capability',
        'Seal-continuity monitoring',
        'Hardware provisioning & support'
      ],
      ctaText: 'Request Hardware Pricing'
    },
    {
      title: 'Insurer Risk Data',
      pricingLabel: 'Subscription',
      badge: 'Future / Phase 2',
      description: 'Future subscription access to aggregated and de-identified custody-risk intelligence for insurers and underwriters after sufficient network history has been established.',
      features: [
        'Aggregated loss & anomaly heuristics',
        'De-identified route integrity benchmarks',
        'Underwriting risk validation feeds',
        'Corridor reliability analytics'
      ],
      ctaText: 'Register Interest'
    }
  ];

  const rolloutPhases = [
    {
      phase: 'PHASE 1',
      period: 'Months 1–3',
      name: 'Founder Pilot',
      points: [
        'Field-test Custody Integrity Engine',
        'Refine smart-seal hardware',
        'Refine custody capture workflow',
        'Test rule-based anomaly logic',
        'Generate founding custody-event dataset'
      ]
    },
    {
      phase: 'PHASE 2',
      period: 'Months 4–9',
      name: 'Partner Integration',
      points: [
        'Onboard 2–3 courier operators',
        'Prioritise SME trades-facing couriers',
        'Open direct SME/individual booking capability through certified partner drivers'
      ]
    },
    {
      phase: 'PHASE 3',
      period: 'Months 10–18',
      name: 'Specialist Courier Expansion',
      points: [
        'Approach specialist legal-document courier companies',
        'Offer SentinelRoute as a technology upgrade to their existing custody systems'
      ]
    },
    {
      phase: 'PHASE 4',
      period: 'Year 2+',
      name: 'Risk Intelligence',
      points: [
        'Introduce insurer/underwriter risk-data capability after sufficient verified event history exists',
        'Explore adjacent regulated logistics sectors'
      ]
    }
  ];

  const getPersonaIcon = (idx: number) => {
    switch (idx) {
      case 0: return Truck;
      case 1: return FileText;
      case 2: return Store;
      case 3: return Building2;
      default: return Truck;
    }
  };

  return (
    <section id="market-pricing" className="py-10 lg:py-14 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================================================= */}
        {/* 1. TARGET MARKET PERSONAS */}
        {/* ================================================= */}
        <div className="max-w-3xl mb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <span>Market Segments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Built for High-Trust Logistics
          </h2>
          <p className="text-base sm:text-lg text-slate-200">
            Tailored for sectors where lost packages, contested handoffs, or unverified deliveries incur serious contractual, financial, or regulatory liability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {personas.map((persona, idx) => {
            const Icon = getPersonaIcon(idx);
            return (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-750 transition-colors shadow-md relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    {persona.isFuture && (
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-500/30">
                        PHASE 2
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white mb-2.5">
                    {persona.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {persona.description}
                  </p>
                </div>

                {persona.examples && (
                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                      Key Client Examples:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {persona.examples.map((ex, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================================================= */}
        {/* 2. MARKET CONTEXT */}
        {/* ================================================= */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-6 sm:p-8 mb-10 shadow-xl backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-800 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                LOGISTICS SECTOR CONTEXT
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Underlying UK Courier & Delivery Environment
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Industry figures highlighting courier scale and the economic burden of delivery friction and disputed handoffs across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                US$18.85B
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1">
                UK Courier Market – 2026
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Underlying sector volume
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                4.36%
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1">
                Forecast CAGR to 2034
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Projected market expansion rate
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                US$1.49B
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1">
                UK Same-Day Delivery Market – 2026
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                High-urgency courier segment
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-red-400 font-mono">
                £1.6 Billion
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1">
                Failed First-Time Deliveries (2023)
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                14% failure rate across 574M attempts
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 italic">
            "These figures relate to the underlying UK courier and delivery market. A dedicated market-size estimate specifically for chain-of-custody verification technology is not presented as an independently established figure."
          </div>
        </div>

        {/* ================================================= */}
        {/* 3. MARKET ROLLOUT ROADMAP */}
        {/* ================================================= */}
        <div className="mb-10">
          <div className="max-w-2xl mb-6 text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold bg-amber-400/10 px-3 py-1 rounded-full border border-amber-500/20">
              EXECUTION MILESTONES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2.5 mb-2">
              Phased Market Rollout Strategy
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              A disciplined trajectory progressing from founder-operated pilot verification to multi-partner fleet integration and insurer risk intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {rolloutPhases.map((phase, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-750 transition-all shadow-md relative"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {phase.phase}
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      {phase.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-3">
                    {phase.name}
                  </h4>

                  <ul className="space-y-2 text-xs text-slate-300">
                    {phase.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400 uppercase">
                  Milestone Focus {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================= */}
        {/* 4. PRICING / COMMERCIAL MODEL CARDS */}
        {/* (NO INVENTED NUMERICAL PRICES) */}
        {/* ================================================= */}
        <div className="text-left max-w-3xl mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <span>Commercial Structure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Commercial Model Built to Scale With Usage
          </h2>
          <p className="text-base sm:text-lg text-slate-200">
            Aligned directly with courier operational volume and partner infrastructure needs rather than fleet ownership overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {commercialTiers.map((tier, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-750 transition-all shadow-xl relative backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    {tier.pricingLabel}
                  </span>
                  {tier.badge && (
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-500/30">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {tier.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {tier.description}
                </p>

                <div className="pt-4 border-t border-slate-800 mb-5">
                  <span className="text-xs font-mono uppercase text-slate-300 block mb-2.5 font-bold">
                    Includes:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectTier(tier.title)}
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm cursor-pointer group"
                >
                  <span>{tier.ctaText}</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory pricing disclaimer */}
        <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center text-xs sm:text-sm text-slate-300 mb-10">
          "Pilot and commercial pricing is discussed according to partner requirements, verification volume, hardware needs and integration scope."
        </div>

        {/* ================================================= */}
        {/* 5. REVENUE MODEL EXPLANATION */}
        {/* ================================================= */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="max-w-3xl mb-8 text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              SCALABILITY ENGINE
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-2">
              Scalable Platform Economics
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              SentinelRoute is designed to scale primarily through network usage rather than vehicle ownership. Our software and hardware architecture enables multiple recurring revenue streams:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs font-mono font-bold text-amber-400 mb-1">
                STREAM 1 & 2
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                Licence & Event Fees
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Partner platform licence fees plus predictable per-verification-event fees billed as courier volume expands.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-1">
                STREAM 3 & 4
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                Hardware & SME Fees
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Smart-seal hardware provisioning margin paired with direct SME or individual verified booking fees through certified drivers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs font-mono font-bold text-emerald-400 mb-1">
                STREAM 5 (PHASE 2)
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                Insurer Intelligence
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Future insurer and underwriter data-licensing subscriptions for aggregated, de-identified risk telemetry.
              </p>
            </div>
          </div>

          {/* Visual Formula Box */}
          <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <span className="text-xs sm:text-sm font-mono font-bold text-slate-300">
              MORE PARTNERS
            </span>
            <span className="text-amber-400 font-bold text-base sm:text-lg">+</span>
            <span className="text-xs sm:text-sm font-mono font-bold text-slate-300">
              MORE VERIFIED EVENTS
            </span>
            <span className="text-amber-400 font-bold text-base sm:text-lg">=</span>
            <span className="text-xs sm:text-sm font-mono font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded border border-amber-500/30">
              SCALABLE PLATFORM REVENUE
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
