import React, { useState } from "react";
import logo from "/astro.jpg";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignUP() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log(formData);
  };

  return (
    <section className="min-h-screen rob">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* logo part */}
        <div className="flex justify-center items-center">
          <img className="w-full min-h-screen" src={logo} alt="Logo" />
        </div>

        {/* sign up form */}
        <div className="flex justify-center items-center py-10 px-5">
          <form
            onSubmit={handleSubmit}
            className="max-w-md w-full space-y-6 shadow-lg p-8 rounded-lg"
          >
            <h2 className="text-6xl font-bold text-center rob text-white ">
              Daily<span className="text-blue-600">Tech</span>
            </h2>
            <h2 className="text-xl font-bold text-center text-white">
              Fill up your info!{" "}
              <span className="text-blue-600">And Let's start</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
                <FaUser className="text-xl text-gray-600 mr-3" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full py-2 focus:outline-none focus:ring-2 text-white focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
                <FaEnvelope className="text-xl text-gray-600 mr-3" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
                <FaLock className="text-xl text-gray-600 mr-3" />
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full py-2  focus:outline-none focus:ring-2 text-white focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Sign Up
              </button>
            </div>

            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-indigo-600 hover:text-indigo-700"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
