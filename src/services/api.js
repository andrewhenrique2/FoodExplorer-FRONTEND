import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocket-food-api.onrender.com"
});
