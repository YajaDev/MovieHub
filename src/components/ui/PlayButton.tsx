import { Play } from "lucide-react";
import type { PlayButtonProps } from "../../types/ui";

const PlayButton = ({ children, className, onclick }: PlayButtonProps) => {
  return (
    <button
      onClick={() => onclick && onclick()}
      className={`flex justify-center text-white items-center gap-1.5 py-1 md:py-1.5 rounded-sm px-3 md:px-5  bg-primary hover:bg-primary/80 font-medium ${className}`}
    >
      <span className="bg-white p-1 rounded-full">
        <Play fill="#ebb000" strokeWidth={0} size={8} />
      </span>
      {children}
    </button>
  );
};

export default PlayButton;
