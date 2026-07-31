import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { AppLink } from "@/components/site/AppLink";
import { cn } from "@/lib/utils";

type Tone = "primary" | "ghost-light" | "ghost-dark" | "solid-dark";

const tones: Record<Tone, string> = {
  primary:
    "bg-teal text-[oklch(0.16_0.03_244)] hover:bg-teal-soft shadow-[0_10px_34px_-12px_oklch(0.66_0.1_200/0.75)] hover:shadow-[0_18px_50px_-14px_oklch(0.66_0.1_200/0.9)]",
  "ghost-light":
    "border border-ink-border bg-[oklch(1_0_0/0.06)] text-ink-foreground backdrop-blur-md hover:bg-[oklch(1_0_0/0.12)]",
  "ghost-dark":
    "border border-border bg-card text-foreground hover:border-teal hover:text-primary shadow-soft",
  "solid-dark":
    "bg-ink text-ink-foreground hover:bg-ink-soft shadow-[0_14px_40px_-16px_oklch(0.19_0.035_240/0.8)]",
};

type Ripple = { id: number; x: number; y: number };

export function MagneticButton({
  children,
  to,
  href,
  onClick,
  tone = "primary",
  className,
  type = "button",
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  tone?: Tone;
  className?: string;
  type?: "button" | "submit";
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setOffset({ x: x * 0.22, y: y * 0.3 });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  const handleDown = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const id = Date.now();
    setRipples((rs) => [...rs, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setRipples((rs) => rs.filter((x) => x.id !== id)), 650);
  };

  const base = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 will-change-transform active:scale-[0.97]",
    tones[tone],
    className,
  );

  const inner = (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          className="pointer-events-none absolute h-16 w-16 rounded-full bg-current/25"
          style={{
            left: r.x - 32,
            top: r.y - 32,
            animation: "ripple-out 620ms cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        />
      ))}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const style = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    display: "inline-flex",
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseDown={handleDown}
      style={style}
      className="transition-transform duration-300 ease-out"
    >
      {to ? (
        <AppLink to={to} className={base}>
          {inner}
        </AppLink>
      ) : href ? (
        <a href={href} className={base}>
          {inner}
        </a>
      ) : (
        <button type={type} onClick={onClick} className={base}>
          {inner}
        </button>
      )}
    </span>
  );
}
