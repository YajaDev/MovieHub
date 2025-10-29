import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { MovieDetails, Status } from "../types/movie";
import { fetchMovies } from "../services/api";

interface MovieModalContextType {
  movieDetails: MovieDetails | null;
  status: Status | "idle";
  openDetails: (movieID: number) => void;
  closeDetails: () => void;
}

const MovieModalContext = createContext<MovieModalContextType | null>(null);

export const MovieModelProvider = ({ children }: { children: ReactNode }) => {
  const [movieId, setMovieId] = useState<number | null>(null);
  const [status, setStatus] = useState<Status | "idle">("idle");
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  const openDetails = (movieID: number) => setMovieId(movieID);
  const closeDetails = () => {
    setMovieDetails(null);
    setStatus("idle");
  };

  useEffect(() => {
    if (!movieId) return;

    const getDetails = async () => {
      setStatus("loading");
      setMovieDetails(null);
      try {
        const data = await fetchMovies("movieDetails", undefined, movieId);
        setStatus("success");
        setMovieDetails(data);
      } catch (error) {
        setStatus("failed");
        setMovieDetails(null);
        console.error(error);
      }
    };

    getDetails();
  }, [movieId]);

  return (
    <MovieModalContext.Provider
      value={{ movieDetails, status, openDetails, closeDetails }}
    >
      {children}
    </MovieModalContext.Provider>
  );
};

export const useMovieModal = () => {
  const context = useContext(MovieModalContext);
  if (!context)
    throw new Error("useMovieModal must be used inside MovieModalProvider");
  return context;
};
