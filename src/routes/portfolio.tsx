import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/site/AppLink";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, PageHero, SectionHeading } from "@/components/site/Sections";
import { processSteps, servicesList } from "@/data/company";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Portfolio & Capability Showcase — BLUETORN Technologies" },
      {
        name: "description",
        content:
          "The types of platforms BLUETORN Technologies designs and builds: ERP, CRM, SaaS, AI systems, commerce platforms, portals and mobile apps.",
      },
      { property: "og:title", content: "Portfolio — BLUETORN Technologies" },
      {
        property: "og:description",
        content: "Platform categories we engineer and how each engagement is delivered.",
      },
      { property: "og:url", content: "/portfolio" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

const showcase = [
  {
    title: "Enterprise ERP Platforms",
    body: "Modular systems covering production, inventory, HR, payroll and accounting with role-based access and live management dashboards.",
    tags: ["Laravel", "PostgreSQL", "React.js", "RBAC"],
    to: "/services/erp",
  },
  {
    title: "Sales & Service CRM",
    body: "Lead capture from web, WhatsApp and campaigns, pipeline stages matched to your sales motion, automated follow-ups and conversion reporting.",
    tags: ["Node.js", "WhatsApp API", "Redis", "Analytics"],
    to: "/services/crm",
  },
  {
    title: "Multi-Tenant SaaS Products",
    body: "Subscription platforms with tenant isolation, plan entitlements, usage metering and observability built in from the first release.",
    tags: ["Next.js", "PostgreSQL", "AWS", "CI/CD"],
    to: "/services/saas",
  },
  {
    title: "AI Assistants & Agents",
    body: "Retrieval-grounded assistants over company documents, classification and drafting agents, with guardrails and human approval steps.",
    tags: ["OpenAI", "LangChain", "RAG", "Vector Search"],
    to: "/services/ai-solutions",
  },
  {
    title: "Commerce & Marketplace Platforms",
    body: "B2B and B2C storefronts, multi-vendor marketplaces, customer-specific pricing and real-time inventory across channels.",
    tags: ["Next.js", "Laravel", "MySQL", "Payments"],
    to: "/services/ecommerce",
  },
  {
    title: "Customer Portals & Mobile Apps",
    body: "Self-service portals and Flutter or React Native applications connected to the same secure backend and reporting layer.",
    tags: ["Flutter", "React Native", "REST APIs", "Firebase"],
    to: "/services/mobile-apps",
  },
];

function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="The platforms we design and engineer"
        body="BLUETORN Technologies was founded in 2026. Rather than publishing client work we are not free to share, this page sets out precisely the categories of platform we build and how each engagement is delivered."
      >
        <MagneticButton to="/contact">
          Request a detailed capability walkthrough <ArrowRight className="h-4 w-4" />
        </MagneticButton>
      </PageHero>

      <section className="container-x py-20 lg:py-24">
        <SectionHeading
          eyebrow="Capability showcase"
          title="Six platform categories we build end to end"
          body="Each of these is delivered by the same team, under the same seven-stage process, with full source ownership handed over on completion."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {showcase.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 70}>
              <AppLink
                to={s.to}
                className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
              >
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-2.5 py-1 text-[0.68rem] font-medium text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </AppLink>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink-gradient py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            tone="light"
            eyebrow="Engagement model"
            title="How a project runs with us"
            align="center"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.slice(0, 4).map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <div className="h-full bg-[oklch(0.19_0.035_240/0.92)] p-7">
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-teal-soft">
                    {p.step}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-ink-foreground">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 lg:py-24">
        <SectionHeading
          eyebrow="Services"
          title="Explore the capability behind each platform"
          align="center"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {servicesList.map((s) => (
            <AppLink
              key={s.slug}
              to={`/services/${s.slug}`}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              {s.title}
            </AppLink>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
