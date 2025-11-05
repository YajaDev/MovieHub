import { Loader, Search } from "lucide-react";
import type { SearchBarProps } from "../../types/ui";
import useSearch from "../../hooks/useSearch";
import { useState } from "react";
import { formatToYear } from "../../utils/formmating";
import { useMovieModal } from "../../context/MovieModalContext";

const SearchBar = ({ className, id }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");
  const { movies, status } = useSearch(query);

  const { openDetails } = useMovieModal();

  return (
    <div className={`${className} relative`}>
      {/* Input */}
      <input
        id={id}
        placeholder="Search movies..."
        className="bg-foreground/15 px-4 py-2 text-sm rounded-full w-40 focus:w-50 lg:w-50 lg:focus:w-65 transition-all ring-xs focus:shadow shadow-primary"
        onChange={(e) => setQuery(e.target.value)}
      />
      {status !== "loading" ? (
        <Search className="max-md:hidden absolute top-2.5 right-3 size-4" />
      ) : (
        <div>
          <Loader className="absolute text-primary stroke-3 top-2.5 right-3 size-4 animate-spin"/>
        </div>
      )}

      {/* Search results list */}
      <div className="w-70 md:max-lg:w-54 absolute mt-2 rounded bg-neutral max-h-100 overflow-y-auto">
        <ul className="divide-y divide-primary" aria-label="Search results">
          {/* Error state */}
          {status === "failed" && (
            <div className="text-red-500 text-sm p-3">
              Something went wrong. Please try again.
            </div>
          )}

          {/* No result */}
          {status === "success" && movies.length === 0 && (
            <div className="text-white text-sm p-3">
              <span className="mr-2 text-red-500 font-extrabold">: (</span>
              No results found.
            </div>
          )}

          {/* Success Search result */}
          {status === "success" &&
            movies.map((movie) => (
              <li
                key={movie.id}
                className="flex items-center p-1.5 hover:bg-white/20 transition text-white"
                onClick={() => openDetails(movie.id)}
              >
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
    </div>
  );
};

export default SearchBar;
