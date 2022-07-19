import React, { useState, useEffect } from 'react'
import styles from './styles/VideoSuggestionsStyles.module.css';
import Thumbnail from '../thumbnail/Thumbnail';
import { fetchVideos } from '../../services/SearchVideoService';
import { getVideoDetails } from '../../helpers/VideoDetailsHelper';

function VideoSuggestions({ videoTitle }) {
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

        const words = videoTitle.split(" ").slice(0, 3);

        for (var index = 0; index < 3; index++) {
            getVideos(words[index]);
        }
    }, [])

    return (
        <div className={styles.suggestions}>
            {
                videoSuggestions.map((video, index) => {
                    return <Thumbnail thumbnailUrl={video.thumbnailUrl} />
                })
            }
        </div>
    )
}

export default VideoSuggestions