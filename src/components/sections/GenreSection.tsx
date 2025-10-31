import { useEffect, useState } from "react";
import { useMovieContext } from "../../context/MovieContext";
import type { Result, Movie } from "../../types/movie";
import { fetchMovies } from "../../services/api";
import MovieCard from "../ui/MovieCard";
import Loader from "../ui/Loader";

interface Active {
  id: number;
  name: string;
}

const GenreSection = () => {
  const { genres } = useMovieContext();
  const [active, setActive] = useState<Active>();

  const [movies, setMovies] = useState<Result<Movie>>();

  // Set initial active genre when genres load
  useEffect(() => {
    if (!active && genres.status === "success" && genres.result.length > 0) {
      setActive({
        id: genres.result[0].id,
        name: genres.result[0].name,
      });
    }
  }, [genres.status, active]);

  useEffect(() => {
    const getMovie = async () => {
      // Early return if active is falsy
      if (!active) return;

      try {
        setMovies({ status: "loading", result: [] });

        const newMovies: Movie[] = await fetchMovies(
          "byGenre",
          String(active.id)
        );
        setMovies({ status: "success", result: newMovies });
      } catch (err) {
        console.error(err);
        setMovies({ status: "failed", result: [] });
      }
    };
    getMovie();
  }, [active]);

  return (
    <section id="byGenre" className="space-y-4 my-4">
      <h2 className="font-bold">Browse by Genre</h2>
      {genres.status === "success" && (
        <ul className="flex flex-wrap gap-2 font-medium text-sm md:text-md">
          {genres.result.map((genre) => (
            <li key={genre.id}>
              <button
                disabled={active?.name === genre.name}
                onClick={() => setActive({ id: genre.id, name: genre.name })}
                className={`rounded-sm px-3 pt-1 pb-1.5 ${
                  active?.name === genre.name
                    ? "bg-primary text-white font-bold"
                    : "bg-foreground/10 hover:bg-foreground/20"
                }`}
              >
                {genre.name}
              </button>
            </li>
          ))}
        </ul>
      )}

      {movies?.status === "loading" && <Loader SpinnerSize={60} />}

      {/* Failed fetching movies */}
      {movies?.status === "failed" && (
        <p className="text-red-500">Failed to load movies. Please try again.</p>
      )}

      {/* Render Movies */}
      {movies?.status === "success" && movies.result.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
          {movies.result.map((movie) => (
            <MovieCard key={movie.title} movie={movie}/>
          ))}
        </div>
      )}
    </section>
  );
};

export default GenreSection;
