import React, { useState } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import AIAgent from "./components/AIAgent";
import Profile from "./components/Profile";

export default function App() {
  const [page, setPage] = useState("feed");
  const [xp, setXp] = useState(0);

  const addXp = (amount) => setXp((prev) => prev + amount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 font-sans">
      <Header setPage={setPage} xp={xp} />
      {page === "feed" && <Feed addXp={addXp} />}
      {page === "ai" && <AIAgent />}
      {page === "profile" && <Profile xp={xp} />}
    </div>
  );
}
