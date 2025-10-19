import { Search } from "lucide-react"
import type { SearchBarProps } from "../../types/ui"

const SearchBar = ({className}:SearchBarProps) => {
  return (
    <div className={`${className} relative text-foreground`}>
      <input
        type="text"
        placeholder="Search movies..."
        className="bg-foreground/15 px-4 py-2 text-sm rounded-full w-40 focus:w-50 lg:w-50 lg:focus:w-65 transition-all"
      />
      <Search className="absolute top-2.5 right-3 h-4 w-4" />
    </div>
  )
}

export default SearchBar
