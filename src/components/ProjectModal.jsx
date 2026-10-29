import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Wrench, Trophy, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      document.body.style.overflow = 'unset';
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Background click to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Card */}
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden relative my-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm transition-transform active:scale-90"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent flex flex-col justify-end p-6 text-white">
            <span className="inline-block self-start px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-xs text-xs font-bold uppercase tracking-wider mb-2">
              {project.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-200 text-sm mt-1">{project.subtitle}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-left max-h-[60vh] overflow-y-auto">
          
          {/* Quick Summary */}
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            {project.summary}
          </p>

          {/* Structured Case Study Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* The Problem */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>The Problem & Goal</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* My Role */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>My Specific Role</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.role}
              </p>
            </div>

            {/* The Approach */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1.5">
                <Wrench className="w-4 h-4 text-slate-700" />
                <span>Engineering Approach</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* Outcome & Learnings */}
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1.5">
                <Trophy className="w-4 h-4 text-emerald-600" />
                <span>Outcome & Impact</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.outcome}
              </p>
            </div>

          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              Technologies & Tools Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Fully documented case study</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 text-sm font-semibold transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-colors"
            >
              <span>Live Preview</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
