export default function Rule({
  className = "",
  gradient = true,
  short = false,
}: {
  className?: string;
  gradient?: boolean;
  short?: boolean;
}) {
  const gradientClass =
    "bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800";
  const solidClass = "bg-neutral-300 dark:bg-neutral-700";

  {/*default size*/}
  const base = "h-px";
  {/*short variant*/}
  const shortClass = short ? "w-12 mx-auto" : "w-full";

  return (
    <div
      role="separator"
      aria-hidden
      className={`${base} ${short ? shortClass : className || shortClass} ${
        gradient ? gradientClass : solidClass
      }`}
    />
  );
}
