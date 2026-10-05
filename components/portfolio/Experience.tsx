"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Calendar,
  Code2,
  Package,
  Palette,
  Server,
} from "lucide-react";

type Experience = {
  period: string;
  type: string;
  title: string;
  company: string;
  icon: typeof Code2;
  description: string;
  responsibilities: string[];
  technologies: string[];
  projects?: string[];
};

const experiences: Experience[] = [
  {
    period: "2021 — Present",
    type: "Professional Experience",
    title: "Software & Web Developer",
    company: "Emethyst Solutions & Projects",
    icon: Code2,
    description:
      "Design, develop and maintain modern web applications and software solutions with a strong focus on backend development, REST APIs, databases, business logic and reliable application architecture.",
    responsibilities: [
      "Developing modern web applications using TypeScript, React and Next.js",
      "Building backend services and RESTful APIs",
      "Implementing application business logic and core functionality",
      "Designing data models and working with application databases",
      "Working with MongoDB, MySQL, PostgreSQL and SQL-based systems",
      "Building CRUD operations and data-driven application features",
      "Implementing authentication and authorization functionality",
      "Integrating APIs and external services",
      "Debugging application issues and troubleshooting technical problems",
      "Improving application performance, reliability and maintainability",
      "Using Git and modern development workflows for source control",
      "Working with Docker and modern development environments",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "JWT",
      "MongoDB",
      "Mongoose",
      "MySQL",
      "PostgreSQL",
      "SQL",
      "Git",
      "Docker",
    ],
  },

  {
    period: "Freelance",
    type: "Software & Web Development",
    title: "Web Developer & Digital Solutions Developer",
    company: "AES",
    icon: BriefcaseBusiness,
    description:
      "Developed practical web solutions for business requirements, combining frontend development, backend functionality, database-driven features and technical problem solving.",
    responsibilities: [
      "Developing responsive business web applications",
      "Building interactive frontend functionality using JavaScript",
      "Implementing backend functionality using PHP",
      "Working with application data and database-driven features",
      "Developing and maintaining website functionality",
      "Creating structured product and business information systems",
      "Connecting frontend interfaces with backend functionality",
      "Troubleshooting and resolving technical issues",
      "Translating business requirements into practical software solutions",
      "Maintaining and improving existing web applications",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "jQuery",
      "MySQL",
      "REST APIs",
      "Git",
    ],
  },

  {
    period: "Freelance",
    type: "Software & Digital Solutions",
    title: "Web Developer & Digital Solutions Developer",
    company: "Tabby Enterprises",
    icon: Server,
    description:
      "Developed and maintained digital platforms for business and community initiatives, focusing on practical web applications, online functionality, business processes and technical problem solving.",
    responsibilities: [
      "Developing and maintaining business web applications",
      "Building responsive user interfaces and application features",
      "Implementing backend functionality and data-driven features",
      "Developing online booking and business functionality",
      "Managing application content and business data",
      "Connecting frontend interfaces with backend services",
      "Troubleshooting application and website issues",
      "Providing technical support and system maintenance",
      "Translating business requirements into practical digital solutions",
      "Supporting multiple business and community-focused digital platforms",
    ],
    projects: [
      "Tabby Boutique",
      "Tabby Hair Academy",
      "Tabby Youth Empowerment",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Git",
    ],
  },

  {
    period: "Warehouse Experience",
    type: "Inventory & Business Systems",
    title: "Warehouse & Inventory Systems",
    company: "Mahomed Mussa Wholesalers, Ltd.",
    icon: Package,
    description:
      "Worked with inventory processes and digital stock management systems, gaining practical experience in stock control, data accuracy, inventory movements and business operations.",
    responsibilities: [
      "Recording stock-in and stock-out transactions",
      "Updating and maintaining digital inventory records",
      "Tracking inventory movements and stock levels",
      "Maintaining accurate business and inventory data",
      "Working with system-based inventory records",
      "Supporting daily warehouse and stock management operations",
      "Understanding real-world inventory and business workflows",
      "Working with structured business information and data",
    ],
    technologies: [
      "Inventory Management Systems",
      "Stock Tracking",
      "Data Management",
      "Digital Record Keeping",
      "Inventory Data",
      "Database Concepts",
    ],
  },

  {
    period: "6 Years",
    type: "Creative Foundation",
    title: "Graphic Designer",
    company: "Professional Design Experience",
    icon: Palette,
    description:
      "Built a strong creative foundation through approximately six years of professional graphic design experience before transitioning into web development and software engineering.",
    responsibilities: [
      "Developing visual concepts based on client requirements",
      "Creating branding and marketing materials",
      "Designing digital and print assets",
      "Working with layouts, typography and visual composition",
      "Solving creative and communication problems",
      "Understanding client requirements and translating ideas into visual solutions",
      "Developing strong attention to detail and visual problem-solving skills",
    ],
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "CorelDRAW",
      "Branding",
      "Visual Design",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

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
          rootMargin: "-15% 0px -25% 0px",
        },
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/[0.06] py-8 sm:py-10"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[15%] h-56 w-56 rounded-full bg-cyan-400/[0.035] blur-3xl" />

        <div className="absolute bottom-[10%] right-[5%] h-64 w-64 rounded-full bg-blue-400/[0.035] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-7 max-w-3xl">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
            Experience
          </p>

          <h2 className="text-xl font-light leading-tight tracking-tight text-white md:text-2xl">
            Building through{" "}
            <span className="font-normal text-cyan-300">
              software development.
            </span>
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-5 text-slate-400 md:text-[15px]">
            My professional experience has evolved from creative problem solving
            into software development, with a growing focus on applications,
            backend systems, APIs, databases and practical digital solutions.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline background */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-white/10 md:block" />

          {/* Timeline progress */}
          <div
            className="absolute left-[19px] top-0 hidden w-px bg-cyan-300 transition-all duration-500 md:block"
            style={{
              height: `${((activeIndex + 1) / experiences.length) * 100}%`,
              boxShadow: "0 0 12px rgba(103, 232, 249, 0.5)",
            }}
          />

          <div className="space-y-5">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;

              return (
                <article
                  key={`${experience.title}-${experience.company}`}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  className="relative grid gap-4 md:grid-cols-[100px_1fr] md:gap-7"
                >
                  {/* Timeline node */}
                  <div className="relative hidden md:block">
                    <div
                      className={`
                        relative z-10 flex h-9 w-9 items-center 
                        justify-center rounded-full border 
                        transition-all duration-500 
                        ${
                          isActive
                            ? "scale-110 border-cyan-300 bg-cyan-300/15 text-cyan-300 shadow-[0_0_25px_rgba(103,232,249,0.3)]"
                            : isPast
                              ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-300"
                              : "border-white/10 bg-[#07111f] text-slate-600"
                        }
                      `}
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </div>

                    <span
                      className={`
                        absolute left-13 top-2 whitespace-nowrap 
                        text-[11px] tracking-widest 
                        transition-colors duration-500 
                        ${isActive ? "text-cyan-300" : "text-slate-600"}
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Experience card */}
                  <div
                    className={`
                      group relative overflow-hidden rounded-2xl 
                      border p-4 transition-all duration-700 md:p-5 
                      ${
                        isActive
                          ? "translate-x-1 border-cyan-300/30 bg-cyan-300/[0.045] shadow-[0_0_35px_rgba(103,232,249,0.06)]"
                          : "border-white/[0.08] bg-white/[0.02] opacity-80"
                      } 
                      hover:translate-x-1 hover:border-cyan-300/20 
                    `}
                  >
                    {/* Active side accent */}
                    <div
                      className={`
                        absolute left-0 top-0 h-full w-[2px] 
                        bg-cyan-300 transition-opacity duration-500 
                        ${isActive ? "opacity-100" : "opacity-0"} 
                      `}
                    />

                    {/* Mobile icon */}
                    <div className="mb-3 flex items-center gap-3 md:hidden">
                      <div
                        className={`
                          flex h-8 w-8 items-center justify-center 
                          rounded-full border 
                          ${
                            isActive
                              ? "border-cyan-300 bg-cyan-300/10 text-cyan-300"
                              : "border-white/10 text-slate-500"
                          }
                        `}
                      >
                        <Icon size={15} strokeWidth={1.5} />
                      </div>

                      <span className="text-[10px] tracking-widest text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Period */}
                    <div className="mb-2 flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-cyan-300">
                        <Calendar size={12} />
                        {experience.period}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-slate-700" />

                      <span className="text-[10px] uppercase tracking-[0.18em] text-slate-600">
                        {experience.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`
                        text-xl font-normal leading-tight 
                        transition-colors duration-500 
                        ${isActive ? "text-white" : "text-slate-300"} 
                      `}
                    >
                      {experience.title}
                    </h3>

                    {/* Company */}
                    <p className="mt-1 text-sm font-medium text-cyan-300/80">
                      {experience.company}
                    </p>

                    {/* Description */}
                    <p className="mt-2 max-w-3xl text-sm leading-5 text-slate-400 md:text-[15px]">
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-4">
                      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                        What I Worked On
                      </p>

                      <div className="grid gap-1.5 md:grid-cols-2">
                        {experience.responsibilities.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2.5 text-sm leading-5 text-slate-400"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300/70" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    {experience.projects && experience.projects.length > 0 && (
                      <div className="mt-4">
                        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                          Projects
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {experience.projects.map((project) => (
                            <span
                              key={project}
                              className="rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-1 text-[11px] text-slate-400"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="mt-4">
                      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                        Technologies & Skills
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="
                              rounded-full border border-white/10 
                              bg-white/[0.025] px-2.5 py-1 
                              text-[11px] text-slate-400 
                              transition-colors duration-300 
                              hover:border-cyan-300/30 
                              hover:text-cyan-300 
                            "
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card footer */}
                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3">
                      <span className="text-[11px] text-slate-600">
                        Experience {String(index + 1).padStart(2, "0")}
                      </span>

                      <ArrowUpRight
                        size={15}
                        className={`
                          transition-all duration-300 
                          ${isActive ? "text-cyan-300" : "text-slate-700"} 
                        `}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 md:p-5">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-cyan-300/70" />

            <div className="relative">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-300">
                What Experience Has Taught Me
              </p>

              <p className="max-w-4xl text-base font-light leading-6 text-slate-300 md:text-lg">
                My experience has taken me from creative problem solving into
                software development, where I now focus on building
                applications, APIs, databases and practical systems.
              </p>

              <p className="mt-3 max-w-4xl text-sm leading-5 text-slate-400 md:text-[15px]">
                I approach software development with both a creative and
                technical mindset — considering not only how an application
                works, but how its data is structured, how systems communicate,
                how problems can be solved efficiently, and how technology can
                create practical value for businesses and users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
