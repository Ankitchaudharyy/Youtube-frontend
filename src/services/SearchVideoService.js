import { youtubeAPI } from "./YoutubeAPIService";

const fetchVideos = async (searchText) => {
    const response = await youtubeAPI.get('/search', {
        params: {
            q: searchText
        }
    })
    return response;
}

export { fetchVideos }

