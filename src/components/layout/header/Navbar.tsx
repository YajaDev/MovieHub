import { Menu, Minus } from "lucide-react";
import ThemeToggle from "../../ui/ThemeToggle";

const Navbar = () => {
  return (
    <>
      {/* Desktop Navigation Bar */}
      <nav className="hidden md:flex md:gap-4 lg:gap-5">
        <a href="#home">Home</a>
        <a href="#tranding">Trending</a>
        <a href="#popular">Popular</a>
        <a href="#topRated">Top Rated</a>

        <span className="flex top-0.5 gap-2 lg:gap-3 ">
          <Minus className="rotate-90" strokeWidth={1}/>
          <ThemeToggle />
        </span>
      </nav>

      <Menu className="md:hidden text-primary" size={17} strokeWidth={4} />
    </>
  );
};

export default Navbar;
