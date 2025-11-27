// src/services/authService.js
export const AUTH_KEY = "movieapp_user";
export function saveUser(u){ localStorage.setItem(AUTH_KEY, JSON.stringify(u)); }
export function getUser(){ try { const r = localStorage.getItem(AUTH_KEY); return r ? JSON.parse(r) : null; } catch { localStorage.removeItem(AUTH_KEY); return null; } }
export function clearUser(){ localStorage.removeItem(AUTH_KEY); }