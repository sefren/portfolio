import React, { JSX } from "react";
import Rule from "./Rule";

type Props = {
  id?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  headingLevel?: 2 | 3;
};

export default function Section({
  id,
  title,
  subtitle,
  right,
  className = "",
  children,
  headingLevel = 2,
}: Props) {
  const Heading = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <section id={id} className={`space-y-8 ${className}`}>
      <div>
        <div className="flex items-baseline justify-between">
          <Heading
            className={`${
              headingLevel === 2
                ? "text-2xl font-semibold"
                : "text-xl font-semibold"
            } text-neutral-900 dark:text-neutral-100`}
          >
            {title}
          </Heading>

          {right && (
            <div className="text-xs font-mono text-neutral-400 tracking-wider">
              {right}
            </div>
          )}
        </div>

        {subtitle && (
          <div className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            {subtitle}
          </div>
        )}

        <div className="mt-6">
          <Rule />
        </div>
      </div>

      <div>{children}</div>
    </section>
  );
}
