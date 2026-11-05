// Secure helpers for setting, retrieving, and clearing JWT tokens in browser storage
export const getToken = () => localStorage.getItem('campusiq_token');
export const setToken = (token) => localStorage.setItem('campusiq_token', token);
export const clearToken = () => localStorage.removeItem('campusiq_token');
