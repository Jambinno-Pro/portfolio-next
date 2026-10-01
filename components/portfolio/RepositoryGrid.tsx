"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaCodeBranch, FaStar } from "react-icons/fa";

type Repository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics?: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function RepositoryGrid({
  repositories,
}: {
  repositories: Repository[];
}) {
  const [showAll, setShowAll] = useState(false);

  const visibleRepositories = showAll ? repositories : repositories.slice(0, 8);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {visibleRepositories.map((repo) => (
          <article
            key={repo.id}
            className="group flex h-full min-h-[275px] flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.04]"
          >
            {/* Top */}
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-lg text-cyan-400">
                <FaGithub />
              </div>

              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${repo.name} on GitHub`}
                className="text-slate-500 transition hover:text-cyan-400"
              >
                <FaGithub size={18} />
              </Link>
            </div>

            {/* Name */}
            <h3 className="text-base font-medium leading-tight text-white transition group-hover:text-cyan-300">
              {repo.name}
            </h3>

            {/* Description */}
            <p className="mt-2 line-clamp-3 min-h-[60px] text-sm leading-5 text-slate-400">
              {repo.description ||
                "No description available for this repository."}
            </p>

            {/* Topics */}
            {repo.topics && repo.topics.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {repo.topics.slice(0, 4).map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-cyan-400/10 bg-cyan-400/5 px-2 py-0.5 text-[10px] text-cyan-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}

            <div className="flex-1" />

            {/* Metadata */}
            <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-3 text-[11px] text-slate-500">
              {repo.language && (
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  {repo.language}
                </span>
              )}

              <span className="flex items-center gap-1">
                <FaStar />
                {repo.stargazers_count}
              </span>

              <span className="flex items-center gap-1">
                <FaCodeBranch />
                {repo.forks_count}
              </span>

              <span className="ml-auto">{formatDate(repo.updated_at)}</span>
            </div>

            {/* View Repository */}
            <div className="mt-4">
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 transition hover:text-cyan-300"
              >
                View Repository
                <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* View More */}
      {repositories.length > 8 && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] hover:text-cyan-300"
          >
            {showAll ? "Show Fewer Repositories" : "View More Repositories"}

            <span
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>
      )}

      {/* Count */}
      <p className="mt-2 text-center text-[10px] uppercase tracking-[0.16em] text-slate-600">
        Showing {visibleRepositories.length} of {repositories.length}{" "}
        repositories
      </p>
    </>
  );
}
