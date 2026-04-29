import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import Slide from '@mui/material/Slide';
import { FaSpinner } from 'react-icons/fa';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCategory({open, onChangeInput, handleClose, addCategory, error, loading, category}) {
    return (
        <Dialog
            open={open}
            slots={{ transition: Transition }}
            keepMounted
            onClose={handleClose}
            className="modal-wrapper"
            PaperProps={{ className: "modal-inner" }}
            BackdropProps={{ className: "modal-backdrop-x" }}
        >
            <DialogTitle className="modal-header-x">
                {category.id ? "UPDATE CATEGORY" : "ADD CATEGORY"}
            </DialogTitle>

            <DialogContent className="modal-body-x">
                <TextField
                    className="modal-input-x"
                    name="name"
                    onChange={onChangeInput}
                    fullWidth
                    label="Name"
                    variant="outlined"
                    value={category.name}
                    helperText={error.name}
                    error={!!error.name}
                />
                <TextField
                    className="modal-input-x"
                    name="description"
                    onChange={onChangeInput}
                    fullWidth
                    multiline
                    rows={3}
                    label="Description"
                    variant="outlined"
                    value={category.description}
                    helperText={error.description}
                    error={!!error.description}
                />
            </DialogContent>

            <DialogActions className="modal-actions-x">
                <Button onClick={handleClose} className="btn-cancel-x">
                    Cancel
                </Button>
                <Button disabled={loading} onClick={addCategory} className="btn-submit-x">
                    {loading ? <FaSpinner className="spin" /> : category.id ? "UPDATE" : "ADD"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}