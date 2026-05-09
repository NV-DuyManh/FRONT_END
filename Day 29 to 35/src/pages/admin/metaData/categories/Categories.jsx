import React, { useState } from 'react';
import ModalCategory from './ModalCategory';
import Search from "../../../../components/admin/Search";
import { addDocument, updateDocument } from '../../../../services/firebaseService';
import TableCategory from './TableCategory';
const inner = { name: "", description: "" };
function Categories(props) {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(inner);
    const [error, setError] = useState(inner);
    const [loading, setLoading] = useState(false);

    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleClickOpen = () => {
        setOpen(true);
        setCategory(inner);
        setError(inner);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const validation = () => {
        const newError = {};
        newError.name = category.name ? "" : "Please enter your name";
        newError.description = category.description ? "" : "Please enter your description";
        setError(newError);
        return Object.values(newError).some(e => e !== "");
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

    const onChangeInput = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Search
                name={"List Categories"}
                tuKhoa={"Search Category"}
                handleClickOpen={handleClickOpen}
                onChangeSearch={onChangeSearch}
            />
            <ModalCategory
                addCategory={addCategory}
                onChangeInput={onChangeInput}
                open={open}
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
                search={search}
            />
        </div>
    );
}

export default Categories;