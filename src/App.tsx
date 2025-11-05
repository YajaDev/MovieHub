import Footer from "./components/layout/Footer";
import Header from "./components/layout/header/Header";
import MainLayout from "./components/layout/MainLayout";
import { MovieProvider } from "./context/MovieContext";
import { MovieModalProvider } from "./context/MovieModalContext";

function App() {

  return (
    <MovieProvider>
      <MovieModalProvider>
        <Header />
      <MainLayout />
        <Footer />
      </MovieModalProvider>
    </MovieProvider>
  );
}

export default App;
