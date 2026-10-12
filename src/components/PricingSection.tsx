import React, { useState } from 'react';
import { 
  Check, 
  Calculator, 
  ArrowRight, 
  Zap, 
  AlertCircle
} from 'lucide-react';

interface PricingSectionProps {
  onOpenPilotModal: (triggerEl: HTMLElement) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenPilotModal }) => {
  // Calculator state
  const [headcountInput, setHeadcountInput] = useState<string>('360');
  const [includeAddon, setIncludeAddon] = useState<boolean>(true);

  // Parse headcount
  const parsedHeadcount = parseInt(headcountInput, 10);
  const isInteger = /^\d+$/.test(headcountInput.trim());
  const isValidRange = isInteger && parsedHeadcount >= 100 && parsedHeadcount <= 2000;

  // Calculation parameters
  let ratePerEmployee = 0;
  let implementationFee = 0;
  let bandTitle = '';

  if (isValidRange) {
    if (parsedHeadcount <= 249) {
      ratePerEmployee = 8;
      implementationFee = 2000;
      bandTitle = '100–249 employees';
    } else if (parsedHeadcount <= 499) {
      ratePerEmployee = 7;
      implementationFee = 3000;
      bandTitle = '250–499 employees';
    } else if (parsedHeadcount <= 999) {
      ratePerEmployee = 6;
      implementationFee = 4500;
      bandTitle = '500–999 employees';
    } else {
      ratePerEmployee = 5;
      implementationFee = 6000;
      bandTitle = '1,000–2,000 employees';
    }
  }

  const baseAnnual = isValidRange ? parsedHeadcount * ratePerEmployee : 0;
  const addonAmount = isValidRange && includeAddon ? baseAnnual * 0.25 : 0;
  const totalAnnual = baseAnnual + addonAmount;

  const formatCurrency = (val: number) => {
    return '£' + val.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const formatIntCurrency = (val: number) => {
    return '£' + val.toLocaleString('en-GB');
  };

  const prioritySectors = [
    "Logistics and distribution",
    "Manufacturing",
    "Retail and hospitality head offices",
    "Professional and business services",
    "Care providers"
  ];

  return (
    <section id="market-pricing" className="py-12 lg:py-16 bg-surface-warm">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center space-x-2 text-teal-700 text-xs font-bold tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span>Market & Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Transparent, headcount-based annual pricing.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-navy-600 leading-relaxed">
            All rates exclude VAT. Annual subscriptions are calculated per covered employee per year, applied across the entire covered headcount.
          </p>
        </div>

        {/* Target Audience & Priority Sectors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 border border-navy-200/80 shadow-card">
            <h3 className="text-sm font-bold uppercase tracking-wider text-teal-700 mb-2">
              Target Audience & Principal Buyers
            </h3>
            <p className="text-base text-navy-900 font-semibold mb-3">
              UK organisations with 100–2,000 employees, particularly those without a dedicated employee-relations function.
            </p>
            <p className="text-sm text-navy-600 leading-relaxed mb-5">
              Principal buyers include <strong>HR Directors, Heads of HR, and People Leads</strong> who need an objective, early-stage view of team-level conduct divergence before disputes escalate.
            </p>

            <div className="p-3.5 rounded-xl bg-navy-50 border border-navy-100 text-xs text-navy-700">
              <span className="font-semibold text-navy-900">Secondary Segment:</span> HR and employee-relations consultancies are a secondary customer and partner segment planned from Year 2.
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl p-7 border border-navy-200/80 shadow-card flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-teal-700 mb-3">
                Priority Industry Sectors
              </h3>
              <ul className="space-y-2.5">
                {prioritySectors.map((sec, i) => (
                  <li key={i} className="flex items-center space-x-2.5 text-sm font-medium text-navy-800">
                    <span className="w-5 h-5 rounded-md bg-teal-50 text-teal-700 text-xs font-bold flex items-center justify-center border border-teal-200">
                      ✓
                    </span>
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 pt-4 border-t border-navy-100 text-[11px] text-navy-500 italic">
              Focused on mid-market operations where supervisory friction directly impacts retention and operational continuity.
            </div>
          </div>

        </div>

        {/* Pricing Cards by Organisation Size Bands */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy-500">
                Annual Subscription Rates
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950 mt-0.5">
                Organisation Size Bands
              </h3>
            </div>
            <span className="text-xs font-semibold text-navy-700 bg-white border border-navy-200 px-3 py-1 rounded-md self-start sm:self-auto">
              Per covered employee per year · Excl. VAT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: 100–249 */}
            <div className="bg-white rounded-2xl p-6 border border-navy-200 shadow-card flex flex-col justify-between hover:border-teal-500/50 transition-all">
              <div>
                <h4 className="text-lg font-bold text-navy-950 tracking-tight">
                  100–249 employees
                </h4>
                <div className="mt-4 pb-4 border-b border-navy-100">
                  <div className="text-3xl font-extrabold text-navy-950">
                    £8
                  </div>
                  <div className="text-xs text-navy-500 font-medium mt-1">
                    per covered employee per year
                  </div>
                </div>

                <div className="mt-4 space-y-2.5 text-xs text-navy-700">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>£2,000</strong> one-off implementation and calibration</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Full core signal ingestion and supervisory scoring</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>90-day baseline learning phase</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-100">
                <button
                  onClick={(e) => onOpenPilotModal(e.currentTarget)}
                  className="w-full py-3 px-5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-sm font-bold shadow-2xs hover:shadow transition-all flex items-center justify-center space-x-2"
                >
                  <span>Request a Pilot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: 250–499 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-teal-500/50 shadow-card flex flex-col justify-between relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-2xs">
                Popular Mid-Market
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy-950 tracking-tight">
                  250–499 employees
                </h4>
                <div className="mt-4 pb-4 border-b border-navy-100">
                  <div className="text-3xl font-extrabold text-navy-950">
                    £7
                  </div>
                  <div className="text-xs text-navy-500 font-medium mt-1">
                    per covered employee per year
                  </div>
                </div>

                <div className="mt-4 space-y-2.5 text-xs text-navy-700">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>£3,000</strong> one-off implementation and calibration</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Full core signal ingestion and supervisory scoring</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>90-day baseline learning phase</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-100">
                <button
                  onClick={(e) => onOpenPilotModal(e.currentTarget)}
                  className="w-full py-3 px-5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold shadow-2xs hover:shadow transition-all flex items-center justify-center space-x-2"
                >
                  <span>Request a Pilot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: 500–999 */}
            <div className="bg-white rounded-2xl p-6 border border-navy-200 shadow-card flex flex-col justify-between hover:border-teal-500/50 transition-all">
              <div>
                <h4 className="text-lg font-bold text-navy-950 tracking-tight">
                  500–999 employees
                </h4>
                <div className="mt-4 pb-4 border-b border-navy-100">
                  <div className="text-3xl font-extrabold text-navy-950">
                    £6
                  </div>
                  <div className="text-xs text-navy-500 font-medium mt-1">
                    per covered employee per year
                  </div>
                </div>

                <div className="mt-4 space-y-2.5 text-xs text-navy-700">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>£4,500</strong> one-off implementation and calibration</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Full core signal ingestion and supervisory scoring</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>90-day baseline learning phase</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-100">
                <button
                  onClick={(e) => onOpenPilotModal(e.currentTarget)}
                  className="w-full py-3 px-5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-sm font-bold shadow-2xs hover:shadow transition-all flex items-center justify-center space-x-2"
                >
                  <span>Request a Pilot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 4: 1,000–2,000 */}
            <div className="bg-white rounded-2xl p-6 border border-navy-200 shadow-card flex flex-col justify-between hover:border-teal-500/50 transition-all">
              <div>
                <h4 className="text-lg font-bold text-navy-950 tracking-tight">
                  1,000–2,000 employees
                </h4>
                <div className="mt-4 pb-4 border-b border-navy-100">
                  <div className="text-3xl font-extrabold text-navy-950">
                    £5
                  </div>
                  <div className="text-xs text-navy-500 font-medium mt-1">
                    per covered employee per year
                  </div>
                </div>

                <div className="mt-4 space-y-2.5 text-xs text-navy-700">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>£6,000</strong> one-off implementation and calibration</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Full core signal ingestion and supervisory scoring</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>90-day baseline learning phase</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-100">
                <button
                  onClick={(e) => onOpenPilotModal(e.currentTarget)}
                  className="w-full py-3 px-5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-sm font-bold shadow-2xs hover:shadow transition-all flex items-center justify-center space-x-2"
                >
                  <span>Request a Pilot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          <div className="mt-4 text-xs text-navy-500 italic">
            * Note: Annual base subscription equals covered headcount multiplied by applicable band rate across the entire covered headcount (not marginal pricing). Implementation is separate and one-off, covering HRIS connection, data mapping, DPIA support, worker notice template, 90-day baseline and calibration.
          </div>
        </div>

        {/* Additional Commercial Options */}
        <div className="mb-10 bg-white rounded-2xl p-7 lg:p-9 border border-navy-200 shadow-card">
          <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
            Additional Commercial Options
          </h3>
          <h4 className="text-xl sm:text-2xl font-bold text-navy-950 mb-6">
            Add-ons, Pilot Programme & Methodology Licences
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Structured Inquiry Add-on */}
            <div className="bg-surface-warm rounded-xl p-6 border border-navy-200/80 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 inline-block mb-3">
                  Optional Add-on
                </span>
                <h5 className="font-bold text-navy-950 text-base mb-2">
                  Structured Inquiry Add-on
                </h5>
                <div className="text-2xl font-extrabold text-navy-950 mb-3">
                  +25% <span className="text-xs text-navy-500 font-normal">uplift on base annual subscription</span>
                </div>
                <p className="text-xs text-navy-600 leading-relaxed mb-4">
                  Includes guided inquiry and the case-file module. Supports authorised review, assigned tasks, Acas-aligned steps, and exportable case files.
                </p>
              </div>
              <div className="pt-3 border-t border-navy-100 text-[11px] text-navy-500">
                Uplift applies strictly to the base annual subscription (not applied to implementation or pilot fees).
              </div>
            </div>

            {/* Paid Pilot */}
            <div className="bg-teal-50/50 rounded-xl p-6 border border-teal-200 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-900 bg-teal-100 px-2 py-0.5 rounded border border-teal-300 inline-block mb-3">
                  Low-Risk Entry
                </span>
                <h5 className="font-bold text-navy-950 text-base mb-2">
                  Paid Pilot Programme
                </h5>
                <div className="text-2xl font-extrabold text-teal-800 mb-3">
                  £1,500 <span className="text-xs text-teal-900 font-normal">one-off, excluding VAT</span>
                </div>
                <p className="text-xs text-navy-700 leading-relaxed mb-4">
                  Covers HRIS connection, the 90-day baseline learning period, and baseline calibration. Converts to a paid annual subscription at activation.
                </p>
              </div>
              <div className="pt-3 border-t border-teal-200 text-[11px] text-teal-900 font-medium">
                Implementation fee is waived on conversion to a paid subscription.
              </div>
            </div>

            {/* Consultancy Licence */}
            <div className="bg-surface-warm rounded-xl p-6 border border-navy-200/80 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-navy-600 bg-navy-100 px-2 py-0.5 rounded border border-navy-200 inline-block mb-3">
                  Planned from Year 2
                </span>
                <h5 className="font-bold text-navy-950 text-base mb-2">
                  Consultancy Methodology Licence
                </h5>
                <div className="text-2xl font-extrabold text-navy-950 mb-3">
                  £6,000 <span className="text-xs text-navy-500 font-normal">per year, excluding VAT</span>
                </div>
                <p className="text-xs text-navy-600 leading-relaxed mb-4">
                  Methodology licence for employee-relations practices and HR advisory consultancies partnering with client organisations.
                </p>
              </div>
              <div className="pt-3 border-t border-navy-100 text-[11px] text-navy-500">
                Partner licensing model planned from Year 2 of commercial launch.
              </div>
            </div>

          </div>
        </div>

        {/* Commercial Terms & Planning Assumptions */}
        <div className="mb-10 bg-navy-900 text-white rounded-2xl p-7 lg:p-9 border border-navy-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">
            Commercial Terms & Contract Framework
          </h3>
          <h4 className="text-xl font-bold text-white mb-6">
            Transparent Subscription Structure
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-navy-200">
            <div className="bg-navy-800/80 p-4 rounded-xl border border-navy-700">
              <strong className="text-white block text-sm mb-1.5">12-Month Agreement</strong>
              12-month agreement, renewing annually. Covered employees measured at contract start and reviewed annually.
            </div>

            <div className="bg-navy-800/80 p-4 rounded-xl border border-navy-700">
              <strong className="text-white block text-sm mb-1.5">Billing Options</strong>
              Monthly direct-debit billing available. Annual pricing remains annual even when billed monthly.
            </div>

            <div className="bg-navy-800/80 p-4 rounded-xl border border-navy-700">
              <strong className="text-white block text-sm mb-1.5">Advance Billing</strong>
              Annual advance billing may be available (no discount percentage confirmed or assumed).
            </div>

            <div className="bg-navy-800/80 p-4 rounded-xl border border-navy-700">
              <strong className="text-white block text-sm mb-1.5">Indexation Assumption</strong>
              The business plan holds prices for Years 1 and 2 and models 3% annual indexation from Year 3 as a planning assumption.
            </div>
          </div>
        </div>

        {/* Illustrative Annual Examples Table */}
        <div className="mb-10 bg-white rounded-2xl p-7 lg:p-9 border border-navy-200 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-navy-100 gap-2 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Benchmark Modelling
              </span>
              <h3 className="text-xl font-bold text-navy-950">
                Illustrative Annual Examples
              </h3>
            </div>
            <span className="text-[11px] font-semibold text-navy-600 bg-surface-warm px-3 py-1 rounded border border-navy-200">
              Illustrative annual subscriptions at the stated headcounts. Excluding VAT. Implementation shown separately.
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-navy-200 text-xs uppercase tracking-wider text-navy-500 bg-surface-warm">
                  <th className="py-3 px-4 font-bold">Covered Headcount</th>
                  <th className="py-3 px-4 font-bold">Applicable Band Rate</th>
                  <th className="py-3 px-4 font-bold">Base Subscription</th>
                  <th className="py-3 px-4 font-bold">With Inquiry Add-on (+25%)</th>
                  <th className="py-3 px-4 font-bold">Separate Implementation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-100 text-navy-800">
                <tr>
                  <td className="py-3 px-4 font-semibold">170 employees</td>
                  <td className="py-3 px-4">£8 / emp / yr</td>
                  <td className="py-3 px-4 font-mono font-medium">£1,360 per year</td>
                  <td className="py-3 px-4 font-mono font-bold text-teal-800">£1,700 per year</td>
                  <td className="py-3 px-4 text-navy-600">£2,000 one-off</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">360 employees</td>
                  <td className="py-3 px-4">£7 / emp / yr</td>
                  <td className="py-3 px-4 font-mono font-medium">£2,520 per year</td>
                  <td className="py-3 px-4 font-mono font-bold text-teal-800">£3,150 per year</td>
                  <td className="py-3 px-4 text-navy-600">£3,000 one-off</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">700 employees</td>
                  <td className="py-3 px-4">£6 / emp / yr</td>
                  <td className="py-3 px-4 font-mono font-medium">£4,200 per year</td>
                  <td className="py-3 px-4 font-mono font-bold text-teal-800">£5,250 per year</td>
                  <td className="py-3 px-4 text-navy-600">£4,500 one-off</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">1,350 employees</td>
                  <td className="py-3 px-4">£5 / emp / yr</td>
                  <td className="py-3 px-4 font-mono font-medium">£6,750 per year</td>
                  <td className="py-3 px-4 font-mono font-bold text-teal-800">
                    £8,438 per year <span className="text-[10px] text-navy-400 font-normal">(rounded as shown in business plan)</span>
                  </td>
                  <td className="py-3 px-4 text-navy-600">£6,000 one-off</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Frontend Pricing Estimator */}
        <div className="bg-gradient-to-br from-white via-surface-warm to-teal-50/30 rounded-3xl p-7 sm:p-10 border-2 border-teal-500/40 shadow-modal">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center space-x-2 text-teal-700 text-xs font-bold tracking-wider uppercase mb-1">
              <Calculator className="w-4 h-4" />
              <span>Interactive Pricing Estimator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Estimate your organisation's subscription.
            </h3>
            <p className="mt-2 text-sm text-navy-600">
              Enter your exact covered headcount between 100 and 2,000 employees to calculate annual subscription and optional add-on totals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6 bg-white p-6 rounded-2xl border border-navy-200 shadow-2xs">
              <div>
                <label htmlFor="headcountInput" className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-2">
                  Covered Employee Headcount (100–2,000)
                </label>
                <div className="relative">
                  <input
                    id="headcountInput"
                    type="number"
                    min="100"
                    max="2000"
                    step="1"
                    value={headcountInput}
                    onChange={(e) => setHeadcountInput(e.target.value)}
                    placeholder="Enter headcount (100–2000)"
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-950 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-2xs"
                  />
                  <div className="absolute right-3.5 top-3.5 text-xs text-navy-400 font-bold uppercase">
                    Staff
                  </div>
                </div>

                {/* Range Slider for immediate feedback */}
                <div className="mt-3">
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="10"
                    value={isValidRange ? parsedHeadcount : 360}
                    onChange={(e) => setHeadcountInput(e.target.value)}
                    aria-label="Headcount range slider"
                    className="w-full h-2 bg-navy-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                  <div className="flex justify-between text-[10px] text-navy-400 font-semibold mt-1">
                    <span>100</span>
                    <span>500</span>
                    <span>1,000</span>
                    <span>1,500</span>
                    <span>2,000</span>
                  </div>
                </div>

                {/* Quick select buttons */}
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="text-navy-500 self-center mr-1">Examples:</span>
                  {[170, 360, 700, 1350].map((sample) => (
                    <button
                      key={sample}
                      type="button"
                      onClick={() => setHeadcountInput(sample.toString())}
                      className="px-2.5 py-1 rounded-md bg-navy-100/70 hover:bg-teal-100 text-navy-800 hover:text-teal-900 transition-colors font-medium text-xs"
                    >
                      {sample}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inquiry Add-on Toggle */}
              <div className="p-4 rounded-xl bg-surface-warm border border-navy-200/80">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeAddon}
                    onChange={(e) => setIncludeAddon(e.target.checked)}
                    className="mt-1 w-4 h-4 text-teal-600 rounded border-navy-300 focus:ring-teal-500"
                  />
                  <div>
                    <span className="text-sm font-bold text-navy-900 block">
                      Include Structured Inquiry Add-on (+25%)
                    </span>
                    <span className="text-xs text-navy-600 mt-0.5 block leading-relaxed">
                      Adds guided inquiry workflow, Acas-aligned stages, task assignments, and case-file exports.
                    </span>
                  </div>
                </label>
              </div>

              {/* Paid pilot mention with waiver */}
              <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 text-xs text-teal-950 leading-relaxed">
                <div className="font-bold flex items-center space-x-1.5 mb-1 text-teal-900">
                  <Zap className="w-3.5 h-3.5 text-teal-600" />
                  <span>Paid Pilot Option: £1,500 one-off (excl. VAT)</span>
                </div>
                Covers connection, 90-day baseline, and calibration. Converts to a paid annual subscription upon activation, with the <strong>one-off implementation fee waived on conversion</strong>.
              </div>
            </div>

            {/* Computed Output Box */}
            <div className="lg:col-span-6 bg-navy-950 text-white p-7 rounded-2xl shadow-xl border border-navy-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-navy-800">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                    Estimated Subscription
                  </span>
                  {isValidRange && (
                    <span className="text-xs bg-navy-800 px-2.5 py-1 rounded text-navy-300 font-mono">
                      Band: {bandTitle} ({formatIntCurrency(ratePerEmployee)}/emp/yr)
                    </span>
                  )}
                </div>

                {!isValidRange ? (
                  <div className="py-10 text-center">
                    <div className="inline-flex p-3 rounded-full bg-rose-500/10 text-rose-400 mb-3">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-rose-200">
                      Please enter a valid headcount between 100 and 2,000 employees.
                    </p>
                    <p className="text-xs text-navy-400 mt-1 max-w-sm mx-auto">
                      ConductLens subscription pricing is tailored for UK organisations with 100 to 2,000 covered employees.
                    </p>
                  </div>
                ) : (
                  <div className="py-4 space-y-4">
                    {/* Base */}
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-navy-300">
                        Base annual subscription ({parsedHeadcount} × £{ratePerEmployee}):
                      </span>
                      <span className="font-mono font-semibold text-white">
                        {formatCurrency(baseAnnual)}
                      </span>
                    </div>

                    {/* Add-on */}
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-navy-300 flex items-center space-x-1.5">
                        <span>Structured inquiry add-on (+25%):</span>
                      </span>
                      <span className="font-mono font-semibold text-teal-400">
                        {includeAddon ? formatCurrency(addonAmount) : '£0.00'}
                      </span>
                    </div>

                    {/* Total Annual Recurring */}
                    <div className="pt-4 border-t border-navy-800 flex justify-between items-baseline">
                      <div>
                        <span className="text-xs uppercase tracking-wider font-bold text-teal-400 block">
                          Total Annual Recurring Subscription
                        </span>
                        <span className="text-[11px] text-navy-400">
                          Excluding VAT · 12-month agreement
                        </span>
                      </div>
                      <div className="text-3xl font-extrabold text-white font-mono">
                        {formatCurrency(totalAnnual)}
                      </div>
                    </div>

                    {/* Separate Implementation */}
                    <div className="mt-4 pt-4 border-t border-navy-800 flex justify-between items-center text-xs">
                      <span className="text-navy-300">
                        Separate one-off implementation fee:
                      </span>
                      <span className="font-mono font-semibold text-navy-200">
                        {formatCurrency(implementationFee)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-navy-800">
                <button
                  type="button"
                  onClick={(e) => onOpenPilotModal(e.currentTarget)}
                  className="w-full py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <span>Request a Pilot for Your Organisation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-navy-400 text-center mt-2.5">
                  Opens pilot enquiry modal. No payment details required.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
