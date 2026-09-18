import axios from "axios";

export const apiClient = axios.create({
  baseURL: 'https://round-grocery.huma-volve.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
export default apiClient