// Example: src/components/Shared/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  try {
    const { user } = useAuth();
    console.log("Navbar user:", user);
    return (
      <nav>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/user">My Panel</Link>
            {user.role === "admin" && <Link to="/admin">Admin</Link>}
            <LogoutButton />
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    );
  } catch (err) {
    console.error("Navbar render error:", err);
    return <div style={{ color: "red" }}>Navbar error: {String(err.message)}</div>;
  }
}