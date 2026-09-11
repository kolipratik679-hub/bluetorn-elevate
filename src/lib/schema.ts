/**
 * Central structured-data (JSON-LD) source of truth.
 * Every entity is @id-linked so search and generative engines resolve
 * "BLUETORN Technologies" -> "AI software development" -> "Ulwe, Navi Mumbai".
 */

export const SITE_URL = "https://bluetorn.com";

export const ORG_ID = `${SITE_URL}/#organization`;
export const LOCAL_ID = `${SITE_URL}/#localbusiness`;
export const SITE_ID = `${SITE_URL}/#website`;

const address = {
  "@type": "PostalAddress",
  streetAddress: "Office 01 & 02, Sai Sagar Apartment, Ulwe",
  addressLocality: "Ulwe, Navi Mumbai",
  addressRegion: "Maharashtra",
  postalCode: "410206",
  addressCountry: "IN",
};

const geo = { "@type": "GeoCoordinates", latitude: 18.9857, longitude: 73.0288 };

const areaServed = [
  { "@type": "City", name: "Navi Mumbai" },
  { "@type": "City", name: "Mumbai" },
  { "@type": "State", name: "Maharashtra" },
  { "@type": "Country", name: "India" },
];

const aiServices = [
  "AI Software Development",
  "Generative AI Integration",
  "AI Agents and Automation",
  "RAG and Enterprise Knowledge Systems",
  "Custom Software Development",
  "Web Application Development",
  "Mobile App Development",
  "ERP and CRM Development",
  "Cloud and DevOps Engineering",
];

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "BLUETORN Technologies",
      alternateName: "Bluetorn Technologies",
      description:
        "BLUETORN Technologies is an AI-first software company in Ulwe, Navi Mumbai, building AI solutions, custom software and web applications for startups, SMEs and enterprises.",
      url: SITE_URL,
      email: "info@bluetorn.com",
      telephone: "+91-77889-96549",
      foundingDate: "2026",
      founders: [
        { "@type": "Person", name: "Chandan Kumar" },
        { "@type": "Person", name: "Pratik Koli" },
      ],
      address,
      areaServed,
      knowsAbout: aiServices,
      slogan: "Smarter Technology. Stronger Future.",
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": LOCAL_ID,
      name: "BLUETORN Technologies — AI Software Company in Ulwe, Navi Mumbai",
      parentOrganization: { "@id": ORG_ID },
      url: SITE_URL,
      email: "info@bluetorn.com",
      telephone: "+91-77889-96549",
      priceRange: "$$",
      address,
      geo,
      areaServed,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "19:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI and software engineering services",
        itemListElement: aiServices.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s, areaServed: "Navi Mumbai, India" },
        })),
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#ai-platform`,
      name: "BLUETORN AI Solutions Platform",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Artificial Intelligence",
      operatingSystem: "Web-based, Android, iOS",
      description:
        "Custom AI applications built by BLUETORN Technologies — AI agents, RAG assistants, document intelligence, forecasting and workflow automation embedded into existing ERP, CRM and web systems.",
      provider: { "@id": ORG_ID },
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Custom quotation after discovery" },
      featureList: [
        "AI agents and copilots",
        "Retrieval-augmented generation over company data",
        "Document and image intelligence",
        "Predictive analytics and forecasting",
        "Workflow and business process automation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE_URL,
      name: "BLUETORN Technologies",
      publisher: { "@id": ORG_ID },
      inLanguage: "en-IN",
    },
  ],
};

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}
