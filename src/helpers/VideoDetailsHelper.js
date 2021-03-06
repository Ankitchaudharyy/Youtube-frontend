import { randomViews } from './RandomNumbersHelper';
import { dateDifference , formatDateInMMDDYY } from './DateFormatHelper';

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
                publishedWhen: dateDifference(video.snippet.publishedAt),
                publishedDate: formatDateInMMDDYY(video.snippet.publishedAt),
                description : video.snippet.description
            }
        })
        .slice(0, 24)
}

export { getVideoDetails }