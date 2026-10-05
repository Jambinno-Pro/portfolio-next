"use client";

import { useEffect, useState } from "react";

import { ArrowRight, Code2, Database, Mail, Terminal } from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const technologies = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "NestJS",
  "SQL Server",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "Git",
  "GitHub",
  "Docker",
];

export default function Home() {
  const [greeting, setGreeting] = useState("GOOD MORNING");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        setGreeting("GOOD MORNING");
      } else if (hour >= 12 && hour < 18) {
        setGreeting("GOOD AFTERNOON");
      } else {
        setGreeting("GOOD EVENING");
      }
    };

    updateGreeting();

    const interval = setInterval(updateGreeting, 60000);

    return () => clearInterval(interval);
  }, []);

  const formattedGreeting = greeting
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main className="landing-page">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="background-layer" aria-hidden="true">
        <div className="background-grid" />

        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="glow glow-three" />

        <div className="diamond diamond-one" />
        <div className="diamond diamond-two" />
        <div className="diamond diamond-three" />
        <div className="diamond diamond-four" />
        <div className="diamond diamond-five" />

        <span className="star star-one">✦</span>
        <span className="star star-two">✦</span>
        <span className="star star-three">✦</span>
        <span className="star star-four">✦</span>
        <span className="star star-five">✦</span>

        <span className="particle particle-one" />
        <span className="particle particle-two" />
        <span className="particle particle-three" />
        <span className="particle particle-four" />
        <span className="particle particle-five" />
        <span className="particle particle-six" />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="landing-header">
        <div className="brand">
          <div className="brand-logo">IJ</div>

          <div className="brand-details">
            <span className="brand-name">Innocent Jambaya</span>

            <span className="brand-role">Software Developer</span>
          </div>
        </div>

        <div className="header-actions">
          <a href="/portfolio" className="header-portfolio">
            View Portfolio
            <ArrowRight size={14} />
          </a>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="hero-section">
        <div className="hero-content">
          {/* =================================================
              LEFT HERO
          ================================================== */}

          <div className="hero-left">
            {/* EYEBROW */}

            <div className="hero-eyebrow">
              <span className="eyebrow-line" />

              <span>Software Developer</span>

              <span className="eyebrow-dot">•</span>

              <span>Full-Stack & Backend</span>
            </div>

            {/* HERO TITLE */}

            <h1>
              <span className="greeting">{formattedGreeting}</span>

              <span className="hero-name">I'm Innocent.</span>
            </h1>

            {/* HERO DESCRIPTION */}

            <p className="hero-description">
              I’m a Software Developer focused on building modern web
              applications, scalable backend systems, RESTful APIs, and reliable
              database solutions. I work across the stack with C#, .NET, ASP.NET
              Core, TypeScript, Next.js, React, Node.js, and SQL databases,
              turning ideas into practical, production-ready software.
            </p>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="hero-buttons">
              <a href="/portfolio" className="primary-button">
                <span>View Portfolio</span>

                <ArrowRight size={15} />
              </a>
            </div>

            {/* =================================================
                SOCIAL LINKS
            ================================================== */}

            <div className="social-links">
              <a
                href="https://github.com/Jambinno-Pro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/innocent-jambaya-93a64b189/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a href="mailto:jambinnocreations@gmail.com" aria-label="Email">
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* =================================================
              DEVELOPER CARD
          ================================================== */}

          <div className="developer-wrapper">
            <div className="developer-card">
              {/* CARD HEADER */}

              <div className="developer-header">
                <div className="window-controls">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="developer-file">developer.ts</div>

                <div className="developer-status">
                  <span />
                </div>
              </div>

              {/* CARD BODY */}

              <div className="developer-body">
                {/* TITLE */}

                <div className="developer-title">
                  <div className="developer-icon">
                    <Terminal size={18} />
                  </div>

                  <div>
                    <h2>Software Developer</h2>

                    <p>Full-Stack • Backend • Database</p>
                  </div>
                </div>

                {/* CODE */}

                <div className="code-block">
                  {/* LINE 01 */}

                  <div className="code-line">
                    <span className="code-number">01</span>

                    <span>
                      <span className="code-keyword">const</span>{" "}
                      <span className="code-variable">developer</span> = {"{"}
                    </span>
                  </div>

                  {/* LINE 02 */}

                  <div className="code-line">
                    <span className="code-number">02</span>

                    <span>
                      &nbsp;&nbsp;
                      <span className="code-property">name</span>:{" "}
                      <span className="code-string">"Innocent Jambaya"</span>,
                    </span>
                  </div>

                  {/* LINE 03 */}

                  <div className="code-line">
                    <span className="code-number">03</span>

                    <span>
                      &nbsp;&nbsp;
                      <span className="code-property">role</span>:{" "}
                      <span className="code-string">"Software Developer"</span>,
                    </span>
                  </div>

                  {/* LINE 04 */}

                  <div className="code-line">
                    <span className="code-number">04</span>

                    <span>
                      &nbsp;&nbsp;
                      <span className="code-property">frontend</span>:{" "}
                      <span className="code-string">"React / Next.js"</span>,
                    </span>
                  </div>

                  {/* LINE 05 */}

                  <div className="code-line">
                    <span className="code-number">05</span>

                    <span>
                      &nbsp;&nbsp;
                      <span className="code-property">backend</span>:{" "}
                      <span className="code-string">"C# / .NET / Node.js"</span>
                      ,
                    </span>
                  </div>

                  {/* LINE 06 */}

                  <div className="code-line">
                    <span className="code-number">06</span>

                    <span>
                      &nbsp;&nbsp;
                      <span className="code-property">database</span>:{" "}
                      <span className="code-string">
                        "SQL Server / PostgreSQL / MongoDB"
                      </span>
                      ,
                    </span>
                  </div>

                  {/* LINE 07 */}

                  <div className="code-line">
                    <span className="code-number">07</span>

                    <span>
                      &nbsp;&nbsp;
                      <span className="code-property">language</span>:{" "}
                      <span className="code-string">"TypeScript / C#"</span>
                    </span>
                  </div>

                  {/* LINE 08 */}

                  <div className="code-line">
                    <span className="code-number">08</span>

                    <span>{"}"}</span>
                  </div>
                </div>

                {/* CARD FOOTER */}

                <div className="developer-footer">
                  <div>
                    <Code2 size={14} />

                    <span>Development</span>
                  </div>

                  <div>
                    <Database size={14} />

                    <span>Database</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            TECHNOLOGY MARQUEE
        ==================================================

            Moves RIGHT → LEFT.

            Uses the full hero width.

            Duplicated array creates a continuous marquee.

        ================================================== */}

        <div className="technology-track" aria-hidden="true">
          <div className="technology-stream">
            {[...technologies, ...technologies].map((technology, index) => (
              <div key={`${technology}-${index}`} className="technology-badge">
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="landing-footer">
        <div className="footer-inner">
          {/* IDENTITY */}

          <div className="footer-identity">
            <strong>Innocent Jambaya</strong>

            <span>Software Developer</span>
          </div>

          {/* SOCIAL LINKS */}

          <div className="footer-socials">
            <a
              href="https://github.com/Jambinno-Pro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/innocent-jambaya-93a64b189/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:jambinnocreations@gmail.com?subject=Contact%20from%20Portfolio"
              aria-label="Email"
              className="inline-flex items-center justify-center"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* COPYRIGHT */}

          <span className="footer-copy">
            © {new Date().getFullYear()} Innocent Jambaya
          </span>
        </div>
      </footer>
    </main>
  );
}
