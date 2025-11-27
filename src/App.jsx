// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
// ...other imports

export default function App() {
  return (
    <BrowserRouter>        {/* single router here if main.jsx doesn't include it */}
      {/* Navbar, ErrorBoundary, Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* ... */}
      </Routes>
    </BrowserRouter>
  );
}