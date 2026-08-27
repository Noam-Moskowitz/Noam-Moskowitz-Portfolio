import { ExternalLink } from "lucide-react";
import DownloadCVButton from "../ui/DownloadCVButton";

const FooterWrapper = () => {
  const sectionLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Selected Work", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/noam-moskowitz",
    },
    {
      label: "GitHub",
      href: "https://github.com/Noam-Moskowitz",
    },
  ];

  return (
    <footer className="bg-background-1 border-t-8 border-divider px-6 md:px-10 py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Identity */}
          <div className="max-w-md">
            <h2 className="text-xl font-bold">Noam Moskowitz</h2>

            <p className="text-sm text-muted-foreground mt-2">
              Software Engineer (Full Stack) — Payments & Platform
            </p>

            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Building FX, payments, and production systems in regulated fintech.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold mb-3">Sections</p>

            <nav className="flex flex-col gap-2">
              {sectionLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-divider transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold mb-3">Elsewhere</p>

            <div className="flex flex-col gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-divider transition-colors"
                >
                  {item.label}
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* CV */}
          <div>
            <p className="text-sm font-semibold mb-3">Resume</p>

            <DownloadCVButton />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWrapper;
