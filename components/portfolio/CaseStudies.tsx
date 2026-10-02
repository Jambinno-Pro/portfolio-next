"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  X,
  Globe,
  Code2,
  CheckCircle2,
} from "lucide-react";

import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiWordpress,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiVite,
  SiSupabase,
  SiPostgresql,
} from "react-icons/si";

type CaseStudy = {
  id: number;
  number: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    number: "01",
    title: "EventBook - Event Management System",
    category: "Web Development",
    description:
      "A full-stack event booking and registration platform designed to simplify event publishing, attendee registration, booking management and event administration.",
    challenge:
      "Traditional event registration can involve multiple manual steps for publishing events, collecting attendee information, verifying payment references and maintaining registration records. The project required a centralized system that could bring these processes together while keeping event capacity and registration information organized.",
    solution:
      "I developed EventBook as a full-stack platform with two main experiences: a user-facing event booking system and an administrative dashboard. Users can create accounts, browse events, register attendees, provide payment references and upload proof of payment. Administrators can create and manage events, monitor registrations, view payment documentation, track event capacity and export registration records.",
    features: [
      "User registration and authentication",
      "Event creation and management",
      "Event search by name or venue",
      "Online event registration",
      "Attendee quantity selection",
      "Payment reference collection",
      "Proof-of-payment uploads",
      "Event capacity tracking",
      "Admin dashboard",
      "CSV registration export",
      "Printable registration lists",
      "Social media event sharing",
    ],
    technologies: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vite",
      "Supabase",
      "PostgreSQL",
    ],
    outcome:
      "EventBook transformed a traditionally manual registration process into a centralized digital platform for event publishing, attendee registration, payment-proof collection, capacity tracking, administration and reporting.",
    liveUrl: "https://eventbook-omega.vercel.app/",
    githubUrl: "https://github.com/Jambinno-Pro/eventbook",
  },

  {
    id: 2,
    number: "02",
    title: "My Portfolio",
    category: "Web Development",
    description:
      "A personal software developer portfolio built to present my professional journey, technical skills, experience and selected projects.",
    challenge:
      "The goal was to create a portfolio that goes beyond displaying information and demonstrates my ability to build modern web applications and work with backend systems and databases.",
    solution:
      "I developed the portfolio using a component-based architecture with responsive interfaces, backend-connected professional information and dedicated case studies for selected projects.",
    features: [
      "Responsive design",
      "Dynamic resume information",
      "Dynamic skills",
      "Project case studies",
      "Contact functionality",
      "Dark and light theme support",
      "GitHub Repository API feed",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    outcome:
      "The portfolio provides a central professional platform for presenting my development experience, technical capabilities and software projects.",
    liveUrl: "https://portfolio-xf9j.onrender.com/",
    githubUrl: "https://github.com/Jambinno-Pro/portfolio",
  },

  {
    id: 3,
    number: "03",
    title: "Green Shuttle — Full-Stack Shuttle Management Platform",
    category: "Web Development",
    description:
      "Green Shuttle is a full-stack transportation management platform designed to simplify shuttle services by connecting passengers with reliable transport information while giving administrators a centralized system to manage the platform. The project was developed as a modern web application with a responsive user interface, secure authentication, database integration, email communication, and an administrative dashboard.",
    challenge:
      "My client was managing their shuttle-service operations through traditional and largely manual processes. Communication with users was fragmented, administrative tasks were time-consuming, and it was difficult to keep passengers consistently informed about available services and updates. The client needed a centralized digital platform that would bring the entire shuttle operation together allowing users to access services and information easily, while giving administrators a streamlined system to manage users, services, communication, and day-to-day operations from one place. ",
    solution:
      "I developed Greens Shuttle as a full-stack web application with separate user-facing and administrative functionality. A major part of the project was the Admin Dashboard, which provides administrators with centralized control over the platform. The dashboard allows administrators to manage and monitor important system information rather than relying on manual database changes. ",
    features: [
      "Shuttle service presentation",
      "Route information",
      "Responsive interface",
      "Service information",
      "Mobile-friendly design",
      "Email communication",
      "User account functionality",
      "Secure login",
      "Database-driven management",
      "Centralized platform monitoring",
      "Administrative controls",
      "Secure Admin Login",
    ],
    technologies: [
      "React",
      "Node.js",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "APIs",
      "Email System, 'CSS",
      "Git",
      "GitHub",
    ],
    outcome:
      "The project provided Greens Shuttle with a professional digital platform for presenting its transportation services and essential information. Green Shuttle demonstrates my ability to build a complete web application from frontend interface through to backend infrastructure.",
    liveUrl: "https://www.greensshuttle.co.za/",
    githubUrl: "https://github.com/Jambinno-Pro/portfolio",
  },

  {
    id: 4,
    number: "04",
    title: "Database Development",
    category: "Database Development",
    description:
      "A database-focused development project exploring how application data can be structured, stored, accessed and managed efficiently.",
    challenge:
      "The project focused on understanding the relationship between application logic and persistent data while creating a reliable structure for managing information.",
    solution:
      "I worked with database structures, data modelling, CRUD operations and backend integration to understand how modern applications communicate with databases.",
    features: [
      "Data modelling",
      "CRUD operations",
      "Database relationships",
      "Backend integration",
      "Structured data management",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "REST API"],
    outcome:
      "The project strengthened my understanding of database architecture and the connection between backend applications and persistent data.",
  },
];

type ClientWebsite = {
  name: string;
  category: string;
  url: string;
};

const clientWebsites: ClientWebsite[] = [
  {
    name: "Mother of Nations Academy",
    category: "Education",
    url: "https://motherofnationsacademy.co.za/",
  },
  {
    name: "Tabby Boutique",
    category: "Fashion & Retail",
    url: "https://tabbyboutique.co.za/",
  },
  {
    name: "Tabby Hair Academy",
    category: "Hair Training & Education",
    url: "https://tabbyhairacademy.co.za/",
  },
  {
    name: "Realmac Energy",
    category: "Energy",
    url: "https://realmac-energy.co.za/",
  },
  {
    name: "Lux Butlers",
    category: "Luxury Services",
    url: "https://luxbutlers.co.za/",
  },
  {
    name: "Afrika EP",
    category: "Business Website",
    url: "https://afrikaep.com/",
  },
  {
    name: "Modern Invest",
    category: "Investment",
    url: "https://moderninvest.co.za/",
  },
  {
    name: "AES Zimbabwe",
    category: "Business Website",
    url: "https://aes.co.zw/",
  },
];

function TechnologyIcon({ name }: { name: string }) {
  const normalized = name.toLowerCase().trim();

  if (normalized === "next.js") return <SiNextdotjs size={17} />;
  if (normalized === "typescript") return <SiTypescript size={17} />;
  if (normalized === "react") return <SiReact size={17} />;
  if (normalized === "tailwind css") return <SiTailwindcss size={17} />;
  if (normalized === "node.js") return <SiNodedotjs size={17} />;
  if (normalized === "express.js") return <SiExpress size={17} />;
  if (normalized === "mongodb") return <SiMongodb size={17} />;
  if (normalized === "mysql") return <SiMysql size={17} />;
  if (normalized === "php") return <SiPhp size={17} />;
  if (normalized === "wordpress") return <SiWordpress size={17} />;
  if (normalized === "javascript") return <SiJavascript size={17} />;
  if (normalized === "html5" || normalized === "html") {
    return <SiHtml5 size={17} />;
  }
  if (normalized === "css3" || normalized === "css") {
    return <SiCss size={17} />;
  }
  if (normalized === "git") return <SiGit size={17} />;
  if (normalized === "github") return <SiGithub size={17} />;
  if (normalized === "vite") return <SiVite size={17} />;
  if (normalized === "supabase") return <SiSupabase size={17} />;
  if (normalized === "postgresql" || normalized === "postgres") {
    return <SiPostgresql size={17} />;
  }

  return <Code2 size={17} />;
}

export default function CaseStudies() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(
    null,
  );
  const [showClientWebsites, setShowClientWebsites] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedCaseStudy ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCaseStudy]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCaseStudy(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* =========================================================
          CASE STUDIES SECTION
      ========================================================= */}

      <section
        id="case-studies"
        className="relative scroll-mt-24 overflow-hidden border-b border-[var(--border-soft)] bg-[var(--background)] py-6 sm:py-8"
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[5%] top-[10%] h-56 w-56 rounded-full bg-cyan-400/[0.035] blur-3xl" />

          <div className="absolute bottom-[10%] right-[5%] h-64 w-64 rounded-full bg-blue-400/[0.025] blur-3xl" />

          <div className="absolute left-[45%] top-[35%] h-56 w-56 rounded-full bg-cyan-300/[0.015] blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Section Heading */}

          <div className="mb-5 max-w-3xl">
            <div className="mb-2 flex items-center gap-2.5">
              <span className="h-px w-7 bg-cyan-300/60" />

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                Projects
              </span>
            </div>

            <h2 className="text-3xl font-light leading-tight tracking-tight text-[var(--foreground)] md:text-4xl">
              Selected <span className="text-cyan-300">Case Studies.</span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-5 text-[var(--muted)] md:text-[15px]">
              A closer look at selected projects, the challenges they addressed,
              the technologies used and how I approached their development.
            </p>
          </div>

          {/* Project Grid */}

          <div className="grid gap-4 md:grid-cols-2">
            {caseStudies.map((project) => (
              <article
                key={project.id}
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_20px_80px_rgba(34,211,238,0.06)] md:p-5"
              >
                {/* Card Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-300/[0.04] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.08]" />

                {/* Card Header */}

                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-300">
                      Case Study {project.number}
                    </p>

                    <p className="mt-1.5 text-[10px] uppercase tracking-wider text-[var(--muted-soft)]">
                      {project.category}
                    </p>
                  </div>

                  <span className="text-3xl font-light text-[var(--foreground)]/[0.055] transition-colors duration-500 group-hover:text-cyan-300/[0.12]">
                    {project.number}
                  </span>
                </div>

                {/* Title */}

                <h3 className="relative mt-4 max-w-md text-lg font-light leading-tight text-[var(--foreground)] transition-colors duration-300 group-hover:text-cyan-100 md:text-xl">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="relative mt-2 line-clamp-3 text-sm leading-5 text-[var(--muted)]">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="relative mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((technology) => (
                    <span
                      key={technology}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-2.5 py-1.5 text-[11px] text-[var(--muted)] transition-all duration-300 hover:border-cyan-300/20 hover:text-cyan-300"
                    >
                      <span className="text-cyan-300">
                        <TechnologyIcon name={technology} />
                      </span>

                      {technology}
                    </span>
                  ))}
                </div>

                {/* Card Footer */}

                <div className="relative mt-auto flex items-center justify-between pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedCaseStudy(project)}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-4 py-2 text-xs text-cyan-300 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:shadow-[0_0_25px_rgba(103,232,249,0.08)]"
                  >
                    View Case Study
                    <ArrowUpRight size={14} />
                  </button>

                  <span className="text-[var(--muted-soft)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300/60">
                    <ArrowUpRight size={19} strokeWidth={1.2} />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Client Website Builds */}
          <div className="mt-7 border-t border-[var(--border-soft)] pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                  Additional Client Work
                </p>
                <h3 className="mt-2 text-xl font-light tracking-tight text-[var(--foreground)] sm:text-2xl">
                  Client Website Builds
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Websites built around client requirements, business goals and
                  brand needs, including client-requested WordPress websites.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowClientWebsites((visible) => !visible)}
                aria-expanded={showClientWebsites}
                aria-controls="client-websites-list"
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border border-cyan-300/25 bg-cyan-300/[0.06] px-4 py-2.5 text-xs font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:shadow-[0_0_25px_rgba(103,232,249,0.08)] sm:self-center"
              >
                {showClientWebsites
                  ? "Hide Client Websites"
                  : "View Client Websites"}
                <ArrowUpRight
                  size={14}
                  className={`transition-transform duration-300 ${
                    showClientWebsites ? "rotate-45" : ""
                  }`}
                />
              </button>
            </div>

            {showClientWebsites && (
              <div
                id="client-websites-list"
                className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
              >
                {clientWebsites.map((website, index) => (
                  <article
                    key={website.url}
                    className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:shadow-[0_12px_35px_rgba(34,211,238,0.05)]"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/[0.035] blur-2xl transition-all duration-300 group-hover:bg-cyan-300/[0.08]" />

                    <div className="relative flex items-start justify-between gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-300">
                        <SiWordpress size={17} />
                      </div>
                      <span className="text-[10px] tracking-widest text-[var(--muted-soft)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h4 className="relative mt-4 text-base font-normal leading-snug text-[var(--foreground)] transition-colors group-hover:text-cyan-100">
                      {website.name}
                    </h4>
                    <p className="relative mt-1 text-xs text-[var(--muted-soft)]">
                      {website.category}
                    </p>
                    <p className="relative mt-3 break-all text-xs leading-5 text-[var(--muted)]">
                      {website.url
                        .replace(/^https?:\/\//, "")
                        .replace(/\/$/, "")}
                    </p>

                    <a
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative mt-4 inline-flex items-center gap-2 self-start rounded-full border border-cyan-300/20 px-3 py-2 text-xs text-cyan-300 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]"
                    >
                      Visit Website
                      <ExternalLink size={13} />
                    </a>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          FULL SCREEN CASE STUDY MODAL
      ========================================================= */}

      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#020812]"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCaseStudy.title} case study`}
        >
          {/* Modal Background */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.07] blur-[120px]" />

            <div className="absolute -bottom-40 -right-20 h-[550px] w-[550px] rounded-full bg-blue-500/[0.055] blur-[130px]" />

            <div className="absolute left-1/2 top-[30%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-300/[0.02] blur-[100px]" />

            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(103,232,249,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,0.5) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <div className="absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-cyan-300/30 shadow-[0_0_20px_rgba(103,232,249,0.6)]" />

            <div className="absolute right-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-cyan-300/20" />

            <div className="absolute bottom-[20%] left-[20%] h-1.5 w-1.5 rounded-full bg-cyan-300/20" />
          </div>

          {/* Modal Header */}

          <header className="relative z-20 border-b border-white/[0.08] bg-[#020812]/80 backdrop-blur-2xl">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-10 md:py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.06] text-[11px] font-medium text-cyan-300">
                  {selectedCaseStudy.number}
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500">
                    Case Study
                  </p>

                  <p className="text-xs text-slate-300">
                    {selectedCaseStudy.category}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCaseStudy(null)}
                aria-label="Close case study"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] hover:text-cyan-300"
              >
                <X
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-90"
                />
              </button>
            </div>
          </header>

          {/* Modal Scroll Area */}

          <div className="relative z-10 h-[calc(100vh-65px)] overflow-y-auto">
            <div className="mx-auto w-full max-w-7xl px-6 py-7 sm:px-8 lg:px-10 md:py-10">
              {/* Modal Hero */}

              <div className="relative overflow-hidden rounded-3xl border border-cyan-300/[0.12] bg-white/[0.025] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:p-7 lg:p-8">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/[0.06] blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-cyan-300/60" />

                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                      {selectedCaseStudy.category}
                    </p>
                  </div>

                  <h2 className="mt-4 max-w-5xl text-3xl font-light leading-tight tracking-tight text-white md:text-5xl">
                    {selectedCaseStudy.title}
                  </h2>

                  <p className="mt-3 max-w-3xl text-sm leading-5 text-slate-400 md:text-[15px]">
                    {selectedCaseStudy.description}
                  </p>

                  {/* Project Links */}

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {selectedCaseStudy.liveUrl && (
                      <a
                        href={selectedCaseStudy.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2.5 text-sm font-medium text-[#020812] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_10px_35px_rgba(103,232,249,0.2)]"
                      >
                        <Globe size={15} />
                        Live Website
                        <ExternalLink
                          size={13}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </a>
                    )}

                    {selectedCaseStudy.githubUrl && (
                      <a
                        href={selectedCaseStudy.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06] hover:text-white"
                      >
                        <SiGithub size={15} />
                        GitHub Source Code
                        <ExternalLink
                          size={13}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </a>
                    )}

                    {!selectedCaseStudy.liveUrl &&
                      !selectedCaseStudy.githubUrl && (
                        <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-sm text-slate-500">
                          Links coming soon
                        </span>
                      )}
                  </div>
                </div>
              </div>

              {/* Challenge / Approach */}

              <div className="my-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-cyan-300/15 md:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-300">
                      01
                    </span>

                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                      The Challenge
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-5 text-slate-400 md:text-[15px]">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-cyan-300/15 md:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-300">
                      02
                    </span>

                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                      My Approach
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-5 text-slate-400 md:text-[15px]">
                    {selectedCaseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Features */}

              <section className="mt-7">
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-cyan-300/60" />

                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                    Key Features
                  </p>
                </div>

                <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedCaseStudy.features.map((feature) => (
                    <div
                      key={feature}
                      className="group flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.025]"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-cyan-300"
                      />

                      <span className="text-sm leading-5 text-slate-400 transition-colors group-hover:text-slate-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technologies */}

              <section className="mt-7">
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-cyan-300/60" />

                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                    Technologies
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedCaseStudy.technologies.map((technology) => (
                    <div
                      key={technology}
                      className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-300/[0.04] hover:text-white"
                    >
                      <span className="text-cyan-300 transition-transform duration-300 group-hover:scale-110">
                        <TechnologyIcon name={technology} />
                      </span>

                      {technology}
                    </div>
                  ))}
                </div>
              </section>

              {/* Outcome */}

              <section className="mt-7">
                <div className="relative overflow-hidden rounded-2xl border border-cyan-300/[0.12] bg-cyan-300/[0.025] p-5">
                  <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-300/[0.04] blur-3xl" />

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-7 bg-cyan-300/60" />

                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                        Outcome
                      </p>
                    </div>

                    <p className="mt-3 max-w-4xl text-sm leading-5 text-slate-400 md:text-[15px]">
                      {selectedCaseStudy.outcome}
                    </p>
                  </div>
                </div>
              </section>

              {/* Close */}

              <div className="mt-7 flex justify-center border-t border-white/[0.07] pt-6">
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-slate-300 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.04] hover:text-white"
                >
                  Close Case Study
                  <X
                    size={15}
                    className="transition-transform duration-300 group-hover:rotate-90"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
