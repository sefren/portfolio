import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import Rule from "@/components/Rule";
import Section from "@/components/Section";
import { getProjectsByCategory } from "@/lib/projects";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const projects = getProjectsByCategory("projects");
  const research = getProjectsByCategory("research");

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
      <div className="max-w-4xl mx-auto px-8 py-32 space-y-32">
        {/* Hero */}
        <header className="space-y-12">
          <div>
            <div className="flex items-baseline gap-6">
              <h1 className="text-7xl font-bold tracking-tight text-[var(--foreground)]">
                Sefren
              </h1>
              <span className="text-sm font-mono text-neutral-400 tracking-wide">
                SEH-fren
              </span>
            </div>
            <div className="mt-6">
              <Rule />
            </div>
          </div>

          <div className="space-y-8">
            <p className="max-w-2xl text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
              A collection of projects, research, and experiments. Things that
              refused to stay as passing thoughts.
            </p>
          </div>

          <div className="mb-8">
            <Button
              href="https://github.com/sefren"
              external
              aria-label="GitHub"
              className="inline-flex items-center gap-2 text-sm font-mono text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
            >
              GitHub
              <ArrowUpRight size={16} className="opacity-60" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex gap-12 pb-4">
              <Button
                href="#projects"
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                Projects
              </Button>
              <Button
                href="#research"
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                Research
              </Button>
              <Button
                href="#about"
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                About
              </Button>
              <Button
                href="#contact"
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                Contact
              </Button>
            </div>
          </nav>
        </header>

        {/* Projects */}
        <Section
          id="projects"
          title="Projects"
          right={
            <span className="text-xs font-mono text-neutral-400">
              {projects.length}
            </span>
          }
        >
          <div className="space-y-24">
            {projects.map((p, i) => (
              <div key={p.slug}>
                <ProjectCard
                  title={p.title}
                  subtitle={p.subtitle}
                  description={p.shortDescription}
                  tech={p.tech}
                  projectSlug={p.slug}
                  githubUrl={p.github}
                  externalUrl={p.externalLink}
                />
                {i < projects.length - 1 && (
                  <div className="my-16 flex justify-center">
                    <Rule className="w-24 mx-auto" gradient={false} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Research */}
        <Section
          id="research"
          title="Research"
          right={
            <span className="text-xs font-mono text-neutral-400">
              {research.length}
            </span>
          }
        >
          <div className="space-y-24">
            {research.map((p, i) => (
              <div key={p.slug}>
                <ProjectCard
                  title={p.title}
                  subtitle={p.subtitle}
                  description={p.shortDescription}
                  tech={p.tech}
                  projectSlug={p.slug}
                  githubUrl={p.github}
                  externalUrl={p.externalLink}
                />
                {i < research.length - 1 && (
                  <div className="my-16 flex justify-center">
                    <Rule className="w-24 mx-auto" gradient={false} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* About */}
        <Section id="about" title="About">
          <div className="space-y-8">
            <div className="max-w-2xl space-y-4">
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
                I work at the intersection of code, design, and ideas. Most of
                my projects begin as questions or curiosities that refuse to be
                ignored, gradually taking shape as tools, experiments, or
                explorations.
              </p>
              <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed text-justify">
                The throughline isn’t polish, it’s persistence and curiosity.
              </p>
            </div>

            <div className="w-full">
              <div className="mt-6 max-w-2xl">
                <div className="mt-4 text-sm font-mono text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Interests: patterns, ideas, and the challenge of shaping them
                  into something tangible.
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
    </main>
  );
}
