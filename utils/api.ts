// import axios from "axios";

// const API = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL, // reads from next.config.js
// });

// // ✅ Optional: add auth token if needed (for admin routes)
// API.interceptors.request.use((config) => {
//   if (typeof window !== "undefined") {
//     const token = localStorage.getItem("token");
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default API;

import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api", // fallback for local dev
});

// ✅ Optional: attach token for protected/admin routes
API.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
