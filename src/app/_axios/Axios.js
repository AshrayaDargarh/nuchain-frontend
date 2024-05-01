import axios from 'axios'

const BASE_URL='https://backend.nuchain.co'
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json", 
  },
});

export default axiosInstance;