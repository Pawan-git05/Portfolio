import React, { useState, useEffect } from 'react';

export default function Typewriter() {
  const roles = ["AI Enthusiast", "CS Student"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      // Deleting speed (slower)
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 70);
    } else {
      // Typing speed (slower)
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 145);
    }

    // State transitions & pauses
    if (!isDeleting && displayText === currentRole) {
      // Pause at full text
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText === '') {
      // Pause after fully deleted
      clearTimeout(timer);
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      timer = setTimeout(() => {}, 1000);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span className="hero__title-line">
      <span id="hero-typewriter">{displayText}</span>
      <span className="typewriter-cursor">|</span>
    </span>
  );
}
