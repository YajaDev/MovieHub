import { ChevronRight, ChevronLeft } from "lucide-react";
import MovieCard from "../ui/MovieCard";

const MovieSlider = () => {
  return (
    <section className="space-y-4">
      {/* Slider Nav */}
      <div className="flex justify-between items-baseline">
        <div className="font-bold">
          <h2>Title</h2>
          <p className="text-foreground/50 text-sm mt-1">Subtiltle</p>
        </div>
        <div className="space-x-3 [&>button]:p-1.5 [&>button]:bg-foreground/15 [&>button]:rounded-full">
          <button aria-label="Slide left">
            <ChevronLeft size={17} strokeWidth={4} color="white" />
          </button>
          <button aria-label="Slide right">
            <ChevronRight size={17} strokeWidth={4} color="white" />
          </button>
        </div>
      </div>

    <MovieCard />
    </section>
  );
};

export default MovieSlider;
