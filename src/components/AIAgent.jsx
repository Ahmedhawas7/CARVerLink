import React, { useState } from "react";

export default function AIAgent() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hello! I'm the CARVerLink AI Agent 🤖. How can I assist you today?" },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    const aiReply = {
      from: "ai",
      text:
        "Analysis: It seems you're interested in integrating AI with SocialFi — soon you’ll be able to connect your wallet and track XP on SVM.",
    };
    setMessages([...messages, userMsg, aiReply]);
    setInput("");
  };

  return (
    <div className="p-6">
      <div className="h-[60vh] overflow-y-auto space-y-3 mb-4 bg-gray-900 p-4 rounded-lg border border-gray-800">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg ${
              m.from === "ai" ? "bg-purple-900/30 text-purple-300" : "bg-gray-800"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 bg-gray-800 p-3 rounded-lg border border-gray-700 text-gray-100"
        />
        <button
          onClick={handleSend}
          className="bg-purple-500 hover:bg-purple-600 px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
