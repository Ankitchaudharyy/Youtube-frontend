import { dateDifference } from "./DateFormatHelper";

const getCommentDetails = (commentsData) => {
    return commentsData.map(comment => {
        return {
            id: comment.id,
            authorName: comment.snippet.topLevelComment.snippet.authorDisplayName,
            authorProfileImageURL: comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
            publishedWhen: dateDifference(comment.snippet.topLevelComment.snippet.publishedAt),
            text: comment.snippet.topLevelComment.snippet.textDisplay,
            likes: comment.snippet.topLevelComment.snippet.likeCount,
            liked: false
        }
    })
}

export { getCommentDetails }