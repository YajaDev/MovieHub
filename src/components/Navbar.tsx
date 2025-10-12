import { Menu, Minus, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <>
      <div className="text-2xl font-bold">
        Movie<span className="text-primary">Hub</span>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden md:flex gap-5">
        <a href="#home">Home</a>
        <a href="#tranding">Trending</a>
        <a href="#popular">Popular</a>
        <a href="#topRated">Top Rated</a>

        <span className="flex relative top-0.5 gap-3 ">
          <Minus className="rotate-90" strokeWidth={1}/>
          <ThemeToggle />
        </span>
      </nav>

      {/* Search Bar */}
      <div className="hidden md:block relative text-foreground">
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-foreground/15 px-4 py-2 text-sm rounded-full w-40 focus:w-50 lg:w-50 lg:focus:w-65 transition-all"
        />
        <Search className="absolute top-2.5 right-3 h-4 w-4" />
      </div>

      <Menu className="md:hidden m-3 text-primary" size={17} strokeWidth={4} />
    </>
  );
};

export default Navbar;
