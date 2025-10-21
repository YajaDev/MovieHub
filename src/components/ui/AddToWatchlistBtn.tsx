import { Bookmark, Plus } from "lucide-react";

const AddToWatchlistBtn = () => {
  return (
    <>
      <button className="hidden md:flex items-center py-1.5 px-5 rounded-sm text-white font-medium bg-black/20 ring-xs">
        <Plus size={20} />
        Add to Watchlist
      </button>

      <button className="md:hidden">
        <Bookmark size={25} color="var(--primary)" strokeWidth={1.5} />
      </button>
    </>
  );
};

export default AddToWatchlistBtn;
