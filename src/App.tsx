import MovieContent from "./components/MovieContent"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className=" px-[5%]">
      <header className="flex justify-between items-center py-3 md:py-5">
        <Navbar />
      </header>
      <main>
        <MovieContent />
      </main>
    </div>
  )
}

export default App
