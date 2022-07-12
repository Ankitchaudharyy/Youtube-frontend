import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from './styles/VideoCardStyles.module.css';

function VideoCard() {
    return (
        <Card
            style={{
                margin: "15px 10px",
                boxShadow: "none",
                marginBottom: "30px"
            }}
            className={styles.card}
        >
            <CardMedia
                style={{ marginLeft: "-12px" }}
                component="img"
                height="60%"
                width="100%"
                image=""
                alt="green iguana"
            />
            <CardContent>
                <div className={styles.videoTitle}>
                    <img
                        src=''
                        alt="logo"
                        style={{ marginLeft: "-10px" }}
                        className={styles.channelLogo}
                    />
                    <div className={styles.title}>
                        {`Title dxgfchj Lorem ipsum someting else also and hbsbfhgl`.split(" ").slice(0, 17).join(" ").concat(" ...")}
                        <div className={styles.channelName}>
                            Channel Name
                            <br />
                            115K views
                            &bull;
                            1 year ago
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default VideoCard