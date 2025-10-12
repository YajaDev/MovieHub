import { Play, Star } from "lucide-react";

const MovieCard = () => {
  return (
    <div className="min-w-30 sm:min-w-45 md:min-w-60 max-w-60">
      <div className="relative group aspect-[2/3] font-medium">
        <img src="#" alt="" className="size-full rounded-sm" />

        {/* hover layover */}
        <div className="flex items-end absolute inset-0 bg-foreground/10 p-3 text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="flex justify-center items-center gap-2 py-1.5 rounded-sm bg-primary font-medium w-full">
            <span className="bg-white p-1 rounded-full">
              <Play fill="#ebb000" strokeWidth={0} size={9} />
            </span>
            view details
          </button>
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
