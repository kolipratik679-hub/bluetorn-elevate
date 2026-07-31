import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import developerImg from "@/assets/developer-work.jpg";
import { AppLink } from "@/components/site/AppLink";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, FaqAccordion, PageHero, SectionHeading } from "@/components/site/Sections";
import { processSteps, servicesList } from "@/data/company";

export const Route = createFileRoute("/services/$slug")({
  component: ServicePage,
  head: ({ params }) => {
    const service = servicesList.find((s) => s.slug === params.slug);
    const title = service ? `${service.title} — BLUETORN Technologies` : "Service — BLUETORN";
    const desc = service?.short ?? "Enterprise software engineering services by BLUETORN.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/services/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
});

function ServicePage() {
  const { slug } = Route.useParams();
  const service = servicesList.find((s) => s.slug === slug);
  if (!service) throw notFound();

  const related = servicesList.filter((s) => s.slug !== slug).slice(0, 3);

  const serviceFaqs = [
    {
      q: `How do you scope a ${service.title.toLowerCase()} engagement?`,
      a: "We start with a discovery session covering objectives, users, existing systems and constraints. You then receive a written scope with proposed architecture, delivery phases, timeline and commercials before development begins.",
    },
    {
      q: "How long does delivery usually take?",
      a: "Timelines depend on scope, but we work in short sprints with working software at the end of each one, so you see progress continuously rather than waiting for a single delivery date.",
    },
    {
      q: "Do you work with our in-house team?",
      a: "Yes. We regularly work alongside internal teams — sharing repositories, review processes and boards — and hand over documented systems your engineers can maintain.",
    },
    {
      q: "What happens after go-live?",
      a: "We offer maintenance and AMC engagements covering monitoring, security patching, performance optimisation, technical support and ongoing enhancements.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        body={service.intro}
        breadcrumb={[{ label: "Services", to: "/services" }]}
      >
        <div className="flex flex-wrap gap-4">
          <MagneticButton to="/contact">
            Discuss your requirement <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton to="/services" tone="ghost-light">
            All services
          </MagneticButton>
        </div>
      </PageHero>

      <section className="container-x py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading eyebrow="What's included" title="Where this capability applies" />
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {service.offerings.map((o, i) => (
                <Reveal key={o} delay={i * 60}>
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-all duration-400 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{o}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Business value" title="What you get out of it" />
            <ul className="mt-10 space-y-4">
              {service.benefits.map((b, i) => (
                <Reveal key={b} variant="right" delay={i * 70} as="li" className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Sparkles className="h-3 w-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{b}</span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={300} className="mt-10 rounded-3xl border border-border bg-secondary/60 p-6">
              <p className="eyebrow text-primary">Typical stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 lg:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="How we deliver"
              title="The same disciplined process, every engagement"
              body="Whether the build is a focused module or a multi-year platform, delivery follows the same structure so quality never depends on who is available that week."
            />
            <div className="mt-10 space-y-3">
              {processSteps.slice(0, 5).map((s, i) => (
                <Reveal key={s.step} delay={i * 60}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                    <span className="font-display text-xs font-semibold text-primary/70">
                      {s.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{s.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal variant="right" className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={developerImg}
              alt="BLUETORN developer working on a business dashboard"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="FAQ" title={`${service.title} questions`} />
          <Reveal delay={120}>
            <FaqAccordion items={serviceFaqs} />
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-8">
        <SectionHeading eyebrow="Related" title="Capabilities that pair well with this" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {related.map((r, i) => (
            <Reveal key={r.slug} delay={i * 70}>
              <AppLink
                to={`/services/${r.slug}`}
                className="group block h-full rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
              >
                <h3 className="text-base font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{r.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </AppLink>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand title={`Planning a ${service.title.toLowerCase()} project?`} />
    </>
  );
}
