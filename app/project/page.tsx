import Button from "@/components/Button";
import { ArrowLeft, Clock } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Index",
  description:
      "Complete catalog of development work and research implementations.",
  openGraph: {
    title: "Project Index | Sefren",
    description:
        "Complete catalog of development work and research implementations.",
  },
};

export default function ProjectIndex() {
  const workProjects = projects.filter((p) => p.category === "work");
  const researchProjects = projects.filter((p) => p.category === "research");

  const getStatusColor = (status: string) => {
    if (status === "In Active Development")
      return "text-green-600 dark:text-green-400";
    if (status === "Research Implementation" || status === "Research Prototype")
      return "text-blue-600 dark:text-blue-400";
    return "text-yellow-600 dark:text-yellow-400";
  };

  return (
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <div className="max-w-4xl mx-auto px-8 py-32 space-y-32">
          {/* Header */}
          <header className="space-y-12">
            <div>
              <Button
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 mb-8"
              >
                <ArrowLeft size={16} />
                Back to Portfolio
              </Button>
            </div>

            <div>
              <h1 className="text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                Project Index
              </h1>
              <div className="mt-6 h-px bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800"></div>
            </div>

            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
              Complete catalog of work and research. Each entry represents
              something that demanded existence—from midnight curiosities to systematic investigations.
            </p>
          </header>

          {/* Work Projects */}
          <section className="space-y-16">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                Development Work
              </h2>
              <div className="mt-4 h-px bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800"></div>
            </div>

            <div className="space-y-24">
              {workProjects.map((project, i) => (
                  <div key={project.slug}>
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1">
                        <ProjectCard
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.shortDescription}
                            tech={project.tech}
                            projectSlug={project.slug}
                            githubUrl={project.github}
                            externalUrl={project.externalLink}
                        />
                      </div>

                      <div className="hidden sm:flex flex-col items-end gap-3 text-sm min-w-[140px]">
                        <div className="flex items-center gap-2">
                          <Clock size={12} />
                          <span className={`font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                        </div>
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                      </div>
                    </div>

                    {i < workProjects.length - 1 && (
                        <div className="mt-20 flex justify-center">
                          <div className="w-12 h-px bg-neutral-300 dark:bg-neutral-700"></div>
                        </div>
                    )}
                  </div>
              ))}
            </div>
          </section>

          {/* Research Projects */}
          {researchProjects.length > 0 && (
              <section className="space-y-16">
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                    Research Implementations
                  </h2>
                  <div className="mt-4 h-px bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800"></div>
                </div>

                <div className="space-y-24">
                  {researchProjects.map((project, i) => (
                      <div key={project.slug}>
                        <div className="flex items-start justify-between gap-8">
                          <div className="flex-1">
                            <ProjectCard
                                title={project.title}
                                subtitle={project.subtitle}
                                description={project.shortDescription}
                                tech={project.tech}
                                projectSlug={project.slug}
                                githubUrl={project.github}
                                externalUrl={project.externalLink}
                            />
                          </div>

                          <div className="hidden sm:flex flex-col items-end gap-3 text-sm min-w-[140px]">
                            <div className="flex items-center gap-2">
                              <Clock size={12} />
                              <span className={`font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                            </div>
                            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                          </div>
                        </div>

                        {i < researchProjects.length - 1 && (
                            <div className="mt-20 flex justify-center">
                              <div className="w-12 h-px bg-neutral-300 dark:bg-neutral-700"></div>
                            </div>
                        )}
                      </div>
                  ))}
                </div>
              </section>
          )}

          {/* Archive Note */}
          <section className="pt-16 border-t border-neutral-200 dark:border-neutral-800">
            <div className="text-center space-y-6">
              <p className="text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                This index contains all documented projects. Some are active,
                others archived.
              </p>
            </div>
          </section>

          <Footer />
        </div>
      </main>
  );
}