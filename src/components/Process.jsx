import React from 'react';
import { GitPullRequest, Bot, ShieldAlert, Cpu, Sparkles, CheckCheck, FileCode, CheckCircle2 } from 'lucide-react';
import { workProcess } from '../data/portfolioData';

export default function Process() {
  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <GitPullRequest className="w-3.5 h-3.5" />
            <span>Methodology & Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How I Approach Engineering & Delivery
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A structured, repeatable process honed over 5+ years to turn ambiguity into polished, maintainable web software on schedule.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {workProcess.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left"
            >
              <div>
                <span className="inline-block text-2xl font-black text-blue-600/40 font-mono mb-2">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                  Key Artifacts:
                </span>
                <div className="flex flex-wrap gap-1">
                  {step.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Spotlight Card: Responsible AI Agent Utilization (Brief Section F requirement) */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50/50 to-white rounded-3xl p-6 sm:p-8 border border-blue-200/80 shadow-sm text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <Bot className="w-4 h-4" />
                <span>AI Tooling Philosophy & Code Ownership</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Augmented by AI Agents, Governed by Human Engineering Rigor
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                I leverage state-of-the-art AI coding agents as productivity multipliers for rapid scaffolding, boilerplate generation, exploratory design iterations, and syntax reference. 
                However, <strong>I never blindly copy AI outputs into production.</strong>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Full Code Comprehension:</strong> Every component, hook, and CSS property is thoroughly reviewed and understood.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Edge-Case Validation:</strong> Manual testing for responsive breakpoints, keyboard accessibility, and browser quirks.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Security & Performance Checks:</strong> Ensuring no bloated dependencies, memory leaks, or unvetted external calls.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Personal Accountability:</strong> I stand by every line of code submitted and can clearly defend all architectural choices.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-blue-100 shadow-xs space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Workflow Ratio</p>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                    <span>Manual Architecture & Verification</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full w-[70%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                    <span>AI Scaffolding & Brainstorming</span>
                    <span>30%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-indigo-400 rounded-full w-[30%]" />
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 italic pt-1">
                "AI provides speed; senior human judgment guarantees reliability."
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

