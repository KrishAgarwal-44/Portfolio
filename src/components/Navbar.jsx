import React, { useState } from 'react';
import { useScrolled } from '../hooks/useScroll';
import { NAV_LINKS } from '../data/portfolio';

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2rem 2.5rem',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: scrolled ? 'rgba(8,8,16,0.9)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '1.1rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          textDecoration: 'none',
          zIndex: 200,
        }}>
          KA<span style={{ color: 'var(--accent)' }}>.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="nav-links-desktop">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="nav-cta-desktop"
          style={{
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
          }}
          onMouseEnter={(e) => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'var(--bg)'; }}
          onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }}
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          style={{ zIndex: 200 }}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-drawer-overlay${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="mobile-nav-cta" onClick={closeMenu}>
          Hire Me
        </a>
      </div>
    </>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '0.75rem',
        color: 'var(--text-2)',
        textDecoration: 'none',
        letterSpacing: '0.06em',
        transition: 'color 0.2s',
        position: 'relative',
      }}
      onMouseEnter={(e) => { e.target.style.color = 'var(--text)'; }}
      onMouseLeave={(e) => { e.target.style.color = 'var(--text-2)'; }}
    >
      {children}
    </a>
  );
}
