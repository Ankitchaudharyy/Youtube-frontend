import React, { useRef } from 'react'
import Typography from '@mui/material/Typography';
import styles from './styles/ChannelDetailsStyles.module.css';
import { randomSubscribers } from '../../helpers/RandomNumbersHelper';

function ChannelDetails({ thumbnailUrl, channelTitle }) {

    const subscribeBtn = useRef(null);

    const onSubscribe = () => {
        subscribeBtn.current.style.backgroundColor = "rgb(211, 211, 211, 0.5)";
        subscribeBtn.current.style.color = "gray";
        subscribeBtn.current.style.border = "1px solid rgb(211, 211, 211, 0.5)";
        subscribeBtn.current.innerHTML = "SUBSCRIBED";
        subscribeBtn.current.style.cursor = "default";
    };

    return (
        <div className={styles.channelDetailsBar}>
            <div className={styles.channelDetails}>
                <img src={thumbnailUrl} className={styles.channelLogo} alt="channnel logo" />
                <div className={styles.textDetails}>
                    <Typography variant="h7" gutterBottom component="div" className={styles.channelTitle} >
                        {channelTitle}
                    </Typography>
                    <Typography variant="h7" gutterBottom component="div" className={styles.channelSubscribers} >
                        {randomSubscribers()} Subscribers
                    </Typography>
                </div>
            </div>
            <button className={styles.subscribeBtn} ref={subscribeBtn} onClick={onSubscribe}>
                SUBSCRIBE
            </button>
        </div>
    )
}

export default ChannelDetails