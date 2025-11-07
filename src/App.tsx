import Footer from "./components/layout/Footer";
import Header from "./components/layout/header/Header";
import MainLayout from "./components/layout/MainLayout";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import { MovieProvider } from "./context/MovieContext";
import { MovieModalProvider } from "./context/MovieModalContext";

function App() {
  return (
    <MovieProvider>
      <MovieModalProvider>
        <Header />
        <MainLayout />
        <Footer />
        <ScrollToTopButton /> 
      </MovieModalProvider>
    </MovieProvider>
  );
}

export default App;
