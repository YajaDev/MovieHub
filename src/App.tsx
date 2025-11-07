import Footer from "./components/layout/Footer";
import Header from "./components/layout/header/Header";
import MainLayout from "./components/layout/MainLayout";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import TrailerPlayer from "./components/ui/TrailerPlayer";
import { MovieProvider } from "./context/MovieContext";
import { MovieModalProvider } from "./context/MovieModalContext";
import { TrailerProvider } from "./context/TrailerContext";

function App() {
  return (
    <MovieProvider>
      <MovieModalProvider>
        <TrailerProvider>
          <Header />
          <MainLayout />
          <Footer />
          <ScrollToTopButton />
          <TrailerPlayer />
        </TrailerProvider>
      </MovieModalProvider>
    </MovieProvider>
  );
}

export default App;
