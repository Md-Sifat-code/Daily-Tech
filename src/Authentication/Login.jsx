import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import ssmall from "/astronot.png";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { updateUser } = useUser(); // Access the context to update user data

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request with username and password
    try {
      const response = await fetch("https://dailytech.onrender.com/Log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // If login is successful, update the context and sessionStorage
        updateUser({
          token: data.token,
          username: data.username,
          email: data.email,
          roles: data.roles,
        });

        alert("Login successful!");
      } else {
        alert("Login failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="min-h-screen rob flex items-center justify-center">
      <div className=" p-8 rounded-lg shadow-lg w-96">
        <img src={ssmall} alt="" />
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mt-2 text-white border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 text-blue-600 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md"
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
}
