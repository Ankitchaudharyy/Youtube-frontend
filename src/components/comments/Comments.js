import React, { useState, useEffect } from 'react';
import { extractComments } from './../../services/ExtractCommentService';
import { getCommentDetails } from '../../helpers/CommentDetailsHelper';
import styles from './styles/CommentsStyles.module.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

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

    return (
        <div className={styles.commentSection}>
            {
                comments.map((comment, index) => {
                    return <div className={styles.comment}>
                        <div className={styles.authorProfileImage}>
                            <img
                                alt="Icn"
                                src={comment.authorProfileImageURL}
                                style={{ width: 40, height: 40, borderRadius: "50%"}}
                            />
                        </div>
                        <div className={styles.commentData}>
                            <div className={styles.authorName}>
                                {comment.authorName}
                                <span className={styles.publishedWhen}>
                                    {comment.publishedWhen}
                                </span>
                            </div>
                            <div className={styles.commentText} dangerouslySetInnerHTML={{__html: comment.text}}>
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