import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './styles/VideoCardStyles.module.css';
import { useNavigate } from 'react-router';
import Thumbnail from '../thumbnail/Thumbnail';
import VideoDetails from '../videoDetails/VideoDetails';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


function VideoCard({ video }) {
    let navigate = useNavigate();

    const navigateToVideoPlayer = () => navigate(`/video/${video.id}`, { state: { video: video } })

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
            <Thumbnail thumbnailUrl={video.thumbnailUrl} height="70%"/>
            <CardContent>
                <div className={styles.cardContent}>
                    <VideoDetails video={video} width='300px'/>
                    <div className={styles.threeDotsIcon}>
                        <MoreVertOutlinedIcon fontSize="medium" sx={{ stroke: "#ffffff" }} />
                    </div>
                </div>
            </CardContent>
        </Card >
    )
}

export default VideoCard