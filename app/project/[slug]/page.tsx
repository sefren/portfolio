import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, ArrowLeft, Clock, GitBranch } from "lucide-react";
import { getProjectBySlug } from "@/lib/projects";
import Footer from "@/components/Footer";
import type { Metadata } from "next"

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.displayName,
    description: project.description,
    keywords: [...project.stack, ...project.modules, project.category],
    openGraph: {
      title: `${project.displayName} | Sefren`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.displayName} | Sefren`,
      description: project.shortDescription,
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  const isResearch = project.category === "research";
  const statusColor =
      project.status === "In Active Development"
          ? "text-green-600 dark:text-green-400"
          : project.status === "Research Implementation" ||
          project.status === "Research Prototype"
              ? "text-blue-600 dark:text-blue-400"
              : "text-yellow-600 dark:text-yellow-400";

  return (
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <div className="max-w-3xl mx-auto px-5 py-16 space-y-20">
          {/* Back */}
          <div className="group">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[var(--accent)] uppercase tracking-wide transition-all duration-200 group-hover:-translate-x-1"
            >
              <ArrowLeft
                  size={14}
                  className="group-hover:-translate-x-0.5 transition-transform duration-200"
              />
              Back to Portfolio
            </Link>
          </div>

          {/* Header */}
          <header className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight">
                  {project.displayName}
                </h1>
                {isResearch && (
                    <span className="text-xs px-2 py-1 rounded font-mono uppercase tracking-wider bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Research
                </span>
                )}
              </div>

              <p className="text-[11px] uppercase tracking-widest text-neutral-500 font-mono flex items-center gap-2">
                <span className="w-2 h-px bg-[var(--accent)]"></span>
                {project.subtitle}
              </p>
            </div>

            {/* Main description */}
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-prose">
              {project.description}
            </p>

            {/* ELI5 summary */}
            {project.eli5 && (
                <div className="mt-3 border-l-2 border-[var(--accent)]/40 pl-3">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 italic leading-relaxed">
                    {project.eli5}
                  </p>
                </div>
            )}

            {/* Status + Role + Links */}
            <div className="flex flex-wrap gap-6 text-sm text-neutral-500 items-center pt-2 border-t border-dotted border-neutral-300 dark:border-neutral-700">
              <div className="flex items-center gap-2">
                <Clock size={12} />
                <span className={`uppercase tracking-wide ${statusColor}`}>
                {project.status}
              </span>
              </div>

              {project.role && (
                  <span className="uppercase tracking-wide font-mono text-neutral-700 dark:text-neutral-300">
                {project.role}
              </span>
              )}

              {project.github && (
                  <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[var(--accent)] transition-colors group"
                  >
                    <GitBranch size={12} />
                    Source Code
                    <ExternalLink
                        size={12}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>
              )}

              {project.externalLink && (
                  <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[var(--accent)] transition-colors group"
                  >
                    View
                    <ExternalLink
                        size={12}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>
              )}
            </div>
          </header>

          {/* Implementation Details */}
          <section className="space-y-6">
            <div>
              <h2 className="text-sm sm:text-base font-semibold uppercase tracking-wide">
                {isResearch ? "Research Contributions" : "Implementation Features"}
              </h2>
              <div className="section-marker">
                <div></div>
                <div></div>
              </div>
            </div>

            <ul className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 text-[11px] text-[var(--accent)]/60 font-mono w-4 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                    <span>{f}</span>
                  </li>
              ))}
            </ul>
          </section>

          {/* System Components + Tech */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wide">
                  {isResearch ? "Model Components" : "System Modules"}
                </h3>
                <div className="section-marker">
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div className="space-y-3">
                {project.modules.map((m, i) => (
                    <div key={i} className="flex items-start gap-3">
                  <span className="block font-medium text-[0.95em] uppercase tracking-wide">
                    {m}
                  </span>
                    </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wide">
                  Technology Stack
                </h3>
                <div className="section-marker">
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-sm font-mono text-neutral-700 dark:text-neutral-300">
                {project.stack.map((s, i) => (
                    <span
                        key={i}
                        className="px-3 py-1.5 rounded text-[0.85em] bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                  {s}
                </span>
                ))}
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2 text-neutral-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/60"></span>
                  <span className="uppercase tracking-wide">
                  Primary Focus: {project.tech}
                </span>
                </div>
                <p className="text-[11px] uppercase tracking-widest text-neutral-500 opacity-75">
                  Full implementation details available in the repository.
                </p>
              </div>
            </div>
          </section>

          {/* Current State / Limitations */}
          {project.limitations && (
              <section className="space-y-6">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wide">
                    {isResearch ? "Implementation Notes" : "Current State"}
                  </h3>
                  <div className="section-marker">
                    <div></div>
                    <div></div>
                  </div>
                </div>

                <div className="p-4 rounded border-l-2 border-yellow-400/40 bg-yellow-50/30 dark:bg-yellow-900/10 dark:border-yellow-500/30">
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {project.limitations}
                  </p>
                </div>
              </section>
          )}

          {/* Footer */}
          <section className="pt-10 dark:border-neutral-800 text-xs text-neutral-500 flex flex-col sm:flex-row justify-between gap-4">
            <Link
                href="/"
                className="inline-flex items-center gap-2 hover:text-[var(--accent)] uppercase tracking-wide transition-all duration-200 group"
            >
              <ArrowLeft
                  size={14}
                  className="group-hover:-translate-x-0.5 transition-transform duration-200"
              />
              Back to Portfolio
            </Link>
            <div className="flex items-center gap-6">
              {project.github && (
                  <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uppercase tracking-widest hover:text-[var(--accent)] transition-colors"
                  >
                    View Repository
                  </a>
              )}
              {project.externalLink && (
                  <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uppercase tracking-widest hover:text-[var(--accent)] transition-colors"
                  >
                    View
                  </a>
              )}
              <span className="font-mono opacity-60">
              © {new Date().getFullYear()}
            </span>
            </div>
          </section>
          <Footer />
        </div>
      </main>
  );
}
