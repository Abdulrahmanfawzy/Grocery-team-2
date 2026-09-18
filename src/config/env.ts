export const env = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://round-grocery.huma-volve.com/api',
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Grocery App',
} as const
