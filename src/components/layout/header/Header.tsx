import { Search } from "lucide-react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-[6%] py-3 bg-background">
      <h2 className="font-bold ">
        Movie<span className="text-primary">Hub</span>
      </h2>
      <Navbar />
      {/* Search Bar */}
      <div className="hidden md:block relative text-foreground">
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-foreground/15 px-4 py-2 text-sm rounded-full w-40 focus:w-50 lg:w-50 lg:focus:w-65 transition-all"
        />
        <Search className="absolute top-2.5 right-3 h-4 w-4" />
      </div>
    </header>
  );
};

export default Header;
