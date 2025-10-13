import { Star } from "lucide-react";
import PlayButton from "./ui/PlayButton";
import AddToWatchistBtn from "./ui/AddToWatchistBtn";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-screen">
      <div className="absolute inset-0 flex items-center">
        <div className="flex flex-col gap-2.5 max-w-3xl">
          <div className="flex gap-3 items-center text-xs [&>span]:font-bold">
            <p className="bg-primary text-white py-1 px-1.5 rounded-sm font-medium ">
              FEATURED
            </p>
            <div className="flex items-center gap-1">
              <Star fill="#ebb000" color="#ebb000" size={18} />
              Movie Voting Average
            </div>
            <span>.</span>
            <p>Movie Release Date</p>
            <span>.</span>
            <p className="px-8 rounded-xs text-white bg-foreground/60">18+</p>
          </div>
          <h1>Movie Title</h1>
          <p>Movie Overview</p>
          <div className="flex gap-3 text-white">
            <PlayButton>Watch Now</PlayButton>
            <AddToWatchistBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
