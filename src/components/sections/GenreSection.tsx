import { useState } from "react";
import { useMovieContext } from "../../context/MovieContext";

const GenreSection = () => {
  const {genres} = useMovieContext()
  const [active, setActive] = useState(genres.result.length > 0 ? genres.result[0].name : "Action");

  if (genres.status === "success") return (
    <section className="space-y-2 my-4">
      <h2 className="font-bold">Browse by Genre</h2>

      <ul className="flex flex-wrap gap-2 font-medium text-sm md:text-md">
        {genres.result.map((genre) => (
          <li key={genre.id}>
            <button
              disabled={active === genre.name}
              onClick={() => setActive(genre.name)}
              className={`rounded-sm px-3 pt-1 pb-1.5 ${
                active === genre.name
                  ? "bg-primary text-white font-bold"
                  : "bg-foreground/10 hover:bg-foreground/20"
              }`}
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>


    </section>
  );
};

export default GenreSection;
