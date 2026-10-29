import React from 'react';
import { ArrowRight, Eye, Sparkles, CheckCircle2, Code, Zap, Award, Layers, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const quickTechs = [
    'React.js',
    'Next.js 14',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'WordPress',
    'Wix Studio',
    'WPBakery',
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient Blobs (Light theme compliant) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-blue-100/60 via-indigo-50/40 to-emerald-50/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-50/50 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Value Proposition & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill & Experience Badge */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-800 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>5+ Years Experience</span>
              <span className="text-blue-300">•</span>
              <span className="text-blue-700">{personalInfo.status}</span>
            </div>

            {/* Main Title & Role */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Hi, I'm <span className="text-blue-600 inline-block">{personalInfo.name}</span>.
              <br />
              <span className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-bold">
                Senior Frontend & Modern Web Developer
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              I transform complex business goals into <strong className="text-slate-800 font-semibold">fast, responsive, and pixel-perfect web experiences</strong>. 
              Specializing in high-performance <span className="text-blue-600 font-medium">React & Next.js</span> applications, custom <span className="text-blue-600 font-medium">WordPress & CMS</span> solutions, and clean accessible design systems.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-sm hover:shadow-md hover:shadow-blue-500/25 transition-all duration-200 active:scale-95"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-300 shadow-xs hover:border-slate-400 transition-all duration-200"
              >
                <span>Get in Touch</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors"
                title="View career timeline and qualifications"
              >
                <Download className="w-4 h-4" />
                <span>View CV / Milestones</span>
              </a>
            </div>

            {/* Quick Skills Pills */}
            <div className="pt-4 border-t border-slate-200/80">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block mb-2.5">
                Primary Stack & Expertise:
              </span>
              <div className="flex flex-wrap gap-2">
                {quickTechs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-2xs hover:border-blue-300 hover:text-blue-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase & Metric Highlights */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Profile / Credibility Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0" />
                
                {/* Header of the Card */}
                <div className="flex items-center gap-4 relative z-10 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-2xl shadow-md shadow-blue-500/20">
                    M
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl">{personalInfo.name}</h3>
                    <p className="text-sm text-slate-500 font-medium">5+ Years Crafting the Web</p>
                    <div className="flex items-center gap-1.5 mt-1 text-emerald-600 text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Frontend Specialist</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-blue-600 mb-1">
                      <Award className="w-5 h-5" />
                      <span className="text-2xl font-extrabold text-slate-900">5+</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Years Industry Exp
                    </p>
                    <p className="text-[11px] text-slate-600 mt-0.5">Frontend, React & CMS</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-emerald-600 mb-1">
                      <Zap className="w-5 h-5" />
                      <span className="text-2xl font-extrabold text-slate-900">45+</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Projects Delivered
                    </p>
                    <p className="text-[11px] text-slate-600 mt-0.5">Production-grade builds</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-indigo-600 mb-1">
                      <Code className="w-5 h-5" />
                      <span className="text-2xl font-extrabold text-slate-900">98%</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Lighthouse Score
                    </p>
                    <p className="text-[11px] text-slate-600 mt-0.5">Optimized Core Web Vitals</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-amber-600 mb-1">
                      <Layers className="w-5 h-5" />
                      <span className="text-2xl font-extrabold text-slate-900">100%</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Responsive Design
                    </p>
                    <p className="text-[11px] text-slate-600 mt-0.5">Mobile, Tablet, Desktop</p>
                  </div>
                </div>

                {/* Guiding Philosophy Callout */}
                <div className="mt-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-left">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">Hiring Goal</p>
                      <p className="text-xs text-blue-800 mt-0.5 leading-relaxed">
                        Ready to contribute immediately to product teams requiring reliable, scalable React/Next.js code and high-converting web applications.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
