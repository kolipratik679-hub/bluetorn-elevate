import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  BrainCircuit,
  Cloud,
  Code2,
  Layers,
  LineChart,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import heroImg from "@/assets/hero-engineering.jpg";
import meetingImg from "@/assets/enterprise-meeting.jpg";
import cloudImg from "@/assets/cloud-infra.jpg";
import { AppLink } from "@/components/site/AppLink";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Reveal } from "@/components/site/Reveal";
import { Typewriter } from "@/components/site/Typewriter";
import {
  Card,
  CTABand,
  FaqAccordion,
  SectionHeading,
  StatBand,
} from "@/components/site/Sections";
import {
  capabilities,
  company,
  faqs,
  industriesList,
  processSteps,
  servicesList,
  solutionsList,
  techStack,
} from "@/data/company";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "BLUETORN Technologies — Smarter Technology. Stronger Future." },
      {
        name: "description",
        content:
          "BLUETORN Technologies is a software engineering and digital transformation company in Navi Mumbai building custom software, web, mobile, AI, ERP, CRM and cloud solutions.",
      },
      { property: "og:title", content: "BLUETORN Technologies — Software Engineering Company" },
      {
        property: "og:description",
        content:
          "Enterprise-grade software, AI and cloud engineering for startups, SMEs and enterprises across India.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const typewriterWords = [
  "AI First Software Engineering",
  "Custom Software Development",
  "Digital Transformation",
  "Enterprise Solutions",
  "Cloud & AI Innovation",
];

const serviceIcons = [Code2, Layers, Smartphone, BrainCircuit, Boxes, Cloud];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-gradient pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute -top-52 -left-24 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,oklch(0.66_0.1_200/0.32),transparent_62%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute right-[-14%] bottom-[-18%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.09_250/0.32),transparent_65%)] blur-3xl [animation-delay:-6s]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(oklch(1_0_0/0.14)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.14)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(72%_66%_at_36%_28%,black,transparent)]"
      />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal as="div" className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-[oklch(1_0_0/0.06)] px-4 py-1.5 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-teal-soft" />
            <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-ink-muted uppercase">
              Navi Mumbai · India · Est. {company.founded}
            </span>
          </Reveal>

          <Reveal
            as="h1"
            delay={100}
            className="mt-8 text-balance-tight text-[2.6rem] leading-[1.02] text-ink-foreground sm:text-[3.4rem] lg:text-[4.3rem]"
          >
            Software engineering for
            <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-teal-soft to-[oklch(0.86_0.05_195)] bg-clip-text text-transparent">
              serious businesses.
            </span>
          </Reveal>

          <Reveal delay={180} className="mt-6 flex min-h-[2.2rem] items-center">
            <span className="font-display text-lg font-medium text-ink-foreground sm:text-xl">
              <Typewriter words={typewriterWords} />
            </span>
          </Reveal>

          <Reveal
            as="p"
            delay={240}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-[1.06rem]"
          >
            {company.name} builds secure, scalable digital products for startups, SMEs and
            enterprises — custom software, web and mobile platforms, AI systems, ERP, CRM and cloud
            infrastructure engineered to last.
          </Reveal>

          <Reveal delay={320} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton to="/contact">
              Start a Project <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton to="/services" tone="ghost-light">
              Explore Services
            </MagneticButton>
          </Reveal>

          <Reveal delay={400} className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {[
              { icon: ShieldCheck, label: "Security-first engineering" },
              { icon: Workflow, label: "Agile, sprint-based delivery" },
              { icon: LineChart, label: "Full source ownership" },
            ].map((t) => (
              <span key={t.label} className="flex items-center gap-2 text-xs text-ink-muted">
                <t.icon className="h-4 w-4 text-teal-soft" />
                {t.label}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal variant="scale" delay={200} className="relative">
          <div className="animate-float-slow relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-ink-border shadow-[0_50px_120px_-40px_oklch(0.08_0.02_240/0.9)]">
              <img
                src={heroImg}
                alt="BLUETORN engineers reviewing enterprise software architecture"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-[oklch(0.16_0.03_244/0.75)] via-transparent to-transparent"
              />
            </div>

            <div className="glass-panel absolute -bottom-8 -left-4 w-56 rounded-2xl p-5 sm:-left-10">
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-teal-soft uppercase">
                Delivery model
              </p>
              <p className="mt-2 text-sm leading-snug font-medium text-ink-foreground">
                Discovery → Architecture → Sprints → QA → Go-live → Support
              </p>
            </div>

            <div className="glass-panel absolute -top-6 -right-3 rounded-2xl px-5 py-4 sm:-right-8">
              <p className="font-display text-2xl font-semibold text-ink-foreground">13+</p>
              <p className="text-[0.65rem] tracking-[0.16em] text-ink-muted uppercase">
                Capabilities
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container-x relative mt-24">
        <StatBand
          stats={[
            { value: 13, suffix: "+", label: "Engineering capabilities" },
            { value: 14, suffix: "", label: "Industries served" },
            { value: 7, suffix: "", label: "Step delivery process" },
            { value: 100, suffix: "%", label: "Source code ownership" },
          ]}
        />
      </div>
    </section>
  );
}

function CapabilityMarquee() {
  const row = [...capabilities, ...capabilities];
  return (
    <div className="overflow-hidden border-y border-border bg-secondary/50 py-5">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="flex items-center gap-10 text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase"
          >
            {c}
            <span className="h-1 w-1 rounded-full bg-primary/50" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <CapabilityMarquee />

      {/* Services */}
      <section className="container-x py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="What we do"
            title="Engineering capability across the full product lifecycle"
            body="From the first architecture decision to long-term maintenance, BLUETORN covers every layer your digital platform depends on."
          />
          <Reveal delay={200}>
            <MagneticButton to="/services" tone="ghost-dark">
              All 14 services <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.slice(0, 6).map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <Reveal key={s.slug} delay={i * 70}>
                <AppLink to={`/services/${s.slug}`} className="block h-full">
                  <Card title={s.title} body={s.short} className="h-full">
                    <span className="mb-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Card>
                </AppLink>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Solutions split */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left" className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={meetingImg}
                alt="Enterprise technology team planning a digital transformation programme"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Solutions"
              title="Built around where your business actually is"
              body="An enterprise consolidating legacy systems and a startup racing to first revenue need very different engineering. We shape the engagement accordingly."
            />
            <div className="mt-10 space-y-3">
              {solutionsList.map((s, i) => (
                <Reveal key={s.slug} variant="right" delay={i * 80}>
                  <AppLink
                    to={`/solutions/${s.slug}`}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-400 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">{s.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {s.short}
                      </span>
                    </span>
                  </AppLink>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="Development process"
          title="A delivery process you can actually follow"
          body="Seven stages, each with defined outputs and sign-offs. You always know what is happening, what is next and what is blocked."
          align="center"
        />
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[15px] w-px bg-border lg:left-1/2"
          />
          <div className="space-y-8">
            {processSteps.map((s, i) => (
              <Reveal
                key={s.step}
                variant={i % 2 === 0 ? "left" : "right"}
                delay={40}
                className={`relative pl-12 lg:w-1/2 lg:pl-0 ${
                  i % 2 === 0 ? "lg:pr-14 lg:text-right" : "lg:ml-auto lg:pl-14"
                }`}
              >
                <span
                  className={`absolute top-2 left-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card font-display text-[0.65rem] font-semibold text-primary lg:top-3 ${
                    i % 2 === 0 ? "lg:right-[-16px] lg:left-auto" : "lg:left-[-16px]"
                  }`}
                >
                  {s.step}
                </span>
                <div className="rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-ink-gradient py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Industries"
            tone="light"
            title="Domain knowledge that shortens the build"
            body="We already understand the workflows, compliance realities and reporting needs of the sectors we serve — so discovery is faster and the first release is closer to right."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-4">
            {industriesList.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 60}>
                <AppLink
                  to={`/industries/${ind.slug}`}
                  className="group flex h-full flex-col justify-between bg-[oklch(0.19_0.035_240/0.92)] p-7 transition-colors duration-400 hover:bg-[oklch(0.24_0.05_220/0.95)]"
                >
                  <div>
                    <h3 className="text-base font-semibold text-ink-foreground">{ind.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{ind.short}</p>
                  </div>
                  <ArrowUpRight className="mt-8 h-4 w-4 text-teal-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </AppLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why + image */}
      <section className="container-x py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why BLUETORN"
              title="Enterprise discipline, without enterprise friction"
              body="We are a focused engineering team, not a layered agency. You work directly with the people designing and building your system."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  t: "Architecture before code",
                  b: "The expensive decisions — data model, integrations, security — are made first and documented.",
                },
                {
                  t: "Secure by default",
                  b: "RBAC, JWT/OAuth 2.0, SSL/TLS, 2FA and audit logging are part of the baseline build.",
                },
                {
                  t: "Transparent delivery",
                  b: "Shared boards, sprint reviews and honest status — including when something slips.",
                },
                {
                  t: "Support that continues",
                  b: "AMC engagements covering monitoring, patching, optimisation and enhancements.",
                },
              ].map((f, i) => (
                <Reveal key={f.t} delay={i * 70}>
                  <div className="rounded-2xl border border-border bg-card p-5 transition-all duration-400 hover:-translate-y-1 hover:shadow-soft">
                    <p className="text-sm font-semibold text-foreground">{f.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal variant="right" className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={cloudImg}
              alt="Cloud infrastructure powering BLUETORN enterprise deployments"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Technology stack"
            title="Proven technology, chosen deliberately"
            body="We standardise on mature, well-supported technology and select per project based on your team, budget and operating environment."
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((group, i) => (
              <Reveal key={group.group} delay={i * 50}>
                <div className="h-full rounded-3xl border border-border bg-card p-6">
                  <p className="eyebrow text-primary">{group.group}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we are asked before every engagement"
            body="If something is not answered here, ask us directly — we reply with specifics."
          />
          <Reveal delay={120}>
            <FaqAccordion items={faqs.slice(0, 5)} />
            <div className="mt-6">
              <AppLink
                to="/resources/faq"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Read all FAQs <ArrowRight className="h-4 w-4" />
              </AppLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
