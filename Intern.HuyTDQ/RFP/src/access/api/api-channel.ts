import axiosClient from './axios-client';
export const QueryChannel = {
  list: ({ channelId }: any) => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
    return axiosClient.get(url);
  },
};
