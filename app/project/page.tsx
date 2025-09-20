import Link from "next/link";
import { ArrowLeft, Clock} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import Footer from "@/components/Footer";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Index",
  description: "Complete catalog of development work and research implementations. Each entry represents something that demanded existence.",
  openGraph: {
    title: "Project Index | Sefren",
    description: "Complete catalog of development work and research implementations.",
  },
}


export default function ProjectIndex() {
  const workProjects = projects.filter((p) => p.category === "work");
  const researchProjects = projects.filter((p) => p.category === "research");

  const getStatusColor = (status: string) => {
    if (status === "In Active Development")
      return "text-green-600 dark:text-green-400";
    if (status === "Research Implementation")
      return "text-blue-600 dark:text-blue-400";
    return "text-yellow-600 dark:text-yellow-400";
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">
        {/* Header */}
        <header className="space-y-8">
          <div className="group">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[var(--accent)] uppercase tracking-wide transition-all duration-200 group-hover:-translate-x-1 mb-8"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-0.5 transition-transform duration-200"
              />
              Back to Portfolio
            </Link>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Project Index
            </h1>
            <div className="section-marker mt-3">
              <div></div>
              <div></div>
            </div>
          </div>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Complete catalog of work and research. Each entry represents
            something that demanded existence—
            <br className="hidden sm:block" />
            from midnight curiosities to systematic investigations.
          </p>
        </header>

        {/* Work Projects */}
        <section className="space-y-12">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold uppercase tracking-wide">
              Development Work
            </h2>
            <div className="section-marker">
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="space-y-16">
            {workProjects.map((project, i) => (
              <article key={project.slug} className="group/project">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <ProjectCard
                      title={project.title}
                      subtitle={project.subtitle}
                      description={project.shortDescription}
                      tech={project.tech}
                      projectSlug={project.slug}
                      githubUrl={project.github}
                    />
                  </div>

                  <div className="hidden sm:flex flex-col items-end gap-2 text-xs text-neutral-500 font-mono min-w-[120px]">
                    <div className="flex items-center gap-2">
                      <Clock size={10} />
                      <span
                        className={`uppercase tracking-wide ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <span className="uppercase tracking-wider opacity-60">
                      {project.category}
                    </span>
                  </div>
                </div>

                {i < workProjects.length - 1 && (
                  <div className="mt-12 text-center font-mono text-[11px] tracking-widest text-[var(--accent)]/60 opacity-40">
                    — — —
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Research Projects */}
        {researchProjects.length > 0 && (
          <section className="space-y-12">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold uppercase tracking-wide">
                Research Implementations
              </h2>
              <div className="section-marker">
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="space-y-16">
              {researchProjects.map((project, i) => (
                <article key={project.slug} className="group/project">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <ProjectCard
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.shortDescription}
                        tech={project.tech}
                        projectSlug={project.slug}
                        githubUrl={project.github}
                      />
                    </div>

                    <div className="hidden sm:flex flex-col items-end gap-2 text-xs text-neutral-500 font-mono min-w-[120px]">
                      <div className="flex items-center gap-2">
                        <Clock size={10} />
                        <span
                          className={`uppercase tracking-wide ${getStatusColor(project.status)}`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <span className="uppercase tracking-wider opacity-60">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {i < researchProjects.length - 1 && (
                    <div className="mt-12 text-center font-mono text-[11px] tracking-widest text-[var(--accent)]/60 opacity-40">
                      — — —
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Archive Note */}
        <section className="pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <div className="text-center space-y-4">
            <p className="text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
              This index contains all documented projects. Some are active,
              others archived— each represents a specific investigation or
              systematic exploration.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
