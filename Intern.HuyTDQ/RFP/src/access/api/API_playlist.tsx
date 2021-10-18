import axiosClient from './axiosClient'
import queryString from 'query-string';
const API_Playlist = {
    getPlaylist : (data: any) =>{
        console.log(process.env.REACT_APP_YOUTUBE_KEY);
        const paramString = queryString.stringify(data);        
        const url = `https://www.googleapis.com/youtube/v3/playlists?key=${process.env.REACT_APP_YOUTUBE_KEY}${paramString}`;
        return axiosClient(url);
    }
}

export default API_Playlist;
