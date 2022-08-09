import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MicIcon from '@mui/icons-material/Mic';
import styles from './styles/SpeechToTextModalStyles.module.css';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '2%',
    left: '50%',
    transform: 'translate(-50%, 0%)',
    width: '400px',
    height: '300px',
    bgcolor: 'background.paper',
    p: 4,
    outline: 0
};

function SpeechToTextModal({ open, handleClose }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography variant="h5" component="h2">
                        Listening...
                    </Typography>
                    <CloseIcon className={styles.close} onClick={handleClose} />
                    <MicIcon className={styles.micIcon} />
                </Box>
            </Modal>
        </div>
    )
}

export default SpeechToTextModal