import React, { useRef, useState } from "react";
import { useInView } from "../hooks/useScroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "8rem 4rem", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "opacity 0.7s, transform 0.7s",
          }}
        >
          <SectionTag>Contact</SectionTag>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem,5vw,5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              marginBottom: "1.5rem",
            }}
          >
            Let's Build
            <br />
            <span
              style={{
                fontStyle: "italic",
                WebkitTextStroke: "1.5px rgba(232,255,107,0.45)",
                color: "transparent",
              }}
            >
              Something Great
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Lora',serif",
              fontSize: "1.05rem",
              color: "var(--text-2)",
              lineHeight: 1.8,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Open to associate/ junior roles, and interesting side projects.
            Let's talk.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "4rem",
            alignItems: "start",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "opacity 0.7s 0.2s, transform 0.7s 0.2s",
          }}
        >
          {/* Left info */}
          <div>
            <h3
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}
            >
              Get in touch
            </h3>

            {[
              {
                label: "Email",
                value: "agarwalkrish1222@gmail.com",
                href: "mailto:agarwalkrish@1222gmail.com",
                icon: <FaEnvelope size={20} />
              },
              {
                label: "LinkedIn",
                value: "@Krish Agarwal",
                href: "https://www.linkedin.com/in/krish-agarwal-",
                icon: <FaLinkedin size={20} />,
              },
              {
                label: "GitHub",
                value: "@KrishAgarwal-44",
                href: "https://github.com/KrishAgarwal-44",
                icon: <FaGithub size={20} />,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 0",
                  borderBottom: "1px solid var(--border)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
              >
                <span
                  style={{
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--bg-2)",
                    border: "1px solid var(--border)",
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "0.65rem",
                      color: "var(--text-3)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.15rem",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "0.85rem",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
                <span
                  style={{
                    marginLeft: "auto",
                    color: "var(--text-3)",
                    fontSize: "0.8rem",
                  }}
                >
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Right form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.2rem",
              }}
            >
              <Field
                label="Name"
                placeholder="John Doe"
                value={formState.name}
                onChange={(v) => setFormState((s) => ({ ...s, name: v }))}
              />
              <Field
                label="Email"
                placeholder="john@example.com"
                type="email"
                value={formState.email}
                onChange={(v) => setFormState((s) => ({ ...s, email: v }))}
              />
            </div>
            <Field
              label="Message"
              placeholder="Tell me about your project..."
              value={formState.message}
              onChange={(v) => setFormState((s) => ({ ...s, message: v }))}
              multiline
            />
            <SubmitBtn sent={sent}>
              {sent ? "✓ Message sent!" : "Send Message →"}
            </SubmitBtn>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  multiline,
}) {
  const [focused, setFocused] = useState(false);
  const base = {
    width: "100%",
    background: "var(--bg-2)",
    border: `1px solid ${focused ? "var(--accent)" : "var(--border)"}`,
    color: "var(--text)",
    fontFamily: "'DM Mono',monospace",
    fontSize: "0.82rem",
    padding: "0.85rem 1rem",
    outline: "none",
    resize: "none",
    transition: "border-color 0.2s",
    letterSpacing: "0.02em",
  };
  return (
    <div>
      <label
        style={{
          display: "block",
          fontFamily: "'DM Mono',monospace",
          fontSize: "0.68rem",
          color: "var(--text-3)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...base, display: "block" }}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...base, display: "block" }}
        />
      )}
    </div>
  );
}

function SubmitBtn({ children, sent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "1rem 2.5rem",
        background: sent
          ? "var(--accent-2)"
          : hovered
            ? "#d4eb5a"
            : "var(--accent)",
        color: "var(--bg)",
        fontFamily: "'DM Mono',monospace",
        fontSize: "0.85rem",
        fontWeight: 500,
        letterSpacing: "0.06em",
        cursor: "pointer",
        border: "none",
        clipPath:
          "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
        transition: "background 0.25s, transform 0.2s",
        transform: hovered ? "translateY(-2px)" : "none",
        alignSelf: "flex-start",
      }}
    >
      {children}
    </button>
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
        marginBottom: "1.2rem",
        justifyContent: "center",
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
      <span
        style={{
          display: "inline-block",
          width: 20,
          height: 1,
          background: "var(--accent)",
        }}
      />
    </div>
  );
}
