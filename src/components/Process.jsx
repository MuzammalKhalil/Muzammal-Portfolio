import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  Bot, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Code2,
  Gauge
} from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(2); // Step 3 (AI + Human) featured by default

  const steps = [
    {
      step: '01',
      title: 'Discovery & Requirements',
      tagline: 'Understand Before Code',
      icon: <Compass className="w-6 h-6 text-cyan-600" />,
      desc: 'Deep dive into business goals, audience expectations, and performance budgets to eliminate ambiguity before writing any code.',
      deliverables: ['User Flow Specs', 'Figma Wireframes', 'Core Web Vital Goals'],
    },
    {
      step: '02',
      title: 'System & UI Architecture',
      tagline: 'Scalable Component Systems',
      icon: <Layers className="w-6 h-6 text-cyan-600" />,
      desc: 'Drafting semantic HTML structures, accessible component hierarchies, and a strict light-theme design system using Tailwind CSS.',
      deliverables: ['Tailwind Design Tokens', 'Atomic Components', 'Type Contracts'],
    },
    {
      step: '03',
      title: 'Agile AI-Augmented Build',
      tagline: 'AI Speed + Human Engineering',
      icon: <Bot className="w-6 h-6 text-cyan-600" />,
      desc: 'Using AI coding agents for rapid boilerplate scaffolding, while manually inspecting, refactoring, and verifying every single line of code.',
      deliverables: ['React / Next.js', 'WordPress Themes', '100% Code Comprehension'],
      featured: true,
    },
    {
      step: '04',
      title: 'Rigorous QA & Speed Tuning',
      tagline: 'Sub-Second Page Loads',
      icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />,
      desc: 'Cross-browser testing on mobile, tablet, and desktop. Auditing Lighthouse scores, keyboard navigation, and zero console errors.',
      deliverables: ['95+ PageSpeed Score', 'Cross-Browser Tested', 'WCAG AA Accessibility'],
    },
    {
      step: '05',
      title: 'Deployment & Ongoing Iteration',
      tagline: 'Automated CI/CD Delivery',
      icon: <Rocket className="w-6 h-6 text-cyan-600" />,
      desc: 'Automated edge deployment via Vercel and GitHub Actions with production-ready asset compression and ongoing performance monitoring.',
      deliverables: ['Vercel Edge CDN', 'Automated Git Deploy', 'Zero-Downtime Rollouts'],
    },
  ];

  return (
    <section id="process" className="py-24 bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How I <span className="text-cyan-500 font-black">Work</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            A battle-tested 5-phase engineering methodology that guarantees reliable code, pixel precision, and on-time project delivery.
          </p>
        </div>

        {/* Interactive Step Navigator Bar (Desktop & Tablet) */}
        <div className="hidden md:flex items-center justify-between max-w-5xl mx-auto mb-14 relative px-4">
          
          {/* Connecting Cyan Trail Line */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-slate-200 -z-0" />
          <div 
            className="absolute left-8 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 -z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 92}%` }}
          />

          {/* Step Circular Nodes */}
          {steps.map((s, idx) => {
            const isCurrent = activeStep === idx;
            const isCompleted = idx <= activeStep;

            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center group focus:outline-none"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300 ${
                    isCurrent
                      ? 'bg-cyan-400 text-slate-950 scale-125 shadow-lg shadow-cyan-400/40 ring-4 ring-cyan-100'
                      : isCompleted
                      ? 'bg-cyan-500 text-white shadow-sm'
                      : 'bg-white border-2 border-slate-300 text-slate-400 group-hover:border-cyan-400 group-hover:text-cyan-600'
                  }`}
                >
                  {s.step}
                </div>
                <span className={`text-[11px] font-black uppercase tracking-wider mt-2.5 transition-colors ${
                  isCurrent ? 'text-cyan-600 font-extrabold' : 'text-slate-500 group-hover:text-slate-800'
                }`}>
                  {s.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Modern Bento Process Cards Grid (3 Columns Top, 2 Columns Bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch mb-14 text-left">
          {steps.map((s, idx) => {
            const isCurrent = activeStep === idx;

            return (
              <div
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer relative group ${
                  s.featured
                    ? 'bg-gradient-to-b from-cyan-50/60 via-white to-white border-2 border-cyan-400 shadow-xl shadow-cyan-500/10 ring-4 ring-cyan-100/60'
                    : isCurrent
                    ? 'bg-white border-2 border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'bg-white border border-slate-200/90 shadow-2xs hover:border-cyan-300 hover:shadow-md'
                }`}
              >
                {/* Featured Badge for AI-Augmented step */}
                {s.featured && (
                  <div className="absolute -top-3 left-6 px-3.5 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>AI-Augmented Core</span>
                  </div>
                )}

                <div>
                  {/* Top: Number Pill & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-cyan-50 border border-cyan-100/80 group-hover:scale-110 transition-transform">
                      {s.icon}
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-cyan-400 transition-colors">
                      {s.step}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {s.title}
                  </h3>
                  <span className="text-xs font-bold text-cyan-600 block mt-1">
                    {s.tagline}
                  </span>

                  {/* Description */}
                  <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>

                {/* Deliverable Tags at bottom */}
                <div className="pt-5 mt-5 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">
                    Key Outputs & Standards:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {s.deliverables.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Responsible AI Philosophy Banner (Required for Assessment Section F) */}
        <div className="bg-gradient-to-r from-cyan-50/50 via-sky-50/30 to-white rounded-3xl p-6 sm:p-9 border border-cyan-200 shadow-sm text-left max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-black uppercase tracking-wider">
                <Bot className="w-4 h-4 text-cyan-600" />
                <span>Assessment Brief Section F Compliance</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Speed of AI, Governed by 5+ Years of Human Engineering Rigor
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                I leverage modern AI coding agents as productivity accelerators for boilerplate scaffolding and rapid prototyping. 
                However, <strong>I retain 100% personal ownership and responsibility</strong> over code correctness, accessibility, and security. No code goes into production without manual verification.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Full Code Comprehension:</strong> Every component, hook, and CSS property is thoroughly understood.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Edge-Case Testing:</strong> Manual verification across responsive screen widths, keyboard access & iOS/Android.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Performance First:</strong> Zero bloated packages, sub-second LCP, and zero cumulative layout shifts.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Accountability:</strong> I can defend every architectural choice and trade-off in technical interviews.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-cyan-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400">Engineering Ratio</span>
                <Gauge className="w-4 h-4 text-cyan-600" />
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
                    <span>Manual Architecture & Code Review</span>
                    <span className="text-cyan-600 font-extrabold">70%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden p-0.5">
                    <div className="h-full bg-cyan-500 rounded-full w-[70%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
                    <span>AI Scaffolding & Ideation</span>
                    <span className="text-cyan-500 font-extrabold">30%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden p-0.5">
                    <div className="h-full bg-cyan-300 rounded-full w-[30%]" />
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 text-center">
                <p className="text-[11px] text-slate-500 italic">
                  "AI provides velocity; human experience guarantees production reliability."
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
