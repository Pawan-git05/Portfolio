import React, { useEffect, useState } from 'react';
import Typewriter from '../components/Typewriter';
import Avatar from '../components/Avatar';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitText, setSubmitText] = useState('Submit');
  const [submitBg, setSubmitBg] = useState('');

  // Intersection Observer Reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const mailtoLink = `mailto:pawan.cse2027@gmail.com?subject=Project Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;

    setSubmitText('Sent! ✓');
    setSubmitBg('#22c55e');

    setTimeout(() => {
      setSubmitText('Submit');
      setSubmitBg('');
      setFormData({ name: '', email: '', message: '' });
    }, 2500);
  };

  const handleOpenResume = () => {
    const navResumeBtn = document.getElementById('nav-resume-btn');
    if (navResumeBtn) navResumeBtn.click();
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="hero">
        <div className="hero__content">
          <div className="hero__title-wrap">
            <div className="hero__container">
              {/* Beveled Corner Brackets */}
              <div className="hero__bracket hero__bracket--left">
                <svg viewBox="0 0 60 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 10 H24 L10 24 V176 L24 190 H60" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
                </svg>
              </div>
              <div className="hero__bracket hero__bracket--right">
                <svg viewBox="0 0 60 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10 H36 L50 24 V176 L36 190 H0" stroke="currentColor" stroke-width="12" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
                </svg>
              </div>

              {/* Small top metadata label */}
              <div className="hero__meta-top">
                <span className="hero__meta-item">Pawan Singh</span>
                <span className="hero__meta-dot">·</span>
                <span className="hero__meta-item">Software Engineer</span>
              </div>

              {/* Main Title (Typewriter) */}
              <h1 className="hero__title">
                <span className="hero__title-line">I AM A</span>
                <Typewriter />
              </h1>
              
              {/* Sub-tagline underneath main title */}
              <div className="hero__meta-sub">
                <span>Building Intelligent Digital Experiences</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="hero__bottom">
          <span className="hero__copyright">©2026</span>
          <span className="hero__since">/Building since 2023</span>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="about__inner">
          {/* Left Column */}
          <div className="about__left reveal">
            <h2 className="about__heading">Hey!</h2>
            <p className="about__intro">
              I'm Pawan, a builder based in Dehradun, India, currently pursuing B.Tech in Computer Science at Graphic Era Hill University.
            </p>
          </div>

          {/* Center 3D Avatar */}
          <div className="about__center reveal reveal-delay-1" id="about-avatar-wrap">
            <div className="about__photo">
              <Avatar />
            </div>
          </div>

          {/* Right Column */}
          <div className="about__right reveal reveal-delay-2">
            <p className="about__bio">
              I'm an AI Developer and Software Engineer with a strong focus on building intelligent, scalable, and performance-driven systems.
            </p>
            <p className="about__bio">
              From reinforcement learning agents to blockchain-powered donation networks, I build applications that solve real-world problems — combining machine learning, modern web stacks, and clean engineering.
            </p>
            <button className="about__cta" id="about-resume-btn" onClick={handleOpenResume}>
              View Resume
              <span className="about__cta-arrow">↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOCUS TEXT */}
      <section className="focus">
        <p className="focus__text reveal">
          I focus on applications that are <span className="highlight">built to move fast</span>, stay simple, and perform in real-world use, driven by clarity, structured systems, and <span className="highlight">intelligent design</span>.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills" id="skills">
        <div className="skills__inner">
          <h2 className="skills__heading reveal">Skills</h2>
          
          <div className="skills__list">
            <div className="skill-item reveal">
              <span className="skill-item__name">AI & Machine Learning</span>
              <span className="skill-item__tags">Machine Learning · Reinforcement Learning · Q-Learning · GenAI · LLMs · Prompt Engineering</span>
            </div>
            <div className="skill-item reveal reveal-delay-1">
              <span className="skill-item__name">Backend Development</span>
              <span className="skill-item__tags">Python · Node.js · Flask · PostgreSQL · REST APIs · Firebase</span>
            </div>
            <div className="skill-item reveal reveal-delay-2">
              <span className="skill-item__name">Frontend Development</span>
              <span className="skill-item__tags">React 18 · JavaScript · Vite · HTML/CSS · Responsive Design</span>
            </div>
            <div className="skill-item reveal reveal-delay-3">
              <span className="skill-item__name">Computer Science</span>
              <span className="skill-item__tags">DSA (200+ Problems) · OOP · DBMS · OS · Computer Networks · C++</span>
            </div>
            <div className="skill-item reveal reveal-delay-4">
              <span className="skill-item__name">Tools & Platforms</span>
              <span className="skill-item__tags">Git · GitHub · Postman · VS Code · Polygon Blockchain · Twilio · AWS · Oracle OCI</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects" id="projects">
        <div className="projects__inner">
          <div className="projects__header reveal">
            <h2 className="projects__heading">Featured<br />Projects</h2>
            <a href="https://github.com/Pawan-git05" target="_blank" rel="noopener noreferrer" className="projects__view-all">
              View All Work <span>→</span>
            </a>
          </div>

          <div className="projects__grid">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                revealDelayClass={index === 1 ? 'reveal-delay-1' : ''}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" id="contact">
        <div className="contact__inner">
          {/* Left */}
          <div className="contact__left reveal">
            <h2 className="contact__heading">Let's talk.</h2>
            <p className="contact__sub">Have a project or want to collaborate? Fill out the form, and I'll get back to you soon.</p>
            
            <div className="contact__socials">
              <a href="https://github.com/Pawan-git05" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:pawan.cse2027@gmail.com" className="social-icon" aria-label="Email">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <form className="contact__form reveal reveal-delay-1" id="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input 
                type="text" 
                id="contact-name" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input 
                type="email" 
                id="contact-email" 
                placeholder="Enter your email" 
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Your Project</label>
              <textarea 
                id="contact-message" 
                placeholder="Tell me about your project" 
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit" style={{ background: submitBg }}>{submitText}</button>
          </form>
        </div>
      </section>
    </>
  );
}
