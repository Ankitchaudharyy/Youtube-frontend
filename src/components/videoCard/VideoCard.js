import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import styles from './styles/VideoCardStyles.module.css';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router';

function VideoCard({ video }) {
    let navigate = useNavigate();

    const navigateToVideoPlayer = () => navigate(`/video/${video.id}`,{state:{views : video.views, publishedWhen : video.publishedAt}})
    
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
            onClick={navigateToVideoPlayer}
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
                                <div className={styles.videoTitle}>
                                    {video.title}
                                </div>
                            </Tooltip>
                            <div className={styles.channelName}>
                                <Tooltip title={video.channelTitle} placement="bottom-start">
                                    <div style={{ marginBottom: "5px" }}>
                                        {video.channelTitle}
                                    </div>
                                </Tooltip>
                                {video.views} views
                                &nbsp; &bull; &nbsp;
                                {video.publishedWhen}
                            </div>
                        </div>
                    </div>
                    <div className={styles.threeDotsIcon}>
                        <MoreVertOutlinedIcon fontSize="medium" sx={{ stroke: "#ffffff" }} />
                    </div>
                </div>
            </CardContent>
        </Card >
    )
}

export default VideoCard