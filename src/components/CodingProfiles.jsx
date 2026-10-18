import React from 'react';
import { codingProfiles } from '../data/portfolioData';
import { Icon } from './Icons';

export const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="section-padding relative overflow-hidden bg-[#0A0A0A]/60">
      {/* Ambient background light */}
      <div className="ambient-orb-orange top-[30%] left-[-10%]" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-label">// TELEMETRY & ALGORITHMS</div>
          <h2 className="section-title">
            Coding Profiles & <span className="bg-gradient-cyber">Rankings</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            Continuous problem solving, algorithm design, and open-source contributions tracked across competitive platforms and development registries.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingProfiles.map((profile) => (
            <div
              key={profile.platform}
              className="glass-card p-6 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = profile.borderColor;
                e.currentTarget.style.boxShadow = `0 0 30px ${profile.bgColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Card Top: Platform Name, Username & External Link */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/[0.04] shadow-sm"
                      style={{ color: profile.color }}
                    >
                      <Icon name={profile.platform} size={15} color={profile.color} />
                    </span>
                    <h3 className="font-heading font-bold text-lg text-white">
                      {profile.platform}
                    </h3>
                  </div>

                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white transition-colors"
                    aria-label={`View ${profile.platform} Profile`}
                  >
                    <Icon name="ExternalLink" size={14} />
                  </a>
                </div>

                {/* Handle Tag */}
                <div className="mb-4">
                  <span className="text-xs font-mono text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                    @{profile.username}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed mb-5">
                  {profile.description}
                </p>

                {/* Platform Specific Telemetry Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                  {Object.entries(profile.stats).map(([k, val]) => (
                    <div
                      key={k}
                      className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex flex-col items-center text-center"
                    >
                      <span className="text-[10px] font-mono text-neutral-500 uppercase">
                        {k}
                      </span>
                      <span
                        className="font-heading font-bold text-sm sm:text-base mt-0.5"
                        style={{ color: profile.color }}
                      >
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Live Verification */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>TELEMETRY: VERIFIED</span>
                <span className="text-orange-400 font-bold">LIVE METRIC</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
