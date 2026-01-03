
import React, { useState, useEffect } from 'react';
import { Hammer, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'AI Estimator', href: '#estimator' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-amber-500 rounded-lg">
              <Hammer className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              APEX<span className="text-amber-500 underline decoration-2 underline-offset-4">STRUCTURES</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isScrolled ? 'text-slate-600 hover:text-amber-500' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105">
              Get Quote
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? 'text-slate-900' : 'text-white'}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
