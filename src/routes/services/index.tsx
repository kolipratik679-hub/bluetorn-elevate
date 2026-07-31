import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/site/AppLink";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, PageHero, SectionHeading } from "@/components/site/Sections";
import { servicesList, techStack } from "@/data/company";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: "Services — Software, Web, Mobile, AI & Cloud | BLUETORN" },
      {
        name: "description",
        content:
          "Explore BLUETORN Technologies services: custom software, web and mobile development, AI, ERP, CRM, SaaS, cloud, UI/UX, APIs, automation and maintenance.",
      },
      { property: "og:title", content: "BLUETORN Services — Full-lifecycle software engineering" },
      {
        property: "og:description",
        content:
          "Fourteen engineering capabilities covering build, operate and innovate for startups, SMEs and enterprises.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every capability your digital platform depends on"
        body="BLUETORN covers the full lifecycle — strategy, design, engineering, cloud, automation and long-term support — with one accountable team."
      >
        <MagneticButton to="/contact">
          Talk to an engineer <ArrowRight className="h-4 w-4" />
        </MagneticButton>
      </PageHero>

      <section className="container-x py-20 lg:py-24">
        <SectionHeading
          eyebrow="Capabilities"
          title="Fourteen services, one engineering standard"
          body="Each capability is delivered by the same team, under the same process, with the same documentation and security expectations."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 70}>
              <AppLink
                to={`/services/${s.slug}`}
                className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
              >
                <div>
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-primary/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold text-foreground">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                </div>
                <div className="mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {s.offerings.slice(0, 3).map((o) => (
                      <span
                        key={o}
                        className="rounded-full bg-secondary px-2.5 py-1 text-[0.68rem] font-medium text-secondary-foreground"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    View service
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </AppLink>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Technology"
            title="The stack behind the services"
            align="center"
            body="Mature, widely supported technology selected per project — never trend-driven choices you will struggle to hire for later."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((g, i) => (
              <Reveal key={g.group} delay={i * 50}>
                <div className="h-full rounded-3xl border border-border bg-card p-6">
                  <p className="eyebrow text-primary">{g.group}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
