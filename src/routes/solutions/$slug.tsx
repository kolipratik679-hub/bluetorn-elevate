import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, PageHero, SectionHeading } from "@/components/site/Sections";
import { solutionsList } from "@/data/company";

export const Route = createFileRoute("/solutions/$slug")({
  component: SolutionPage,
  head: ({ params }) => {
    const s = solutionsList.find((x) => x.slug === params.slug);
    const title = s ? `${s.title} — BLUETORN Technologies` : "Solutions — BLUETORN";
    const desc = s?.short ?? "Enterprise, startup, transformation and AI solutions by BLUETORN.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/solutions/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/solutions/${params.slug}` }],
    };
  },
});

function SolutionPage() {
  const { slug } = Route.useParams();
  const solution = solutionsList.find((s) => s.slug === slug);
  if (!solution) throw notFound();

  return (
    <>
      <PageHero eyebrow="Solution" title={solution.title} body={solution.intro}>
        <MagneticButton to="/contact">
          Book a discovery call <ArrowRight className="h-4 w-4" />
        </MagneticButton>
      </PageHero>

      <section className="container-x py-20 lg:py-24">
        <SectionHeading
          eyebrow="Our approach"
          title="Four pillars we work through"
          body="Each engagement is sequenced so risk is removed early and value is visible before the programme completes."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {solution.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink-gradient py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            tone="light"
            eyebrow="Outcomes"
            title="What changes after the work is done"
            body="We define measurable outcomes at the start of the engagement and review them against reality after go-live."
          />
          <div className="space-y-3">
            {solution.outcomes.map((o, i) => (
              <Reveal key={o} variant="right" delay={i * 70}>
                <div className="flex items-center gap-4 rounded-2xl border border-ink-border bg-[oklch(1_0_0/0.05)] p-5 backdrop-blur">
                  <Check className="h-4 w-4 shrink-0 text-teal-soft" />
                  <span className="text-sm text-ink-foreground">{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title={`Let's plan your ${solution.title.toLowerCase()} engagement.`} />
    </>
  );
}
