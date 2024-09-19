import { Dock, DockIcon } from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <div className="fixed bottom-2 flex justify-center w-full">
      <Dock direction="middle" className="bg-slate-300">
        <a href="#">home</a>
      </Dock>
    </div>
  );
};

export default NavBar;
