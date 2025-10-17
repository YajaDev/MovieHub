import GenreSection from "../sections/GenreSection";
import HeroSection from "../sections/HeroSection";
import MovieSlider from "../sections/MovieSlider";
import MovieDetails from "../ui/MovieDetails";

const MovieContent = () => {
  return (
    <main>
      <HeroSection />
      <div className="md:px-[5%] lg:px-[6%]">
        <MovieSlider />
        <GenreSection />
        <MovieDetails />
      </div>
    </main>
  );
};

export default MovieContent;
