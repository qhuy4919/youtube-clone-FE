import axios from 'axios';
import queryString from 'query-string';
import { toast } from 'react-toastify';

// const cancelTokenSource = axios.CancelToken.source();

const axiosClient = axios.create({
  headers: {
    // 'content-type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
  },
  timeout: 30000,
  paramsSerializer: (params) => queryString.stringify(params),
  params: {
    part: ['snippet,contentDetails,statistics'],
    key: `${process.env.REACT_APP_YOUTUBE_KEY}`,
  },
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    // if (response && response.data) {
    //   return response.data;
    // }
    return response;
  },
  (error) => {
    toast.error('not found', {
      position: 'top-right',
    });
  }
);

export default axiosClient;
