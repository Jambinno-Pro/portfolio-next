"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, Globe2 } from "lucide-react";

type ClientWebsite = {
  number: string;
  name: string;
  category: string;
  description: string;
  url: string;
};

const clientWebsites: ClientWebsite[] = [
  {
    number: "01",
    name: "Mother of Nations Academy",
    category: "Education",
    description:
      "A professional school website designed to present the institution, its programs and educational information through a clear and accessible digital platform.",
    url: "https://motherofnationsacademy.co.za/",
  },
  {
    number: "02",
    name: "Tabby Boutique",
    category: "Fashion & Lifestyle",
    description:
      "A fashion and lifestyle website created to present the brand, products and services through a professional online presence.",
    url: "https://tabbyboutique.co.za/",
  },
  {
    number: "03",
    name: "Tabby Hair Academy",
    category: "Education & Training",
    description:
      "A training and academy website focused on presenting hair education, courses and academy information to prospective students.",
    url: "https://tabbyhairacademy.co.za/",
  },
  {
    number: "04",
    name: "Realmac Energy",
    category: "Corporate",
    description:
      "A corporate website created to present the company's energy solutions, services and business information to potential clients.",
    url: "https://realmac-energy.co.za/",
  },
  {
    number: "05",
    name: "3B Luxury Coaches",
    category: "Transportation",
    description:
      "A transportation website built to present coach services, routes, travel information and booking-related details.",
    url: "https://3bluxurycoaches.co.za/",
  },
  {
    number: "06",
    name: "Transgenerational",
    category: "Corporate",
    description:
      "A professional corporate website designed to present the organisation, its services and key business information through a clear digital presence.",
    url: "https://transgenerational.co.za/",
  },
  {
    number: "07",
    name: "AES",
    category: "Corporate",
    description:
      "A professional business website created to present the company's services, capabilities and business information to its audience.",
    url: "https://aes.co.zw/",
  },
  {
    number: "08",
    name: "Afrika EP",
    category: "Corporate",
    description:
      "A professional website developed to present the organisation, its services and business information through a modern online platform.",
    url: "https://afrikaep.com/",
  },
];

export default function ClientWorkPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-cyan-400/[0.025] blur-3xl" />

        <div className="absolute bottom-[5%] right-[5%] h-80 w-80 rounded-full bg-blue-400/[0.02] blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.012] blur-3xl" />
      </div>

      {/* Page Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 sm:py-14 lg:px-10">
        {/* Back Navigation */}
        <div className="mb-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-cyan-300"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Header */}
        <header className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="h-px w-7 bg-cyan-300/60" />

            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-300">
              Additional Work
            </span>
          </div>

          <h1 className="text-2xl font-light leading-tight tracking-tight text-[var(--foreground)] sm:text-3xl md:text-4xl">
            Other{" "}
            <span className="font-normal text-cyan-300">
              Websites I&apos;ve Built.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-[15px]">
            A selection of websites and digital solutions I have worked on for
            different businesses and organisations. These projects reflect my
            experience working with real-world requirements, responsive
            interfaces and practical digital solutions.
          </p>
        </header>

        {/* Website Count */}
        <div className="mt-8 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-300">
            <Globe2 size={17} strokeWidth={1.5} />
          </div>

          <div>
            <p className="text-sm text-[var(--foreground)]">
              Selected client work
            </p>

            <p className="text-xs text-[var(--muted)]">
              {clientWebsites.length} websites
            </p>
          </div>
        </div>

        {/* Websites Grid */}
        <section className="mt-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clientWebsites.map((site) => (
              <article
                key={site.number}
                className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_20px_60px_rgba(34,211,238,0.05)]"
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-300/[0.035] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.07]" />

                {/* Card Header */}
                <div className="relative flex items-start justify-between">
                  <span className="text-xs font-medium tracking-[0.18em] text-cyan-300/60">
                    {site.number}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.08]">
                    <Globe2 size={17} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-5 flex-1">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-300/70">
                    {site.category}
                  </p>

                  <h2 className="mt-2 text-lg font-normal leading-tight text-[var(--foreground)] transition-colors duration-300 group-hover:text-cyan-100">
                    {site.name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {site.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="relative mt-5 h-px w-8 bg-cyan-300/30 transition-all duration-500 group-hover:w-14 group-hover:bg-cyan-300/60" />

                {/* Visit Website */}
                <div className="relative mt-4">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-cyan-300 transition-colors hover:text-cyan-100"
                  >
                    <span>Visit Website</span>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="mt-12 border-t border-[var(--border-soft)] pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
              These projects represent additional client work alongside my main
              software development case studies.
            </p>

            <Link
              href="/"
              className="inline-flex shrink-0 items-center gap-2 text-sm text-cyan-300 transition-colors hover:text-cyan-100"
            >
              <span>Back to Portfolio</span>

              <ExternalLink size={15} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
