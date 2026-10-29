import React from 'react';
import { History, Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <History className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            5+ Years of Real-World Experience & Background
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A chronological timeline of hands-on software development, client engagements, and foundational academic learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Work Experience Timeline (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Professional Experience</h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-200 space-y-10">
              {experienceData.map((job, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />

                  {/* Period & Location Badge */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 mb-1">
                    <span className="flex items-center gap-1 text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      <Calendar className="w-3 h-3" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h4 className="text-xl font-bold text-slate-900 mt-1">
                    {job.role}{' '}
                    <span className="text-blue-600 font-medium">@ {job.company}</span>
                  </h4>

                  {/* Description */}
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-3 space-y-1.5">
                    {job.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Education & Badges</h3>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left hover:border-slate-300 transition-colors"
                >
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {edu.year}
                  </span>
                  <h4 className="font-bold text-slate-900 text-base mt-2">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}

              {/* Ready to Verify Notice */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-left">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-emerald-900">Authentic Credentials</h5>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      All employment dates, diplomas, and portfolio references are verified and can be supported with certificates and references upon request.
                    </p>
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
