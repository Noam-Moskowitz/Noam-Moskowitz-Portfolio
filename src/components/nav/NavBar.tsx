import React from "react";
import NavIcon from "./NavIcon";
import { HiBarsArrowUp, HiOutlineUser, HiOutlineBriefcase } from "react-icons/hi2";

const NavBar = () => {
  const navItems = [
    { icon: <HiBarsArrowUp size={25} />, title: `To Top`, link: `#` },
    { icon: <HiOutlineUser size={25} />, title: `About`, link: `#about` },
    { icon: <HiOutlineBriefcase size={25} />, title: `Experience`, link: `#experience` },
  ];
  return (
    <div className="fixed bottom-6 flex justify-center  w-full z-50">
      <div className="bg-background flex items-start justify-around expanding-nav-bar overflow-hidden  gap-5 border-2 rounded-full shadow-lg p-2 px-5">
        {navItems.map((item, i) => (
          <NavIcon key={i} icon={item.icon} title={item.title} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
