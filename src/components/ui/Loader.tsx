import { LoaderCircle } from "lucide-react";
import type { SpinnerProps } from "../../types/ui";

const Loader = ({ SpinnerSize, isFull }: SpinnerProps) => {
  const size = SpinnerSize
  const style = `flex flex-col justify-center items-center gap-2 ${
    isFull ? "h-screen" : "p-25"
  }`;

  return (
    <div className={style}>
      <LoaderCircle className="animate-spin text-primary" size={size} />
      <p className="font-medium text-foreground/50">Loading....</p>
    </div>
  );
};

export default Loader;
