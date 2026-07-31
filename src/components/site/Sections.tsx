import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { AppLink } from "@/components/site/AppLink";
import { LogoMark } from "@/components/site/Logo";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Reveal, Counter } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <Reveal as="p" className={cn("eyebrow", tone === "light" ? "text-teal-soft" : "text-primary")}>
          <span className="h-px w-6 bg-current" />
          {eyebrow}
        </Reveal>
      ) : null}
      <Reveal
        as="h2"
        delay={80}
        className={cn(
          "mt-5 text-balance-tight text-[2rem] leading-[1.08] sm:text-[2.6rem] lg:text-[3.1rem]",
          tone === "light" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </Reveal>
      {body ? (
        <Reveal
          as="p"
          delay={160}
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-[1.05rem]",
            tone === "light" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {body}
        </Reveal>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  breadcrumb?: { label: string; to: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-gradient pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,oklch(0.66_0.1_200/0.28),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(oklch(1_0_0/0.12)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.12)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]"
      />
      <div className="container-x relative">
        {breadcrumb ? (
          <Reveal as="nav" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-ink-muted">
            <AppLink to="/" className="hover:text-teal-soft">
              Home
            </AppLink>
            {breadcrumb.map((b) => (
              <span key={b.to} className="flex items-center gap-2">
                <span className="text-ink-muted/50">/</span>
                <AppLink to={b.to} className="hover:text-teal-soft">
                  {b.label}
                </AppLink>
              </span>
            ))}
          </Reveal>
        ) : null}
        <Reveal as="p" className="eyebrow text-teal-soft">
          <span className="h-px w-6 bg-current" />
          {eyebrow}
        </Reveal>
        <Reveal
          as="h1"
          delay={90}
          className="mt-6 max-w-4xl text-balance-tight text-[2.4rem] leading-[1.05] text-ink-foreground sm:text-[3.2rem] lg:text-[4rem]"
        >
          {title}
        </Reveal>
        <Reveal
          as="p"
          delay={180}
          className="mt-7 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {body}
        </Reveal>
        {children ? (
          <Reveal delay={260} className="mt-10">
            {children}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function Card({
  title,
  body,
  index,
  className,
  children,
}: {
  title: string;
  body?: string;
  index?: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,oklch(0.66_0.1_200/0.16),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {typeof index === "number" ? (
        <span className="font-display text-xs font-semibold tracking-[0.2em] text-primary/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      ) : null}
      <h3 className="mt-3 text-lg leading-snug font-semibold text-foreground">{title}</h3>
      {body ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      ) : null}
      {children}
    </div>
  );
}

export function StatBand({
  stats,
}: {
  stats: { value: number; suffix?: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-border bg-ink-border lg:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 90}
          className="bg-[oklch(0.19_0.035_240/0.9)] p-7 backdrop-blur"
        >
          <p className="font-display text-3xl font-semibold text-ink-foreground lg:text-4xl">
            <Counter to={s.value} suffix={s.suffix} />
          </p>
          <p className="mt-2 text-xs leading-relaxed tracking-wide text-ink-muted uppercase">
            {s.label}
          </p>
        </Reveal>
      ))}
    </div>
  );
}

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            type="button"
            onClick={() => setOpen((o) => (o === i ? null : i))}
            className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-secondary/60 sm:px-8"
          >
            <span className="font-display text-base font-semibold text-foreground sm:text-lg">
              {item.q}
            </span>
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300",
                open === i && "rotate-180 border-primary bg-primary text-primary-foreground",
              )}
            >
              {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </span>
          </button>
          <div
            className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-8 sm:pb-7">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CTABand({
  title = "Let's engineer your next platform.",
  body = "Tell us what you are trying to build or fix. We respond with a clear scope, architecture direction and timeline — not a sales pitch.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-x py-20 lg:py-28">
      <Reveal
        variant="scale"
        className="relative overflow-hidden rounded-[2.5rem] bg-ink-gradient px-7 py-16 text-center sm:px-16 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute -bottom-32 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.66_0.1_200/0.3),transparent_65%)] blur-2xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <LogoMark className="mx-auto h-12 w-12 animate-float-slow" />
          <h2 className="mt-8 text-balance-tight text-[1.9rem] leading-tight text-ink-foreground sm:text-[2.6rem]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
            {body}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton to="/contact">
              Start a Project <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton to="/services" tone="ghost-light">
              Explore Services
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[80] flex items-center justify-center bg-ink-gradient transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        done ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="flex flex-col items-center">
        <LogoMark className="h-14 w-14 animate-float-slow" />
        <p className="mt-6 font-display text-xs font-semibold tracking-[0.36em] text-ink-muted">
          BLUETORN
        </p>
        <div className="mt-5 h-px w-32 overflow-hidden bg-[oklch(1_0_0/0.14)]">
          <div
            className="h-px bg-teal"
            style={{
              animation: "marquee 1.1s cubic-bezier(0.16,1,0.3,1) forwards",
              width: "100%",
              transformOrigin: "left",
            }}
          />
        </div>
      </div>
    </div>
  );
}
