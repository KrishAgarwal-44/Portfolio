import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useScroll';
import { EXPERIENCE_DATA } from '../data/portfolio';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="experience" ref={ref} style={{ padding: '8rem 4rem', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{
          marginBottom: '4rem',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.7s, transform 0.7s',
        }}>
          <SectionTag>Experience</SectionTag>
          <h2 style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 800,
            fontSize: 'clamp(2rem,3.5vw,3rem)',
            letterSpacing: '-0.03em', lineHeight: 1.05,
          }}>
            Where I've{' '}
            <span style={{
              fontStyle: 'italic',
              WebkitTextStroke: '1px rgba(232,255,107,0.5)',
              color: 'transparent',
            }}>Worked</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Line */}
          <div style={{
            position: 'absolute', left: 0, top: 8, bottom: 8,
            width: 1,
            background: `linear-gradient(to bottom, var(--accent), rgba(232,255,107,0.1), transparent)`,
          }} />

          {EXPERIENCE_DATA.map((exp, i) => (
            <TimelineItem key={exp.company} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        paddingLeft: '3rem',
        paddingBottom: index < 2 ? '3.5rem' : 0,
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateX(-20px)',
        transition: `opacity 0.6s ${index * 150}ms, transform 0.6s ${index * 150}ms`,
      }}
    >
      {/* Timeline dot */}
      <div style={{
        position: 'absolute', left: -5, top: 6,
        width: 11, height: 11, borderRadius: '50%',
        background: hovered ? 'var(--accent)' : 'var(--bg-2)',
        border: `2px solid ${hovered ? 'var(--accent)' : 'var(--text-3)'}`,
        boxShadow: hovered ? '0 0 12px var(--accent)' : 'none',
        transition: 'all 0.3s',
        zIndex: 1,
      }} />

      <div style={{
        background: hovered ? 'var(--bg-3)' : 'transparent',
        border: `1px solid ${hovered ? 'var(--border-2)' : 'transparent'}`,
        padding: hovered ? '1.8rem' : '0',
        marginLeft: hovered ? '-1rem' : '0',
        transition: 'all 0.3s',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', marginBottom: '0.7rem', flexWrap: 'wrap', gap: '0.5rem',
        }}>
          <div>
            <h3 style={{
              fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.15rem',
              letterSpacing: '-0.02em', marginBottom: '0.2rem',
            }}>
              {exp.role}
            </h3>
            <span style={{
              fontFamily: "'DM Mono',monospace", fontSize: '0.78rem',
              color: 'var(--accent)', letterSpacing: '0.05em',
            }}>
              @ {exp.company}
            </span>
          </div>
          <span style={{
            fontFamily: "'DM Mono',monospace", fontSize: '0.72rem',
            color: 'var(--text-3)', letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
          }}>
            {exp.period}
          </span>
        </div>

        <p style={{
          fontFamily: "'Lora',serif", fontSize: '0.92rem',
          color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '1rem',
        }}>
          {exp.desc}
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {exp.tags.map((tag) => (
            <span key={tag} style={{
              fontFamily: "'DM Mono',monospace", fontSize: '0.65rem',
              padding: '0.22rem 0.6rem',
              background: 'rgba(232,255,107,0.05)',
              border: '1px solid rgba(232,255,107,0.15)',
              color: 'var(--accent)', letterSpacing: '0.04em',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionTag({ children }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
      fontFamily: "'DM Mono',monospace", fontSize: '0.72rem',
      color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase',
      marginBottom: '1.2rem',
    }}>
      <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--accent)' }} />
      {children}
    </div>
  );
}
