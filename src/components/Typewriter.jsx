import React, { useState, useEffect } from 'react';

export default function Typewriter() {
  const roles = ["AI Enthusiast", "CS Student"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let typeSpeed = isDeleting ? 40 : 80;
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex + 1 === currentRole.length) {
          typeSpeed = 2000;
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
          typeSpeed = 400;
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span className="hero__title-line">
      <span id="hero-typewriter">{displayText}</span>
      <span className="typewriter-cursor">|</span>
    </span>
  );
}
