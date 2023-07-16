import axios from "axios";

export const api = axios.create({
    baseURL: "https://backendfoodexplorer-owco.onrender.com"
});
