import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-5 right-5  p-1 bg-primary rounded-full animate-bounce"
          onClick={scrollToTop}
        >
          <ArrowUp className="size-6 text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
