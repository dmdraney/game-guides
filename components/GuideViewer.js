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
  const [interactiveData, setInteractiveData] = useState({});

  // Load saved progress
  useEffect(() => {
    const saved = localStorage.getItem(`guide_progress_${guide.slug}`);
    if (saved) {
      const { steps, substeps, interactive } = JSON.parse(saved);
      setCompletedSteps(new Set(steps));
      setCompletedSubsteps(new Set(substeps));
      setInteractiveData(interactive || {});
    }
  }, [guide.slug]);

  // Save progress
  useEffect(() => {
    localStorage.setItem(`guide_progress_${guide.slug}`, JSON.stringify({
      steps: Array.from(completedSteps),
      substeps: Array.from(completedSubsteps),
      interactive: interactiveData
    }));
  }, [completedSteps, completedSubsteps, interactiveData, guide.slug]);

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
      setInteractiveData({});  // ← Add this line
      localStorage.removeItem(`guide_progress_${guide.slug}`);
    }
  };

  const updateInteractiveField = (stepId, fieldId, value) => {
    setInteractiveData(prev => ({
      ...prev,
      [`${stepId}-${fieldId}`]: value
    }));
  };

  const getInteractiveValue = (stepId, fieldId) => {
    return interactiveData[`${stepId}-${fieldId}`] || null;
  };

  const clearInteractiveField = (stepId, fieldId) => {
    setInteractiveData(prev => {
      const newData = { ...prev };
      delete newData[`${stepId}-${fieldId}`];
      return newData;
    });
  };

  const progress = (completedSteps.size / guide.steps.length) * 100;
  const layout = guide.layout || {};
  const showTips = layout.showTips !== false;
  const showProgress = layout.showProgress !== false;

  // Dropdown field component
  const DropdownField = ({ stepId, field }) => {
    const value = getInteractiveValue(stepId, field.id);
    
    return (
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ 
          display: 'block', 
          fontWeight: '600', 
          marginBottom: '0.5rem',
          fontSize: '0.875rem',
          color: guide.theme.primary
        }}>
          {field.label}
        </label>
        {field.description && (
          <p style={{ 
            fontSize: '0.8125rem', 
            opacity: 0.7, 
            margin: '0 0 0.5rem 0' 
          }}>
            {field.description}
          </p>
        )}
        <select
          value={value || ''}
          onChange={(e) => updateInteractiveField(stepId, field.id, e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem',
            background: guide.theme.card,
            color: guide.theme.text,
            border: `2px solid ${value ? guide.theme.primary : '#475569'}`,
            borderRadius: '0.5rem',
            fontSize: '0.9375rem',
            cursor: 'pointer',
            outline: 'none'
          }}
        >
          <option value="">-- Select One --</option>
          {field.options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.icon ? `${opt.icon} ` : ''}{opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  // Text input field component
  const TextField = ({ stepId, field }) => {
    const value = getInteractiveValue(stepId, field.id) || '';
    
    return (
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ 
          display: 'block', 
          fontWeight: '600', 
          marginBottom: '0.5rem',
          fontSize: '0.875rem',
          color: guide.theme.primary
        }}>
          {field.label}
        </label>
        {field.description && (
          <p style={{ 
            fontSize: '0.8125rem', 
            opacity: 0.7, 
            margin: '0 0 0.5rem 0' 
          }}>
            {field.description}
          </p>
        )}
        <input
          type="text"
          value={value}
          onChange={(e) => updateInteractiveField(stepId, field.id, e.target.value)}
          placeholder={field.placeholder || ''}
          maxLength={field.maxLength}
          style={{
            width: '100%',
            padding: '0.75rem',
            background: guide.theme.card,
            color: guide.theme.text,
            border: `2px solid ${value ? guide.theme.primary : '#475569'}`,
            borderRadius: '0.5rem',
            fontSize: '0.9375rem',
            outline: 'none'
          }}
        />
      </div>
    );
  };

  // Sequence selector component (for ordering items)
  const SequenceField = ({ stepId, field }) => {
    const value = getInteractiveValue(stepId, field.id) || [];
    
    const addToSequence = (optionValue) => {
      if (value.length < field.positions && !value.includes(optionValue)) {
        updateInteractiveField(stepId, field.id, [...value, optionValue]);
      }
    };
    
    const removeFromSequence = (index) => {
      const newValue = value.filter((_, i) => i !== index);
      updateInteractiveField(stepId, field.id, newValue);
    };
    
    return (
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ 
          display: 'block', 
          fontWeight: '600', 
          marginBottom: '0.5rem',
          fontSize: '0.875rem',
          color: guide.theme.primary
        }}>
          {field.label}
        </label>
        {field.description && (
          <p style={{ 
            fontSize: '0.8125rem', 
            opacity: 0.7, 
            margin: '0 0 0.5rem 0' 
          }}>
            {field.description}
          </p>
        )}
        
        {/* Current sequence */}
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          marginBottom: '1rem',
          flexWrap: 'wrap'
        }}>
          {Array.from({ length: field.positions }).map((_, index) => (
            <div
              key={index}
              onClick={() => value[index] && removeFromSequence(index)}
              style={{
                width: '80px',
                height: '80px',
                border: `2px solid ${value[index] ? guide.theme.primary : '#475569'}`,
                borderRadius: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: value[index] ? `${guide.theme.primary}20` : guide.theme.card,
                cursor: value[index] ? 'pointer' : 'default',
                fontSize: '2rem'
              }}
            >
              {value[index] ? (
                <>
                  <div>{field.options.find(o => o.value === value[index])?.icon}</div>
                  <div style={{ fontSize: '0.625rem', marginTop: '0.25rem' }}>
                    #{index + 1}
                  </div>
                </>
              ) : (
                <div style={{ fontSize: '1.5rem', opacity: 0.3 }}>#{index + 1}</div>
              )}
            </div>
          ))}
        </div>
        
        {/* Available options */}
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
          {field.options.map(option => (
            <button
              key={option.value}
              onClick={() => addToSequence(option.value)}
              disabled={value.includes(option.value) || value.length >= field.positions}
              style={{
                padding: '0.75rem 1rem',
                background: value.includes(option.value) 
                  ? '#475569' 
                  : guide.theme.card,
                color: guide.theme.text,
                border: `2px solid ${value.includes(option.value) ? '#475569' : guide.theme.primary}`,
                borderRadius: '0.5rem',
                cursor: value.includes(option.value) || value.length >= field.positions 
                  ? 'not-allowed' 
                  : 'pointer',
                opacity: value.includes(option.value) ? 0.5 : 1,
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{option.icon}</span>
              {option.label}
            </button>
          ))}
        </div>
        
        {value.length > 0 && (
          <button
            onClick={() => clearInteractiveField(stepId, field.id)}
            style={{
              marginTop: '0.75rem',
              padding: '0.5rem 1rem',
              background: 'transparent',
              color: '#ef4444',
              border: '1px solid #ef4444',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '0.8125rem'
            }}
          >
            Clear Sequence
          </button>
        )}
      </div>
    );
  };

  // Image selection sequence component
  const ImageSelectField = ({ stepId, field }) => {
    const value = getInteractiveValue(stepId, field.id) || [];
    
    const addToSequence = (optionValue) => {
      if (value.length < field.positions && !value.includes(optionValue)) {
        updateInteractiveField(stepId, field.id, [...value, optionValue]);
      }
    };
    
    const removeFromSequence = (index) => {
      const newValue = value.filter((_, i) => i !== index);
      updateInteractiveField(stepId, field.id, newValue);
    };
    
    const getOption = (optionValue) => {
      return field.options.find(o => o.value === optionValue);
    };
    
    return (
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ 
          display: 'block', 
          fontWeight: '600', 
          marginBottom: '0.5rem',
          fontSize: '0.875rem',
          color: guide.theme.primary
        }}>
          {field.label}
        </label>
        {field.description && (
          <p style={{ 
            fontSize: '0.8125rem', 
            opacity: 0.7, 
            margin: '0 0 0.5rem 0' 
          }}>
            {field.description}
          </p>
        )}
        
        {/* Current sequence - shows selected images */}
        <div style={{ 
          display: 'flex', 
          gap: '0.75rem', 
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          padding: '1rem',
          background: guide.theme.card,
          borderRadius: '0.5rem',
          border: `2px solid ${guide.theme.primary}30`
        }}>
          {Array.from({ length: field.positions }).map((_, index) => {
            const selectedOption = value[index] ? getOption(value[index]) : null;
            
            return (
              <div key={index} style={{ textAlign: 'center' }}>
                <div
                  onClick={() => value[index] && removeFromSequence(index)}
                  style={{
                    width: '100px',
                    height: '100px',
                    border: `3px solid ${selectedOption ? guide.theme.primary : '#475569'}`,
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: selectedOption ? `${guide.theme.primary}15` : 'rgba(255,255,255,0.05)',
                    cursor: selectedOption ? 'pointer' : 'default',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedOption) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = `0 4px 12px ${guide.theme.primary}60`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedOption) {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  {selectedOption ? (
                    <img 
                      src={selectedOption.image} 
                      alt={selectedOption.label}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain',
                        padding: '0.5rem'
                      }}
                    />
                  ) : (
                    <div style={{ 
                      fontSize: '1.5rem', 
                      opacity: 0.3,
                      fontWeight: 'bold',
                      color: guide.theme.text
                    }}>
                      ?
                    </div>
                  )}
                  
                  {/* Position badge */}
                  <div style={{
                    position: 'absolute',
                    top: '0.25rem',
                    left: '0.25rem',
                    background: selectedOption ? guide.theme.primary : '#475569',
                    color: 'white',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    {index + 1}
                  </div>
                  
                  {/* Remove indicator on hover */}
                  {selectedOption && (
                    <div style={{
                      position: 'absolute',
                      top: '0.25rem',
                      right: '0.25rem',
                      background: '#ef4444',
                      color: 'white',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      opacity: 0.8
                    }}>
                      ×
                    </div>
                  )}
                </div>
                <div style={{ 
                  marginTop: '0.5rem', 
                  fontSize: '0.75rem',
                  opacity: 0.7 
                }}>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Available symbol options */}
        <div>
          <h5 style={{ 
            fontSize: '0.75rem', 
            fontWeight: '600', 
            marginBottom: '0.75rem',
            opacity: 0.7,
            textTransform: 'uppercase'
          }}>
            Available Symbols
          </h5>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '0.75rem'
          }}>
            {field.options.map(option => {
              const isUsed = value.includes(option.value);
              const isFull = value.length >= field.positions;
              const isDisabled = isUsed || isFull;
              
              return (
                <button
                  key={option.value}
                  onClick={() => addToSequence(option.value)}
                  disabled={isDisabled}
                  style={{
                    padding: '0.5rem',
                    background: isUsed 
                      ? 'rgba(255,255,255,0.05)' 
                      : guide.theme.card,
                    border: `2px solid ${isUsed ? '#475569' : guide.theme.primary}`,
                    borderRadius: '0.75rem',
                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                    opacity: isDisabled ? 0.4 : 1,
                    transition: 'all 0.2s',
                    position: 'relative',
                    aspectRatio: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={(e) => {
                    if (!isDisabled) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.borderColor = guide.theme.primary;
                      e.currentTarget.style.boxShadow = `0 4px 12px ${guide.theme.primary}40`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isDisabled) {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <div style={{ 
                    width: '100%',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img 
                      src={option.image} 
                      alt={option.label}
                      style={{ 
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        pointerEvents: 'none'
                      }}
                    />
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                    opacity: isDisabled ? 0.5 : 0.8,
                    lineHeight: 1.2,
                    color: guide.theme.text
                  }}>
                    {option.label}
                  </div>
                  {isUsed && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(0,0,0,0.8)',
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.625rem',
                      fontWeight: 'bold'
                    }}>
                      USED
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Clear button */}
        {value.length > 0 && (
          <button
            onClick={() => clearInteractiveField(stepId, field.id)}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              background: 'transparent',
              color: '#ef4444',
              border: '1px solid #ef4444',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '0.8125rem',
              width: '100%',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ef4444';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#ef4444';
            }}
          >
            Clear All Selections
          </button>
        )}
      </div>
    );
  };

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
                    {/* Interactive Fields */}
                    {step.interactiveFields && step.interactiveFields.length > 0 && (
                      <div style={{
                        background: `${guide.theme.primary}10`,
                        border: `2px solid ${guide.theme.primary}30`,
                        borderRadius: '0.5rem',
                        padding: '1.5rem',
                        marginBottom: '1.5rem'
                      }}>
                        <h4 style={{ 
                          fontSize: '0.875rem', 
                          fontWeight: '600', 
                          marginBottom: '1rem',
                          color: guide.theme.primary,
                          textTransform: 'uppercase'
                        }}>
                          📝 Track Your Game
                        </h4>
                        
                        {step.interactiveFields.map(field => (
                          <div key={field.id}>
                            {field.type === 'dropdown' && (
                              <DropdownField stepId={step.id} field={field} />
                            )}
                            {field.type === 'text' && (
                              <TextField stepId={step.id} field={field} />
                            )}
                            {field.type === 'sequence' && (
                              <SequenceField stepId={step.id} field={field} />
                            )}
                            {field.type === 'image-select' && (
                              <ImageSelectField stepId={step.id} field={field} />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
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