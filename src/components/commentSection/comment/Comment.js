import React from 'react';
import styles from './styles/CommentStyles.module.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const Comment = ({comment, handleLike, index}) => {

    return (
        <div className={styles.comment}>
            <div className={styles.authorProfileImage}>
                <img
                    alt="Icn"
                    src={comment.authorProfileImageURL}
                    style={{ width: 40, height: 40, borderRadius: "50%" }}
                />
            </div>
            <div className={styles.commentData}>
                <div className={styles.authorName}>
                    {comment.authorName}
                    <span className={styles.publishedWhen}>
                        {comment.publishedWhen}
                    </span>
                </div>
                <div className={styles.commentText} dangerouslySetInnerHTML={{ __html: comment.text }}>
                </div>
                <div className={styles.commentActions}>
                    {comment.liked === false ?
                        <ThumbUpOutlinedIcon fontSize='small' onClick={() => handleLike(index)} /> :
                        <ThumbUpIcon fontSize='small' sx={{ stroke: "black" }} onClick={() => handleLike(index)} />}
                    <span>
                        {comment.likes !== 0 && comment.likes}
                        &nbsp;
                    </span>
                    <ThumbDownOffAltIcon fontSize='small' />
                    REPLY
                </div>
            </div>
            <div className={styles.threeDotsIcon}>
                <MoreVertOutlinedIcon fontSize="medium" sx={{ stroke: "#ffffff" }} />
            </div>
        </div>
    )
}

export default Comment