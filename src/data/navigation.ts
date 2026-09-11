export type NavChild = { label: string; to: string; desc?: string };
export type NavGroup = { heading?: string; items: NavChild[] };
export type NavItem = {
  label: string;
  to?: string;
  groups?: NavGroup[];
  feature?: { title: string; body: string; to: string; cta: string };
  wide?: boolean;
};

export const navigation: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Company",
    groups: [
      {
        heading: "Who we are",
        items: [
          { label: "About", to: "/company/about", desc: "Engineering team, focus and footprint" },
          { label: "Our Story", to: "/company/our-story", desc: "Why BLUETORN was founded in 2026" },
          { label: "Mission", to: "/company/mission", desc: "The outcome we work toward" },
          { label: "Vision", to: "/company/vision", desc: "Where we intend to take the company" },
        ],
      },
      {
        heading: "How we work",
        items: [
          { label: "Core Values", to: "/company/core-values", desc: "The ten principles we hire against" },
          { label: "Development Process", to: "/company/development-process", desc: "Discovery to continuous improvement" },
          { label: "Quality Assurance", to: "/company/quality-assurance", desc: "How we protect every release" },
          { label: "Careers", to: "/company/careers", desc: "Build enterprise software with us" },
        ],
      },
    ],
    feature: {
      title: "Smarter Technology. Stronger Future.",
      body: "A software engineering and digital transformation company based in Navi Mumbai, India.",
      to: "/company/about",
      cta: "Meet BLUETORN",
    },
  },
  {
    label: "Services",
    wide: true,
    groups: [
      {
        heading: "Build",
        items: [
          { label: "Software Development", to: "/services/software-development" },
          { label: "Web Development", to: "/services/web-development" },
          { label: "Mobile Apps", to: "/services/mobile-apps" },
          { label: "SaaS Development", to: "/services/saas" },
          { label: "E-Commerce", to: "/services/ecommerce" },
        ],
      },
      {
        heading: "Operate",
        items: [
          { label: "ERP Solutions", to: "/services/erp" },
          { label: "CRM Development", to: "/services/crm" },
          { label: "Business Automation", to: "/services/automation" },
          { label: "API Integration", to: "/services/api-integration" },
          { label: "Maintenance & Support", to: "/services/maintenance" },
        ],
      },
      {
        heading: "Innovate",
        items: [
          { label: "AI Solutions", to: "/services/ai-solutions" },
          { label: "Cloud & DevOps", to: "/services/cloud" },
          { label: "UI/UX Design", to: "/services/ui-ux" },
          { label: "Digital Marketing", to: "/services/digital-marketing" },
          { label: "All Services", to: "/services" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    groups: [
      {
        items: [
          { label: "Enterprise", to: "/solutions/enterprise", desc: "Modernise and consolidate core systems" },
          { label: "Startups", to: "/solutions/startups", desc: "MVP engineering that survives scale" },
          { label: "Digital Transformation", to: "/solutions/digital-transformation", desc: "From manual process to live platform" },
          { label: "AI Integration", to: "/solutions/ai-integration", desc: "AI embedded into what you already run" },
          {
            label: "AI Company in Navi Mumbai",
            to: "/ai-company-navi-mumbai",
            desc: "Why local businesses pick BLUETORN for AI",
          },
        ],
      },
    ],
  },
  {
    label: "Industries",
    groups: [
      {
        items: [
          { label: "Manufacturing", to: "/industries/manufacturing" },
          { label: "Healthcare", to: "/industries/healthcare" },
          { label: "Education", to: "/industries/education" },
          { label: "Retail", to: "/industries/retail" },
        ],
      },
      {
        items: [
          { label: "Logistics", to: "/industries/logistics" },
          { label: "Finance", to: "/industries/finance" },
          { label: "Real Estate", to: "/industries/real-estate" },
          { label: "Hospitality", to: "/industries/hospitality" },
        ],
      },
    ],
  },
  { label: "Portfolio", to: "/portfolio" },
  {
    label: "Resources",
    groups: [
      {
        items: [
          { label: "Blog", to: "/resources/blog", desc: "Engineering and transformation notes" },
          { label: "Case Studies", to: "/resources/case-studies", desc: "How we approach real problems" },
          { label: "FAQ", to: "/resources/faq", desc: "Engagement, ownership and support" },
        ],
      },
    ],
  },
  { label: "Contact", to: "/contact" },
];
