import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icon } from './Icons';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background ambient light */}
      <div className="ambient-orb-purple bottom-[-10%] left-[20%]" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label">// INITIATE CONTACT</div>
          <h2 className="section-title">
            Let's Build Something <span className="bg-gradient-cyber">Exceptional</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            Whether you have an engineering opportunity, a collaborative AI project, or want to discuss systems architecture, my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Email Card with Copy Trigger */}
            <div className="glass-card p-6 group hover:border-purple-500/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Icon name="Mail" size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Direct Email</h4>
                    <span className="text-[10px] font-mono text-neutral-400">Response within 24 hours</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-purple-500/40 transition-colors"
                  title="Copy email to clipboard"
                >
                  <Icon name={copied ? 'Check' : 'Copy'} size={15} color={copied ? '#4ADE80' : 'currentColor'} />
                </button>
              </div>

              <div className="mt-2 text-xs font-mono text-neutral-300 bg-[#0A0A0A] border border-white/5 rounded-lg p-2.5 break-all">
                {personalInfo.email}
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Icon name="MapPin" size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Base Location</h4>
                  <span className="text-[10px] font-mono text-neutral-400">{personalInfo.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-neutral-300 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1.5 text-neutral-400">
                  <Icon name="Clock" size={13} />
                  TIMEZONE:
                </span>
                <span className="text-orange-400 font-bold">{personalInfo.timezone}</span>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="glass-card p-5 border-green-500/20 bg-green-500/[0.02]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                <div className="text-xs font-mono">
                  <div className="text-green-400 font-bold">STATUS: AVAILABLE</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Open for Internships & Engineering Roles</div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 flex items-center justify-center sm:justify-start gap-2.5 hover:border-purple-500/40 text-xs font-mono text-neutral-300 hover:text-white transition-all"
              >
                <Icon name="Github" size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 flex items-center justify-center sm:justify-start gap-2.5 hover:border-orange-500/40 text-xs font-mono text-neutral-300 hover:text-white transition-all"
              >
                <Icon name="Linkedin" size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 flex items-center justify-center sm:justify-start gap-2.5 hover:border-[#FFA116]/40 text-xs font-mono text-neutral-300 hover:text-white transition-all"
              >
                <Icon name="LeetCode" size={16} color="#FFA116" />
                <span>LeetCode</span>
              </a>
            </div>

          </div>

          {/* Right Column: Terminal Styled Contact Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 border-white/10 relative">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2 font-mono text-xs text-orange-400 font-bold">
                  <Icon name="Send" size={14} />
                  <span>DISPATCH MESSAGE</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">ENCRYPTED // TLS</span>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/40 flex items-center justify-center text-green-400">
                    <Icon name="Check" size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white">Transmission Successful</h4>
                  <p className="text-xs font-mono text-neutral-400 max-w-sm">
                    Thank you for reaching out. Your message has been dispatched successfully. I will get back to you shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                        // YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white font-mono placeholder:text-neutral-600 focus:outline-none focus:border-purple-500/60 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                        // EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white font-mono placeholder:text-neutral-600 focus:outline-none focus:border-purple-500/60 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                      // SUBJECT
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Engineering Role / Project Collaboration"
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white font-mono placeholder:text-neutral-600 focus:outline-none focus:border-purple-500/60 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                      // TRANSMISSION PAYLOAD (MESSAGE)
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share project parameters, specifications, or inquiry..."
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-4 text-xs sm:text-sm text-white font-mono placeholder:text-neutral-600 focus:outline-none focus:border-purple-500/60 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-xs sm:text-sm py-3 mt-2"
                  >
                    <Icon name={loading ? 'Activity' : 'Send'} size={16} />
                    <span>{loading ? 'Transmitting Payload...' : 'Send Transmission'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
