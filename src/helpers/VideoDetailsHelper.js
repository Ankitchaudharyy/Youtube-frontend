import { randomViews } from './ViewsGeneratorHelper';
import { dateDifference } from './DateDifferenceHelper';

const getVideoDetails = (videosData) => {
    return videosData.map(video => {
        return {
            title: video.snippet.title,
            channelTitle: video.snippet.channelTitle,
            thumbnailUrl: video.snippet.thumbnails.medium.url,
            views: randomViews(),
            publishedAt: dateDifference(video.snippet.publishedAt)
        }
    })
}

export { getVideoDetails }