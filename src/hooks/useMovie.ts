import type { Movie, Status } from "../types/movie";

import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";

export function useMovie() {
  const [trending, setTrendingMovie] = useState<Movie[]>([]);
  const [popular, setPopularMovie] = useState<Movie[]>([]);
  const [topRated, setTopRatedMovie] = useState<Movie[]>([]);

  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const getMovie = async () => {
      try {
        const [trendingMovies, popularMovies, topRatedMovies] = await Promise.all([
          fetchMovies("trending"),
          fetchMovies("popular"),
          fetchMovies("top_rated"),
        ]);

        setTrendingMovie(trendingMovies);
        setPopularMovie(popularMovies);
        setTopRatedMovie(topRatedMovies)
        setStatus("success")
      } catch (error) {
        console.error("Error fetching movies: ", error);
        setStatus("failed")
      }
    };

    getMovie();
  }, []);

  return { trending, popular, topRated, status };
}
