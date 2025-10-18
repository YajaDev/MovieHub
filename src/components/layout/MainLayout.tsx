import MovieProvider from "../../context/MovieContext";
import GenreSection from "../sections/GenreSection";
import HeroSection from "../sections/HeroSection";
import MovieSlider from "../sections/MovieSlider";
import MovieDetails from "../ui/MovieDetails";

const MainLayout = () => {
  return (
    <main>
      <HeroSection />
        <MovieProvider>
          <div className="md:px-[5%] lg:px-[6%]">
            <MovieSlider />
            <GenreSection />
            <MovieDetails />
          </div>
        </MovieProvider>
    </main>
  );
};

export default MainLayout;
