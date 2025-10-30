import type { ReactNode } from "react";
import type { Movie, Status } from "./movie";

export interface MovieProviderProps {
  children: ReactNode;
}

export interface PlayButtonProps {
  children: string;
  onclick?: () => void;
  className?: string;
}

export interface SpinnerProps {
  SpinnerSize: number;
  isFull?: boolean 
}

export interface SearchBarProps {
  className?: string;
}

export interface MovieCardProps {
  movieId: number
  movie: Movie;
}

export interface MovieSliderProps {
  id: string;
  title: string;
  subTitle: string;
  moviesData: {
    result: Movie[];
    status: Status;
  };
}
