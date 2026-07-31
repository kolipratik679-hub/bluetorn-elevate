import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Target } from "lucide-react";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, FaqAccordion, PageHero, SectionHeading } from "@/components/site/Sections";
import { industriesList } from "@/data/company";

export const Route = createFileRoute("/industries/$slug")({
  component: IndustryPage,
  head: ({ params }) => {
    const i = industriesList.find((x) => x.slug === params.slug);
    const title = i ? `${i.title} Software Solutions — BLUETORN` : "Industries — BLUETORN";
    const desc = i?.short ?? "Industry software solutions engineered by BLUETORN Technologies.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/industries/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/industries/${params.slug}` }],
    };
  },
});

function IndustryPage() {
  const { slug } = Route.useParams();
  const industry = industriesList.find((i) => i.slug === slug);
  if (!industry) throw notFound();

  return (
    <>
      <PageHero
        eyebrow={`Industry · ${industry.title}`}
        title={`${industry.title} software, engineered around your operations`}
        body={industry.intro}
      >
        <MagneticButton to="/contact">
          Discuss your requirement <ArrowRight className="h-4 w-4" />
        </MagneticButton>
      </PageHero>

      <section className="container-x py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="What we build" title="Systems this sector depends on" />
            <div className="mt-10 space-y-3">
              {industry.needs.map((n, i) => (
                <Reveal key={n} delay={i * 60}>
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{n}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Impact" title="The operational difference" />
            <div className="mt-10 space-y-3">
              {industry.outcomes.map((o, i) => (
                <Reveal key={o} variant="right" delay={i * 70}>
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/60 p-5">
                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{o}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={260} className="mt-8 rounded-3xl border border-border bg-card p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every {industry.title.toLowerCase()} engagement begins with process discovery — we
                document how work flows today, then digitise it in the order that produces value
                fastest.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x pb-20 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="FAQ" title={`Working with ${industry.title.toLowerCase()} teams`} />
          <Reveal delay={100}>
            <FaqAccordion
              items={[
                {
                  q: "Can you integrate with the systems we already use?",
                  a: "Yes. Integration is a core part of our work — we connect existing ERP, accounting, payment, messaging and third-party platforms through documented, versioned APIs.",
                },
                {
                  q: "Do you build from scratch or configure existing products?",
                  a: "Both. Where a proven platform fits, we configure and extend it. Where your process is a genuine differentiator, we build custom software around it.",
                },
                {
                  q: "How is data security handled?",
                  a: "Role-based access control, encrypted transport, secure secret management, 2FA where appropriate and complete audit logging are part of the baseline build.",
                },
                {
                  q: "Will our team be trained on the new system?",
                  a: "Yes. Handover includes documentation, training sessions and a support period so adoption is genuine rather than partial.",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <CTABand title={`Modernise your ${industry.title.toLowerCase()} operations.`} />
    </>
  );
}
