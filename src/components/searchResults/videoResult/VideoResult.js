import React from 'react';
import Thumbnail from '../../thumbnail/Thumbnail';
import VideoDetails from '../../videoDetails/VideoDetails';
import styles from './styles/VideoResultStyles.module.css';

function VideoResult({ videoDetails }) {
    return (
        <div className={styles.videoResult}>
            <div className={styles.thumbnail}>
                <Thumbnail thumbnailUrl={videoDetails.thumbnailUrl} height="90%" />
            </div>
            <div className={styles.videoDetails}>
                <VideoDetails video={videoDetails} hideDescription={true} width="60%" />
            </div>
        </div>
    )
}

export default VideoResult