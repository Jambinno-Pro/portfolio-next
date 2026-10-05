"use client";

import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section relative overflow-hidden border-b border-[var(--border-soft)]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="hero-grid pointer-events-none absolute inset-0" />

      <div className="hero-grid-small pointer-events-none absolute inset-0" />

      {/* Center glow */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.025] blur-[80px]" />

      {/* Side glow */}
      <div className="pointer-events-none absolute left-[8%] top-[25%] h-28 w-28 rounded-full bg-emerald-400/[0.025] blur-[65px]" />

      {/* =========================================================
    ENHANCED SPARKLES & PARTICLES
========================================================= */}

      <div className="hero-particle absolute left-[5%] top-[18%] h-2 w-2 rounded-full bg-cyan-200" />
      <div className="hero-particle particle-delay-1 absolute left-[12%] top-[35%] h-1.5 w-1.5 rounded-full bg-emerald-200" />
      <div className="hero-particle particle-delay-2 absolute left-[18%] top-[20%] h-1 w-1 rounded-full bg-cyan-100" />
      <div className="hero-particle particle-delay-3 absolute left-[23%] top-[58%] h-2 w-2 rounded-full bg-emerald-300" />
      <div className="hero-particle particle-delay-1 absolute left-[30%] top-[30%] h-1.5 w-1.5 rounded-full bg-cyan-300" />
      <div className="hero-particle particle-delay-2 absolute left-[35%] top-[15%] h-1 w-1 rounded-full bg-emerald-200" />

      <div className="hero-particle particle-delay-3 absolute left-[42%] top-[24%] h-2 w-2 rounded-full bg-cyan-200" />
      <div className="hero-particle particle-delay-1 absolute left-[45%] top-[58%] h-1.5 w-1.5 rounded-full bg-emerald-300" />
      <div className="hero-particle particle-delay-2 absolute left-[55%] top-[18%] h-1.5 w-1.5 rounded-full bg-cyan-200" />
      <div className="hero-particle particle-delay-3 absolute left-[60%] top-[55%] h-2 w-2 rounded-full bg-emerald-200" />

      <div className="hero-particle particle-delay-2 absolute right-[32%] top-[33%] h-1 w-1 rounded-full bg-cyan-100" />
      <div className="hero-particle particle-delay-1 absolute right-[25%] top-[17%] h-2 w-2 rounded-full bg-emerald-200" />
      <div className="hero-particle particle-delay-3 absolute right-[18%] top-[43%] h-1.5 w-1.5 rounded-full bg-cyan-200" />
      <div className="hero-particle particle-delay-2 absolute right-[12%] top-[24%] h-2 w-2 rounded-full bg-emerald-300" />
      <div className="hero-particle particle-delay-1 absolute right-[6%] top-[36%] h-1.5 w-1.5 rounded-full bg-cyan-200" />

      <div className="hero-particle particle-delay-3 absolute left-[9%] top-[67%] h-1.5 w-1.5 rounded-full bg-cyan-200" />
      <div className="hero-particle particle-delay-2 absolute right-[9%] top-[65%] h-2 w-2 rounded-full bg-emerald-200" />

      {/* Cross-shaped sparkles */}
      <div className="hero-sparkle absolute left-[15%] top-[55%]">✦</div>
      <div className="hero-sparkle sparkle-delay-1 absolute left-[28%] top-[17%]">
        ✧
      </div>
      <div className="hero-sparkle sparkle-delay-2 absolute right-[15%] top-[54%]">
        ✦
      </div>
      <div className="hero-sparkle sparkle-delay-3 absolute right-[30%] top-[21%]">
        ✧
      </div>
      <div className="hero-sparkle sparkle-delay-1 absolute left-[38%] top-[65%]">
        ✦
      </div>
      <div className="hero-sparkle sparkle-delay-2 absolute right-[39%] top-[62%]">
        ✧
      </div>
      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-1 pt-4 text-center sm:px-8 md:pb-1 md:pt-5 lg:px-10">
        {/* =======================================================
            PROFILE IMAGE
        ======================================================= */}

        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-5 rounded-full bg-emerald-400/[0.035] blur-2xl" />

          <div className="relative h-24 w-24 overflow-hidden rounded-full border-[4px] border-emerald-300/80 bg-[var(--surface)] shadow-[0_0_30px_rgba(110,231,183,0.14)] md:h-28 md:w-28">
            <Image
              src="/inno.jpg"
              alt="Innocent Jambaya"
              fill
              priority
              className="object-cover"
              sizes="112px"
            />
          </div>
        </div>

        {/* =======================================================
            INTRODUCTION
        ======================================================= */}

        <div className="mt-2">
          <h1 className="text-3xl font-light leading-tight tracking-tight text-[var(--foreground)] md:text-4xl">
            Hi, I&apos;m Innocent.
          </h1>

          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-400">
            Software Developer || Full Stack & Backend Developer
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-5 text-[var(--muted)] md:text-[15px]">
            Building modern web applications, scalable backend systems, and
            reliable database solutions turning ideas into digital products that
            actually work.
          </p>
        </div>

        {/* =======================================================
            SOCIAL LINKS
        ======================================================= */}

        <div className="mt-3 flex items-center gap-2">
          <a
            href="https://github.com/Jambinno-Pro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hero-social flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)]"
          >
            <FaGithub size={15} />
          </a>

          <a
            href="https://www.linkedin.com/in/innocent-jambaya-93a64b189/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hero-social flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)]"
          >
            <FaLinkedinIn size={14} />
          </a>

          <a
            href="mailto:jambinnocreations@gmail.com"
            aria-label="Email"
            className="hero-social flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)]"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style jsx>{`
        .hero-section {
          background:
            radial-gradient(
              circle at 50% 42%,
              rgba(103, 232, 249, 0.075),
              transparent 45%
            ),
            radial-gradient(
              circle at 12% 40%,
              rgba(52, 211, 153, 0.055),
              transparent 30%
            ),
            radial-gradient(
              circle at 88% 45%,
              rgba(103, 232, 249, 0.055),
              transparent 30%
            ),
            var(--background);
        }

        .hero-grid {
          background-image:
            linear-gradient(rgba(103, 232, 249, 0.095) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(103, 232, 249, 0.095) 1px,
              transparent 1px
            );
          background-size: 50px 50px;

          mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 48%,
            rgba(0, 0, 0, 0.4) 72%,
            transparent 100%
          );

          -webkit-mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 48%,
            rgba(0, 0, 0, 0.4) 72%,
            transparent 100%
          );

          opacity: 0.85;
        }

        .hero-grid-small {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            );
          background-size: 12px 12px;

          mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 40%,
            rgba(0, 0, 0, 0.2) 68%,
            transparent 100%
          );

          -webkit-mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 40%,
            rgba(0, 0, 0, 0.2) 68%,
            transparent 100%
          );

          opacity: 0.3;
        }

        /* PARTICLES */

        .hero-particle {
          z-index: 1;
          box-shadow:
            0 0 7px rgba(103, 232, 249, 0.9),
            0 0 15px rgba(103, 232, 249, 0.55),
            0 0 25px rgba(52, 211, 153, 0.25);

          animation: particleFloat 4.5s ease-in-out infinite;
        }

        .particle-delay-1 {
          animation-delay: -1s;
        }

        .particle-delay-2 {
          animation-delay: -2s;
        }

        .particle-delay-3 {
          animation-delay: -3s;
        }

        /* SPARKLE STARS */

        .hero-sparkle {
          position: absolute;
          z-index: 1;
          color: rgba(165, 243, 252, 0.95);
          font-size: 19px;
          line-height: 1;
          pointer-events: none;

          text-shadow:
            0 0 5px rgba(103, 232, 249, 0.9),
            0 0 12px rgba(103, 232, 249, 0.65),
            0 0 22px rgba(52, 211, 153, 0.4);

          animation: sparklePulse 3.5s ease-in-out infinite;
        }

        .sparkle-delay-1 {
          animation-delay: -0.8s;
        }

        .sparkle-delay-2 {
          animation-delay: -1.7s;
        }

        .sparkle-delay-3 {
          animation-delay: -2.5s;
        }

        /* DIAMONDS */

        .hero-diamond {
          z-index: 1;
          box-shadow:
            0 0 8px rgba(103, 232, 249, 0.3),
            0 0 16px rgba(103, 232, 249, 0.15),
            inset 0 0 6px rgba(103, 232, 249, 0.1);

          animation: diamondFloat 5.5s ease-in-out infinite;
        }

        .diamond-delay-1 {
          animation-delay: -1s;
        }

        .diamond-delay-2 {
          animation-delay: -2.2s;
        }

        .diamond-delay-3 {
          animation-delay: -3.3s;
        }

        /* SOCIAL LINKS */

        .hero-social {
          transition:
            border-color 300ms ease,
            background 300ms ease,
            color 300ms ease,
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .hero-social:hover {
          border-color: rgba(103, 232, 249, 0.45);
          background: rgba(103, 232, 249, 0.09);
          color: rgb(103, 232, 249);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(103, 232, 249, 0.12);
        }

        /* ANIMATIONS */

        @keyframes particleFloat {
          0%,
          100% {
            opacity: 0.45;
            transform: translateY(0) scale(0.85);
          }

          50% {
            opacity: 1;
            transform: translateY(-10px) scale(1.25);
          }
        }

        @keyframes sparklePulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.75) rotate(0deg);
          }

          50% {
            opacity: 1;
            transform: scale(1.2) rotate(15deg);
          }
        }

        @keyframes diamondFloat {
          0%,
          100% {
            opacity: 0.55;
            transform: rotate(45deg) translateY(0) scale(0.9);
          }

          50% {
            opacity: 1;
            transform: rotate(45deg) translateY(-9px) scale(1.1);
          }
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .hero-particle,
          .hero-diamond,
          .hero-sparkle {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
