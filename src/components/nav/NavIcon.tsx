import React from "react";

const NavIcon = ({ icon, link, title }) => {
  return (
    <div className="hover:bg-secondary rounded-full transition-all hover-link">
      <a href={link} className="flex flex-col items-center border-r-2 last:border-none">
        {icon}
        <h2 className="hidden-heading">{title}</h2>
      </a>
    </div>
  );
};

export default NavIcon;
