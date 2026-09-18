import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL?.trim();

interface ApiErrorResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

const api = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response) {
      const errorData = error.response.data as ApiErrorResponse;
      const message = errorData.message || "An error occurred";
      const validationErrors = errorData.errors;

      const apiError = new Error(message) as Error & {
        status?: number;
        errors?: Record<string, string[]>;
      };
      apiError.status = error.response.status;
      apiError.errors = validationErrors;

      return Promise.reject(apiError);
    }
    return Promise.reject(error);
  }
);

export default api;
