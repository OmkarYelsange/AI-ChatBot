import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    // system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      className="p-3 text-gray-800 dark:text-white transition-colors duration-300 transform bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg hover:ring-2 hover:ring-gray-400 dark:hover:ring-gray-600 focus:outline-none focus:ring-2 "
      title="Toggle theme"
    >
      <span aria-hidden>{theme === "dark" ? "🌙" : "☀️"}</span>
      {/* <span className="hidden sm:inline">
        {theme === "dark" ? "Dark" : "Light"}
      </span> */}
    </button>
  );
}
