export type Status = "loading" | "success" | "failed";

export type Category =
  | "trending"
  | "popular"
  | "top_rated"
  | "genres"
  | "trailerDetails"
  | "byGenre"
  | "search"
  | "movieDetails";

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

export interface TrailerDetail {
  name: string
  key: string
  site: string
  type: string
}

export interface MovieDetails extends Movie {
  genres: Genre[];
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  spoken_languages: Laguage[];
  original_language: string;
  budget: number;
  status: string;
  runtime: number;
  tagline: string;
  laguages: Laguage[];
  vote_average: number;
  vote_count: number;
}

interface Laguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

