import React from "react";

export default function Message({ sender, text }) {
  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
      <div
        className={`max-w-[85%] sm:max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-md transition
        ${
          isUser
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-sm"
            : "bg-gray-100/90 dark:bg-gray-700/80 dark:text-gray-50 rounded-bl-sm"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
