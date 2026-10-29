import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Award, Briefcase, FileText, CheckCircle2 } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'Education/Qualification', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'courses', label: 'Short Courses', icon: <Award className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'details', label: 'Details', icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <section id="about" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Title matching reference */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            About <span className="text-cyan-500 font-black">Me</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* 2-Column Grid: Left Cyan Profile Card, Right Tabbed Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Portrait Card in Vibrant Cyan Style */}
          <div className="lg:col-span-5 max-w-sm mx-auto lg:max-w-none w-full">
            <div className="relative pt-16">
              
              {/* Circular Avatar Emerging from Card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-b from-cyan-400 to-sky-300 z-10">
                <img
                  src="/hero-3d-asset.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center scale-105"
                />
              </div>

              {/* Cyan Card Body */}
              <div className="bg-gradient-to-b from-cyan-400 to-cyan-500 rounded-3xl pt-20 pb-8 px-6 text-center text-slate-900 shadow-xl shadow-cyan-400/20 border border-cyan-300">
                <h3 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-slate-900">
                  {personalInfo.name}
                </h3>
                
                <div className="mt-4 space-y-1.5 text-sm sm:text-base font-bold text-slate-900/90">
                  <p>Frontend Developer</p>
                  <p>Modern Web Specialist</p>
                  <p>WordPress & CMS Expert</p>
                </div>

                <div className="mt-6 pt-5 border-t border-cyan-300/80 flex items-center justify-center gap-2 text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>5+ Years Industry Experience</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Tabs & Details */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Horizontal Tabs Bar */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-6 border-b-2 border-slate-100 pb-3">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative pb-2 text-sm sm:text-base font-bold transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-600'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && (
                      <span className="absolute bottom-[-14px] left-0 right-0 h-1 bg-cyan-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab 1: Education / Qualification */}
            {activeTab === 'education' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                
                <div className="space-y-1.5">
                  <h4 className="text-cyan-600 font-extrabold text-lg sm:text-xl">
                    BSc in Computer Science (BSCS)
                  </h4>
                  <div className="text-sm text-slate-700 space-y-1 font-medium">
                    <p><span className="text-slate-400 font-normal">Institute:</span> Leading Recognized University</p>
                    <p><span className="text-slate-400 font-normal">Duration:</span> 2015 — 2019</p>
                    <p><span className="text-slate-400 font-normal">Result:</span> First Class Degree (Major in Software & Web Engineering)</p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <h4 className="text-cyan-600 font-extrabold text-lg sm:text-xl">
                    Diploma in Computer Technology & Web Development
                  </h4>
                  <div className="text-sm text-slate-700 space-y-1 font-medium">
                    <p><span className="text-slate-400 font-normal">Institute:</span> Polytechnic Institute of Computer Sciences</p>
                    <p><span className="text-slate-400 font-normal">Duration:</span> 2018 — 2019</p>
                    <p><span className="text-slate-400 font-normal">Result:</span> Grade A+ with Specialization in Frontend Systems</p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <h4 className="text-cyan-600 font-extrabold text-lg sm:text-xl">
                    Higher Secondary School Certificate (Pre-Engineering)
                  </h4>
                  <div className="text-sm text-slate-700 space-y-1 font-medium">
                    <p><span className="text-slate-400 font-normal">Institute:</span> Government Model Science College</p>
                    <p><span className="text-slate-400 font-normal">Duration:</span> 2013 — 2015</p>
                    <p><span className="text-slate-400 font-normal">Result:</span> A Grade with Distinction in Mathematics & Computing</p>
                  </div>
                </div>

              </div>
            )}

            {/* Tab 2: Short Courses & Certifications */}
            {activeTab === 'courses' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                
                <div className="space-y-1.5">
                  <h4 className="text-cyan-600 font-extrabold text-lg sm:text-xl">
                    Advanced React.js & Next.js Design Patterns
                  </h4>
                  <div className="text-sm text-slate-700 space-y-1 font-medium">
                    <p><span className="text-slate-400 font-normal">Platform:</span> Meta & Frontend Masters Certification</p>
                    <p><span className="text-slate-400 font-normal">Duration:</span> 2022 — 2023</p>
                    <p><span className="text-slate-400 font-normal">Outcome:</span> Mastered App Router, SSR/SSG, State Architecture & Custom Hooks</p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <h4 className="text-cyan-600 font-extrabold text-lg sm:text-xl">
                    Enterprise WordPress & Custom Theme Engineering
                  </h4>
                  <div className="text-sm text-slate-700 space-y-1 font-medium">
                    <p><span className="text-slate-400 font-normal">Institute:</span> Professional Web Developer Academy</p>
                    <p><span className="text-slate-400 font-normal">Duration:</span> 2020</p>
                    <p><span className="text-slate-400 font-normal">Outcome:</span> Custom Post Types, WPBakery / Elementor Module API & WooCommerce</p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <h4 className="text-cyan-600 font-extrabold text-lg sm:text-xl">
                    Core Web Vitals & Web Performance Tuning
                  </h4>
                  <div className="text-sm text-slate-700 space-y-1 font-medium">
                    <p><span className="text-slate-400 font-normal">Institute:</span> Google Web Standards Program</p>
                    <p><span className="text-slate-400 font-normal">Duration:</span> 2023</p>
                    <p><span className="text-slate-400 font-normal">Outcome:</span> Sub-second LCP optimization, asset minification, and zero layout shifts</p>
                  </div>
                </div>

              </div>
            )}

            {/* Tab 3: Experience (5+ Years) */}
            {activeTab === 'experience' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-cyan-600 font-extrabold text-lg sm:text-xl">
                      Senior Frontend & Web Specialist
                    </h4>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                      2022 — Present
                    </span>
                  </div>
                  <div className="text-sm text-slate-700 space-y-1 font-medium">
                    <p><span className="text-slate-400 font-normal">Focus:</span> React.js, Next.js, Tailwind CSS, Headless CMS architectures</p>
                    <p><span className="text-slate-400 font-normal">Impact:</span> Delivered 25+ commercial projects with 95+ average Lighthouse scores</p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-cyan-600 font-extrabold text-lg sm:text-xl">
                      Frontend & CMS Developer
                    </h4>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      2020 — 2022
                    </span>
                  </div>
                  <div className="text-sm text-slate-700 space-y-1 font-medium">
                    <p><span className="text-slate-400 font-normal">Organization:</span> Creative Web Studio</p>
                    <p><span className="text-slate-400 font-normal">Impact:</span> Built custom WordPress/WPBakery/Wix sites, reducing client load times by 50%</p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-cyan-600 font-extrabold text-lg sm:text-xl">
                      Junior Web Developer
                    </h4>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      2019 — 2020
                    </span>
                  </div>
                  <div className="text-sm text-slate-700 space-y-1 font-medium">
                    <p><span className="text-slate-400 font-normal">Organization:</span> Tech Solutions Hub</p>
                    <p><span className="text-slate-400 font-normal">Impact:</span> Crafted 30+ responsive websites with HTML5, CSS3, JavaScript & Git version control</p>
                  </div>
                </div>

              </div>
            )}

            {/* Tab 4: Details / Mindset & Strengths */}
            {activeTab === 'details' && (
              <div className="space-y-4 animate-in fade-in duration-200 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Over the past <strong className="text-slate-900">5+ years</strong>, I have dedicated myself to mastering both modern frontend engineering and accessible content-driven web design.
                </p>
                <p>
                  My core technical philosophy is centered on <strong className="text-cyan-600 font-bold">Performance, Clean Architecture, and Reliability</strong>. I bridge the gap between design visions and technical execution, ensuring every website is responsive, mobile-first, and SEO-ready.
                </p>
                
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Responsive Pixel-Perfect UI</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Next.js & React App Architecture</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>WordPress & WPBakery Mastery</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>100% Client Satisfaction Track Record</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
