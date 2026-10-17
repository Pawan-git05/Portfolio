import React, { useState, useEffect } from 'react';

export const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 500);
          }, 300);
          return 100;
        }
        // Organic progress curve
        const step = prev < 60 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 4) + 2;
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onFinish]);

  const circumference = 2 * Math.PI * 40; // ~251.3
  const strokeOffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0A0A0A] transition-opacity duration-700 ${
        isDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Blueprint Grid in Loader */}
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated Circular Gauge */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background Track */}
            <circle
              cx="56"
              cy="56"
              r="40"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="3"
              fill="transparent"
            />
            {/* Animated Gradient Gauge */}
            <circle
              cx="56"
              cy="56"
              r="40"
              stroke="url(#loader-gradient)"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
              strokeLinecap="round"
              className="transition-all duration-100 ease-out"
            />
            <defs>
              <linearGradient id="loader-gradient" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Digital Percentage */}
          <div className="absolute font-mono text-sm font-black text-white tracking-widest">
            {progress}%
          </div>
        </div>

        {/* Telemetry Status Labels */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xs font-mono tracking-[0.25em] text-[#FB923C] uppercase font-bold animate-pulse">
            SYSTEM DISPATCH // 0.1
          </h2>
          <span className="text-[10px] font-mono text-neutral-400 mt-2 tracking-widest uppercase">
            Loading neural matrices & WebGL telemetry...
          </span>
        </div>
      </div>
    </div>
  );
};
