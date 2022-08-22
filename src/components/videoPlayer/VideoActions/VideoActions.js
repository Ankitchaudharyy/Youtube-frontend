import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { actionIcons } from './ActionIcons';
import styles from './styles/VideoActionsStyles.module.css'

function VideoActions() {
    
    return (
        <div className={styles.videoActions}>
            {
                actionIcons.map((actionIcon, index) => {
                    return (
                        <div key={index} className={styles.videoActionItem}>
                            {actionIcon.filledIcon}
                            <span className={styles.iconName}> {actionIcon.name} </span>
                            <span className={styles.tooltiptext}> {actionIcon.toolTipText} </span>
                        </div>
                    )
                })
            }
            {/* <MoreHorizIcon className={styles.moreHorizon}/> */}
        </div>
    )
}

export default VideoActions