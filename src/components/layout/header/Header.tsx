import { Menu, X } from "lucide-react";
import { useState } from "react";

import { NavbarDesktop, NavbarMobile } from "./Navbar";
import ThemeToggle from "../../ui/ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full">
      <div className="flex justify-between items-center px-[6%] py-3">
        <h2 className="font-bold ">
          Movie<span className="text-primary">Hub</span>
        </h2>
        <NavbarDesktop />
        {isOpen ? (
          <X
            className="md:hidden text-primary"
            onClick={() => setIsOpen(false)}
            size={22}
            strokeWidth={3}
          />
        ) : (
          <div className="flex gap-6 text-primary md:hidden">
            <ThemeToggle />
            <Menu
              onClick={() => setIsOpen(true)}
              size={20}
              strokeWidth={3}
            />
          </div>
        )}
      </div>

      {isOpen && <NavbarMobile />}
    </header>
  );
};

export default Header;
