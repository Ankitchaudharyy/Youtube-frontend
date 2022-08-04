import axios from 'axios';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const youtubeAPI = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 30,
        key: KEY
    }
})

export { youtubeAPI }