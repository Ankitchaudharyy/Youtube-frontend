import React, { useState, useEffect } from 'react'
import styles from './styles/VideoSuggestionsStyles.module.css';
import { fetchVideos } from '../../services/SearchVideoService';
import { getVideoDetails } from '../../helpers/VideoDetailsHelper';
import VideoDetails from './../videoDetails/VideoDetails';

function VideoSuggestions({ videoDetails }) {
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

        console.log(words);

        for (var index = 0; index < 3; index++) {
            getVideos(words[index]);
        }
        // eslint-disable-next-line 
    }, [])

    return (
        <div className={styles.suggestions}>
            {
                videoSuggestions.map((video, index) => {
                    return <div key={index} className={styles.videoSuggestionCard}>
                        <img src={video.thumbnailUrl} className={styles.Thumbnail} alt="Thumbnail" />
                        <div className={styles.videoDetails}>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default VideoSuggestions