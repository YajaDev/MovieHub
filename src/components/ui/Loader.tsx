import { LoaderCircle } from "lucide-react";
import type { SpinnerProps } from "../../types/ui";

const Loader = ({For}: SpinnerProps) => {
  if(For === "HeroSection") return (
    <div className="flex flex-col justify-center items-center gap-2 h-screen">
      <LoaderCircle className="animate-spin text-primary" size={60} />
      <p className="font-medium text-foreground/50">Loading....</p>
    </div>
  )
};

export default Loader;
