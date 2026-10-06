"use client";

import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";

const education = [
  // {
  //   school: "University of South Africa (UNISA)",
  //   achievement: "Diploma in Information Technology — In Progress",
  // },
  {
    school: "Chibuwe High School",
    achievement: "O'Level",
  },
  {
    school: "Get Smarter UCT",
    achievement: "Graphic Design",
  },
  {
    school: "Escola Secundaria Paulo Samuel Kankhomba",
    achievement: "Completed 10ª classe in Chimoio, Mozambique",
  },
];

const certifications = [
  {
    provider: "Udemy",
    certificates: ["The Complete Full-Stack Web Development Bootcamp"],
  },
  {
    provider: "LinkedIn Learning",
    certificates: ["Database Development"],
  },
  {
    provider: "ALX Africa",
    certificates: ["Software Development"],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/[0.06] py-6 sm:py-8"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[15%] h-56 w-56 rounded-full bg-cyan-400/[0.035] blur-3xl" />

        <div className="absolute bottom-[10%] right-[5%] h-64 w-64 rounded-full bg-blue-400/[0.035] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-5 max-w-3xl">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
            Education
          </p>

          <h2 className="text-xl font-light leading-tight tracking-tight text-white md:text-2xl">
            Education &{" "}
            <span className="font-normal text-cyan-300">Certifications.</span>
          </h2>

          <p className="mt-2 text-sm leading-5 text-slate-400 md:text-[15px]">
            Academic foundations, professional training and continuous
            development in software engineering and technology.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-7">
          {/* Education */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-all duration-500 hover:border-cyan-300/20 md:p-5">
            {/* Accent */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-cyan-300/70" />

            {/* Header */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-300">
                <GraduationCap size={19} strokeWidth={1.4} />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-300">
                  Education
                </p>

                <h3 className="mt-0.5 text-lg font-normal leading-tight text-white">
                  Academic Background
                </h3>
              </div>
            </div>

            {/* Education items */}
            <div className="space-y-2">
              {education.map((item) => (
                <div
                  key={`${item.school}-${item.achievement}`}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5 transition-all duration-300 hover:border-cyan-300/20"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-cyan-300"
                    />

                    <div>
                      <h4 className="text-sm font-normal leading-5 text-white">
                        {item.school}
                      </h4>

                      <p className="mt-0.5 text-sm leading-5 text-slate-400">
                        {item.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-all duration-500 hover:border-cyan-300/20 md:p-5">
            {/* Accent */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-cyan-300/70" />

            {/* Header */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-300">
                <Award size={19} strokeWidth={1.4} />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-300">
                  Certifications
                </p>

                <h3 className="mt-0.5 text-lg font-normal leading-tight text-white">
                  Professional Learning
                </h3>
              </div>
            </div>

            {/* Certification items */}
            <div className="space-y-2">
              {certifications.map((certification) => (
                <div
                  key={certification.provider}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen
                      size={16}
                      strokeWidth={1.5}
                      className="text-cyan-300"
                    />

                    <h4 className="text-sm font-normal leading-5 text-white">
                      {certification.provider}
                    </h4>
                  </div>

                  <div className="mt-2 space-y-1.5">
                    {certification.certificates.map((certificate, index) => (
                      <div
                        key={`${certificate}-${index}`}
                        className="flex items-start gap-2.5 text-sm leading-5 text-slate-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300/70" />

                        <span>{certificate}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning statement */}
        <div className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 py-3">
          <p className="text-center text-sm leading-5 text-slate-400">
            Continuously learning, building and strengthening my skills in
            software engineering, backend development, databases, cloud
            computing and modern application architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
