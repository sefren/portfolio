"use client";

import Button from "@/components/Button";
import { memo } from "react";
import Rule from "@/components/Rule";

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
    <article className="group w-full">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">
            <Button
              href={`/project/${projectSlug}`}
              aria-label={`Read more about ${title}`}
              className="hover:text-neutral-700 dark:hover:text-neutral-300"
            >
              {title}
            </Button>
          </h3>

          {subtitle && (
            <p className="mt-2 text-sm font-mono text-neutral-500 tracking-wide">
              {subtitle}
            </p>
          )}
        </div>

        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          {description}
        </p>

        <div className="pt-4">
          <Rule />
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            {tech && (
              <span className="text-sm font-mono text-neutral-500 tracking-wide">
                {tech}
              </span>
            )}

            <div className="flex items-center gap-8 text-sm">
              {githubUrl && (
                <Button
                  href={githubUrl}
                  external
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                  aria-label={`View ${title} on GitHub`}
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </Button>
              )}
              {externalUrl && (
                <Button
                  href={externalUrl}
                  external
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                  aria-label={`View external link for ${title}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Live
                </Button>
              )}
              <Button
                href={`/project/${projectSlug}`}
                className="font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                Read More →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

export default ProjectCard;
