import React, { useState, useEffect } from 'react';
import { extractComments } from './../../services/ExtractCommentService';
import { getCommentDetails } from '../../helpers/CommentDetailsHelper';
import styles from './styles/CommentsStyles.module.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
// import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        extractComments('cXoC2OeLlvQ')
            .then(response => {
                setComments(getCommentDetails(response.data.items));
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleLike = (index) => {
        if (comments[index].liked === false) {
            console.log(comments);
            setComments([...comments.slice(0, index),
            {
                ...comments[index],
                liked: true,
                likes: comments[index].likes + 1
            },
            ...comments.slice(index + 1)
            ]);
            console.log(comments);
        }
        else {
            setComments([...comments.slice(0, index),
            {
                ...comments[index],
                liked: false,
                likes: comments[index].likes - 1
            },
            ...comments.slice(index + 1)
            ]);
        }
    }

    return (
        <div className={styles.commentSection}>
            <div className={styles.commentsHeading}>
                30 Comments
            </div>
            {
                comments.map((comment, index) => {
                    return <div className={styles.comment}>
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
                })
            }
        </div>
    )
}

export default Comments