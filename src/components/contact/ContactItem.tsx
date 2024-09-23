import React from "react";

interface ContactItemProps {
  icon: any;
  content: string;
  link: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, content, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex items-end  gap-5 bg-background p-5 rounded shadow-lg hover:bg-primary hover:text-primary-foreground  hover:scale-105 transition-all duration-300">
        {icon}
        <span className="underline">{content}</span>
      </div>
    </a>
  );
};

export default ContactItem;
