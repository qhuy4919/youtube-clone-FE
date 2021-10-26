import axiosClient from "./axios-client";
const API_Playlist = {
  getPlaylist: () => {
    const url = `${process.env.REACT_APP_API_URL}/posts`;
    return axiosClient.get(url);
  },
  getPlaylistItem: ({ video_id }: any) => {
    const url = `${process.env.REACT_APP_API_URL}/posts/${video_id}`;
    return axiosClient.get(url);
  },
};

export default API_Playlist;
