import { ChevronRight, ChevronLeft } from "lucide-react";
import MovieCard from "../ui/MovieCard";
import type { MovieSliderProps } from "../../types/ui";
import { useRef } from "react";
import Loader from "../ui/Loader";

const MovieSlider = ({ id, title, subTitle, moviesData }: MovieSliderProps) => {
  const movies = moviesData.result
  const status = moviesData.status

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8; // scroll 80% of visible width

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id={id} className="space-y-4">
      <div className="flex justify-between items-baseline">
        <div className="[&>h2]:font-bold [&>p]:font-medium">
          <h2>{title}</h2>
          <p className="text-foreground/50 max-md:text-sm ">{subTitle}</p>
        </div>

        {/* Slider button */}
        <div className="max-md:hidden space-x-2 md:space-x-3 [&>button]:p-1.5 [&>button]:bg-foreground/30 [&>button]:rounded-full">
          <button aria-label="Slide left" onClick={() => scroll("left")}>
            <ChevronLeft size={17} strokeWidth={4} color="white" />
          </button>
          <button aria-label="Slide right" onClick={() => scroll("right")}>
            <ChevronRight size={17} strokeWidth={4} color="white" />
          </button>
        </div>
      </div>

      {status === "loading" && (
        <Loader SpinnerSize={40}/>
      )}
      {/* Movies container*/}
      {status === "success" && (
        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie}/>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieSlider;
