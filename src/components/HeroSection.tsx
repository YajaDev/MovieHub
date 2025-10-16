import { Star } from "lucide-react";
import PlayButton from "./ui/PlayButton";
import AddToWatchistBtn from "./ui/AddToWatchistBtn";
import { useEffect, useState } from "react";
import { fetchFeaturedMovie } from "../services/api";
import type { Movie } from "../types/api";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const HeroSection = () => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!featuredMovie.length) return;

    const intervalID = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredMovie.length);
    }, 8000);

    return () => clearInterval(intervalID);
  }, [featuredMovie, currentSlide]);

  useEffect(() => {
    const getFeatured = async () => {
      const featured = await fetchFeaturedMovie();
      setFeaturedMovie(featured);
      console.log(featured);
    };


    getFeatured();
  }, []);

  if (!featuredMovie.length) return;

  return (
    <section id="home" className="relative ">
      <div className="w-full max-h-screen overflow-hidden bg-cover bg-center">
        <img
          src={`${IMAGE_BASE_URL}/original${featuredMovie[currentSlide].backdrop_path}`}
          alt=""
        />
      </div>

      {/* Layover */}
      <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

      <div className="absolute inset-0 px-[6%] flex items-center">
        <div className="flex flex-col gap-2.5 max-w-3xl">
          <div className="flex gap-3 items-center text-xs [&>span]:font-bold">
            <p className="bg-primary text-white py-1 px-1.5 rounded-sm font-medium ">
              FEATURED
            </p>
            <div className="flex items-center gap-1 text-base font-bold">
              <Star fill="#ebb000" color="#ebb000" size={18} />
              {featuredMovie[currentSlide].vote_average.toFixed(1)}
            </div>
            <span>.</span>
            <p className="font-medium">
              {featuredMovie[currentSlide].release_date}
            </p>
            {!featuredMovie[currentSlide].adult && (
              <>
                <span>.</span>
                <p className="px-8 rounded-xs text-white bg-foreground/60">
                  18+
                </p>
              </>
            )}
          </div>
          <h1>{featuredMovie[currentSlide].title}</h1>
          <p>{featuredMovie[currentSlide].overview}</p>
          <div className="flex gap-3">
            <PlayButton>Watch Now</PlayButton>
            <AddToWatchistBtn />
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 flex justify-center gap-2 w-full">
        {featuredMovie.map((m, i) => (
          <button
            key={m.title}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentSlide ? "w-9 bg-primary" : "w-4 bg-neutral-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
