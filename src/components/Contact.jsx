import React, { useState } from 'react';
import { Mail, PhoneCall, MapPin, CheckCircle2 } from 'lucide-react';
import { FacebookIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    subject: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: '',
  });

  const [copiedInfo, setCopiedInfo] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedInfo(type);
    setTimeout(() => setCopiedInfo(''), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, loading: false, error: 'Please fill in the required fields (First Name, Email, and Message).' });
      return;
    }

    setFormStatus({ submitted: false, loading: true, error: '' });

    // Simulate reliable form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        loading: false,
        error: '',
      });
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        subject: '',
        email: '',
        message: '',
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Contact <span className="text-cyan-500 font-black">Me</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-6xl mx-auto text-left">
          
          {/* Left Column: Brand, Bio & Horizontal Icons */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            
            {/* Brand Logo & Name */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-md shadow-cyan-500/20 shrink-0">
                M
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-slate-900 block font-sans">
                  {personalInfo.name}
                </span>
                <span className="text-xs font-bold text-cyan-600 tracking-widest uppercase block -mt-0.5">
                  Frontend & Web Specialist
                </span>
              </div>
            </div>

            {/* Narrative text */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              I am a professional Web designer & Frontend Developer. I have delivered more than 45+ web projects for my clients. You can hire me for your personal, business or other website project. You can trust me, I complete your work with your full satisfaction.
            </p>

            {/* Horizontal Contact & Social Icons (Responsive Flex-Wrap) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {/* Phone */}
              <a
                href="tel:+923000000000"
                aria-label="Direct Phone"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 hover:bg-cyan-500 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-md hover:shadow-cyan-500/25 active:scale-95"
                title="Direct Phone / WhatsApp"
              >
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Direct Email"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 hover:bg-cyan-500 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-md hover:shadow-cyan-500/25 active:scale-95"
                title="Send an Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 hover:bg-cyan-500 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-md hover:shadow-cyan-500/25 active:scale-95"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </a>

              {/* Location */}
              <button
                onClick={() => handleCopy(personalInfo.location, 'location')}
                aria-label="Location"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 hover:bg-cyan-500 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-md hover:shadow-cyan-500/25 active:scale-95"
                title="Click to copy location"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 hover:bg-cyan-500 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-md hover:shadow-cyan-500/25 active:scale-95"
                title="Facebook Profile"
              >
                <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </a>
            </div>

            {copiedInfo && (
              <p className="text-xs font-bold text-emerald-600 animate-in fade-in">
                ✓ Location copied to clipboard!
              </p>
            )}

            {/* Quick Status Badge */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-cyan-50/70 border border-cyan-100 text-xs font-semibold text-slate-700 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Hire • Quick 24h Response Time</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-5 sm:p-8 md:p-9 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              
              {formStatus.submitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 text-center animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg sm:text-xl font-black">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you for reaching out, Muzammal has received your details and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormStatus({ submitted: false, loading: false, error: '' })}
                    className="mt-3 inline-block px-5 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-sm hover:bg-emerald-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {formStatus.error && (
                    <div className="p-3.5 rounded-xl bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                      {formStatus.error}
                    </div>
                  )}

                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name *"
                      required
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 text-xs sm:text-sm transition-all"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 text-xs sm:text-sm transition-all"
                    />
                  </div>

                  {/* Row 2: Phone & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 text-xs sm:text-sm transition-all"
                    />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 text-xs sm:text-sm transition-all"
                    />
                  </div>

                  {/* Row 3: Email (Full width) */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      required
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 text-xs sm:text-sm transition-all"
                    />
                  </div>

                  {/* Row 4: Message (Textarea) */}
                  <div>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message *"
                      required
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 text-xs sm:text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Row 5: Full Width Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-900 text-white font-black text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 active:scale-98 disabled:opacity-50"
                  >
                    {formStatus.loading ? 'Sending Message...' : 'Submit'}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
