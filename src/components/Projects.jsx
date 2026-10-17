import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/portfolioData';
import { Icon } from './Icons';

// Modal component for deep dive with interactive slider, key points, categorized tech stack & glossary
const ProjectModal = ({ project, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('slider'); // 'slider', 'stack', 'keywords', 'code'
  const [activeKeyword, setActiveKeyword] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (activeTab === 'slider') {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, activeTab]);

  if (!project) return null;

  const slides = project.slides || [];
  const slideCount = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#0D0D0E] border border-white/15 rounded-2xl shadow-[0_0_60px_rgba(168,85,247,0.25)] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121215]/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.color || '#A855F7' }} />
            <div>
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                {project.category} // PROJECT DOSSIER
              </span>
              <h3 className="font-heading font-black text-lg sm:text-xl text-white">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <Icon name="X" size={16} />
          </button>
        </div>

        {/* Navigation Tabs inside Modal */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-white/5 bg-[#0A0A0C] overflow-x-auto">
          {[
            { id: 'slider', label: `Step-by-Step Points (${slideCount})`, icon: 'Layers' },
            { id: 'stack', label: 'Categorized Tech Stack', icon: 'Cpu' },
            { id: 'keywords', label: 'Key Concepts & Definitions', icon: 'HelpCircle' },
            ...(project.mockCodeLines ? [{ id: 'code', label: 'Code Snapshot', icon: 'Terminal' }] : [])
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600/30 to-orange-500/30 text-white border border-purple-500/50 shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon name={tab.icon} size={13} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          
          {/* TAB 1: INTERACTIVE STEP-BY-STEP SLIDER */}
          {activeTab === 'slider' && slides.length > 0 && (
            <div className="flex flex-col gap-5">
              
              {/* Slider Progress Bar & Dots */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                  {slides.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx
                          ? 'w-8 bg-gradient-to-r from-purple-500 to-orange-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      title={`Go to point ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <span>POINT</span>
                  <span className="text-orange-400 font-bold text-sm">
                    {currentSlide + 1}
                  </span>
                  <span>/ {slideCount}</span>
                </div>
              </div>

              {/* Active Slide Card */}
              <div className="relative p-6 sm:p-7 rounded-xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 shadow-inner min-h-[220px] flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-purple-500/20 border border-purple-500/30 text-purple-300">
                      STEP {slides[currentSlide].step}
                    </span>
                    <span className="text-[11px] font-mono text-orange-400 font-semibold">
                      {slides[currentSlide].subtitle}
                    </span>
                  </div>

                  <h4 className="font-heading font-black text-xl sm:text-2xl text-white mb-3">
                    {slides[currentSlide].title}
                  </h4>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                </div>

                {slides[currentSlide].highlight && (
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <span className="text-purple-400 font-bold">// ARCHITECTURAL IMPACT:</span>
                    <span className="text-white font-medium bg-white/5 px-2.5 py-1 rounded border border-white/10">
                      {slides[currentSlide].highlight}
                    </span>
                  </div>
                )}
              </div>

              {/* Controls: Prev / Next Buttons & Keyboard hint */}
              <div className="flex items-center justify-between pt-2">
                <span className="hidden sm:inline text-[11px] font-mono text-neutral-500">
                  Use ← Left / Right → keys or click to cycle points
                </span>

                <div className="flex items-center gap-3 ml-auto">
                  <button
                    onClick={prevSlide}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all font-mono text-xs font-bold cursor-pointer"
                  >
                    <Icon name="ArrowLeft" size={14} />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={nextSlide}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-purple-500/40 bg-purple-500/20 text-purple-200 hover:text-white hover:bg-purple-500/30 transition-all font-mono text-xs font-bold shadow-[0_0_15px_rgba(168,85,247,0.25)] cursor-pointer"
                  >
                    <span>Next Point</span>
                    <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: CATEGORIZED TECH STACK */}
          {activeTab === 'stack' && (
            <div className="flex flex-col gap-5">
              <div className="text-xs font-mono text-neutral-400">
                // SYSTEM STACK DECONSTRUCTION (ALL RESUME-VERIFIED TECHNOLOGIES)
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {project.techStackCategorized && Object.entries(project.techStackCategorized).map(([category, list]) => (
                  <div key={category} className="glass-card p-4 border-white/10 bg-[#101013]">
                    <span className="text-[11px] font-mono font-bold text-orange-400 uppercase tracking-wider block mb-3">
                      // {category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {list.map((techItem) => (
                        <span
                          key={techItem}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-neutral-200 hover:border-purple-500/40 hover:text-white transition-colors"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: KEY CONCEPTS & DEFINITIONS (CLICKABLE GLOSSARY) */}
          {activeTab === 'keywords' && (
            <div className="flex flex-col gap-4">
              <div className="text-xs font-mono text-neutral-400">
                // TECHNICAL KEYWORDS GLOSSARY — CLICK ANY TERM FOR DETAILED CONTEXT
              </div>

              <div className="grid gap-3">
                {project.keywords?.map((item, idx) => {
                  const isExpanded = activeKeyword === idx;
                  return (
                    <div
                      key={item.term}
                      onClick={() => setActiveKeyword(isExpanded ? null : idx)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isExpanded
                          ? 'border-purple-500/50 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.15)]'
                          : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-purple-400">{item.term}</span>
                          <span className="text-[10px] font-mono text-neutral-500">// KEYWORD</span>
                        </div>
                        <Icon name={isExpanded ? 'ChevronUp' : 'ChevronDown'} size={14} color="#A855F7" />
                      </div>
                      
                      <div className={`mt-2 text-xs sm:text-sm text-neutral-300 font-mono leading-relaxed ${isExpanded ? 'block' : 'line-clamp-1 text-neutral-400'}`}>
                        {item.definition}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: MOCK CODE WINDOW */}
          {activeTab === 'code' && project.mockCodeLines && (
            <div className="mock-code-window shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              <div className="mock-code-header">
                <div className="window-dots">
                  <span className="window-dot bg-red-500/80" />
                  <span className="window-dot bg-yellow-500/80" />
                  <span className="window-dot bg-green-500/80" />
                </div>
                <span className="text-neutral-400 text-xs font-mono">
                  {project.mockFileName}
                </span>
                <span className="text-[10px] text-purple-400 font-bold font-mono">SOURCE EXCERPT</span>
              </div>
              <div className="p-4 overflow-x-auto text-xs font-mono text-neutral-300 bg-[#080808] leading-relaxed">
                {project.mockCodeLines.map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-neutral-600 select-none w-5 text-right">{i + 1}</span>
                    <span className="text-purple-300">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#121215]/80">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-mono font-bold text-neutral-300 hover:text-white hover:border-white/30 transition-all"
            >
              <Icon name="Github" size={14} />
              <span>GitHub Repo</span>
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-purple-500/40 bg-purple-500/10 text-xs font-mono font-bold text-purple-300 hover:text-white hover:bg-purple-500/20 transition-all"
              >
                <Icon name="ExternalLink" size={14} />
                <span>Visit Project</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-white/10 text-xs font-mono font-bold text-neutral-400 hover:text-white transition-all cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding relative">
      {/* Background ambient light */}
      <div className="ambient-orb-purple top-[40%] right-[-10%]" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-label">// PROJECTS & CASE STUDIES</div>
          <h2 className="section-title">
            Engineered <span className="bg-gradient-cyber">Software Systems</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            Click on any project to launch its interactive slider dossier with step-by-step point breakdown, verified architecture, categorized tech stacks, and keyword glossaries.
          </p>
        </div>

        {/* 3 Core Projects Display Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="glass-card p-6 flex flex-col justify-between group hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Subtle accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Card Top: Category & Action */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                    {proj.category}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400 group-hover:text-purple-300 font-bold">
                    <span>EXPLORE</span>
                    <Icon name="ArrowRight" size={13} />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-heading font-black text-xl text-white group-hover:text-purple-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-orange-400 mt-1 mb-3">
                  {proj.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Interactive Points Pill Indicator */}
                <div className="mb-4 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5 text-purple-300">
                    <Icon name="Layers" size={13} />
                    <span>{proj.slides?.length || 3} Detailed Steps</span>
                  </span>
                  <span className="text-orange-400 font-semibold">Click to slide →</span>
                </div>
              </div>

              {/* Bottom: Tech Stack Tags */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {proj.tech.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/5 text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
                {proj.tech.length > 5 && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-purple-400">
                    +{proj.tech.length - 5} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal Slider & Dossier */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
