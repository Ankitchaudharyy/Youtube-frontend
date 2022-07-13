import React, { useContext, useEffect, useState } from 'react'
import { ShowMenuContext } from '../../context/SideMenuContext';
import VideoCard from '../videoCard/VideoCard';
import styles from './styles/HomeStyles.module.css';
import { fetchVideos } from '../../services/SearchVideoService';
import {getVideoDetails} from './../../helpers/VideoDetailsHelper';

function Home() {

        const [videosData, setVideosData] = useState([]);

        useEffect(() => {
            fetchVideos("react")
                .then(response => {
                    setVideosData(getVideoDetails(response.data.items))
                }).catch(err => {
                    console.log(err);
                })
        }, [])

        const { showMenu } = useContext(ShowMenuContext)

        return (
            <div className={`${styles.home} `.concat(showMenu ? `${styles.collapsedHomePage}` : `${styles.expandedHomePage}`)}>
                {
                    videosData.map((video, index) => {
                        return <VideoCard key={index} video={video} />
                    })
                }
            </div>

        )
    }

export default Home