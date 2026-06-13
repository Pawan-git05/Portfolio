import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchorId) => {
    setNavOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and mount, then scroll
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          const offset = 100;
          const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(anchorId);
      if (el) {
        const offset = 100;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  const toggleNav = () => setNavOpen(prev => !prev);
  const openResume = () => {
    setResumeOpen(true);
    setNavOpen(false);
    document.body.style.overflow = 'hidden';
  };
  const closeResume = () => {
    setResumeOpen(false);
    document.body.style.overflow = '';
  };

  // Close nav on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setNavOpen(false);
        closeResume();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Floating fixed navbar */}
      <nav 
        className="navbar" 
        id="navbar"
        style={{
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.2)' : '0 4px 30px rgba(0,0,0,0.15)'
        }}
      >
        <span className="navbar__name" onClick={() => handleNavClick('hero')} style={{ cursor: 'pointer' }}>
          Pawan Singh
        </span>
        <button 
          className="navbar__menu-btn" 
          id="menu-toggle" 
          aria-label="Toggle navigation menu"
          onClick={toggleNav}
          aria-expanded={navOpen}
        >
          <span className="navbar__dots">
            <span></span><span></span><span></span>
          </span>
        </button>
      </nav>

      {/* Nav Dropdown */}
      <div className={`nav-dropdown ${navOpen ? 'active' : ''}`} id="nav-dropdown">
        <ul className="nav-dropdown__list">
          <li><button onClick={() => handleNavClick('hero')} className="nav-dropdown__link link-button">Home</button></li>
          <li><button onClick={() => handleNavClick('about')} className="nav-dropdown__link link-button">About Me</button></li>
          <li><button onClick={() => handleNavClick('skills')} className="nav-dropdown__link link-button">Skills</button></li>
          <li><button onClick={() => handleNavClick('projects')} className="nav-dropdown__link link-button">Projects</button></li>
          <li><button onClick={() => handleNavClick('contact')} className="nav-dropdown__link link-button">Contact</button></li>
        </ul>
        <div className="nav-dropdown__divider"></div>
        <button className="nav-dropdown__cta" id="nav-resume-btn" onClick={openResume}>
          View Resume
        </button>
      </div>

      {/* Resume Modal */}
      {resumeOpen && (
        <div className="resume-overlay active" id="resume-overlay" onClick={(e) => e.target.id === 'resume-overlay' && closeResume()}>
          <div className="resume-modal">
            <div className="resume-modal__header">
              <h3 className="resume-modal__title">Resume</h3>
              <button className="resume-modal__close" id="resume-close" aria-label="Close resume" onClick={closeResume}>✕</button>
            </div>

            <div className="resume-modal__body">
              <div className="resume-content">
                <div className="resume-name">Pawan Singh</div>
                <div className="resume-subtitle">B.Tech CS, GEHU &nbsp;|&nbsp; 2027 Batch</div>

                <h2>Education</h2>
                <div className="resume-row">
                  <h3>B.Tech — Computer Science & Engineering</h3>
                  <span class="resume-date">2023 – 2027</span>
                </div>
                <div className="resume-sub">Graphic Era Hill University (GEHU), Dehradun — CGPA: 7.52</div>
                <div className="resume-sub" style={{ marginBottom: '12px' }}>
                  Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, OS, Computer Networks, Software Engineering
                </div>

                <div className="resume-row">
                  <h3>Class XII</h3>
                  <span class="resume-date">2022 – 2023</span>
                </div>
                <div className="resume-sub">84%</div>

                <h2>Technical Skills</h2>
                <div className="resume-sub"><strong>Programming:</strong> Python, C++, JavaScript, SQL</div>
                <div className="resume-sub"><strong>AI/ML:</strong> Machine Learning, Reinforcement Learning, Model Evaluation, Prompt Engineering, Generative AI, LLM Applications</div>
                <div className="resume-sub"><strong>Libraries:</strong> NumPy, Pandas, Matplotlib, Scikit-learn</div>
                <div className="resume-sub"><strong>CS:</strong> DSA, OOP, DBMS, OS, Computer Networks</div>
                <div className="resume-sub"><strong>Tools:</strong> Git, GitHub, Postman, VS Code</div>

                <h2>Projects</h2>
                <h3>DonorChain — Real-Time Emergency Donation Network</h3>
                <div className="resume-tags">React 18 · Vite(PWA) · Node.js · PostgreSQL (PostGIS) · Polygon · Twilio · Firebase Cloud Messaging</div>
                <ul>
                  <li>Designed an intelligent donor ranking engine in Python that scores candidates using blood-type compatibility, real-time availability, and geographic proximity via PostGIS spatial indexing; reduced average match latency to under 30 seconds across 100+ test records.</li>
                  <li>Built a severity-based urgency classification layer that reorders the matching queue in real time based on request criticality; anchored donor consent and identity verification hashes to the Polygon blockchain, ensuring tamper-resistant audit records.</li>
                  <li>Delivered real-time donor alerts via Twilio SMS and Firebase Cloud Messaging within 3-5 seconds of a match event.</li>
                </ul>

                <h3>PathForge AI — Intelligent Route Optimization System</h3>
                <div className="resume-tags">Python · Flask · Reinforcement Learning · Q-Learning · A* · Dijkstra</div>
                <ul>
                  <li>Trained a Q-Learning agent in Python to navigate grid environments with obstacles; cut average route exploration steps by ~18% versus random-walk baseline across 500+ simulated scenarios.</li>
                  <li>Fused Q-Learning policy updates with A* heuristic guidance to enable dynamic path selection in changing environments; the hybrid approach converged to near-optimal routes ~13% faster than baseline.</li>
                  <li>Wrapped the trained agent in a Flask REST API with real-time path visualization; reward shaping generalizes toward warehouse robotics and autonomous last-mile delivery.</li>
                </ul>

                <h2>Achievements & Activities</h2>
                <ul>
                  <li>Oracle OCI 2025 Certified AI Foundations Associate</li>
                  <li>AWS ML Fundamentals & Generative AI Solutions — 2025</li>
                  <li>Built AI-powered applications using Python, Reinforcement Learning, REST APIs, and LLM-based personalization systems</li>
                  <li>Solved 200+ DSA problems on LeetCode and HackerRank</li>
                  <li>Led a 4-member team to 100% on-time delivery of OS, DBMS projects</li>
                </ul>
              </div>
            </div>

            <div className="resume-modal__footer">
              <a href="Pawan_Singh_ResumeA.docx" download className="resume-modal__btn resume-modal__btn--primary">
                Download Resume ↓
              </a>
              <button className="resume-modal__btn resume-modal__btn--secondary" id="resume-close-2" onClick={closeResume}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
