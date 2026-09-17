import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL?.trim();
const TOKEN = import.meta.env.VITE_TOKEN?.trim();



const api = axios.create({
    baseURL:`${BASE_URL}`,
    headers: {
        'Content-Type':"application/json",
        'Authorization': `Bearer ${TOKEN}`,
    },
})
export default api;