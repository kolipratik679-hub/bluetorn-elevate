import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, PageHero, SectionHeading } from "@/components/site/Sections";

export const Route = createFileRoute("/resources/case-studies")({
  component: CaseStudies,
  head: () => ({
    meta: [
      { title: "Case Studies — Delivery Approach | BLUETORN Technologies" },
      {
        name: "description",
        content:
          "How BLUETORN Technologies approaches ERP, CRM, AI and cloud engagements — the problem framing, delivery plan and measurable outcomes we work toward.",
      },
      { property: "og:title", content: "Case Studies — BLUETORN Technologies" },
      {
        property: "og:description",
        content: "Our delivery approach across ERP, automation, AI and cloud engagements.",
      },
      { property: "og:url", content: "/resources/case-studies" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/resources/case-studies" }],
  }),
});

const studies = [
  {
    sector: "Manufacturing",
    challenge:
      "Production, inventory and dispatch tracked across disconnected spreadsheets, with month-end reconciliation taking days.",
    approach:
      "Process discovery across the plant, a modular ERP rollout starting with inventory, then production and dispatch, with parallel-run periods per module.",
    outcome:
      "Live stock and work-in-progress visibility, faster monthly closing and a single source of truth across departments.",
  },
  {
    sector: "Healthcare",
    challenge:
      "Patient records, appointments and billing handled in separate tools with no controlled access history.",
    approach:
      "A unified hospital platform with role-based clinical access, appointment and OPD/IPD workflows, pharmacy and diagnostics integration and complete audit logging.",
    outcome:
      "Shorter patient waiting cycles, accurate billing and auditable access to sensitive records.",
  },
  {
    sector: "Retail & E-Commerce",
    challenge:
      "Stock counts diverging between stores and the online channel, causing oversells and manual corrections.",
    approach:
      "Central catalogue and inventory service, POS and online order synchronisation, and a checkout rebuilt around payment success and conversion.",
    outcome: "Consistent stock across channels, fewer oversells and cleaner customer data.",
  },
  {
    sector: "Professional Services",
    challenge:
      "Analysts spending hours each week locating information across scattered documents and policies.",
    approach:
      "A retrieval-grounded AI assistant over approved internal documents, with citations, guardrails and human review on consequential outputs.",
    outcome: "Faster internal response times and knowledge accessible across the organisation.",
  },
];

function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="How we frame, plan and deliver engagements"
        body="BLUETORN was founded in 2026 and client work is delivered under confidentiality. These are representative engagement patterns — the problem framing, the delivery approach and the outcomes we design toward."
      />
      <section className="container-x py-20 lg:py-24">
        <SectionHeading eyebrow="Engagement patterns" title="Four common problems we solve" />
        <div className="mt-14 space-y-5">
          {studies.map((s, i) => (
            <Reveal key={s.sector} delay={i * 70}>
              <article className="grid gap-6 rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/30 hover:shadow-soft lg:grid-cols-[0.6fr_1fr_1fr_1fr]">
                <p className="font-display text-lg font-semibold text-foreground">{s.sector}</p>
                {[
                  { label: "Challenge", value: s.challenge },
                  { label: "Approach", value: s.approach },
                  { label: "Outcome", value: s.outcome },
                ].map((b) => (
                  <div key={b.label}>
                    <p className="eyebrow text-primary">{b.label}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {b.value}
                    </p>
                  </div>
                ))}
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand title="Have a similar problem to solve?" />
    </>
  );
}
