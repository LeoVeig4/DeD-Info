import axios from "axios";

const apiUrlPrivate = "https://appded.herokuapp.com/";

const apiprivate = axios.create({
  baseURL: apiUrlPrivate,
});

apiprivate.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("userToken");
  if (token) config.headers.authorization = `${token}`;
  return config;
});

export default apiprivate;
