import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, FaqAccordion, PageHero, SectionHeading } from "@/components/site/Sections";
import { faqs } from "@/data/company";

export const Route = createFileRoute("/resources/faq")({
  component: Faq,
  head: () => ({
    meta: [
      { title: "FAQ — Engagements, Ownership & Support | BLUETORN" },
      {
        name: "description",
        content:
          "Answers on how BLUETORN Technologies engagements start, code ownership, communication, integration, security and post-launch support.",
      },
      { property: "og:title", content: "Frequently Asked Questions — BLUETORN Technologies" },
      {
        property: "og:description",
        content: "How we scope, build, secure and support software engagements.",
      },
      { property: "og:url", content: "/resources/faq" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/resources/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything clients ask before signing"
        body="Straight answers on scoping, ownership, communication, security and what happens after launch."
      />
      <section className="container-x py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Questions" title="Engagement, delivery and support" />
          <Reveal delay={100}>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>
      <CTABand />
    </>
  );
}
