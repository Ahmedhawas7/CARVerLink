import React from "react";

export default function Header({ setPage, xp }) {
  return (
    <header className="flex justify-between items-center px-5 py-3 border-b border-gray-700 bg-gray-950/80 backdrop-blur-sm">
      <h1 className="text-2xl font-bold text-purple-400">CARVerLink</h1>
      <nav className="flex gap-4">
        <button onClick={() => setPage("feed")}>Feed</button>
        <button onClick={() => setPage("ai")}>AI Agent</button>
        <button onClick={() => setPage("profile")}>Profile</button>
      </nav>
      <div className="text-sm text-gray-400">XP: {xp}</div>
    </header>
  );
}
