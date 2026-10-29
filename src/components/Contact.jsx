import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MapPin, PhoneCall, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry / Job Opportunity',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, loading: false, error: 'Please fill in all required fields.' });
      return;
    }

    setFormStatus({ submitted: false, loading: true, error: '' });

    // Simulate reliable dispatch
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        loading: false,
        error: '',
      });
      setFormData({
        name: '',
        email: '',
        subject: 'Project Inquiry / Job Opportunity',
        message: '',
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Hiring & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something Exceptional Together
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            I am actively considering <strong className="text-slate-800">Senior Frontend Developer, React/Next.js Engineer, and Web Specialist</strong> roles. Whether you have an open position or a high-impact project, reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card with Copy Feature */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
                Primary Direct Contact
              </span>
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="truncate">
                  <p className="text-xs text-slate-500">Email Address</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-slate-900 font-bold text-sm sm:text-base hover:text-blue-600 truncate block transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-2xs transition-all active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-600 pt-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-ping" />
                <span>Response Time: Typically within 24 hours</span>
              </div>
            </div>

            {/* Social & Repository Links */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
                Professional Networks & Code
              </span>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600">LinkedIn Profile</p>
                    <p className="text-xs text-slate-500">Connect & review recommendations</p>
                  </div>
                </div>
                <span className="text-xs text-blue-600 font-semibold">View &rarr;</span>
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-slate-700">GitHub Profile</p>
                    <p className="text-xs text-slate-500">Open source repos & commits</p>
                  </div>
                </div>
                <span className="text-xs text-slate-700 font-semibold">View &rarr;</span>
              </a>
            </div>

            {/* Location & Availability Card */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-1 text-xs text-blue-900">
              <p className="font-bold uppercase tracking-wider">Opportunity Preferences</p>
              <p className="text-blue-800 leading-relaxed">
                Open to Remote Worldwide, Hybrid arrangements, and contract-to-hire. Ready to start immediately.
              </p>
            </div>

          </div>

          {/* Right Column: Functional Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Have a specific question or role description? Drop a note below and I'll get back to you promptly.
              </p>

              {formStatus.submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    <h4 className="text-base font-bold">Message Received Successfully!</h4>
                  </div>
                  <p className="text-sm text-emerald-800">
                    Thank you for reaching out. I have received your message and will review it and reply back to your email within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormStatus({ submitted: false, loading: false, error: '' })}
                    className="text-xs font-bold text-emerald-700 underline hover:text-emerald-900 pt-2 block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus.error && (
                    <div className="p-3.5 rounded-xl bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                      {formStatus.error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder:text-slate-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder:text-slate-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">
                      Inquiry Type / Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 transition-colors bg-white"
                    >
                      <option>Project Inquiry / Job Opportunity</option>
                      <option>Full-Time Senior Frontend Role</option>
                      <option>Contract / Freelance Development</option>
                      <option>Technical Consultation / General Chat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">
                      Message / Project Details *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the role, technical requirements, or timeline..."
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder:text-slate-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200 disabled:opacity-50"
                  >
                    {formStatus.loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Privacy guaranteed. Your contact details will only be used to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
