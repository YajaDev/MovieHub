export type MovieList = "trending" | "popular" | "top_rated";
export type Status = "loading" | "success" | "failed";

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

export interface MoviesContext {
  trending: Movie[];
  popular: Movie[];
  topRated: Movie[];
  status: Status;
}
