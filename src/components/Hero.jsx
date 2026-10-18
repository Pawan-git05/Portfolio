import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { personalInfo } from '../data/portfolioData';
import { Icon } from './Icons';

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasContainerRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    let timer;
    const currentRole = personalInfo.roles[currentRoleIndex];

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    } else if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, 35);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, 70);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  // Three.js Interactive 3D Celestial Sphere & Neural Particle Matrix
  useEffect(() => {
    if (!canvasContainerRef.current) return;

    const container = canvasContainerRef.current;
    const width = container.clientWidth || 420;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 26;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Group to hold all 3D objects for unified tilt & rotation
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Celestial Particle Sphere Cloud
    const particleCount = 850;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const purpleColor = new THREE.Color(0xa855f7);
    const orangeColor = new THREE.Color(0xf97316);
    const cyanColor = new THREE.Color(0x38bdf8);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 7.5 + (Math.random() - 0.5) * 3.2;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Smooth color gradient from bottom to top
      const factor = (y + 9) / 18;
      const color = purpleColor.clone().lerp(orangeColor, Math.max(0, Math.min(1, factor)));
      if (Math.random() > 0.82) color.lerp(cyanColor, 0.7);
      if (Math.random() > 0.94) color.lerp(whiteColor, 0.9);

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 0.16 + 0.08;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    globeGroup.add(particles);

    // 2. Outer Orbital Particle Ring (Saturn-like subtle disk)
    const ringCount = 320;
    const ringGeo = new THREE.BufferGeometry();
    const ringPositions = new Float32Array(ringCount * 3);
    const ringColors = new Float32Array(ringCount * 3);

    for (let i = 0; i < ringCount; i++) {
      const angle = (i / ringCount) * Math.PI * 2;
      const radius = 10.5 + Math.random() * 2.2;
      const rx = Math.cos(angle) * radius;
      const rz = Math.sin(angle) * radius;
      const ry = (Math.random() - 0.5) * 0.8;

      ringPositions[i * 3] = rx;
      ringPositions[i * 3 + 1] = ry;
      ringPositions[i * 3 + 2] = rz;

      const ringColor = (i % 2 === 0 ? orangeColor : purpleColor).clone();
      if (Math.random() > 0.7) ringColor.lerp(cyanColor, 0.6);

      ringColors[i * 3] = ringColor.r;
      ringColors[i * 3 + 1] = ringColor.g;
      ringColors[i * 3 + 2] = ringColor.b;
    }

    ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
    ringGeo.setAttribute('color', new THREE.BufferAttribute(ringColors, 3));

    const ringMaterial = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    const ringPoints = new THREE.Points(ringGeo, ringMaterial);
    ringPoints.rotation.x = Math.PI / 5;
    ringPoints.rotation.z = Math.PI / 12;
    globeGroup.add(ringPoints);

    // 3. Glowing Inner Wireframe Sphere
    const coreGeo = new THREE.IcosahedronGeometry(4.2, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x9333ea,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // 4. Secondary Innermost Geometric Core
    const innerGeo = new THREE.OctahedronGeometry(2.4, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    globeGroup.add(innerMesh);

    // Mouse Interaction / Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    let clock = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clock += 0.01;

      // Smooth camera / group easing
      mouseX += (targetX - mouseX) * 0.03;
      mouseY += (targetY - mouseY) * 0.03;

      // Slow, mesmerizing, elegant rotation speeds
      particles.rotation.y += 0.0008;
      ringPoints.rotation.y -= 0.0005;
      coreMesh.rotation.y -= 0.0006;
      coreMesh.rotation.x += 0.0003;
      innerMesh.rotation.y += 0.001;
      innerMesh.rotation.z -= 0.0007;

      // Gentle floating pulse
      globeGroup.position.y = Math.sin(clock * 0.6) * 0.35;
      globeGroup.rotation.x = mouseY * 0.3;
      globeGroup.rotation.y = mouseX * 0.4;

      // Subtle breathing pulse for core
      const pulseScale = 1 + Math.sin(clock * 0.8) * 0.04;
      coreMesh.scale.set(pulseScale, pulseScale, pulseScale);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      particleMaterial.dispose();
      ringGeo.dispose();
      ringMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background light orbs */}
      <div className="ambient-orb-purple top-[15%] left-[-10%]" />
      <div className="ambient-orb-orange bottom-[15%] right-[-10%]" />

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Typewriter, Pitch & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Availability Status Badge */}
            <div>
              <div className="tag tag-orange shadow-[0_0_20px_rgba(249,115,22,0.15)]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                <span>{personalInfo.availability}</span>
              </div>
            </div>

            {/* Massive Heading */}
            <div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-tighter uppercase leading-[0.9] select-none">
                <span className="text-white block">{personalInfo.firstName}</span>
                <span className="bg-gradient-cyber font-black text-stroke block mt-1">
                  {personalInfo.lastName}
                </span>
              </h1>

              {/* Typewriter Prompt */}
              <div className="mt-4 text-sm sm:text-base font-mono min-h-[36px] flex items-center tracking-wider text-neutral-300 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2 w-fit">
                <span className="text-orange-400 font-bold mr-2.5">&gt;_</span>
                <span className="text-white font-bold">{displayedText}</span>
                <span className="inline-block w-1.5 h-4 ml-1 bg-purple-500 animate-pulse shadow-[0_0_8px_#A855F7]" />
              </div>
            </div>

            {/* Pitch Narrative */}
            <p className="text-sm sm:text-base leading-relaxed text-text-secondary max-w-xl">
              An AI developer and full-stack systems engineer specializing in building{' '}
              <span className="text-white font-semibold">intelligent neural runtimes</span>,{' '}
              <span className="text-white font-semibold">isolated sandboxes</span>, and{' '}
              <span className="text-white font-semibold">high-performance web architectures</span>. Backed by{' '}
              <span className="text-orange-400 font-bold">1200+ solved algorithmic challenges</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
              >
                <span>Explore Works</span>
                <Icon name="ArrowRight" size={15} />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn-secondary"
              >
                <span>Get In Touch</span>
              </button>

              <a
                href={personalInfo.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl font-mono text-xs font-bold border border-white/10 text-neutral-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
              >
                <Icon name="FileText" size={14} />
                <span>Resume</span>
              </a>
            </div>

            {/* Quick Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">// CONNECT:</span>
              <div className="flex items-center gap-2">
                {[
                  { name: 'Github', url: personalInfo.socials.github, color: '#A855F7' },
                  { name: 'Linkedin', url: personalInfo.socials.linkedin, color: '#FB923C' },
                  { name: 'LeetCode', url: personalInfo.socials.leetcode, color: '#FFA116' },
                  { name: 'Mail', url: personalInfo.socials.email, color: '#A855F7' }
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all shadow-sm"
                    aria-label={s.name}
                  >
                    <Icon name={s.name} size={15} />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 3D WebGL Orbital Celestial Matrix */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] lg:min-h-[520px]">
            
            {/* Concentric Subtle Ambient Glow Rings (No Clutter, Pure Elegance) */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center select-none scale-95 sm:scale-100">
              {/* Outer Subtle Orbit */}
              <div className="absolute w-[380px] h-[380px] md:w-[460px] md:h-[460px] border border-purple-500/15 rounded-full animate-spin-slow" />
              
              {/* Middle Subtle Orbit */}
              <div className="absolute w-[300px] h-[300px] md:w-[370px] md:h-[370px] border border-dashed border-orange-500/15 rounded-full animate-spin-reverse-slow" />

              {/* Inner Soft Glow */}
              <div className="absolute w-[220px] h-[220px] md:w-[280px] md:h-[280px] border border-purple-500/20 rounded-full shadow-[0_0_40px_rgba(168,85,247,0.12)]" />
            </div>

            {/* Three.js Interactive WebGL Canvas */}
            <div
              ref={canvasContainerRef}
              className="relative z-10 w-full h-[400px] md:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing"
              title="Interactive 3D Celestial Matrix - Move mouse to interact"
            />

          </div>

        </div>
      </div>
    </section>
  );
};
