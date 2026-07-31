export const company = {
  name: "BLUETORN Technologies",
  short: "BLUETORN",
  tagline: "Smarter Technology. Stronger Future.",
  founded: "2026",
  email: "info@bluetorn.com",
  phone: "+91 77889 96549",
  website: "https://bluetorn.com",
  hours: "Monday – Saturday · 10:00 AM – 7:00 PM (IST)",
  address: [
    "Office 01 & 02, Sai Sagar Apartment",
    "Ulwe, Navi Mumbai – 410206",
    "Maharashtra, India",
  ],
  founders: ["Chandan Kumar", "Pratik Koli"],
  overview:
    "BLUETORN Technologies is a premium software engineering and digital transformation company based in Navi Mumbai, India. We help startups, SMEs and enterprises build secure, scalable and modern digital products.",
};

export type LinkItem = { label: string; to: string; desc?: string };

export const servicesList = [
  {
    slug: "software-development",
    title: "Software Development",
    short: "Custom, enterprise and business software engineered around your operations.",
    intro:
      "We design and build custom software that mirrors how your business actually works — from internal platforms to enterprise-grade systems used by hundreds of employees every day.",
    offerings: [
      "Custom Software Development",
      "Enterprise Software Development",
      "Business Software Development",
      "Desktop Applications",
    ],
    benefits: [
      "Systems modelled on your real workflows, not generic templates",
      "Architecture that scales as headcount and data volume grow",
      "Full source ownership and documented handover",
      "Security, roles and audit trails built in from day one",
    ],
    stack: ["TypeScript", "Node.js", "Python", "Laravel", "PostgreSQL", "Docker"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Corporate websites, web applications, portals and admin dashboards.",
    intro:
      "From a high-performance corporate website to a complex customer portal, we build web experiences that load fast, rank well and hold up under real traffic.",
    offerings: [
      "Corporate Websites",
      "Business Websites",
      "Web Applications",
      "Progressive Web Apps",
      "Customer Portals",
      "Admin Dashboards",
    ],
    benefits: [
      "Performance and Core Web Vitals treated as engineering requirements",
      "Accessible, responsive interfaces across every breakpoint",
      "SEO-ready structure, metadata and content architecture",
      "Composable components your team can extend later",
    ],
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Nginx"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    short: "Android, iOS, Flutter and React Native products built for scale.",
    intro:
      "We ship mobile products that feel native, work offline where needed, and share a single maintainable codebase when cross-platform is the right call.",
    offerings: ["Android", "iOS", "Flutter", "React Native"],
    benefits: [
      "One codebase where cross-platform makes commercial sense",
      "Native modules where performance demands it",
      "Store submission, release management and versioning handled",
      "Analytics and crash reporting configured before launch",
    ],
    stack: ["Flutter", "React Native", "Kotlin", "Swift", "Java", "Firebase"],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    short: "AI agents, generative AI, chatbots, LLM integration and automation.",
    intro:
      "We apply AI where it produces measurable business value — reducing manual effort, surfacing knowledge and automating decisions with human oversight.",
    offerings: ["AI Chatbots", "Generative AI", "AI Automation", "AI Agents", "LLM Integration"],
    benefits: [
      "Retrieval-grounded answers over your own documents and data",
      "Guardrails, evaluation and human-in-the-loop review",
      "Cost-aware model selection and prompt engineering",
      "Clear integration into existing systems, not a separate silo",
    ],
    stack: ["OpenAI", "Google Gemini", "Claude AI", "LangChain", "RAG", "AI Agents"],
  },
  {
    slug: "erp",
    title: "ERP Solutions",
    short: "Manufacturing, school, hospital, inventory, HR/payroll and accounting ERP.",
    intro:
      "Our ERP work replaces spreadsheets and disconnected tools with one operational backbone — modular, permission-aware and reportable end to end.",
    offerings: [
      "Manufacturing ERP",
      "School ERP",
      "Hospital ERP",
      "Inventory ERP",
      "HR & Payroll ERP",
      "Accounting ERP",
    ],
    benefits: [
      "Single source of truth across departments",
      "Role-based access with complete audit history",
      "Live dashboards for management reporting",
      "Phased rollout so operations never stop",
    ],
    stack: ["Laravel", "Node.js", "PostgreSQL", "MySQL", "Redis", "Docker"],
  },
  {
    slug: "crm",
    title: "CRM Development",
    short: "Sales CRM, customer CRM, lead management and service management.",
    intro:
      "We build CRM platforms shaped around your sales motion — capturing every lead, enforcing follow-up discipline and giving leadership a truthful pipeline view.",
    offerings: ["Sales CRM", "Customer CRM", "Lead Management", "Service Management"],
    benefits: [
      "Lead capture from web, WhatsApp, calls and campaigns",
      "Pipeline stages that match your actual sales process",
      "Automated follow-ups, reminders and escalations",
      "Reporting on conversion, velocity and rep performance",
    ],
    stack: ["React.js", "Node.js", "PostgreSQL", "WhatsApp API", "Redis", "AWS"],
  },
  {
    slug: "saas",
    title: "SaaS Development",
    short: "Multi-tenant SaaS, subscription platforms and cloud products.",
    intro:
      "From first release to a scalable multi-tenant platform, we build SaaS products with the billing, isolation and observability that subscription businesses require.",
    offerings: ["Multi-Tenant SaaS", "Subscription Platforms", "Cloud Products"],
    benefits: [
      "Tenant isolation designed before the first customer signs up",
      "Subscription, plan and entitlement logic done properly",
      "Usage metering and product analytics from launch",
      "Infrastructure cost modelled against growth",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "CI/CD"],
  },
  {
    slug: "cloud",
    title: "Cloud & DevOps",
    short: "AWS, Azure, Google Cloud, cloud migration and DevOps engineering.",
    intro:
      "We move workloads to the cloud without drama, then leave behind pipelines, monitoring and runbooks your team can operate confidently.",
    offerings: ["AWS", "Microsoft Azure", "Google Cloud", "Cloud Migration", "DevOps"],
    benefits: [
      "Migration plans with rollback paths and zero-surprise cutovers",
      "Infrastructure as code and reproducible environments",
      "CI/CD pipelines with automated checks before release",
      "Cost visibility and right-sizing after go-live",
    ],
    stack: ["AWS", "Azure", "GCP", "Docker", "GitHub Actions", "Linux"],
  },
  {
    slug: "ui-ux",
    title: "UI/UX Design",
    short: "Website UI, mobile UI, dashboard design, wireframing and prototyping.",
    intro:
      "Design at BLUETORN is an engineering input, not a decoration layer. We prototype early, validate flows, and hand over systems developers can build from directly.",
    offerings: [
      "Website UI",
      "Mobile UI",
      "Dashboard Design",
      "Product Design",
      "Wireframing",
      "Prototyping",
    ],
    benefits: [
      "Design systems with tokens, states and documentation",
      "Interactive prototypes before a line of production code",
      "Accessibility and contrast validated, not assumed",
      "Fewer build-time surprises and rework cycles",
    ],
    stack: ["Design Systems", "Wireframing", "Prototyping", "Tailwind CSS", "React.js"],
  },
  {
    slug: "api-integration",
    title: "API Development & Integration",
    short: "REST APIs, payment gateways, WhatsApp, SMS, email and third-party systems.",
    intro:
      "We connect systems that were never designed to talk to each other, with resilient integrations that fail safely and log everything worth logging.",
    offerings: [
      "REST APIs",
      "Payment Gateway",
      "WhatsApp API",
      "SMS API",
      "Email API",
      "Third-Party Integrations",
    ],
    benefits: [
      "Versioned, documented APIs with predictable contracts",
      "Retries, idempotency and dead-letter handling",
      "Secure token management and scoped access",
      "Monitoring on every external dependency",
    ],
    stack: ["REST", "OAuth 2.0", "JWT", "Node.js", "FastAPI", "Webhooks"],
  },
  {
    slug: "automation",
    title: "Business Automation",
    short: "Process automation, workflow automation, internal tools and RPA.",
    intro:
      "We remove repetitive work from your teams — approvals, data entry, reporting and reconciliation — with automation that is auditable and easy to change.",
    offerings: ["Business Process Automation", "Workflow Automation", "Internal Tools", "RPA"],
    benefits: [
      "Hours of manual effort returned to your team every week",
      "Fewer transcription errors across systems",
      "Configurable rules instead of hard-coded logic",
      "Complete audit trail of every automated action",
    ],
    stack: ["Python", "Node.js", "Workflow Engines", "RPA", "REST", "Redis"],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Development",
    short: "B2B, B2C, multi-vendor marketplaces and inventory systems.",
    intro:
      "Commerce platforms built for catalogue depth, pricing complexity and peak-season traffic — with inventory that stays honest.",
    offerings: ["B2B Platforms", "B2C Platforms", "Multi Vendor Marketplace", "Inventory Systems"],
    benefits: [
      "Customer-specific pricing and B2B ordering rules",
      "Real-time inventory across channels and warehouses",
      "Checkout tuned for conversion and payment success",
      "Vendor onboarding, payouts and commission logic",
    ],
    stack: ["Next.js", "Laravel", "WooCommerce", "Shopify", "MySQL", "Cloudflare"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "SEO, social media, performance marketing, branding and content.",
    intro:
      "Engineering and marketing under one roof: technical SEO, measurable campaigns and brand work that stays consistent with the product experience.",
    offerings: [
      "SEO",
      "Social Media Marketing",
      "Performance Marketing",
      "Branding",
      "Content Marketing",
    ],
    benefits: [
      "Technical SEO fixed at the codebase level",
      "Campaign measurement wired to real conversion events",
      "Consistent brand voice across product and channels",
      "Reporting that ties spend to pipeline",
    ],
    stack: ["SEO", "Analytics", "Content", "Performance Ads", "Branding"],
  },
  {
    slug: "maintenance",
    title: "Maintenance & Support",
    short: "Software maintenance, optimization, security updates, support and AMC.",
    intro:
      "Launch is the beginning. Our maintenance engagements keep systems fast, patched and supported with defined response commitments.",
    offerings: [
      "Software Maintenance",
      "Performance Optimization",
      "Security Updates",
      "Technical Support",
      "AMC",
    ],
    benefits: [
      "Defined response and resolution windows",
      "Proactive dependency and security patching",
      "Performance monitoring with regression alerts",
      "Predictable annual maintenance cost",
    ],
    stack: ["Monitoring", "CI/CD", "Linux", "Docker", "Security Patching"],
  },
] as const;

export const solutionsList = [
  {
    slug: "enterprise",
    title: "Enterprise Solutions",
    short: "Platform modernisation and enterprise-grade systems for established organisations.",
    intro:
      "Large organisations rarely need one new application — they need their existing landscape rationalised. We modernise core systems, integrate what should stay, and replace what should not.",
    pillars: [
      {
        title: "System Consolidation",
        body: "Replace disconnected spreadsheets and legacy tools with one governed platform, department by department.",
      },
      {
        title: "Security & Governance",
        body: "Role-based access control, 2FA, encryption in transit and complete audit trails across every module.",
      },
      {
        title: "Scale Engineering",
        body: "Architecture, caching and database design validated against your projected data and concurrency growth.",
      },
      {
        title: "Change Management",
        body: "Phased rollouts, training material and parallel-run periods so daily operations never stop.",
      },
    ],
    outcomes: [
      "One operational source of truth",
      "Lower licence and manual-effort cost",
      "Faster, more reliable management reporting",
      "Reduced key-person and legacy risk",
    ],
  },
  {
    slug: "startups",
    title: "Solutions for Startups",
    short: "MVP engineering and product scaling for founders who need to move fast.",
    intro:
      "Startups need a product in market and evidence it works. We build lean, well-architected MVPs that can grow into real platforms instead of becoming rewrites.",
    pillars: [
      {
        title: "MVP in Focused Sprints",
        body: "Scope reduced to the flows that prove the business case, shipped in short, visible increments.",
      },
      {
        title: "Architecture That Survives",
        body: "Sensible foundations — typed codebase, migrations, CI — so version two is an extension, not a restart.",
      },
      {
        title: "Analytics From Day One",
        body: "Product events instrumented at launch so you learn from real usage instead of opinions.",
      },
      {
        title: "Investor-Ready Delivery",
        body: "Clean demos, documented architecture and a credible technical story for diligence.",
      },
    ],
    outcomes: [
      "Faster time to first customer",
      "Lower burn per shipped feature",
      "Technical foundation ready for scale",
      "Clear product usage evidence",
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    short: "Moving manual, paper and spreadsheet-driven operations onto modern systems.",
    intro:
      "Transformation is an operational programme, not a software purchase. We map current processes, digitise them in priority order and measure the difference.",
    pillars: [
      {
        title: "Process Discovery",
        body: "We document how work actually flows today, including the workarounds nobody talks about.",
      },
      {
        title: "Digitisation Roadmap",
        body: "Initiatives sequenced by business impact and effort, with owners and success metrics.",
      },
      {
        title: "Integration Layer",
        body: "APIs that connect the systems you keep, so digitised processes span the whole organisation.",
      },
      {
        title: "Adoption & Enablement",
        body: "Training, documentation and support so teams genuinely switch to the new way of working.",
      },
    ],
    outcomes: [
      "Manual effort measurably reduced",
      "Real-time operational visibility",
      "Fewer errors and reconciliation cycles",
      "A roadmap the board can track",
    ],
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    short: "Embedding AI into existing products, workflows and support operations.",
    intro:
      "We integrate AI into the systems you already run — grounded in your data, wrapped in guardrails, and evaluated against outcomes rather than novelty.",
    pillars: [
      {
        title: "Use-Case Assessment",
        body: "We identify where AI reduces cost or cycle time, and where conventional software is the better answer.",
      },
      {
        title: "Retrieval Over Your Data",
        body: "RAG pipelines so answers cite your documents, policies and records instead of hallucinating.",
      },
      {
        title: "Agents & Automation",
        body: "Task agents that draft, classify and route work, with human approval on consequential actions.",
      },
      {
        title: "Evaluation & Cost Control",
        body: "Quality benchmarks, monitoring and model selection tuned for accuracy against spend.",
      },
    ],
    outcomes: [
      "Faster response and resolution times",
      "Knowledge accessible across the organisation",
      "Reduced repetitive analyst workload",
      "Predictable AI operating cost",
    ],
  },
] as const;

export const industriesList = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    short: "Production, inventory and quality systems for plants and supply chains.",
    intro:
      "Manufacturing runs on accurate, timely information. We build systems that connect the shop floor to planning, procurement and finance.",
    needs: [
      "Production planning and job-work tracking",
      "Raw material and finished goods inventory",
      "Quality inspection and rejection records",
      "Maintenance schedules and downtime logs",
      "Dispatch, invoicing and reconciliation",
    ],
    outcomes: [
      "Live visibility of stock and work-in-progress",
      "Reduced material wastage and stock-outs",
      "Faster monthly closing",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    short: "Hospital, clinic and diagnostics platforms with strict data discipline.",
    intro:
      "Healthcare software must be dependable and privacy-first. We build clinical and administrative systems with strong access control and audit history.",
    needs: [
      "Patient registration and records",
      "Appointment and OPD/IPD management",
      "Billing, insurance and claims workflows",
      "Pharmacy and diagnostics integration",
      "Role-based clinical access control",
    ],
    outcomes: [
      "Shorter patient waiting cycles",
      "Accurate billing and fewer revenue leaks",
      "Auditable access to sensitive records",
    ],
  },
  {
    slug: "education",
    title: "Education",
    short: "School, college and training platforms for academics and administration.",
    intro:
      "We build education platforms that reduce administrative overhead and give parents, faculty and management the information they need.",
    needs: [
      "Admissions and student lifecycle",
      "Attendance, timetable and examinations",
      "Fee collection and receipts",
      "Parent and faculty communication",
      "Learning content delivery",
    ],
    outcomes: [
      "Lower administrative workload",
      "Transparent fee and attendance records",
      "Better parent engagement",
    ],
  },
  {
    slug: "retail",
    title: "Retail & E-Commerce",
    short: "Omnichannel commerce, POS integration and inventory accuracy.",
    intro:
      "Retail systems fail on inventory truth and checkout friction. We engineer both carefully across online and offline channels.",
    needs: [
      "Catalogue, pricing and promotions",
      "Multi-store and warehouse inventory",
      "POS and online order synchronisation",
      "Loyalty and customer data",
      "Returns and refunds workflow",
    ],
    outcomes: [
      "Consistent stock across channels",
      "Higher checkout conversion",
      "Cleaner customer data for marketing",
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    short: "Fleet, consignment and warehouse systems for movement-heavy operations.",
    intro:
      "Logistics platforms must reflect reality in near real time. We build tracking, documentation and settlement systems that operations teams trust.",
    needs: [
      "Consignment booking and tracking",
      "Fleet, driver and trip management",
      "Warehouse and dispatch operations",
      "Freight billing and settlement",
      "Customer tracking portals",
    ],
    outcomes: [
      "Fewer status enquiry calls",
      "Faster billing cycles",
      "Better fleet utilisation data",
    ],
  },
  {
    slug: "finance",
    title: "Finance & Banking",
    short: "Secure platforms for lending, insurance, accounting and financial operations.",
    intro:
      "Financial software carries the highest correctness and security expectations. We engineer accordingly, with strict validation and traceability.",
    needs: [
      "Customer onboarding and KYC workflows",
      "Loan, policy or portfolio management",
      "Payment gateway and reconciliation",
      "Regulatory and internal reporting",
      "2FA, RBAC and encryption controls",
    ],
    outcomes: [
      "Reduced manual reconciliation",
      "Faster onboarding turnaround",
      "Stronger control and audit posture",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    short: "Inventory, CRM and project systems for developers and brokerages.",
    intro:
      "Property businesses need one view of inventory, leads and collections. We build platforms that keep sales and finance aligned.",
    needs: [
      "Project, tower and unit inventory",
      "Lead capture and site-visit tracking",
      "Booking, agreement and payment schedules",
      "Channel partner management",
      "Customer portals for documentation",
    ],
    outcomes: [
      "Accurate real-time unit availability",
      "Higher lead-to-visit conversion",
      "Predictable collection follow-up",
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    short: "Booking, guest experience and operations platforms for hotels and venues.",
    intro:
      "Hospitality technology should be invisible to the guest and effortless for staff. We build both sides with equal care.",
    needs: [
      "Direct booking engine and availability",
      "Guest profiles and preferences",
      "Housekeeping and maintenance workflows",
      "Banquet, F&B and event operations",
      "Billing and channel reconciliation",
    ],
    outcomes: [
      "More direct, commission-free bookings",
      "Smoother check-in and service delivery",
      "Clear operational accountability",
    ],
  },
] as const;

export const coreValues = [
  { title: "Innovation", body: "We evaluate new technology on outcomes, then apply it deliberately." },
  { title: "Quality", body: "Reviewed code, tested releases and documented systems — every engagement." },
  { title: "Transparency", body: "Honest timelines, visible progress and no hidden scope or cost." },
  { title: "Reliability", body: "We commit carefully and then deliver what we committed." },
  { title: "Security", body: "Access control, encryption and secure defaults are non-negotiable." },
  { title: "Customer Success", body: "Our work is measured by the business result it produces." },
  { title: "Long-Term Partnership", body: "We build relationships that outlast the first release." },
  { title: "Continuous Improvement", body: "Every project sharpens our process for the next one." },
  { title: "Integrity", body: "We recommend what is right for the client, including when it is less work for us." },
  { title: "Performance", body: "Speed is a feature — in software and in delivery." },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Requirement Engineering",
    body: "We map objectives, users, constraints and existing systems, then convert them into a written, agreed scope with success criteria.",
  },
  {
    step: "02",
    title: "Architecture & Solution Design",
    body: "Data models, integrations, security model and infrastructure are designed before development begins — the decisions that are expensive to change later.",
  },
  {
    step: "03",
    title: "UI/UX Design & Prototyping",
    body: "Wireframes and interactive prototypes validate every critical flow, so stakeholders approve the experience before build.",
  },
  {
    step: "04",
    title: "Agile Development",
    body: "Short sprints with working software at the end of each one, reviewed code, and a shared board you can check any day.",
  },
  {
    step: "05",
    title: "Quality Assurance",
    body: "Functional, regression, performance and security testing across devices and roles, with defects tracked to closure.",
  },
  {
    step: "06",
    title: "Deployment & Go-Live",
    body: "Automated pipelines, staged rollout, data migration and a rehearsed cutover with a documented rollback path.",
  },
  {
    step: "07",
    title: "Support & Continuous Improvement",
    body: "Monitoring, patching, performance tuning and an ongoing roadmap under a defined maintenance agreement.",
  },
];

export const techStack = [
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Vue.js"] },
  { group: "Backend", items: ["PHP", "Laravel", "Node.js", "Express.js", "Python", "Django", "FastAPI"] },
  { group: "Mobile", items: ["Flutter", "React Native", "Kotlin", "Java", "Swift"] },
  { group: "Database", items: ["MySQL", "PostgreSQL", "MongoDB", "MariaDB", "Firebase", "Redis", "SQLite"] },
  { group: "Cloud", items: ["AWS", "Azure", "Google Cloud Platform", "Cloudflare"] },
  { group: "DevOps", items: ["Docker", "Git", "GitHub", "GitHub Actions", "CI/CD", "Linux", "Apache", "Nginx"] },
  { group: "Artificial Intelligence", items: ["OpenAI", "Google Gemini", "Claude AI", "LangChain", "RAG", "AI Agents"] },
  { group: "CMS", items: ["WordPress", "WooCommerce", "Shopify"] },
  { group: "Security", items: ["JWT", "OAuth 2.0", "SSL/TLS", "RBAC", "2FA"] },
];

export const faqs = [
  {
    q: "What kind of companies does BLUETORN work with?",
    a: "We work with startups, SMEs and enterprises across manufacturing, healthcare, education, retail, logistics, finance, real estate and hospitality. Engagements range from a focused MVP to a multi-module enterprise platform.",
  },
  {
    q: "How does an engagement start?",
    a: "It starts with a discovery conversation. We understand your objective, current systems and constraints, then return a written scope with proposed architecture, delivery phases and commercials before any code is written.",
  },
  {
    q: "Do we own the source code?",
    a: "Yes. On completion you receive full source ownership, repository access, deployment documentation and a structured handover session with your technical team.",
  },
  {
    q: "How do you handle project communication?",
    a: "Every project has a named point of contact, a shared task board and a regular review cadence. You see progress continuously rather than at the end.",
  },
  {
    q: "Can you work with our existing systems?",
    a: "Yes. A large part of our work is integration — connecting ERP, CRM, payment, messaging and third-party platforms through documented, versioned APIs.",
  },
  {
    q: "What happens after launch?",
    a: "We offer maintenance and AMC engagements covering monitoring, security patching, performance optimisation, technical support and ongoing enhancements with defined response commitments.",
  },
  {
    q: "How do you approach security?",
    a: "Role-based access control, JWT and OAuth 2.0 authentication, SSL/TLS, 2FA where appropriate, encrypted secrets and audit logging are part of the baseline, not an upgrade.",
  },
  {
    q: "Where is BLUETORN located?",
    a: "Our head office is in Ulwe, Navi Mumbai, Maharashtra. We work with clients across India and internationally, remotely and on-site when required.",
  },
];

export const capabilities = [
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "AI Solutions",
  "ERP Solutions",
  "CRM Development",
  "SaaS Development",
  "Cloud Technologies",
  "API Development",
  "UI/UX Design",
  "Business Automation",
  "Digital Marketing",
  "Maintenance & Support",
];
