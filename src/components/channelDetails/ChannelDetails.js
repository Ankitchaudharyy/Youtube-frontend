import React from 'react'
import Typography from '@mui/material/Typography';
import styles from './styles/ChannelDetailsStyles.module.css';
import { randomSubscribers } from '../../helpers/RandomNumbersHelper';
import SubscribeButton from '../subscribeButton/SubscribeButton';

function ChannelDetails({ thumbnailUrl, channelTitle }) {
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
            <SubscribeButton />
        </div>
    )
}

export default ChannelDetails