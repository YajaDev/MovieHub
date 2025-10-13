import { Star, X } from "lucide-react";
import PlayButton from "./ui/PlayButton";
import AddToWatchistBtn from "./ui/AddToWatchistBtn";

const MovieDetails = () => {
  return (
    <div className=" fixed inset-0 flex items-center justify-center backdrop-blur-xs">
      <div
        className="relative w-full h-full max-w-195 md:max-h-[90vh] bg-neutral
        rounded-md overflow-y-auto custom-scrollbar"
      >
        <button className="absolute top-4 z-10 right-4 bg-foreground/30 p-1 rounded-full">
          <X size={17} />
        </button>

        {/* Backdrop header */}
        <div className="relative h-75 md:h-96 w-full ">
          <img src="#" alt="Backdrop photo" className="size-full" />
          {/* No image */}
          <div className="hidden size-full bg-foreground/60" />
          {/* gradient Layover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-background/10 to-transparent" />
        </div>

        {/* Movie Info */}
        <div className="p-3 md:p-4 -mt-32 md:-mt-48">
          <div className="md:flex md:gap-4">
            {/* Poster */}
            <div className="w-32 md:w-80 md:mb-4 rounded-xl">
              <img src="#" alt="" className="size-full" />
              <div className="hidden size-full bg-foreground/60" />
            </div>

            {/* Details */}
            <div className="md:-mt-2 space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold align-baseline">
                Movie Title
                <span className="font-normal text-foreground/50 ml-2">
                  (2020)
                </span>
              </h3>

              {/* Other details */}
              <div className="flex items-center md:gap-2.5 text-xs">
                <span className="flex items-center gap-1 font-bold">
                  <Star fill="#ebb000" color="#ebb000" size={14} />
                  6.5
                </span>
                <span>1h 32m</span>
                <span className="flex items-center px-2 bg-red-500/80 rounded-lg text-xs">
                  18+
                </span>
              </div>

              {/* genre */}
              <div className="flex flex-wrap gap-y-1 gap-x-1.5 text-xs font-medium">
                <span className="py-1 px-2.5 bg-foreground/20 rounded-full">
                  Action
                </span>
                <span className="py-1 px-2.5 bg-foreground/20 rounded-full">
                  Crime
                </span>
                <span className="py-1 px-2.5 bg-foreground/20 rounded-full">
                  Thriller
                </span>
              </div>
              <p className="text-sm italic font-medium text-foreground/60">
                "Movie Tag line"
              </p>

              {/* Overview */}
              <div>
                <h5 className="font-bold">Overview</h5>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  qui officiis numquam! Quas qui, provident fugit fugiat enim
                  hic maiores repudiandae similique sit consectetur in iste
                  magnam impedit veniam minus.
                </p>
              </div>

              <div className="flex gap-2">
                <PlayButton>Watch Now</PlayButton>
                <AddToWatchistBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
