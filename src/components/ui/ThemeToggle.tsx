import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark"|"light"

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem("theme") as Theme || "dark");

  // Apply theme on load
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full transition-all duration-200"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Moon className="text-primary" size={17} strokeWidth={2.5} />
      ) : (
        <Sun className="text-primary" size={17} strokeWidth={2.5} />
      )}
    </button>
  );
};

export default ThemeToggle;
