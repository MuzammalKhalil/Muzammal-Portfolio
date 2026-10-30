import React from 'react';
import { Globe, Code2, LayoutTemplate, Terminal, Zap, Layers } from 'lucide-react';

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
      id: 'react-nextjs',
      title: 'React.js & Next.js Development',
      badge: 'Modern Web Apps',
      icon: <Code2 className="w-12 h-12 text-cyan-500" />,
      description: "Building fast, dynamic single-page web applications using React.js and Next.js. State management, REST APIs, responsive layouts with Tailwind CSS, and sub-second performance.",
      featured: true, // Center highlighted card with cyan glowing border
    },
    {
      id: 'wordpress-wpbakery',
      title: 'WordPress & WPBakery',
      badge: 'CMS & Themes',
      icon: <LayoutTemplate className="w-12 h-12 text-cyan-500" />,
      description: "Custom WordPress website development, tailored WPBakery visual modules, Elementor setups, and WooCommerce integration. Delivering client-friendly sites that are easy to manage.",
      featured: false,
    },
    {
      id: 'wix-studio',
      title: 'Wix & Wix Studio Design',
      badge: 'Visual Builders',
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      description: "Crafting modern, high-converting business websites on Wix & Wix Studio. Custom responsive breakpoints, interactive animations, lead generation forms, and SEO optimization.",
      featured: false,
    },
    {
      id: 'frontend-core',
      title: 'Frontend Development (HTML, CSS, JS)',
      badge: 'Semantic & Clean',
      icon: <Terminal className="w-12 h-12 text-cyan-500" />,
      description: "Writing pristine, semantic HTML5, modern CSS3/SCSS, and vanilla ES6+ JavaScript. Clean code architectures adhering strictly to modern standards and cross-browser reliability.",
      featured: false,
    },
    {
      id: 'figma-to-code',
      title: 'Figma to Pixel-Perfect Code',
      badge: '100% Responsive',
      icon: <PaintRollerIcon className="w-12 h-12 text-cyan-500" />,
      description: "Converting Figma, Adobe XD, and Photoshop designs into clean, responsive Tailwind CSS or CSS3 code. 100% mobile, tablet, and desktop responsive with zero layout shifts.",
      featured: true, // Highlighted card
    },
    {
      id: 'speed-maintenance',
      title: 'Speed Optimization & Bug Fixing',
      badge: 'Core Web Vitals',
      icon: <Zap className="w-12 h-12 text-cyan-500" />,
      description: "Optimizing website performance to achieve 90+ Google Lighthouse scores. Troubleshooting CSS/JS bugs, plugin conflicts, image compression, and continuous site maintenance.",
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
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            High-impact web engineering and design services backed by 5+ years of commercial expertise.
          </p>
        </div>

        {/* 6 Services Cards Grid in 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between text-center transition-all duration-300 relative ${
                service.featured
                  ? 'bg-gradient-to-b from-cyan-50/40 via-white to-white border-2 border-cyan-400 shadow-xl shadow-cyan-500/15 ring-4 ring-cyan-100/60 lg:-translate-y-2'
                  : 'bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-cyan-300'
              }`}
            >
              {/* Highlight Tag */}
              {service.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-400 text-slate-900 text-[11px] font-black uppercase tracking-wider shadow-sm">
                  {service.badge}
                </div>
              )}

              {/* Card Top: Icon & Title */}
              <div className="space-y-5">
                <div className="flex justify-center items-center">
                  <div className="p-4 rounded-2xl bg-cyan-50/80 border border-cyan-100 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    {service.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-cyan-600 tracking-tight">
                    {service.title}
                  </h3>
                  {!service.featured && (
                    <span className="inline-block mt-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {service.badge}
                    </span>
                  )}
                </div>

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
