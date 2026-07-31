import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import meetingImg from "@/assets/enterprise-meeting.jpg";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, PageHero, SectionHeading, StatBand } from "@/components/site/Sections";
import { company, coreValues, processSteps } from "@/data/company";

type Block = { title: string; body: string };
type PageDef = {
  eyebrow: string;
  title: string;
  intro: string;
  lead?: string;
  blocks?: Block[];
  list?: { title: string; body: string }[];
  numbered?: boolean;
};

const pages: Record<string, PageDef> = {
  about: {
    eyebrow: "About us",
    title: "A software engineering company built for long-term partnerships",
    intro: company.overview,
    lead: `Founded in ${company.founded} and headquartered in Ulwe, Navi Mumbai, BLUETORN Technologies works with startups, SMEs and enterprises that need software they can rely on for years — not a prototype that collapses under real usage.`,
    blocks: [
      {
        title: "What we do",
        body: "Custom software, web and mobile platforms, AI systems, ERP and CRM, SaaS products, cloud infrastructure, UI/UX design, API integration, business automation, digital marketing and long-term maintenance.",
      },
      {
        title: "How we work",
        body: "One accountable team, a documented seven-stage delivery process, reviewed code, tested releases and complete source ownership handed to you at the end of every engagement.",
      },
      {
        title: "Who we serve",
        body: "Manufacturing, healthcare, education, retail, e-commerce, logistics, real estate, hospitality, finance, banking, insurance, construction, startups and enterprises.",
      },
      {
        title: "Where we are",
        body: `${company.address.join(", ")}. We work with clients across India and internationally, remotely and on-site when the engagement calls for it.`,
      },
    ],
  },
  "our-story": {
    eyebrow: "Our story",
    title: "Why BLUETORN Technologies exists",
    intro:
      "BLUETORN Technologies was founded in 2026 by Chandan Kumar and Pratik Koli around a straightforward observation: growing businesses in India were being offered either expensive enterprise suites they could not adapt, or cheap builds that failed the moment usage became real.",
    lead: "We started BLUETORN to occupy the space between those extremes — enterprise engineering discipline, delivered by a focused team, at a scale that fits the business paying for it.",
    blocks: [
      {
        title: "The founding idea",
        body: "Software should be modelled on how a business actually operates. That means discovery before design, architecture before code, and honest conversations about what should not be built at all.",
      },
      {
        title: "The founders",
        body: `${company.founders.join(" and ")} lead engineering and delivery at BLUETORN. Clients work directly with the people responsible for their system, not through layers of account management.`,
      },
      {
        title: "The name",
        body: "BLUETORN stands for clarity and resilience — technology that is straightforward to understand and hard to break. That standard is applied to every release we ship.",
      },
      {
        title: "Where we are heading",
        body: "We are building a company measured by the systems still running well years after handover, and by clients who return for their next platform rather than shopping around.",
      },
    ],
  },
  mission: {
    eyebrow: "Mission",
    title:
      "To empower businesses with innovative, scalable and reliable software solutions",
    intro:
      "Our mission is to empower businesses with innovative, scalable and reliable software solutions that drive digital transformation, improve productivity and create long-term business value.",
    blocks: [
      {
        title: "Innovation with purpose",
        body: "We adopt new technology, including AI, where it demonstrably reduces cost or cycle time — never as a headline feature with no operational benefit.",
      },
      {
        title: "Scalability by design",
        body: "Architecture, data models and infrastructure are validated against projected growth so systems keep performing as usage multiplies.",
      },
      {
        title: "Reliability as a commitment",
        body: "Reviewed code, tested releases, monitored deployments and defined support windows — reliability is engineered, not promised.",
      },
      {
        title: "Value that compounds",
        body: "Every platform we deliver should keep producing measurable value long after the invoice is settled.",
      },
    ],
  },
  vision: {
    eyebrow: "Vision",
    title: "To become one of India's most trusted software engineering companies",
    intro:
      "Our vision is to become one of India's most trusted software engineering companies by delivering world-class technology solutions with innovation, quality and customer satisfaction.",
    blocks: [
      {
        title: "Trust before scale",
        body: "We would rather be the company clients recommend without hesitation than the one with the largest headcount.",
      },
      {
        title: "World-class standards",
        body: "Our benchmark is the quality bar set by leading global product companies — in architecture, interface design and delivery discipline.",
      },
      {
        title: "Quality as culture",
        body: "Code review, QA and documentation are non-negotiable stages, not optional extras when timelines tighten.",
      },
      {
        title: "Customer satisfaction, measured",
        body: "We review outcomes after go-live and act on what we learn, engagement after engagement.",
      },
    ],
  },
  "core-values": {
    eyebrow: "Core values",
    title: "Ten principles we hire, build and decide against",
    intro:
      "Values only matter when they change behaviour. These ten shape how we scope work, write code, communicate progress and handle the moments when something goes wrong.",
    list: coreValues,
  },
  "development-process": {
    eyebrow: "Development process",
    title: "Seven stages from first conversation to continuous improvement",
    intro:
      "Our delivery process is deliberately visible. Each stage produces a defined output you can review, so quality never depends on trust alone.",
    list: processSteps.map((p) => ({ title: p.title, body: p.body })),
    numbered: true,
  },
  "quality-assurance": {
    eyebrow: "Quality assurance",
    title: "How we protect every release",
    intro:
      "Quality assurance at BLUETORN is a continuous engineering activity that runs alongside development, not a phase squeezed in before go-live.",
    lead: "Every build passes functional, regression, performance and security checks across devices, browsers and user roles before it reaches your users.",
    blocks: [
      {
        title: "Functional & regression testing",
        body: "Every user story is verified against its acceptance criteria, and existing flows are re-tested each sprint so new work never quietly breaks old behaviour.",
      },
      {
        title: "Performance testing",
        body: "Load, response time and database query performance are measured against realistic data volumes and concurrency, not empty test environments.",
      },
      {
        title: "Security validation",
        body: "Authentication, authorisation, input validation, session handling, secret management and dependency vulnerabilities are reviewed before every major release.",
      },
      {
        title: "Cross-device & accessibility checks",
        body: "Interfaces are validated across breakpoints and browsers, with contrast, keyboard navigation and semantic structure verified rather than assumed.",
      },
      {
        title: "Code review discipline",
        body: "No code reaches the main branch without peer review, and automated checks run in CI on every pull request.",
      },
      {
        title: "Defect tracking to closure",
        body: "Every defect is logged, prioritised, fixed and verified — with a visible board you can check at any point in the project.",
      },
    ],
  },
  careers: {
    eyebrow: "Careers",
    title: "Build enterprise software worth being proud of",
    intro:
      "BLUETORN is an engineering-led company in Navi Mumbai. We are growing carefully, hiring people who care about architecture, clarity and the person who has to maintain the code next year.",
    lead: `We are always open to conversations with strong engineers and designers. Send your CV and a short note about what you have built to ${company.email}.`,
    blocks: [
      {
        title: "Software Engineers",
        body: "React, Next.js, TypeScript, Node.js, Laravel, Python. You will own features end to end, from data model to interface, with real review and mentorship.",
      },
      {
        title: "Mobile Engineers",
        body: "Flutter and React Native, with native Kotlin or Swift experience welcome. You will ship production apps to real users and own release quality.",
      },
      {
        title: "UI/UX Designers",
        body: "Design systems, dashboards and product interfaces. You will prototype, validate and hand over specifications developers can build from directly.",
      },
      {
        title: "QA Engineers",
        body: "Functional, regression, performance and security testing across web and mobile platforms, with a strong say in release readiness.",
      },
      {
        title: "Cloud & DevOps Engineers",
        body: "AWS, Azure and GCP, Docker, CI/CD pipelines and monitoring. You will build the infrastructure our client platforms depend on.",
      },
      {
        title: "Internships",
        body: "Structured internships for engineering and design students who want production experience rather than sample projects.",
      },
    ],
  },
};

export const Route = createFileRoute("/company/$slug")({
  component: CompanyPage,
  head: ({ params }) => {
    const page = pages[params.slug];
    const title = page ? `${page.title} — BLUETORN Technologies` : "Company — BLUETORN";
    const desc = page?.intro.slice(0, 155) ?? "About BLUETORN Technologies.";
    return {
      meta: [
        { title: title.length > 62 ? `${page?.eyebrow ?? "Company"} — BLUETORN Technologies` : title },
        { name: "description", content: desc },
        { property: "og:title", content: `${page?.eyebrow ?? "Company"} — BLUETORN Technologies` },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/company/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/company/${params.slug}` }],
    };
  },
});

function CompanyPage() {
  const { slug } = Route.useParams();
  const page = pages[slug];
  if (!page) throw notFound();

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} body={page.intro}>
        <MagneticButton to="/contact">
          Talk to us <ArrowRight className="h-4 w-4" />
        </MagneticButton>
      </PageHero>

      {slug === "about" ? (
        <section className="container-x -mt-10 pb-4">
          <StatBand
            stats={[
              { value: 13, suffix: "+", label: "Capabilities" },
              { value: 14, suffix: "", label: "Industries" },
              { value: 2, suffix: "", label: "Founders" },
              { value: 2026, suffix: "", label: "Founded" },
            ]}
          />
        </section>
      ) : null}

      <section className="container-x py-20 lg:py-24">
        {page.lead ? (
          <Reveal as="p" className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-foreground">
            {page.lead}
          </Reveal>
        ) : null}

        {page.blocks ? (
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {page.blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                  <h2 className="text-lg font-semibold text-foreground">{b.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : null}

        {page.list ? (
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.list.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 70}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft">
                  {page.numbered ? (
                    <span className="font-display text-xs font-semibold tracking-[0.2em] text-primary/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  ) : (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                  <h2 className="mt-3 text-base font-semibold text-foreground">{v.title}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : null}
      </section>

      {slug === "about" || slug === "our-story" ? (
        <section className="bg-secondary/40 py-20 lg:py-24">
          <div className="container-x grid items-center gap-14 lg:grid-cols-2">
            <Reveal variant="left" className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={meetingImg}
                alt="BLUETORN team in a client planning session"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Leadership"
                title="Founded and led by engineers"
                body={`${company.founders.join(" and ")} founded BLUETORN Technologies in ${company.founded}. Both remain directly involved in architecture, delivery and client relationships.`}
              />
              <div className="mt-8 space-y-3">
                {company.founders.map((f, i) => (
                  <Reveal key={f} delay={i * 80}>
                    <div className="rounded-2xl border border-border bg-card p-5">
                      <p className="font-display text-base font-semibold text-foreground">{f}</p>
                      <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                        Founder · BLUETORN Technologies
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <CTABand />
    </>
  );
}
