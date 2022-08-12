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
    width: '350px',
    height: '250px',
    bgcolor: 'background.paper',
    p: 4,
    outline: 0
};

const SpeechToTextModal = forwardRef(({ open, handleClose }, ref) => {

    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const handleMicClick = () => {
        if (listening === false)
            SpeechRecognition.startListening();
        else
            SpeechRecognition.stopListening();
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={() => handleClose(transcript)}
            >
                <Box sx={style}>
                    <CloseIcon className={styles.close} onClick={() => handleClose(transcript)} />
                    <Typography variant="h5" component="h2">
                        {transcript === '' ? listening ?  'Listening...' : 'Click on mic to search.' : null}
                        <span ref={ref}>{transcript}</span>
                    </Typography>
                    <MicIcon className={`${styles.micIcon} `.concat(listening ? styles.micOn : styles.micOff)} onClick={handleMicClick} />
                </Box>
            </Modal>
        </div>
    )
}
)

export default SpeechToTextModal