import React from 'react';
import { 
  ArrowRight, 
  Layers, 
  Lock, 
  UserCheck, 
  TrendingUp, 
  AlertTriangle 
} from 'lucide-react';

interface HomeSectionProps {
  onOpenPilotModal: (triggerEl: HTMLElement) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onOpenPilotModal }) => {
  const handleScrollToPlatform = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#platform');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 overflow-hidden">
      {/* Subtle background decorative shapes and ambient glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-teal-50/70 via-mint-50/40 to-transparent opacity-90" />
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-teal-100/30 blur-3xl animate-pulse-glow" />
        <div className="absolute top-36 left-10 w-96 h-96 rounded-full bg-navy-100/40 blur-3xl" />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-50/90 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold shadow-2xs mb-4 transition-all hover:bg-teal-100/80">
            <span className="w-2 rounded-full h-2 bg-teal-500 animate-pulse" />
            <span className="tracking-wide">In development · Pilot enquiries</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-navy-950 tracking-tight max-w-4xl leading-[1.12]">
            See emerging workplace conduct risk earlier.
          </h1>

          {/* Supporting Paragraph */}
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-navy-600 max-w-3xl leading-relaxed font-normal">
            ConductLens is being developed to help HR teams connect existing HR signals, identify sustained team-level patterns and decide when a proportionate, documented review is needed.
          </p>

          {/* Target Audience Line */}
          <div className="mt-4">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-lg border border-teal-200/80 inline-block shadow-2xs">
              Designed for UK organisations with 100–2,000 employees.
            </span>
          </div>

          {/* CTAs with generous padding and clear hierarchy */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-lg">
            <button
              onClick={(e) => onOpenPilotModal(e.currentTarget)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-base shadow-md hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 flex items-center justify-center space-x-2.5 group whitespace-nowrap"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#platform"
              onClick={handleScrollToPlatform}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-navy-50 text-navy-900 font-bold text-base border border-navy-200 shadow-2xs hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 flex items-center justify-center whitespace-nowrap"
            >
              Explore the Platform
            </a>
          </div>

          {/* Three Supporting Labels */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-3xl pt-5 border-t border-navy-100">
            <div className="flex items-center justify-center sm:justify-start space-x-3 text-navy-800 text-sm font-semibold">
              <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 flex-shrink-0 shadow-2xs">
                <Layers className="w-4 h-4" />
              </div>
              <span>Team-level signals</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start space-x-3 text-navy-800 text-sm font-semibold">
              <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 flex-shrink-0 shadow-2xs">
                <Lock className="w-4 h-4" />
              </div>
              <span>Identities protected until authorisation</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start space-x-3 text-navy-800 text-sm font-semibold">
              <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 flex-shrink-0 shadow-2xs">
                <UserCheck className="w-4 h-4" />
              </div>
              <span>Human-led decisions</span>
            </div>
          </div>
        </div>

        {/* Illustrative Dashboard Graphic */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white border border-navy-200/90 shadow-subtle p-6 sm:p-8 overflow-hidden">
            
            {/* Top mandatory synthetic preview watermark / badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-navy-100 gap-3">
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-navy-100 font-mono text-xs font-extrabold text-navy-900 border border-navy-200">
                  TOKEN: TEAM-TK-842
                </span>
                <span className="text-xs text-navy-500 font-medium">
                  Peer Cluster: Operations / Regional Distribution (14 peers)
                </span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold self-start sm:self-auto shadow-2xs">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Review suggested</span>
              </div>
            </div>

            {/* Dashboard grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left: Trend line vs peer range SVG chart */}
              <div className="lg:col-span-7 bg-surface-warm rounded-2xl p-5 border border-navy-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-navy-800">
                      Team Trend vs Structural Peer Range
                    </h3>
                    <p className="text-[11px] text-navy-500 mt-0.5">
                      Standardised divergence across 6 consecutive scoring cycles
                    </p>
                  </div>
                  <div className="flex items-center space-x-3 text-[10px] text-navy-600 font-semibold">
                    <span className="flex items-center">
                      <span className="w-3 h-2 bg-teal-100 border border-teal-300 rounded-2xs inline-block mr-1"></span>
                      Peer Band (±1σ)
                    </span>
                    <span className="flex items-center">
                      <span className="w-3 h-0.5 bg-amber-600 inline-block mr-1"></span>
                      Team TK-842
                    </span>
                  </div>
                </div>

                {/* SVG Line Chart */}
                <div className="relative h-48 w-full">
                  <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="peerRangeGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.05" />
                      </linearGradient>
                      <linearGradient id="teamLineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#0D9488" />
                        <stop offset="60%" stopColor="#D97706" />
                        <stop offset="100%" stopColor="#DC2626" />
                      </linearGradient>
                    </defs>

                    {/* Grid lines */}
                    <line x1="30" y1="20" x2="390" y2="20" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <line x1="30" y1="60" x2="390" y2="60" stroke="#CBD5E1" />
                    <line x1="30" y1="100" x2="390" y2="100" stroke="#CBD5E1" />
                    <line x1="30" y1="140" x2="390" y2="140" stroke="#E2E8F0" strokeDasharray="3 3" />

                    {/* Peer range shaded area */}
                    <polygon 
                      points="40,85 100,82 160,80 220,78 280,82 340,80 380,83 380,118 340,115 280,118 220,116 160,114 100,116 40,118" 
                      fill="url(#peerRangeGrad)" 
                    />

                    {/* Baseline median dotted line */}
                    <path 
                      d="M 40,100 L 100,98 L 160,97 L 220,96 L 280,98 L 340,97 L 380,98" 
                      fill="none" 
                      stroke="#94A3B8" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4" 
                    />

                    {/* Subject team path with upward divergence in cycles 4, 5, 6 */}
                    <path 
                      d="M 40,102 L 100,99 L 160,94 L 220,68 L 280,48 L 340,34 L 380,28" 
                      fill="none" 
                      stroke="url(#teamLineGrad)" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                    />

                    {/* Markers for Cycle 4, 5, 6 */}
                    <circle cx="220" cy="68" r="3.5" fill="#D97706" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle cx="280" cy="48" r="3.5" fill="#D97706" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle cx="340" cy="34" r="4" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle cx="380" cy="28" r="4.5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />

                    {/* Y-axis labels */}
                    <text x="5" y="24" fontSize="9" fill="#64748B" fontFamily="sans-serif">+3σ</text>
                    <text x="5" y="64" fontSize="9" fill="#64748B" fontFamily="sans-serif">+1.5σ</text>
                    <text x="5" y="104" fontSize="9" fill="#64748B" fontFamily="sans-serif">Peer avg</text>
                    <text x="5" y="144" fontSize="9" fill="#64748B" fontFamily="sans-serif">-1.5σ</text>

                    {/* X-axis cycles */}
                    <text x="40" y="155" fontSize="9" fill="#64748B" textAnchor="middle">Cycle 1</text>
                    <text x="100" y="155" fontSize="9" fill="#64748B" textAnchor="middle">Cycle 2</text>
                    <text x="160" y="155" fontSize="9" fill="#64748B" textAnchor="middle">Cycle 3</text>
                    <text x="220" y="155" fontSize="9" fill="#64748B" textAnchor="middle">Cycle 4</text>
                    <text x="280" y="155" fontSize="9" fill="#64748B" textAnchor="middle">Cycle 5</text>
                    <text x="340" y="155" fontSize="9" fill="#64748B" textAnchor="middle">Cycle 6</text>
                  </svg>
                </div>

                <div className="mt-3 pt-3 border-t border-navy-100 flex items-center justify-between text-[11px] text-navy-600">
                  <div className="flex items-center space-x-1.5 font-medium">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
                    <span>Trend Direction: <strong>Sustained upward divergence across 3 cycles</strong></span>
                  </div>
                  <span className="font-bold text-teal-800">Persistence criteria met</span>
                </div>
              </div>

              {/* Right: Contributing signals & confidence */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
                
                {/* Contributing HR Signals */}
                <div className="bg-surface-warm rounded-2xl p-5 border border-navy-100">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-navy-800 mb-3">
                    Contributing HR Signals
                  </h3>
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-navy-700 font-medium">Unscheduled absence drift</span>
                        <span className="font-mono font-bold text-amber-700">+2.4σ vs peers</span>
                      </div>
                      <div className="w-full bg-navy-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full rounded-full" style={{ width: '78%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-navy-700 font-medium">Grievance escalation velocity</span>
                        <span className="font-mono font-bold text-amber-700">+1.9σ vs peers</span>
                      </div>
                      <div className="w-full bg-navy-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full rounded-full" style={{ width: '65%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-navy-700 font-medium">Exit management theme recurrence</span>
                        <span className="font-mono font-bold text-rose-700">+2.2σ vs peers</span>
                      </div>
                      <div className="w-full bg-navy-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-full rounded-full" style={{ width: '72%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-navy-700 font-medium">Team leaver rate deviation</span>
                        <span className="font-mono font-bold text-teal-700">+1.1σ vs peers</span>
                      </div>
                      <div className="w-full bg-navy-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-teal-500 h-full rounded-full" style={{ width: '42%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Confidence & Data Quality */}
                <div className="bg-white rounded-2xl p-4 border border-navy-100 shadow-2xs space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-navy-500 font-medium">Confidence information:</span>
                    <span className="font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200">
                      High Confidence (98% data completeness)
                    </span>
                  </div>
                  <div className="text-[11px] text-navy-600 bg-navy-50/80 p-2.5 rounded-xl border border-navy-100 leading-relaxed">
                    <span className="font-bold text-navy-800">Data-quality note:</span> Sufficiency check passed · 14 of 14 member records active across full 90-day baseline window.
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Mandatory Preview Label */}
            <div className="mt-6 pt-4 border-t border-navy-100 flex items-center justify-center">
              <span className="text-xs font-bold tracking-wider uppercase text-navy-600 bg-navy-50 px-4 py-1 rounded-full border border-navy-200">
                Illustrative preview — synthetic data
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
