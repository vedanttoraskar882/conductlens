import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertCircle, Shield, ArrowRight } from 'lucide-react';
import { savePilotRequest } from '../types/pilot';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerElement: HTMLElement | null;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose, triggerElement }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [organisationName, setOrganisationName] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStatusMessage(null);
      setErrorMessage(null);
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 60);

      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (triggerElement) {
        triggerElement.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, triggerElement]);

  // Handle ESC key and focus trapping
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMessage(null);
    setStatusMessage(null);

    const trimmedName = fullName.trim();
    const trimmedPhone = phoneNumber.trim();
    const trimmedEmail = emailAddress.trim();
    const trimmedOrg = organisationName.trim();

    if (!trimmedName || !trimmedPhone || !trimmedEmail || !trimmedOrg) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      savePilotRequest({
        fullName: trimmedName,
        phoneNumber: trimmedPhone,
        emailAddress: trimmedEmail,
        organisationName: trimmedOrg,
      });

      setStatusMessage("Thank you. Your pilot request has been successfully submitted.");
      
      setFullName('');
      setPhoneNumber('');
      setEmailAddress('');
      setOrganisationName('');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred while submitting.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/75 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pilot-modal-title"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-modal border border-navy-100 overflow-hidden my-8 transform transition-all"
      >
        {/* Modal Header */}
        <div className="bg-navy-950 text-white p-7 sm:p-8 relative border-b border-navy-800">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 text-navy-400 hover:text-white p-2 rounded-xl hover:bg-navy-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center space-x-2 text-teal-400 text-xs font-bold tracking-wider uppercase mb-2.5">
            <Shield className="w-3.5 h-3.5" />
            <span>Pilot Enquiry · Planned Development</span>
          </div>
          
          <h2 id="pilot-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Request a ConductLens Pilot
          </h2>
          <p className="mt-2 text-sm text-navy-300 leading-relaxed">
            Register your organisation's interest in the planned 90-day baseline and early-warning pilot programme.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-7 sm:p-8">
          
          {/* Aria-live status alerts */}
          <div aria-live="polite" className="mb-5">
            {statusMessage && (
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-300 text-teal-950 flex items-start space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div className="leading-relaxed font-semibold">
                  {statusMessage}
                </div>
              </div>
            )}
            {errorMessage && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-950 flex items-start space-x-3 text-sm">
                <AlertCircle className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                <div className="leading-relaxed font-semibold">
                  {errorMessage}
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4.5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-teal-600">*</span>
              </label>
              <input
                ref={firstInputRef}
                id="fullName"
                type="text"
                autoComplete="name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder=""
                className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-950 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-sm shadow-2xs"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-teal-600">*</span>
              </label>
              <input
                id="phoneNumber"
                type="tel"
                autoComplete="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder=""
                className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-950 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-sm shadow-2xs"
              />
            </div>

            <div>
              <label htmlFor="emailAddress" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                Email Address <span className="text-teal-600">*</span>
              </label>
              <input
                id="emailAddress"
                type="email"
                autoComplete="email"
                required
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder=""
                className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-950 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-sm shadow-2xs"
              />
            </div>

            <div>
              <label htmlFor="organisationName" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                Organisation Name <span className="text-teal-600">*</span>
              </label>
              <input
                id="organisationName"
                type="text"
                autoComplete="organization"
                required
                value={organisationName}
                onChange={(e) => setOrganisationName(e.target.value)}
                placeholder=""
                className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-950 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-sm shadow-2xs"
              />
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-3.5 px-7 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-base"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Pilot Request'}</span>
                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-1" />}
              </button>
              
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto py-3.5 px-6 border border-navy-200 hover:bg-navy-50 text-navy-700 font-semibold rounded-xl transition-colors text-sm"
              >
                Cancel
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};
