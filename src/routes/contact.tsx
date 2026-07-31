import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { LogoMark } from "@/components/site/Logo";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/Sections";
import { company, servicesList } from "@/data/company";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact BLUETORN Technologies — Navi Mumbai, India" },
      {
        name: "description",
        content:
          "Talk to BLUETORN Technologies about your software project. Office in Ulwe, Navi Mumbai. Email info@bluetorn.com or call +91 77889 96549.",
      },
      { property: "og:title", content: "Contact BLUETORN Technologies" },
      {
        property: "og:description",
        content: "Start a software, AI or cloud engagement with our Navi Mumbai engineering team.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    setSending(true);
    const body = [
      `Name: ${name}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Project enquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client with the enquiry ready to send.");
    setTimeout(() => setSending(false), 800);
  };

  const field =
    "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-3 focus:ring-primary/15";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are building"
        body="Share your objective and current situation. We respond with a clear scope, architecture direction and timeline — not a generic sales deck."
      />

      <section className="container-x py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal variant="left">
            <form
              onSubmit={onSubmit}
              className="rounded-[2rem] border border-border bg-card p-7 shadow-soft sm:p-9"
            >
              <SectionHeading eyebrow="Project enquiry" title="Start a conversation" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Full name" className={field} />
                <input name="company" placeholder="Company" className={field} />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Work email"
                  className={field}
                />
                <input name="phone" placeholder="Phone" className={field} />
                <select name="service" defaultValue="" className={`${field} sm:col-span-2`}>
                  <option value="" disabled>
                    Service you are interested in
                  </option>
                  {servicesList.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Briefly describe your requirement, current systems and timeline"
                  className={`${field} sm:col-span-2`}
                />
              </div>
              <div className="mt-8">
                <MagneticButton type="submit">
                  {sending ? "Preparing…" : "Send enquiry"} <Send className="h-4 w-4" />
                </MagneticButton>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Prefer email? Write directly to {company.email}.
              </p>
            </form>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="overflow-hidden rounded-[2rem] bg-ink-gradient p-8 text-ink-foreground sm:p-10">
              <LogoMark className="h-12 w-12 animate-float-slow" />
              <p className="mt-8 font-display text-xl leading-snug font-semibold">
                {company.tagline}
              </p>
              <ul className="mt-8 space-y-6 text-sm text-ink-muted">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-soft" />
                  <span>
                    {company.address.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex gap-4">
                  <Mail className="h-4 w-4 shrink-0 text-teal-soft" />
                  <a href={`mailto:${company.email}`} className="hover:text-ink-foreground">
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Phone className="h-4 w-4 shrink-0 text-teal-soft" />
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="hover:text-ink-foreground"
                  >
                    {company.phone}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal-soft" />
                  <span>{company.hours}</span>
                </li>
              </ul>
              <div className="mt-10 border-t border-ink-border pt-6 text-xs text-ink-muted">
                <p>Founders</p>
                <p className="mt-2 text-ink-foreground">{company.founders.join(" · ")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
