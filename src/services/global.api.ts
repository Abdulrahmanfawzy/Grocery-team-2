import axios from "axios";

// globale api
const AxiosInstance = axios.create({
    baseURL: "https://round-grocery.huma-volve.com/api",
    headers: {
        'Content-Type': 'application/json',
    },
});

export default AxiosInstance