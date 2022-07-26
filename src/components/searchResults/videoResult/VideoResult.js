import React from 'react';
import Thumbnail from '../../thumbnail/Thumbnail';
import VideoDetails from '../../videoDetails/VideoDetails';
import styles from './styles/VideoResultStyles.module.css';
import { useNavigate } from 'react-router';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function VideoResult({ videoDetails }) {
    let navigate = useNavigate();

    const navigateToVideoPlayer = () => navigate(`/video/${videoDetails.id}`, { state: { video: videoDetails } })

    return (
        <div className={styles.videoResult} onClick={navigateToVideoPlayer}>
            <div className={styles.thumbnail}>
                <Thumbnail thumbnailUrl={videoDetails.thumbnailUrl} height="90%" />
            </div>
            <div className={styles.videoDetails}>
                <VideoDetails video={videoDetails} hideDescription={true} width="60%" />
            </div>
            <div className={styles.threeDotsIcon}>
                <MoreVertOutlinedIcon fontSize="medium" sx={{ stroke: "#ffffff" }} />
            </div>
        </div>
    )
}

export default VideoResult