import React from 'react';
import { Mail, Sparkles, Code2, Layers, Cpu } from 'lucide-react';
import { FacebookIcon, LinkedinIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/25 to-slate-100">
      
      {/* Mountain Landscape Background Silhouette (Light Theme Mandate) */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none z-0 opacity-70">
        <svg
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto object-cover object-bottom"
          preserveAspectRatio="none"
        >
          {/* Distant Mountains */}
          <path
            d="M0 240L140 180L280 230L440 140L580 210L720 120L880 220L1020 150L1160 210L1300 130L1440 220V380H0V240Z"
            fill="#E2E8F0"
            fillOpacity="0.45"
          />
          {/* Midground Mountain Peaks */}
          <path
            d="M0 270L160 210L320 260L480 180L620 250L760 160L920 250L1080 190L1220 260L1360 170L1440 240V380H0V270Z"
            fill="#CBD5E1"
            fillOpacity="0.55"
          />
          {/* Foreground Sharp Ridges */}
          <path
            d="M0 310L180 250L360 300L540 220L700 290L860 210L1020 280L1180 230L1320 290L1440 250V380H0V310Z"
            fill="#94A3B8"
            fillOpacity="0.35"
          />
        </svg>
      </div>

      {/* Atmospheric Mist Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100 via-slate-100/60 to-transparent pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle, Description, Socials & Buttons */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Main Name in Bold Uppercase */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-wider uppercase font-sans">
              {personalInfo.name.toUpperCase()}
            </h1>

            {/* Subtitle with Cyan Highlight */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
              And I'm a <span className="text-cyan-500 font-black tracking-wide inline-block">Frontend Developer</span>
            </h2>

            {/* Concise Value & Experience Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              I'm a professional web developer with strong skills in HTML, CSS, JavaScript, Tailwind, React, Next.js & WordPress. I have been working in this field for almost 5 years, and all of my projects are completed successfully with 100% client satisfaction.
            </p>

            {/* Social Media Circular Icon Buttons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="w-10 h-10 rounded-full border-2 border-cyan-400 bg-white/80 backdrop-blur-xs text-cyan-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center transition-all duration-200 active:scale-95"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full border-2 border-cyan-400 bg-white/80 backdrop-blur-xs text-cyan-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center transition-all duration-200 active:scale-95"
              >
                <LinkedinIcon className="w-4 h-4 fill-current" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full border-2 border-cyan-400 bg-white/80 backdrop-blur-xs text-cyan-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center transition-all duration-200 active:scale-95"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              {/* Mail */}
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Direct Email"
                className="w-10 h-10 rounded-full border-2 border-cyan-400 bg-white/80 backdrop-blur-xs text-cyan-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Pill CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Primary Pill Button: About Myself */}
              <a
                href="#about"
                className="px-7 py-3 rounded-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold text-sm tracking-wide shadow-md shadow-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95"
              >
                About Myself
              </a>

              {/* Secondary Pill Button: Hire Me */}
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold text-sm tracking-wide shadow-md shadow-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95"
              >
                Hire Me
              </a>
            </div>

          </div>

          {/* Right Column: 3D Developer Character in Glowing Hexagon */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              
              {/* Floating 3D Tech Badges Orbiting Around Hexagon */}
              <div className="absolute -top-4 -left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-cyan-200 shadow-lg shadow-cyan-500/10 flex items-center gap-2 text-xs font-bold text-slate-800 animate-float">
                <span className="p-1 rounded-lg bg-blue-50 text-blue-600">⚛️</span>
                <span>React & Next.js</span>
              </div>

              <div className="absolute -top-2 -right-4 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-cyan-200 shadow-lg shadow-cyan-500/10 flex items-center gap-2 text-xs font-bold text-slate-800 animate-float-reverse">
                <span className="p-1 rounded-lg bg-cyan-50 text-cyan-600">🎨</span>
                <span>Tailwind 3D</span>
              </div>

              <div className="absolute top-1/2 -left-10 z-20 hidden sm:flex bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-cyan-200 shadow-lg shadow-cyan-500/10 items-center gap-2 text-xs font-bold text-slate-800 animate-float">
                <span className="p-1 rounded-lg bg-amber-50 text-amber-600">⚡</span>
                <span>5+ Yrs Exp</span>
              </div>

              {/* Outer Glowing Hexagon Frame */}
              <div
                className="w-[280px] h-[320px] sm:w-[330px] sm:h-[380px] animate-pulse-glow transition-transform duration-500 group-hover:scale-105"
              >
                {/* Outer Cyan Border Hexagon */}
                <div
                  className="w-full h-full bg-gradient-to-b from-cyan-300 via-cyan-400 to-cyan-500 p-[5px]"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  {/* Inner Hexagon Container with 3D Character Asset */}
                  <div
                    className="w-full h-full bg-gradient-to-b from-cyan-400 via-sky-300 to-cyan-500 relative overflow-hidden flex items-center justify-center"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  >
                    {/* 3D Developer Asset (1024x1024 Ultra Sharp) */}
                    <img
                      src="/hero-3d-asset.png"
                      alt="3D Developer Asset"
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-115 transition-transform duration-500"
                    />

                    {/* Ambient Light Reflection */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cyan-600/30 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Floating Verified Badge at Bottom */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-cyan-200 shadow-md flex items-center gap-2 text-xs font-bold text-slate-800 whitespace-nowrap z-20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>5+ Years Experience • 100% Satisfaction</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
