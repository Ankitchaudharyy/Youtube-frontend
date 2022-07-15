import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import { actionIcons } from './ActionIcons';
import Tooltip from '@mui/material/Tooltip';
import styles from './styles/VideoActionsStyles.module.css'

function VideoActions() {
    return (
        <div className={styles.videoActions}>
            {
                actionIcons.map((actionIcon,index)=>{
                    return (
                        <div key={index} className={styles.videoActionItem}>
                            {/* <Tooltip title={actionIcon.toolTipText} placement="bottom"> */}
                                {actionIcon.outlinedIcon} 
                                <span className={styles.iconName}>{actionIcon.name}</span>
                            {/* </Tooltip> */}
                        </div>
                    )
                })
            }
            <MoreHorizIcon />
        </div>
    )
}

export default VideoActions