import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Design', 'Next.js', 'React.js', 'WordPress', 'CMS & Design'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Title matching reference */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            My <span className="text-cyan-500 font-black">Portfolio</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            A showcase of modern web projects, client platforms, and high-performance applications.
          </p>
        </div>

        {/* Category Filter Pills (Light Theme) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-2xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3x2 Grid Matching Reference Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200 shadow-md hover:shadow-2xl hover:border-cyan-400 cursor-pointer transition-all duration-300"
            >
              {/* Background Project / Workstation Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Cyan Gradient Overlay (Transparent by default, shows on hover for all cards) */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/95 via-cyan-400/90 to-cyan-300/85 p-6 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-95 transition-all duration-300 backdrop-blur-2xs">
                {/* Overlay Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm mb-4">
                  {project.displayTitle || project.category}
                </h3>

                {/* External Link Square Button matching screenshot */}
                <div className="w-12 h-12 rounded-2xl bg-white text-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-900/20 group-hover:scale-110 transition-transform duration-200">
                  <ExternalLink className="w-6 h-6 stroke-[2.5]" />
                </div>

                {/* Subtle Subtitle */}
                <p className="mt-3 text-xs font-bold text-white/90 uppercase tracking-wider">
                  View Case Study
                </p>
              </div>

              {/* Inactive Bottom Badge when not hovered */}
              <div className="absolute bottom-3.5 left-3.5 group-hover:opacity-0 transition-opacity duration-200 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-xs font-bold border border-white/20 shadow-sm">
                  {project.displayTitle || project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal display when a project is selected */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
