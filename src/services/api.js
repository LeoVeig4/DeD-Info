import axios from "axios";

const apiUrl = "https://www.dnd5eapi.co/api/";

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use(async (config) => {
  return config;
});

export default api;
