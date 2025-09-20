import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-neutral-200 dark:border-neutral-800"
    >
      {/* Top section */}
      <div className="py-12">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold uppercase tracking-wide">
            Get in touch
          </h2>
          <div className="section-marker mt-2">
            <div></div>
            <div></div>
          </div>
        </div>

        <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
          Collaborations, questions, or absurd ideas — send them here.
        </p>

        {/* links column: important — items-start prevents anchors from stretching full width */}
        <div className="flex flex-col items-start gap-4 mt-6">
          <a
            href="mailto:manishsharma43005@proton.me"
            className="relative inline-block text-base sm:text-lg font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:text-[var(--accent)] transition-colors
                       after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[var(--accent)]
                       after:w-full after:scale-x-0 motion-safe:hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-250"
            aria-label="Email"
          >
            EMAIL
          </a>

          <a
            href="https://github.com/sefren"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-base sm:text-lg font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:text-[var(--accent)] transition-colors
                       after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[var(--accent)]
                       after:w-full after:scale-x-0 motion-safe:hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-250"
            aria-label="GitHub (opens in new tab)"
          >
            GITHUB
          </a>

          <a
            href="https://x.com/manish43050"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-base sm:text-lg font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:text-[var(--accent)] transition-colors
                       after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[var(--accent)]
                       after:w-full after:scale-x-0 motion-safe:hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-250"
            aria-label="X (opens in new tab)"
          >
            X
          </a>
        </div>
      </div>

      {/* Bottom credits */}
      <div className="pt-8 pb-12 border-t border-neutral-100 dark:border-neutral-900 flex flex-col sm:flex-row justify-between items-start gap-6 text-xs text-neutral-500">
        <div className="space-y-1">
          <div>© {currentYear} — Sefren</div>
          <div className="font-mono italic opacity-75">
            strange hours, stranger thoughts
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="space-y-1">
            <div className="font-medium uppercase tracking-wider">
              Built With
            </div>
            <div className="font-mono opacity-80">Next.js · Vercel</div>
          </div>

          <div className="space-y-1">
            <div className="font-medium uppercase tracking-wider">Source</div>
            <a
              href="https://github.com/sefren/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block font-mono opacity-80 hover:opacity-100 transition-colors
                         after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[var(--accent)]
                         after:w-full after:scale-x-0 motion-safe:hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-250"
              aria-label="View repository (opens in new tab)"
            >
              View Repository
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
