import queryString from 'query-string';
import axiosClient from './axios-client';

export const Query = {
  channel: {
    list: ({ channelId }: any) => {
      const url = `https://youtube.googleapis.com/youtube/v3/channels?id=${channelId}`;
      return axiosClient.get(url);
    },
  },
  video: {
    list: (filter: any) => {
      const param = queryString.stringify(filter);
      const url = `${process.env.REACT_APP_API_URL}/video?${param}`;
      return axiosClient.get(url);
    },
    item: (videoId: any) => {
      const url = `${process.env.REACT_APP_API_URL}/trending/${videoId}`;
      return axiosClient.get(url);
    },
  },
  trending: {
    list: (filter?: any) => {
      const param = queryString.stringify(filter);
      // const url = `https://youtube.googleapis.com/youtube/v3/videos?`;
      const url = `${process.env.REACT_APP_API_URL}/trending?${param}`;
      const config = {
        params: {
          // chart: 'mostPopular',
        },
      };
      return axiosClient.get(url, config);
    },
  },
};
