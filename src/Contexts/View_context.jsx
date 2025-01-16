// ViewContext.jsx
import React, { createContext, useState, useCallback } from "react";

const ViewContext = createContext();

export function ViewProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserDataByUsername = useCallback((username) => {
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
  }, []);

  return (
    <ViewContext.Provider
      value={{ userData, loading, error, fetchUserDataByUsername }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export default ViewContext;
