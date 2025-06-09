
import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "system" | "colorblind";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("wingspan-theme");
    return (stored as Theme) || "system";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove("light", "dark", "colorblind");
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    localStorage.setItem("wingspan-theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
