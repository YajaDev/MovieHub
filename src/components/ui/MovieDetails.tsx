import { Star, X } from "lucide-react";
import PlayButton from "./PlayButton";
import AddToWatchistBtn from "./AddToWatchlistBtn";
import TMDBLogo from "../../assets/TMDB-logo.png";

const MovieDetails = () => {
  return (
    <div className="hidden fixed inset-0 flex items-center justify-center backdrop-blur-xs">
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
        <div className="p-3 md:p-4 space-y-5 -mt-32 md:-mt-48">
          <div className="md:flex md:gap-4">
            {/* Poster */}
            <div className="w-32 md:w-90 md:mb-4 rounded-xl">
              <img src="#" alt="" className="size-full" />
              <div className="hidden size-full bg-foreground/60" />
            </div>

            {/* Details */}
            <div className="md:-mt-2 space-y-2">
              <h2 className="font-bold align-baseline">
                Movie Title
                <span className="font-normal text-foreground/50 ml-2">
                  (2020)
                </span>
              </h2>

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
                <h4>Overview</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  qui officiis numquam! Quas qui, provident fugit fugiat enim
                  hic maiores repudiandae similique sit consectetur in iste
                  magnam impedit veniam minus.
                </p>
              </div>

              <div className="flex gap-2">
                <PlayButton className="z-10">Watch Now</PlayButton>
                <AddToWatchistBtn />
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-2">
            {/* Left Side */}
            <div className=" space-y-2.5">
              <h4>Details</h4>
              <div>
                <span className="text-foreground/60 text-sm">
                  Production Companies
                </span>
                <p>Production Companies</p>
              </div>
              <div>
                <span className="text-foreground/60 text-sm">
                  Production Countries
                </span>
                <p>Production Countries</p>
              </div>
              <div>
                <span className="text-foreground/60 text-sm">Languages</span>
                <p>Languages</p>
              </div>
              <div>
                <span className="text-foreground/60 text-sm">Budget</span>
                <p>$2.5</p>
              </div>
              <div>
                <span className="text-foreground/60 text-sm">Status</span>
                <p>Releasse</p>
              </div>
              <div>
                <span className="text-foreground/60 text-sm">
                  Original Language
                </span>
                <p>Language</p>
              </div>
            </div>

            {/* Right side */}
            <div className="space-y-4">
              <h3>Rating</h3>
              <div className="flex items-center gap-3">
                <div className="inline-block p-4 rounded-full border-4 border-primary">
                  <span className="text-xl font-bold">8.3</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm">From 5,032 votes</p>
                  <div className="h-1.5 w-[80%] rounded-full bg-primary" />
                </div>
              </div>

              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1.5 items-center px-2 py-1 md:mt-5 rounded-sm bg-primary/70"
              >
                <div className="size-5">
                  <img src={TMDBLogo} alt="" />
                </div>
                <span>View on MTDb</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
