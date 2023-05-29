import axios from "axios";

const apiUrlPrivate = "http://127.0.0.1:3000";

const apiprivate = axios.create({
  baseURL: apiUrlPrivate,
});

apiprivate.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("userToken");
  if (token) config.headers.authorization = `${token}`;
  return config;
});

export default apiprivate;
