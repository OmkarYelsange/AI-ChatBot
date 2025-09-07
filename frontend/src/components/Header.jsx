import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handler = () => setOnline(navigator.onLine);
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);
    return () => {
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
    };
  }, []);

  return (
    <header className="sticky top-0 z-10 border-b border-white/20 backdrop-blur-md bg-gradient-to-r from-indigo-600/70 to-purple-600/70 dark:from-gray-900/70 dark:to-gray-800/70 shadow-md">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center relative">
        {/* Left logo */}
        <span className="text-3xl">💬</span>

        {/* Center title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-white drop-shadow">
            MINI - The ChatBot
          </h1>
          <p className="text-xs sm:text-sm text-gray-200">
            {online ? "🟢 Online" : "🔴 Offline"} • Fast & minimal
          </p>
        </div>

        {/* Right theme toggle */}
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
