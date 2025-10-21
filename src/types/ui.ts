import type { ReactNode } from "react";
import type { Movie } from "./movie";

export interface MovieProviderProps{
  children: ReactNode
}

export interface PlayButtonProps {
  children: string;
  className?: string;
}

export interface SpinnerProps {
  For: "HeroSection"
}

export interface SearchBarProps {
  className?: string
}

export interface MovieCardProps {
  movie:Movie
}

export interface MovieSliderProps {
  id: string
  title: string
  subTitle: string
  movies: Movie[]
}