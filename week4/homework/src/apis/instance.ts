import axios from "axios";

export const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["token"] = token;
    }
    return config;
});