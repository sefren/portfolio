import ProjectCard from "@/components/ProjectCard";
import { getProjectsByCategory } from "@/lib/projects";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const work = getProjectsByCategory("work");
  const research = getProjectsByCategory("research");

  return (
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <div className="max-w-5xl mx-auto px-6 py-24 space-y-28">
          {/* Hero */}
          <header className="space-y-8">
            <div>
              <div className="flex items-baseline gap-4">
                <h1 className="text-6xl font-extrabold tracking-tight">Sefren</h1>
                <span className="text-xs uppercase tracking-widest font-mono text-[var(--accent)]">
                SEH-fren
              </span>
              </div>
              <div className="section-marker mt-3">
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="max-w-2xl text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                A collection of projects, research, and dossiers.{" "}
                <br className="hidden sm:block" />
                Things that just wouldn't leave me alone.
              </p>


            </div>

            <div className="mb-6">
              <a
                  href="https://github.com/sefren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors underline underline-offset-2 decoration-1"
              >
                GitHub
                <ArrowUpRight size={20} className="opacity-60" />
              </a>
            </div>

            <nav className="flex gap-8 text-xs sm:text-sm uppercase tracking-widest text-neutral-500 pb-2 border-b border-neutral-200 dark:border-neutral-800">
              <a
                  href="#work"
                  className="accent-underline hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                Work
              </a>
              <a
                  href="#research"
                  className="accent-underline hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                Research
              </a>
              <a
                  href="#about"
                  className="accent-underline hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                About
              </a>
              <a
                  href="#contact"
                  className="accent-underline hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                Contact
              </a>
            </nav>
          </header>

          {/* Work */}
          <section id="work" className="space-y-12">
            <div>
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide">
                  Selected Dossiers
                </h2>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                {work.length} entries
              </span>
              </div>
              <div className="section-marker">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="space-y-20">
              {work.map((p, i) => (
                  <article key={p.slug} className="group/dossier">
                    <ProjectCard
                        title={p.title}
                        subtitle={p.subtitle}
                        description={p.shortDescription}
                        tech={p.tech}
                        projectSlug={p.slug}
                        githubUrl={p.github}
                    />
                    {i < work.length - 1 && (
                        <div className="mt-14 text-center font-mono text-[10px] tracking-[0.2em] text-[var(--accent)]/60 opacity-40">
                          — — —
                        </div>
                    )}
                  </article>
              ))}
            </div>
          </section>

          {/* Research */}
          <section id="research" className="space-y-12">
            <div>
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide">
                  Research
                </h2>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                {research.length} entries
              </span>
              </div>
              <div className="section-marker">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="space-y-20">
              {research.map((p, i) => (
                  <article key={p.slug} className="group/paper">
                    <ProjectCard
                        title={p.title}
                        subtitle={p.subtitle}
                        description={p.shortDescription}
                        tech={p.tech}
                        projectSlug={p.slug}
                        githubUrl={p.github}
                    />
                    {i < research.length - 1 && (
                        <div className="mt-14 text-center font-mono text-[10px] tracking-[0.2em] text-[var(--accent)]/60 opacity-40">
                          — — —
                        </div>
                    )}
                  </article>
              ))}
            </div>
          </section>

          {/* About */}
          <section id="about" className="space-y-8">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold uppercase tracking-wide">
                About
              </h2>
              <div className="section-marker">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="max-w-2xl text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
                I work at the intersection of code, systems, and design. Most of
                my projects explore how abstract models — engines, algorithms, or
                decisions — can be shaped into tangible tools.
              </p>
              <p className="max-w-2xl text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed opacity-80">
                The throughline isn't polish; it's curiosity.
              </p>
              <div className="pt-4 text-xs font-mono text-neutral-500">
                <div>
                  Interests: Physics simulation, architecture, decision theory,
                  systematic exploration
                </div>
              </div>
            </div>
          </section>

          {/* Footer merged */}
          <Footer />
        </div>
      </main>
  );
}