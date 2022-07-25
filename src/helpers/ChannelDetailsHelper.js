import { randomSubscribers, randomVideos } from "./RandomNumbersHelper"

const getChannelDetails = (channelData) => {
    return channelData.filter(channel => {
        return channel.id.channelId !== undefined
    })
        .map(channel => {
            return {
                title: channel.snippet.title,
                thumbnailUrl: channel.snippet.thumbnails.high.url,
                id: channel.id.channelId,
                description: channel.snippet.description,
                subscribers: randomSubscribers(),
                videos: randomVideos()
            }
        })
}

export {
    getChannelDetails
}