export type MovieList =  "trending" | "popular"

export interface Movie {
  adult: boolean;
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}