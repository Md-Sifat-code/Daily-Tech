import React, { useState, useEffect, useRef } from "react";
import { FaImage, FaRegSmile, FaTrash } from "react-icons/fa"; // Added Trash Icon for deletion
import EmojiPicker from "emoji-picker-react"; // Using emoji-picker-react
import For_you from "../Fixed/For_you";

export default function Middle() {
  const [postText, setPostText] = useState(""); // Post text
  const [images, setImages] = useState([]); // Uploaded images
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // To show/hide emoji picker
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const emojiPickerRef = useRef(null); // Ref for emoji picker

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

  const handleImageChange = (e) => {
    setImages([...images, ...e.target.files]);
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

  // Handle the form submission
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", postText); // Title from user input

    // Append images to form data as 'imageUrls'
    images.forEach((image) => {
      formData.append("imageUrls", image);
    });

    // Get the username from session storage
    const username = sessionStorage.getItem("username");
    if (username) {
      formData.append("username", username); // Add username to form data
    } else {
      console.error("Username is not found in session storage.");
      setIsSubmitting(false);
      return;
    }

    // Create a new form submission request
    const requestOptions = {
      method: "POST",
      body: formData,
    };

    try {
      const response = await fetch(
        "https://dailytech.onrender.com/Posts/add",
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      let result;

      if (contentType && contentType.includes("application/json")) {
        result = await response.json(); // If the response is JSON, parse it as JSON
      } else {
        const text = await response.text(); // If not JSON, get it as plain text
        result = { message: text }; // Create a simple object to contain the response text
      }

      console.log("Post created successfully:", result);

      setPostText(""); // Reset post text
      setImages([]); // Reset images
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <section>
      <div className="flex justify-center items-center flex-col w-full">
        {/* Create post section */}
        <div className="flex px-2 rounded-[22px]  mt-2 flex-row w-[870px] bg-[#0f1321] shadow-lg shadow-blue-950 justify-center items-start ">
          <div className="flex px-4 mt-6 justify-start items-start  space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          </div>

          {/* Post Form */}
          <div className="p-4 w-full  border-gray-400 flex flex-col gap-5 relative">
            {/* Text Input */}
            <div className="flex flex-col w-full justify-between items-center mt-3 gap-3">
              <div className="w-full">
                <input
                  type="text"
                  value={postText}
                  onChange={handlePostTextChange}
                  placeholder="What's on your mind?"
                  className="w-full text-white bg-transparent p-2 border-b rounded"
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

              {/* Image Input Button */}
              <div className="flex justify-between items-center w-full space-x-4 mt-2 sm:mt-0">
                <div className="flex justify-start items-start w-full space-x-4 mt-2 sm:mt-0">
                  <button
                    onClick={() =>
                      document.getElementById("imageInput").click()
                    }
                    className="hover:text-blue-500"
                    aria-label="Add Image"
                  >
                    <FaImage size={24} className="text-blue-600" />
                    <input
                      type="file"
                      id="imageInput"
                      onChange={handleImageChange}
                      className="hidden"
                      accept="image/*"
                      multiple
                    />
                  </button>
                </div>
                <button
                  onClick={handleSubmit}
                  className=" bg-blue-500 btn px-8
                   text-white border-none font-bold rounded-[42px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Post"}
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

            {/* Submit Button */}
          </div>
        </div>

        {/* All posts */}
        <div className="mt-12">
          <For_you />
        </div>
      </div>
    </section>
  );
}
