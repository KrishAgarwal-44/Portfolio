import React, { useState } from "react";
import { HERO_DATA } from "../data/portfolio";
import DeskScene from "./DeskScene";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr",
        alignItems: "center",
        padding: "0 4rem",
        gap: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Subtle grid bg ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `
          linear-gradient(rgba(232,255,107,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232,255,107,0.025) 1px, transparent 1px)
        `,
          backgroundSize: "80px 80px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* ── LEFT: Text ── */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Availability badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.72rem",
            color: "var(--accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "2rem",
            animation: "fadeUp 0.8s 0.2s both",
          }}
        >
          <span
            style={{
              width: 28,
              height: 1,
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 8px var(--accent)",
                animation: "blink 2s infinite",
                display: "inline-block",
              }}
            />
            {HERO_DATA.tag}
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(3rem, 5vw, 5.2rem)",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            marginBottom: "1.4rem",
            animation: "fadeUp 0.8s 0.35s both",
            color: "var(--text)",
          }}
        >
          {HERO_DATA.name[0]}
          <br />
          <span
            style={{
              display: "block",
              fontStyle: "italic",
              WebkitTextStroke: "1.5px rgba(232,255,107,0.45)",
              color: "transparent",
            }}
          >
            {HERO_DATA.name[1]}.
          </span>
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "1rem",
            color: "var(--text-2)",
            lineHeight: 1.85,
            maxWidth: 420,
            marginBottom: "2rem",
            animation: "fadeUp 0.8s 0.5s both",
          }}
        >
          {HERO_DATA.description}
        </p>

        {/* Tech stack pills */}
        <div
          style={{
            display: "flex",
            gap: "0.45rem",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
            animation: "fadeUp 0.8s 0.58s both",
          }}
        >
          {[
            "React",
            "Node.js",
            "Java",
            "MongoDB",
            "Spring Boot",
            "Power BI",
          ].map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.63rem",
                color: "var(--text-3)",
                padding: "0.22rem 0.6rem",
                border: "1px solid var(--border)",
                background: "var(--bg-2)",
                letterSpacing: "0.06em",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1.2rem",
            alignItems: "center",
            animation: "fadeUp 0.8s 0.65s both",
          }}
        >
          <BtnPrimary href={HERO_DATA.cta.href}>
            {HERO_DATA.cta.label}
          </BtnPrimary>
          <BtnGhost href={HERO_DATA.resume.href}>
            {HERO_DATA.resume.label} ↗
          </BtnGhost>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            marginTop: "3rem",
            animation: "fadeUp 0.8s 0.8s both",
          }}
        >
          {HERO_DATA.stats.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--accent)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  color: "var(--text-3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "0.2rem",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT: 3D Desk Scene ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          animation: "fadeIn 1.2s 0.3s both",
        }}
      >
        <DeskScene />
      </div>
    </section>
  );
}

function BtnPrimary({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",
        padding: "0.9rem 2rem",
        background: hovered ? "#d4eb5a" : "var(--accent)",
        color: "var(--bg)",
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.82rem",
        fontWeight: 500,
        letterSpacing: "0.04em",
        clipPath:
          "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
        transition: "background 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
    >
      {children} →
    </a>
  );
}

function BtnGhost({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.82rem",
        color: hovered ? "var(--text)" : "var(--text-2)",
        letterSpacing: "0.04em",
        transition: "color 0.2s",
        borderBottom: `1px solid ${hovered ? "var(--border-2)" : "transparent"}`,
        paddingBottom: 2,
      }}
    >
      {children}
    </a>
  );
}
