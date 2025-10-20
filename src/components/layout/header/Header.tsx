import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import ThemeToggle from "../../ui/ThemeToggle";
import SearchBar from "../../ui/SearchBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // true when not at top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full
        ${isScrolled ? "bg-background" : "text-white"}
        ${isOpen ? "max-md:rounded-b-2xl" : ""}
        ${!isScrolled && isOpen ? "max-md:bg-layover/50" : ""}
      `}
    >
      <div className="flex justify-between items-center px-[5%] md:px-[6%] py-3">
        <h2 className="font-bold ">
          Movie<span className="text-primary">Hub</span>
        </h2>

        {/* Desktop Navigation bar */}
        <div className="max-md:hidden">
          <Navbar />
        </div>
        <SearchBar className="max-md:hidden" />

        {/* Mobile Menu Button */}
        <div className="md:hidden text-primary flex gap-6">
          <ThemeToggle />
          {isOpen ? (
            <button aria-label="Open menu" onClick={() => setIsOpen(false)}>
              <X size={22} strokeWidth={3} />
            </button>
          ) : (
            <button aria-label="Open menu" onClick={() => setIsOpen(true)}>
              <Menu size={20} strokeWidth={3} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation bar */}
      {isOpen && (
        <div className="md:hidden px-[6%]">
          <Navbar />
        </div>
      )}
    </header>
  );
};

export default Header;
