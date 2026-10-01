"use client";

import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--surface)] px-6 py-6 sm:py-7">
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-80 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-0 sm:px-2 lg:px-0">
        {/* Main Footer */}

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Brand */}

          <div className="text-center md:text-left">
            <p className="text-base font-medium tracking-wide text-[var(--foreground)]">
              Innocent Jambaya
            </p>

            <p className="mt-0.5 text-xs text-[var(--muted-soft)]">
              Software Developer
            </p>
          </div>

          {/* Social Links */}

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Jambinno-Pro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/innocent-jambaya-93a64b189/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <FaLinkedinIn size={16} />
            </a>

            <a
              href="mailto:jambinnocreations@gmail.com"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Back To Top */}

          <a
            href="#top"
            aria-label="Back to top"
            className="group flex items-center gap-2 text-xs text-[var(--muted-soft)] transition-colors hover:text-cyan-300"
          >
            <span>Back to top</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>

        {/* Divider */}

        <div className="my-4 h-px bg-[var(--border-soft)]" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-2 text-center text-[10px] leading-5 text-[var(--muted-soft)] md:flex-row md:text-left">
          <p>© {currentYear} Innocent Jambaya. All rights reserved.</p>

          <p>
            Built with <span className="text-cyan-300">Next.js</span>
            {" · "}
            <span className="text-cyan-300">TypeScript</span>
            {" · "}
            <span className="text-cyan-300">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
