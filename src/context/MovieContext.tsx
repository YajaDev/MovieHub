import { createContext, useContext } from "react";
import { useMovie } from "../hooks/useMovie";

import type { MoviesContext } from "../types/movie";
import type { MovieProviderProps } from "../types/ui";

const MovieContext = createContext<MoviesContext | null>(null);

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const MovieData = useMovie();

  return (
    <MovieContext.Provider value={MovieData}>
      {children}
    </MovieContext.Provider>
  );
};

// Custom hook to consume the context easily
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used inside a MovieProvider");
  }
  return context;
};
