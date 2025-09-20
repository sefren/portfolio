import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The requested resource does not exist in the current index.",
  robots: {
    index: false,
    follow: false,
  },
}


export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-28">
        {/* Error Content */}
        <div className="space-y-12">
          <div className="group">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[var(--accent)] uppercase tracking-wide transition-all duration-200 group-hover:-translate-x-1"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-0.5 transition-transform duration-200"
              />
              Back to Portfolio
            </Link>
          </div>

          <header className="space-y-8">
            <div>
              <div className="flex items-baseline gap-4">
                <h1 className="text-6xl font-extrabold tracking-tight font-mono text-red-600 dark:text-red-400">
                  404
                </h1>
                <span className="text-xs uppercase tracking-widest font-mono text-[var(--accent)]">
                  NOT FOUND
                </span>
              </div>
              <div className="section-marker mt-3">
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold">Page Not Found</h2>
              <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                The requested resource does not exist in the current index.
                <br className="hidden sm:block" />
                It may have been moved, archived, or never documented.
              </p>
            </div>
          </header>

          {/* Navigation Options */}
          <section className="space-y-6">
            <div>
              <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wide">
                Available Routes
              </h3>
              <div className="section-marker">
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <h4 className="font-medium uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                  Primary Navigation
                </h4>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <li>
                    <Link
                      href="/"
                      className="accent-underline hover:opacity-80 transition-opacity"
                    >
                      Portfolio Index
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#work"
                      className="accent-underline hover:opacity-80 transition-opacity"
                    >
                      Selected Dossiers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#research"
                      className="accent-underline hover:opacity-80 transition-opacity"
                    >
                      Research Implementations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/project"
                      className="accent-underline hover:opacity-80 transition-opacity"
                    >
                      Complete Project Index
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                  System Information
                </h4>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 text-xs font-mono">
                  <li>Error Code: HTTP 404</li>
                  <li>Timestamp: {new Date().toISOString()}</li>
                  <li>
                    Path:{" "}
                    {typeof window !== "undefined"
                      ? window.location.pathname
                      : "/unknown"}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Error Note */}
          <section className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-xs text-neutral-500 max-w-2xl leading-relaxed">
              If you believe this page should exist, check the URL for typos or
              navigate using the links above. For persistent issues, reference
              the GitHub repository or contact directly.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
