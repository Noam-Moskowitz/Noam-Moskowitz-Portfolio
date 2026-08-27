import {
  DatabaseBackup,
  ExternalLink,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

const selectedWork = [
  {
    title: "Montrose FX",
    subtitle: "FX & Payments Platform",
    description:
      "B2B and B2C FX and payments platform operating in a regulated fintech environment. I own the platform across payments, security, reliability, infrastructure, and production operations.",

    highlights: [
      {
        icon: <ShieldCheck size={18} />,
        text: "Centralized server-side authorization with query-level tenant isolation and systematic IDOR prevention",
      },
      {
        icon: <Workflow size={18} />,
        text: "Payment correctness controls including idempotency, account-level concurrency locking, and approval workflows",
      },
      {
        icon: <DatabaseBackup size={18} />,
        text: "Designed and tested disaster recovery, restoring the full application and database into a new region in 26 minutes against a 30-minute RTO",
      },
    ],

    tags: [
      "Payment Correctness",
      "Application Security",
      "IDOR Prevention",
      "Disaster Recovery",
      "Audit Logging",
      "Fintech Infrastructure",
    ],

    stack: ["TypeScript", "Node.js", "MongoDB", "BullMQ", "AWS", "DigitalOcean"],

    links: [
      {
        label: "Live Platform",
        href: "https://app.montrosefx.com/",
      },
    ],
  },

  {
    title: "Avihu Team",
    subtitle: "Production Fitness Platform",
    description:
      "Production fitness platform built for a private client across a React Native mobile app, React admin portal, and AWS serverless backend. I worked across the product from API and data-model design through frontend, mobile, backend, and deployment.",

    highlights: [
      {
        icon: <Smartphone size={18} />,
        text: "Built and shipped a production React Native application for iOS and Android",
      },
      {
        icon: <Server size={18} />,
        text: "Built backend services using AWS Lambda, API Gateway, and MongoDB",
      },
      {
        icon: <Workflow size={18} />,
        text: "Developed plan-template automation that reduced the client's administrative workload by an estimated 80%",
      },
    ],

    tags: [
      "Mobile Development",
      "Full-Stack",
      "Serverless",
      "Product Development",
      "API Design",
      "Automation",
    ],

    stack: ["React Native", "React", "TypeScript", "AWS Lambda", "API Gateway", "MongoDB"],

    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/il/app/avihu-team/id6739640144",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.avihuteam.avihuteam&pcampaignid=web_share",
      },
    ],
  },
];

const ProjectsWrapper = () => {
  return (
    <section id="projects" className="bg-secondary border-t-8 border-divider px-6 md:px-10 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-bold text-4xl">Selected Work</h2>

          <p className="mt-3 text-muted-foreground max-w-2xl">
            Production systems I&apos;ve helped build, operate, and evolve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {selectedWork.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border bg-background p-6 md:p-8 shadow-sm"
            >
              {/* Header */}
              <div className="mb-5">
                <p className="text-sm font-semibold text-divider">{project.subtitle}</p>

                <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>

              {/* Engineering highlights */}
              <div className="mt-7 space-y-4">
                {project.highlights.map((highlight) => (
                  <div key={highlight.text} className="flex items-start gap-3">
                    <div className="shrink-0 text-divider mt-0.5">{highlight.icon}</div>

                    <span className="text-sm leading-relaxed">{highlight.text}</span>
                  </div>
                ))}
              </div>

              {/* Focus areas */}
              <div className="flex flex-wrap gap-2 mt-7">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-divider/10 text-divider px-3 py-1 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Technology stack */}
              <div className="mt-5">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.stack.join(" · ")}
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-auto pt-8">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-sm text-divider hover:underline"
                  >
                    {link.label}
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsWrapper;
