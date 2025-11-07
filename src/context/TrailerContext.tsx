/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { TrailerDetail } from "../types/movie";
import { fetchMovies } from "../services/api";

interface TrailerContextType {
  movieTrailer: TrailerDetail | null;
  openTrailer: (movieID: number) => void;
  closeTrailer: () => void;
}

const TrailerContext = createContext<TrailerContextType | null>(null);

export const TrailerProvider = ({ children }: { children: ReactNode }) => {
  const [movieId, setMovieId] = useState<number | null>(null);
  const [movieTrailer, setMovieTrailer] = useState<TrailerDetail | null>(null);

  const openTrailer = (movieID: number) => {
    setMovieTrailer(null);
    setMovieId(movieID);
  };
  const closeTrailer = () => {
    setMovieTrailer(null);
    setMovieId(null);
  };

  useEffect(() => {
    if (!movieId) return;

    const getTrailer = async () => {
      setMovieTrailer(null);
      try {
        const data = await fetchMovies("trailerDetails", undefined, movieId);
        setMovieTrailer(data[0]);
      } catch (error) {
        setMovieTrailer(null);
        console.error(error);
      }
    };

    getTrailer();
  }, [movieId]);

  return (
    <TrailerContext.Provider
      value={{ movieTrailer, openTrailer, closeTrailer }}
    >
      {children}
    </TrailerContext.Provider>
  );
};

export const useTrailer = () => {
  const context = useContext(TrailerContext);
  if (!context)
    throw new Error("useMovieModal must be used inside MovieModalProvider");
  return context;
};
