import React, { useState, useEffect } from "react";
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { CodingProfiles } from "./components/CodingProfiles";
import { Education } from "./components/Education";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TerminalWidget } from "./components/TerminalWidget";

export function App() {
  const [loading, setLoading] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const handleOpenTerminal = () => setTerminalOpen(true);
    window.addEventListener("open-terminal", handleOpenTerminal);
    return () => window.removeEventListener("open-terminal", handleOpenTerminal);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-purple-600 selection:text-white font-sans">

      {/* Aurora beam background layers */}
      <div className="aurora-beam aurora-beam-1" />
      <div className="aurora-beam aurora-beam-2" />
      <div className="aurora-beam aurora-beam-3" />

      {/* 1. Global Tactical Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* 2. Global Cartesian Blueprint Grid */}
      <div className="grid-pattern fixed inset-0 pointer-events-none opacity-25 z-0" />

      {/* 3. System Dispatch Preloader */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* 4. Main Application Viewport */}
      <div className={"transition-opacity duration-700 " + (loading ? "opacity-0" : "opacity-100")}>

        {/* Floating Glassmorphic Navbar */}
        <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* 01. Hero Command Matrix */}
          <Hero />

          {/* 02. Biography & Core Architecture */}
          <About />

          {/* 03. Technical Arsenal Skills Matrix */}
          <Skills />

          {/* 04. Projects & Deep Dive Case Studies */}
          <Projects />

          {/* 05. Telemetry & Coding Profiles */}
          <CodingProfiles />

          {/* 06. Academic Background & Coursework */}
          <Education />

          {/* 07. Achievements & Milestones */}
          <Achievements />

          {/* 08. Contact Dispatch */}
          <Contact />
        </main>

        {/* Global System Footer */}
        <Footer />

      </div>

      {/* 5. Interactive Floating Terminal CLI Widget */}
      <TerminalWidget
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

    </div>
  );
}

export default App;