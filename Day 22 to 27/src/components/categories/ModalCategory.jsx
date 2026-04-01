import { Box, Button, DialogActions, Modal, TextField, Typography, styled } from '@mui/material';import { AiOutlineLoading } from 'react-icons/ai';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: '90vh',
    overflowY: 'auto'
};
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
function ModalCategory({ open, handleClose, category, onchangInput, addCategory, error, loading }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {!category.id ? "ADD CATEGORY" : "EDIT CATEGORY"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Name"
                            fullWidth
                            name='name'
                            value={category.name}
                            onChange={onchangInput}
                            error={!!error.name}
                            helperText={error.name}
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Description"
                            fullWidth
                            multiline
                            rows={2}
                            name="description"
                            sx={{ mt: 2 }}
                            value={category.description}
                            onChange={onchangInput}
                            error={!!error.description}
                            helperText={error.description}
                        />
                        <DialogActions>
                            {loading ?
                                <Button loading loadingPosition="start" startIcon={<AiOutlineLoading />}>
                                    Save
                                </Button> :
                                <Button onClick={addCategory} variant="contained" sx={{ mt: 2 }}>
                                    {!category.id ? "ADD" : "EDIT"}
                                </Button>}

                        </DialogActions>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalCategory;