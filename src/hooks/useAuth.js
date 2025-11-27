// src/hooks/useAuth.js
import { useState, useEffect, useCallback } from "react";
import { getUser as getStoredUser, clearUser } from "../services/authService";

export default function useAuth() {
  const [user, setUser] = useState(() => {
    try { return getStoredUser(); } catch { return null; }
  });

  useEffect(() => {
    const onStorage = () => {
      try { setUser(getStoredUser()); } catch { setUser(null); }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = useCallback((u) => {
    try {
      localStorage.setItem("movieapp_user", JSON.stringify(u));
      setUser(u);
    } catch (e) {
      console.error("login failed", e);
    }
  }, []);

  const logout = useCallback(() => {
    try { clearUser(); setUser(null); } catch (e) { console.error(e); }
  }, []);

  return { user, login, logout };
}