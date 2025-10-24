import Footer from "./components/layout/Footer";
import Header from "./components/layout/header/Header";
import MainLayout from "./components/layout/MainLayout";
import { MovieProvider } from "./context/MovieContext";

function App() {

  return (
    <MovieProvider>
      <Header />
      <MainLayout />
      <Footer />
    </MovieProvider>
  );
}

export default App;
