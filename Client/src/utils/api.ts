import axios from "axios";
import { api_url } from "./constants";

const api = axios.create({
  baseURL: api_url,
});

// Interceptor to add Bearer token to requests
api.interceptors.request.use((config) => {
  const token  = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
  }
  return config; // Return the modified config
}, (error) => {
  return Promise.reject(error); // Handle errors
});

export default api;