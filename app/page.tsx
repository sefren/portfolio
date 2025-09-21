import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import { getProjectsByCategory } from "@/lib/projects";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const work = getProjectsByCategory("work");
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
              <div className="mt-6 h-px bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800"></div>
            </div>

            <div className="space-y-8">
              <p className="max-w-2xl text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                A collection of projects, research, and dossiers.{" "}
                <br className="hidden sm:block" />
                Things that just wouldn't leave me alone.
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
                    href="#work"
                    className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 decoration-white dark:decoration-neutral-300"
                >
                  Work
                </Button>
                <Button
                    href="#research"
                    className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 decoration-white dark:decoration-neutral-300"
                >
                  Research
                </Button>
                <Button
                    href="#about"
                    className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 decoration-white dark:decoration-neutral-300"
                >
                  About
                </Button>
                <Button
                    href="#contact"
                    className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 decoration-white dark:decoration-neutral-300"
                >
                  Contact
                </Button>
              </div>
            </nav>
          </header>

          {/* Work */}
          <section id="work" className="space-y-16">
            <div>
              <div className="flex items-baseline justify-between">
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Selected Work
                </h2>
                <span className="text-xs font-mono text-neutral-400 tracking-wider">
                {work.length}
              </span>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800"></div>
            </div>

            <div className="space-y-24">
              {work.map((p, i) => (
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
                    { i < work.length - 1 && (
                        <div className="my-16 flex justify-center">
                          <div className="w-24 h-px bg-neutral-300 dark:bg-neutral-700"></div>
                        </div>
                    )}
                  </div>
              ))}
            </div>
          </section>

          {/* Research */}
          <section id="research" className="space-y-16">
            <div>
              <div className="flex items-baseline justify-between">
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Research
                </h2>
                <span className="text-xs font-mono text-neutral-400 tracking-wider">
                {research.length}
              </span>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800"></div>
            </div>

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
                        <div className="mt-20 flex justify-center">
                          <div className="w-12 h-px bg-neutral-300 dark:bg-neutral-700"></div>
                        </div>
                    )}
                  </div>
              ))}
            </div>
          </section>

          {/* About */}
          <section id="about" className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                About
              </h2>
              <div className="mt-4 h-px bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800" />
            </div>

            <div className="space-y-8">
              <div className="max-w-2xl">
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  I work at the intersection of code, systems, and design. Most of my
                  projects explore how abstract models — engines, algorithms, or
                  decisions — can be shaped into tangible tools.
                </p>
                <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  The throughline isn't polish; it's curiosity.
                </p>
              </div>

              <div className="w-full pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <div className="mt-4 max-w-2xl">
                  <div className="text-sm font-mono text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Interests: Physics simulation, architecture, decision theory,
                    systematic exploration
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Footer */}
          <Footer />
        </div>
      </main>
  );
}