// src/components/Auth/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();
  const submit = e => {
    e.preventDefault();
    const user = { email, role: "user" };
    login(user);
    nav("/");
  };
  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" />
      <button type="submit">Login</button>
    </form>
  );
}

