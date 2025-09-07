import React, { useEffect, useRef, useState } from "react";

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const submit = () => {
    const v = value.trim();
    if (!v || disabled) return;
    onSend(v);
    setValue("");
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="flex items-end gap-2">
      <textarea
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKey}
        placeholder="Ask anything…"
        rows={1}
        className="flex-1 resize-none rounded-xl border border-gray-200 dark:border-gray-700
                   bg-white/90 dark:bg-gray-800/70 px-4 py-3 shadow-sm backdrop-blur-sm
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={submit}
        disabled={disabled}
        className="rounded-xl px-5 py-3 text-sm font-semibold shadow-lg
                   bg-gradient-to-r from-indigo-600 to-purple-600 text-white
                   hover:opacity-90 active:scale-95 transition disabled:opacity-50"
      >
        Send
      </button>
    </div>
  );
}
