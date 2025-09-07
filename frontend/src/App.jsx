import React from "react";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";

export default function App() {
  return (
    <div className="min-h-screen gradient-bg bg-fixed bg-cover bg-center">
      <div className="min-h-screen backdrop-blur-sm bg-black/20 dark:bg-black/50 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Chat Area */}
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6">
          <div className="bg-white/70 dark:bg-gray-900/60 shadow-xl backdrop-blur-md rounded-2xl p-4 sm:p-6 h-[80vh] flex flex-col">
            <ChatBox />
          </div>
        </main>
      </div>
    </div>
  );
}
