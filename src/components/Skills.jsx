import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useScroll';
import { SKILLS_DATA } from '../data/portfolio';

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="skills" ref={ref} className="section-pad" style={{
      background: 'var(--bg-2)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.7s, transform 0.7s',
        }}>
          <div>
            <SectionTag>Expertise</SectionTag>
            <h2 style={{
              fontFamily: "'Syne',sans-serif", fontWeight: 800,
              fontSize: 'clamp(1.8rem,3.5vw,3rem)',
              letterSpacing: '-0.03em', lineHeight: 1.05,
              color: 'var(--text)',
            }}>
              What I{' '}
              <span style={{
                fontStyle: 'italic',
                WebkitTextStroke: '1.5px rgba(232,255,107,0.8)',
                color: 'transparent',
              }}>Build</span>
            </h2>
          </div>
          <p style={{
            fontFamily: "'Lora',serif", fontSize: '0.97rem',
            color: 'var(--text-2)', lineHeight: 1.75, maxWidth: 400,
          }}>
            Two years of diving deep across the stack — here's where I add the most value.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="skills-grid">
          {SKILLS_DATA.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 80} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, delay, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg-3)' : 'var(--bg-2)',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
        transitionProperty: 'opacity, transform, background',
        transitionDuration: '0.6s, 0.6s, 0.3s',
      }}
    >
      {/* Bottom border reveal */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        height: 2,
        width: hovered ? '100%' : 0,
        background: 'var(--accent)',
        transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
      }} />

      <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '1rem' }}>
        {skill.icon}
      </span>

      <h3 style={{
        fontFamily: "'Syne',sans-serif", fontSize: '1rem', fontWeight: 700,
        letterSpacing: '-0.02em', marginBottom: '0.4rem',
        color: 'var(--text)',
      }}>
        {skill.name}
      </h3>

      <p style={{
        fontFamily: "'DM Mono',monospace", fontSize: '0.72rem',
        color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '1.2rem',
      }}>
        {skill.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {skill.tags.map((tag) => (
          <span key={tag} style={{
            fontFamily: "'DM Mono',monospace", fontSize: '0.65rem',
            padding: '0.25rem 0.6rem',
            background: hovered ? 'rgba(232,255,107,0.07)' : 'var(--bg)',
            border: `1px solid ${hovered ? 'rgba(232,255,107,0.25)' : 'var(--border)'}`,
            color: hovered ? 'var(--text-2)' : 'var(--text-3)',
            letterSpacing: '0.04em',
            transition: 'all 0.3s',
          }}>
            {tag}
          </span>
        ))}
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
      marginBottom: '1rem',
    }}>
      <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--accent)' }} />
      {children}
    </div>
  );
}
