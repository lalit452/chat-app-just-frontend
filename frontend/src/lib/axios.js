import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://chat-app-just-backend.vercel.app/api",
    withCredentials: true, 
})    
