import axios from 'axios';

const apiEndpoint = process.env.ENDPOINT;

// Replace with your API endpoint
const axiosInstance = axios.create({
  baseURL: apiEndpoint,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
