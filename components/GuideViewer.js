'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, Circle, ChevronRight, ChevronDown, RotateCcw, CheckCircle2, Home, AlertTriangle, Lightbulb, Award } from 'lucide-react';

export default function GuideViewer({ guide }) {
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [completedSubsteps, setCompletedSubsteps] = useState(new Set());
  const [expandedSteps, setExpandedSteps] = useState(
    new Set(guide.layout?.autoExpand ? guide.steps.map(s => s.id) : [1])
  );

  // Load saved progress
  useEffect(() => {
    const saved = localStorage.getItem(`guide_progress_${guide.slug}`);
    if (saved) {
      const { steps, substeps } = JSON.parse(saved);
      setCompletedSteps(new Set(steps));
      setCompletedSubsteps(new Set(substeps));
    }
  }, [guide.slug]);

  // Save progress
  useEffect(() => {
    localStorage.setItem(`guide_progress_${guide.slug}`, JSON.stringify({
      steps: Array.from(completedSteps),
      substeps: Array.from(completedSubsteps)
    }));
  }, [completedSteps, completedSubsteps, guide.slug]);

  const toggleStep = (stepId) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  const toggleSubstep = (key) => {
    const newCompleted = new Set(completedSubsteps);
    if (newCompleted.has(key)) {
      newCompleted.delete(key);
    } else {
      newCompleted.add(key);
    }
    setCompletedSubsteps(newCompleted);
  };

  const toggleExpanded = (stepId) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId);
    } else {
      newExpanded.add(stepId);
    }
    setExpandedSteps(newExpanded);
  };

  const resetProgress = () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      setCompletedSteps(new Set());
      setCompletedSubsteps(new Set());
      localStorage.removeItem(`guide_progress_${guide.slug}`);
    }
  };

  const progress = (completedSteps.size / guide.steps.length) * 100;
  const layout = guide.layout || {};
  const showTips = layout.showTips !== false;
  const showProgress = layout.showProgress !== false;

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: guide.theme.background,
      color: guide.theme.text,
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${guide.theme.primary} 0%, ${guide.theme.secondary} 100%)`,
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href="/" style={{ 
            color: 'white', 
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
            opacity: 0.9,
            fontSize: '0.875rem',
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}>
            <Home size={16} />
            Back to All Guides
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            {guide.image && <span style={{ fontSize: '2.5rem' }}>{guide.image}</span>}
            <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>
              {guide.title}
            </h1>
          </div>
          
          <p style={{ margin: '0 0 1rem 0', opacity: 0.9 }}>{guide.subtitle}</p>
          
          {/* Meta badges */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {guide.difficulty && (
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}>
                {guide.difficulty}
              </span>
            )}
            {guide.estimatedTime && (
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}>
                ⏱️ {guide.estimatedTime}
              </span>
            )}
            {guide.players && (
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}>
                👥 {guide.players}
              </span>
            )}
          </div>
          
          {/* Progress bar */}
          {showProgress && (
            <div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                fontSize: '0.875rem',
                marginBottom: '0.5rem'
              }}>
                <span>Progress: {completedSteps.size} / {guide.steps.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div style={{
                height: '8px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '9999px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  background: 'white',
                  width: `${progress}%`,
                  transition: 'width 0.3s ease',
                  borderRadius: '9999px'
                }} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        
        {/* Requirements section */}
        {guide.requirements && guide.requirements.length > 0 && (
          <div style={{
            background: guide.theme.card,
            borderRadius: '0.75rem',
            padding: '1.5rem',
            marginBottom: '2rem',
            border: `2px solid ${guide.theme.primary}30`
          }}>
            <h3 style={{ 
              margin: '0 0 1rem 0', 
              fontSize: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: guide.theme.primary
            }}>
              <AlertTriangle size={20} />
              Requirements
            </h3>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: 1.8 }}>
              {guide.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Reset button */}
        <div style={{ marginBottom: '1.5rem', textAlign: 'right' }}>
          <button
            onClick={resetProgress}
            style={{
              background: '#ef4444',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#dc2626'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#ef4444'}
          >
            <RotateCcw size={16} />
            Reset Progress
          </button>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {guide.steps.map((step) => {
            const isCompleted = completedSteps.has(step.id);
            const isExpanded = expandedSteps.has(step.id);
            const stepColor = step.color || guide.theme.primary;
            
            return (
              <div
                key={step.id}
                style={{
                  background: guide.theme.card,
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  border: isCompleted ? `2px solid ${stepColor}` : '2px solid transparent',
                  transition: 'all 0.2s'
                }}
              >
                {/* Step header */}
                <div
                  onClick={() => toggleExpanded(step.id)}
                  style={{
                    padding: '1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: isCompleted ? `${stepColor}15` : 'transparent'
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStep(step.id);
                    }}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: `2px solid ${isCompleted ? stepColor : '#475569'}`,
                      background: isCompleted ? stepColor : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      flexShrink: 0,
                      transition: 'all 0.2s'
                    }}
                  >
                    {isCompleted ? <Check size={18} color="white" /> : <Circle size={18} color="#475569" />}
                  </button>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color: stepColor,
                        background: `${stepColor}20`,
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem'
                      }}>
                        STEP {step.id}
                      </span>
                      {step.icon && <span style={{ fontSize: '1.5rem' }}>{step.icon}</span>}
                      <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '600' }}>
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ margin: '0.5rem 0 0 0', opacity: 0.7, fontSize: '0.875rem' }}>
                      {step.description}
                    </p>
                  </div>
                  
                  {isExpanded ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                </div>

                {/* Expanded content */}
                {isExpanded && (
                  <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                    
                    {/* Warnings */}
                    {step.warnings && step.warnings.length > 0 && (
                      <div style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: '0.5rem',
                        padding: '1rem',
                        marginBottom: '1.5rem'
                      }}>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          WARNINGS
                        </h4>
                        {step.warnings.map((warning, idx) => (
                          <div key={idx} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <span style={{ color: '#ef4444', flexShrink: 0 }}>⚠️</span>
                            <span style={{ fontSize: '0.875rem', opacity: 0.9 }}>{warning}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tips */}
                    {showTips && step.tips && step.tips.length > 0 && (
                      <div style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '0.5rem',
                        padding: '1rem',
                        marginBottom: '1rem'
                      }}>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem', color: '#60a5fa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          TIPS
                        </h4>
                        {step.tips.map((tip, idx) => (
                          <div key={idx} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <span style={{ color: '#60a5fa', flexShrink: 0 }}>💡</span>
                            <span style={{ fontSize: '0.875rem', opacity: 0.9 }}>{tip}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Strategy */}
                    {step.strategy && (
                      <div style={{
                        background: 'rgba(168, 85, 247, 0.1)',
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                        borderRadius: '0.5rem',
                        padding: '1rem'
                      }}>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#a855f7' }}>
                          STRATEGY
                        </h4>
                        <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: 0 }}>{step.strategy}</p>
                      </div>
                    )}

                    {/* Substeps */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem', opacity: 0.7 }}>
                        CHECKLIST
                      </h4>
                      {step.substeps.map((substep, idx) => {
                        const key = `${step.id}-${idx}`;
                        const isSubCompleted = completedSubsteps.has(key);
                        const hasNote = step.substepNotes && step.substepNotes[idx];
                        
                        return (
                          <div key={key} style={{ marginBottom: '0.5rem' }}>
                            <div
                              onClick={() => toggleSubstep(key)}
                              style={{
                                display: 'flex',
                                alignItems: 'start',
                                gap: '0.75rem',
                                padding: '0.75rem',
                                background: isSubCompleted ? `${stepColor}10` : 'rgba(255,255,255,0.03)',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                              }}
                            >
                              <div style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '0.25rem',
                                border: `2px solid ${isSubCompleted ? stepColor : '#475569'}`,
                                background: isSubCompleted ? stepColor : 'transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '2px'
                              }}>
                                {isSubCompleted && <Check size={14} color="white" />}
                              </div>
                              <div style={{ flex: 1 }}>
                                <span style={{
                                  textDecoration: isSubCompleted ? 'line-through' : 'none',
                                  opacity: isSubCompleted ? 0.6 : 1,
                                  fontSize: '0.9375rem'
                                }}>
                                  {substep}
                                </span>
                                {hasNote && (
                                  <div style={{
                                    fontSize: '0.8125rem',
                                    color: stepColor,
                                    marginTop: '0.25rem',
                                    fontStyle: 'italic'
                                  }}>
                                    💡 {hasNote}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Completion message */}
        {completedSteps.size === guide.steps.length && (
          <div style={{
            marginTop: '2rem',
            padding: '2rem',
            background: `linear-gradient(135deg, ${guide.theme.primary} 0%, ${guide.theme.secondary} 100%)`,
            borderRadius: '0.75rem',
            textAlign: 'center'
          }}>
            <CheckCircle2 size={48} style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>Quest Complete! 🎉</h2>
            <p style={{ margin: '0 0 1rem 0', opacity: 0.9 }}>Congratulations on completing the guide!</p>
            
            {/* Rewards */}
            {guide.rewards && guide.rewards.length > 0 && (
              <div style={{
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                marginTop: '1rem'
              }}>
                <h3 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <Award size={20} />
                  Rewards Unlocked
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {guide.rewards.map((reward, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>✨ {reward}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Guide info footer */}
        {guide.credits && (
          <div style={{
            marginTop: '3rem',
            padding: '1.5rem',
            background: guide.theme.card,
            borderRadius: '0.75rem',
            fontSize: '0.875rem',
            opacity: 0.7,
            textAlign: 'center'
          }}>
            {guide.credits}
          </div>
        )}
      </div>
    </div>
  );
}