import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, PageHero, SectionHeading } from "@/components/site/Sections";

export const Route = createFileRoute("/resources/blog")({
  component: Blog,
  head: () => ({
    meta: [
      { title: "Blog — Engineering Notes | BLUETORN Technologies" },
      {
        name: "description",
        content:
          "Practical notes from the BLUETORN engineering team on architecture, ERP rollouts, AI integration, cloud migration and software quality.",
      },
      { property: "og:title", content: "BLUETORN Blog — Engineering Notes" },
      {
        property: "og:description",
        content: "Architecture, AI, cloud and delivery insights from our engineering team.",
      },
      { property: "og:url", content: "/resources/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/resources/blog" }],
  }),
});

const posts = [
  {
    topic: "Architecture",
    title: "Why the data model decides the cost of your next three years",
    body: "Most expensive rewrites trace back to a data model designed for the first release instead of the third. How we pressure-test schemas during discovery.",
  },
  {
    topic: "ERP",
    title: "Rolling out ERP without stopping operations",
    body: "Phased module rollouts, parallel-run periods and migration rehearsals — the practices that keep a plant or hospital running during a platform change.",
  },
  {
    topic: "Artificial Intelligence",
    title: "Where AI genuinely reduces cost, and where it does not",
    body: "A practical framework for assessing AI use cases against manual effort, error rate and cycle time before committing engineering budget.",
  },
  {
    topic: "Cloud",
    title: "Cloud migration checklists we actually use",
    body: "Rollback paths, cutover rehearsals, cost modelling and monitoring — what belongs in a migration plan before anything moves.",
  },
  {
    topic: "Quality",
    title: "Treating performance as a requirement, not a phase",
    body: "How Core Web Vitals, query budgets and load targets get written into acceptance criteria at the start of a build.",
  },
  {
    topic: "Security",
    title: "The security baseline every business platform needs",
    body: "RBAC, JWT and OAuth 2.0, SSL/TLS, 2FA, secret management and audit logging — the non-negotiables we ship by default.",
  },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Engineering notes from the BLUETORN team"
        body="Short, practical writing on the decisions that determine whether a software platform holds up: architecture, delivery, quality, security and applied AI."
      />
      <section className="container-x py-20 lg:py-24">
        <SectionHeading eyebrow="Topics" title="What we write about" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 70}>
              <article className="h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <p className="eyebrow text-primary">{p.topic}</p>
                <h2 className="mt-4 text-lg leading-snug font-semibold text-foreground">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-12 rounded-3xl border border-border bg-secondary/60 p-7 text-center">
          <p className="text-sm text-muted-foreground">
            Full articles are published as our engineering team writes them. Want a specific topic
            covered in depth for your team? Ask us directly.
          </p>
        </Reveal>
      </section>
      <CTABand />
    </>
  );
}
