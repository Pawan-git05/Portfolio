import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

// ScrollToTop handler to reset viewport position on routing transitions
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Global Cursor Wrapper
function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;
    const speed = 0.12; 
    let animationFrameId = null;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
    };

    const handleMouseLeaveDoc = () => {
      cursor.classList.add('hidden');
      dot.classList.add('hidden');
    };

    const handleMouseEnterDoc = () => {
      cursor.classList.remove('hidden');
      dot.classList.remove('hidden');
    };

    // Physics interpolation (lerp) loop
    const updateCursor = () => {
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      animationFrameId = requestAnimationFrame(updateCursor);
    };

    // Dynamic delegate event listener for hover styling
    const handleMouseOver = (e) => {
      const interactive = e.target.closest('a, button, .project-card, .navbar__menu-btn, .navbar__dots, .footer-link-button, .nav-dropdown__link');
      if (interactive) {
        cursor.classList.add('hovered');
      } else {
        cursor.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveDoc);
    document.addEventListener('mouseenter', handleMouseEnterDoc);
    document.addEventListener('mouseover', handleMouseOver);
    
    updateCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveDoc);
      document.removeEventListener('mouseenter', handleMouseEnterDoc);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" id="custom-cursor"></div>
      <div ref={dotRef} className="custom-cursor-dot" id="custom-cursor-dot"></div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      
      {/* Global Navbar */}
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </Router>
  );
}
