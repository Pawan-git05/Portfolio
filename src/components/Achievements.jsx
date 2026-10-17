import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { Icon } from './Icons';

export const Achievements = () => {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden bg-[#0A0A0A]/40">
      {/* Background ambient light */}
      <div className="ambient-orb-orange top-[20%] right-[-10%]" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-label">// TELEMETRY & HONORS</div>
          <h2 className="section-title">
            Achievements & <span className="bg-gradient-orange">Milestones</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            Key recognitions, competitive programming rankings, hackathon podium finishes, and technical accomplishments.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between group hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono font-bold"
                    style={{
                      background: `${item.color}15`,
                      borderColor: `${item.color}35`,
                      borderWidth: '1px',
                      color: item.color
                    }}
                  >
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">{item.date}</span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-orange-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <span className="text-[11px] font-mono text-neutral-400 block uppercase tracking-wider mb-3">
                  // {item.category}
                </span>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>STATUS: VERIFIED</span>
                <span className="text-orange-400 font-bold">RECOGNITION</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
