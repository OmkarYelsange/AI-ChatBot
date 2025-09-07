import React from "react";

export default function TypingDots() {
  return (
    <div className="flex items-center gap-1">
      <span className="sr-only">Typing…</span>
      <span
        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
        style={{ animationDelay: "0ms" }}
      />
      <span
        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
        style={{ animationDelay: "150ms" }}
      />
      <span
        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
}
