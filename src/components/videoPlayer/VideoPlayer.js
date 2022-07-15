import React, { useContext, useEffect } from 'react'
import { ShowMenuContext } from '../../context/SideMenuContext'
import { useParams } from 'react-router-dom';
import styles from './styles/VideoPlayerStyles.module.css';
import VideoSuggestions from '../videoSuggestions/VideoSuggestions';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import VideoActions from './VideoActions/VideoActions';

function VideoPlayer() {
    const { setShowMenu } = useContext(ShowMenuContext);
    const { videoId } = useParams();
    const videoDetails = useLocation().state.video;

    useEffect(() => setShowMenu(false), [setShowMenu])

    console.log(videoId)

    return (
        <div className={styles.videoPlayer}>
            <div className={styles.videoHolder}>
                <iframe
                    id="ytplayer"
                    title="yt-player"
                    type="text/html"
                    src={`https://www.youtube.com/embed/` + videoId + `?autoplay=1&origin=http://example.com`}
                    frameBorder="0"
                    controls="0"
                    disablekb="1"
                    className={styles.ytPlayer}
                >
                </iframe>
                <Typography variant="h5" gutterBottom component="div" className={styles.videoTitle}>
                    {videoDetails.title}
                </Typography>
                <div className={styles.fixItLater}>
                    <div className={styles.viewsAndDate}>
                        {videoDetails.views} views
                        &nbsp; &bull; &nbsp;
                        {videoDetails.publishedWhen}
                    </div>
                    <div><VideoActions /> </div>
                </div>
            </div>
            <VideoSuggestions />
        </div>
    )
}

export default VideoPlayer