import { Star } from "lucide-react";
import PlayButton from "./PlayButton";
import type { MovieCardProps } from "../../types/ui";
import { formatToYear } from "../../utils/formmating";
import { useMovieModal } from "../../context/MovieModalContext";

const MovieCard = ({ movie}: MovieCardProps) => {
  const { openDetails } = useMovieModal();
  const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <div className="min-w-40 md:min-w-50" onClick={() => openDetails(movie.id)} >
      <div className="relative group aspect-[2/3] overflow-hidden rounded-sm font-medium">
        <img
          src={IMAGE_BASE_URL}
          alt=""
          className="size-full group-hover:scale-110 transition-transform duration-300"
        />

        {/* hover overlay */}
        <div
          className="flex items-end absolute inset-0 bg-overlay/60 p-3 text-white rounded-sm 
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        >
          <PlayButton onClick={() => openDetails(movie.id)} className="w-full">
            View Details
          </PlayButton>
        </div>
      </div>

      <h5 className="font-bold md:text-[17px] truncate mt-2.5 mr-15">
        {movie.title}
      </h5>
      <div className="flex items-center gap-1 text-foreground/60 text-xs md:text-sm font-medium">
        <Star className="size-3 md:size-4 fill-primary stroke-none" />
        <p>{movie.vote_average.toFixed(1)}</p>
        <p className="text-foreground/40 ml-auto">
          {formatToYear(movie.release_date)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
