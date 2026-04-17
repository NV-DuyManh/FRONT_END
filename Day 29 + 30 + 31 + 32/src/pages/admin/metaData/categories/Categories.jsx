import React, { useState } from 'react';
import ModalCategory from './ModalCategory';
import Search from "../../../../components/admin/Search";
import { addDocument, updateDocument } from '../../../../services/firebaseService';
import TableCategory from './TableCategory';
const inner = { name: "", description: "" };
function Categories(props) {
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = useState(inner);
    const [error, setError] = useState(inner);
    const [loading, setLoading] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        setCategory(inner);
        setError(inner);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onChangeInput = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }

    const validation = () => {
        const newError = {};
        newError.name = category.name ? "" : "Please enter your name";
        newError.description = category.description ? "" : "Please enter your description";
        setError(newError);
        return Object.values(newError).some(e => e !== "");  // true => co loi 
    }
    const addCategory = async () => {
        if (validation()) {
            return;
        }
        setLoading(true);
        !category.id ? await addDocument("Categories", category) : await updateDocument("Categories", category);
        handleClose();
        setLoading(false);
    }

    return (
        <div>
            <Search
                open={open}
                name={"Categories"}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose} />
            <ModalCategory
                addCategory={addCategory}
                onChangeInput={onChangeInput}
                open={open}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                error={error}
                loading={loading}
                category={category}
            />
            <TableCategory
                setCategory={setCategory}
                handleClickOpen={handleClickOpen}
                category={category}
            />
        </div>
    );
}

export default Categories;