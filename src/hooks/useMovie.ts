import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import type { Movie, Status } from "../types/movie";

export function useMovie() {
  const [trending, setTrendingMovie] = useState<Movie[]>([]);
  const [popular, setPopularMovie] = useState<Movie[]>([]);
  const [topRated, setTopRatedMovie] = useState<Movie[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const getMovies = async () => {
      try {
        const [trendingMovies, popularMovies, topRatedMovies] =
          await Promise.all([
            fetchMovies("trending"),
            fetchMovies("popular"),
            fetchMovies("top_rated"),
          ]);

        // Check if all failed
        const allEmpty =
          !trendingMovies.length &&
          !popularMovies.length &&
          !topRatedMovies.length;

        if (allEmpty) {
          setStatus("failed");
        } else {
          setTrendingMovie(trendingMovies);
          setPopularMovie(popularMovies);
          setTopRatedMovie(topRatedMovies);
          setTimeout(() => {setStatus("success")},500) 
          
        }

      } catch (error) {
        console.error("Critical error fetching movies:", error);
        setStatus("failed");
      }
    };

    getMovies();
  }, []);

  return { trending, popular, topRated, status };
}
