import React from 'react';
import { Globe, Code2 } from 'lucide-react';

// Custom Paint Roller Icon matching reference screenshot
function PaintRollerIcon({ className = "w-12 h-12" }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="3" y="3" width="15" height="6" rx="2" fill="currentColor" fillOpacity="0.2" />
      <path d="M18 6h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-9a2 2 0 0 0-2 2v4" />
      <rect x="7" y="16" width="4" height="6" rx="1" fill="currentColor" />
    </svg>
  );
}

export default function Services() {
  const services = [
    {
      id: 'web-design',
      title: 'Web Design',
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      description: "I am a professional web designer with 5+ years of experience. I have delivered more than 40+ websites for my clients. You can hire me to design your personal, business, or creative portfolio template. I guarantee 100% client satisfaction.",
      featured: false,
    },
    {
      id: 'web-development',
      title: 'Web Development',
      icon: <Code2 className="w-12 h-12 text-cyan-500" />,
      description: "I am a modern frontend & full-stack web developer. I build high-performance web applications using React.js, Next.js, Tailwind CSS, and custom WordPress. Hire me to build your fast, responsive, and scalable website.",
      featured: true, // Center highlighted card with cyan glowing border
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      icon: <PaintRollerIcon className="w-12 h-12 text-cyan-500" />,
      description: "I am an experienced UI/UX and visual designer. I create user-centric interfaces, Figma designs to code, logos, and digital branding assets. You can hire me to craft modern visuals that elevate your company's online presence.",
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Title matching reference */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            My <span className="text-cyan-500 font-black">Services</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* 3 Services Cards Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between text-center transition-all duration-300 relative ${
                service.featured
                  ? 'bg-gradient-to-b from-cyan-50/40 via-white to-white border-2 border-cyan-400 shadow-xl shadow-cyan-500/15 ring-4 ring-cyan-100/60 md:-translate-y-2'
                  : 'bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-cyan-300'
              }`}
            >
              {/* Featured Badge for center card */}
              {service.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-400 text-slate-900 text-[11px] font-black uppercase tracking-wider shadow-sm">
                  Most Popular
                </div>
              )}

              {/* Card Top: Icon & Title */}
              <div className="space-y-5">
                <div className="flex justify-center items-center">
                  <div className="p-4 rounded-2xl bg-cyan-50/80 border border-cyan-100 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-cyan-600 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Card Bottom: Pill Button */}
              <div className="pt-8 mt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  className={`inline-block w-full py-3 px-6 rounded-full font-extrabold text-sm tracking-wide transition-all duration-200 active:scale-95 ${
                    service.featured
                      ? 'bg-cyan-400 hover:bg-cyan-500 text-slate-900 shadow-md shadow-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/40'
                      : 'bg-slate-100 hover:bg-cyan-500 hover:text-slate-900 text-slate-800 border border-slate-200 shadow-xs'
                  }`}
                >
                  Hire Me
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
