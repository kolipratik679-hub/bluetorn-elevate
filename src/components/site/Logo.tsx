import logo from "@/assets/bluetorn-logo.png.asset.json";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="BLUETORN Technologies logo"
      width={512}
      height={512}
      className={cn("h-9 w-9 rounded-[10px] object-cover", className)}
    />
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
