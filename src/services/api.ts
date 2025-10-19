import type { MovieList } from "../types/movie";

const BASE_URL: string = import.meta.env.VITE_TMDB_BASE_URL;
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

export const fetchMovies = async (type: MovieList) => {
  let url = BASE_URL;

  // Set url based on type(param)
  switch (type) {
    case "trending":
      url += "/trending/movie/day";
      break;
    // if not ternding is either "popular" | "top_rated"
    default:
      url += `/movie/${type}`
  }

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`); //Check response status

    const data = await res.json();
    return data.results ?? [];
  } catch (error) {
    console.error("Failed fetching MovieList", error);
  }
};
