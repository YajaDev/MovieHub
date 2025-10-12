import { useState } from "react";
import MovieCard from "./MovieCard";

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Fantasy",
  "History",
];

const GenreSection = () => {
  const [active, setActive] = useState("Action");

  return (
    <section className="space-y-2 my-4">
      <h2 className="font-bold">Browse by Genre</h2>

      <ul className="flex flex-wrap gap-2 text-sm md:text-md">
        {genres.map((genre, i) => (
          <li key={i}>
            <button
              disabled={active === genre}
              onClick={() => setActive(genre)}
              className={`rounded-sm px-3 pt-1 pb-1.5  ${
                active === genre
                  ? "bg-primary text-white font-medium"
                  : "bg-foreground/10 hover:bg-foreground/20"
              }`}
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>

        <div className="flex gap-2 overflow-x-auto overflow-y-hidden">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>

    </section>
  );
};

export default GenreSection;
