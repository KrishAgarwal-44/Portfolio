import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useScroll';
import { PROJECTS_DATA } from '../data/portfolio';

function ProjectPreview({ type, color }) {
  const previewLines = {
    dashboard: [
      { w: '80%', c: color }, { w: '60%', c: 'var(--bg-3)' },
      { w: '90%', c: 'var(--bg-3)' }, { w: '45%', c: 'var(--bg-3)' },
    ],
    editor: [
      { w: '50%', c: color }, { w: '85%', c: 'var(--bg-3)' },
      { w: '70%', c: 'var(--bg-3)' }, { w: '55%', c: 'var(--bg-3)' },
    ],
    cms: [
      { w: '65%', c: color }, { w: '40%', c: 'var(--bg-3)' },
      { w: '80%', c: 'var(--bg-3)' }, { w: '35%', c: 'var(--bg-3)' },
    ],
    terminal: [
      { w: '90%', c: color }, { w: '75%', c: 'var(--bg-3)' },
      { w: '60%', c: 'var(--bg-3)' }, { w: '80%', c: 'var(--bg-3)' },
    ],
  };

  const lines = previewLines[type] || previewLines.dashboard;

  return (
    <div style={{
      width: '88%', height: '82%',
      border: '1px solid var(--border)',
      background: 'var(--bg-2)',
      borderRadius: 6,
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Mock browser bar */}
      <div style={{
        background: 'var(--bg-3)', padding: '0.5rem 0.8rem',
        display: 'flex', alignItems: 'center', gap: '0.4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        {['#ff5f57','#febc2e','#28c840'].map((c,i) => (
          <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />
        ))}
        <div style={{
          flex: 1, margin: '0 0.8rem', height: 14, borderRadius: 7,
          background: 'var(--bg)', border: '1px solid var(--border)',
        }} />
      </div>
      {/* Mock content */}
      <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {lines.map((l, i) => (
          <div key={i} style={{
            height: 7, borderRadius: 4,
            background: l.c, width: l.w,
            opacity: i === 0 ? 1 : 0.5,
          }} />
        ))}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.3rem' }}>
          <div style={{ height: 28, flex: 1, borderRadius: 4, background: color, opacity: 0.15 }} />
          <div style={{ height: 28, flex: 2, borderRadius: 4, background: 'var(--bg-3)' }} />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const isFeatured = project.featured;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-2)',
        border: `1px solid ${hovered ? 'rgba(232,255,107,0.2)' : 'var(--border)'}`,
        overflow: 'hidden',
        display: isFeatured ? 'grid' : 'flex',
        gridTemplateColumns: isFeatured ? '1fr 1.2fr' : undefined,
        flexDirection: isFeatured ? undefined : 'column',
        gridColumn: isFeatured ? '1 / -1' : undefined,
        transform: inView ? (hovered ? 'translateY(-4px)' : 'none') : 'translateY(24px)',
        opacity: inView ? 1 : 0,
        transition: `opacity 0.6s ${index * 100}ms, transform 0.35s, border-color 0.3s`,
        boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      {/* Preview */}
      <div style={{
        background: 'var(--bg-3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: isFeatured ? 280 : undefined,
        aspectRatio: isFeatured ? undefined : '16/10',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.4s',
      }}>
        <div style={{
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.5s',
          width: '100%', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <ProjectPreview type={project.preview} color={project.color} />
        </div>
        {/* Overlay gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle at center, ${project.color}08 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
      </div>

      {/* Info */}
      <div style={{
        padding: isFeatured ? '2.5rem' : '1.8rem',
        display: 'flex', flexDirection: 'column',
        justifyContent: isFeatured ? 'center' : undefined,
      }}>
        <div style={{
          fontFamily: "'DM Mono',monospace", fontSize: '0.68rem',
          color: 'var(--text-3)', letterSpacing: '0.1em',
          marginBottom: '0.8rem',
        }}>
          {project.num} {project.featured ? '— Featured' : ''}
        </div>

        <h3 style={{
          fontFamily: "'Syne',sans-serif", fontWeight: 700,
          fontSize: isFeatured ? '1.7rem' : '1.25rem',
          letterSpacing: '-0.02em', marginBottom: '0.7rem',
          lineHeight: 1.15,
        }}>
          {project.name}
        </h3>

        <p style={{
          fontFamily: "'Lora',serif", fontSize: '0.88rem',
          color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '1.4rem',
          flex: 1,
        }}>
          {project.desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              fontFamily: "'DM Mono',monospace", fontSize: '0.65rem',
              padding: '0.25rem 0.65rem',
              background: `${project.color}10`,
              border: `1px solid ${project.color}28`,
              color: project.color, letterSpacing: '0.04em',
            }}>{t}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1.2rem' }}>
          <ProjectLink href={project.liveUrl} color={project.color}>↗ Live Demo</ProjectLink>
          <ProjectLink href={project.githubUrl} color={project.color}>⌥ Source</ProjectLink>
        </div>
      </div>
    </div>
  );
}

function ProjectLink({ href, children, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'DM Mono',monospace", fontSize: '0.72rem',
        color: hovered ? color : 'var(--text-2)',
        letterSpacing: '0.04em',
        borderBottom: `1px solid ${hovered ? color : 'transparent'}`,
        paddingBottom: 2,
        transition: 'color 0.2s, border-color 0.2s',
        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
      }}
    >
      {children}
    </a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="projects" ref={ref} style={{ padding: '8rem 4rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: '4rem', gap: '2rem', flexWrap: 'wrap',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.7s, transform 0.7s',
        }}>
          <div>
            <SectionTag>Work</SectionTag>
            <h2 style={{
              fontFamily: "'Syne',sans-serif", fontWeight: 800,
              fontSize: 'clamp(2rem,3.5vw,3rem)',
              letterSpacing: '-0.03em', lineHeight: 1.05,
            }}>
              Selected{' '}
              <span style={{
                fontStyle: 'italic',
                WebkitTextStroke: '1px rgba(232,255,107,0.5)',
                color: 'transparent',
              }}>Projects</span>
            </h2>
          </div>
          <a href="https://github.com/KrishAgarwal-44" style={{
            fontFamily: "'DM Mono',monospace", fontSize: '0.75rem',
            color: 'var(--text-2)', letterSpacing: '0.06em',
            borderBottom: '1px solid var(--border)',
            paddingBottom: 2,
          }}>
            View all work →
          </a>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem',
        }}>
          {PROJECTS_DATA.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
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
