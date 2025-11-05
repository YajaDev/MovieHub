import { useEffect, useState } from "react";
import type { Movie, Status } from "../types/movie";
import { fetchMovies } from "../services/api";

const useSearch = (query: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [status, setStatus] = useState<Status | "idle">("idle");

  useEffect(() => {
    if (!query.trim() || query.length < 3) {
      setMovies([]);
      setStatus("idle");
      return;
    }

    const controller = new AbortController();

    setStatus("loading");
    const timeoutId = setTimeout(async () => {
      try {
        const data = await fetchMovies(
          "search",
          undefined,
          undefined,
          query,
          controller.signal
        );

        setMovies(data);
        setStatus("success");
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          setStatus("idle");
          return;
        }
        setStatus("failed");
      }
    }, 500);

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [query]);

  return { movies, status };
};

export default useSearch;
