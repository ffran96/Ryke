"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";

const getPreferredTheme = () => {
  if (typeof window === "undefined") return "dark";

  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(getPreferredTheme());

    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleSystemThemeChange = () => {
      if (window.localStorage.getItem("theme")) return;

      const nextTheme = mediaQuery.matches ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      setTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
      onClick={toggleTheme}
      className={`${className} size-10 items-center justify-center rounded-full border border-[#ffffff33] bg-[#00000033] text-[#ffffff] backdrop-blur-md transition-all duration-300 hover:border-[#ffffff99] hover:bg-[#dcd9d1] hover:text-[#000000]`}
    >
      <FontAwesomeIcon icon={theme === "dark" ? faLightbulb : faMoon} />
    </button>
  );
}
