import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import styles from './styles/VideoCardStyles.module.css';
import { Tooltip } from '@mui/material';

function VideoCard({ video }) {
    return (
        <Card
            style={{
                margin: "15px 10px",
                boxShadow: "none",
                marginBottom: "30px",
                paddingBottom: "35px",
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
                <div className={styles.cardContent}>
                    <div className={styles.videoDetails}>
                        <Tooltip
                            title={video.channelTitle}
                            placement="bottom-start"
                        >
                            <img
                                src={video.thumbnailUrl}
                                alt="logo"
                                style={{
                                    marginLeft: "-10px",
                                    borderRadius: "50% 50% 50% 50%",
                                    height: "20px",
                                    width: "20px"
                                }}
                                className={styles.channelLogo}
                            />
                        </Tooltip>
                        <div className={styles.videoMetaData}>
                            <Tooltip
                                title={video.title}
                                placement="bottom-start"
                            >
                                <div className={styles.videoTitle} >
                                    {video.title}
                                </div>
                            </Tooltip>
                            <div className={styles.channelName}>
                                <Tooltip
                                    title={video.channelTitle}
                                    placement="bottom-start"
                                >
                                    <div style={{ marginBottom: "5px" }}>
                                        {video.channelTitle}
                                    </div>
                                </Tooltip>
                                {video.views} views
                                &nbsp; &bull; &nbsp;
                                {video.publishedAt}
                            </div>
                        </div>
                    </div>
                    <div className={styles.threeDotsIcon}>
                        <MoreVertOutlinedIcon />
                    </div>
                </div>
            </CardContent>
        </Card >
    )
}

export default VideoCard