import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/api/',
  timeout: 10000,
  withCredentials: true,
});

export default axiosInstance