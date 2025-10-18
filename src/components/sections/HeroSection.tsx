import { Star } from "lucide-react";
import PlayButton from ".././ui/PlayButton";
import AddToWatchistBtn from "../ui/AddToWatchlistBtn";

import { useMovieContext } from "../../context/MovieContext";
import { useFeatured } from "../../hooks/useFeature";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const HeroSection = () => {
  const { trending, status } = useMovieContext();
  const { currentSlide, goToSlide, index, featuredMovies } =
    useFeatured(trending);

  if (status === "loading") return <p>...Loading</p>;
  return (
    <section
      id="home"
      className={`relative h-screen bg-cover bg-centen`}
      style={{
        backgroundImage: currentSlide
          ? `url(${IMAGE_BASE_URL}/original${currentSlide.backdrop_path})`
          : undefined,
      }}
    >
      {/* Layover */}
      <div className="absolute inset-0 bg-gradient-to-r from-layover to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-layover/80 to-transparent" />

      <div className="absolute inset-0 px-[6%] flex items-center text-white">
        <div className="flex flex-col gap-2.5 max-w-3xl">
          <div className="flex gap-3 items-center text-xs [&>span]:font-bold">
            <p className="bg-primary text-white py-1 px-1.5 rounded-sm font-medium ">
              FEATURED
            </p>
            <div className="flex items-center gap-1 text-base font-bold">
              <Star fill="#ebb000" color="#ebb000" size={18} />
              {currentSlide.vote_average.toFixed(1)}
            </div>
            <span>.</span>
            <p className="font-medium">{currentSlide.release_date}</p>
            {!currentSlide.adult && (
              <>
                <span>.</span>
                <p className="px-8 rounded-xs text-white bg-neutral/60">18+</p>
              </>
            )}
          </div>
          <h1>{currentSlide.title}</h1>
          <p className="transition delay-150 duration-1000 ease-in-out">
            {currentSlide.overview}
          </p>
          <div className="max-md:space-y-3 md:flex md:gap-3  ">
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
            onClick={() => goToSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-9 bg-primary" : "w-4 bg-neutral-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
