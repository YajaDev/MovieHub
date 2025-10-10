import { ChevronRight, ChevronLeft, Star } from "lucide-react";

const MovieSlider = () => {
  return (
    <section className="space-y-4">
      {/* Slider Nav */}
      <div className="flex justify-between items-baseline">
        <div className="font-bold">
          <h2 className="text-2xl md:text-3xl">Title</h2>
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

      {/* Movie info */}
      <div className="w-30 sm:w-45 md:w-60">
        <div className="aspect-[2/3] font-medium">
          <img src="#" alt="" className="bg-foreground/30 h-full w-full rounded-sm" />
          <h3 className="text-sm font-medium truncate mt-1.5">Movies title</h3>
            <div className="flex items-baseline-last gap-1 text-xs text-foreground/60">
              <Star color="#ebb000" fill="#ebb000" size={10}/>
              <p>Movie vote average</p>
              <p className="text-foreground/40 ml-auto">Movie release date</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MovieSlider;
