import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-2.5 text-slate-900">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-base tracking-tight text-slate-900">
                {personalInfo.name}<span className="text-blue-600">.dev</span>
              </span>
              <p className="text-xs text-slate-500">
                Senior Frontend & Modern Web Engineer
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600 font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {personalInfo.name}. Designed & Built with a strict Light-Theme Design System.
          </p>
          <p className="flex items-center gap-1">
            Engineered with React, Next.js patterns, and Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}

