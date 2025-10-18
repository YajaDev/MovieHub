import { createContext } from "react";
import { useMovie } from "../hooks/useMovie";

import type { MoviesContext } from "../types/movie";
import type { MovieProviderProps } from "../types/ui";

const MovieContext = createContext<MoviesContext| {}>({});

const MovieProvider = ({ children }: MovieProviderProps) => {

  const MovieData = useMovie()

  return (
    <MovieContext.Provider value={MovieData}>
      {children}
    </MovieContext.Provider>
  )
};

export default MovieProvider;
