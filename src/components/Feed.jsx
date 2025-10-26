import React, { useState } from "react";

export default function Feed({ addXp }) {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim()) {
      const updated = [{ text: newPost, likes: 0 }, ...posts];
      setPosts(updated);
      setNewPost("");
      addXp(5);
    }
  };

  const likePost = (index) => {
    const updated = [...posts];
    updated[index].likes += 1;
    setPosts(updated);
    addXp(2);
  };

  return (
    <div className="p-6 space-y-4">
      <textarea
        className="w-full bg-gray-900 p-3 rounded-lg border border-gray-700 text-gray-100"
        placeholder="Share your thoughts..."
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <button
        onClick={handlePost}
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl"
      >
        Post
      </button>

      <div className="space-y-3 mt-5">
        {posts.map((p, i) => (
          <div
            key={i}
            className="bg-gray-900 p-4 rounded-xl border border-gray-800 shadow-sm"
          >
            <p>{p.text}</p>
            <button
              onClick={() => likePost(i)}
              className="mt-2 text-sm text-purple-400 hover:text-purple-300"
            >
              ❤️ {p.likes} Likes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
