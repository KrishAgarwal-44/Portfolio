import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 2.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <div style={{
        fontFamily: "'DM Mono',monospace", fontSize: '0.72rem',
        color: 'var(--text-3)', letterSpacing: '0.04em',
      }}>
        © 2026 Krish Agarwal · Crafted with care.
      </div>

      <div style={{
        fontFamily: "'DM Mono',monospace", fontSize: '0.72rem',
        color: 'var(--text-3)', letterSpacing: '0.04em',
        display: 'flex', alignItems: 'center', gap: '0.4rem',
        flexWrap: 'wrap',
      }}>
        Built with{' '}
        <span style={{ color: 'var(--accent)' }}>React</span>
        {' '}·{' '}
        <a href="#" style={{ color: 'var(--text-3)', transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-3)'}
        >Back to top ↑</a>
      </div>
    </footer>
  );
}
