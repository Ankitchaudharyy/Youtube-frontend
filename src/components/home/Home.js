import React, { useContext, useEffect, useState } from 'react'
import { ShowMenuContext } from '../../context/SideMenuContext';
import FilterBar from '../filterBar/FilterBar';
import VideoCard from '../videoCard/VideoCard';
import styles from './styles/HomeStyles.module.css';
import { fetchVideos } from '../../services/SearchVideoService';
import { getVideoDetails } from './../../helpers/VideoDetailsHelper';
import { FilterContext } from '../../context/FilterBarContext';

function Home() {
    const [videosData, setVideosData] = useState([]);
    const [filter] = useContext(FilterContext)

    useEffect(() => {
        fetchVideos(filter === "All" ? "random" : filter)
            .then(response => {
                setVideosData(getVideoDetails(response.data.items))
            }).catch(err => {
                console.log(err);
            })
    }, [filter])

    const { showMenu } = useContext(ShowMenuContext)

    return (
        <div className={styles.mainBody}>
            <FilterBar />
            <div className={`${styles.home} `.concat(showMenu ? `${styles.collapsedHomePage}` : `${styles.expandedHomePage}`)}>
                {
                    videosData.map((video, index) => {
                        return <VideoCard key={index} video={video} />
                    })
                }
            </div>
        </div>
    );
}

export default Home