import axiosClient from './axios-client';
import queryString from 'query-string';

export const QueryVideo = {
  list: (filter: any) => {
    const param = queryString.stringify(filter);
    const url = `${process.env.REACT_APP_API_URL}/video?${param}`;
    return axiosClient.get(url);
  },
  item: ({ video_id }: any) => {
    const url = `${process.env.REACT_APP_API_URL}/video/${video_id}`;
    return axiosClient.get(url);
  },
};
