"use client";

import { useEffect, useMemo, useState, type ElementType } from "react";
import { Code2, Database, Server, Wrench, Star, Layers3 } from "lucide-react";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiVercel,
  SiRender,
  SiDocker,
} from "react-icons/si";

import { getSkills, type Skill } from "@/lib/skills";

/* =========================================================
   TECHNOLOGY ICON MAPPING
   ========================================================= */

const skillIcons: Record<string, ElementType> = {
  javascript: SiJavascript,
  js: SiJavascript,

  typescript: SiTypescript,
  ts: SiTypescript,

  react: SiReact,
  "react.js": SiReact,

  nextjs: SiNextdotjs,
  "next.js": SiNextdotjs,

  nodejs: SiNodedotjs,
  "node.js": SiNodedotjs,

  express: SiExpress,
  "express.js": SiExpress,

  mongodb: SiMongodb,
  mongo: SiMongodb,

  mysql: SiMysql,

  postgresql: SiPostgresql,
  postgres: SiPostgresql,

  php: SiPhp,

  html: SiHtml5,
  html5: SiHtml5,

  css: SiCss,
  css3: SiCss,

  tailwind: SiTailwindcss,
  "tailwind css": SiTailwindcss,
  tailwindcss: SiTailwindcss,

  git: SiGit,

  github: SiGithub,

  vercel: SiVercel,

  render: SiRender,

  docker: SiDocker,
};

/* =========================================================
   CATEGORY ICONS
   ========================================================= */

const categoryIcons: Record<string, ElementType> = {
  frontend: Code2,
  "front-end": Code2,
  "front end": Code2,

  backend: Server,
  "back-end": Server,
  "back end": Server,

  database: Database,
  databases: Database,

  tools: Wrench,
  "tools & technologies": Wrench,
  technologies: Wrench,
};

/* =========================================================
   HELPERS
   ========================================================= */

function normalizeSkillName(name: string) {
  return name.toLowerCase().trim();
}

function getSkillIcon(name: string): ElementType | null {
  const normalizedName = normalizeSkillName(name);

  return skillIcons[normalizedName] || null;
}

function getCategoryIcon(category: string): ElementType {
  const normalizedCategory = category.toLowerCase().trim();

  return categoryIcons[normalizedCategory] || Layers3;
}

/* =========================================================
   COMPONENT
   ========================================================= */

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /* =======================================================
     LOAD SKILLS FROM BACKEND
     ======================================================= */

  useEffect(() => {
    let mounted = true;

    async function loadSkills() {
      try {
        setLoading(true);
        setError(false);

        const data = await getSkills();

        if (mounted) {
          setSkills(data);
        }
      } catch (err) {
        console.error("Failed to load skills:", err);

        if (mounted) {
          setSkills([]);
          setError(true);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadSkills();

    return () => {
      mounted = false;
    };
  }, []);

  /* =======================================================
     GROUP SKILLS BY CATEGORY
     ======================================================= */

  const groupedSkills = useMemo(() => {
    return skills.reduce<Record<string, Skill[]>>((groups, skill) => {
      const category = skill.category?.trim() || "Other";

      if (!groups[category]) {
        groups[category] = [];
      }

      groups[category].push(skill);

      return groups;
    }, {});
  }, [skills]);

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden border-b border-[var(--border-soft)] bg-[var(--background)] py-6 sm:py-8"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[15%] h-56 w-56 rounded-full bg-cyan-400/[0.025] blur-3xl" />

        <div className="absolute bottom-[10%] right-[8%] h-64 w-64 rounded-full bg-blue-400/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className="mb-5 max-w-3xl">
          <div className="mb-2 flex items-center gap-2.5">
            <span className="h-px w-7 bg-cyan-300/60" />

            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
              Skills
            </span>
          </div>

          <h2 className="text-xl font-light leading-tight tracking-tight text-[var(--foreground)] md:text-2xl">
            Technologies & <span className="text-cyan-300">Skills.</span>
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-5 text-[var(--muted)] md:text-[15px]">
            Technologies I use to build modern web applications, backend
            systems, APIs and reliable database-driven solutions.
          </p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-56 animate-pulse rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)]"
              />
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="rounded-2xl border border-red-400/10 bg-red-400/[0.03] px-5 py-6 text-center">
            <p className="text-sm text-[var(--muted)]">
              Unable to load skills at the moment.
            </p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && skills.length === 0 && (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-6 text-center">
            <p className="text-sm text-[var(--muted)]">
              No skills available yet.
            </p>
          </div>
        )}

        {/* Skills grid */}
        {!loading && !error && skills.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => {
              const CategoryIcon = getCategoryIcon(category);

              return (
                <div
                  key={category}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/20"
                >
                  {/* Accent line */}
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-cyan-300/70" />

                  {/* Category header */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-300">
                      <CategoryIcon size={19} strokeWidth={1.4} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] uppercase tracking-[0.18em] text-cyan-300">
                        Expertise
                      </p>

                      <h3 className="mt-0.5 truncate text-sm font-normal capitalize leading-5 text-[var(--foreground)]">
                        {category}
                      </h3>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    {categorySkills.map((skill) => {
                      const SkillIcon = getSkillIcon(skill.name);

                      return (
                        <div
                          key={skill._id || `${category}-${skill.name}`}
                          className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-2.5 transition-all duration-300 hover:border-cyan-300/20"
                        >
                          <div className="flex items-center justify-between gap-2.5">
                            {/* Skill information */}
                            <div className="flex min-w-0 items-center gap-2.5">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]">
                                {SkillIcon ? (
                                  <SkillIcon
                                    size={18}
                                    className="text-cyan-300"
                                  />
                                ) : skill.icon ? (
                                  <span className="text-sm text-cyan-300">
                                    {skill.icon}
                                  </span>
                                ) : (
                                  <Code2
                                    size={17}
                                    strokeWidth={1.4}
                                    className="text-cyan-300"
                                  />
                                )}
                              </div>

                              <span className="truncate text-sm leading-5 text-[var(--foreground)]">
                                {skill.name}
                              </span>
                            </div>

                            {/* Featured */}
                            {skill.featured && (
                              <Star
                                size={13}
                                strokeWidth={1.5}
                                className="shrink-0 text-cyan-300"
                              />
                            )}
                          </div>

                          {/* Proficiency */}
                          {typeof skill.level === "number" && (
                            <div className="mt-2.5">
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-[9px] uppercase tracking-wider text-[var(--muted-soft)]">
                                  Proficiency
                                </span>

                                <span className="text-[10px] text-[var(--muted-soft)]">
                                  {Math.min(Math.max(skill.level, 0), 100)}%
                                </span>
                              </div>

                              <div className="h-1 overflow-hidden rounded-full bg-[var(--border)]">
                                <div
                                  className="h-full rounded-full bg-cyan-300 transition-all duration-700"
                                  style={{
                                    width: `${Math.min(
                                      Math.max(skill.level, 0),
                                      100,
                                    )}%`,
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer note */}
        {!loading && !error && skills.length > 0 && (
          <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3">
            <p className="text-center text-sm leading-5 text-[var(--muted)]">
              My skills continue to evolve as I build software, work with modern
              technologies and strengthen my expertise in backend development,
              databases and application architecture.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
