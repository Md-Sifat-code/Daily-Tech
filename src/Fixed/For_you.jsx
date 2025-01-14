import React from "react";
import { usePosts } from "../Context_api/PostContext"; // Import the usePosts hook
import { FaHeart, FaShareAlt, FaComment } from "react-icons/fa"; // Import React Icons

export default function For_you() {
  const { posts, loading, error } = usePosts(); // Access posts, loading, and error from the context

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <button className="btn btn-primary loading">Loading...</button>{" "}
        {/* DaisyUI loading button */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <span className="text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mt-5 mb-8">
        For You
      </h2>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available</p>
      ) : (
        <div>
          {posts.map((post) => (
            <div
              key={post._id}
              className="card bg-white shadow-lg rounded-lg mb-6 hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              <div className="card-body">
                <h3 className="text-xl font-semibold text-gray-800">
                  {post.title}
                </h3>

                {/* Display images if available */}
                {post.imageUrls && post.imageUrls.length > 0 && (
                  <div className="flex w-full space-x-4 mt-4">
                    {post.imageUrls.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`post-image-${index}`}
                        className="rounded-lg w-full h-[250px] object-cover"
                      />
                    ))}
                  </div>
                )}

                {/* Social actions like Like, Comment, Share */}
                <div className="flex items-center mt-4 space-x-4 text-gray-600">
                  <button className="flex items-center hover:text-red-500">
                    <FaHeart className="mr-2" />
                    Like
                  </button>
                  <button className="flex items-center hover:text-blue-500">
                    <FaComment className="mr-2" />
                    Comment
                  </button>
                  <button className="flex items-center hover:text-green-500">
                    <FaShareAlt className="mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
