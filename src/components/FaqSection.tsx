import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      q: "What is ConductLens?",
      a: "An in-development early-warning HR platform using existing operational signals to identify sustained team-level patterns for human review."
    },
    {
      q: "Who is it for?",
      a: "UK organisations with 100–2,000 employees, particularly HR Directors, People Leads and HR teams."
    },
    {
      q: "Does an indicator prove misconduct?",
      a: "No. It highlights a pattern for proportionate review. Findings and actions remain with authorised HR professionals."
    },
    {
      q: "What data does the proposed platform use?",
      a: "Allow-listed team structure, starters and leavers, absence dates and durations, grievance timing and tokenised exit-interview responses."
    },
    {
      q: "Does it monitor emails or employee devices?",
      a: "No. The proposed core product does not ingest emails, messages or device activity. Absence reasons and health-related notes are excluded."
    },
    {
      q: "When are identities revealed?",
      a: "Only after explicit, logged authorisation by the HR Director or People Lead for a relevant inquiry."
    },
    {
      q: "What happens during the 90-day baseline?",
      a: "The platform learns normal patterns without raising indicators. Sensitivity thresholds are agreed before activation."
    },
    {
      q: "Which integrations are planned?",
      a: "BambooHR and HiBob in the MVP, alongside file imports. Sage HR, Personio and Breathe HR are planned for Release 2."
    },
    {
      q: "Is the inquiry workflow included in the base subscription?",
      a: "No. Guided inquiry and case-file functionality is an optional add-on at 25% of the base subscription."
    },
    {
      q: "How does the paid pilot work?",
      a: "£1,500 one-off excluding VAT for connection, baseline and calibration. It converts to a paid subscription at activation, with the implementation fee waived on conversion."
    },
    {
      q: "Is ConductLens available today?",
      a: "It is in development. MVP specification is complete, with a 24-week build planned from January 2027. Pilot enquiries do not guarantee an onboarding date."
    },
    {
      q: "What happens when I submit the form?",
      a: "The request is saved only in this browser on this device. It is not sent to ConductLens or a remote server."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-t border-navy-100">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-teal-700 text-xs font-bold tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Clear answers to common questions about ConductLens.
          </h2>
          <p className="mt-3 text-base text-navy-600">
            Learn more about the planned architecture, privacy protections, pilot programme, and commercial terms.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto divide-y divide-navy-100 border-y border-navy-100">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div key={idx} className="py-4.5 sm:py-5">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg py-1 transition-colors group"
                >
                  <span className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-teal-700 pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-teal-50 text-teal-700' : 'bg-surface-warm text-navy-400 group-hover:text-navy-700'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pt-3 pb-2 pr-6 text-sm sm:text-base text-navy-600 leading-relaxed animate-fadeIn"
                  >
                    {faq.a}
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
