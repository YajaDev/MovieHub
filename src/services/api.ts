import type { Category } from "../types/movie";

const BASE_URL: string = import.meta.env.VITE_TMDB_BASE_URL;
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

const buildEndpoint = (
  category: Category,
  genreId?: string,
  movieId?: number,
  query?: string
) => {
  switch (category) {
    case "trending":
      return `/trending/movie/day?include_adult=true`;

    case "genres":
      return `/genre/movie/list`;

    case "movieDetails":
    case "trailerDetails":
      if (!movieId) throw new Error("Movie ID is required for fetching");
      return category === "movieDetails"
        ? `/movie/${movieId}?include_adult=true`
        : `/movie/${movieId}/videos`;

    case "byGenre":
      if (!genreId)
        throw new Error(
          "Genre ID is required for fetching movies bygenre(type)"
        );
      return `/discover/movie?include_adult=true&with_genres=${genreId}`;

    case "search":
      if (!query) throw new Error("Query is required to search movie");
      return `/search/movie?query=${query}&include_adult=true`;

    case "popular":
    case "top_rated":
      return `/movie/${category}?include_adult=true`;

    default:
      throw new Error(`Unsupported movie category: ${category}`);
  }
};

const fetchFromAPI = async (endpoint: string, signal?: AbortSignal) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, { ...options, signal });
  if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`); //Check response status
  return await res.json();
};

export const fetchMovies = async (
  category: Category,
  genreId?: string,
  movieId?: number,
  query?: string,
  signal?: AbortSignal
) => {
  try {
    const endpoint = buildEndpoint(category, genreId, movieId, query);
    const data = await fetchFromAPI(endpoint, signal);

    if (category === "genres") return data.genres;
    if (category === "movieDetails") return data;
    if (
      [
        "popular",
        "trending",
        "top_rated",
        "byGenre",
        "search",
        "trailerDetails",
      ].includes(category)
    )
      return data.results;
  } catch (err) {
    throw new Error(String(err));
  }
};
