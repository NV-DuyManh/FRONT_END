import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalDelete({ handleClose, open, handleDeleted, titleDelete, contentDelete }) {
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
            <DialogTitle className="modal-header-x" style={{ background: 'linear-gradient(90deg, #ef4444, #ec4899)' }}>
                {titleDelete}
            </DialogTitle>

            <DialogContent className="modal-body-x">
                <DialogContentText style={{ color: '#e5e7eb', paddingTop: '10px', fontSize: '16px' }}>
                    {contentDelete}
                </DialogContentText>
                <DialogContentText style={{ color: '#9ca3af', paddingTop: '4px', fontSize: '13px' }}>
                    This action cannot be undone.
                </DialogContentText>
            </DialogContent>

            <DialogActions className="modal-actions-x">
                <Button onClick={handleClose} className="btn-neutral-x">
                    Cancel
                </Button>
                <Button onClick={handleDeleted} className="btn-danger-x">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}