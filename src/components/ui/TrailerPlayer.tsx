import { X } from "lucide-react";
import { useTrailer } from "../../context/TrailerContext";

const TrailerPlayer = () => {
  const { movieTrailer, closeTrailer } = useTrailer();

  if (!movieTrailer) return;

  const { key } = movieTrailer;

  return (
    <>
      {movieTrailer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg"
          onClick={closeTrailer} 
        >
          <div
            className="relative w-full h-full max-w-230 md:max-h-[80vh] lg:max-h-[90vh] bg-background
        rounded-md overflow-y-auto overflow-x-hidden custom-scrollbar"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="lg:hidden p-1 bg-primary rounded-full absolute right-4 top-4" onClick={() => closeTrailer()}>
              <X size={17} strokeWidth={4}/>
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${key}?autoplay=1`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default TrailerPlayer;
