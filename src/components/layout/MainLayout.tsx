import { useMovieContext } from "../../context/MovieContext";
import GenreSection from "../sections/GenreSection";
import HeroSection from "../sections/HeroSection";
import MovieSlider from "../sections/MovieSlider";
import MovieDetails from "../ui/MovieDetails";

const MainLayout = () => {
  const { trending, popular, topRated } = useMovieContext();

  return (
    <main id="home">
      <HeroSection />
      <div className="px-[5%] md:px-[6%] space-y-5">
        <MovieSlider
          id="trending"
          title="Trending This Week"
          subTitle="Stay updated with everyone's watching"
          movies={trending}
        />
        <MovieSlider
          id="popular"
          title="Popular Movies"
          subTitle="Most watched movies right now"
          movies={popular}
        />

        <GenreSection />

        <MovieSlider
          id="topRated"
          title="Top Rated Movies"
          subTitle="Highest rated movies of all time"
          movies={topRated}
        />
        <MovieDetails />
      </div>
    </main>
  );
};

export default MainLayout;
