import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios"; // If you are using axios

function Searching() {
  const [query, setQuery] = useState(""); // The search input
  const [results, setResults] = useState([]); // The search results
  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(null); // To track any error

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    // If the query is empty, reset results and return early
    if (!query) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true); // Show loading spinner
      setError(null); // Reset error
      try {
        // Make GET request to the API
        const response = await axios.get(
          `https://dailytech.onrender.com/User/search/${query}`
        );
        setResults(response.data); // Set the results
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false); // Hide loading spinner
      }
    };

    // Delay the API request with debounce (useEffect will only trigger when query changes)
    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 500); // 500ms debounce time

    // Clean up previous timeout before the next API request
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="flex flex-col items-center border h-full p-6">
      {/* Search Box */}
      <div className="flex items-center border border-gray-300 rounded-full p-3 w-80 sm:w-96 md:w-104 lg:w-120 xl:w-1/2 bg-gray-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
        <FaSearch className="text-gray-500 text-lg mr-3" />
        <input
          type="text"
          placeholder="Search for users..."
          value={query}
          onChange={handleSearchChange}
          className="flex-grow bg-transparent outline-none text-lg text-gray-700"
        />
      </div>

      {/* Search Info */}
      {query && (
        <div className="mt-4 text-gray-600 text-sm">
          Searching for: <strong className="text-blue-500">{query}</strong>
        </div>
      )}

      {/* Display Loading or Error */}
      {loading && <div className="mt-4 text-gray-500">Loading...</div>}
      {error && <div className="mt-4 text-red-500">{error}</div>}

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-6 w-full">
          <div className="font-semibold text-xl mb-4">Search Results:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {results.map((user) => (
              <div
                key={user.id}
                className="flex flex-col items-center border p-4 rounded-lg bg-white shadow-md max-w-xs w-full"
              >
                <div className="w-20 h-20 mb-4">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src={user.profilpic}
                    alt={user.fullname}
                  />
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold">{user.fullname}</div>
                  <div className="text-gray-500">{user.username}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Searching;
