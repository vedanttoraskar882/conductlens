import React from 'react';
import { 
  FileCheck2, 
  Database, 
  Lock, 
  Calendar, 
  TrendingUp, 
  Eye, 
  UserCheck, 
  FolderLock, 
  Activity,
  ShieldAlert,
  Info
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: "Step 1",
      title: "Prepare and connect",
      desc: "Check data readiness, agree processing arrangements, support the customer’s data-protection assessment and issue a worker notice before connection.",
      icon: FileCheck2,
      note: "Data-protection assessment (DPIA) & worker notice completed prior to data transfer."
    },
    {
      num: "Step 2",
      title: "Collect approved signals",
      desc: "Import only allow-listed operational fields and exit-interview responses.",
      icon: Database,
      note: "Strict allow-list boundary; intrusive communications and medical notes are excluded."
    },
    {
      num: "Step 3",
      title: "Pseudonymise records",
      desc: "Replace identifying fields with tokens and hold the identity mapping separately.",
      icon: Lock,
      note: "Token keys held in an isolated cryptographic store. Identities cannot be queried arbitrarily."
    },
    {
      num: "Step 4",
      title: "Establish a 90-day baseline",
      desc: "Learn normal organisational patterns without raising indicators. Agree sensitivity thresholds with HR before activation.",
      icon: Calendar,
      note: "Passive learning phase ensures zero indicators are triggered during initial calibration."
    },
    {
      num: "Step 5",
      title: "Compare and monitor",
      desc: "Compare teams with structurally similar peers and check sustained divergence across multiple signals.",
      icon: TrendingUp,
      note: "The default persistence rule is three consecutive scoring cycles, subject to sufficient data. (Not a fixed number of days)."
    },
    {
      num: "Step 6",
      title: "Present an indicator",
      desc: "Show the team token, risk band, contributing signals, trend, confidence and data quality without revealing names.",
      icon: Eye,
      note: "Neutral wording ('Review suggested'). Identities remain masked until authorised."
    },
    {
      num: "Step 7",
      title: "Let HR decide",
      desc: "The HR Director can dismiss with a recorded reason, continue monitoring or authorise an inquiry.",
      icon: UserCheck,
      note: "Every decision is recorded in an immutable audit log with rationale."
    },
    {
      num: "Step 8",
      title: "Inquire and record",
      desc: "Where the paid inquiry add-on applies, explicit logged authorisation resolves relevant identities, assigns an HR reviewer and records actions and decisions in the case ledger.",
      icon: FolderLock,
      note: "Optional +25% add-on providing Acas-aligned stages and exportable case ledgers."
    },
    {
      num: "Step 9",
      title: "Monitor after action",
      desc: "Track whether indicators improve, stabilise or worsen.",
      icon: Activity,
      note: "Retaliation-risk monitoring is planned for a later release."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white border-y border-navy-100">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-teal-700 text-xs font-bold tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span>Process & Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            How ConductLens works: from silent signals to proportionate review.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy-600 leading-relaxed">
            A 9-step governance process designed to maintain confidentiality, eliminate false single-event alarms, and preserve human judgment.
          </p>
        </div>

        {/* Central Core Principle Alert Banner */}
        <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-teal-50/70 border border-teal-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-teal-900">
                Core Governance Principle
              </div>
              <div className="text-base sm:text-lg font-bold text-navy-950 mt-0.5">
                “An indicator supports review; it does not establish misconduct.”
              </div>
            </div>
          </div>
          <div className="text-xs text-teal-800 bg-white/80 px-3 py-1.5 rounded-lg border border-teal-200/60 font-medium">
            Proportionate · Explainable · Documented
          </div>
        </div>

        {/* Visual Workflow Diagram: From Signal Collection to Human Review */}
        <div className="mb-20 bg-surface-warm rounded-2xl p-6 sm:p-8 border border-navy-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-navy-100 gap-2 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                End-to-End Workflow Diagram
              </span>
              <h3 className="text-base sm:text-lg font-bold text-navy-950">
                Visual Workflow: Signal Ingestion to Documented Human Outcome
              </h3>
            </div>
            <span className="text-[11px] font-semibold text-navy-600 bg-white px-2.5 py-1 rounded border border-navy-200">
              Illustrative preview — synthetic data
            </span>
          </div>

          <div className="w-full overflow-x-auto pb-2">
            <div className="min-w-[720px] p-4 bg-white rounded-xl border border-navy-100 shadow-2xs">
              <svg className="w-full h-36" viewBox="0 0 760 140" fill="none">
                {/* 1. Collection */}
                <rect x="10" y="20" width="120" height="90" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
                <text x="70" y="45" textAnchor="middle" fill="#0B1524" fontWeight="bold" fontSize="11">1. Signal Ingestion</text>
                <text x="70" y="65" textAnchor="middle" fill="#64748B" fontSize="9">Allow-list inputs</text>
                <text x="70" y="82" textAnchor="middle" fill="#64748B" fontSize="9">Operational fields</text>
                <text x="70" y="97" textAnchor="middle" fill="#0D9488" fontSize="8" fontWeight="600">No surveillance</text>

                <path d="M 135 65 L 160 65" stroke="#94A3B8" strokeWidth="2" />
                <polygon points="160,65 153,61 153,69" fill="#94A3B8" />

                {/* 2. Pseudonymisation */}
                <rect x="165" y="20" width="120" height="90" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
                <text x="225" y="45" textAnchor="middle" fill="#0B1524" fontWeight="bold" fontSize="11">2. Tokenisation</text>
                <text x="225" y="65" textAnchor="middle" fill="#64748B" fontSize="9">Identifier tokens</text>
                <text x="225" y="82" textAnchor="middle" fill="#64748B" fontSize="9">Isolated mapping</text>
                <text x="225" y="97" textAnchor="middle" fill="#0D9488" fontSize="8" fontWeight="600">Privacy preserved</text>

                <path d="M 290 65 L 315 65" stroke="#94A3B8" strokeWidth="2" />
                <polygon points="315,65 308,61 308,69" fill="#94A3B8" />

                {/* 3. Baseline & Peer Comparison */}
                <rect x="320" y="20" width="120" height="90" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
                <text x="380" y="45" textAnchor="middle" fill="#0B1524" fontWeight="bold" fontSize="11">3. Peer Comparison</text>
                <text x="380" y="65" textAnchor="middle" fill="#64748B" fontSize="9">90-day baseline</text>
                <text x="380" y="82" textAnchor="middle" fill="#64748B" fontSize="9">3 consecutive cycles</text>
                <text x="380" y="97" textAnchor="middle" fill="#0D9488" fontSize="8" fontWeight="600">Persistence check</text>

                <path d="M 445 65 L 470 65" stroke="#94A3B8" strokeWidth="2" />
                <polygon points="470,65 463,61 463,69" fill="#94A3B8" />

                {/* 4. Indicator Presentation */}
                <rect x="475" y="20" width="120" height="90" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
                <text x="535" y="45" textAnchor="middle" fill="#92400E" fontWeight="bold" fontSize="11">4. Indicator Flag</text>
                <text x="535" y="65" textAnchor="middle" fill="#78350F" fontSize="9">Review suggested</text>
                <text x="535" y="82" textAnchor="middle" fill="#78350F" fontSize="9">Tokenised team ID</text>
                <text x="535" y="97" textAnchor="middle" fill="#B45309" fontSize="8" fontWeight="600">Explainable factors</text>

                <path d="M 600 65 L 625 65" stroke="#0D9488" strokeWidth="2" />
                <polygon points="625,65 618,61 618,69" fill="#0D9488" />

                {/* 5. Authorised Human Review */}
                <rect x="630" y="20" width="120" height="90" rx="8" fill="#CCFBF1" stroke="#0D9488" strokeWidth="1.5" />
                <text x="690" y="45" textAnchor="middle" fill="#042F2E" fontWeight="bold" fontSize="11">5. Human Review</text>
                <text x="690" y="65" textAnchor="middle" fill="#115E59" fontSize="9">HR Director decision</text>
                <text x="690" y="82" textAnchor="middle" fill="#115E59" fontSize="9">Logged inquiry</text>
                <text x="690" y="97" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="600">Documented ledger</text>
              </svg>
            </div>
          </div>
        </div>

        {/* 9-Step Responsive Timeline */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((st) => {
              const IconComp = st.icon;
              return (
                <div 
                  key={st.num}
                  className="bg-surface-warm rounded-2xl p-6 border border-navy-100/90 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/80">
                        {st.num}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white border border-navy-200 flex items-center justify-center text-navy-700 shadow-2xs">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-navy-950 mb-2">
                      {st.title}
                    </h3>
                    
                    <p className="text-sm text-navy-700 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-navy-100 flex items-start space-x-2 text-xs text-navy-600 bg-white/60 p-2.5 rounded-lg border border-navy-100">
                    <Info className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="leading-tight">{st.note}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
