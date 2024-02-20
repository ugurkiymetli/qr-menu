import React, { createContext, useContext, useState } from 'react';

// Define context interface
interface AuthContextType {
  authToken: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define AuthProvider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authToken, setAuthToken] = useState<string | null>(
    localStorage.getItem('authToken')
  );

  // Function to set authentication token and save it to local storage
  const login = (token: string) => {
    setAuthToken(token);
    localStorage.setItem('authToken', token);
  };

  // Function to clear authentication token from state and local storage
  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem('authToken');
  };

  // Function to check if user is authenticated
  const isAuthenticated = () => {
    return authToken !== null;
  };

  // Provide authentication context to child components
  return (
    <AuthContext.Provider value={{ authToken, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
