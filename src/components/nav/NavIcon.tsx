import React, { ReactNode } from "react";

interface NavIconProps {
  icon: ReactNode;
  link: string;
  title: string;
  clickFunc?: () => void;
}

const NavIcon: React.FC<NavIconProps> = ({ icon, link, title, clickFunc }) => {
  return (
    <div onClick={clickFunc} className="hover:bg-secondary rounded-full transition-all hover-link">
      <a href={link} className="flex flex-col items-center border-r-2 last:border-none">
        {icon}
        <h2 className="hidden-heading">{title}</h2>
      </a>
    </div>
  );
};

export default NavIcon;
