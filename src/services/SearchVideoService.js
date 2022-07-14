import axios from 'axios';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const youtubeSearch = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY
    }
})

const fetchVideos = async (searchText) => {
    const response = await youtubeSearch.get('/search', {
        params: {
            q: searchText
        }
    })
    return response;
}

export { fetchVideos }

