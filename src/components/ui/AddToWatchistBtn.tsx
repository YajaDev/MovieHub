import { Plus } from "lucide-react"

const AddToWatchistBtn = () => {
  return (
    <button className="flex items-center py-1.5 px-5 rounded-sm text-foreground font-medium bg-foreground/20 ring-xs">
      <Plus size={20} />
      Add to Watchlist
    </button>
  )
}

export default AddToWatchistBtn
