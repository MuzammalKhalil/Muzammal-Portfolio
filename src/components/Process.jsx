import React from 'react';
import { GitPullRequest, Bot, CheckCircle2 } from 'lucide-react';
import { workProcess } from '../data/portfolioData';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How I <span className="text-cyan-500 font-black">Work</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            A structured, repeatable methodology honed over 5+ years to turn requirements into clean, scalable, and maintainable software.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {workProcess.map((step) => (
            <div
              key={step.step}
              className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <span className="inline-block text-3xl font-black text-cyan-500/40 font-mono mb-2 group-hover:text-cyan-500 transition-colors">
                  {step.step}
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                  Key Deliverables:
                </span>
                <div className="flex flex-wrap gap-1">
                  {step.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible AI Agent Utilization & Code Ownership Spotlight */}
        <div className="bg-gradient-to-r from-cyan-50/50 via-sky-50/30 to-white rounded-3xl p-6 sm:p-9 border border-cyan-200 shadow-sm text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-black uppercase tracking-wider">
                <Bot className="w-4 h-4 text-cyan-600" />
                <span>AI Tooling Philosophy & Code Ownership</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Augmented by AI Agents, Governed by Human Engineering Rigor
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                I leverage modern AI coding agents as productivity multipliers for rapid scaffolding, boilerplate generation, and exploratory design iterations. 
                However, <strong>I never blindly copy AI outputs into production.</strong>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Full Code Comprehension:</strong> Every component, hook, and CSS property is thoroughly reviewed and understood.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Edge-Case Validation:</strong> Manual verification for responsive breakpoints, keyboard accessibility, and cross-browser quirks.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Performance & Security:</strong> Eliminating bloated dependencies, memory leaks, and unvetted external calls.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Personal Accountability:</strong> I stand behind every line of code submitted and clearly articulate all design trade-offs.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-cyan-100 shadow-sm space-y-4">
              <p className="text-xs font-black uppercase tracking-wider text-slate-400">Workflow Ratio</p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
                    <span>Manual Architecture & Verification</span>
                    <span className="text-cyan-600">70%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden p-0.5">
                    <div className="h-full bg-cyan-500 rounded-full w-[70%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
                    <span>AI Scaffolding & Brainstorming</span>
                    <span className="text-cyan-600">30%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden p-0.5">
                    <div className="h-full bg-cyan-300 rounded-full w-[30%]" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic pt-1">
                "AI provides speed; senior human judgment guarantees reliability."
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
