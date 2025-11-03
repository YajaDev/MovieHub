import { Search } from "lucide-react";
import type { SearchBarProps } from "../../types/ui";
import useSearch from "../../hooks/useSearch";
import { useState } from "react";
import { formatToYear } from "../../utils/formmating";

const SearchBar = ({ className }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");
  const { movies, status, error } = useSearch(query);

  return (
    <div className={`${className} relative`}>
      {/* Input */}
      <input
        id="movie-search"
        placeholder="Search movies..."
        className="bg-foreground/15 px-4 py-2 text-sm rounded-full w-40 focus:w-50 lg:w-50 lg:focus:w-65 transition-all ring-xs focus:shadow shadow-primary"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Search className="max-md:hidden absolute top-2.5 right-3 size-4" />

      {/* Search results list */}
      {movies && (
        <div className="w-70 md:max-lg:w-54 absolute mt-2 rounded bg-neutral max-h-100 overflow-y-auto">
          <ul className="divide-y divide-primary" aria-label="Search results">
            {/* Example search item */}
            {movies.map((movie) => (
              <li className="flex items-center p-1.5 hover:bg-white/20 transition text-white">
                {/* Image container */}
                <div className="size-11 flex-shrink-0 overflow-hidden rounded-xs">
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt="poster"
                      className="size-full object-center"
                    />
                  ) : (
                    <div className="flex items-center text-center size-full text-red-500 pb-1 text-xs bg-black/50">
                      no Image
                    </div>
                  )}
                </div>

                {/* Movie info */}
                <div className="flex flex-col ml-2">
                  <span className="font-medium">{movie.title}</span>
                  <span className="text-xs text-white/70">
                    {formatToYear(movie.release_date)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
