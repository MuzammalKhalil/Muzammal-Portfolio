import React from 'react';
import { Target, CheckCircle2, ShieldCheck, HeartHandshake, Zap, Compass, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      title: "5+ Years Real-World Evolution",
      description: "Progressed from core semantic HTML5, CSS3, and high-traffic WordPress builds into modern component-driven React.js and Next.js applications.",
    },
    {
      title: "Performance & Web Vitals First",
      description: "I don't just build pages that look good — I write lean markup, optimize bundle sizes, and prioritize sub-second loads for maximum SEO and conversions.",
    },
    {
      title: "CMS & Visual Builder Fluency",
      description: "Extensive hands-on experience with WordPress, WPBakery, Wix Studio, and Elementor. I build client-friendly systems that marketing teams can easily manage without breaking code.",
    },
    {
      title: "Pragmatic Problem Solver",
      description: "Believer in clean architecture, accessible WCAG standards, and using modern AI coding agents responsibly to test, verify, and accelerate delivery.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bridging technical precision with engaging visual design.
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            With 5+ years of practical frontend experience, I focus on building resilient web experiences that solve real business bottlenecks.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              My journey began over five years ago with a deep curiosity for how the web works at its foundational level—writing pristine <strong className="text-slate-900">HTML5, CSS3, and JavaScript</strong>, and building custom client websites using platforms like <strong className="text-slate-900">WordPress, WPBakery, and Wix</strong>.
            </p>
            <p>
              As the web evolved, I expanded into the modern JavaScript ecosystem, adopting <strong className="text-blue-600 font-semibold">React.js, Next.js, and Tailwind CSS</strong>. This combination allows me to handle both sides of the coin: architecting lightning-fast modern single-page apps while also delivering rich, content-driven websites that non-technical clients can maintain.
            </p>
            <p>
              I believe great frontend development is not merely stringing together components; it is about empathy for the end user who might be on an unstable 3G connection, and respect for the team who will maintain the codebase after launch.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">What I Value Most</p>
                <p className="text-sm font-semibold text-slate-900 mt-1">Readability, Performance & Reliability</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Target Opportunity</p>
                <p className="text-sm font-semibold text-slate-900 mt-1">Senior / Dedicated Frontend Engineer</p>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all duration-200 text-left"
              >
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-normal">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

