import React from 'react'
import Typography from '@mui/material/Typography';
import styles from './styles/ChannelDetailsStyles.module.css';

function ChannelDetails({ thumbnailUrl, channelTitle }) {
    return (
        <div className={styles.channelDetails}>
            <img src={thumbnailUrl} className={styles.channelLogo} alt="channnel logo" />
            <Typography variant="h7" gutterBottom component="div" className={styles.channelTitle} >
                {channelTitle}
            </Typography>
        </div>
    )
}

export default ChannelDetails