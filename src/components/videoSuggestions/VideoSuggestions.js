import React, { useState, useEffect } from 'react'
import styles from './styles/VideoSuggestionsStyles.module.css';
import { fetchVideos } from '../../services/SearchVideoService';
import { getVideoDetails } from '../../helpers/VideoDetailsHelper';
import { Tooltip } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useNavigate } from 'react-router';

function VideoSuggestions({ videoDetails }) {
    let navigate = useNavigate();

    const navigateToVideoPlayer = (video) => navigate(`/video/${video.id}`, { state: { video: video } })

    const [videoSuggestions, setVideoSuggestions] = useState([]);

    useEffect(() => {
        const getVideos = async (word) => {
            await fetchVideos(word)
                .then(response => {
                    setVideoSuggestions([...videoSuggestions, ...getVideoDetails(response.data.items)])
                }).catch(err => {
                    console.log(err);
                })
        }
        const words = videoDetails.title.split(" ").slice(0, 3);

        for (var index = 0; index < 3; index++) {
            getVideos(words[index]);
        }
        // eslint-disable-next-line 
    }, [])

    return (
        <div className={styles.suggestions}>
            {
                videoSuggestions.map((video, index) => {
                    return <div
                        key={index}
                        className={styles.videoSuggestionCard}
                        onClick={() => navigateToVideoPlayer(video)}
                    >
                        <img
                            src={video.thumbnailUrl}
                            className={styles.Thumbnail}
                            alt="Thumbnail"
                        />
                        <div className={styles.videoDetails}>
                            <Tooltip
                                title={videoDetails.title}
                                placement="bottom-end">
                                <div className={styles.videoTitle}>
                                    {video.title}
                                </div>
                            </Tooltip>
                            <div className={styles.channelName}>
                                <Tooltip
                                    title={video.channelTitle}
                                    placement="bottom-start">
                                    <div style={{ marginBottom: "5px" }}>
                                        {video.channelTitle}
                                    </div>
                                </Tooltip>
                                {video.views} views
                                &nbsp; &bull; &nbsp;
                                {video.publishedWhen}
                            </div>
                        </div>
                        <div className={styles.threeDotsIcon}>
                            <MoreVertOutlinedIcon fontSize="medium" sx={{ stroke: "#ffffff" }} />
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default VideoSuggestions