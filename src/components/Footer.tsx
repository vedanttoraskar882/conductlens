import React from 'react';
import { MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Market & Pricing', href: '#market-pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-12 border-b border-navy-800/80">
          
          {/* Brand Info */}
          <div className="max-w-md space-y-4">
            <div>
              <span className="text-2xl font-black tracking-tight text-white font-sans">
                Conduct<span className="text-teal-400">Lens</span>
              </span>
            </div>

            <p className="text-sm text-teal-300 font-medium">
              Early-warning conduct risk evidence.
            </p>

            <p className="text-xs text-navy-400 leading-relaxed">
              Designed to help HR teams connect existing operational signals, identify sustained team-level patterns and support proportionate, human-led review.
            </p>

            <div className="pt-1 flex items-center space-x-2 text-xs text-navy-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
              <span>Crawley, West Sussex, United Kingdom</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:text-right">
            <h4 className="text-xs uppercase tracking-wider font-bold text-teal-400 mb-4">
              Navigation
            </h4>
            <ul className="flex flex-wrap md:flex-col gap-x-6 gap-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-navy-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-navy-500 gap-4">
          <div>
            © {currentYear} ConductLens. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-navy-400">
            <span>Planned delivery: SaaS hosted in a UK cloud region</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
