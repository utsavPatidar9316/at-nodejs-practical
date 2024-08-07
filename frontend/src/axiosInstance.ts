import axios from "axios";

const BACKEND_URL = "http://localhost";
const API_BASE_URL = `${BACKEND_URL}:5000/api`;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  timeoutErrorMessage: "Timeout",
});

export const axiosAuth = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  timeoutErrorMessage: "Timeout",
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
