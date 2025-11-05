import { Minus, Search } from "lucide-react";
import ThemeToggle from "../../ui/ThemeToggle";
import SearchBar from "../../ui/SearchBar";

function Navbar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Trending", href: "#trending" },
    { label: "Popular", href: "#popular" },
    { label: "Top Rated", href: "#topRated" },
  ];

  return (
    <nav className="flex max-md:flex-col gap-3 max-md:pb-4 md:px-2">
      <ul className="flex md:items-center max-md:flex-col gap-2 md:gap-4 lg:gap-5">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Desktop Theme Toggle */}
      <span className="max-md:hidden flex items-center top-0.5 gap-1 lg:gap-3 ">
        <Minus className="rotate-90" strokeWidth={1} />
        <ThemeToggle />
      </span>

      {/* Mobile Search Bar */}
      <div className="md:hidden flex justify-between items-center">
        <SearchBar id="mobile-search-input"/>
        <Search size={20} />
      </div>
    </nav>
  );
}

export default Navbar;
