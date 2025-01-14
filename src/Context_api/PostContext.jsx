import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create the context
const PostContext = createContext();

// Create the provider component
export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from the API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://dailytech.onrender.com/Posts/All"
        );
        setPosts(response.data); // Set posts from API response
      } catch (error) {
        setError("Failed to load posts.");
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, loading, error }}>
      {children}
    </PostContext.Provider>
  );
};

// Create a custom hook to use the context
export const usePosts = () => {
  return useContext(PostContext);
};
