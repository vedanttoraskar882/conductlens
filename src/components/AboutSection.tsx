import React from 'react';
import { 
  MapPin, 
  Calendar, 
  BookOpen, 
  Award, 
  Compass, 
  ShieldAlert, 
  Briefcase,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-y border-navy-100 relative overflow-hidden">
      {/* Background subtle mesh decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-teal-50/40 to-transparent pointer-events-none -z-10" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-teal-700 text-xs font-bold tracking-wider uppercase mb-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span>About ConductLens</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight leading-[1.15]">
            Connecting quiet operational HR signals before conduct risk compounds.
          </h2>
        </div>

        {/* The Problem & Proposed Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          
          {/* The Problem */}
          <div className="bg-surface-warm rounded-3xl p-8 lg:p-10 border border-navy-200/80 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-6 shadow-2xs">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-navy-950 tracking-tight mb-4">
                The Problem
              </h3>
              <div className="space-y-4 text-base text-navy-700 leading-relaxed font-normal">
                <p>
                  Harmful supervisory behaviour can remain hidden because employees may be reluctant to report it. Warning signs may already exist in separate HR records, including rising turnover, absence patterns, grievances escalated or withdrawn, and recurring management-related exit comments.
                </p>
                <p>
                  A single record may not reveal the issue. A sustained combination of signals, compared with similar teams, may provide a reason for HR to look more closely.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-5 border-t border-navy-100 text-xs font-medium text-navy-500">
              Siloed operational data often conceals team-level divergence until formal formal disputes arise.
            </div>
          </div>

          {/* The Proposed Solution */}
          <div className="bg-gradient-to-br from-surface-warm to-teal-50/50 rounded-3xl p-8 lg:p-10 border-2 border-teal-200/70 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center mb-6 shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-navy-950 tracking-tight mb-4">
                The Proposed Solution
              </h3>
              <div className="space-y-4 text-base text-navy-700 leading-relaxed font-normal">
                <p>
                  ConductLens is designed to bring these signals together, explain the evidence and support a fair, proportionate, human-led response.
                </p>
                <p>
                  By evaluating structural peer baselines within the same organisation, the platform detects persistent divergence across multiple data streams without diagnosing individuals or making automated decisions.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-teal-200/60 text-xs text-teal-900 font-semibold flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>Complementary early-warning layer working alongside existing HRIS and advisory frameworks.</span>
            </div>
          </div>

        </div>

        {/* Founder Card — Refined Executive Design without photo/initials avatar box */}
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-modal border border-navy-800 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            {/* Top Founder Identity Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-navy-800 gap-4">
              <div>
                <div className="inline-flex items-center space-x-2 text-teal-400 text-xs font-bold tracking-wider uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Founder Profile</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Tahira Rasheed
                </h3>
                <p className="text-teal-400 font-bold text-lg mt-0.5">
                  Founder & CEO
                </p>
              </div>

              <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-navy-800/90 border border-navy-700 text-navy-200 text-xs sm:text-sm font-medium self-start sm:self-auto">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Crawley, West Sussex, United Kingdom</span>
              </div>
            </div>

            {/* Research Methodology Highlight */}
            <div className="p-5 rounded-2xl bg-navy-900/90 border border-teal-500/30 text-sm leading-relaxed text-navy-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BookOpen className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="font-bold text-teal-300 block text-xs uppercase tracking-wider mb-0.5">
                    Methodology Foundation
                  </span>
                  <p className="text-sm text-navy-200">
                    The methodology draws on her published research examining abusive supervision, ostracism and interpersonal conflict.
                  </p>
                </div>
              </div>
            </div>

            {/* Credentials & Leadership Scope in Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Credentials & Background */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs uppercase tracking-wider font-bold text-teal-400 flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Education, Qualifications & Professional Background</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-navy-100">
                  <div className="bg-navy-900/70 p-3.5 rounded-xl border border-navy-800 flex items-start space-x-2.5">
                    <BookOpen className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">MS in Human Resource Management</span>
                  </div>
                  <div className="bg-navy-900/70 p-3.5 rounded-xl border border-navy-800 flex items-start space-x-2.5">
                    <BookOpen className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">MBA in Finance</span>
                  </div>
                  <div className="bg-navy-900/70 p-3.5 rounded-xl border border-navy-800 flex items-start space-x-2.5 sm:col-span-2">
                    <BookOpen className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">MSc in International Business from Ulster University</span>
                  </div>
                  <div className="bg-navy-900/70 p-3.5 rounded-xl border border-navy-800 flex items-start space-x-2.5 sm:col-span-2">
                    <BookOpen className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">QTS with PGCE</span>
                  </div>
                </div>

                <div className="p-4 bg-navy-900/70 rounded-xl border border-navy-800 text-xs text-navy-200 leading-relaxed">
                  <strong className="text-white">Industry Experience:</strong> Approximately eleven years of banking operations and compliance experience at Habib Bank Limited, followed by subsequent education roles in Pakistan and the UK.
                </div>
              </div>

              {/* Leadership Scope */}
              <div className="lg:col-span-5 space-y-4">
                <h4 className="text-xs uppercase tracking-wider font-bold text-teal-400 flex items-center space-x-2">
                  <Briefcase className="w-4 h-4" />
                  <span>She will lead</span>
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-navy-900/70 border border-navy-800 text-navy-200 font-semibold flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Business development</span>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-900/70 border border-navy-800 text-navy-200 font-semibold flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Product methodology</span>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-900/70 border border-navy-800 text-navy-200 font-semibold flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Ethical review</span>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-900/70 border border-navy-800 text-navy-200 font-semibold flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Pilot recruitment</span>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-900/70 border border-navy-800 text-navy-200 font-semibold flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Early commercial relationships</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Development Note */}
            <div className="pt-6 border-t border-navy-800 flex items-center space-x-3 text-xs sm:text-sm text-teal-300 font-semibold">
              <Calendar className="w-5 h-5 text-teal-400 flex-shrink-0" />
              <span>
                MVP specification complete. A 24-week development programme is planned from January 2027.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
