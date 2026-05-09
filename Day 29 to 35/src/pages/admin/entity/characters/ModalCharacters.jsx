import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, styled, TextField } from '@mui/material';
import Slide from '@mui/material/Slide';
import { FaCloudUploadAlt, FaSpinner } from 'react-icons/fa';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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

export default function ModalCharacters({ open, onChangeInput, handleClose, addcharacter, error, loading, character, handleImageChange }) {
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
                {character.id ? "UPDATE CHARACTER" : "ADD CHARACTER"}
            </DialogTitle>

            <DialogContent className="modal-body-x">
                <TextField
                    className="modal-input-x"
                    name="name"
                    onChange={onChangeInput}
                    fullWidth
                    label="Name"
                    variant="outlined"
                    value={character.name}
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
                    value={character.description}
                    helperText={error.description}
                    error={!!error.description}
                />
                
                <TextField
                    className="modal-input-x"
                    name="roleType"
                    onChange={onChangeInput}
                    fullWidth
                    label="Role"
                    variant="outlined"
                    value={character.roleType}
                    helperText={error.roleType}
                    error={!!error.roleType}
                />

                <div className="upload-container">
                    <span className="upload-title">Character Photo</span>
                    <div className="relative w-36 h-36 rounded-full border-2 border-transparent hover:border-cyan-400 overflow-hidden group transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-black">
                        <img 
                            src={character.imgUrl} 
                            alt="Character Avatar" 
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-30" 
                        />
                        <Button component="label" className="absolute! inset-0! w-full! h-full! min-w-0! !p-0! rounded-full! cursor-pointer">
                            <VisuallyHiddenInput type="file" onChange={handleImageChange} accept="image/*" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <FaCloudUploadAlt className="text-4xl text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] mb-1" />
                                <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider">Upload</span>
                            </div>
                        </Button>
                    </div>
                </div>

            </DialogContent>

            <DialogActions className="modal-actions-x">
                <Button onClick={handleClose} className="btn-cancel-x">
                    Cancel
                </Button>
                <Button disabled={loading} onClick={addcharacter} className="btn-submit-x">
                    {loading ? <FaSpinner className="spin text-xl" /> : character.id ? "UPDATE" : "ADD"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}