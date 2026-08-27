import { ExternalLink } from "lucide-react";
import React from "react";

interface ExperienceLink {
  label: string;
  href: string;
}

interface ExperienceSectionProps {
  title: string;
  content: string | string[];
  links?: ExperienceLink[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, content, links = [] }) => {
  return (
    <div className="flex flex-col pl-5 md:pl-12 border-l-2 border-divider">
      <h3 className="font-bold text-lg">{title}</h3>

      {links.length > 0 && (
        <div className="flex gap-3 pt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1  text-sm font-semibold text-divider underline hover:bg-divider/10 p-1 rounded-md transition-all group "
            >
              {link.label}
              <ExternalLink size={14} className="group-hover:-translate-y-1 transition-all" />
            </a>
          ))}
        </div>
      )}

      {typeof content === "string" ? (
        <p className="md:pl-10 pt-4">{content}</p>
      ) : (
        <ul className="md:ml-10 ml-4 pt-2 space-y-3 list-disc">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceSection;
