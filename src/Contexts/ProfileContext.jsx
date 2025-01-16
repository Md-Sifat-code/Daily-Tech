import React, { createContext, useState, useEffect } from "react";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = () => {
    const username = sessionStorage.getItem("username");
    if (username) {
      setLoading(true);
      fetch(`https://dailytech.onrender.com/User/search/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  };

  // Call fetchUserData whenever the component mounts (or on reload)
  useEffect(() => {
    fetchUserData();
  }, []); // Empty dependency array ensures this runs once when the component is mounted

  return (
    <ProfileContext.Provider
      value={{ userData, loading, error, fetchUserData }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileContext;
