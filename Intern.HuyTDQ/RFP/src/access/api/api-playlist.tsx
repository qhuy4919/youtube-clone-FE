import axiosClient from "./axios-client";
const API_Playlist = {
  getPlaylist: () => {
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLgpbcP4VA7D6JGNS2MZvWnYtH-eQpUslg&maxResults=20&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
    return axiosClient.get(url);
  },
  getPlaylistItem: ({ video_id }: any) => {
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLgpbcP4VA7D6JGNS2MZvWnYtH-eQpUslg&videoId=${video_id}&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
    return axiosClient.get(url);
  },
};

export default API_Playlist;
