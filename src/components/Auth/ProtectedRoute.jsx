// src/components/Auth/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProtectedRoute({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/not-authorized" replace />;
  return children;
}