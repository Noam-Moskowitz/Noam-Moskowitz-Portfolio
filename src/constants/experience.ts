export const experienceArr = [
  {
    title:
      "Software Engineer (Full Stack) — Payments & Platform | Montrose FX - International Payments | Jan 2025 - Present",
    links: [
      {
        label: "Live Platform",
        href: "https://app.montrosefx.com/",
      },
    ],
    content: [
      "Own the architecture, development, security, and production operation of a B2B and B2C FX and payments platform, translating requirements from compliance, the CISO, company auditor, penetration testers, and operations into technical controls supporting the company’s ISA licensing process.",

      "Architected a financial-data ingestion platform using TypeScript, Node.js, Redis, BullMQ, MongoDB, and Currencycloud, normalizing provider-specific transaction lifecycles into an internal financial model with idempotent processing, retries, lifecycle tracking, and automated or operator-triggered recovery.",

      "Designed payment correctness and regulatory controls including multi-currency compliance limits, account-level locking to prevent concurrent payments from bypassing regulatory thresholds, server-side idempotency, granular permissions, and maker-checker approval workflows.",

      "Re-architected application security with centralized server-side authorization, query-level tenant ownership enforcement, systematic IDOR prevention, hybrid JWT + revocable sessions, rate limiting, account-enumeration mitigations, and Cloudflare-enforced origin protection.",

      "Built observability, audit, backup, and disaster-recovery systems from the ground up, including request correlation IDs, privileged-action logging, Better Stack/OpenSearch retention, and immutable AWS S3 backups with two-year retention.",

      "Authored and tested the disaster-recovery process, validating full application and database recovery into a new region in 26 minutes against a 30-minute RTO.",

      "Established isolated staging and production environments, protected GitHub branches, required PR checks, automated testing, CI/CD workflows, Slack operational visibility, and internal tooling for financial operations and recovery.",
    ],
  },
  {
    title: "Full Stack Developer | Avihu Team | May 2024 - Jun 2026",
    links: [
      {
        label: "iOS",
        href: "https://apps.apple.com/il/app/avihu-team/id6739640144",
      },
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.avihuteam.avihuteam&pcampaignid=web_share",
      },
    ],
    content: [
      "Built and launched a production fitness platform for a private client spanning a React Native mobile app, React admin portal, and AWS serverless backend, owning features across API design, data modeling, frontend implementation, and deployment.",

      "Built backend services using AWS Lambda, API Gateway, and MongoDB to support workout, nutrition, and user data across the mobile and administrative applications.",

      "Developed a custom plan-template system that automated the creation of workout and nutrition programs, reducing the client’s administrative workload by an estimated 80%.",

      "Helped take the product from development through production release on the App Store and Google Play, supporting an initial user base of 100+ users.",

      "Worked directly with the client and a development partner to turn product requirements into end-to-end features, and built reusable React Native components from designer specifications as the product UI evolved.",
    ],
  },
];
