import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            5+ Years <span className="text-cyan-500 font-black">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            A chronological timeline of hands-on software development, client deliveries, and continuous technical growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 text-left max-w-6xl mx-auto">
          
          {/* Work Experience Timeline (8 Cols) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
              <Briefcase className="w-5 h-5 text-cyan-500" />
              <h3 className="text-lg sm:text-xl font-black text-slate-900">Career History</h3>
            </div>

            <div className="relative pl-5 sm:pl-8 border-l-2 border-cyan-300 space-y-8 sm:space-y-10 ml-2 sm:ml-0">
              {experienceData.map((job, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Timeline Dot with Cyan Ring (Perfect Responsive Placement) */}
                  <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white shadow-sm group-hover:scale-125 transition-transform" />

                  {/* Period & Location Badge */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-bold text-slate-500 mb-1.5">
                    <span className="flex items-center gap-1.5 text-cyan-700 bg-cyan-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-cyan-200">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.period}
                    </span>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-emerald-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Currently Continuing
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                    {job.role}{' '}
                    <span className="text-cyan-600 font-extrabold block sm:inline">@ {job.company}</span>
                  </h4>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {job.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-3 space-y-2">
                    {job.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2 sm:gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
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
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
              <GraduationCap className="w-5 h-5 text-cyan-500" />
              <h3 className="text-lg sm:text-xl font-black text-slate-900">Education & Badges</h3>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-left hover:border-cyan-300 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-md border border-cyan-200">
                    {edu.year}
                  </span>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mt-2">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-bold text-slate-500 mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                    {edu.details}
                  </p>
                </div>
              ))}

              {/* Ready to Verify Notice */}
              <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-200 text-left">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <h5 className="text-xs font-extrabold text-slate-900">Authentic Credentials</h5>
                    <p className="text-xs text-slate-600 mt-0.5 font-normal">
                      All employment milestones, diplomas, and portfolio references are verified and backed by 5+ years of live client deliverables.
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
