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
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import CellTowerIcon from '@mui/icons-material/CellTower';
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

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

const subscriptionOptions = [
    ['Music', <LibraryMusicIcon />, <LibraryMusicOutlinedIcon />],
    ['Sports', <EmojiEventsIcon />, <EmojiEventsOutlinedIcon />],
    ['Gaming', <SportsEsportsIcon />, <SportsEsportsOutlinedIcon />],
    ['Movies', <LocalMoviesIcon />, <LocalMoviesOutlinedIcon />]
]

const moreOptions = [
    ['Youtube Premium', <PlayCircleFilledWhiteIcon />, <PlayCircleOutlineOutlinedIcon />],
    ['Movies', <LocalMoviesIcon />, <LocalMoviesOutlinedIcon />],
    ['Gaming', <SportsEsportsIcon />, <SportsEsportsOutlinedIcon />],
    ['Live', <CellTowerIcon />,<CellTowerOutlinedIcon />],
    ['Fashion & Beauty', <DryCleaningIcon />, <DryCleaningOutlinedIcon />],
    ['Learning', <LightbulbIcon />, <LightbulbOutlinedIcon />],
    ['Sports', <EmojiEventsIcon />, <EmojiEventsOutlinedIcon />]
]

const settingOptions = [
    ['Settings', <SettingsIcon />, <SettingsOutlinedIcon />],
    ['Report History', <FlagIcon />, <EmojiFlagsIcon />],
    ['Help', <HelpIcon />, <HelpOutlineOutlinedIcon />],
    ['Send Feedback', <FeedbackIcon />, <FeedbackOutlinedIcon />]
]

export {
    homeOptions,
    activityOptions,
    subscriptionOptions,
    moreOptions,
    settingOptions
}
