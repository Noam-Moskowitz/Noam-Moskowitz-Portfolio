import { BriefcaseBusiness, Code2, Mail } from "lucide-react";

const ContactCircles = () => {
  return (
    <div className="md:w-[50%] flex items-center justify-center px-6 py-12 md:py-20">
      <div className="w-full max-w-xl">
        <p className="text-sm font-semibold text-divider mb-3">Contact</p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Let&apos;s connect.</h2>

        <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
          Open to software engineering opportunities in fintech, payments, backend, and
          platform-focused teams.
        </p>

        <div className="mt-8 space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-divider">
              <BriefcaseBusiness size={20} />
            </div>

            <div>
              <p className="font-semibold">Fintech & Payments</p>

              <p className="text-sm text-muted-foreground">
                FX, transaction processing, financial integrations, and payment systems.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-divider">
              <Code2 size={20} />
            </div>

            <div>
              <p className="font-semibold">Backend & Platform Engineering</p>

              <p className="text-sm text-muted-foreground">
                Security, reliability, infrastructure, APIs, and production systems.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-divider">
              <Mail size={20} />
            </div>

            <div>
              <p className="font-semibold">Reach out directly</p>

              <p className="text-sm text-muted-foreground">
                Email, LinkedIn, GitHub, phone, or WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCircles;
