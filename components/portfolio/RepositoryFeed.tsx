import { FaGithub } from "react-icons/fa";
import { getGitHubRepositories } from "@/lib/github";
import RepositoryGrid from "./RepositoryGrid";

export default async function RepositoryFeed() {
  try {
    const repositories = await getGitHubRepositories();

    return (
      <section
        id="repositories"
        className="relative scroll-mt-24 overflow-hidden border-b border-white/[0.06] py-6 sm:py-8"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Section heading */}
          <div className="mb-5 max-w-3xl">
            <div className="mb-2 flex items-center gap-2.5">
              <span className="h-px w-7 bg-cyan-300/60" />

              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-300">
                Open Source
              </span>
            </div>

            <h2 className="text-xl font-light leading-tight tracking-tight text-white md:text-2xl">
              GitHub <span className="text-cyan-300">Repositories.</span>
            </h2>

            <p className="mt-2 text-[15px] leading-5 text-slate-400">
              A live feed of my public GitHub repositories, projects,
              experiments, and development work.
            </p>
          </div>

          {/* Repository grid */}
          {repositories.length === 0 ? (
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-center">
              <p className="text-sm leading-5 text-slate-400">
                No public repositories found.
              </p>
            </div>
          ) : (
            <RepositoryGrid repositories={repositories} />
          )}
        </div>
      </section>
    );
  } catch {
    return (
      <section
        id="repositories"
        className="relative scroll-mt-24 overflow-hidden border-b border-white/[0.06] py-6 sm:py-8"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
            <FaGithub className="mx-auto mb-3 text-3xl text-slate-500" />

            <h2 className="text-xl font-medium leading-tight text-white">
              GitHub Repositories
            </h2>

            <p className="mt-2 text-sm leading-5 text-slate-400">
              GitHub repositories are currently unavailable. Please visit my
              GitHub profile directly.
            </p>

            <a
              href="https://github.com/Jambinno-Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300"
            >
              Visit GitHub
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
