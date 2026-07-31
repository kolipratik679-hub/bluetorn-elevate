import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { AppLink } from "@/components/site/AppLink";
import { LogoLockup } from "@/components/site/Logo";
import { MagneticButton } from "@/components/site/MagneticButton";
import { navigation, type NavItem } from "@/data/navigation";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

function MegaPanel({ item }: { item: NavItem }) {
  return (
    <div
      className={cn(
        "invisible absolute top-full left-1/2 z-50 -translate-x-1/2 translate-y-1 pt-4 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
        "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
        item.wide ? "w-[52rem]" : item.feature ? "w-[46rem]" : "w-[26rem]",
      )}
    >
      <div className="overflow-hidden rounded-3xl border border-ink-border bg-[oklch(0.19_0.035_240/0.94)] p-2 shadow-[0_40px_90px_-30px_oklch(0.1_0.03_240/0.85)] backdrop-blur-2xl">
        <div
          className={cn(
            "grid gap-1 p-3",
            item.wide
              ? "grid-cols-3"
              : item.feature
                ? "grid-cols-[1fr_1fr_0.9fr]"
                : (item.groups?.length ?? 1) > 1
                  ? "grid-cols-2"
                  : "grid-cols-1",
          )}
        >
          {item.groups?.map((group, gi) => (
            <div key={gi} className="min-w-0">
              {group.heading ? (
                <p className="eyebrow px-3 pt-2 pb-2 text-teal-soft/80">{group.heading}</p>
              ) : null}
              <ul className="space-y-0.5">
                {group.items.map((child, ci) => (
                  <li key={child.to}>
                    <AppLink
                      to={child.to}
                      className="block rounded-2xl px-3 py-2.5 transition-all duration-200 hover:translate-x-0.5 hover:bg-[oklch(1_0_0/0.07)]"
                      style={{ transitionDelay: `${ci * 8}ms` }}
                    >
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-ink-foreground">
                        {child.label}
                        <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:opacity-100" />
                      </span>
                      {child.desc ? (
                        <span className="mt-0.5 block text-xs leading-relaxed text-ink-muted">
                          {child.desc}
                        </span>
                      ) : null}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {item.feature ? (
            <AppLink
              to={item.feature.to}
              className="flex flex-col justify-between rounded-2xl border border-ink-border bg-[linear-gradient(160deg,oklch(0.3_0.06_210/0.6),oklch(0.22_0.04_240/0.4))] p-5 transition-colors hover:border-teal/50"
            >
              <div>
                <p className="font-display text-base leading-snug font-semibold text-ink-foreground">
                  {item.feature.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">{item.feature.body}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-soft">
                {item.feature.cta} <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </AppLink>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "border-b border-ink-border bg-[oklch(0.17_0.032_242/0.82)] backdrop-blur-xl"
            : "border-b border-transparent bg-[oklch(0.17_0.032_242/0.35)] backdrop-blur-md",
        )}
      >
        <div className="container-x">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              scrolled ? "h-16" : "h-20",
            )}
          >
            <AppLink to="/" className="shrink-0">
              <LogoLockup showTagline={!scrolled} />
            </AppLink>

            <nav className="hidden items-center gap-0.5 xl:flex">
              {navigation.map((item) => (
                <div key={item.label} className="group relative">
                  {item.to ? (
                    <AppLink
                      to={item.to}
                      className={cn(
                        "relative flex items-center rounded-full px-3.5 py-2 text-[0.86rem] font-medium text-ink-muted transition-colors duration-200 hover:text-ink-foreground",
                        pathname === item.to && "text-ink-foreground",
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-teal transition-transform duration-300 group-hover:scale-x-100",
                          pathname === item.to && "scale-x-100",
                        )}
                      />
                    </AppLink>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.86rem] font-medium text-ink-muted transition-colors duration-200 group-hover:text-ink-foreground"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                  )}
                  {item.groups ? <MegaPanel item={item} /> : null}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="hidden items-center gap-2 text-xs font-medium text-ink-muted transition-colors hover:text-teal-soft lg:flex"
              >
                <Phone className="h-3.5 w-3.5" />
                {company.phone}
              </a>
              <div className="hidden sm:block">
                <MagneticButton to="/contact" className="px-5 py-2.5 text-[0.82rem]">
                  Start a Project
                </MagneticButton>
              </div>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((o) => !o)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-border text-ink-foreground transition-colors hover:bg-[oklch(1_0_0/0.08)] xl:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-transparent">
          <div
            className="h-px origin-left bg-linear-to-r from-teal to-teal-soft transition-transform duration-150"
            style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
          />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 overflow-y-auto bg-ink-gradient pt-24 pb-16 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] xl:hidden",
          open ? "visible opacity-100" : "pointer-events-none invisible translate-y-2 opacity-0",
        )}
      >
        <div className="container-x">
          <ul className="space-y-1">
            {navigation.map((item, i) => (
              <li
                key={item.label}
                className="border-b border-ink-border/60 py-1"
                style={{
                  transitionDelay: `${i * 30}ms`,
                  transform: open ? "none" : "translateY(10px)",
                  opacity: open ? 1 : 0,
                  transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {item.to ? (
                  <AppLink
                    to={item.to}
                    className="block py-3 font-display text-lg font-semibold text-ink-foreground"
                  >
                    {item.label}
                  </AppLink>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                      className="flex w-full items-center justify-between py-3 font-display text-lg font-semibold text-ink-foreground"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-teal-soft transition-transform duration-300",
                          expanded === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    <div
                      className="grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ gridTemplateRows: expanded === item.label ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 pb-4">
                          {item.groups?.flatMap((g) => g.items).map((child) => (
                            <AppLink
                              key={child.to}
                              to={child.to}
                              className="py-1.5 text-sm text-ink-muted transition-colors hover:text-teal-soft"
                            >
                              {child.label}
                            </AppLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4">
            <MagneticButton to="/contact" className="w-full">
              Start a Project
            </MagneticButton>
            <div className="text-sm text-ink-muted">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="block py-1">
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="block py-1">
                {company.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
