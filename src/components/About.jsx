import React from 'react';
import { telemetryStats, coreDomains } from '../data/portfolioData';
import { Icon } from './Icons';

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      {/* Subtle Ambient Background Light */}
      <div className="ambient-orb-purple top-[30%] right-[-10%]" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label">// BIOGRAPHY & TELEMETRY</div>
          <h2 className="section-title">
            Engineering <span className="bg-gradient-cyber">Intelligent</span> & Scalable Systems
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            Passionate about bridging computational intelligence with resilient, production-grade architectures.
            From low-level algorithm optimization to distributed AI microservices, I build software that performs with precision.
          </p>
        </div>

        {/* 6-Card Telemetry Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {telemetryStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 flex flex-col items-center justify-center text-center group hover:border-purple-500/40 transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                style={{
                  background: `${stat.color}15`,
                  borderColor: `${stat.color}30`,
                  borderWidth: '1px'
                }}
              >
                <Icon name={stat.icon} size={18} color={stat.color} />
              </div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                {stat.value}
                <span style={{ color: stat.color }}>{stat.suffix}</span>
              </div>
              <div className="text-[11px] font-mono text-neutral-400 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Core Architecture Domain Cards */}
        <div className="mt-8">
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-6">
            // CORE ENGINEERING PILLARS
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coreDomains.map((domain, idx) => (
              <div
                key={idx}
                className="glass-card p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle corner highlight */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: domain.color }}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                      style={{
                        background: `${domain.color}12`,
                        borderColor: `${domain.color}35`
                      }}
                    >
                      <Icon name={domain.icon} size={22} color={domain.color} />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-500 font-bold">
                      0{idx + 1} //
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-purple-300 transition-colors mb-3">
                    {domain.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="group-hover:text-white transition-colors">ARCHITECTURAL DOMAIN</span>
                  <span className="group-hover:translate-x-1 transition-transform" style={{ color: domain.color }}>
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
