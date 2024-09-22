import React, { useState } from "react";
import { navItems } from "./NavBar";
import NavIcon from "./NavIcon";
import { HiOutlineArrowsPointingIn, HiOutlineArrowsPointingOut } from "react-icons/hi2";

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseLeave={() => setOpen(false)}
      className="flex flex-col items-center  bg-background rounded-full py-2 overflow-hidden md:hidden border-2 shadow-lg"
    >
      <div className={`${open ? `expand` : `shrink`} overflow-hidden`}>
        {navItems.map((item, i) => (
          <NavIcon
            key={i}
            icon={item.icon}
            link={item.link}
            title={item.title}
            clickFunc={() => setOpen(false)}
          />
        ))}
      </div>
      <div onClick={() => setOpen(!open)}>
        {open ? <HiOutlineArrowsPointingIn size={25} /> : <HiOutlineArrowsPointingOut size={25} />}
      </div>
    </div>
  );
};

export default MobileNavBar;
