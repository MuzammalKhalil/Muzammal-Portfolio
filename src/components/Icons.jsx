import React from 'react';

export function GithubIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function TwitterIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

// Circular Badge Icons for Skills Section matching reference image
export function HtmlBadgeIcon({ className = "w-12 h-12" }) {
  return (
    <div className={`${className} rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 p-1 flex items-center justify-center border-2 border-white shadow-md shadow-orange-500/20`}>
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.9 4.3H4.6l.4 4.5h13.9l-.5 5.5-4.4 1.2-4.4-1.2-.3-2.9h-3l.5 5.2 7.2 2 7.2-2 1-11.3-.2-1h-4.3z" />
      </svg>
    </div>
  );
}

export function CssBadgeIcon({ className = "w-12 h-12" }) {
  return (
    <div className={`${className} rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 p-1 flex items-center justify-center border-2 border-white shadow-md shadow-blue-500/20`}>
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.6 4.3H4.9l.3 3.6h13.5l-.4 4.5-4.3 1.2-4.3-1.2-.2-2.3H6.6l.4 4.6 5 1.4 5-1.4.7-7.8.2-2.6H19.1z" />
      </svg>
    </div>
  );
}

export function TailwindBadgeIcon({ className = "w-12 h-12" }) {
  return (
    <div className={`${className} rounded-full bg-gradient-to-tr from-cyan-600 via-sky-500 to-purple-500 p-1 flex items-center justify-center border-2 border-white shadow-md shadow-cyan-500/20`}>
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    </div>
  );
}

export function JsBadgeIcon({ className = "w-12 h-12" }) {
  return (
    <div className={`${className} rounded-full bg-amber-400 p-1 flex items-center justify-center border-2 border-white shadow-md shadow-amber-400/20 font-black text-slate-900 text-lg tracking-tighter`}>
      JS
    </div>
  );
}

export function ReactBadgeIcon({ className = "w-12 h-12" }) {
  return (
    <div className={`${className} rounded-full bg-slate-900 p-1 flex items-center justify-center border-2 border-white shadow-md shadow-slate-900/20`}>
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-7 h-7">
        <circle cx="0" cy="0" r="2.05" fill="#00d8ff"/>
        <g stroke="#00d8ff" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    </div>
  );
}

export function FigmaBadgeIcon({ className = "w-12 h-12" }) {
  return (
    <div className={`${className} rounded-full bg-slate-900 p-1.5 flex items-center justify-center border-2 border-white shadow-md shadow-slate-900/20`}>
      <svg viewBox="0 0 38 57" className="w-5 h-7">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
      </svg>
    </div>
  );
}

export function PhotoshopBadgeIcon({ className = "w-12 h-12" }) {
  return (
    <div className={`${className} rounded-full bg-slate-900 p-1 flex items-center justify-center border-2 border-white shadow-md shadow-blue-500/20 font-black text-[#31A8FF] text-lg`}>
      Ps
    </div>
  );
}

export function IllustratorBadgeIcon({ className = "w-12 h-12" }) {
  return (
    <div className={`${className} rounded-full bg-slate-900 p-1 flex items-center justify-center border-2 border-white shadow-md shadow-amber-500/20 font-black text-[#FF9A00] text-lg`}>
      Ai
    </div>
  );
}

export function NextjsBadgeIcon({ className = "w-12 h-12" }) {
  return (
    <div className={`${className} rounded-full bg-black p-1.5 flex items-center justify-center border-2 border-white shadow-md font-black text-white text-base`}>
      N
    </div>
  );
}

export function WordPressBadgeIcon({ className = "w-12 h-12" }) {
  return (
    <div className={`${className} rounded-full bg-[#21759B] p-1 flex items-center justify-center border-2 border-white shadow-md font-bold text-white text-lg`}>
      W
    </div>
  );
}
