import { Play, Plus, Star } from "lucide-react";

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
          <h1 className="text-5xl font-bold">Movie Title</h1>
          <p>Movie Overview</p>
          <div className="flex gap-3 text-white">
            <button className="flex items-center gap-2 py-1.5 rounded-sm px-5 bg-primary font-medium">
              <span className="bg-white p-1 rounded-full">
                <Play fill="#ebb000" strokeWidth={0} size={9} />
              </span>
              Watch Now
            </button>
            <button className="flex items-center py-1.5 px-5 rounded-sm text-foreground font-medium bg-foreground/20">
              <Plus size={20} />
              Add to Watch List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
