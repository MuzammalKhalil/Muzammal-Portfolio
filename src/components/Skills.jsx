import React, { useState } from 'react';
import { 
  HtmlBadgeIcon, 
  CssBadgeIcon, 
  TailwindBadgeIcon, 
  JsBadgeIcon, 
  ReactBadgeIcon, 
  FigmaBadgeIcon, 
  PhotoshopBadgeIcon, 
  IllustratorBadgeIcon,
  NextjsBadgeIcon,
  WordPressBadgeIcon
} from './Icons';
import { CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsList = [
    {
      id: 'html',
      name: 'HTML - 5',
      percentage: 95,
      category: 'frontend',
      icon: <HtmlBadgeIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
    {
      id: 'css',
      name: 'CSS - 3',
      percentage: 89,
      category: 'frontend',
      icon: <CssBadgeIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      percentage: 90,
      category: 'frontend',
      icon: <TailwindBadgeIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
    {
      id: 'js',
      name: 'JavaScript',
      percentage: 80,
      category: 'frontend',
      icon: <JsBadgeIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
    {
      id: 'react',
      name: 'React',
      percentage: 85,
      category: 'frontend',
      icon: <ReactBadgeIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      percentage: 88,
      category: 'frontend',
      icon: <NextjsBadgeIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
    {
      id: 'figma',
      name: 'Figma',
      percentage: 85,
      category: 'design',
      icon: <FigmaBadgeIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
    {
      id: 'wordpress',
      name: 'WordPress / WPBakery',
      percentage: 92,
      category: 'cms',
      icon: <WordPressBadgeIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
    {
      id: 'photoshop',
      name: 'Adobe Photoshop',
      percentage: 80,
      category: 'design',
      icon: <PhotoshopBadgeIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
    {
      id: 'illustrator',
      name: 'Adobe Illustrator',
      percentage: 75,
      category: 'design',
      icon: <IllustratorBadgeIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsList
    : skillsList.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            My <span className="text-cyan-500 font-black">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* Category Filter Pills (Responsive Flex-Wrap) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12 px-2">
          {[
            { id: 'all', label: 'All Technologies' },
            { id: 'frontend', label: 'Frontend & UI' },
            { id: 'cms', label: 'CMS & Frameworks' },
            { id: 'design', label: 'Design Tools' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-2xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2-Column Skills Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-x-12 lg:gap-y-7 text-left">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center gap-3.5 sm:gap-5 p-3 sm:p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 hover:border-cyan-200 hover:shadow-md transition-all duration-300 group"
            >
              {/* Circular Badge */}
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              {/* Skill Details */}
              <div className="flex-1 min-w-0 space-y-1.5 sm:space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm md:text-base font-extrabold text-slate-800">
                  <span className="truncate group-hover:text-cyan-600 transition-colors">
                    {skill.name}
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex-1 h-3 sm:h-3.5 bg-slate-200/90 rounded-full overflow-hidden p-0.5 shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full shadow-xs shadow-cyan-400/50 transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>

                  {/* Percentage Indicator */}
                  <span className="text-xs sm:text-sm font-black text-slate-700 min-w-[32px] sm:min-w-[36px] text-right font-mono">
                    {skill.percentage}%
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Assessment Brief Compliance Note */}
        <div className="max-w-xl mx-auto mt-10 sm:mt-14 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-500 bg-white/80 p-3 sm:p-3.5 rounded-2xl border border-slate-200 text-center">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Honest Representation: Backed by 5+ years of verified production delivery</span>
        </div>

      </div>
    </section>
  );
}
