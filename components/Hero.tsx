"use client";

import Image from "next/image";
import Skills from "./Skills";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* ==========================================
          GRID BACKGROUND
      ========================================== */}

      <div className="hero-grid" />

      {/* ==========================================
          DIAMONDS
      ========================================== */}

      <div className="diamond-field">
        <span className="diamond diamond-1" />
        <span className="diamond diamond-2" />
        <span className="diamond diamond-3" />
        <span className="diamond diamond-4" />
        <span className="diamond diamond-5" />
        <span className="diamond diamond-6" />
        <span className="diamond diamond-7" />
        <span className="diamond diamond-8" />
      </div>

      {/* ==========================================
          GLOWS
      ========================================== */}

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* ==========================================
          CONTENT
      ========================================== */}

      <div className="hero-content">
        {/* STATUS */}

        <div className="hero-status">
          <span className="status-dot" />
          AVAILABLE FOR WORK
        </div>

        {/* PROFILE IMAGE */}

        <div className="hero-image-wrapper">
          <div className="hero-image-glow" />

          <Image
            src="/inno.jpg"
            alt="Innocent Jambaya"
            width={190}
            height={190}
            priority
            className="hero-image"
          />
        </div>

        {/* SKILLS */}

        <Skills />
      </div>
    </section>
  );
}
