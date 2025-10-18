import Footer from "./components/layout/Footer";
import Header from "./components/layout/header/Header";
import MainLayout from "./components/layout/MainLayout";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <>
      <Header />
      <MovieProvider>
        <MainLayout />
      </MovieProvider>
      <Footer />
    </>
  );
}

export default App;
