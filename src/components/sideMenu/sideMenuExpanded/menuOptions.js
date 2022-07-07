import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import VideoStableOutlinedIcon from '@mui/icons-material/VideoStableOutlined';
import VideoStableIcon from '@mui/icons-material/VideoStable';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const homeOptions = [
    ['Home', <HomeIcon />, <HomeOutlinedIcon />],
    ['Explore', <ExploreIcon />, <ExploreOutlinedIcon />],
    ['Shorts', <VideoStableIcon />, <VideoStableOutlinedIcon />],
    ['Subscriptions', <SubscriptionsIcon />, <SubscriptionsOutlinedIcon />]
]

const activityOptions = [
    ['Library', <VideoLibraryIcon />, <VideoLibraryOutlinedIcon />],
    ['History', <HistoryIcon />, <HistoryOutlinedIcon />],
    ['Watch Later', <WatchLaterIcon />, <WatchLaterOutlinedIcon />],
    ['Liked Videos', <ThumbUpIcon />, <ThumbUpOutlinedIcon />]
]

export {
    homeOptions,
    activityOptions
}
