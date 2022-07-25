import React from 'react'
import styles from './styles/ChannelResultStyles.module.css'
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';


function ChannelResult({ channelDetails }) {
    console.log(channelDetails);
    return (
        <div className={styles.channelResult}>
            <div className={styles.thumbnail}>
                <Avatar
                    alt="Thumbnail"
                    src={channelDetails.thumbnailUrl}
                    sx={{ width: 150, height: 150, margin: '20px auto' }}
                />
            </div>
            <div className={styles.textDetails}>
                    <Typography variant="h6" gutterBottom component="div" className={styles.channelTitle} >
                        {channelDetails.title}
                    </Typography>
                    <Typography variant="h7" gutterBottom component="div" className={styles.channelSubscribers} >
                        {channelDetails.subscribers} subscribers &nbsp; &bull; &nbsp; {channelDetails.videos} videos
                    </Typography>
                    <Typography variant="h7" gutterBottom component="div" className={styles.channelDescription} >
                        {channelDetails.description}
                    </Typography>
            </div>
        </div>
    )
}

export default ChannelResult