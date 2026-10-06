export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden border-b border-[var(--border-soft)] bg-[var(--background)] py-6 md:py-8"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-[8%] top-[20%] h-40 w-40 rounded-full bg-cyan-400/[0.025] blur-[90px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[8%] h-40 w-40 rounded-full bg-emerald-400/[0.02] blur-[90px]" />

      {/* Main container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7">
          {/* LEFT — ABOUT CONTENT */}

          <div>
            {/* Section label */}
            <div className="mb-2 flex items-center gap-2.5">
              <span className="h-px w-7 bg-cyan-400/60" />

              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-400">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-xl font-light leading-tight tracking-tight text-[var(--foreground)] md:text-2xl">
              Software Developer
              <span className="text-cyan-400">
                {" "}
                Building Practical Solutions
              </span>
            </h2>

            {/* Main paragraph */}
            <p className="mt-2 max-w-2xl text-[15px] leading-5 text-[var(--muted)]">
              I&apos;m a Software Developer focused on building modern web
              applications, scalable backend systems, RESTful APIs, and reliable
              database solutions. I work across the stack using C#, .NET,
              ASP.NET Core, TypeScript, JavaScript, React, Next.js, Node.js, SQL
              Server, PostgreSQL, MySQL, and MongoDB.
            </p>

            {/* Second paragraph */}
            <p className="mt-2 max-w-2xl text-[15px] leading-5 text-[var(--muted-soft)]">
              My approach combines problem-solving, clean architecture, database
              design, API development, and practical user-focused solutions. I
              enjoy turning requirements and ideas into maintainable software
              that solves real business problems.
            </p>

            {/* Buttons */}
            <div className="mt-4 flex flex-wrap gap-2.5">
              <a
                href="#case-studies"
                className="rounded-full border border-cyan-400/30 bg-cyan-400/[0.06] px-4 py-2 text-sm font-medium text-cyan-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/[0.10]"
              >
                View Case Studies
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition-all duration-300 hover:border-[var(--border)] hover:bg-cyan-400/[0.05] hover:text-cyan-400"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>

          {/* RIGHT — CURRENT FOCUS */}

          <div className="relative">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              {/* Card heading */}

              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted-soft)]">
                    Current Focus
                  </p>

                  <h3 className="mt-0.5 text-lg font-medium text-[var(--foreground)]">
                    Software Engineering
                  </h3>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.05]">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                </div>
              </div>

              {/* Skills */}

              <div className="space-y-2">
                <div className="border-t border-[var(--border-soft)] pt-2">
                  <p className="text-[9px] uppercase tracking-[0.17em] text-cyan-400/70">
                    Frontend
                  </p>

                  <p className="mt-0.5 text-sm leading-5 text-[var(--muted)]">
                    React · Next.js · TypeScript · JavaScript
                  </p>
                </div>

                <div className="border-t border-[var(--border-soft)] pt-2">
                  <p className="text-[9px] uppercase tracking-[0.17em] text-cyan-400/70">
                    Backend
                  </p>

                  <p className="mt-0.5 text-sm leading-5 text-[var(--muted)]">
                    C# · .NET · ASP.NET Core · Node.js · REST APIs
                  </p>
                </div>

                <div className="border-t border-[var(--border-soft)] pt-2">
                  <p className="text-[9px] uppercase tracking-[0.17em] text-cyan-400/70">
                    Databases
                  </p>

                  <p className="mt-0.5 text-sm leading-5 text-[var(--muted)]">
                    SQL Server · PostgreSQL · MySQL · MongoDB
                  </p>
                </div>

                <div className="border-t border-[var(--border-soft)] pt-2">
                  <p className="text-[9px] uppercase tracking-[0.17em] text-cyan-400/70">
                    Engineering
                  </p>

                  <p className="mt-0.5 text-sm leading-5 text-[var(--muted)]">
                    API Development · Database Design · Git · Docker
                  </p>
                </div>
              </div>
            </div>

            {/* Small decorative element */}
            <div className="absolute -right-2 -top-2 h-3 w-3 rotate-45 border border-cyan-400/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
