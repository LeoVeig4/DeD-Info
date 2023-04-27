import axios from "axios";

const apiUrl = "https://www.dnd5eapi.co/api/";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
