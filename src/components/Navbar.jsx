import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { Icon } from './Icons';

export const Navbar = ({ onOpenTerminal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section tracking
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between px-5 py-2.5 rounded-full border border-white/10 bg-[#0A0A0A]/75 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#A855F7] group-hover:bg-orange-500 group-hover:shadow-[0_0_10px_#F97316] transition-all" />
              <span className="font-mono text-sm font-black tracking-wider text-white group-hover:text-purple-400 transition-colors">
                PS<span className="text-orange-400">.dev</span>
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      isActive
                        ? 'text-white bg-white/10 font-bold border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-[10px] text-purple-400/80 mr-1">{link.num}</span>
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Actions: Terminal Shortcut + Resume Button + Mobile Toggle */}
            <div className="flex items-center gap-2.5">
              {/* Terminal Trigger */}
              <button
                onClick={onOpenTerminal}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border border-orange-500/30 bg-orange-500/5 text-orange-400 hover:bg-orange-500/15 hover:border-orange-500/60 transition-all cursor-pointer shadow-[0_0_10px_rgba(249,115,22,0.15)]"
                title="Launch Interactive Terminal (Ctrl + K)"
              >
                <Icon name="Terminal" size={14} color="#FB923C" />
                <span>CLI</span>
              </button>

              {/* Resume Button */}
              <a
                href={personalInfo.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-purple-600 to-purple-500 text-white border border-purple-400/40 hover:from-purple-500 hover:to-purple-400 shadow-[0_0_15px_rgba(124,58,237,0.35)] transition-all cursor-pointer"
              >
                <Icon name="FileText" size={13} />
                <span>Resume</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-neutral-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={18} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/90 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl text-sm font-mono text-left transition-all ${
                    isActive
                      ? 'bg-purple-600/15 border border-purple-500/40 text-purple-300 font-bold'
                      : 'text-neutral-300 hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-neutral-500">{link.num} //</span>
                </button>
              );
            })}
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenTerminal) onOpenTerminal();
              }}
              className="btn-secondary w-full justify-center text-xs"
            >
              <Icon name="Terminal" size={15} />
              <span>Launch Terminal CLI</span>
            </button>
            <a
              href={personalInfo.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-xs"
            >
              <Icon name="FileText" size={15} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
