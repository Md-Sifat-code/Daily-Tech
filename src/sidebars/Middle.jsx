import React, { useState, useEffect, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom"; // Import NavLink for active styling
import { FaImage, FaRegSmile, FaTrash } from "react-icons/fa"; // Added Trash Icon for deletion
import EmojiPicker from "emoji-picker-react"; // Using emoji-picker-react

export default function Middle() {
  const [postText, setPostText] = useState("");
  const [images, setImages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojiPickerRef = useRef(null);

  // Close emoji picker when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageUpload = (acceptedFiles) => {
    setImages([...images, ...acceptedFiles]);
  };

  const handleImageDelete = (index) => {
    setImages(images.filter((_, i) => i !== index)); // Removes image at the given index
  };

  const handleEmojiClick = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = (emoji) => {
    setPostText(postText + emoji.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <section>
      <div>
        {/* Navigation links with active styling */}
        <div className="flex flex-col sm:flex-row justify-around items-center border-b p-4">
          {/* NavLink for "For You" with Tailwind active class */}
          <NavLink
            to="for_you"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-white"
            }
          >
            For You
          </NavLink>
          {/* NavLink for "Following" with Tailwind active class */}
          <NavLink
            to="following"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-white"
            }
          >
            Following
          </NavLink>
        </div>
        <div
          className="flex px-2
         flex-row w-full items-tart"
        >
          <div className="flex mt-6 justify-start space-x-4">
            {/* User Icon */}
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>{" "}
            {/* Replace with user icon */}
          </div>

          {/* Create post section */}
          <div className="p-4 w-full border-b flex flex-col gap-5 relative">
            {/* Text Input Field */}
            <div className="flex flex-col w-full justify-between items-center mt-3 gap-3">
              <div className="w-full">
                <input
                  type="text"
                  value={postText}
                  onChange={handlePostTextChange}
                  placeholder="What's on your mind?"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mt-2 w-full">
                {images.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt="uploaded"
                          className="w-20 h-20 object-cover rounded"
                        />
                        {/* Delete button */}
                        <button
                          onClick={() => handleImageDelete(index)}
                          className="absolute top-0 right-0 bg-gray-700 text-white rounded-full p-1"
                          aria-label="Delete Image"
                        >
                          <FaTrash size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Icons for adding images and emojis */}
              <div className="flex justify-start items-start w-full space-x-4 mt-2 sm:mt-0">
                <button
                  onClick={handleImageClick}
                  className="hover:text-blue-500"
                  aria-label="Add Image"
                >
                  <FaImage size={24} />
                  <input
                    type="file"
                    id="imageInput"
                    onChange={(e) => handleImageUpload(e.target.files)}
                    className="hidden"
                    accept="image/*"
                    multiple
                  />
                </button>

                <button
                  onClick={handleEmojiClick}
                  className="hover:text-blue-500"
                  aria-label="Add Emoji"
                >
                  <FaRegSmile size={24} />
                </button>
              </div>
            </div>

            {/* Emoji Picker */}
            {showEmojiPicker && (
              <div
                ref={emojiPickerRef}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10"
              >
                <EmojiPicker onEmojiClick={handleEmojiSelect} />
              </div>
            )}
          </div>
        </div>

        {/* All posts */}
        <div className="mt-12">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
