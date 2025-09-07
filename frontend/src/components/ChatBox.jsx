import React, { useEffect, useMemo, useRef, useState } from "react";
import { sendMessage, health } from "../lib/api";
import useLocalStorage from "../hooks/useLocalStorage";
import Message from "./Message";
import TypingDots from "./TypingDots";
import ChatInput from "./ChatInput";

function animateText(fullText, onUpdate, speed = 20) {
  return new Promise((resolve) => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      onUpdate(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(timer);
        resolve();
      }
    }, Math.max(5, 1000 / speed));
  });
}

export default function ChatBox() {
  const [messages, setMessages] = useLocalStorage("chat_messages", [
    {
      sender: "bot",
      text: "👋 Hi! I’m your Gemini assistant. How can I help?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [backendOK, setBackendOK] = useState(true);

  const bottomRef = useRef(null);

  useEffect(() => {
    (async () => setBackendOK(await health()))();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading]);

  const onSend = async (input) => {
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const { reply, error } = await sendMessage(input);
      if (error) throw new Error(error);

      let botText = "";
      const botMsg = { sender: "bot", text: "" };
      setMessages((prev) => [...prev, botMsg]);

      await animateText(
        reply || "…",
        (partial) => {
          botText = partial;
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { sender: "bot", text: botText };
            return copy;
          });
        },
        40 // typing speed
      );
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `⚠️ ${e.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const empty = useMemo(() => messages.length === 0, [messages]);

  const clearChat = () => {
    if (confirm("Clear the conversation?")) {
      setMessages([]);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Status bar */}
      <div className="flex items-center justify-between mb-3 text-sm">
        <span className="text-gray-700 dark:text-gray-300">
          {backendOK ? "✅ Connected" : "❌ Disconnected"}
        </span>
        <button
          onClick={clearChat}
          className="text-xs rounded-lg px-2 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          Clear
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 p-4 space-y-3 backdrop-blur-md">
        {empty && (
          <div className="h-full grid place-items-center text-gray-500">
            Start a conversation by typing below 👇
          </div>
        )}
        {!empty &&
          messages.map((m, i) => (
            <Message key={i} sender={m.sender} text={m.text} />
          ))}
        {loading && (
          <div className="flex justify-start my-2">
            <div className="max-w-[70%] rounded-2xl px-4 py-3 text-sm bg-gray-200 dark:bg-gray-700">
              <TypingDots />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="mt-4">
        <ChatInput onSend={onSend} disabled={loading || !backendOK} />
      </div>
    </div>
  );
}
