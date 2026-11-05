// Central Axios HTTP client instance with base URL, timeouts, and auth interceptors
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor placeholder for attaching Bearer token
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

export default api;
