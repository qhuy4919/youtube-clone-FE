import axiosClient from './axiosClient'
import queryString from 'query-string';

const API_Playlist = {
    getPlaylist : (data: any) =>{
        const paramString = queryString.stringify(data);
        const url = `https://www.googleapis.com/youtube/v3/playlists?${paramString}`;
        return axiosClient(url);
    }
}

export default API_Playlist;
