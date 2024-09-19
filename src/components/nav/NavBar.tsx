import React from "react";
import NavIcon from "./NavIcon";
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi2";

const NavBar = () => {
  return (
    <div className="fixed bottom-6 flex justify-center w-full">
      <div className="bg-background flex items-start expanding-nav-bar overflow-hidden   gap-5 border-2 rounded-full shadow-lg p-2 px-5">
        <NavIcon icon={<HiOutlineHome size={25} />} title="Home" link="#" />
        <NavIcon icon={<HiOutlineUser size={25} />} title="About" link="#about" />
      </div>
    </div>
  );
};

export default NavBar;
