import { randomViews } from './ViewsGeneratorHelper';
import { dateDifference } from './DateDifferenceHelper';

const getVideoDetails = (videosData) => {
    return videosData.filter(video => {
        return video.id.videoId !== undefined
    })
    .map(video => {
        return {
            title: video.snippet.title,
            channelTitle: video.snippet.channelTitle,
            thumbnailUrl: video.snippet.thumbnails.high.url,
            id: video.id.videoId,
            views: randomViews(),
            publishedAt: dateDifference(video.snippet.publishedAt)
        }
    })
    .slice(0, 24)
}

export { getVideoDetails }