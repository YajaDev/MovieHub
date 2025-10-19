import { LoaderCircle } from "lucide-react";
import type { SpinnerProps } from "../../types/ui";

const Loader = ({For}: SpinnerProps) => {

  if(For === "HeroSection") return (
    <div className="flex flex-col justify-center items-center gap-2 h-screen">
      <LoaderCircle className="animate-spin text-primary" size={60} />
      <span className="font-medium">Loading....</span>
    </div>
  )
};

export default Loader;
