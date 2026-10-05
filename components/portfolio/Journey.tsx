"use client";

import { useEffect, useRef, useState } from "react";
import {
  Palette,
  Code2,
  Globe,
  Server,
  Database,
  Bug,
  Rocket,
  ArrowDown,
} from "lucide-react";

const journeyItems = [
  {
    number: "01",
    title: "Creative Problem Solving",
    subtitle: "Where It All Started",
    icon: Palette,
    text: "My journey began with six years of experience in Graphic Design, where I developed a strong foundation in problem solving, attention to detail, visual thinking, and turning ideas into practical solutions.",
  },
  {
    number: "02",
    title: "Discovering Web Development",
    subtitle: "From Design to Technology",
    icon: Globe,
    text: "I began exploring Web Development and quickly became interested in more than how websites looked. I wanted to understand how applications worked, how browsers processed code, and what happened behind the interface.",
  },
  {
    number: "03",
    title: "HTML, CSS & JavaScript",
    subtitle: "Building the Foundation",
    icon: Code2,
    text: "Learning HTML, CSS and JavaScript turned my curiosity into a technical journey. I started understanding how interfaces are built, how applications respond to users, and how different parts of a web application work together.",
  },
  {
    number: "04",
    title: "Backend Development",
    subtitle: "Building Beyond the Interface",
    icon: Server,
    text: "My focus then moved deeper into backend development. I became interested in server-side logic, REST APIs, authentication, business logic and application architecture, building the systems that power modern applications.",
  },
  {
    number: "05",
    title: "Database Engineering",
    subtitle: "Understanding the Data",
    icon: Database,
    text: "I developed a strong interest in databases and how applications work with data. I explored data modelling, SQL, relationships, queries, storage and reliable ways of connecting databases to backend systems.",
  },
  {
    number: "06",
    title: "Debugging & Problem Solving",
    subtitle: "Engineering Through Challenges",
    icon: Bug,
    text: "Debugging became an important part of how I develop software. I enjoy investigating errors, understanding why systems fail, tracing problems across applications and working methodically toward reliable solutions.",
  },
  {
    number: "07",
    title: "Software Development",
    subtitle: "Building Practical Solutions",
    icon: Rocket,
    text: "Today, I am growing as a Software Developer, building modern web applications, backend systems, RESTful APIs and database solutions. I continue to strengthen my skills across C#, .NET, ASP.NET Core, TypeScript, React, Next.js, Node.js and SQL databases.",
  },
];

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          threshold: 0.35,
          rootMargin: "-20% 0px -20% 0px",
        },
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const travelled = Math.min(
        Math.max(viewportHeight - rect.top, 0),
        sectionHeight,
      );

      const percentage =
        ((travelled - viewportHeight * 0.25) /
          (sectionHeight - viewportHeight * 0.25)) *
        100;

      setProgress(Math.min(Math.max(percentage, 0), 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative scroll-mt-24 overflow-hidden border-b border-[var(--border-soft)] bg-[var(--background)] py-6 sm:py-8"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[10%] h-56 w-56 rounded-full bg-cyan-400/[0.04] blur-3xl" />

        <div className="absolute bottom-[10%] right-[5%] h-72 w-72 rounded-full bg-blue-400/[0.04] blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-px w-[70%] -translate-x-1/2 bg-[var(--border-soft)]" />
      </div>

      {/* Same container width/alignment as Resume */}
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-5 max-w-3xl">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
            My Journey
          </p>

          <h2 className="max-w-2xl text-xl font-light leading-tight tracking-tight text-[var(--foreground)] md:text-2xl">
            From curiosity to{" "}
            <span className="font-normal text-cyan-300">
              software development.
            </span>
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-5 text-[var(--muted)] md:text-[15px]">
            My journey has taken me from creative problem solving into software
            development, backend engineering, APIs and databases, with a
            continued focus on building practical digital solutions.
          </p>

          <div className="mt-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[var(--muted-soft)]">
            <ArrowDown size={13} className="animate-bounce text-cyan-300" />
            Scroll through my journey
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop timeline background */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-[var(--border)] md:block" />

          {/* Desktop animated progress */}
          <div
            className="absolute left-[19px] top-0 hidden w-px bg-cyan-300 transition-all duration-300 md:block"
            style={{
              height: `${progress}%`,
              boxShadow: "0 0 12px rgba(103, 232, 249, 0.6)",
            }}
          />

          <div className="space-y-4">
            {journeyItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;

              return (
                <div
                  key={item.number}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  className="group relative grid gap-4 md:grid-cols-[100px_1fr] md:gap-7"
                >
                  {/* Timeline node */}
                  <div className="relative hidden md:block">
                    <div
                      className={`
                        relative z-10 flex h-9 w-9 items-center justify-center
                        rounded-full border transition-all duration-500
                        ${
                          isActive
                            ? "scale-110 border-cyan-300/50 bg-cyan-300/20 text-cyan-300 shadow-[0_0_25px_rgba(103,232,249,0.35)]"
                            : isPast
                              ? "border-cyan-300/60 bg-cyan-300/15 text-cyan-300"
                              : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted-soft)]"
                        }
                      `}
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </div>

                    <span
                      className={`
                        absolute left-13 top-2 text-[11px] tracking-widest
                        transition-colors duration-500
                        ${
                          isActive
                            ? "text-cyan-300"
                            : "text-[var(--muted-soft)]"
                        }
                      `}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Content card */}
                  <div
                    className={`
                      relative overflow-hidden rounded-2xl border p-4
                      transition-all duration-700 md:p-5
                      ${
                        isActive
                          ? "translate-x-1 border-cyan-300/30 bg-cyan-300/[0.06] shadow-[0_0_35px_rgba(103,232,249,0.06)]"
                          : "border-[var(--border)] bg-[var(--surface-soft)] opacity-75"
                      }
                      group-hover:translate-x-1
                      group-hover:border-cyan-300/20
                    `}
                  >
                    {/* Active glow */}
                    <div
                      className={`
                        absolute left-0 top-0 h-full w-[2px]
                        bg-cyan-300 transition-opacity duration-500
                        ${isActive ? "opacity-100" : "opacity-0"}
                      `}
                    />

                    {/* Mobile node */}
                    <div className="mb-3 flex items-center gap-3 md:hidden">
                      <div
                        className={`
                          flex h-8 w-8 items-center justify-center
                          rounded-full border transition-all duration-500
                          ${
                            isActive
                              ? "border-cyan-300/50 bg-cyan-300/15 text-cyan-300"
                              : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted-soft)]"
                          }
                        `}
                      >
                        <Icon size={15} strokeWidth={1.5} />
                      </div>

                      <span
                        className={`text-[10px] tracking-widest ${
                          isActive
                            ? "text-cyan-300"
                            : "text-[var(--muted-soft)]"
                        }`}
                      >
                        {item.number}
                      </span>
                    </div>

                    <p
                      className={`
                        mb-1 text-[10px] font-medium uppercase
                        tracking-[0.18em] transition-colors duration-500
                        ${isActive ? "text-cyan-300" : "text-cyan-300/70"}
                      `}
                    >
                      {item.subtitle}
                    </p>

                    <h3
                      className={`
                        text-lg font-normal leading-tight transition-colors duration-500
                        md:text-xl
                        ${
                          isActive
                            ? "text-[var(--foreground)]"
                            : "text-[var(--muted)]"
                        }
                      `}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-3xl text-sm leading-5 text-[var(--muted)] md:text-[15px]">
                      {item.text}
                    </p>

                    {/* Progress indicator */}
                    <div className="mt-3 flex items-center gap-1.5">
                      {journeyItems.map((_, dotIndex) => (
                        <span
                          key={dotIndex}
                          className={`
                            h-1 rounded-full transition-all duration-500
                            ${
                              dotIndex <= index
                                ? "w-4 bg-cyan-300"
                                : "w-1.5 bg-[var(--border)]"
                            }
                          `}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Continuing Journey */}
        <div className="mt-5">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 md:p-5">
            {/* Subtle accent */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-cyan-300/70" />

            <div className="relative">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-300">
                Still Learning. Still Building.
              </p>

              <p className="max-w-4xl text-base font-light leading-6 text-[var(--foreground)] md:text-lg">
                For me, software development is not just about writing code. It
                is about understanding how systems work, solving problems,
                designing reliable solutions, and continuously improving how
                software is built.
              </p>

              <p className="mt-3 max-w-4xl text-sm leading-5 text-[var(--muted)] md:text-[15px]">
                Today, my learning is extending into{" "}
                <span className="text-[var(--foreground)]">
                  Cloud Computing
                </span>
                , with a growing interest in how applications, services and data
                are deployed, managed and scaled. I&apos;m exploring platforms
                such as <span className="text-cyan-300">AWS</span>,{" "}
                <span className="text-cyan-300">Google Cloud</span> and{" "}
                <span className="text-cyan-300">Microsoft Azure</span>, while
                continuing to strengthen my software engineering skills.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Cloud Computing", "AWS", "Google Cloud", "Azure"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-[11px] text-[var(--muted)] transition-colors duration-300 hover:border-cyan-300/30 hover:text-cyan-300"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
