import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface FooterProps {
  showBackToPortfolio?: boolean;
  variant?: "full" | "minimal";
}

export default function Footer({
  showBackToPortfolio = false,
  variant = "full",
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (variant === "minimal") {
    return (
      <footer className="pt-8 text-xs text-neutral-500 flex flex-col sm:flex-row justify-between gap-4">
        {showBackToPortfolio && (
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:text-[var(--accent)] uppercase tracking-wide transition-all duration-200 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
            />
            Back to Portfolio
          </Link>
        )}
        <div className="flex items-center gap-6">
          <span className="font-mono opacity-60">© {currentYear} — Sefren</span>
        </div>
      </footer>
    );
  }

  return (
    <section
      id="contact"
      className="pt-16 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="space-y-12">
        {/* Contact Section */}
        <div className="max-w-3xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold uppercase tracking-wide">
                Get in Touch
              </h2>
              <div className="section-marker mt-2">
                <div></div>
                <div></div>
              </div>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Collaborations, questions, or absurd ideas — send them here.
              <br />
              <span className="opacity-75">
                Responses may arrive at midnight.
              </span>
            </p>
            <div className="flex gap-8 text-sm sm:text-base">
              <a
                href="mailto:manishsharma43005@proton.me"
                className="accent-underline hover:opacity-80 transition-opacity"
              >
                EMAIL
              </a>
              <a
                href="https://github.com/sefren"
                target="_blank"
                rel="noreferrer"
                className="accent-underline hover:opacity-80 transition-opacity"
              >
                GITHUB
              </a>
              <a
                href="https://x.com/manish43050"
                target="_blank"
                rel="noreferrer"
                className="accent-underline hover:opacity-80 transition-opacity"
              >
                X
              </a>
            </div>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
            <div className="space-y-1 text-xs text-neutral-500">
              <div>© {currentYear} — Sefren</div>
              <div className="font-mono italic opacity-80">
                strange hours, stranger thoughts
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-xs text-neutral-500">
              <div className="space-y-1">
                <div className="font-medium uppercase tracking-wider">
                  Built With
                </div>
                <div className="font-mono opacity-80">Next.js · Vercel</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium uppercase tracking-wider">
                  Source
                </div>
                <a
                  href="https://github.com/sefren/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono opacity-80 hover:opacity-100 transition-opacity"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
