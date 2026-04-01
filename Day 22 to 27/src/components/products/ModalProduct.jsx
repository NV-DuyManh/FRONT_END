import React, { useContext } from 'react';
import { Autocomplete, Box, Button, DialogActions, Modal, styled, TextField, Typography } from '@mui/material';
import { CategoriesContext } from '../contexts/CategoryProvider';
import { FaFileDownload } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
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

const imgBasic = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-BPcBysZBVnPdOgx3wplIL6t1g9HbiAstUKFkgZkEauLdNIcS5N4bz8F6G5M68xcco_B1tcAyLEf6I8BuSeJocpsco88hdD32LNg3OX7JUazA7tE7bdHDYw7Y-gBR&usqp=CAc";
function ModalProduct({ open, handleClose, product, onchangInput, addProduct, error, handleInputImg, loading }) {
    const { categories } = useContext(CategoriesContext);
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
                        {!product.id ? "ADD PRODUCT" : "EDIT PRODUCT"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'div'}>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="col-span-1">
                                <TextField
                                    label="Name"
                                    fullWidth
                                    name='name'
                                    value={product.name}
                                    onChange={onchangInput}
                                    error={!!error.name}
                                    helperText={error.name}
                                    sx={{ mt: 2 }}
                                />
                                <TextField
                                    label="Price"
                                    fullWidth
                                    name='price'
                                    type="number"
                                    value={product.price}
                                    onChange={onchangInput}
                                    error={!!error.price}
                                    helperText={error.price}
                                    sx={{ mt: 2 }}
                                />

                                <Autocomplete
                                    disablePortal
                                    options={categories}
                                    getOptionLabel={(option) => option.name}
                                    onChange={(_, a) => {
                                        onchangInput({ target: { name: "categoryID", value: a ? a.id : "" } })
                                    }}
                                    fullWidth
                                    sx={{ mt: 2 }}
                                    renderInput={(params) => <TextField {...params} label="Movie" />}
                                />
                                <TextField
                                    label="Description"
                                    fullWidth
                                    multiline
                                    rows={2}
                                    name="description"
                                    sx={{ mt: 2 }}
                                    value={product.description}
                                    onChange={onchangInput}
                                    error={!!error.description}
                                    helperText={error.description}
                                />
                            </div>
                            <div className="col-span-1">
                                <Button
                                    component="label"
                                    variant="contained"
                                    tabIndex={-1}
                                    sx={{ mt: 2 }}
                                    startIcon={<FaFileDownload />}
                                >
                                    Upload files
                                    <VisuallyHiddenInput
                                        type="file"
                                        onChange={handleInputImg}
                                        multiple
                                    />
                                </Button>
                                <img className='mt-2' src={product.image || imgBasic} alt="" />
                            </div>
                        </div>


                        <DialogActions>
                            {loading ? <Button loading loadingPosition="start" startIcon={<AiOutlineLoading />}>
                                Save
                            </Button> : <Button onClick={addProduct} variant="contained" sx={{ mt: 2 }}>{!product.id ? "ADD" : "EDIT"}</Button>}

                        </DialogActions>
                    </Typography>
                </Box>
            </Modal>


        </div>
    );
}

export default ModalProduct;