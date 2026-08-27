import React, { useState } from "react";
import { Check, ExternalLink } from "lucide-react";

interface ContactItemProps {
  icon: React.ReactNode;
  content: string;
  link: string;
  copyValue?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, content, link, copyValue }) => {
  const [copied, setCopied] = useState(false);

  const isExternal = link.startsWith("http");

  const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!copyValue) return;

    event.preventDefault();

    await navigator.clipboard.writeText(copyValue);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <a
      href={link}
      onClick={handleClick}
      target={!copyValue && isExternal ? "_blank" : undefined}
      rel={!copyValue && isExternal ? "noopener noreferrer" : undefined}
      className="
        group
        flex items-center justify-between
        rounded-xl border border-border
        bg-background
        px-4 py-4
        transition-all duration-200
        hover:border-divider
        hover:bg-background-1
        cursor-pointer
      "
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="text-divider shrink-0">{icon}</div>

        <span className="text-sm font-medium truncate">{copied ? "Copied!" : content}</span>
      </div>

      {copied ? (
        <Check size={15} className="text-divider" />
      ) : (
        !copyValue &&
        isExternal && (
          <ExternalLink
            size={15}
            className="text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )
      )}
    </a>
  );
};

export default ContactItem;
