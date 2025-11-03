import { useState, useEffect, useRef } from "react";
import type { Movie } from "../types/movie";
  
export function useFeatured(movies: Movie[]) {
  const featuredMovies = movies.slice(0, 5);
  const [index, setIndex] = useState(0);

  const isManualChange = useRef(false);

  useEffect(() => {
    if (!featuredMovies.length) return;

    const intervalID = setInterval(() => {
      if (!isManualChange.current) {
        setIndex((prev) => (prev + 1) % featuredMovies.length)
      } else {
        isManualChange.current = false;
      }

      ;
    }, 6000);

    return () => clearInterval(intervalID);
  }, [featuredMovies.length]);

  const goToSlide = (i: number) => {
    isManualChange.current = true;
    setIndex(i % featuredMovies.length);
  };

  return { currentSlide: featuredMovies[index], index, goToSlide, featuredMovies};
}
