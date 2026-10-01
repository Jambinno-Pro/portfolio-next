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
    title: "Graphic Design",
    subtitle: "Where It All Started",
    icon: Palette,
    text: "My journey started with six years of experience as a Graphic Designer. I learned how to turn ideas into visual experiences, solve creative problems, and communicate through design.",
  },
  {
    number: "02",
    title: "Discovering Web Design",
    subtitle: "A New Direction",
    icon: Globe,
    text: "I was encouraged to explore Web Design. At first, I thought it would simply be another form of design. Then I discovered what was happening behind the visuals.",
  },
  {
    number: "03",
    title: "HTML, CSS & JavaScript",
    subtitle: "Curiosity Became Something More",
    icon: Code2,
    text: "Seeing HTML, CSS and JavaScript sparked my curiosity. I wanted to understand how websites worked, how browsers interpreted code, and how different parts of an application came together.",
  },
  {
    number: "04",
    title: "Backend Development",
    subtitle: "Going Behind the Interface",
    icon: Server,
    text: "Before long, I found myself going deeper into backend development. APIs, server-side logic, authentication and application architecture became just as exciting as the frontend.",
  },
  {
    number: "05",
    title: "Databases",
    subtitle: "Understanding the Data",
    icon: Database,
    text: "Then came databases. I became interested in how information is stored, structured, retrieved and connected to the applications people use every day.",
  },
  {
    number: "06",
    title: "Debugging & Problem Solving",
    subtitle: "I Enjoy The Challenge",
    icon: Bug,
    text: "Every bug and unexpected error became another opportunity to learn. I enjoy investigating problems, understanding why something fails, and working through the process of finding a solution.",
  },
  {
    number: "07",
    title: "Software Development",
    subtitle: "The Journey Continues",
    icon: Rocket,
    text: "Today, I'm continuing to grow as a Software Developer, building modern applications while exploring new technologies, contributing to open source, and constantly learning how things work beneath the surface.",
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

          <h2 className="text-3xl font-light leading-tight tracking-tight text-[var(--foreground)] md:text-4xl">
            From creativity to{" "}
            <span className="font-normal text-cyan-300">
              software development.
            </span>
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-5 text-[var(--muted)] md:text-[15px]">
            My journey started in graphic design and gradually took me deeper
            into web development, backend systems and databases.
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
                Still Learning. Still Exploring.
              </p>

              <p className="max-w-4xl text-base font-light leading-6 text-[var(--foreground)] md:text-lg">
                For me, the journey is not just about learning how to write
                code. It is about understanding how things work, solving
                problems, and always wanting to know what is happening behind
                the scenes.
              </p>

              <p className="mt-3 max-w-4xl text-sm leading-5 text-[var(--muted)] md:text-[15px]">
                Today, my curiosity is taking me further into{" "}
                <span className="text-[var(--foreground)]">
                  Cloud Computing{" "}
                </span>
                learning how applications, services and data can be stored,
                managed and moved across the cloud. I&apos;m exploring
                technologies and platforms such as{" "}
                <span className="text-cyan-300">AWS</span>,{" "}
                <span className="text-cyan-300">Google Cloud</span> and{" "}
                <span className="text-cyan-300">Microsoft Azure</span>, while
                continuing to discover what comes next.
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
