import React from 'react';
import { 
  Database, 
  Cpu, 
  FileText, 
  Check, 
  X, 
  UserCheck2,
  FileCheck,
  EyeOff,
  Scale
} from 'lucide-react';

export const PlatformSection: React.FC = () => {
  const mvpModules = [
    {
      num: 1,
      name: "Tenancy and security baseline",
      desc: "Customer isolation, encryption, single sign-on, role-based access and audit logging in the planned product."
    },
    {
      num: 2,
      name: "Connectors",
      desc: "Planned BambooHR and HiBob API connectors, file imports for other systems and exit forms, and a defined field allow-list."
    },
    {
      num: 3,
      name: "Tokenisation and key store",
      desc: "Identifier tokens, separately held identity mapping and a controlled identity-resolution gate."
    },
    {
      num: 4,
      name: "Baseline engine",
      desc: "Peer-group definition, baseline statistics and data-sufficiency checks."
    },
    {
      num: 5,
      name: "Scoring v1",
      desc: "Standardised measures, composite scoring, persistence tests, risk bands and confidence ratings."
    },
    {
      num: 6,
      name: "Exit-theme classifier v1",
      desc: "Classification of recurring management-conduct themes, measured against labelled samples. No emotion or personality inference."
    },
    {
      num: 7,
      name: "HR dashboard and alerts",
      desc: "Indicators, evidence pages, trend information and HR decisions with recorded reasons."
    },
    {
      num: 8,
      name: "Inquiry workflow v1 and case ledger",
      badge: "Optional paid add-on",
      desc: "Optional paid add-on with Acas-aligned steps, task assignment, append-only records and case exports."
    }
  ];

  return (
    <section id="platform" className="py-12 lg:py-16 bg-surface-warm">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center space-x-2 text-teal-700 text-xs font-bold tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span>Planned Architecture & Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            An explainable, privacy-preserving early-warning architecture.
          </h2>
          <p className="mt-3 text-base text-navy-600 leading-relaxed">
            ConductLens is designed to identify sustained divergence across operational HR records without intrusive employee surveillance or automated disciplinary actions.
          </p>
        </div>

        {/* Three Core Components */}
        <div className="mb-12">
          <h3 className="text-xs uppercase tracking-wider font-bold text-navy-500 mb-4">
            Three Core Platform Components
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Component A */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-navy-200/80 shadow-card flex flex-col justify-between hover:border-teal-500/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-4 font-bold text-sm">
                  A
                </div>
                <h4 className="text-lg font-bold text-navy-950 mb-2">
                  Signal Ingestion Layer
                </h4>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Collects a defined allow-list of existing operational HR signals through planned connections and file imports, without requiring employees to make new reports.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-navy-100 flex items-center text-xs text-navy-500 font-medium">
                <Database className="w-3.5 h-3.5 mr-1.5 text-teal-600" />
                <span>Zero employee polling required</span>
              </div>
            </div>

            {/* Component B */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-navy-200/80 shadow-card flex flex-col justify-between hover:border-teal-500/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-4 font-bold text-sm">
                  B
                </div>
                <h4 className="text-lg font-bold text-navy-950 mb-2">
                  Supervisory-Risk Scoring Engine
                </h4>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Compares structurally similar teams, combines multiple signals, checks persistence and provides explainable indicators with confidence and data-quality information.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-navy-100 flex items-center text-xs text-navy-500 font-medium">
                <Cpu className="w-3.5 h-3.5 mr-1.5 text-teal-600" />
                <span>Persistent peer-relative analysis</span>
              </div>
            </div>

            {/* Component C */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border-2 border-teal-500/60 shadow-card flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-teal-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                Optional add-on · +25% of base subscription
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-100 border border-teal-300 flex items-center justify-center text-teal-800 mb-4 font-bold text-sm mt-1">
                  C
                </div>
                <h4 className="text-lg font-bold text-navy-950 mb-2">
                  Structured HR Inquiry Workflow
                </h4>
                <p className="text-sm text-navy-600 leading-relaxed">
                  An optional paid add-on supporting authorised, proportionate human review, assigned tasks, recorded decisions and exportable case files.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-navy-100 flex items-center justify-between text-xs text-teal-800 font-semibold">
                <span className="flex items-center">
                  <FileText className="w-3.5 h-3.5 mr-1.5 text-teal-600" />
                  <span>Acas-aligned documentation</span>
                </span>
                <span>+25% fee</span>
              </div>
            </div>

          </div>
        </div>

        {/* SVG Diagram: Controlled Identity Gate & Tokenisation Architecture */}
        <div className="mb-12 bg-white rounded-2xl p-6 sm:p-7 border border-navy-200/90 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-navy-100 gap-2 mb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Controlled Identity Gate Architecture
              </span>
              <h3 className="text-base sm:text-lg font-bold text-navy-950">
                How ConductLens Protects Individual Identities During Signal Processing
              </h3>
            </div>
            <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-navy-50 text-[11px] text-navy-600 border border-navy-200 font-medium">
              Illustrative preview — synthetic data
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-2">
            <div className="min-w-[680px] p-4 bg-surface-warm rounded-xl border border-navy-100">
              <svg className="w-full h-48" viewBox="0 0 760 190" fill="none">
                {/* Stage 1: Ingestion */}
                <rect x="10" y="25" width="160" height="140" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                <text x="90" y="50" textAnchor="middle" fill="#0B1524" fontWeight="bold" fontSize="12">1. HRIS Connection</text>
                <text x="90" y="70" textAnchor="middle" fill="#64748B" fontSize="10">Operational records</text>
                <rect x="25" y="85" width="130" height="24" rx="4" fill="#F1F5F9" />
                <text x="90" y="101" textAnchor="middle" fill="#334E68" fontSize="10">Staff IDs & Teams</text>
                <rect x="25" y="115" width="130" height="24" rx="4" fill="#F1F5F9" />
                <text x="90" y="131" textAnchor="middle" fill="#334E68" fontSize="10">Turnover & Absences</text>

                {/* Arrow 1 */}
                <path d="M 175 95 L 205 95" stroke="#0D9488" strokeWidth="2" strokeDasharray="3 3" />
                <polygon points="205,95 197,91 197,99" fill="#0D9488" />

                {/* Stage 2: Tokenisation Engine & Separate Store */}
                <rect x="210" y="25" width="160" height="140" rx="12" fill="#FFFFFF" stroke="#0D9488" strokeWidth="1.5" />
                <text x="290" y="50" textAnchor="middle" fill="#0B1524" fontWeight="bold" fontSize="12">2. Tokenisation Store</text>
                <text x="290" y="70" textAnchor="middle" fill="#0F766E" fontSize="10">Separately Held Key Store</text>
                <rect x="225" y="85" width="130" height="24" rx="4" fill="#CCFBF1" />
                <text x="290" y="101" textAnchor="middle" fill="#042F2E" fontSize="10" fontWeight="600">ID → TOKEN-TK-842</text>
                <rect x="225" y="115" width="130" height="24" rx="4" fill="#F0FDFA" />
                <text x="290" y="131" textAnchor="middle" fill="#115E59" fontSize="10">Cryptographic Isolation</text>

                {/* Arrow 2 */}
                <path d="M 375 95 L 405 95" stroke="#0D9488" strokeWidth="2" strokeDasharray="3 3" />
                <polygon points="405,95 397,91 397,99" fill="#0D9488" />

                {/* Stage 3: Scoring Engine */}
                <rect x="410" y="25" width="160" height="140" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                <text x="490" y="50" textAnchor="middle" fill="#0B1524" fontWeight="bold" fontSize="12">3. Peer Scoring Engine</text>
                <text x="490" y="70" textAnchor="middle" fill="#64748B" fontSize="10">Blind Analysis on Tokens</text>
                <rect x="425" y="85" width="130" height="24" rx="4" fill="#F1F5F9" />
                <text x="490" y="101" textAnchor="middle" fill="#334E68" fontSize="10">Structural Peer Groups</text>
                <rect x="425" y="115" width="130" height="24" rx="4" fill="#FEF3C7" />
                <text x="490" y="131" textAnchor="middle" fill="#92400E" fontSize="10" fontWeight="600">Review Suggested</text>

                {/* Arrow 3 to Controlled Gate */}
                <path d="M 575 95 L 605 95" stroke="#D97706" strokeWidth="2" />
                <polygon points="605,95 597,91 597,99" fill="#D97706" />

                {/* Stage 4: Controlled Identity Gate */}
                <rect x="610" y="25" width="140" height="140" rx="12" fill="#0B1524" stroke="#D97706" strokeWidth="1.5" />
                <text x="680" y="50" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="12">4. Identity Gate</text>
                <text x="680" y="70" textAnchor="middle" fill="#FDE68A" fontSize="10">Explicit HR Auth</text>
                <rect x="620" y="85" width="120" height="26" rx="4" fill="#1E293B" stroke="#D97706" />
                <text x="680" y="101" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="600">Locked by Default</text>
                <text x="680" y="128" textAnchor="middle" fill="#94A3B8" fontSize="9">HR Director Unlock Only</text>
                <text x="680" y="145" textAnchor="middle" fill="#94A3B8" fontSize="8">(Fully Audit-Logged)</text>
              </svg>
            </div>
          </div>
          
          <p className="mt-3 text-xs text-navy-500 italic text-center">
            Note: Records are pseudonymised with token keys held separately. Pseudonymisation is not described as complete anonymisation.
          </p>
        </div>

        {/* Eight Planned MVP Modules */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <h3 className="text-xs uppercase tracking-wider font-bold text-navy-500">
                MVP Specifications
              </h3>
              <h4 className="text-xl sm:text-2xl font-bold text-navy-950 mt-0.5">
                Eight Planned MVP Modules
              </h4>
            </div>
            <span className="text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-md self-start sm:self-auto">
              Planned 24-Week Build
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {mvpModules.map((mod) => (
              <div 
                key={mod.num} 
                className="bg-white rounded-xl p-5 border border-navy-200 shadow-2xs hover:shadow-card transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-navy-100 text-navy-800 font-bold text-xs flex items-center justify-center">
                      0{mod.num}
                    </span>
                    {mod.badge && (
                      <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        {mod.badge}
                      </span>
                    )}
                  </div>
                  <h5 className="font-bold text-navy-900 text-sm mb-1.5">
                    {mod.name}
                  </h5>
                  <p className="text-xs text-navy-600 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Inputs Allow-list vs Excluded Data Matrix */}
        <div className="mb-12 bg-white rounded-2xl p-6 sm:p-8 border border-navy-200 shadow-card">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Data Governance & Field Boundary
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-navy-950 mt-1">
              Strict Field Allow-List vs Excluded Data
            </h3>
            <p className="mt-2 text-sm text-navy-600">
              ConductLens operates on structural metadata and operational timelines only. Intrusive employee monitoring and individual health details are explicitly excluded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Planned Data Inputs */}
            <div className="bg-emerald-50/50 rounded-xl p-5 sm:p-6 border border-emerald-200/80">
              <div className="flex items-center space-x-2 text-emerald-900 font-bold text-base mb-3.5">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Planned Data Inputs (Allow-List Only)</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-navy-800">
                <li className="flex items-start space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span><strong>Team structure and reporting lines</strong> — Organisational mapping and cluster hierarchy.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span><strong>Starters and leavers</strong> — Headcount movements, leaver rates, and tenure metrics.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span><strong>Absence start and end dates and duration</strong> — Unscheduled absences over time.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span><strong>Grievance dates and escalation or withdrawal timing</strong> — Timelines and formal dispute velocities.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span><strong>Tokenised exit-interview responses</strong> — Management theme classification against standard rubrics.</span>
                </li>
              </ul>
            </div>

            {/* Excluded Data */}
            <div className="bg-rose-50/40 rounded-xl p-5 sm:p-6 border border-rose-200/80">
              <div className="flex items-center space-x-2 text-rose-950 font-bold text-base mb-3.5">
                <X className="w-5 h-5 text-rose-600" />
                <span>Excluded Data (Strict Boundary)</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-navy-800">
                <li className="flex items-start space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                  <span><strong>Emails and messages</strong> — No communication surveillance, Slack/Teams logging, or keystroke tracking.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                  <span><strong>Device activity</strong> — No monitoring of employee screens, web browsing, or physical devices.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                  <span><strong>Salary</strong> — Remuneration, compensation bands, and financial personal records are not ingested.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                  <span><strong>Absence reasons and health-related absence notes</strong> — Medical certificates and clinical notes are never stored or processed.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                  <span><strong>Grievance content</strong> — Freeform allegations and case evidence notes remain outside the ingestion pipeline.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                  <span><strong>Personal contact details</strong> — Home addresses, private phone numbers, and emergency contacts are excluded.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* User Roles & Human Governance */}
        <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-card">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Role-Based Governance
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Defined User Roles & Authority Controls
            </h3>
            <p className="mt-2 text-sm text-navy-200">
              ConductLens ensures that technology only assists triage. All decisions, identity resolutions, and next steps remain strictly in human hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-sm">
            
            <div className="bg-navy-800/80 p-5 rounded-xl border border-navy-700">
              <div className="flex items-center space-x-2 text-teal-400 font-bold mb-2">
                <UserCheck2 className="w-4 h-4" />
                <span>HR Directors & People Leads</span>
              </div>
              <p className="text-navy-300 text-xs leading-relaxed">
                Control system configuration, establish sensitivity thresholds, review blind alerts, and authorise identity resolution for formal inquiries.
              </p>
            </div>

            <div className="bg-navy-800/80 p-5 rounded-xl border border-navy-700">
              <div className="flex items-center space-x-2 text-teal-400 font-bold mb-2">
                <FileCheck className="w-4 h-4" />
                <span>HR Business Partners</span>
              </div>
              <p className="text-navy-300 text-xs leading-relaxed">
                Conduct assigned inquiries, review contextual workplace factors, log evidence steps, and document Acas-aligned outcomes in the case ledger.
              </p>
            </div>

            <div className="bg-navy-800/80 p-5 rounded-xl border border-navy-700">
              <div className="flex items-center space-x-2 text-teal-400 font-bold mb-2">
                <EyeOff className="w-4 h-4" />
                <span>Employees</span>
              </div>
              <p className="text-navy-300 text-xs leading-relaxed">
                Do not use the core platform directly. Employees are never contacted because of a score alone, protecting staff from arbitrary algorithmic interventions.
              </p>
            </div>

          </div>

          <div className="mt-5 pt-4 border-t border-navy-800 flex items-center space-x-3 text-xs text-navy-300">
            <Scale className="w-4 h-4 text-teal-400 flex-shrink-0" />
            <span>
              <strong>Core Guarantee:</strong> Findings and actions remain human decisions. No automated disciplinary sanctions are ever executed.
            </span>
          </div>
        </div>

        {/* Planned Design Commitments Note */}
        <div className="mt-6 p-4 rounded-xl bg-teal-50/70 border border-teal-200 text-xs text-teal-950 leading-relaxed">
          <span className="font-bold">Planned Design Commitments:</span> UK hosting, encryption, role-based access controls, and logged identity access are core planned design commitments. ConductLens does not claim achieved certification, regulator approval, Acas endorsement, or a granted patent.
        </div>

      </div>
    </section>
  );
};
