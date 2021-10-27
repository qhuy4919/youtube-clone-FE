import axiosClient from './axios-client';
import queryString from 'query-string';

const API_Playlist = {
  getPlaylist: (filter: any) => {
    const param = queryString.stringify(filter);
    const url = `${process.env.REACT_APP_API_URL}/video?${param}`;
    return axiosClient.get(url);
  },
  getPlaylistItem: ({ video_id }: any) => {
    const url = `${process.env.REACT_APP_API_URL}/video/${video_id}`;
    return axiosClient.get(url);
  },
};

export default API_Playlist;
