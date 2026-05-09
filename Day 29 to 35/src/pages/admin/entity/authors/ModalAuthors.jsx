import * as React from 'react';
import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup, styled, TextField } from '@mui/material';
import Slide from '@mui/material/Slide';
import { FaCloudUploadAlt, FaSpinner } from 'react-icons/fa';
import { COUNTRIES } from '../../../../utils/Contants';

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

export default function ModalAuthors({ open, onChangeInput, handleClose, addauthor, error, loading, author, handleImageChange }) {
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
                {author.id ? "UPDATE AUTHOR" : "ADD AUTHOR"}
            </DialogTitle>

            <DialogContent className="modal-body-x">
                <TextField
                    className="modal-input-x"
                    name="name"
                    onChange={onChangeInput}
                    fullWidth
                    label="Name"
                    variant="outlined"
                    value={author.name}
                    helperText={error.name}
                    error={!!error.name}
                />
                
                <TextField
                    className="modal-input-x"
                    name="description"
                    onChange={onChangeInput}
                    fullWidth
                    multiline
                    rows={2}
                    label="Description"
                    variant="outlined"
                    value={author.description}
                    helperText={error.description}
                    error={!!error.description}
                />
                
                <Autocomplete
                    className="modal-input-x"
                    disablePortal
                    options={COUNTRIES}
                    fullWidth
                    PopperProps={{ placement: "top-end" }}
                    value={author.countriesID}
                    onChange={(e, value) => {
                        onChangeInput({ target: { name: "countriesID", value: value }, });
                    }}
                    renderInput={(params) => <TextField {...params} 
                        label="Country"
                        helperText={error.countriesID}
                        error={!!error.countriesID} />}
                />
                
                <FormControl className="gender-box-wrapper" error={!!error.sexID}>
                    <div className={`gender-box ${!!error.sexID ? 'error' : ''}`}>
                        <span className="gender-label">Gender</span>
                        
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="sexID"
                            sx={{ flexDirection: "row", width: '100%', justifyContent: 'space-around' }}
                            value={author.sexID}
                            onChange={onChangeInput}
                        >
                            <FormControlLabel value="Female" control={<Radio sx={{ color: !!error.sexID ? '#ef4444' : '#4ade80', '&.Mui-checked': { color: '#4ade80' } }} />} label="Female" sx={{ color: '#e5e7eb', margin: 0 }} />
                            <FormControlLabel value="Male" control={<Radio sx={{ color: !!error.sexID ? '#ef4444' : '#4ade80', '&.Mui-checked': { color: '#4ade80' } }} />} label="Male" sx={{ color: '#e5e7eb', margin: 0 }} />
                            <FormControlLabel value="Other" control={<Radio sx={{ color: !!error.sexID ? '#ef4444' : '#4ade80', '&.Mui-checked': { color: '#4ade80' } }} />} label="Other" sx={{ color: '#e5e7eb', margin: 0 }} />
                        </RadioGroup>
                    </div>
                    {error.sexID && <span className="gender-error-text">{error.sexID}</span>}
                </FormControl>

                <div className="upload-container">
                    <span className="upload-title">Author Photo</span>
                    <div className="relative w-36 h-36 rounded-full border-2 border-transparent hover:border-cyan-400 overflow-hidden group transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-black">
                        <img 
                            src={author.imgUrl} 
                            alt="Author Avatar" 
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
                <Button disabled={loading} onClick={addauthor} className="btn-submit-x">
                    {loading ? <FaSpinner className="spin text-xl" /> : author.id ? "UPDATE" : "ADD"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}