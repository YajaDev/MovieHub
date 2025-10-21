import { LoaderCircle } from "lucide-react";
import type { SpinnerProps } from "../../types/ui";

const Loader = ({ For }: SpinnerProps) => {
  const size = (For === "HeroSection" ? 60 : 40)
  const style = `flex flex-col justify-center items-center gap-2 ${
    For === "HeroSection" ? "h-screen" : ""
  }`;

  return (
    <div className={style}>
      <LoaderCircle className="animate-spin text-primary" size={size} />
      <p className="font-medium text-foreground/50">Loading....</p>
    </div>
  );
};

export default Loader;
