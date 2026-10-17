import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Icon } from './Icons';

export const Projects = () => {
  const categories = ['All', 'AI / Machine Learning', 'Systems / Full Stack', 'Compiler Design', 'Full Stack', 'Frontend'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('solution'); // 'problem', 'solution', 'challenges', 'code'

  const flagshipProject = projectsData.find((p) => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => p.id !== flagshipProject?.id);

  const filteredSecondary = activeCategory === 'All'
    ? secondaryProjects
    : secondaryProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative">
      {/* Background ambient light */}
      <div className="ambient-orb-purple top-[40%] right-[-10%]" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-label">// WORKS & CASE STUDIES</div>
          <h2 className="section-title">
            Featured <span className="bg-gradient-cyber">Engineering</span> Projects
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            Production systems, deep-learning pipelines, compilers, and interactive developer tooling engineered for scale, speed, and reliability.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-purple-400 text-white border border-white/20 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                    : 'bg-white/[0.03] text-neutral-400 border border-white/5 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ============================================================
             FLAGSHIP PROJECT SPOTLIGHT (Deep Dive Case Study)
             ============================================================ */}
        {flagshipProject && (activeCategory === 'All' || activeCategory === flagshipProject.category) && (
          <div className="mb-14">
            <div className="glass-card p-6 sm:p-9 border-purple-500/30 shadow-[0_0_40px_rgba(124,58,237,0.15)] relative overflow-hidden">
              
              {/* Top Banner & Telemetry Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="tag tag-purple">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    <span>FLAGSHIP SYSTEM</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">{flagshipProject.category}</span>
                </div>

                {/* Telemetry Stats */}
                {flagshipProject.stats && (
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                      <span className="text-purple-400 font-bold mr-1">INFERENCES:</span>
                      {flagshipProject.stats.inferences}
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                      <span className="text-orange-400 font-bold mr-1">LATENCY:</span>
                      {flagshipProject.stats.latency}
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                      <span className="text-green-400 font-bold mr-1">ACCURACY:</span>
                      {flagshipProject.stats.accuracy}
                    </div>
                  </div>
                )}
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-12 gap-8 mt-6 items-start">
                
                {/* Left Col: Titles, Description & Case Study Tabs */}
                <div className="lg:col-span-7 flex flex-col gap-5">
                  <div>
                    <h3 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
                      {flagshipProject.title}
                    </h3>
                    <p className="text-sm font-mono text-orange-400 mt-1">
                      {flagshipProject.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {flagshipProject.longDescription || flagshipProject.description}
                  </p>

                  {/* Case Study Tab Navigation */}
                  <div className="flex items-center gap-2 pt-2 border-b border-white/5 pb-2">
                    {[
                      { id: 'solution', label: 'Solution Architecture' },
                      { id: 'problem', label: 'Problem' },
                      { id: 'challenges', label: 'Challenges & Learnings' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                          activeTab === tab.id
                            ? 'bg-white/10 text-white border border-purple-500/40 shadow-sm'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Contents */}
                  <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed min-h-[90px] bg-white/[0.02] border border-white/5 rounded-xl p-4">
                    {activeTab === 'solution' && (
                      <div>
                        <span className="text-purple-400 font-mono font-bold block mb-1">// ARCHITECTURE & SOLUTION:</span>
                        {flagshipProject.solution}
                      </div>
                    )}
                    {activeTab === 'problem' && (
                      <div>
                        <span className="text-orange-400 font-mono font-bold block mb-1">// PROBLEM STATEMENT:</span>
                        {flagshipProject.problem}
                      </div>
                    )}
                    {activeTab === 'challenges' && (
                      <div>
                        <span className="text-green-400 font-mono font-bold block mb-1">// CORE CHALLENGES OVERCOME:</span>
                        <ul className="list-disc list-inside space-y-1 text-neutral-300">
                          {flagshipProject.challenges?.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {flagshipProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href={flagshipProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <span>Live Deployment</span>
                      <Icon name="ExternalLink" size={15} />
                    </a>

                    <a
                      href={flagshipProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <Icon name="Github" size={15} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Right Col: Interactive Mock Code / Pipeline Window */}
                <div className="lg:col-span-5">
                  <div className="mock-code-window shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                    <div className="mock-code-header">
                      <div className="window-dots">
                        <span className="window-dot bg-red-500/80" />
                        <span className="window-dot bg-yellow-500/80" />
                        <span className="window-dot bg-green-500/80" />
                      </div>
                      <span className="text-neutral-400 text-[11px]">
                        {flagshipProject.mockFileName || 'pipeline.py'}
                      </span>
                      <span className="text-[10px] text-purple-400 font-bold">PYTHON 3.11</span>
                    </div>

                    <div className="p-4 overflow-x-auto text-[11px] sm:text-xs font-mono text-neutral-300 bg-[#080808] leading-relaxed">
                      {flagshipProject.mockCodeLines?.map((line, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="text-neutral-600 select-none w-4 text-right">{i + 1}</span>
                          <span className="text-purple-300">{line}</span>
                        </div>
                      ))}
                    </div>

                    <div className="px-4 py-2 bg-[#0F0F0F] border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                      <span>STATUS: INFERENCE ONLINE</span>
                      <span className="text-orange-400 font-bold">SUB-100MS</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ============================================================
             SECONDARY PROJECTS GRID
             ============================================================ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSecondary.map((proj) => (
            <div
              key={proj.id}
              className="glass-card p-6 flex flex-col justify-between group hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300"
            >
              <div>
                {/* Card Top: Category & Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                    {proj.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white hover:border-white/30 transition-all"
                      aria-label="GitHub Repository"
                    >
                      <Icon name="Github" size={14} />
                    </a>
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                      aria-label="Live Demo"
                    >
                      <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h4 className="font-heading font-bold text-xl text-white group-hover:text-purple-300 transition-colors">
                  {proj.title}
                </h4>
                <p className="text-xs font-mono text-orange-400 mt-1 mb-3">
                  {proj.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Optional Mock Code Preview */}
                {proj.mockCodeLines && (
                  <div className="mb-5 mock-code-window text-[10px] bg-[#0A0A0A]">
                    <div className="mock-code-header py-1 px-3">
                      <span className="text-[9px] text-neutral-400">{proj.mockFileName}</span>
                    </div>
                    <div className="p-2.5 font-mono text-neutral-300">
                      {proj.mockCodeLines.slice(0, 3).map((l, i) => (
                        <div key={i} className="truncate text-purple-300/90">{l}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom: Tech Tags */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/5 text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
