import Link from "next/link";
import React, { memo, forwardRef } from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  "aria-label"?: string;
}

const Button = memo(
  forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
    function Button(
      {
        children,
        href,
        external = false,
        className = "",
        onClick,
        "aria-label": ariaLabel,
        ...props
      },
      ref,
    ) {
      const baseStyles = "transition-colors duration-200 focus:outline-none";

      // Simple underline on hover - no accent color
      const underlineStyles = "hover:underline underline-offset-2";

      const combinedClassName =
        `${baseStyles} ${underlineStyles} ${className}`.trim();

      if (href) {
        if (external) {
          return (
            <a
              ref={ref as React.Ref<HTMLAnchorElement>}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={combinedClassName}
              aria-label={ariaLabel}
              onClick={onClick}
              {...props}
            >
              {children}
            </a>
          );
        }

        return (
          <Link
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={combinedClassName}
            aria-label={ariaLabel}
            onClick={onClick}
            prefetch={true}
            {...props}
          >
            {children}
          </Link>
        );
      }

      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={combinedClassName}
          aria-label={ariaLabel}
          onClick={onClick}
          {...props}
        >
          {children}
        </button>
      );
    },
  ),
);

export default Button;
