import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code2, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'services', 'projects', 'process', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-slate-900 group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 block leading-tight">
                {personalInfo.name}
                <span className="text-blue-600">.dev</span>
              </span>
              <span className="text-[11px] font-semibold text-slate-500 block -mt-0.5 uppercase tracking-wider">
                Frontend Specialist
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm hover:shadow-md hover:shadow-blue-600/20 transition-all duration-200 active:scale-95"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 px-3 bg-white rounded-2xl border border-slate-200 shadow-xl space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                <span>Let's Discuss Opportunities</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
