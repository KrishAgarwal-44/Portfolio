import React, { useRef } from "react";
import { useInView } from "../hooks/useScroll";
import { PROJECTS_DATA } from "../data/portfolio";
import Slider from "react-slick";

// Slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectCard({ project, index, inView }) {
  const isFeatured = project.featured;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div
      className={isFeatured ? 'featured-card' : ''}
      style={{
        background: "var(--bg-2)",
        border: `1px solid var(--border)`,
        overflow: "hidden",
        display: isFeatured ? "grid" : "flex",
        gridTemplateColumns: isFeatured ? "1fr 1.2fr" : undefined,
        flexDirection: isFeatured ? undefined : "column",
        gridColumn: isFeatured ? "1 / -1" : undefined,
        transform: inView ? "none" : "translateY(24px)",
        opacity: inView ? 1 : 0,
        transition: `opacity 0.6s ${index * 100}ms, transform 0.35s, border-color 0.3s`,
      }}
    >
      {/* Image / Carousel */}
      <div
        style={{
          background: "var(--bg-3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: isFeatured ? 280 : undefined,
          aspectRatio: isFeatured ? undefined : "16/10",
          position: "relative",
          overflow: "hidden",
          padding: 10,
        }}
      >
        {project.images?.length > 0 ? (
          <Slider {...sliderSettings} style={{ width: "100%", height: "100%" }}>
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.name} screenshot ${idx + 1}`}
                style={{
                  width: "100%",
                  maxHeight: 280,
                  objectFit: "contain",
                  borderRadius: 6,
                }}
              />
            ))}
          </Slider>
        ) : (
          <p style={{ color: 'var(--text-3)', fontFamily: "'DM Mono', monospace", fontSize: '0.8rem' }}>
            No screenshots
          </p>
        )}

        {/* Overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at center, ${project.color}08 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Info */}
      <div
        style={{
          padding: isFeatured ? "2.5rem" : "1.8rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: isFeatured ? "center" : undefined,
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.68rem",
            color: "var(--text-3)",
            letterSpacing: "0.1em",
            marginBottom: "0.8rem",
          }}
        >
          {project.num} {project.featured ? "— Featured" : ""}
        </div>

        <h3
          style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 700,
            fontSize: isFeatured ? "clamp(1.2rem, 3vw, 1.7rem)" : "1.15rem",
            letterSpacing: "-0.02em",
            marginBottom: "0.7rem",
            lineHeight: 1.15,
            color: 'var(--text)',
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            fontFamily: "'Lora',serif",
            fontSize: "0.88rem",
            color: "var(--text-2)",
            lineHeight: 1.75,
            marginBottom: "1.4rem",
            flex: 1,
          }}
        >
          {project.desc}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginBottom: "1.5rem",
          }}
        >
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.65rem",
                padding: "0.25rem 0.65rem",
                background: `${project.color}15`,
                border: `1px solid ${project.color}35`,
                color: project.color,
                letterSpacing: "0.04em",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
          <ProjectLink href={project.liveUrl} color={project.color}>
            ↗ Live Demo
          </ProjectLink>
          <ProjectLink href={project.githubUrl} color={project.color}>
            ⌥ Source
          </ProjectLink>
        </div>
      </div>
    </div>
  );
}

function ProjectLink({ href, children, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: "'DM Mono',monospace",
        fontSize: "0.72rem",
        color: "var(--text-2)",
        letterSpacing: "0.04em",
        borderBottom: `1px solid transparent`,
        paddingBottom: 2,
        transition: "color 0.2s, border-color 0.2s",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
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
    <section
      id="projects"
      ref={ref}
      className="section-pad"
      style={{ background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            gap: "2rem",
            flexWrap: "wrap",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "opacity 0.7s, transform 0.7s",
          }}
        >
          <div>
            <SectionTag>Work</SectionTag>
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem,3.5vw,3rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: 'var(--text)',
              }}
            >
              Selected{" "}
              <span
                style={{
                  fontStyle: "italic",
                  WebkitTextStroke: "1.5px rgba(232,255,107,0.8)",
                  color: "transparent",
                }}
              >
                Projects
              </span>
            </h2>
          </div>
          <a
            href="https://github.com/KrishAgarwal-44"
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.75rem",
              color: "var(--text-2)",
              letterSpacing: "0.06em",
              borderBottom: "1px solid var(--border)",
              paddingBottom: 2,
            }}
          >
            View all work →
          </a>
        </div>

        <div className="projects-grid">
          {PROJECTS_DATA.map((project, i) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTag({ children }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",
        fontFamily: "'DM Mono',monospace",
        fontSize: "0.72rem",
        color: "var(--accent)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: "1rem",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 20,
          height: 1,
          background: "var(--accent)",
        }}
      />
      {children}
    </div>
  );
}