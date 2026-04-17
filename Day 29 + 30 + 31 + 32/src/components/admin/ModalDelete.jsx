import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ModalDelete({handleClose, open, handleDeleted}) {
  
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Delete"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       Are you sure you want to delete it?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Disagree
                    </Button>
                    <Button onClick={handleDeleted} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}



