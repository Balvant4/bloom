"use client";

import { useState } from "react";

export default function LoginDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${email}`);
    // Implement actual login logic here
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="hover:text-yellow-300 transition px-3 cursor-pointer py-2 font-bold  border-0 xl:border-2 rounded-md"
      >
        Login or Join
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-md z-50 p-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="text-sm font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Continue
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
