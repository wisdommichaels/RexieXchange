import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the auth context data
interface AuthContextType {
  authUser: Record<string, unknown> | null;
  setAuthUser: React.Dispatch<React.SetStateAction<Record<string, unknown> | null>>;
}

// Create the context with a default value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the AuthContext
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }
  return context;
};

// Define the props for the provider
interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  // Parse the authUser from localStorage, defaulting to null if unavailable
  const [authUser, setAuthUser] = useState<Record<string, unknown> | null>(
    () => JSON.parse(localStorage.getItem("authUser") || "null")
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
