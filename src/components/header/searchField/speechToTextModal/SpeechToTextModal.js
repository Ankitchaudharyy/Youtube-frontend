import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default SpeechToTextModal