import Button from "@/components/Button";
import Section from "@/components/Section";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-neutral-200 dark:border-neutral-800">
      {/* Top section */}
      <Section id="contact" title="Get in touch">
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
          Collaborations, questions, or absurd ideas — send them here.
        </p>

        <div className="flex flex-col gap-6 mt-12">
          <Button
            href="https://github.com/sefren"
            external
            aria-label="GitHub"
            className="text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 w-fit"
          >
            GITHUB
          </Button>

          <Button
            href="mailto:manishsharma43005@proton.me"
            aria-label="Email"
            className="text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 w-fit"
          >
            EMAIL
          </Button>

          <Button
            href="https://x.com/manish43050"
            external
            aria-label="X (Twitter)"
            className="text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 w-fit"
          >
            X
          </Button>
        </div>
      </Section>

      {/* Bottom credits */}
      <div className="mt-12 pt-8 pb-16 border-t border-neutral-100 dark:border-neutral-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 text-sm text-neutral-500">
        <div className="flex flex-col gap-2">
          <div>
            © {currentYear}{" "}
            <Button
              href="/"
              aria-label="Go to homepage"
              className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 font-medium w-fit"
            >
              Sefren
            </Button>
          </div>
          <div className="text-xs font-mono italic opacity-75">
            strange hours, stranger thoughts
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              Built With
            </div>
            <div className="flex gap-4 text-xs font-mono text-neutral-500">
              <Button
                href="https://nextjs.org/"
                external
                aria-label="Next.js"
                className="hover:text-neutral-700 dark:hover:text-neutral-300 w-fit"
              >
                Next.js
              </Button>
              <Button
                href="https://vercel.com/"
                external
                aria-label="Vercel"
                className="hover:text-neutral-700 dark:hover:text-neutral-300 w-fit"
              >
                Vercel
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              Source
            </div>
            <Button
              href="https://github.com/sefren/portfolio"
              external
              aria-label="View repository"
              className="text-xs font-mono text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 w-fit"
            >
              View Repository
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
