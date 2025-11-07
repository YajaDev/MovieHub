import type { ReactNode } from "react";
import type { Movie, Status } from "./movie";

export interface MovieProviderProps {
  children: ReactNode;
}

export interface PlayButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
}

export interface SpinnerProps {
  SpinnerSize: number;
  isFull?: boolean 
}

export interface SearchBarProps {
  id: string
  className?: string;
}

export interface MovieCardProps {
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
