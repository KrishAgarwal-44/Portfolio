import React from 'react';
import { useScrolled } from '../hooks/useScroll';
import { NAV_LINKS } from '../data/portfolio';

const styles = {
  nav: (scrolled) => ({
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.4rem 4rem',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    background: scrolled ? 'rgba(8,8,16,0.85)' : 'transparent',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
    transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
  }),
  logo: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '1.1rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: 'var(--text)',
    textDecoration: 'none',
  },
  logoAccent: { color: 'var(--accent)' },
  links: {
    display: 'flex',
    gap: '2.5rem',
    listStyle: 'none',
  },
  linkItem: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.75rem',
    color: 'var(--text-2)',
    textDecoration: 'none',
    letterSpacing: '0.06em',
    transition: 'color 0.2s',
    position: 'relative',
  },
  cta: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.75rem',
    padding: '0.6rem 1.4rem',
    border: '1px solid var(--accent)',
    color: 'var(--accent)',
    textDecoration: 'none',
    letterSpacing: '0.06em',
    transition: 'all 0.25s',
    background: 'transparent',
    cursor: 'pointer',
  },
};

export default function Navbar() {
  const scrolled = useScrolled(60);

  return (
    <nav style={styles.nav(scrolled)}>
      <a href="#" style={styles.logo}>
        KA<span style={styles.logoAccent}>.</span>dev
      </a>

      <ul style={styles.links}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        style={styles.cta}
        onMouseEnter={(e) => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'var(--bg)'; }}
        onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }}
      >
        Hire Me
      </a>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      style={styles.linkItem}
      onMouseEnter={(e) => { e.target.style.color = 'var(--text)'; }}
      onMouseLeave={(e) => { e.target.style.color = 'var(--text-2)'; }}
    >
      {children}
    </a>
  );
}
