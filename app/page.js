'use client';

import Link from 'next/link';
import { getAllGuides } from '@/data/guides';
import { BookOpen, Clock, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const guides = getAllGuides();

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#343434',
    }}>
      {/* Hero Section */}
      <div style={{
        background: '#343434',
        textAlign: 'center',
        // borderBottom: '4px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <img 
            src="/images/logo_wide.png" 
            alt="Game Guides Hub"
            style={{ 
              maxWidth: '400px',
              width: '100%',
              height: 'auto',
              margin: '0 auto 0 auto',
              display: 'block'
            }}
          />
          <p style={{ 
            fontSize: 'clamp(1rem, 3vw, 1.25rem)', 
            opacity: 0.95,
            color: 'white',
            lineHeight: 1.6,
            margin: '0rem auto 2rem auto'
          }}>
            Interactive walkthroughs with progress tracking.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '-2rem auto 0',
        padding: '0 1rem',
      }}>
        <div style={{
          background: '#2a2a2a',
          borderRadius: '1rem',
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '2rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <BookOpen size={32} style={{ color: '#8b5cf6', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>
              {guides.length}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
              Guide(s) Available
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <CheckCircle size={32} style={{ color: '#10b981', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>
              100%
            </div>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
              Step-by-Step
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Clock size={32} style={{ color: '#f59e0b', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>
              Track
            </div>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
              Your Progress
            </div>
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem',
          color: 'white',
          textAlign: 'center'
        }}>
          Guides
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem' 
        }}>
          {guides.map((guide) => (
            <Link 
              key={guide.slug} 
              href={`/guides/${guide.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div 
                style={{
                  background: '#2a2a2a',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: '2px solid transparent',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = guide.theme.primary;
                  e.currentTarget.style.boxShadow = `0 20px 40px ${guide.theme.primary}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Card Header with Image/Icon */}
                <div style={{ 
                  height: '200px', 
                  background: guide.coverImage 
                    ? `url(${guide.coverImage}) center/cover`
                    : `linear-gradient(135deg, ${guide.theme.primary} 0%, ${guide.theme.secondary} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  position: 'relative'
                }}>
                  {!guide.coverImage && guide.image}
                  
                  {/* Difficulty Badge */}
                  {guide.difficulty && (
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(0,0,0,0.7)',
                      backdropFilter: 'blur(10px)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '2rem',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      textTransform: 'uppercase'
                    }}>
                      {guide.difficulty}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    marginBottom: '0.75rem',
                    color: 'white'
                  }}>
                    {guide.title}
                  </h3>
                  
                  <p style={{ 
                    opacity: 0.7, 
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                    flex: 1,
                    color: '#949494'
                  }}>
                    {guide.description}
                  </p>

                  {/* Meta Info */}
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <div style={{ 
                      fontSize: '0.875rem',
                      color: guide.theme.primary,
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <CheckCircle size={16} />
                      {guide.steps.length} Steps
                    </div>

                    {guide.estimatedTime && (
                      <div style={{ 
                        fontSize: '0.875rem',
                        color: '#94a3b8',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Clock size={16} />
                        {guide.estimatedTime}
                      </div>
                    )}
                  </div>

                  {/* Progress Indicator (if you want to show saved progress) */}
                  {typeof window !== 'undefined' && (() => {
                    const saved = localStorage.getItem(`guide_progress_${guide.slug}`);
                    if (saved) {
                      const { steps } = JSON.parse(saved);
                      const progress = (steps.length / guide.steps.length) * 100;
                      if (progress > 0) {
                        return (
                          <div style={{ marginTop: '1rem' }}>
                            <div style={{ 
                              fontSize: '0.75rem', 
                              color: '#94a3b8',
                              marginBottom: '0.5rem'
                            }}>
                              Progress: {Math.round(progress)}%
                            </div>
                            <div style={{
                              height: '4px',
                              background: 'rgba(255,255,255,0.1)',
                              borderRadius: '9999px',
                              overflow: 'hidden'
                            }}>
                              <div style={{
                                height: '100%',
                                background: guide.theme.primary,
                                width: `${progress}%`,
                                transition: 'width 0.3s ease',
                                borderRadius: '9999px'
                              }} />
                            </div>
                          </div>
                        );
                      }
                    }
                    return null;
                  })()}
                </div>

                {/* Call to Action */}
                <div style={{
                  padding: '1.5rem',
                  background: `${guide.theme.primary}15`,
                  borderTop: `2px solid ${guide.theme.primary}30`,
                  textAlign: 'center',
                  fontWeight: '600',
                  color: guide.theme.primary,
                  fontSize: '0.9375rem'
                }}>
                  Start Guide →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: '#1a1a1a',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '3rem 2rem',
        textAlign: 'center',
        color: '#94a3b8'
      }}>
        <p style={{ margin: '0 0 0.5rem 0' }}>
          For the ❤️ of the game
        </p>
        <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.7 }}>
          © 2025 Game Guides
        </p>
      </div>
    </div>
  );
}