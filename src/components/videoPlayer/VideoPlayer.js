import React, { useContext, useEffect } from 'react'
import { ShowMenuContext } from '../../context/SideMenuContext'
import { useParams } from 'react-router-dom';
import styles from './styles/VideoPlayerStyles.module.css';
import VideoSuggestions from '../videoSuggestions/VideoSuggestions';
import {useLocation} from 'react-router-dom';

function VideoPlayer() {
    const { setShowMenu } = useContext(ShowMenuContext);
    const { videoId } = useParams();
    const location = useLocation();
    console.log(location.state);

    useEffect(() => setShowMenu(false), [setShowMenu])

    console.log(videoId)

    return (
        <div className={styles.videoPlayer}>
            <iframe
                id="ytplayer"
                title="yt-player"
                type="text/html"
                src={`https://www.youtube.com/embed/` + videoId + `?autoplay=1&origin=http://example.com`}
                frameborder="0"
                controls="0"
                disablekb="1"
                className={styles.ytPlayer}
            >
            </iframe>
            <VideoSuggestions />
        </div>
    )
}

export default VideoPlayer