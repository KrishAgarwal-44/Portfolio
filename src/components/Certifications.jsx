import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useScroll';
import { CERTIFICATIONS_DATA } from '../data/portfolio';

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="certifications" ref={ref} className="section-pad" style={{
      background: 'var(--bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background accent glow */}
      <div style={{
        position: 'absolute',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 300,
        background: 'radial-gradient(ellipse, rgba(232,255,107,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '1.5rem',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.7s, transform 0.7s',
        }}>
          <div>
            <SectionTag>Credentials</SectionTag>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: 'var(--text)',
            }}>
              Certifications &{' '}
              <span style={{
                fontStyle: 'italic',
                WebkitTextStroke: '1.5px rgba(232,255,107,0.8)',
                color: 'transparent',
              }}>Training</span>
            </h2>
          </div>
          <p style={{
            fontFamily: "'Lora', serif",
            fontSize: '0.97rem',
            color: 'var(--text-2)',
            lineHeight: 1.75,
            maxWidth: 360,
          }}>
            Skills validated through internships, courses, and hands-on experience.
          </p>
        </div>

        {/* Cert Cards Grid */}
        <div className="certs-grid">
          {CERTIFICATIONS_DATA.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: '3rem',
          padding: '1.2rem 1.6rem',
          background: 'var(--bg-2)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.7s 0.5s',
        }}>
          <span style={{ fontSize: '1rem' }}>💡</span>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.72rem',
            color: 'var(--text-3)',
            letterSpacing: '0.04em',
            lineHeight: 1.6,
          }}>
            More certifications on the way — currently pursuing cloud & advanced DSA.
            Check my{' '}
            <a
              href="https://www.linkedin.com/in/krish-agarwal-"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)', borderBottom: '1px solid rgba(232,255,107,0.3)' }}
            >
              LinkedIn
            </a>
            {' '}for updates.
          </p>
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg-3)' : 'var(--bg-2)',
        border: `1px solid ${hovered ? cert.color + '40' : 'var(--border)'}`,
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(28px)',
        transitionDelay: `${index * 100}ms`,
        transitionProperty: 'opacity, transform, background, border-color',
        transitionDuration: '0.6s, 0.6s, 0.3s, 0.3s',
        cursor: 'default',
      }}
    >
      {/* Top-right glow on hover */}
      <div style={{
        position: 'absolute',
        top: -40, right: -40,
        width: 120, height: 120,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${cert.color}20, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }} />

      {/* Accent bottom bar */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0,
        height: 2,
        width: hovered ? '100%' : 0,
        background: `linear-gradient(90deg, ${cert.color}, transparent)`,
        transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
      }} />

      {/* Icon + Date row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1.2rem',
      }}>
        <div style={{
          width: 48, height: 48,
          background: cert.color + '15',
          border: `1px solid ${cert.color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          flexShrink: 0,
          transition: 'background 0.3s, border-color 0.3s',
          ...(hovered && {
            background: cert.color + '25',
            border: `1px solid ${cert.color}55`,
          }),
        }}>
          {cert.icon}
        </div>

        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.65rem',
          color: 'var(--text-3)',
          letterSpacing: '0.08em',
          padding: '0.25rem 0.6rem',
          background: 'var(--bg)',
          border: '1px solid var(--border)',
        }}>
          {cert.date}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 700,
        fontSize: '1.05rem',
        letterSpacing: '-0.02em',
        marginBottom: '0.35rem',
        lineHeight: 1.25,
        color: 'var(--text)',
        transition: 'color 0.2s',
        ...(hovered && { color: cert.color }),
      }}>
        {cert.title}
      </h3>

      {/* Issuer */}
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '0.72rem',
        color: 'var(--text-3)',
        letterSpacing: '0.04em',
        marginBottom: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
      }}>
        <span style={{
          display: 'inline-block',
          width: 12, height: 1,
          background: cert.color + '80',
        }} />
        {cert.issuer}
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.4rem' }}>
        {cert.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.62rem',
            padding: '0.2rem 0.55rem',
            background: cert.color + '10',
            border: `1px solid ${cert.color}25`,
            color: cert.color,
            letterSpacing: '0.04em',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Verify link */}
      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.7rem',
          color: hovered ? cert.color : 'var(--text-3)',
          letterSpacing: '0.06em',
          transition: 'color 0.2s',
          borderBottom: `1px solid ${hovered ? cert.color + '60' : 'transparent'}`,
          paddingBottom: 1,
        }}
      >
        View Credential ↗
      </a>
    </div>
  );
}

function SectionTag({ children }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      fontFamily: "'DM Mono', monospace",
      fontSize: '0.72rem',
      color: 'var(--accent)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      marginBottom: '1rem',
    }}>
      <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--accent)' }} />
      {children}
    </div>
  );
}
