import React, { useState } from 'react';
import { Wrench, CheckCircle, Sparkles, Layers, Terminal, Monitor, Code } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const categoryIcons = [
    <Code className="w-4 h-4" />,
    <Layers className="w-4 h-4" />,
    <Monitor className="w-4 h-4" />,
    <Terminal className="w-4 h-4" />,
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills, Frameworks & Tooling Stack
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            A battle-tested repertoire refined across 5+ years of delivering commercial websites and client applications. Grouped by specialization with verified proficiency.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {skillsData.map((category, idx) => {
            const isActive = selectedCategoryIndex === idx;
            return (
              <button
                key={category.category}
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {categoryIcons[idx % categoryIcons.length]}
                <span>{category.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="mb-6 pb-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {skillsData[selectedCategoryIndex].category}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                {skillsData[selectedCategoryIndex].description}
              </p>
            </div>
            <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              {skillsData[selectedCategoryIndex].items.length} Core Technologies
            </span>
          </div>

          {/* Grid of Skills in selected category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData[selectedCategoryIndex].items.map((skill) => (
              <div
                key={skill.name}
                className={`p-4 rounded-2xl border transition-all duration-200 ${
                  skill.highlight
                    ? 'bg-blue-50/40 border-blue-200/80 hover:border-blue-300'
                    : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900 text-base">{skill.name}</span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-md font-semibold ${
                    skill.level === 'Expert'
                      ? 'bg-emerald-100 text-emerald-800'
                      : skill.level === 'Advanced'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-slate-200 text-slate-700'
                  }`}>
                    {skill.level}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span>Experience: <strong className="text-slate-700">{skill.years}</strong></span>
                  {skill.highlight && (
                    <span className="text-blue-600 font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Core Competency
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Transparency / Honesty Note as per Assessment Brief */}
        <div className="mt-6 flex items-center gap-2.5 text-xs text-slate-500 bg-white/60 p-3.5 rounded-xl border border-slate-200/80">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Honest Representation:</strong> Proficiency ratings reflect actual production experience across commercial client deliverables, custom themes, and full-stack integration projects.
          </span>
        </div>

      </div>
    </section>
  );
}

