import { getVideoDetails } from './VideoDetailsHelper';
import { getChannelDetails } from './ChannelDetailsHelper';

const getSearchDetails = (searchResults) => {
    return {
        videos: getVideoDetails(searchResults),
        channels: getChannelDetails(searchResults)
    }
}

export {
    getSearchDetails
}