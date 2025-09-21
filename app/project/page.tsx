import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Rule from "@/components/Rule";
import Section from "@/components/Section";
import { ArrowLeft, Clock } from "lucide-react";
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
  const projectProjects = projects.filter((p) => p.category === "projects");
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
            <div className="mt-6">
              <Rule />
            </div>
          </div>

          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed text-justify">
            Complete catalog of projects and research.
          </p>
        </header>

        {/* Projects */}
        <Section
          id="projects"
          title="Projects"
          right={
            <span className="text-xs font-mono text-neutral-400">
              {projectProjects.length}
            </span>
          }
        >
          <div className="space-y-24">
            {projectProjects.map((project, i) => (
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
                      <span
                        className={`font-medium ${getStatusColor(
                          project.status,
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {i < projectProjects.length - 1 && (
                  <div className="my-16 flex justify-center">
                    <Rule short gradient={false} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Research */}
        {researchProjects.length > 0 && (
          <Section
            id="research"
            title="Research"
            right={
              <span className="text-xs font-mono text-neutral-400">
                {researchProjects.length}
              </span>
            }
          >
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
                        <span
                          className={`font-medium ${getStatusColor(
                            project.status,
                          )}`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {i < researchProjects.length - 1 && (
                    <div className="my-16 flex justify-center">
                      <Rule short gradient={false} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Archive Note */}
        <Section id="archive" title="Archive">
          <div className="max-w-2xl mx-auto">
            <p className="text-base text-neutral-500 leading-relaxed text-justify">
              This index contains all documented projects. Some are active,
              others archived.
            </p>
          </div>
        </Section>

        <Footer />
      </div>
    </main>
  );
}
