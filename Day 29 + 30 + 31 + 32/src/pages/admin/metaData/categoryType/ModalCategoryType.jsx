import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCategoryType({
    open,
    onChangeInput,
    handleClose,
    addCategoryType
}) {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
            >
                <DialogTitle>{"Add Category Type"}</DialogTitle>

                <DialogContent>
                    <TextField
                        name='name'
                        onChange={onChangeInput}
                        fullWidth
                        sx={{ mt: 2 }}
                        label="Type Name"
                        variant="outlined"
                    />

                    <TextField
                        name='description'
                        onChange={onChangeInput}
                        fullWidth
                        sx={{ mt: 2 }}
                        multiline
                        rows={3}
                        label="Description"
                        variant="outlined"
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Disagree
                    </Button>
                    <Button onClick={addCategoryType}>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}