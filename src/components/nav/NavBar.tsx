import React from "react";
import NavIcon from "./NavIcon";
import {
  HiBarsArrowUp,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineFolder,
  HiOutlineMoon,
  HiOutlineSun,
  HiMiniAtSymbol,
} from "react-icons/hi2";
import MobileNavBar from "./MobileNavBar";
import { useTheme } from "@/theme/ThemeProvider";

export const navItems = [
  { icon: <HiBarsArrowUp size={25} />, title: `To Top`, link: `#` },
  { icon: <HiOutlineUser size={25} />, title: `About`, link: `#about` },
  { icon: <HiOutlineBriefcase size={25} />, title: `Experience`, link: `#experience` },
  { icon: <HiOutlineFolder size={25} />, title: `Projects`, link: `#projects` },
  { icon: <HiOutlineAcademicCap size={25} />, title: `Education`, link: `#education` },
  { icon: <HiMiniAtSymbol size={25} />, title: `Contact`, link: `#contact` },
];

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const themeBtn = {
    icon: theme === `light` ? <HiOutlineMoon size={25} /> : <HiOutlineSun size={25} />,
    title: theme === `light` ? `Dark Mode` : `Light Mode`,
    clickFunc: () => setTheme(theme === `light` ? `dark` : `light`),
  };

  return (
    <div className="fixed bottom-6 flex md:justify-center ml-5 md:ml-0  w-full z-50">
      <div className="hidden md:flex bg-background  items-start justify-around expanding-nav-bar overflow-hidden  gap-5 border-2 border-divider rounded-full shadow-lg p-2 px-5">
        {navItems.map((item, i) => (
          <NavIcon key={i} icon={item.icon} title={item.title} link={item.link} />
        ))}
        <div className="cursor-pointer">
          <NavIcon icon={themeBtn.icon} title={themeBtn.title} clickFunc={themeBtn.clickFunc} />
        </div>
      </div>
      <MobileNavBar />
    </div>
  );
};

export default NavBar;
