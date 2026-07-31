import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { AppLink } from "@/components/site/AppLink";
import { LogoLockup } from "@/components/site/Logo";
import { company, servicesList, industriesList } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-ink-gradient text-ink-foreground">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <LogoLockup showTagline />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">
              {company.overview}
            </p>
            <p className="mt-6 font-display text-sm font-medium text-teal-soft">
              {company.tagline}
            </p>
          </div>

          <div>
            <p className="eyebrow text-teal-soft/80">Services</p>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-muted">
              {servicesList.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <AppLink
                    to={`/services/${s.slug}`}
                    className="transition-colors hover:text-ink-foreground"
                  >
                    {s.title}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-teal-soft/80">Industries</p>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-muted">
              {industriesList.map((s) => (
                <li key={s.slug}>
                  <AppLink
                    to={`/industries/${s.slug}`}
                    className="transition-colors hover:text-ink-foreground"
                  >
                    {s.title}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-teal-soft/80">Head Office</p>
            <ul className="mt-5 space-y-4 text-sm text-ink-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-soft" />
                <span>
                  {company.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-teal-soft" />
                <a href={`mailto:${company.email}`} className="hover:text-ink-foreground">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-teal-soft" />
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="hover:text-ink-foreground"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal-soft" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-border pt-8 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. Navi Mumbai, Maharashtra, India.
          </p>
          <div className="flex flex-wrap gap-6">
            <AppLink to="/company/about" className="hover:text-ink-foreground">
              About
            </AppLink>
            <AppLink to="/company/careers" className="hover:text-ink-foreground">
              Careers
            </AppLink>
            <AppLink to="/resources/faq" className="hover:text-ink-foreground">
              FAQ
            </AppLink>
            <AppLink to="/contact" className="hover:text-ink-foreground">
              Contact
            </AppLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
