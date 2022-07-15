import { randomViews } from './ViewsGeneratorHelper';
import { dateDifference , formatDateInMMDDYY } from './DateFormatHelper';

const getVideoDetails = (videosData) => {
    return videosData.filter(video => {
        return video.id.videoId !== undefined
    })
        .map(video => {
            console.log(formatDateInMMDDYY(video.snippet.publishedAt))
            return {
                title: video.snippet.title,
                channelTitle: video.snippet.channelTitle,
                thumbnailUrl: video.snippet.thumbnails.high.url,
                id: video.id.videoId,
                views: randomViews(),
                publishedWhen: dateDifference(video.snippet.publishedAt),
                publishedDate: formatDateInMMDDYY(video.snippet.publishedAt)
            }
        })
        .slice(0, 24)
}

export { getVideoDetails }