import { cn } from "@/lib/utils";

/**
 * Inline SVG brand mark — no network request, fixed intrinsic ratio,
 * so it can never cause layout shift (CLS = 0).
 */
export function LogoMark({
  className,
  title = "BLUETORN Technologies logo",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={36}
      height={36}
      role="img"
      aria-label={title}
      className={cn("h-9 w-9 shrink-0", className)}
    >
      <defs>
        <linearGradient id="bt-mark-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-soft)" />
          <stop offset="100%" stopColor="var(--brand)" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#bt-mark-bg)" />
      <g
        transform="rotate(45 32 32)"
        fill="none"
        stroke="var(--brand-on)"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M45 17 H19 V45 H45" />
        <path d="M32 32 H41 A9 9 0 1 1 32 23" />
      </g>
    </svg>
  );
}

export function LogoLockup({
  className,
  tone = "light",
  showTagline = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  showTagline?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-semibold tracking-[0.16em]",
            tone === "light" ? "text-ink-foreground" : "text-foreground",
          )}
        >
          BLUETORN
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-1 text-[0.62rem] font-medium tracking-[0.24em] uppercase",
              tone === "light" ? "text-ink-muted" : "text-muted-foreground",
            )}
          >
            Technologies
          </span>
        ) : null}
      </span>
    </span>
  );
}
