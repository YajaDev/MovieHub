import { Minus } from "lucide-react";
import ThemeToggle from "../../ui/ThemeToggle";
import SearchBar from "../../ui/SearchBar";

export const NavbarDesktop = () => {
  return (
    <>
      <nav className="hidden md:flex md:gap-4 lg:gap-5">
        <a href="#home">Home</a>
        <a href="#trending">Trending</a>
        <a href="#popular">Popular</a>
        <a href="#topRated">Top Rated</a>

        <span className="flex top-0.5 gap-2 lg:gap-3 ">
          <Minus className="rotate-90" strokeWidth={1} />
          <ThemeToggle />
        </span>
      </nav>

      <SearchBar className="max-md:hidden"/>
    </>
  );
};

export const NavbarMobile = () => {
  return (
    <nav className="flex flex-col items-center gap-1 md:hidden">
      <a href="#home">Home</a>
      <a href="#trending">Trending</a>
      <a href="#popular">Popular</a>
      <a href="#topRated">Top Rated</a>
      <SearchBar />
    </nav>
  );
};
