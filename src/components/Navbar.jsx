import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'process', 'experience', 'contact'];
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
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'HOW I WORK', href: '#process' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-4 shadow-xs'
          : 'bg-white/60 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Brand: Clean, Minimalist Typography Logo (matching reference) */}
          <a
            href="#home"
            className="flex items-center text-slate-900 group"
          >
            <span className="font-black text-2xl tracking-tighter text-slate-950 font-sans">
              MUZAMMAL<span className="text-cyan-500 font-black">.</span>
            </span>
          </a>

          {/* Center: Sleek Capsule Navigation Container (matching reference) */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/90 p-1 rounded-full border border-slate-200/90 shadow-2xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-black tracking-wider rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-cyan-600'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Editorial Pill Button (matching reference) */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-slate-950 hover:bg-cyan-400 hover:text-slate-950 text-white text-xs font-black tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-cyan-400/20 active:scale-95"
            >
              HIRE ME
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:text-cyan-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 px-3 bg-white rounded-2xl border border-slate-200 shadow-xl space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 text-left">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-2.5 rounded-xl text-xs font-black tracking-wider text-slate-700 hover:text-cyan-600 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center px-4 py-3 rounded-full bg-slate-950 hover:bg-cyan-400 hover:text-slate-950 text-white text-xs font-black tracking-wider uppercase shadow-sm transition-colors"
              >
                HIRE ME
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
