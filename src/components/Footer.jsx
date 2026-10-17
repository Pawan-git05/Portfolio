import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icon } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#070707] relative z-10 py-10">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
        
        {/* Left: Brand Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-bold text-white tracking-wider">
            {personalInfo.name}
          </span>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="text-neutral-500">
            © {new Date().getFullYear()} // ALL SYSTEMS OPERATIONAL
          </span>
        </div>

        {/* Center: System Status Indicator */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
          <span className="text-green-400 font-bold tracking-wider text-[11px]">
            STATUS: 100% ONLINE
          </span>
        </div>

        {/* Right: Smooth Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/10 text-neutral-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-pointer"
        >
          <span>TOP</span>
          <Icon name="ArrowUp" size={13} />
        </button>

      </div>
    </footer>
  );
};
