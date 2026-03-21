import { Box, Button, DialogActions, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
};
function ModalCategory({ open, handleClose, category, onchangInput, addCategory, error }) {


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
                        ADD CAREGORY
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
                            <Button onClick={addCategory} variant="contained" sx={{ mt: 2 }}>Add Category</Button>
                        </DialogActions>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalCategory;