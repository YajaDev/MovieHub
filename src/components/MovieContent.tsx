import GenreSection from "./GenreSection"
import HeroSection from "./HeroSection"
import MovieDetails from "./MovieDetails"
import MovieSlider from "./MovieSlider"

const MovieContent = () => {
  return (
    <>
      <HeroSection />
      <MovieSlider/>
      <GenreSection />
      <MovieDetails />
    </>
  )
}

export default MovieContent