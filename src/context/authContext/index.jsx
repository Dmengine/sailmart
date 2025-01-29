import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return () => unsubscribe();
  }, []);

  function initializeUser(user) {
    if (user) {
      setCurrentUser(user);
      setIsEmailUser(user.providerData.some((provider) => provider.providerId === "password"));
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  return (
    <AuthContext.Provider value={{ userLoggedIn, isEmailUser, currentUser }}>
      {!loading && children} 
    </AuthContext.Provider>
  );
}
