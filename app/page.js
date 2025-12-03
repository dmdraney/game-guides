'use client';

import Link from 'next/link';
import { getAllGuides } from '@/data/guides';

export default function HomePage() {
  const guides = getAllGuides();

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: '#f1f5f9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Game Guides Hub
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, marginBottom: '3rem' }}>
          Interactive walkthroughs for your favorite games
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem' 
        }}>
          {guides.map((guide) => (
            <Link 
              key={guide.slug} 
              href={`/guides/${guide.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{
                background: '#1e293b',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                border: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = guide.theme.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'transparent';
              }}>
                {guide.image && (
                  <div style={{ 
                    height: '200px', 
                    background: `linear-gradient(135deg, ${guide.theme.primary}, ${guide.theme.secondary})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem'
                  }}>
                    {guide.image}
                  </div>
                )}
                <div style={{ padding: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    {guide.title}
                  </h2>
                  <p style={{ opacity: 0.7, fontSize: '0.875rem' }}>
                    {guide.description}
                  </p>
                  <div style={{ 
                    marginTop: '1rem', 
                    fontSize: '0.875rem',
                    color: guide.theme.primary,
                    fontWeight: '500'
                  }}>
                    {guide.steps.length} Steps →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}