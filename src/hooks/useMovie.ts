import { useEffect, useReducer } from "react";
import { fetchMovies } from "../services/api";
import type { Category, Movie, MoviesData, Status } from "../types/movie";

type Action = {
  category: Category;
  data: Movie[];
  status: Exclude<Status, "loading">;
};

const reducer = (state: MoviesData, action: Action) => {
  return {
    ...state,
    [action.category]: {
      status: action.status,
      result: action.data,
    },
  };
};

const initialState = {
  trending: {
    status: "loading" as Status,
    result: [],
  },
  popular: {
    status: "loading" as Status,
    result: [],
  },
  top_rated: {
    status: "loading" as Status,
    result: [],
  },
  genres: {
    status: "loading" as Status,
    result: [],
  },
};

const categories: Category[] = ["trending", "popular", "top_rated", "genres"];

export function useMovie() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const results = await Promise.allSettled(
          categories.map((category) => fetchMovies(category))
        );

        results.map((result, i) => {
          const category = categories[i];

          if (result.status === "fulfilled") {
            dispatch({ category, data: result.value, status: "success" });
          } else {
            dispatch({ category, data: [], status: "failed" });
          }
        });
      } catch (error) {
        console.error("Critical error fetching movies:", error);
      }
    };

    getMovies();
  }, []);

  return state;
}
