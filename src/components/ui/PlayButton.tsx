import { Play } from "lucide-react"

interface PlayButtonProps {
  children: string
  className?: string
}

const PlayButton = ({children, className}:PlayButtonProps) => {
  return (
    <button className={`flex justify-center text-white items-center gap-1.5 py-1.5 rounded-sm px-5 bg-primary font-medium ${className}`}>
      <span className="bg-white p-1 rounded-full">
        <Play fill="#ebb000" strokeWidth={0} size={8} />
      </span>
      {children}
    </button>
  )
}

export default PlayButton
