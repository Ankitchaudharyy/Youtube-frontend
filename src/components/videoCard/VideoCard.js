import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { formatVideoTitle } from '../../helpers/FormatTextHelper';
import styles from './styles/VideoCardStyles.module.css';

function VideoCard({ video }) {
    return (
        <Card
            style={{
                margin: "15px 10px",
                boxShadow: "none",
                marginBottom: "30px",
                paddingBottom: "25px",
                backgroundColor: "rgb(211, 211, 211, 0.1)"
            }}
            className={styles.card}
        >
            <CardMedia
                style={{
                    marginLeft: "-12px"
                }}
                component="img"
                height="70%"
                width="100%"
                image={video.thumbnailUrl}
                alt="green iguana"
            />
            <CardContent>
                <div className={styles.videoDetails}>
                    <div className={styles.videoTitle}>
                        <img
                            src={video.thumbnailUrl}
                            alt="logo"
                            style={{
                                marginLeft: "-10px",
                                borderRadius: "50%",
                                height: "20px",
                                width: "20px"
                            }}
                            className={styles.channelLogo}
                        />
                        <div className={styles.title}>
                            {formatVideoTitle(video.title)}
                            <div className={styles.channelName}>
                                {video.channelName}
                                {video.views} views
                                &nbsp; &bull; &nbsp;
                                {video.publishedAt}
                            </div>
                        </div>
                    </div>
                    <div className={styles.moreVert}>
                        <MoreVertOutlinedIcon  />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default VideoCard