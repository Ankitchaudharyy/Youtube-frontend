import React from 'react';
import { Tooltip } from '@mui/material';
import styles from './styles/VideoDetailsStyles.module.css';

function VideoDetails({ video, hideDescription, width }) {

    return (
        <div className={styles.videoDetails} style={{ width: { width } }}>
            <Tooltip
                title={video.channelTitle}
                placement="bottom-start"
            >
                <img
                    src={video.thumbnailUrl}
                    alt="logo"
                    style={{
                        marginLeft: "-10px",
                        borderRadius: "50% 50% 50% 50%",
                        height: "20px",
                        width: "20px"
                    }}
                    className={styles.channelLogo}
                />
            </Tooltip>

            <div className={styles.videoMetaData}>
                <Tooltip
                    title={video.title}
                    placement="bottom-start"
                >
                    <div className={styles.videoTitle}>
                        {video.title}
                    </div>
                </Tooltip>
                <div className={styles.channelName}>
                    <Tooltip title={video.channelTitle} placement="bottom-start">
                        <div style={{ marginBottom: "5px" }}>
                            {video.channelTitle}
                        </div>
                    </Tooltip>
                    {video.views} views
                    &nbsp; &bull; &nbsp;
                    {video.publishedWhen}
                </div>
                {
                    hideDescription &&
                    <div className={styles.videoDescription}>
                        {video.description}
                    </div>
                }
            </div>
        </div>
    )
}

VideoDetails.defaultProps = {
    hideDescription: false
}

export default VideoDetails