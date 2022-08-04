import { youtubeAPI } from "./YoutubeAPIService";

const extractComments = async (videoId) => {
    const response = await youtubeAPI.get('/commentThreads', {
        params: {
            videoId: videoId,
            order: 'relevance'
        }
    })
    return response;
}

export { extractComments }