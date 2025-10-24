import { useEffect, useState } from "react";
import { useMovieContext } from "../../context/MovieContext";
import type { Movie } from "../../types/movie";
import { fetchMovies } from "../../services/api";
import MovieCard from "../ui/MovieCard";

interface Active {
  id: number;
  name: string;
}

const GenreSection = () => {
  const { genres } = useMovieContext();
  const [active, setActive] = useState<Active>()

  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    const getMovie = async () => {
      const newMovies: Movie[] = await fetchMovies(
        "byGenre",
        String(active?.id)
      );
      
      setMovies(newMovies)
    };
    getMovie();
  }, [active]);

  if (genres.status === "success")
    return (
      <section className="space-y-4 my-4">
        <h2 className="font-bold">Browse by Genre</h2>

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
          {movies?.map((movie) => <MovieCard key={movie.title} movie={movie}/>)}
        </div>
      </section>
    );
};

export default GenreSection;
