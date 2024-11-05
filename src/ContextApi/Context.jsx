import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Create Context
const AuthContext = createContext();

// Create a Provider Component
export const AuthProvider = ({ children }) => {
  const [loggedIn,setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  let navi = useNavigate()


  // const [user,setUser] = useState()

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserData(null)
    setIsLoggedIn(false)
    navi('/')
  };
  const user = (userdata) => {
setUserData(userdata)
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, userData, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
