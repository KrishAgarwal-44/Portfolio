import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useScroll';
import { ABOUT_DATA } from '../data/portfolio';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="about" ref={ref} style={{
      padding: '8rem 4rem',
      background: 'var(--bg)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '6rem',
        alignItems: 'center',
        maxWidth: 1200,
        margin: '0 auto',
      }}>

        {/* ── Left: Identity Card ── */}
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateX(-30px)',
          transition: 'opacity 0.7s, transform 0.7s',
        }}>
          <div style={{ position: 'relative', maxWidth: 360 }}>

            {/* Top-left accent square */}
            <div style={{
              position: 'absolute', top: -14, left: -14,
              width: 40, height: 40,
              background: 'var(--accent)',
              zIndex: 0,
            }} />

            {/* Gradient border frame */}
            <div style={{
              position: 'relative', zIndex: 1,
              background: 'linear-gradient(135deg, var(--accent) 0%, rgba(255,255,255,0.06) 50%, var(--accent-2) 100%)',
              padding: 1.5,
            }}>
              <div style={{
                background: 'var(--bg-3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '3rem 2rem 2.5rem',
                gap: '1.2rem',
              }}>

                {/* Avatar */}
                <div style={{
                  width: 110, height: 110,
                  borderRadius: '50%',
                  border: '2px solid var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.8rem',
                  background: 'var(--bg-2)',
                  animation: 'float 4s ease-in-out infinite',
                  flexShrink: 0,
                }}>
                  👨‍💻
                </div>

                {/* Name + Title */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    letterSpacing: '-0.02em',
                    color: 'var(--text)',
                    marginBottom: '0.4rem',
                  }}>
                    Krish Agarwal
                  </div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.7rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}>
                    Full Stack Developer
                  </div>
                </div>

                {/* Divider */}
                <div style={{
                  width: '70%', height: 1,
                  background: 'var(--border-2)',
                }} />

                {/* Stat pills */}
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  {[
                    { tech: 'React', role: 'Frontend' },
                    { tech: 'Node.js', role: 'Backend' },
                  ].map(({ tech, role }) => (
                    <div key={role} style={{ textAlign: 'center' }}>
                      <div style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.78rem',
                        color: 'var(--accent-2)',
                        fontWeight: 500,
                        marginBottom: '0.25rem',
                      }}>
                        {tech}
                      </div>
                      <div style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.63rem',
                        color: 'var(--text-3)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}>
                        {role}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.45rem 1rem',
                  background: 'rgba(232,255,107,0.08)',
                  border: '1px solid rgba(232,255,107,0.2)',
                  marginTop: '0.3rem',
                }}>
                  <span style={{
                    width: 6, height: 6,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    boxShadow: '0 0 6px var(--accent)',
                    animation: 'blink 2s infinite',
                    display: 'inline-block',
                  }} />
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.67rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>
                    Open to Work
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom-right accent square */}
            <div style={{
              position: 'absolute', bottom: -18, right: -18,
              width: 72, height: 72,
              border: '2px solid var(--accent-2)',
              zIndex: 2,
            }} />
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(24px)',
          transition: 'opacity 0.7s 0.2s, transform 0.7s 0.2s',
        }}>
          <SectionTag>{ABOUT_DATA.tag}</SectionTag>

          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '1.6rem',
            color: 'var(--text)',
          }}>
            {ABOUT_DATA.title[0]}{' '}
            <span style={{
              fontStyle: 'italic',
              WebkitTextStroke: '1px rgba(232,255,107,0.55)',
              color: 'transparent',
            }}>
              {ABOUT_DATA.title[1]}
            </span>
          </h2>

          {/* Body paragraphs — improved size + spacing */}
          {ABOUT_DATA.paragraphs.map((p, i) => (
            <p key={i} style={{
              fontFamily: "'Lora', serif",
              fontSize: '1rem',
              color: 'var(--text-2)',
              lineHeight: 1.9,
              marginBottom: '1.1rem',
            }}>
              {p}
            </p>
          ))}

          {/* Quick facts */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.65rem',
            marginTop: '2.2rem',
          }}>
            {ABOUT_DATA.facts.map((fact) => (
              <FactItem key={fact}>{fact}</FactItem>
            ))}
          </div>

          {/* CTA row */}
          <div style={{
            display: 'flex',
            gap: '1.2rem',
            alignItems: 'center',
            marginTop: '2.5rem',
          }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.8rem',
                background: 'var(--accent)',
                color: 'var(--bg)',
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#d4eb5a'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
            >
              Get in Touch →
            </a>
            <a
              href="#projects"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.8rem',
                color: 'var(--text-2)',
                letterSpacing: '0.05em',
                borderBottom: '1px solid var(--border-2)',
                paddingBottom: 2,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
            >
              View Projects ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Fact item with hover ── */
function FactItem({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.6rem',
        padding: '0.6rem 0.8rem',
        background: hovered ? 'rgba(232,255,107,0.05)' : 'transparent',
        border: `1px solid ${hovered ? 'rgba(232,255,107,0.18)' : 'transparent'}`,
        transition: 'background 0.25s, border-color 0.25s',
      }}
    >
      <span style={{
        color: 'var(--accent)',
        fontSize: '0.58rem',
        marginTop: '0.28rem',
        flexShrink: 0,
      }}>▸</span>
      <span style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '0.78rem',
        color: 'var(--text-2)',
        lineHeight: 1.5,
      }}>
        {children}
      </span>
    </div>
  );
}

/* ── Section tag ── */
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
      marginBottom: '1.2rem',
    }}>
      <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--accent)' }} />
      {children}
    </div>
  );
}