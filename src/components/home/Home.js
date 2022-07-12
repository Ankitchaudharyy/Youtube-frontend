import React, { useContext } from 'react'
import { ShowMenuContext } from '../../context/SideMenuContext';
import VideoCard from '../videoCard/VideoCard';
import styles from './styles/HomeStyles.module.css';

function Home() {

    const { showMenu } = useContext(ShowMenuContext)

    console.log(showMenu)

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