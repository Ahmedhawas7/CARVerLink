import React from "react";

export default function Profile({ xp }) {
  return (
    <div className="p-6 space-y-4">
      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-gray-300">
        <h2 className="text-xl font-semibold text-purple-400 mb-2">
          Profile
        </h2>
        <p>Username: Ahmed Hawas</p>
        <p>Total XP: {xp}</p>
        <p>Wallet Status: Connected (Demo)</p>
        <p className="text-gray-500 mt-3">
          This is a prototype — XP will later be linked to smart contracts on SVM.
        </p>
      </div>
    </div>
  );
}
