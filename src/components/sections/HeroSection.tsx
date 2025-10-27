import { Star } from "lucide-react";
import PlayButton from ".././ui/PlayButton";
import AddToWatchistBtn from "../ui/AddToWatchlistBtn";
import Loader from "../ui/Loader";

import { useMovieContext } from "../../context/MovieContext";
import { useFeatured } from "../../hooks/useFeature";
import { formatToYear } from "../../utils/dateFormmating";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const HeroSection = () => {
  const { trending } = useMovieContext();
  const { currentSlide, goToSlide, index, featuredMovies } =
    useFeatured(trending.result);

  const status = trending.status
  
  return (
    <>
      {status === "loading" && <Loader SpinnerSize={60} isFull={true} />}

      {status === "success" && (
        <section
          className={`relative h-screen bg-cover bg-center mb-6`}
          style={{
            backgroundImage: `url(${IMAGE_BASE_URL}/original${currentSlide.backdrop_path})`,
          }}
        >
          {/* Layover */}
          <div className="absolute inset-0 bg-gradient-to-r from-overlay to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-overlay/80 to-transparent" />

          <div className="absolute inset-0 px-[6%] flex items-center text-white">
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="flex gap-2 items-center text-xs [&>span]:font-bold">
                <p className="bg-primary text-white py-0.5  md:py-1 px-1.5 rounded-sm font-medium">
                  FEATURED
                </p>
                <div className="flex items-center gap-1">
                  <Star fill="#ebb000" color="#ebb000" size={12} />
                  {currentSlide.vote_average.toFixed(1)}
                </div>
                <span>.</span>
                <p>{formatToYear(currentSlide.release_date)}</p>
                {currentSlide.adult && (
                  <>
                    <span>.</span>
                    <p className="px-5 rounded-xs text-white bg-neutral/60">
                      18+
                    </p>
                  </>
                )}
              </div>
              <h1>{currentSlide.title}</h1>
              <p className="text-white/85 max-md:text-sm">
                {currentSlide.overview}
              </p>
              <div className="flex items-center gap-3  ">
                <PlayButton>Watch Now</PlayButton>
                <AddToWatchistBtn />
              </div>
            </div>
          </div>
          {/* Slide indicators */}
          <div className="absolute bottom-4 flex justify-center gap-2 w-full">
            {featuredMovies.map((m, i) => (
              <button
                key={m.title}
                disabled={i === index}
                onClick={() => goToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 hover:opacity-70 ${
                  i === index ? "w-9 bg-primary" : "w-4 bg-neutral-500"
                }`}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default HeroSection;
