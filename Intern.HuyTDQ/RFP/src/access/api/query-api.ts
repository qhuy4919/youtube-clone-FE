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
    item: ({ video_id }: any) => {
      const url = `${process.env.REACT_APP_API_URL}/video/${video_id}`;
      return axiosClient.get(url);
    },
  },
};
