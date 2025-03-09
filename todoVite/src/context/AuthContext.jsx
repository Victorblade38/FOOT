import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence, // 🔹 Import this
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user") || null
  );
  const [loading, setLoading] = useState(true);
  console.log(currentUser);

  useEffect(() => {
    const checkuser = localStorage.getItem("user");
    if (checkuser) {
      setCurrentUser(checkuser);
    }
  }, []);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      localStorage.setItem("user", user);
      setCurrentUser(user);
      setLoading(false);
    });

    return unSubscribe;
  }, []);

  // 🔹 Apply Persistence Before Signing In
  const login = async (email, password) => {
    try {
      await setPersistence(auth, browserLocalPersistence); // ✅ Ensures session persists after refresh
      return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = (auth) => {
    return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    loginWithGoogle,
    currentUser,
    login,
    signUp,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
