import React, { useState } from "react";
import logo from "/astro.jpg";
import modal from "/astronot.png";
import { FaUser, FaEnvelope, FaLock, FaArrowDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function SignUP() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); // State to handle success
  const navigate = useNavigate(); // Hook for navigation after successful signup

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error state

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://dailytech.onrender.com/User/add", {
        method: "POST",
        body: formData,
      });

      // Log the response to see its content type and raw response
      console.log("Response Status:", response.status);
      console.log("Response Headers:", response.headers);

      // Check if the response is JSON or plain text
      const contentType = response.headers.get("Content-Type");

      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        console.log("JSON Response:", result);

        if (response.ok) {
          setIsSuccess(true);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setError(
            "There was an error with your registration. Please try again."
          );
        }
      } else {
        // Handle the response as plain text
        const errorText = await response.text();
        console.log("Plain Text Response:", errorText);

        // If you want to display the success message as well, you can set success message instead of an error
        if (response.ok) {
          setIsSuccess(true);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setError(
            "There was an error with your registration. Please try again."
          );
        }
      }
    } catch (err) {
      console.error("Error:", err);
      setError("There was an error with your registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen rob">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* logo part */}
        <div className="flex justify-center items-center relative">
          <img className="w-full min-h-screen" src={logo} alt="Logo" />

          {/* Welcome message and scroll down instruction for small screens */}
          <div className="bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 lg:hidden">
            <h1 className="text-4xl bg-transparent font-bold">
              Welcome To{" "}
              <span className="text-blue-600 bg-transparent">DailyTech</span>
            </h1>
            <p className="mt-4 bg-transparent text-lg">
              Scroll down{" "}
              <FaArrowDown className="inline-block bg-transparent animate-bounce ml-2" />
            </p>
          </div>
        </div>

        {/* sign up form */}
        <div className="flex justify-center items-center py-10 px-5">
          <form
            onSubmit={handleSubmit}
            className="max-w-md w-full space-y-6 shadow-lg p-8 rounded-lg"
          >
            <h2 className="text-6xl font-bold text-center rob text-black">
              Daily<span className="text-blue-600">Tech</span>
            </h2>
            <h2 className="text-xl font-bold text-center text-black">
              Fill up your info!{" "}
              <span className="text-blue-600">And Let's start</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
                <FaUser className="text-xl text-gray-600 mr-3" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full py-2 focus:outline-none focus:ring-2 text-white focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
                <FaEnvelope className="text-xl text-gray-600 mr-3" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
                <FaLock className="text-xl text-gray-600 mr-3" />
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  className="w-full py-2 focus:outline-none focus:ring-2 text-white focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-center mt-2">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition duration-300"
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
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

          {/* Success Notification */}
          {isSuccess && (
            <div className="fixed bg-white inset-0 rob flex items-center justify-center z-20">
              <div className="modal bg-white modal-open">
                <div className="modal-box">
                  <h2 className="text-2xl bg-transparent text-center font-semibold text-teal-500">
                    Congratulation Champ
                  </h2>
                  <div className="bg-transparent flex flex-col items-center justify-center">
                    <p className="text-gray-600 bg-transparent mt-4">
                      You have successfully created an account.
                    </p>
                    <img
                      className="w-[250px] h-[250px] bg-transparent"
                      src={modal}
                      alt=""
                    />
                  </div>
                  <div className="bg-transparent w-full modal-action">
                    <button
                      onClick={() => navigate("/login")}
                      className="btn w-full bg-blue-600 hover:bg-blue-800 text-white font-bold btn-teal"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
