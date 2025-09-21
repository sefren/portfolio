import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { ExternalLink, ArrowLeft, Clock, GitBranch } from "lucide-react";
import { getProjectBySlug } from "@/lib/projects";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
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
  };
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
        <div className="max-w-3xl mx-auto px-8 py-32 space-y-24">
          {/* Back Navigation */}
          <div>
            <Button
                href="/"
                className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Button>
          </div>

          {/* Header */}
          <header className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h1 className="text-5xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">
                  {project.displayName}
                </h1>
                {isResearch && (
                    <span className="text-xs px-3 py-1.5 rounded-full font-mono uppercase tracking-wider bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Research
                </span>
                )}
              </div>

              {project.subtitle && (
                  <p className="text-sm font-mono text-neutral-500 tracking-wide">
                    {project.subtitle}
                  </p>
              )}
            </div>

            {/* Main description */}
            <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.description}
            </p>

            {/* ELI5 summary */}
            {project.eli5 && (
                <div className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-6">
                  <p className="text-base text-neutral-600 dark:text-neutral-400 italic leading-relaxed">
                    {project.eli5}
                  </p>
                </div>
            )}

            {/* Status + Role + Links */}
            <div className="flex flex-wrap gap-8 text-sm items-center pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span className={`font-medium ${statusColor}`}>
                {project.status}
              </span>
              </div>

              {project.role && (
                  <span className="font-mono text-neutral-600 dark:text-neutral-400">
                {project.role}
              </span>
              )}

              <div className="flex items-center gap-6">
                {project.github && (
                    <Button
                        href={project.github}
                        external
                        className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                    >
                      <GitBranch size={14} />
                      Source Code
                      <ExternalLink size={12} />
                    </Button>
                )}

                {project.externalLink && (
                    <Button
                        href={project.externalLink}
                        external
                        className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                    >
                      View Live
                      <ExternalLink size={12} />
                    </Button>
                )}
              </div>
            </div>
          </header>

          {/* Implementation Details */}
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                {isResearch ? "Research Contributions" : "Implementation Features"}
              </h2>
              <div className="mt-4 h-px bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800"></div>
            </div>

            <ul className="space-y-6 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-4">
                <span className="mt-1 text-sm text-neutral-400 font-mono w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                    <span>{f}</span>
                  </li>
              ))}
            </ul>
          </section>

          {/* System Components + Tech */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {isResearch ? "Model Components" : "System Modules"}
                </h3>
                <div className="mt-3 h-px bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800"></div>
              </div>

              <div className="space-y-4">
                {project.modules.map((m, i) => (
                    <div key={i} className="text-base font-medium text-neutral-700 dark:text-neutral-300">
                      {m}
                    </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Technology Stack
                </h3>
                <div className="mt-3 h-px bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800"></div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((s, i) => (
                      <span
                          key={i}
                          className="px-3 py-2 text-sm font-mono text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-md"
                      >
                    {s}
                  </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="text-sm text-neutral-500">
                    <span className="font-medium">Primary Focus:</span> {project.tech}
                  </div>
                  {project.github && (
                      <p className="mt-2 text-xs text-neutral-500">
                        Full implementation details available in the repository.
                      </p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Current State / Limitations */}
          {project.limitations && (
              <section className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {isResearch ? "Implementation Notes" : "Current State"}
                  </h3>
                  <div className="mt-3 h-px bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800"></div>
                </div>

                <div className="p-6 rounded-lg border-l-4 border-yellow-400/50 bg-yellow-50/50 dark:bg-yellow-900/10 dark:border-yellow-500/30">
                  <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {project.limitations}
                  </p>
                </div>
              </section>
          )}

          {/* Footer Navigation */}
          <section className="pt-16 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 text-sm text-neutral-500">
              <Button
                  href="/"
                  className="inline-flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-300"
              >
                <ArrowLeft size={16} />
                Back to Portfolio
              </Button>

              <div className="flex items-center gap-8">
                {project.github && (
                    <Button
                        href={project.github}
                        external
                        className="hover:text-neutral-700 dark:hover:text-neutral-300"
                    >
                      View Repository
                    </Button>
                )}
                {project.externalLink && (
                    <Button
                        href={project.externalLink}
                        external
                        className="hover:text-neutral-700 dark:hover:text-neutral-300"
                    >
                      View Live
                    </Button>
                )}
                <span className="text-xs font-mono opacity-60">
                © {new Date().getFullYear()}
              </span>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
  );
}