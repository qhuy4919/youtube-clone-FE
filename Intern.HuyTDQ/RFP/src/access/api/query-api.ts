import axiosClient from './axios-client';
import queryString from 'query-string';
import { QueryChannel } from './api-channel'

export const Query = {
    channel: QueryChannel,
    playlist: {
        getList: (filter: any) => {
          const param = queryString.stringify(filter);
          const url = `${process.env.REACT_APP_API_URL}/video?${param}`;
          return axiosClient.get(url);
        },
        getSingleItem: ({ video_id }: any) => {
          const url = `${process.env.REACT_APP_API_URL}/video/${video_id}`;
          return axiosClient.get(url);
        },
    }
}
