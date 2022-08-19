import React, { useState, useEffect } from 'react';
import { extractComments } from '../../services/ExtractCommentService';
import { getCommentDetails } from '../../helpers/CommentDetailsHelper';
import styles from './styles/CommentSectionStyles.module.css';
import Comment from './comment/Comment';
// import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

function CommentSection() {
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
                    return <Comment key={index} comment={comment} handleLike={handleLike} index={index}/>
                })
            }
        </div>
    )
}

export default CommentSection