import { Star } from "lucide-react";
import PlayButton from "./ui/PlayButton";

const MovieCard = () => {
  return (
    <div className="w-30 sm:min-w-45 md:min-w-60">
      <div className="relative group aspect-[2/3] font-medium">
        <img src="#" alt="" className="size-full rounded-sm" />

        {/* hover layover */}
        <div className="flex items-end absolute inset-0 bg-foreground/10 p-3 text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <PlayButton className="w-full">View Details</PlayButton>
        </div>
      </div>

      <h3 className="text-sm font-medium truncate mt-1.5">Movies title</h3>
      <div className="flex items-baseline-last gap-1 text-xs text-foreground/60">
        <Star color="#ebb000" fill="#ebb000" size={10} />
        <p>Movie vote average</p>
        <p className="text-foreground/40 ml-auto">Movie release date</p>
      </div>
    </div>
  );
};

export default MovieCard;
