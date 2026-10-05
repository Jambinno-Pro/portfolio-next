"use client";

import {
  Camera,
  Code2,
  Globe2,
  Lightbulb,
  Music,
  Plane,
  ArrowUpRight,
} from "lucide-react";

type Hobby = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type ClientWebsite = {
  name: string;
  description: string;
  url: string;
};

const hobbies: Hobby[] = [
  {
    title: "Technology",
    description:
      "Exploring new technologies, development tools and emerging ideas that can improve the way I build software.",
    icon: Code2,
  },
  {
    title: "Learning",
    description:
      "Continuously learning through courses, documentation, tutorials and hands-on projects to expand my technical knowledge.",
    icon: Lightbulb,
  },
  {
    title: "Photography",
    description:
      "Capturing interesting places, moments and details while developing my creative eye.",
    icon: Camera,
  },
  {
    title: "Music",
    description:
      "Listening to music as a way to relax, stay focused and recharge while working or exploring new ideas.",
    icon: Music,
  },
  {
    title: "Travel & Exploration",
    description:
      "Discovering new places, experiencing different environments and learning from new surroundings.",
    icon: Plane,
  },
  {
    title: "The Web",
    description:
      "Exploring websites, digital products and online platforms to understand how they are designed, built and experienced.",
    icon: Globe2,
  },
];

const clientWebsites: ClientWebsite[] = [
  {
    name: "Mother of Nations Academy",
    description:
      "A professional school website designed to present the institution, its programs and educational information.",
    url: "https://motherofnationsacademy.co.za/",
  },
  {
    name: "Tabby Boutique",
    description:
      "A fashion and lifestyle website created to present the brand, products and services online.",
    url: "https://tabbyboutique.co.za/",
  },
  {
    name: "Tabby Hair Academy",
    description:
      "A training and academy website focused on presenting hair education, courses and academy information.",
    url: "https://tabbyhairacademy.co.za/",
  },
  {
    name: "Realmac Energy",
    description:
      "A corporate website created to present the company's energy solutions and business services.",
    url: "https://realmac-energy.co.za/",
  },
  {
    name: "Lux Butlers",
    description:
      "A professional service website designed to present luxury hospitality and butler services.",
    url: "https://luxbutlers.co.za/",
  },
  {
    name: "3B Luxury Coaches",
    description:
      "A transportation website built to present coach services, routes and travel information.",
    url: "https://3bluxurycoaches.co.za/",
  },
];

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="relative scroll-mt-24 overflow-hidden border-b border-[var(--border-soft)] bg-[var(--background)] py-6 sm:py-8"
    >
      {/* Background Effects */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[20%] h-48 w-48 rounded-full bg-cyan-400/[0.025] blur-3xl" />

        <div className="absolute bottom-[10%] right-[8%] h-56 w-56 rounded-full bg-blue-400/[0.025] blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.012] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Heading */}

        <div className="mb-5 max-w-3xl">
          <div className="mb-2 flex items-center gap-2.5">
            <span className="h-px w-7 bg-cyan-300/60" />

            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-300">
              Beyond Code
            </span>
          </div>

          <h2 className="text-xl font-light leading-tight tracking-tight text-[var(--foreground)] md:text-2xl">
            Interests & <span className="text-cyan-300">Hobbies.</span>
          </h2>

          <p className="mt-2 max-w-2xl text-[15px] leading-5 text-[var(--muted)]">
            Outside of software development, I enjoy activities that keep me
            curious, creative and continuously learning.
          </p>
        </div>

        {/* Hobbies Grid */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;

            return (
              <article
                key={hobby.title}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_20px_60px_rgba(34,211,238,0.05)]"
              >
                {/* Card Glow */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-28 w-28 rounded-full bg-cyan-300/[0.035] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.07]" />

                {/* Icon */}

                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.08]">
                  <Icon size={18} strokeWidth={1.5} />
                </div>

                {/* Content */}

                <div className="relative mt-3">
                  <h3 className="text-base font-normal leading-tight text-[var(--foreground)] transition-colors duration-300 group-hover:text-cyan-100">
                    {hobby.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-[var(--muted)]">
                    {hobby.description}
                  </p>
                </div>

                {/* Bottom Accent */}

                <div className="relative mt-4 h-px w-8 bg-cyan-300/30 transition-all duration-500 group-hover:w-14 group-hover:bg-cyan-300/60" />
              </article>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-4">
          <p className="text-sm leading-6 text-[var(--muted)]">
            One other thing I&apos;ve also worked on a few client websites and
            digital projects, WordPress-based solutions built around client
            requirements.{" "}
            <a
              href="/client-work"
              className="whitespace-nowrap font-medium !text-[#50dfd3] transition-colors hover:!text-[#076961]"
            >
              See some of that work <span className="ml-1">↗</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
