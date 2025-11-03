import { useEffect, useRef, useState } from "react";
import type { Movie, Status } from "../types/movie";
import { fetchMovies } from "../services/api";

const useSearch = (query: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [status, setStatus] = useState<Status | "idle">("idle");
  const [error, setError] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!query.trim() || query.length <= 3) {
      setMovies([]);
      setStatus("idle");
      setError(null);
      return;
    }

    // cancel previous fetch before starting a new one
    controllerRef.current?.abort();

    const controller = new AbortController();
    controllerRef.current = controller;

    const fetchSearch = async () => {
      setStatus("loading")

      try { 
        const data = await fetchMovies(
          "search",
          undefined,
          undefined,
          query,
          controller.signal
        );

          setMovies(data)
          setStatus("success")
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") {
          setStatus("idle")
        };
        setError(String(err))
        setStatus("failed")
      }
    };    

    fetchSearch();

    return () => controller.abort();
  }, [query]);

  return { movies, status, error };
};

export default useSearch;
