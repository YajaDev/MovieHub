import { Star, X } from "lucide-react";
import PlayButton from "./PlayButton";
import AddToWatchistBtn from "./AddToWatchlistBtn";
import TMDBLogo from "../../assets/TMDB-logo.png";
import { useMovieModal } from "../../context/MovieModalContext";
import Loader from "./Loader";
import {
  formatArrayValue,
  formatRuntimeClock,
  formatToYear,
} from "../../utils/formmating";

const MovieDetails = () => {
  const { movieDetails, closeDetails, isloading } = useMovieModal();

  // Loading State
  if (isloading && !movieDetails)
    return (
      <div
        className="fixed -inset-0.5 z-50 flex items-center justify-center backdrop-blur-lg"
        onClick={closeDetails}
      >
        <Loader SpinnerSize={60} />
      </div>
    );

  // retur if movie details has value and loading state is false  
  if (movieDetails) {
    const {
      title,
      adult,
      genres,
      tagline,
      budget,
      overview,
      runtime,
      status,
      vote_average,
      release_date,
      vote_count,
      backdrop_path,
      poster_path,
      production_companies,
      production_countries,
      original_language,
      spoken_languages,
    } = movieDetails;

    const backdropUrl = backdrop_path
      ? `https://image.tmdb.org/t/p/w780${backdrop_path}`
      : null;

    const posterUrl = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : null;

    const formattedYear = formatToYear(release_date);
    const formattedRuntime = formatRuntimeClock(runtime);
    const voteCont = vote_count.toLocaleString();
    const votePercentage = (vote_average / 10) * 100;
    const rateStar = vote_average.toFixed(1);

    const additionalDetails = [
      { label: "Production Companies", value: production_companies },
      { label: "Languages", value: spoken_languages },
      { label: "Production Countries", value: production_countries },
      { label: "Budget", value: budget },
      { label: "Status", value: status },
      { label: "Original Language", value: original_language },
    ];

    return (
      <div
        className="fixed -inset-0.5 z-50 flex items-center justify-center backdrop-blur-lg"
        onClick={closeDetails}
      >
        <div
          className="relative w-full h-full max-w-230 md:max-h-[80vh] lg:max-h-[90vh] bg-background
        rounded-md overflow-y-auto overflow-x-hidden custom-scrollbar"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >
          <button
            className="absolute z-70 top-4 right-4 bg-foreground/30 p-1 rounded-full"
            onClick={closeDetails}
          >
            <X size={17} />
          </button>

          {/* Backdrop header */}
          <div className="relative h-75 md:h-96 w-full">
            {backdropUrl ? (
              <img
                src={backdropUrl}
                alt={`${title} backdrop`}
                className="size-full object-cover object-center"
              />
            ) : (
              // No Image
              <div className="size-full bg-foreground/50 text-center pt-20 text-lg text-red-500 font-medium">
                Backdrop photo :(
              </div>
            )}

            {/* gradient Layover */}
            <div className="absolute -inset-0.5 bg-gradient-to-t from-background via-60% via-background/30 to-transparent" />
          </div>

          {/* Movie Info */}
          <div className="p-3 relative md:p-4 space-y-5 -mt-32 md:-mt-48 z-60">
            <div className="md:flex md:gap-4 ">
              {/* Poster */}
              <div className="w-40 md:w-52 rounded-xl overflow-hidden bg-foreground/10 flex-shrink-0">
                {posterUrl ? (
                  <img
                    src={posterUrl}
                    alt={`${title} poster`}
                    className="size-full object-cover object-center"
                  />
                ) : (
                  <div className="flex justify-center items-center h-70 text-red-500 font-medium">
                    No poster photo :(
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="md:-mt-2 space-y-2 max-md:mt-2">
                <h2 className="font-bold align-baseline">
                  {title}
                  <span className="font-normal text-foreground/50 ml-2">
                    ({formattedYear})
                  </span>
                </h2>

                {/* Other details */}
                <div className="flex items-center gap-2.5 text-xs [&>span]:font-medium">
                  <span className="flex items-center gap-1 font-bold">
                    <Star fill="#ebb000" color="#ebb000" size={14} />
                    {rateStar}
                  </span>
                  <span>{formattedRuntime}</span>
                  {adult && (
                    <span className="flex items-center px-2 bg-red-500/80 rounded-lg text-xs">
                      18+
                    </span>
                  )}
                </div>

                {/* genre */}
                <div className="flex flex-wrap gap-y-1 gap-x-1.5 text-xs font-medium">
                  {genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="py-1 px-2.5 bg-foreground/20 rounded-full"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>

                <p className="text-sm italic font-medium text-foreground/60">
                  {tagline}
                </p>

                {/* Overview */}
                <div className="[&>p]:max-md:text-sm space-y-0.5 pb-1.5">
                  <h4>Overview</h4>
                  <p>{overview}</p>
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
                {additionalDetails.map((detail) => (
                  <div key={detail.label}>
                    <span className="text-foreground/60 text-sm">
                      {detail.label}
                    </span>
                    <p className="pr-10">{formatArrayValue(detail.value)}</p>
                  </div>
                ))}
              </div>

              {/* Right side */}
              <div className="space-y-4">
                <h3>Rating</h3>
                <div className="flex items-center gap-3">
                  <div className="inline-block p-4 rounded-full border-4 border-primary">
                    <span className="text-xl font-bold">{rateStar}</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm">From {voteCont} votes</p>
                    {/* Percentage bar */}
                    <progress
                      value={votePercentage}
                      max={100}
                      className="h-2 border-primary border [&::-webkit-progress-value]:bg-primary "
                    />
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
  }
};

export default MovieDetails;
