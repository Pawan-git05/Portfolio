import React from 'react';
import { educationData } from '../data/portfolioData';
import { Icon } from './Icons';

export const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      {/* Background ambient light */}
      <div className="ambient-orb-purple top-[20%] right-[-10%]" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-label">// ACADEMIC FOUNDATION</div>
          <h2 className="section-title">
            Education & <span className="bg-gradient-purple">Credentials</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            Formal computer science engineering education paired with deep core coursework in algorithms, operating systems, and intelligent machine systems.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 relative overflow-hidden group hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300"
            >
              {/* Top Row: Degree, Years & Grade Badge */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mt-1">
                    <Icon name="GraduationCap" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-purple-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-mono text-neutral-400 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Score & Duration Badges */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                  {(edu.cgpa || edu.score) && (
                    <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full">
                      {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Score: ${edu.score}`}
                    </span>
                  )}
                </div>
              </div>

              {/* Coursework Tags */}
              {edu.courses && (
                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mb-3">
                    // KEY RELEVANT COURSEWORK:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/10 text-neutral-300 hover:border-purple-500/30 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Academic Highlights */}
              {edu.highlights && (
                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mb-2">
                    // KEY HIGHLIGHTS:
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-text-secondary">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
