import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteShell } from "@/components/site/SiteShell";
import { LogoMark } from "@/components/site/Logo";
import { MagneticButton } from "@/components/site/MagneticButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-gradient px-4">
      <div className="max-w-md text-center">
        <LogoMark className="mx-auto h-14 w-14 animate-float-slow" />
        <p className="mt-8 font-display text-[5rem] leading-none font-semibold text-ink-foreground">
          404
        </p>
        <h1 className="mt-4 text-xl font-semibold text-ink-foreground">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          The page you are looking for does not exist or has been moved. Explore our services or
          get in touch with the BLUETORN team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <MagneticButton to="/">Back to Home</MagneticButton>
          <MagneticButton to="/contact" tone="ghost-light">
            Contact Us
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-gradient px-4">
      <div className="max-w-md text-center">
        <LogoMark className="mx-auto h-12 w-12" />
        <h1 className="mt-8 text-xl font-semibold tracking-tight text-ink-foreground">
          This page didn't load
        </h1>
        <p className="mt-3 text-sm text-ink-muted">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <MagneticButton
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </MagneticButton>
          <MagneticButton href="/" tone="ghost-light">
            Go home
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BLUETORN Technologies — Smarter Technology. Stronger Future." },
      {
        name: "description",
        content:
          "BLUETORN Technologies is a software engineering and digital transformation company in Navi Mumbai building custom software, web, mobile, AI, ERP, CRM and cloud solutions.",
      },
      { name: "author", content: "BLUETORN Technologies" },
      { property: "og:site_name", content: "BLUETORN Technologies" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#64D9C4" },
      { property: "og:title", content: "BLUETORN Technologies — Smarter Technology. Stronger Future." },
      { name: "twitter:title", content: "BLUETORN Technologies — Smarter Technology. Stronger Future." },
      { property: "og:description", content: "BLUETORN Technologies is a software engineering and digital transformation company in Navi Mumbai building custom software, web, mobile, AI, ERP, CRM and cloud solutions." },
      { name: "twitter:description", content: "BLUETORN Technologies is a software engineering and digital transformation company in Navi Mumbai building custom software, web, mobile, AI, ERP, CRM and cloud solutions." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/cTjas7zuKiM45UDWiwhn3uqYZPs2/social-images/social-1785460964580-1000936241.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/cTjas7zuKiM45UDWiwhn3uqYZPs2/social-images/social-1785460964580-1000936241.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BLUETORN Technologies",
          url: "https://bluetorn.com",
          email: "info@bluetorn.com",
          telephone: "+91 77889 96549",
          foundingDate: "2026",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Office 01 & 02, Sai Sagar Apartment, Ulwe",
            addressLocality: "Navi Mumbai",
            postalCode: "410206",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteShell>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </SiteShell>
    </QueryClientProvider>
  );
}
