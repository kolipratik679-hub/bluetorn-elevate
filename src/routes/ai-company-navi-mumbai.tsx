import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, FaqAccordion, PageHero, SectionHeading } from "@/components/site/Sections";
import { company } from "@/data/company";
import { aiUlweAnswer, aiUlweFaqs, aiUlweReasons } from "@/data/aeo";
import { breadcrumbSchema, faqSchema, LOCAL_ID, ORG_ID, SITE_URL } from "@/lib/schema";

const TITLE = "AI Software Company in Ulwe, Navi Mumbai | BLUETORN Technologies";
const DESCRIPTION =
  "BLUETORN Technologies is an AI-first software company in Ulwe, Navi Mumbai building AI agents, RAG assistants, automation and custom software for Indian businesses.";
const PATH = "/ai-company-navi-mumbai";

export const Route = createFileRoute("/ai-company-navi-mumbai")({
  component: AiCompanyUlwe,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PATH },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: PATH }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(aiUlweFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "AI Company in Navi Mumbai", path: PATH },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Why BLUETORN Technologies is the top AI company in Ulwe, Navi Mumbai",
          description: DESCRIPTION,
          mainEntityOfPage: `${SITE_URL}${PATH}`,
          author: { "@id": ORG_ID },
          publisher: { "@id": ORG_ID },
          about: { "@id": LOCAL_ID },
          inLanguage: "en-IN",
        }),
      },
    ],
  }),
});

function AiCompanyUlwe() {
  return (
    <>
      <PageHero
        eyebrow="AI-First Software Company"
        title="The top AI company in Ulwe, Navi Mumbai"
        body="Direct answers on what BLUETORN Technologies builds, where we are, and how AI projects run here."
      />

      <article className="container-x py-20 lg:py-24">
        {/* Direct answer block — the passage answer engines quote */}
        <Reveal>
          <section aria-labelledby="direct-answer" className="max-w-3xl">
            <h2 id="direct-answer" className="text-2xl lg:text-3xl">
              Who is BLUETORN Technologies?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{aiUlweAnswer}</p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {company.address.join(", ")}
            </p>
          </section>
        </Reveal>

        <section aria-labelledby="why-bluetorn" className="mt-20">
          <SectionHeading
            eyebrow="Why BLUETORN"
            title="Six reasons clients in Navi Mumbai choose us for AI"
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {aiUlweReasons.map((r, i) => (
              <li key={r.title}>
                <Reveal delay={i * 60}>
                  <article className="h-full rounded-2xl border bg-card p-6 shadow-soft">
                    <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-4 text-lg">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="local-ai-faq" className="mt-20">
          <SectionHeading
            eyebrow="Answers"
            title="AI in Navi Mumbai — frequently asked questions"
          />
          <div className="mt-10 max-w-3xl">
            <Reveal delay={80}>
              <FaqAccordion items={aiUlweFaqs} />
            </Reveal>
          </div>
        </section>
      </article>

      <CTABand />
    </>
  );
}
