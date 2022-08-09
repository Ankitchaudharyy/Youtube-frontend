import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MicIcon from '@mui/icons-material/Mic';
import styles from './styles/SpeechToTextModalStyles.module.css';
import CloseIcon from '@mui/icons-material/Close';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { forwardRef } from 'react';

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

const SpeechToTextModal = forwardRef(({ open, handleClose , speechText}, ref) => {

    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography variant="h5" component="h2">
                        {transcript === '' && speechText}
                        <span ref={ref}>{transcript}</span>
                    </Typography>
                    <CloseIcon className={styles.close} onClick={() => handleClose(transcript)} />
                    <MicIcon className={`${styles.micIcon} `.concat(listening ? styles.micOn : styles.micOff)} onClick={SpeechRecognition.startListening} />
                </Box>
            </Modal>
        </div>
    )
}
)

export default SpeechToTextModal