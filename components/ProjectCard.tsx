"use client";

import Link from "next/link";
import { memo } from "react";

interface Props {
  title: string;
  subtitle?: string;
  description: string;
  tech?: string;
  projectSlug: string;
  githubUrl?: string;
  externalUrl?: string;
}

const ProjectCard = memo(function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  projectSlug,
  githubUrl,
  externalUrl,
}: Props) {
  return (
    <article className="group w-full space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold leading-snug tracking-tight">
        <Link
          href={`/project/${projectSlug}`}
          className="accent-underline group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 rounded-sm"
          aria-label={`Open ${title} project page`}
          prefetch={false}
        >
          {title}
        </Link>
      </h3>

      {subtitle && (
        <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.15em] text-neutral-500 font-mono">
          {subtitle}
        </p>
      )}

      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-prose">
        {description}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-dotted border-neutral-300 dark:border-neutral-700">
        {tech && (
          <span className="text-[12px] sm:text-[13px] text-neutral-500 font-mono uppercase tracking-wide pt-2">
            {tech}
          </span>
        )}

        <div className="flex items-center gap-5 pt-2 text-[13px] sm:text-sm font-mono uppercase tracking-wide">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-underline hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 rounded-sm"
              aria-label={`View ${title} on GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-underline hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 rounded-sm"
              aria-label={`View external link for ${title}`}
              onClick={(e) => e.stopPropagation()}
            >
              View
            </a>
          )}
          <Link
            href={`/project/${projectSlug}`}
            className="font-medium accent-underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 rounded-sm"
            prefetch={false}
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
});

export default ProjectCard;
