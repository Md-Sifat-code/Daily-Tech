import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import ssmall from "/astronot.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Track if the modal is open
  const { updateUser } = useUser(); // Access the context to update user data
  const navigate = useNavigate(); // Initialize the navigate function

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

        // Show the modal after successful login
        setIsModalOpen(true);

        // Redirect to "/home" after a brief delay
        setTimeout(() => {
          navigate("/home");
        }, 2000); // Wait 2 seconds before redirecting
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
      <div className="p-8 rounded-lg shadow-lg w-96">
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

      {/* Modal for successful login */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-10">
          <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-center text-green-500">
              Login Successful!
            </h3>
            <p className="mt-4 text-center">Redirecting to your home page...</p>
            <div className="flex justify-center mt-6">
              <button
                className="btn btn-primary"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
