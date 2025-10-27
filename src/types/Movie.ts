export type Status = "loading" | "success" | "failed";

export type Category =
  | "trending"
  | "popular"
  | "top_rated"
  | "genres"
  | "byGenre";

export interface Genre {
  id: number;
  name: string;
}

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

export interface Result<T> {
  status: Status;
  result: T[];
}

export type MoviesData = {
  trending: Result<Movie>;
  popular: Result<Movie>;
  top_rated: Result<Movie>;
  genres: Result<Genre>;
};
