import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, revealDelayClass }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = (x / rect.width) - 0.5;
    const py = (y / rect.height) - 0.5;

    const rotY = px * 14; 
    const rotX = -py * 14;

    card.style.transform = `perspective(1000px) rotateY(${rotY}deg) rotateX(${rotX}deg) scale(1.02)`;
    card.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
  };

  return (
    <div 
      ref={cardRef}
      className={`project-card reveal ${revealDelayClass}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card__image-wrap">
        {/* Render first screenshot as card preview */}
        <img 
          src={project.screenshots[0]} 
          alt={`${project.title} screenshot`} 
          className="project-card__image" 
          loading="lazy"
        />
      </div>
      
      <h3 className="project-card__name">{project.title}</h3>
      <p className="project-card__desc" style={{ marginBottom: '16px' }}>{project.tagline}</p>
      
      {/* Tech Stack Chips */}
      <div className="project-card__chips" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {project.techStack.map(tech => (
          <span key={tech} className="tech-chip" style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '4px 10px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.7)',
            fontFamily: 'var(--font-heading)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="project-card__buttons" style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="card-btn card-btn--github"
          onClick={(e) => e.stopPropagation()}
          style={{
            flex: 1,
            textAlign: 'center',
            padding: '10px 14px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '600',
            textDecoration: 'none',
            color: '#fff',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            transition: 'all 0.3s ease'
          }}
        >
          GitHub
        </a>
        <Link 
          to={`/projects/${project.id}`} 
          className="card-btn card-btn--details"
          style={{
            flex: 1,
            textAlign: 'center',
            padding: '10px 14px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '600',
            textDecoration: 'none',
            color: '#000',
            background: '#fff',
            border: '1px solid #fff',
            transition: 'all 0.3s ease'
          }}
        >
          View Details
        </Link>
      </div>
      
      <div className="project-card-glare"></div>
    </div>
  );
}
