import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright line matching reference screenshot */}
          <p className="text-xs sm:text-sm font-medium text-slate-400 text-center sm:text-left">
            Copyright &copy; {currentYear} All Rights Reserved By{' '}
            <span className="text-white font-bold">{personalInfo.name.toUpperCase()}</span>.
          </p>

          {/* Square Back to Top Button with Cyan Border matching reference */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-11 h-11 rounded-xl border-2 border-cyan-400 hover:bg-cyan-400 text-cyan-400 hover:text-slate-900 flex items-center justify-center transition-all duration-200 shadow-md shadow-cyan-400/20 active:scale-95"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </button>

        </div>
      </div>
    </footer>
  );
}
