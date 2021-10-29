import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  headers: {
    'content-type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
  },

  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      throw error;
    }
  }
);

export default axiosClient;
