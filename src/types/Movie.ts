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

export type MoviesData = {
  trending: {
    status: Status;
    result: Movie[];
  };
  popular: {
    status: Status;
    result: Movie[];
  };
  top_rated: {
    status: Status;
    result: Movie[];
  };
  genres: {
    status: Status;
    result: Genre[];
  }
};

