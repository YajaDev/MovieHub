import { useMovieContext } from "../../context/MovieContext";
import GenreSection from "../sections/GenreSection";
import HeroSection from "../sections/HeroSection";
import MovieSlider from "../sections/MovieSlider";
import MovieDetails from "../ui/MovieDetails";

const MainLayout = () => {
  const { trending, popular, top_rated } = useMovieContext();

  return (
    <main id="home">
      <HeroSection />
      <div className="px-[6%] md:px-[8%] space-y-5">
        <MovieSlider
          id="trending"
          title="Trending This Week"
          subTitle="Stay updated with everyone's watching"
          moviesData={trending}
        />
        <MovieSlider
          id="popular"
          title="Popular Movies"
          subTitle="Most watched movies right now"
          moviesData={popular}
        />

        <GenreSection />

        <MovieSlider
          id="topRated"
          title="Top Rated Movies"
          subTitle="Highest rated movies of all time"
          moviesData={top_rated}
        />

        <MovieDetails />
      </div>
    </main>
  );
};

export default MainLayout;
