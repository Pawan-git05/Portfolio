import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (anchorId) => {
    if (location.pathname !== '/') {
      navigate('/');
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

  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        {/* Tagline */}
        <div className="footer__tagline">
          Building<br />Intelligent<br />Systems.
        </div>

        {/* Quick Links */}
        <div className="footer__links-group">
          <h4>/Quick Links</h4>
          <button onClick={() => handleNavClick('hero')} className="footer-link-button">Home</button>
          <button onClick={() => handleNavClick('about')} className="footer-link-button">About Me</button>
          <button onClick={() => handleNavClick('skills')} className="footer-link-button">Skills</button>
          <button onClick={() => handleNavClick('projects')} className="footer-link-button">Projects</button>
          <button onClick={() => handleNavClick('contact')} className="footer-link-button">Contact</button>
        </div>

        {/* Contact */}
        <div className="footer__contact-group">
          <h4>/Contact</h4>
          <a href="mailto:pawan.cse2027@gmail.com">pawan.cse2027@gmail.com</a>
        </div>
      </div>

      {/* Watermark */}
      <div className="footer__watermark" aria-hidden="true">PAWAN.</div>
    </footer>
  );
}
