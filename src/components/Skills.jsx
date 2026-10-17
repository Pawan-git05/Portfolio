import React, { useState, useRef, useEffect } from "react";
import { skillsData } from "../data/portfolioData";

// Floating particle canvas for the skills section
const SkillsParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const PARTICLE_COUNT = 55;
    const particles = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isOrange = Math.random() > 0.5;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.5 + 0.15,
        color: isOrange ? "251,115,22" : "168,85,247",
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.018 + 0.008,
      });
    }

    let animId;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const opacity = (1 - dist / 110) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = "rgba(168,85,247," + opacity + ")";
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.pulse += p.pulseSpeed;
        const dynamicAlpha = p.alpha + Math.sin(p.pulse) * 0.15;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        gradient.addColorStop(0, "rgba(" + p.color + "," + dynamicAlpha + ")");
        gradient.addColorStop(1, "rgba(" + p.color + ",0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + p.color + "," + Math.min(dynamicAlpha + 0.3, 1) + ")";
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.65 }}
    />
  );
};

const SkillCard = ({ skill, idx, visible }) => {
  return (
    <div
      className="glass-card p-4 flex flex-col justify-between group hover:border-purple-500/40 hover:shadow-[0_0_28px_rgba(168,85,247,0.22)] transition-all duration-300 relative overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
        transition:
          "opacity 0.4s ease " + idx * 40 + "ms, transform 0.4s ease " + idx * 40 + "ms, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl select-none">{skill.icon}</span>
            <div>
              <h4 className="font-heading font-bold text-sm text-white group-hover:text-purple-300 transition-colors">
                {skill.name}
              </h4>
              <span className="text-[10px] font-mono text-neutral-500 uppercase">
                {skill.category}
              </span>
            </div>
          </div>
          <span className="font-mono text-xs font-bold text-orange-400">{skill.level}%</span>
        </div>

        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-1000 ease-out"
            style={{ width: visible ? skill.level + "%" : "0%" }}
          />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-neutral-500">
        <span>STATUS: ACTIVE</span>
        <span className="text-green-400 font-bold">VERIFIED</span>
      </div>
    </div>
  );
};

const INITIAL_VISIBLE = 8;

export const Skills = () => {
  const categories = ["All", ...Object.keys(skillsData)];
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setCardsVisible(true), 100);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setShowAll(false);
    setCardsVisible(false);
    setTimeout(() => setCardsVisible(true), 50);
  }, [activeCategory]);

  const filteredSkills =
    activeCategory === "All"
      ? Object.entries(skillsData).flatMap(([cat, list]) =>
          list.map((item) => ({ ...item, category: cat }))
        )
      : skillsData[activeCategory]?.map((item) => ({ ...item, category: activeCategory })) || [];

  const visibleSkills = showAll ? filteredSkills : filteredSkills.slice(0, INITIAL_VISIBLE);
  const hasMore = filteredSkills.length > INITIAL_VISIBLE;
  const hiddenCount = filteredSkills.length - INITIAL_VISIBLE;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-[#0A0A0A]/40"
    >
      <div className="ambient-orb-orange top-[20%] left-[-10%]" />
      <div className="ambient-orb-purple bottom-[10%] right-[-5%]" />

      <SkillsParticleField />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-label">// TECHNICAL ARSENAL</div>
          <h2 className="section-title">
            Technologies &amp; <span className="bg-gradient-orange">Capabilities</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            Curated technical skills covering programming languages, web technologies, relational databases, developer tools, and core computer science fundamentals directly from academic and project experience.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={"px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer " + (isActive
                  ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white border border-white/20 shadow-[0_0_20px_rgba(168,85,247,0.3)] scale-105"
                  : "bg-white/[0.03] text-neutral-400 border border-white/5 hover:text-white hover:bg-white/[0.08] hover:border-white/15")}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {visibleSkills.map((skill, idx) => (
            <SkillCard
              key={skill.name + "-" + idx}
              skill={skill}
              idx={idx}
              visible={cardsVisible}
            />
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex flex-col items-center gap-3">
            {!showAll && (
              <p className="text-xs font-mono text-neutral-500">
                Showing <span className="text-purple-400 font-bold">{INITIAL_VISIBLE}</span> of{" "}
                <span className="text-white font-bold">{filteredSkills.length}</span> skills
              </p>
            )}

            <button
              onClick={() => {
                if (showAll) {
                  sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                setShowAll((prev) => !prev);
              }}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl font-mono text-sm font-bold overflow-hidden border border-purple-500/30 text-white hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="relative z-10 w-5 h-5 rounded-full border border-purple-400/50 flex items-center justify-center group-hover:border-purple-300 transition-colors duration-300">
                <span
                  className="block w-2 h-2 border-t border-r border-purple-400 group-hover:border-purple-200 transition-all duration-300"
                  style={{
                    transform: showAll ? "rotate(-45deg)" : "rotate(135deg)",
                    transition: "transform 0.35s ease",
                  }}
                />
              </span>

              <span className="relative z-10">
                {showAll ? (
                  "Show Less"
                ) : (
                  <>
                    Show {hiddenCount} More Skills{" "}
                    <span className="ml-1 px-1.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-[10px]">
                      +{hiddenCount}
                    </span>
                  </>
                )}
              </span>

              <span className="relative z-10 flex gap-0.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1 h-1 rounded-full bg-orange-400/60 group-hover:bg-orange-300 transition-all duration-300"
                    style={{
                      transform: showAll ? "scaleY(-1)" : "scaleY(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                ))}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};