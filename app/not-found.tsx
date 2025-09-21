"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Button from "@/components/Button";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import Rule from "@/components/Rule";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    document.title = "404 — Page Not Found | Sefren";
  }, []);

  return (
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased flex flex-col">
        <div className="flex-1 max-w-4xl mx-auto px-6 py-16 space-y-20">
          {/* Back Navigation */}
          <div>
            <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 text-base text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          </div>

          {/* Error Header */}
          <header className="space-y-6">
            <div className="flex items-baseline gap-4">
              <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight font-mono text-red-600 dark:text-red-400">
                404
              </h1>
              <span className="text-sm sm:text-base uppercase tracking-widest font-mono text-[var(--foreground)]">
              NOT FOUND
            </span>
            </div>
            <p className="max-w-2xl text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
              The page you’re looking for doesn’t exist. It may have been moved,
              archived, or never documented in the first place.
            </p>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
              Error Code: HTTP 404 — at least it’s consistent.
            </p>
          </header>

          {/* Navigation Options */}
          <section className="space-y-6">
            <div>
              <h3 className="text-base font-semibold uppercase tracking-wide">
                Try One of These Instead
              </h3>
              <Rule />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button href="/" className="text-base px-4 py-2 w-full sm:w-auto">
                Home
              </Button>
              <Button href="/project" className="text-base px-4 py-2 w-full sm:w-auto">
                All Projects
              </Button>
              <Button
                  href="https://github.com/sefren"
                  external
                  className="inline-flex items-center gap-2 text-base px-4 py-2 w-full sm:w-auto"
              >
                View Repo
                <ExternalLink size={14} />
              </Button>
            </div>

          </section>

          {/* Error Note */}
          <section className="pt-8 border-t border-neutral-200 dark:border-neutral-800 text-sm sm:text-base text-neutral-500 leading-relaxed">
            <p>
              At least you found <em>something</em>. If you think this page should
              exist, double-check the URL or head back to the index.
            </p>
          </section>
        </div>
      </main>
  );
}
