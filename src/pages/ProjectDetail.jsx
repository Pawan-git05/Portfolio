import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Find the project. Support both "donarchain" and "donorchain" in path
    const normalizedId = projectId?.toLowerCase() === 'donorchain' ? 'donarchain' : projectId;
    const found = projects.find(p => p.id === normalizedId);
    if (found) {
      setProject(found);
      setCurrentSlide(0);
      window.scrollTo(0, 0); // Reset scroll position on project change
    } else {
      // Redirect to home if project is not found
      navigate('/');
    }
  }, [projectId, navigate]);

  if (!project) {
    return (
      <div className="project-detail-loading" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0a',
        color: '#fff',
        fontFamily: 'var(--font-heading)'
      }}>
        <h2>Loading project details...</h2>
      </div>
    );
  }

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-detail-page" style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: '#ffffff',
      padding: '160px 24px 100px 24px',
      fontFamily: 'var(--font-sans)',
      lineHeight: '1.7'
    }}>
      <div className="project-detail-container" style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Back Button */}
        <Link to="/" className="back-link" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(255, 255, 255, 0.6)',
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: '600',
          marginBottom: '40px',
          transition: 'color 0.3s ease',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          <span style={{ fontSize: '1.2rem' }}>←</span> Back to Portfolio
        </Link>

        {/* Title & Tagline */}
        <header style={{ marginBottom: '50px' }}>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '900',
            lineHeight: '1.1',
            letterSpacing: '-1.5px',
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>
            {project.title}
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: '300',
            maxWidth: '800px'
          }}>
            {project.tagline}
          </p>
        </header>

        {/* Top Info Grid: Main visual and basic info */}
        <div className="project-grid-top" style={{
          display: 'grid',
          gridTemplateColumns: project.screenshots.length > 1 ? '1fr' : '1.2fr 0.8fr',
          gap: '40px',
          marginBottom: '60px',
          alignItems: 'start'
        }}>
          
          {/* Visual Elements: Single Image or Carousel */}
          <div className="project-visual-wrapper" style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {project.screenshots.length > 1 ? (
              /* Carousel slideshow */
              <div className="carousel" style={{ position: 'relative', width: '100%' }}>
                <div className="carousel-inner" style={{
                  display: 'flex',
                  transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transform: `translateX(-${currentSlide * 100}%)`,
                  width: `${project.screenshots.length * 100}%`
                }}>
                  {project.screenshots.map((src, i) => (
                    <div key={src} className="carousel-slide" style={{
                      width: '100%',
                      aspectRatio: '16 / 10',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#0f0f0f'
                    }}>
                      <img 
                        src={src} 
                        alt={`${project.title} slide ${i + 1}`} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          display: 'block'
                        }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Left/Right Controls */}
                <button 
                  onClick={handlePrevSlide} 
                  className="carousel-control carousel-control--prev"
                  aria-label="Previous image"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '20px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.6)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#fff',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    zIndex: 10
                  }}
                >
                  ‹
                </button>
                <button 
                  onClick={handleNextSlide} 
                  className="carousel-control carousel-control--next"
                  aria-label="Next image"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '20px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.6)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#fff',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    zIndex: 10
                  }}
                >
                  ›
                </button>

                {/* Slide Indicators */}
                <div className="carousel-indicators" style={{
                  position: 'absolute',
                  bottom: '15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px',
                  zIndex: 10
                }}>
                  {project.screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`carousel-indicator ${i === currentSlide ? 'active' : ''}`}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        border: 'none',
                        background: i === currentSlide ? '#fff' : 'rgba(255,255,255,0.35)',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'background 0.3s ease'
                      }}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              /* Single screenshot view */
              <div style={{ aspectRatio: '16 / 9', overflow: 'hidden' }}>
                <img 
                  src={project.screenshots[0]} 
                  alt={project.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Quick Details Column for grid views */}
          {project.screenshots.length === 1 && (
            <div style={{
              background: 'rgba(255,255,255,0.01)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--radius-lg)',
              padding: '30px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'rgba(255, 255, 255, 0.5)',
                marginBottom: '16px'
              }}>/ Tech Stack</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
                {project.techStack.map(tech => (
                  <span key={tech} className="tech-chip" style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.8)',
                    fontFamily: 'var(--font-heading)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-cta-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: '#ffffff',
                  color: '#000000',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  padding: '16px 28px',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                GitHub Repository
                <span style={{ fontSize: '1.1rem' }}>↗</span>
              </a>
            </div>
          )}
        </div>

        {/* Carousel Tech Stack Display for Carousel Layouts */}
        {project.screenshots.length > 1 && (
          <div style={{
            background: 'rgba(255,255,255,0.01)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: 'var(--radius-lg)',
            padding: '30px',
            marginBottom: '60px',
            display: 'flex',
            flexDirection: 'column',
            mdDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }} className="project-detail-bar">
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'rgba(255, 255, 255, 0.5)',
                marginBottom: '12px'
              }}>/ Tech Stack</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {project.techStack.map(tech => (
                  <span key={tech} className="tech-chip" style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.8)',
                    fontFamily: 'var(--font-heading)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: '#ffffff',
                color: '#000000',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontWeight: '700',
                fontSize: '0.95rem',
                padding: '16px 28px',
                borderRadius: 'var(--radius-sm)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                whiteSpace: 'nowrap'
              }}
            >
              GitHub Repository
              <span style={{ fontSize: '1.1rem' }}>↗</span>
            </a>
          </div>
        )}

        {/* Content Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px'
        }}>
          
          {/* Detailed Project Info */}
          <div className="project-detail-content" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            
            {/* Overview */}
            <section style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '30px' }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '-0.5px'
              }}>
                Overview
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)' }}>{project.overview}</p>
            </section>

            {/* Problem Statement */}
            <section style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '30px' }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '-0.5px'
              }}>
                Problem Statement
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)' }}>{project.problemStatement}</p>
            </section>

            {/* DonorChain Specific: Implementation Details (How it works) */}
            {project.id === 'donarchain' && (
              <section style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '30px' }}>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '25px',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.5px'
                }}>
                  Implementation & Core Workflows
                </h2>
                
                <div className="implementation-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px'
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '24px',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-primary-light)', marginBottom: '12px' }}>Intelligent Donor Ranking</h3>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}>{project.implementationDetails.ranking}</p>
                  </div>
                  
                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '24px',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-primary-light)', marginBottom: '12px' }}>PostGIS Spatial Matching</h3>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}>{project.implementationDetails.postgis}</p>
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '24px',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-primary-light)', marginBottom: '12px' }}>Blockchain Verification</h3>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}>{project.implementationDetails.blockchain}</p>
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '24px',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-primary-light)', marginBottom: '12px' }}>Multi-Channel Alerts</h3>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}>{project.implementationDetails.alerts}</p>
                  </div>
                </div>
              </section>
            )}

            {/* PathForge AI Specific: Reinforcement Learning Approach & Logics */}
            {project.id === 'pathforge-ai' && (
              <section style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '30px' }}>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '25px',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.5px'
                }}>
                  Reinforcement Learning Approach & Routing Logic
                </h2>
                
                <div className="implementation-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px'
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '24px',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-primary-light)', marginBottom: '12px' }}>RL Optimization Approach</h3>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}>{project.rlApproach}</p>
                  </div>
                  
                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '24px',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-primary-light)', marginBottom: '12px' }}>Q-Learning Logic</h3>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}>{project.qLearningLogic}</p>
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '24px',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-primary-light)', marginBottom: '12px' }}>Hybrid A* Integration</h3>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}>{project.aStarIntegration}</p>
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '24px',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-primary-light)', marginBottom: '12px' }}>Reward Function Design</h3>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}>{project.rewardFunction}</p>
                  </div>
                </div>
              </section>
            )}

            {/* Key Features (DonorChain) or Future Applications (PathForge) */}
            <section style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '30px' }}>
              {project.id === 'donarchain' ? (
                <>
                  <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.5px'
                  }}>
                    Key Features
                  </h2>
                  <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {project.features.map((feature, i) => (
                      <li key={i} style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)' }}>{feature}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.5px'
                  }}>
                    Future Applications
                  </h2>
                  <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {project.futureApplications.map((app, i) => (
                      <li key={i} style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)' }}>{app}</li>
                    ))}
                  </ul>
                </>
              )}
            </section>

            {/* Challenges Faced (DonorChain) */}
            {project.id === 'donarchain' && (
              <section style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '30px' }}>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.5px'
                }}>
                  Challenges Faced
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)' }}>{project.challenges}</p>
              </section>
            )}

            {/* Results / Performance Metrics */}
            <section style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '30px' }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '-0.5px'
              }}>
                Results & Performance
              </h2>
              <div style={{
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.25)',
                padding: '24px',
                borderRadius: 'var(--radius-sm)'
              }}>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: '#4ade80', 
                  fontWeight: '600', 
                  margin: 0,
                  fontFamily: 'var(--font-heading)'
                }}>
                  {project.results}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
