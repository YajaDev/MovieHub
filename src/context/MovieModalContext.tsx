import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { MovieDetails } from "../types/movie";
import { fetchMovies } from "../services/api";

interface MovieModalContextType {
  movieDetails: MovieDetails | null;
  isloading: boolean;
  openDetails: (movieID: number) => void;
  closeDetails: () => void;
}

const MovieModalContext = createContext<MovieModalContextType | null>(null);

export const MovieModalProvider = ({ children }: { children: ReactNode }) => {
  const [movieId, setMovieId] = useState<number | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  const openDetails = (movieID: number) => {
    setIsLoading(true);
    setMovieDetails(null); 
    setMovieId(movieID);
  };
  const closeDetails = () => {
    setIsLoading(false);
    setMovieDetails(null);
    setMovieId(null);
  };

  useEffect(() => {
    if (!movieId) return;

    const getDetails = async () => {
      setMovieDetails(null);
      try {
        const data = await fetchMovies("movieDetails", undefined, movieId);
        setMovieDetails(data);
      } catch (error) {
        setMovieDetails(null);
        console.error(error);
      }
    };

    getDetails();
  }, [movieId]);

  return (
    <MovieModalContext.Provider
      value={{ movieDetails, openDetails, closeDetails, isloading }}
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
