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
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available</p>
      ) : (
        <div>
          {posts.map((post) => (
            <div
              key={post._id}
              className=" bg-[#08020e3a]  rounded-[22px] mb-14 hover:scale-105 transform transition-all duration-300 ease-in-out shadow-lg shadow-blue-950 border-gray-300 py-4"
            >
              <div className="px-6">
                <h3 className="text-xl mt-6 text-white font-semibold ">
                  {post.title}
                </h3>

                {/* Display images if available */}
                {post.imageUrls && post.imageUrls.length > 0 && (
                  <div className="flex w-full mt-4">
                    {post.imageUrls.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`post-image-${index}`}
                        className="rounded-[22px] w-full h-[450px] object-cover"
                      />
                    ))}
                  </div>
                )}

                {/* Social actions like Like, Comment, Share */}
                <div className="flex items-center px-4 mt-4 space-x-4 text-gray-600">
                  <button className="flex items-center text-red-500">
                    <FaHeart className="mr-2" />
                    Like
                  </button>
                  <button className="flex items-center hover:text-blue-500">
                    <FaComment className="mr-2" />
                    Discussion
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
