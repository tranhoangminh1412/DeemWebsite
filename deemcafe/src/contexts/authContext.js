// context/AuthContext.js
"use client"; // This line is required for Next.js 13+ when using client-side context

import React, { createContext, useContext, useState } from "react";

// Define the AuthContext with default values
const AuthContext = createContext({
  authenticated: false,
  setAuthenticated: () => {},
});

// Custom hook to access AuthContext
export const useAuthContext = () => useContext(AuthContext);

// AuthProvider component to wrap the app and manage state
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
