import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { CheckCircle2, GraduationCap, Briefcase, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function About() {
  const [showFullJourney, setShowFullJourney] = useState(false);

  const coreIdentities = [
    'Senior Frontend Developer',
    'React & Next.js Specialist',
    'WordPress & CMS Expert',
    '5+ Years Industry Exp',
    'Problem Solver',
    'Quick Learner',
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with graceful fade to white matching screenshot */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Image Container with Editorial Fade Gradients */}
              <div className="relative rounded-3xl lg:rounded-none overflow-hidden shadow-2xl lg:shadow-none bg-slate-100">
                <img
                  src="/hero-portrait.png"
                  alt={personalInfo.name}
                  className="w-full h-[420px] sm:h-[500px] object-cover object-top filter grayscale contrast-115 brightness-95"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/hero-3d-asset.png';
                  }}
                />

                {/* Smooth Fade to Background on Right & Bottom matching reference */}
                <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-r from-transparent to-white hidden lg:block pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
              </div>

              {/* Decorative Experience Badge */}
              <div className="absolute bottom-6 left-6 z-10 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-cyan-200 shadow-lg flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-xs font-black text-slate-800">5+ Years Commercial Experience</span>
              </div>

            </div>
          </div>

          {/* Right Column: Title, Underline, Narrative & Core Identity Pills */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Title with Cyan Underline */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                About <span className="text-cyan-500 font-black">Me</span>
              </h2>
              <div className="w-14 h-1 bg-cyan-400 mt-4 rounded-full" />
            </div>

            {/* Paragraph 1 matching reference tone */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              I'm a <strong className="text-slate-900 font-bold">Senior Frontend Developer & Modern Web Specialist</strong> with over 5 years of experience creating meaningful, accessible, and high-performance digital experiences. I believe in writing clean, modular, and efficient code, continuously pushing myself to learn, build, and grow.
            </p>

            {/* Paragraph 2 matching reference tone */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              I'm driven by challenges and motivated by the endless possibilities that modern web technology offers to solve real-world business problems. Whether engineering reactive interfaces in <strong className="text-slate-900 font-semibold">React.js & Next.js</strong> or crafting client-manageable platforms in <strong className="text-slate-900 font-semibold">WordPress & Wix</strong>, I deliver with pixel-perfection.
            </p>

            {/* Core Identity Section */}
            <div className="pt-4">
              <span className="text-xs font-black tracking-widest text-slate-400 uppercase block mb-3.5">
                CORE IDENTITY
              </span>

              {/* Rounded Identity Pills matching reference screenshot */}
              <div className="flex flex-wrap gap-2.5">
                {coreIdentities.map((identity) => (
                  <span
                    key={identity}
                    className="px-4 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 hover:border-cyan-400 shadow-2xs hover:shadow-sm transition-all duration-200 cursor-default"
                  >
                    {identity}
                  </span>
                ))}
              </div>
            </div>

            {/* Toggle Full Qualifications & Experience Details */}
            <div className="pt-6 border-t border-slate-100">
              <button
                onClick={() => setShowFullJourney(!showFullJourney)}
                className="inline-flex items-center gap-2 text-sm font-extrabold text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                <span>{showFullJourney ? 'Hide Qualifications' : 'View Education & Key Credentials'}</span>
                {showFullJourney ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {/* Collapsible Journey Details */}
              {showFullJourney && (
                <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                        <GraduationCap className="w-4 h-4 text-cyan-500" />
                        <span>BSc Computer Science (BSCS)</span>
                      </div>
                      <p className="text-slate-500 text-xs">Major in Software & Web Engineering (2015 — 2019)</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                        <Award className="w-4 h-4 text-cyan-500" />
                        <span>Diploma in Computer Technology</span>
                      </div>
                      <p className="text-slate-500 text-xs">Grade A+ Specialization in Frontend Systems (2018 — 2019)</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
