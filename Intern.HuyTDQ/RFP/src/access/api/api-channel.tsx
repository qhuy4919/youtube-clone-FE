import axiosClient from "./axios-client";

const API_channel = {
  getChannel: ({ channelId }: any) => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
    return axiosClient.get(url);
  },
};

export default API_channel;
