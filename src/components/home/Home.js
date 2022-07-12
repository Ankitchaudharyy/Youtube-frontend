import React, { useContext, useEffect, useState } from 'react'
import { ShowMenuContext } from '../../context/SideMenuContext';
import VideoCard from '../videoCard/VideoCard';
import styles from './styles/HomeStyles.module.css';
import { fetchVideos } from '../../services/SearchVideoService';

function Home() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos("react")
            .then(response => {
                setVideos(response.data.items)
            }).catch(err => {
                console.log(err);
            })
    }, [])

    const { showMenu } = useContext(ShowMenuContext)

    return (
        <div className={`${styles.home} `.concat(showMenu ? `${styles.collapsedHomePage}` : `${styles.expandedHomePage}`)}>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </div>

    )
}

export default Home