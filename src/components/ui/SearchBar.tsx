import { Search } from "lucide-react";
import type { SearchBarProps } from "../../types/ui";

const SearchBar = ({ className }: SearchBarProps) => {
  return (
    <div className={`${className} relative`}>
      {/* Input */}
      <input
        id="movie-search"
        type="search"
        placeholder="Search movies..."
        className="bg-foreground/15 px-4 py-2 text-sm rounded-full w-40 focus:w-50 lg:w-50 lg:focus:w-65 transition-all ring-xs focus:shadow shadow-primary"
      />
      <Search className="max-md:hidden absolute top-2.5 right-3 size-4" />

      {/* Search results list */}
      <div className="w-70 md:max-lg:w-54 absolute mt-2 rounded bg-neutral">
        <ul className="divide-y divide-primary" aria-label="Search results">
          {/* Example search item */}
          <li className="flex items-center p-1.5 hover:bg-foreground/20 transition text-white">
            {/* Image container */}
            <div className="size-11 flex-shrink-0 overflow-hidden rounded-xs">
              <img
                src="#"
                alt="poster"
                className="size-full object-center  hidden"
              />
              <div className="flex items-center text-center size-full text-red-500 pb-1 text-xs bg-black/50">
                no Image
              </div>
            </div>

            {/* Movie info */}
            <div className="flex flex-col ml-2">
              <span className="font-medium">Movie Title</span>
              <span className="text-xs text-white/70">2020</span>
            </div>
          </li>
          <li className="flex items-center p-1.5 hover:bg-foreground/20 transition text-white">
            {/* Image container */}
            <div className="size-11 flex-shrink-0 overflow-hidden rounded-xs">
              <img
                src="#"
                alt="poster"
                className="size-full object-center  hidden"
              />
              <div className="flex items-center text-center size-full text-red-500 pb-1 text-xs bg-black/50">
                no Image
              </div>
            </div>

            {/* Movie info */}
            <div className="flex flex-col ml-2">
              <span className="font-medium">Movie Title</span>
              <span className="text-xs text-white/70">2020</span>
            </div>
          </li>
          <li className="flex items-center p-1.5 hover:bg-foreground/20 transition text-white">
            {/* Image container */}
            <div className="size-11 flex-shrink-0 overflow-hidden rounded-xs">
              <img
                src="#"
                alt="poster"
                className="size-full object-center  hidden"
              />
              <div className="flex items-center text-center size-full text-red-500 pb-1 text-xs bg-black/50">
                no Image
              </div>
            </div>

            {/* Movie info */}
            <div className="flex flex-col ml-2">
              <span className="font-medium">Movie Title</span>
              <span className="text-xs text-white/70">2020</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
