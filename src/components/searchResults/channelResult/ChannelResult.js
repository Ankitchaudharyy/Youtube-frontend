import React from 'react'
import styles from './styles/ChannelResultStyles.module.css'
import { Avatar } from '@mui/material'

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
            <div>
                {channelDetails.title}
                {channelDetails.subscribers}
                {channelDetails.videos}
            </div>
        </div>
    )
}

export default ChannelResult