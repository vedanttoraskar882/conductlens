import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenPilotModal: (triggerEl: HTMLElement) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPilotModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Market & Pricing', href: '#market-pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-navy-100 py-3.5' 
          : 'bg-surface-warm/95 backdrop-blur-sm border-b border-navy-100/70 py-4.5'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand — Clean wordmark without logo icon box */}
          <a 
            href="#home" 
            className="flex flex-col group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1 -m-1"
          >
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-navy-950 font-sans leading-none group-hover:text-teal-950 transition-colors">
              Conduct<span className="text-teal-600">Lens</span>
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-wider uppercase font-bold text-navy-500 mt-1">
              Workplace Conduct Risk
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-semibold text-navy-700 hover:text-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md py-1 px-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Pilot CTA — Generous size and comfortable padding */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={(e) => onOpenPilotModal(e.currentTarget)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 group whitespace-nowrap"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy-700 hover:text-navy-900 hover:bg-navy-100/60 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-5 border-t border-navy-100 bg-white/98 backdrop-blur-md rounded-2xl shadow-card px-4 space-y-3">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3.5 py-2.5 rounded-lg text-base font-semibold text-navy-800 hover:text-teal-700 hover:bg-teal-50/70 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-navy-100">
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  onOpenPilotModal(e.currentTarget);
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-base shadow-md flex items-center justify-center space-x-2"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
