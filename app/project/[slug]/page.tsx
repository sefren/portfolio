import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { ExternalLink, ArrowLeft, Clock, GitBranch } from "lucide-react";
import { getProjectBySlug } from "@/lib/projects";
import Footer from "@/components/Footer";
import Rule from "@/components/Rule";
import Section from "@/components/Section";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    keywords: [...project.stack, project.category],
    openGraph: {
      title: `${project.title} | Sefren`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.title} | Sefren`,
      description: project.shortDescription,
    },
  };
}

const statusColors: Record<"active" | "completed" | "archived" | "prototype", string> = {
  active: "text-green-600 dark:text-green-400",
  completed: "text-blue-600 dark:text-blue-400",
  prototype: "text-purple-600 dark:text-purple-400",
  archived: "text-yellow-600 dark:text-yellow-400",
};

const statusLabels: Record<"active" | "completed" | "archived" | "prototype", string> = {
  active: "In Active Development",
  completed: "Completed",
  prototype: "Prototype",
  archived: "Archived",
};

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  const isPortfolio = params.slug === "portfolio";

  return (
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="mb-8 sm:mb-12">
            <Button
                href="/"
                className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                aria-label="Back to portfolio"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Button>
          </div>

          <header className="space-y-8 mb-16 sm:mb-20">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">
                    {project.title.toUpperCase()}
                  </h1>
                  {isPortfolio && (
                      <span className="ml-2 text-sm text-neutral-400 italic">this looks familiar…</span>
                  )}
                </div>

                {project.subtitle && (
                    <p className="text-sm font-mono text-neutral-500 tracking-wide">{project.subtitle}</p>
                )}
              </div>

              <div className="flex flex-col items-start lg:items-end gap-2">
                {project.category === "research" && (
                    <span className="text-xs px-3 py-1 rounded-full font-mono uppercase tracking-wider bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">Research</span>
                )}

                <div className="flex items-center gap-2 text-sm">
                  <Clock size={14} />
                  <span className={`font-medium ${statusColors[project.status]}`}>{statusLabels[project.status]}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              {project.github && (
                  <Button href={project.github} external aria-label="View source" className="inline-flex items-center gap-2 text-sm">
                    <GitBranch size={14} />
                    View Source
                    <ExternalLink size={12} />
                  </Button>
              )}

              {project.externalLink && (
                  isPortfolio ? (
                      <Button
                          href={`/`}
                          aria-label="View live project"
                          className="inline-flex items-center gap-2 text-sm"
                      >
                        View Live
                        <ExternalLink size={12} />
                      </Button>
                  ) : (
                      <Button href={project.externalLink} external aria-label="View live project" className="inline-flex items-center gap-2 text-sm">
                        View Live
                        <ExternalLink size={12} />
                      </Button>
                  )
              )}
            </div>

            <div className="space-y-6">
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">{project.description}</p>

              {project.eli5 && (
                  <div className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-6">
                    <p className="text-base text-neutral-600 dark:text-neutral-400 italic leading-relaxed text-justify">{project.eli5}</p>
                  </div>
              )}
            </div>

            {project.role && <div className="text-sm font-mono text-neutral-600 dark:text-neutral-400">{project.role}</div>}
          </header>

          <div className="mb-16 sm:mb-20">
            <Section id="implementation" title={project.category === "research" ? "Research Contributions" : "Implementation Features"}>
              <ul className="space-y-6 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-1 text-sm text-neutral-400 font-mono w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span>{f}</span>
                    </li>
                ))}
              </ul>
            </Section>
          </div>

          <div className="mb-16 sm:mb-20">
            <Section headingLevel={3} title="Technology Stack">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">{project.stack.map((s) => (
                    <span key={s} className="px-2 py-1 text-sm font-mono text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800/50 rounded-md">{s}</span>
                ))}</div>

                <div className="pt-2">
                  <Rule />
                  <div className="mt-4 text-sm text-neutral-500"><span className="font-medium">Primary Focus:</span> {project.tech}</div>
                </div>
              </div>
            </Section>
          </div>

          {project.limitations && (
              <div className="mb-16 sm:mb-20">
                <Section headingLevel={3} title={project.category === "research" ? "Implementation Notes" : "Current State"}>
                  <div className="p-6 rounded-lg border-l-4 border-yellow-400/50 bg-yellow-50/50 dark:bg-yellow-900/10 dark:border-yellow-500/30">
                    <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">{project.limitations}</p>
                  </div>
                </Section>
              </div>
          )}

          {isPortfolio && (
              <div className="mb-16 sm:mb-20 text-center">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">you’ve been here before… haven’t you?</p>
              </div>
          )}

          <div className="mb-12 sm:mb-16">
            <div className="flex justify-start">
              <Button href="/" className="inline-flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-300" aria-label="Back to portfolio">
                <ArrowLeft size={16} />
                Back to Portfolio
              </Button>
            </div>
          </div>

          <Footer />
        </div>
      </main>
  );
}