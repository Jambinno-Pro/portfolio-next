"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Moon, Sun, UserRound } from "lucide-react";

const navItems = [
  { label: "Home", href: "/portfolio#top" },
  { label: "About", href: "/portfolio#about" },
  { label: "Journey", href: "/portfolio#journey" },
  { label: "Experience", href: "/portfolio#experience" },
  { label: "Skills", href: "/portfolio#skills" },
  { label: "Case Studies", href: "/portfolio#case-studies" },
  { label: "GitHub", href: "/portfolio#repositories" },
  { label: "Contact", href: "/portfolio#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.add("light");
    } else {
      setDarkMode(true);
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;

    setDarkMode(nextDarkMode);

    if (nextDarkMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="portfolio-navbar sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 sm:px-8 lg:px-10">
        {/* LOGO */}

        <Link
          href="/"
          onClick={closeMenu}
          className="text-lg font-medium tracking-wide text-[var(--foreground)] transition-colors duration-200 hover:text-cyan-400"
        >
          Innocent
          <span className="text-cyan-400">.</span>
        </Link>

        {/* DESKTOP NAVIGATION */}

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] text-[var(--muted)] transition-colors duration-200 hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}

          {/* THEME TOGGLE */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Light Mode" : "Dark Mode"}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
          >
            {darkMode ? (
              <Sun size={15} strokeWidth={1.7} />
            ) : (
              <Moon size={15} strokeWidth={1.7} />
            )}
          </button>

          {/* LOGIN */}

          <Link
            href="/login"
            aria-label="Login"
            title="Login"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
          >
            <UserRound size={15} strokeWidth={1.7} />
          </Link>
        </div>

        {/* MOBILE ACTIONS */}

        <div className="flex items-center gap-2 lg:hidden">
          {/* THEME */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Light Mode" : "Dark Mode"}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
          >
            {darkMode ? (
              <Sun size={15} strokeWidth={1.7} />
            ) : (
              <Moon size={15} strokeWidth={1.7} />
            )}
          </button>

          {/* LOGIN */}

          <Link
            href="/login"
            aria-label="Login"
            title="Login"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
          >
            <UserRound size={15} strokeWidth={1.7} />
          </Link>

          {/* MENU */}

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}

      {menuOpen && (
        <div className="border-t border-[var(--border-soft)] bg-[var(--background)] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-2 sm:px-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-[var(--border-soft)] py-2.5 text-[13px] text-[var(--muted)] transition-colors duration-200 hover:text-cyan-400"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/"
              onClick={closeMenu}
              className="py-2.5 text-[12px] text-[var(--muted-soft)] transition-colors duration-200 hover:text-cyan-400"
            >
              ← Landing Page
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
